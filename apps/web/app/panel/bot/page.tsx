'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ConfigBot() {
  const [salon, setSalon] = useState<any>(null)
  const [config, setConfig] = useState({
    nombre_asistente: '',
    mensaje_bienvenida: '',
    horario: '',
    direccion: ''
  })
  const [servicios, setServicios] = useState<any[]>([])
  const [nuevoServicio, setNuevoServicio] = useState({ nombre: '', precio: '' })
  const [loading, setLoading] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    const salonData = localStorage.getItem('salon')
    if (!salonData) { window.location.href = '/login'; return }
    const s = JSON.parse(salonData)
    setSalon(s)
    cargarDatos(s.id)
  }, [])

  async function cargarDatos(salonId: string) {
    const { data: configData } = await supabase
      .from('config_salon')
      .select('*')
      .eq('salon_id', salonId)
      .maybeSingle()

    if (configData) {
      setConfig({
        nombre_asistente: configData.nombre_asistente || '',
        mensaje_bienvenida: configData.mensaje_bienvenida || '',
        horario: configData.horario || '',
        direccion: configData.direccion || ''
      })
    }

    const { data: serviciosData } = await supabase
      .from('servicios_salon')
      .select('*')
      .eq('salon_id', salonId)
      .eq('activo', true)
      .order('created_at', { ascending: true })

    if (serviciosData) setServicios(serviciosData)
    setLoading(false)
  }

  async function guardarConfig() {
    setGuardando(true)
    await supabase.from('config_salon').upsert({
      salon_id: salon.id,
      ...config
    }, { onConflict: 'salon_id' })
    setMensaje('✅ Configuración guardada')
    setTimeout(() => setMensaje(''), 3000)
    setGuardando(false)
  }

  async function agregarServicio() {
    if (!nuevoServicio.nombre || !nuevoServicio.precio) return
    const { data } = await supabase.from('servicios_salon').insert({
      salon_id: salon.id,
      nombre: nuevoServicio.nombre,
      precio: parseInt(nuevoServicio.precio)
    }).select().single()
    if (data) setServicios([...servicios, data])
    setNuevoServicio({ nombre: '', precio: '' })
  }

  async function eliminarServicio(id: string) {
    await supabase.from('servicios_salon').update({ activo: false }).eq('id', id)
    setServicios(servicios.filter(s => s.id !== id))
  }

  const input = {
    width: '100%', border: '1px solid #E5E7EB', borderRadius: '10px',
    padding: '10px 14px', fontSize: '14px', outline: 'none',
    boxSizing: 'border-box' as const, background: '#F9FAFB', color: '#111827'
  }

  return (
    <div style={{fontFamily: "'DM Sans', system-ui, sans-serif", background: '#F9FAFB', minHeight: '100vh'}}>

      {/* Header */}
      <div style={{background: 'white', borderBottom: '1px solid #F3F4F6', padding: '0 24px'}}>
        <div style={{maxWidth: '700px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <a href="/panel" style={{color: '#9CA3AF', textDecoration: 'none', fontSize: '20px'}}>←</a>
            <div>
              <p style={{fontSize: '15px', fontWeight: '600', color: '#111827', margin: 0}}>Configurar mi bot</p>
              <p style={{fontSize: '12px', color: '#9CA3AF', margin: 0}}>{salon?.nombre}</p>
            </div>
          </div>
          {mensaje && <span style={{fontSize: '13px', color: '#15803D', fontWeight: '600'}}>{mensaje}</span>}
        </div>
      </div>

      {loading ? (
        <div style={{textAlign: 'center', padding: '60px', color: '#9CA3AF'}}>Cargando...</div>
      ) : (
        <div style={{maxWidth: '700px', margin: '0 auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px'}}>

          {/* Personalidad del bot */}
          <div style={{background: 'white', borderRadius: '14px', padding: '24px', border: '1px solid #F3F4F6'}}>
            <p style={{fontSize: '15px', fontWeight: '600', color: '#111827', margin: '0 0 4px'}}>Personalidad del bot</p>
            <p style={{fontSize: '13px', color: '#9CA3AF', margin: '0 0 20px'}}>Cómo se presenta tu asistente virtual</p>

            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
              <div>
                <label style={{fontSize: '13px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px'}}>Nombre de tu asistente</label>
                <input style={input} placeholder="Ej: Luna, Valentina, Sofía..."
                  value={config.nombre_asistente}
                  onChange={e => setConfig({...config, nombre_asistente: e.target.value})}
                />
              </div>
              <div>
                <label style={{fontSize: '13px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px'}}>Mensaje de bienvenida</label>
                <textarea style={{...input, height: '90px', resize: 'vertical' as const}}
                  placeholder="Ej: ¡Hola! Bienvenida a Salón Valentina 💅 Soy Luna, tu asistente. ¿En qué te puedo ayudar?"
                  value={config.mensaje_bienvenida}
                  onChange={e => setConfig({...config, mensaje_bienvenida: e.target.value})}
                />
              </div>
              <div>
                <label style={{fontSize: '13px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px'}}>Horario de atención</label>
                <input style={input} placeholder="Ej: Lunes a Sábado de 9am a 7pm"
                  value={config.horario}
                  onChange={e => setConfig({...config, horario: e.target.value})}
                />
              </div>
              <div>
                <label style={{fontSize: '13px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px'}}>Dirección</label>
                <input style={input} placeholder="Ej: Av. Los Frutales 234, Ate"
                  value={config.direccion}
                  onChange={e => setConfig({...config, direccion: e.target.value})}
                />
              </div>
            </div>

            <button onClick={guardarConfig} disabled={guardando}
              style={{marginTop: '20px', background: '#FF4D6A', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: '600', cursor: 'pointer'}}>
              {guardando ? 'Guardando...' : 'Guardar configuración'}
            </button>
          </div>

          {/* Servicios */}
          <div style={{background: 'white', borderRadius: '14px', padding: '24px', border: '1px solid #F3F4F6'}}>
            <p style={{fontSize: '15px', fontWeight: '600', color: '#111827', margin: '0 0 4px'}}>Mis servicios</p>
            <p style={{fontSize: '13px', color: '#9CA3AF', margin: '0 0 20px'}}>Los servicios que ofreces y sus precios</p>

            {/* Lista de servicios */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px'}}>
              {servicios.length === 0 ? (
                <p style={{color: '#9CA3AF', fontSize: '14px', textAlign: 'center', padding: '20px 0'}}>Sin servicios aún — agrega el primero</p>
              ) : (
                servicios.map(s => (
                  <div key={s.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#F9FAFB', borderRadius: '10px', border: '1px solid #F3F4F6'}}>
                    <div>
                      <p style={{fontWeight: '600', fontSize: '14px', color: '#111827', margin: 0}}>{s.nombre}</p>
                      <p style={{fontSize: '13px', color: '#FF4D6A', fontWeight: '600', margin: 0}}>S/{s.precio}</p>
                    </div>
                    <button onClick={() => eliminarServicio(s.id)}
                      style={{background: '#FEE2E2', color: '#B91C1C', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer'}}>
                      Eliminar
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Agregar servicio */}
            <div style={{display: 'flex', gap: '10px', alignItems: 'flex-end'}}>
              <div style={{flex: 2}}>
                <label style={{fontSize: '12px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '5px'}}>Nombre del servicio</label>
                <input style={input} placeholder="Ej: Corte de cabello"
                  value={nuevoServicio.nombre}
                  onChange={e => setNuevoServicio({...nuevoServicio, nombre: e.target.value})}
                />
              </div>
              <div style={{flex: 1}}>
                <label style={{fontSize: '12px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '5px'}}>Precio (S/)</label>
                <input style={input} placeholder="35" type="number"
                  value={nuevoServicio.precio}
                  onChange={e => setNuevoServicio({...nuevoServicio, precio: e.target.value})}
                />
              </div>
              <button onClick={agregarServicio}
                style={{background: '#111827', color: 'white', border: 'none', padding: '10px 18px', borderRadius: '10px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap' as const}}>
                + Agregar
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}