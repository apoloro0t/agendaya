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

const MENU = `Hola! Bienvenida a *Salón AgendaYa* 💅\n\nNuestros servicios:\n1️⃣ Corte - S/30\n2️⃣ Tinte - S/80\n3️⃣ Peinado - S/40\n4️⃣ Manicure - S/25\n\nEscribe *agendar* para reservar tu cita`

export async function procesarMensaje(telefono, mensaje) {
  const texto = mensaje.toLowerCase().trim()
  
  console.log('📱 Telefono:', telefono)
  console.log('💬 Texto:', texto)

  const { data: conv, error } = await supabase
    .from('conversaciones')
    .select('*')
    .eq('telefono', telefono)
    .maybeSingle()

  const paso = conv?.paso || 'inicio'
  console.log('📍 Paso actual:', paso)

  // Siempre responde al hola
  if (texto === 'hola' || texto === 'hi' || texto === 'buenas') {
    await supabase.from('conversaciones').upsert(
      { telefono, paso: 'inicio' },
      { onConflict: 'telefono' }
    )
    return MENU
  }

  // Inicia el flujo de agenda
  if (texto === 'agendar') {
    await supabase.from('conversaciones').upsert(
      { telefono, paso: 'eligiendo_servicio' },
      { onConflict: 'telefono' }
    )
    return `¿Qué servicio quieres?\n\n1️⃣ Corte - S/30\n2️⃣ Tinte - S/80\n3️⃣ Peinado - S/40\n4️⃣ Manicure - S/25\n\nEscribe el número (1, 2, 3 o 4)`
  }

  // Elige servicio
  if (paso === 'eligiendo_servicio') {
    const nombreServicio = SERVICIOS[texto]
    if (!nombreServicio) {
      return 'Por favor escribe 1, 2, 3 o 4 para elegir tu servicio'
    }

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

  // Elige fecha
  if (paso === 'eligiendo_fecha') {
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!fechaRegex.test(texto)) {
      return 'Escribe la fecha así: *2026-04-25*'
    }

    await supabase.from('conversaciones').upsert(
      { telefono, paso: 'eligiendo_hora', fecha: texto },
      { onConflict: 'telefono' }
    )
    return `Fecha: *${texto}* ✅\n\n¿A qué hora quieres tu cita?\nEscribe la hora así: *10:00*`
  }

  // Elige hora
  if (paso === 'eligiendo_hora') {
    const horaRegex = /^\d{2}:\d{2}$/
    if (!horaRegex.test(texto)) {
      return 'Escribe la hora así: *10:00*'
    }

    const { error: citaError } = await supabase.from('citas').insert({
      cliente_telefono: telefono,
      servicio_id: conv.servicio_id,
      fecha: conv.fecha,
      hora: texto,
      estado: 'pendiente'
    })

    if (citaError) return 'Error al guardar la cita. Escribe *agendar* para intentar de nuevo.'

    await supabase.from('conversaciones').delete().eq('telefono', telefono)

    return `✅ *Cita confirmada!*\n\nFecha: ${conv.fecha}\nHora: ${texto}\n\nTe esperamos! 💅\n\nEscribe *hola* para ver nuestros servicios de nuevo.`
  }

  // Respuesta por defecto
  return MENU
}