'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Cita = {
  id: string
  cliente_nombre: string
  cliente_telefono: string
  fecha: string
  hora: string
  estado: string
  servicios: { nombre: string; precio: number }
}

export default function Panel() {
  const [citas, setCitas] = useState<Cita[]>([])
  const [loading, setLoading] = useState(true)
  const [salonNombre, setSalonNombre] = useState('')
  const hoy = new Date().toISOString().split('T')[0]

  useEffect(() => {
    async function cargarCitas() {
      const salonData = localStorage.getItem('salon')
      if (!salonData) {
        window.location.href = '/login'
        return
      }
      const salon = JSON.parse(salonData)
      setSalonNombre(salon.nombre)

      const { data } = await supabase
        .from('citas')
        .select('*, servicios(nombre, precio)')
        .eq('salon_id', salon.id)
        .order('fecha', { ascending: true })

      if (data) setCitas(data)
      setLoading(false)
    }
    cargarCitas()
  }, [])

  const citasHoy = citas.filter(c => c.fecha === hoy)
  const citasFuturas = citas.filter(c => c.fecha > hoy)
  const totalHoy = citasHoy.reduce((sum, c) => sum + (c.servicios?.precio || 0), 0)

  async function actualizarEstado(id: string, estado: string) {
    await supabase.from('citas').update({ estado }).eq('id', id)
    setCitas(citas.map(c => c.id === id ? {...c, estado} : c))
  }

  async function cerrarSesion() {
    await supabase.auth.signOut()
    localStorage.removeItem('salon')
    window.location.href = '/login'
  }

  const colorEstado: Record<string, string> = {
    pendiente: '#f59e0b',
    confirmada: '#10b981',
    cancelada: '#ef4444'
  }

  return (
    <main style={{fontFamily: "'Georgia', serif", background: '#faf7f4', minHeight: '100vh'}}>

      {/* Header */}
      <div style={{background: 'white', borderBottom: '1px solid #ede8e3', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h1 style={{fontSize: '22px', fontWeight: '700', color: '#1a1a1a', margin: 0}}>
            Agenda<span style={{color: '#f7426f'}}>Ya</span>
          </h1>
          <p style={{color: '#a89a8a', fontSize: '12px', margin: '2px 0 0', fontFamily: 'monospace'}}>
            {salonNombre || 'MI SALÓN'}
          </p>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
          <div style={{background: '#fff8f9', border: '1px solid #f7426f', borderRadius: '10px', padding: '8px 14px', textAlign: 'right'}}>
            <p style={{color: '#f7426f', fontSize: '11px', margin: 0, fontFamily: 'monospace'}}>HOY</p>
            <p style={{color: '#1a1a1a', fontSize: '18px', fontWeight: '700', margin: 0}}>S/{totalHoy}</p>
          </div>
          <button
            onClick={cerrarSesion}
            style={{background: 'none', border: '1px solid #ede8e3', borderRadius: '8px', padding: '8px 12px', fontSize: '12px', color: '#a89a8a', cursor: 'pointer'}}
          >
            Salir
          </button>
        </div>
      </div>

      <div style={{padding: '24px', maxWidth: '480px', margin: '0 auto'}}>

        {loading ? (
          <p style={{color: '#a89a8a', textAlign: 'center', marginTop: '60px'}}>Cargando citas...</p>
        ) : (
          <>
            {/* Citas de hoy */}
            <div style={{marginBottom: '32px'}}>
              <p style={{color: '#b09a8a', fontSize: '11px', letterSpacing: '2px', marginBottom: '16px', fontFamily: 'monospace'}}>
                HOY — {citasHoy.length} CITA{citasHoy.length !== 1 ? 'S' : ''}
              </p>

              {citasHoy.length === 0 ? (
                <div style={{background: 'white', border: '1px solid #ede8e3', borderRadius: '14px', padding: '32px', textAlign: 'center'}}>
                  <p style={{color: '#c4b5a5', fontSize: '14px', margin: 0}}>Sin citas para hoy</p>
                </div>
              ) : (
                citasHoy.map(cita => (
                  <div key={cita.id} style={{background: 'white', border: '1px solid #ede8e3', borderRadius: '14px', padding: '18px', marginBottom: '12px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                      <div>
                        <p style={{fontWeight: '600', fontSize: '15px', color: '#1a1a1a', margin: '0 0 4px'}}>
                          {cita.cliente_nombre || 'Cliente'}
                        </p>
                        <p style={{color: '#a89a8a', fontSize: '13px', margin: '0 0 8px', fontFamily: 'monospace'}}>
                          {cita.cliente_telefono}
                        </p>
                        <p style={{color: '#f7426f', fontSize: '14px', fontWeight: '600', margin: 0}}>
                          {cita.servicios?.nombre} · S/{cita.servicios?.precio}
                        </p>
                      </div>
                      <div style={{textAlign: 'right'}}>
                        <p style={{fontSize: '18px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 4px', fontFamily: 'monospace'}}>
                          {cita.hora?.slice(0,5)}
                        </p>
                        <span style={{
                          background: colorEstado[cita.estado] + '20',
                          color: colorEstado[cita.estado],
                          fontSize: '11px',
                          padding: '3px 10px',
                          borderRadius: '20px',
                          fontFamily: 'monospace'
                        }}>
                          {cita.estado.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {cita.estado === 'pendiente' && (
                      <div style={{display: 'flex', gap: '8px', marginTop: '14px'}}>
                        <button
                          onClick={() => actualizarEstado(cita.id, 'confirmada')}
                          style={{flex: 1, background: '#10b981', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer'}}
                        >
                          Confirmar
                        </button>
                        <button
                          onClick={() => actualizarEstado(cita.id, 'cancelada')}
                          style={{flex: 1, background: '#fff', color: '#ef4444', border: '1px solid #ef4444', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer'}}
                        >
                          Cancelar
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Próximas citas */}
            {citasFuturas.length > 0 && (
              <div>
                <p style={{color: '#b09a8a', fontSize: '11px', letterSpacing: '2px', marginBottom: '16px', fontFamily: 'monospace'}}>
                  PRÓXIMAS — {citasFuturas.length} CITA{citasFuturas.length !== 1 ? 'S' : ''}
                </p>
                {citasFuturas.map(cita => (
                  <div key={cita.id} style={{background: 'white', border: '1px solid #ede8e3', borderRadius: '14px', padding: '16px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                      <p style={{fontWeight: '600', fontSize: '14px', color: '#1a1a1a', margin: '0 0 4px'}}>
                        {cita.cliente_nombre || 'Cliente'}
                      </p>
                      <p style={{color: '#f7426f', fontSize: '13px', margin: 0}}>
                        {cita.servicios?.nombre} · S/{cita.servicios?.precio}
                      </p>
                    </div>
                    <div style={{textAlign: 'right'}}>
                      <p style={{fontSize: '13px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 2px', fontFamily: 'monospace'}}>
                        {cita.fecha}
                      </p>
                      <p style={{color: '#a89a8a', fontSize: '12px', margin: 0, fontFamily: 'monospace'}}>
                        {cita.hora?.slice(0,5)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {citas.length === 0 && (
              <div style={{textAlign: 'center', marginTop: '60px'}}>
                <p style={{color: '#c4b5a5', fontSize: '15px', marginBottom: '8px'}}>Sin citas por ahora</p>
                <p style={{color: '#d4c5b5', fontSize: '13px'}}>Las citas aparecerán aquí cuando alguien agende por WhatsApp</p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}