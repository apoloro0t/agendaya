import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://dzrkbtksjgxqcmqgnbbc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6cmtidGtzamd4cWNtcWduYmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzOTQzNDIsImV4cCI6MjA5MTk3MDM0Mn0.zP5c4xRc9VRnZFu5SBWz7tE47KL-qfzB8tbT6VGoJnw'
)

const SERVICIOS = {
  '1': 'Corte',
  '2': 'Tinte',
  '3': 'Peinado',
  '4': 'Manicure'
}

export async function procesarMensaje(telefono, mensaje, phoneNumberId) {
  const texto = mensaje.toLowerCase().trim()

  console.log('📱 Telefono:', telefono)
  console.log('💬 Texto:', texto)

  // Buscar el salón por phone number ID
  const { data: salon } = await supabase
    .from('salones')
    .select('*')
    .eq('telefono_bot', phoneNumberId)
    .maybeSingle()

  const salonId = salon?.id || null
  const salonNombre = salon?.nombre || 'Salón AgendaYa'

  const MENU = `Hola! Bienvenida a *${salonNombre}* 💅\n\nNuestros servicios:\n1️⃣ Corte - S/30\n2️⃣ Tinte - S/80\n3️⃣ Peinado - S/40\n4️⃣ Manicure - S/25\n\nEscribe *agendar* para reservar tu cita`

  const { data: conv } = await supabase
    .from('conversaciones')
    .select('*')
    .eq('telefono', telefono)
    .maybeSingle()

  const paso = conv?.paso || 'inicio'
  console.log('📍 Paso actual:', paso)

  if (texto === 'hola' || texto === 'hi' || texto === 'buenas') {
    await supabase.from('conversaciones').upsert(
      { telefono, paso: 'inicio' },
      { onConflict: 'telefono' }
    )
    return MENU
  }

  if (texto === 'agendar') {
    await supabase.from('conversaciones').upsert(
      { telefono, paso: 'eligiendo_servicio' },
      { onConflict: 'telefono' }
    )
    return `¿Qué servicio quieres?\n\n1️⃣ Corte - S/30\n2️⃣ Tinte - S/80\n3️⃣ Peinado - S/40\n4️⃣ Manicure - S/25\n\nEscribe el número (1, 2, 3 o 4)`
  }

  if (paso === 'eligiendo_servicio') {
    const nombreServicio = SERVICIOS[texto]
    if (!nombreServicio) return 'Por favor escribe 1, 2, 3 o 4 para elegir tu servicio'

    const { data: servicioDb } = await supabase
      .from('servicios')
      .select('id, nombre, precio')
      .eq('nombre', nombreServicio)
      .single()

    if (!servicioDb) return 'Error al buscar el servicio. Escribe *agendar* para intentar de nuevo.'

    await supabase.from('conversaciones').upsert(
      { telefono, paso: 'eligiendo_fecha', servicio_id: servicioDb.id },
      { onConflict: 'telefono' }
    )
    return `Elegiste *${servicioDb.nombre}* - S/${servicioDb.precio} ✅\n\n¿Qué día quieres tu cita?\nEscribe la fecha así: *2026-04-25*`
  }

  if (paso === 'eligiendo_fecha') {
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!fechaRegex.test(texto)) return 'Escribe la fecha así: *2026-04-25*'

    await supabase.from('conversaciones').upsert(
      { telefono, paso: 'eligiendo_hora', fecha: texto },
      { onConflict: 'telefono' }
    )
    return `Fecha: *${texto}* ✅\n\n¿A qué hora quieres tu cita?\nEscribe la hora así: *10:00*`
  }

  if (paso === 'eligiendo_hora') {
    const horaRegex = /^\d{2}:\d{2}$/
    if (!horaRegex.test(texto)) return 'Escribe la hora así: *10:00*'

    await supabase.from('citas').insert({
      cliente_telefono: telefono,
      servicio_id: conv.servicio_id,
      fecha: conv.fecha,
      hora: texto,
      estado: 'pendiente',
      salon_id: salonId
    })

    await supabase.from('conversaciones').delete().eq('telefono', telefono)

    return `✅ *Cita confirmada!*\n\nFecha: ${conv.fecha}\nHora: ${texto}\n\nTe esperamos en *${salonNombre}*! 💅`
  }

  return MENU
}