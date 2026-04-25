export default function Privacy() {
  return (
    <main style={{maxWidth: '720px', margin: '0 auto', padding: '40px 24px', fontFamily: 'system-ui, sans-serif', color: '#374151', lineHeight: 1.7}}>
      <h1 style={{fontSize: '32px', marginBottom: '24px'}}>Política de Privacidad</h1>
      <p style={{color: '#6B7280', fontSize: '14px', marginBottom: '32px'}}>Última actualización: abril 2026</p>

      <h2 style={{fontSize: '20px', marginTop: '24px', marginBottom: '12px'}}>1. Información que recopilamos</h2>
      <p>AgendaYa recopila únicamente la información necesaria para operar el servicio: nombre del negocio, número de WhatsApp, email, servicios ofrecidos y datos de citas (nombre de la clienta, servicio, fecha y hora).</p>

      <h2 style={{fontSize: '20px', marginTop: '24px', marginBottom: '12px'}}>2. Cómo usamos la información</h2>
      <p>La información se usa exclusivamente para gestionar el servicio de agenda automatizada por WhatsApp, enviar recordatorios y generar reportes para el dueño del negocio.</p>

      <h2 style={{fontSize: '20px', marginTop: '24px', marginBottom: '12px'}}>3. Compartir información</h2>
      <p>No vendemos, alquilamos ni compartimos información personal con terceros. Solo usamos servicios técnicos necesarios para operar (Vercel, Supabase, Meta WhatsApp Business API).</p>

      <h2 style={{fontSize: '20px', marginTop: '24px', marginBottom: '12px'}}>4. Seguridad</h2>
      <p>Protegemos los datos con cifrado en tránsito (HTTPS) y en reposo. El acceso al panel está protegido por contraseña.</p>

      <h2 style={{fontSize: '20px', marginTop: '24px', marginBottom: '12px'}}>5. Tus derechos</h2>
      <p>Puedes solicitar acceso, modificación o eliminación de tus datos en cualquier momento. Al cancelar tu cuenta, tus datos se eliminan en 30 días.</p>

      <h2 style={{fontSize: '20px', marginTop: '24px', marginBottom: '12px'}}>6. WhatsApp Business API</h2>
      <p>AgendaYa usa la API oficial de WhatsApp Business de Meta. Los mensajes se procesan según las políticas de privacidad de Meta/WhatsApp.</p>

      <h2 style={{fontSize: '20px', marginTop: '24px', marginBottom: '12px'}}>7. Contacto</h2>
      <p>Para consultas sobre esta política de privacidad, contáctanos por WhatsApp al +51 913 276 046.</p>
    </main>
  )
}