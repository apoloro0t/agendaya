import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://dzrkbtksjgxqcmqgnbbc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6cmtidGtzamd4cWNtcWduYmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzOTQzNDIsImV4cCI6MjA5MTk3MDM0Mn0.zP5c4xRc9VRnZFu5SBWz7tE47KL-qfzB8tbT6VGoJnw'
)

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN
const PHONE_ID = process.env.PHONE_ID

async function enviarMensaje(telefono, mensaje) {
  await fetch(`https://graph.facebook.com/v25.0/${PHONE_ID}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: telefono,
      type: 'text',
      text: { body: mensaje }
    })
  })
}

export async function enviarRecordatorios() {
  const manana = new Date()
  manana.setDate(manana.getDate() + 1)
  const fechaManana = manana.toISOString().split('T')[0]

  console.log('📅 Buscando citas para:', fechaManana)

  const { data: citas } = await supabase
    .from('citas')
    .select('*, servicios(nombre), salones(nombre)')
    .eq('fecha', fechaManana)
    .eq('estado', 'pendiente')

  if (!citas || citas.length === 0) {
    console.log('Sin citas para mañana')
    return
  }

  console.log(`📨 Enviando ${citas.length} recordatorios`)

  for (const cita of citas) {
    const mensaje = `Hola! 💅 Te recordamos que mañana tienes una cita en *${cita.salones?.nombre || 'tu salón'}*.\n\n📅 Fecha: ${cita.fecha}\n⏰ Hora: ${cita.hora?.slice(0,5)}\n✂️ Servicio: ${cita.servicios?.nombre}\n\nEscribe *confirmar* para confirmar o *cancelar* para cancelar.`

    await enviarMensaje(cita.cliente_telefono, mensaje)
    console.log('✅ Recordatorio enviado a:', cita.cliente_telefono)
  }
}