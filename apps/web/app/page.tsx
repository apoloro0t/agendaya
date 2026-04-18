export default function Home() {
  return (
    <main style={{fontFamily: "'Georgia', serif", background: '#faf7f4', minHeight: '100vh', color: '#1a1a1a'}}>

      {/* Hero */}
      <section style={{padding: '80px 24px 60px', maxWidth: '440px', margin: '0 auto', textAlign: 'center'}}>
        <div style={{display: 'inline-block', background: '#f7426f', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', letterSpacing: '2px', marginBottom: '24px', fontFamily: 'monospace', color: 'white'}}>
          PARA SALONES DE BELLEZA
        </div>
        <h1 style={{fontSize: '52px', fontWeight: '700', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-1px', color: '#1a1a1a'}}>
          Agenda<span style={{color: '#f7426f'}}>Ya</span>
        </h1>
        <p style={{fontSize: '18px', color: '#7a6a5a', lineHeight: '1.6', marginBottom: '40px'}}>
          Tu clienta agenda por WhatsApp. Tú solo atiendes.
        </p>
        <a href="/registro" style={{display: 'inline-block', background: '#f7426f', color: 'white', padding: '16px 40px', borderRadius: '40px', fontSize: '16px', fontWeight: '600', textDecoration: 'none', letterSpacing: '0.5px'}}>
          Empieza gratis →
        </a>
        <p style={{color: '#a89a8a', fontSize: '13px', marginTop: '16px'}}>Sin tarjeta · 14 días gratis</p>
      </section>

      {/* Divider */}
      <div style={{height: '1px', background: '#ede8e3', maxWidth: '440px', margin: '0 auto'}}/>

     {/* Problemas */}
      <section style={{padding: '60px 24px', maxWidth: '440px', margin: '0 auto'}}>
        <p style={{color: '#b09a8a', fontSize: '12px', letterSpacing: '2px', marginBottom: '32px', fontFamily: 'monospace'}}>¿TE SUENA FAMILIAR?</p>
        {[
          ['01', 'Respondes WhatsApp mientras atiendes a tus clientas'],
          ['02', 'Clientas que agendan y luego no llegan'],
          ['03', 'Pierdes citas en la noche porque no puedes contestar'],
          ['04', 'No sabes cuánto ganaste hasta fin de semana'],
        ].map(([num, texto]) => (
          <div key={num} style={{display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '20px', padding: '18px 20px', border: '1px solid #ede8e3', borderRadius: '12px', background: 'white'}}>
            <span style={{color: '#f7426f', fontSize: '12px', fontFamily: 'monospace', paddingTop: '2px', minWidth: '20px', fontWeight: '600'}}>{num}</span>
            <p style={{color: '#5a4a3a', fontSize: '15px', margin: 0, lineHeight: '1.5'}}>{texto}</p>
          </div>
        ))}
      </section>

      {/* Cómo funciona */}
      <section style={{padding: '60px 24px', maxWidth: '440px', margin: '0 auto', background: '#f4efe9'}}>
        <p style={{color: '#b09a8a', fontSize: '12px', letterSpacing: '2px', marginBottom: '32px', fontFamily: 'monospace'}}>CÓMO FUNCIONA</p>
        {[
          ['01', 'Tu clienta escribe', 'Manda un WhatsApp y el bot responde al instante, 24/7'],
          ['02', 'Elige su cita', 'Selecciona servicio, fecha y hora en segundos'],
          ['03', 'Tú recibes la cita', 'Aparece en tu panel lista. Sin hacer nada.'],
        ].map(([num, titulo, desc]) => (
          <div key={num} style={{display: 'flex', gap: '20px', marginBottom: '32px'}}>
            <span style={{color: '#f7426f', fontSize: '13px', fontFamily: 'monospace', paddingTop: '2px', minWidth: '24px'}}>{num}</span>
            <div>
              <p style={{fontWeight: '600', fontSize: '16px', margin: '0 0 6px', color: '#1a1a1a'}}>{titulo}</p>
              <p style={{color: '#7a6a5a', fontSize: '14px', margin: 0, lineHeight: '1.5'}}>{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Planes */}
      <section style={{padding: '60px 24px', maxWidth: '440px', margin: '0 auto'}}>
        <p style={{color: '#b09a8a', fontSize: '12px', letterSpacing: '2px', marginBottom: '32px', fontFamily: 'monospace'}}>PLANES</p>

        {/* Free */}
        <div style={{border: '1px solid #ede8e3', borderRadius: '16px', padding: '24px', marginBottom: '16px', background: 'white'}}>
          <p style={{color: '#a89a8a', fontSize: '13px', margin: '0 0 8px'}}>Free</p>
          <p style={{fontSize: '36px', fontWeight: '700', margin: '0 0 4px', color: '#1a1a1a'}}>S/0<span style={{fontSize: '14px', color: '#a89a8a', fontWeight: '400'}}>/mes</span></p>
          <p style={{color: '#a89a8a', fontSize: '13px', margin: '0 0 20px'}}>Hasta 15 citas al mes</p>
          {['Bot de WhatsApp', 'Agenda automática', 'Panel de citas'].map((f, i) => (
            <p key={i} style={{color: '#7a6a5a', fontSize: '14px', margin: '0 0 8px'}}>— {f}</p>
          ))}
          <a href="/registro" style={{display: 'block', textAlign: 'center', border: '1px solid #ede8e3', color: '#7a6a5a', padding: '12px', borderRadius: '10px', marginTop: '20px', textDecoration: 'none', fontSize: '14px'}}>
            Empezar gratis
          </a>
        </div>

        {/* Básico */}
        <div style={{border: '1px solid #ede8e3', borderRadius: '16px', padding: '24px', marginBottom: '16px', background: 'white'}}>
          <p style={{color: '#a89a8a', fontSize: '13px', margin: '0 0 8px'}}>Básico</p>
          <p style={{fontSize: '36px', fontWeight: '700', margin: '0 0 4px', color: '#1a1a1a'}}>S/39<span style={{fontSize: '14px', color: '#a89a8a', fontWeight: '400'}}>/mes</span></p>
          <p style={{color: '#a89a8a', fontSize: '13px', margin: '0 0 20px'}}>50 citas al mes</p>
          {['Todo del plan Free', 'Recordatorios automáticos', 'Historial de clientas'].map((f, i) => (
            <p key={i} style={{color: '#7a6a5a', fontSize: '14px', margin: '0 0 8px'}}>— {f}</p>
          ))}
          <a href="/registro" style={{display: 'block', textAlign: 'center', border: '1px solid #ede8e3', color: '#7a6a5a', padding: '12px', borderRadius: '10px', marginTop: '20px', textDecoration: 'none', fontSize: '14px'}}>
            Elegir Básico
          </a>
        </div>

        {/* Premium */}
        <div style={{border: '2px solid #f7426f', borderRadius: '16px', padding: '24px', background: '#fff8f9'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
            <p style={{color: '#f7426f', fontSize: '13px', margin: 0}}>Premium</p>
            <span style={{background: '#f7426f', color: 'white', fontSize: '10px', padding: '3px 10px', borderRadius: '20px', letterSpacing: '1px'}}>POPULAR</span>
          </div>
          <p style={{fontSize: '36px', fontWeight: '700', margin: '0 0 4px', color: '#1a1a1a'}}>S/69<span style={{fontSize: '14px', color: '#a89a8a', fontWeight: '400'}}>/mes</span></p>
          <p style={{color: '#a89a8a', fontSize: '13px', margin: '0 0 20px'}}>Citas ilimitadas</p>
          {['Todo del plan Básico', 'Citas ilimitadas', 'Reportes de ingresos', 'Soporte prioritario', 'Bot personalizado'].map((f, i) => (
            <p key={i} style={{color: '#5a4a3a', fontSize: '14px', margin: '0 0 8px'}}>— {f}</p>
          ))}
          <a href="/registro" style={{display: 'block', textAlign: 'center', background: '#f7426f', color: 'white', padding: '14px', borderRadius: '10px', marginTop: '20px', textDecoration: 'none', fontSize: '14px', fontWeight: '600'}}>
            Elegir Premium →
          </a>
        </div>
      </section>

      {/* Footer */}
      <section style={{padding: '40px 24px 60px', maxWidth: '440px', margin: '0 auto', textAlign: 'center', borderTop: '1px solid #ede8e3'}}>
        <p style={{color: '#a89a8a', fontSize: '14px', marginBottom: '8px'}}>¿Tienes dudas?</p>
        <a href="https://wa.me/51999999999" style={{color: '#f7426f', fontSize: '15px', fontWeight: '600', textDecoration: 'none'}}>
          Escríbenos por WhatsApp →
        </a>
      </section>

    </main>
  )
}