'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const ADMIN_PASSWORD = 'r00t2026'

type Salon = {
  id: string
  nombre: string
  email: string
  telefono_bot: string
  plan: string
  citas_mes: number
  activo: boolean
  fecha_pago: string | null
}

export default function Admin() {
  const [autenticado, setAutenticado] = useState(false)
  const [password, setPassword] = useState('')
  const [salones, setSalones] = useState<Salon[]>([])
  const [loading, setLoading] = useState(false)

  async function cargarSalones() {
    setLoading(true)
    const { data } = await supabase.from('salones').select('*').order('created_at', { ascending: false })
    if (data) setSalones(data)
    setLoading(false)
  }

  function entrar() {
    if (password === ADMIN_PASSWORD) {
      setAutenticado(true)
      cargarSalones()
    } else {
      alert('Contraseña incorrecta')
    }
  }

  async function cambiarPlan(id: string, plan: string) {
    await supabase.from('salones').update({
      plan,
      fecha_pago: new Date().toISOString(),
      citas_mes: 0
    }).eq('id', id)
    cargarSalones()
  }

  async function toggleActivo(id: string, activo: boolean) {
    await supabase.from('salones').update({ activo: !activo }).eq('id', id)
    cargarSalones()
  }

  async function resetearCitas(id: string) {
    await supabase.from('salones').update({ citas_mes: 0 }).eq('id', id)
    cargarSalones()
  }

  const limites: Record<string, number> = { free: 15, basico: 50, premium: 999999 }

  const planColor: Record<string, {bg: string, text: string}> = {
    free:    { bg: '#F3F4F6', text: '#6B7280' },
    basico:  { bg: '#DBEAFE', text: '#1E40AF' },
    premium: { bg: '#FCE7F3', text: '#BE185D' }
  }

  if (!autenticado) {
    return (
      <div style={{fontFamily: "'DM Sans', system-ui, sans-serif", background: '#F9FAFB', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
        <div style={{background: 'white', borderRadius: '16px', padding: '40px 32px', maxWidth: '380px', width: '100%', border: '1px solid #F3F4F6'}}>
          <p style={{fontSize: '24px', fontWeight: '700', color: '#111827', margin: '0 0 4px'}}>🔐 Admin</p>
          <p style={{fontSize: '13px', color: '#9CA3AF', margin: '0 0 24px'}}>Solo para el dueño de AgendaYa</p>
          <input type="password" placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && entrar()}
            style={{width: '100%', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', background: '#F9FAFB', marginBottom: '16px'}}
          />
          <button onClick={entrar}
            style={{width: '100%', background: '#111827', color: 'white', border: 'none', padding: '14px', borderRadius: '10px', fontSize: '14px', fontWeight: '600', cursor: 'pointer'}}>
            Entrar
          </button>
        </div>
      </div>
    )
  }

  const totalIngresos = salones.reduce((sum, s) => {
    if (s.plan === 'basico') return sum + 39
    if (s.plan === 'premium') return sum + 69
    return sum
  }, 0)

  return (
    <div style={{fontFamily: "'DM Sans', system-ui, sans-serif", background: '#F9FAFB', minHeight: '100vh'}}>

      <div style={{background: 'white', borderBottom: '1px solid #F3F4F6', padding: '0 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px'}}>
          <div>
            <p style={{fontSize: '15px', fontWeight: '600', color: '#111827', margin: 0}}>🔐 Admin AgendaYa</p>
            <p style={{fontSize: '12px', color: '#9CA3AF', margin: 0}}>{salones.length} salones registrados</p>
          </div>
          <button onClick={() => setAutenticado(false)} style={{background: 'none', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '7px 14px', fontSize: '13px', color: '#6B7280', cursor: 'pointer'}}>
            Cerrar sesión
          </button>
        </div>
      </div>

      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '24px'}}>

        {/* Stats */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px'}}>
          <div style={{background: 'white', borderRadius: '14px', padding: '20px', border: '1px solid #F3F4F6'}}>
            <p style={{fontSize: '12px', color: '#9CA3AF', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Total salones</p>
            <p style={{fontSize: '28px', fontWeight: '700', color: '#111827', margin: 0}}>{salones.length}</p>
          </div>
          <div style={{background: 'white', borderRadius: '14px', padding: '20px', border: '1px solid #F3F4F6'}}>
            <p style={{fontSize: '12px', color: '#9CA3AF', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Gratuitos</p>
            <p style={{fontSize: '28px', fontWeight: '700', color: '#6B7280', margin: 0}}>{salones.filter(s => s.plan === 'free').length}</p>
          </div>
          <div style={{background: 'white', borderRadius: '14px', padding: '20px', border: '1px solid #F3F4F6'}}>
            <p style={{fontSize: '12px', color: '#9CA3AF', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>De pago</p>
            <p style={{fontSize: '28px', fontWeight: '700', color: '#111827', margin: 0}}>{salones.filter(s => s.plan !== 'free').length}</p>
          </div>
          <div style={{background: 'linear-gradient(135deg, #FF4D6A, #FF6B84)', borderRadius: '14px', padding: '20px'}}>
            <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.8)', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Ingresos mes</p>
            <p style={{fontSize: '28px', fontWeight: '700', color: 'white', margin: 0}}>S/{totalIngresos}</p>
          </div>
        </div>

        {loading ? (
          <div style={{textAlign: 'center', padding: '60px', color: '#9CA3AF'}}>Cargando...</div>
        ) : salones.length === 0 ? (
          <div style={{background: 'white', borderRadius: '14px', padding: '60px', textAlign: 'center', border: '1px solid #F3F4F6'}}>
            <p style={{fontSize: '32px', marginBottom: '8px'}}>📭</p>
            <p style={{color: '#9CA3AF', fontSize: '14px'}}>Sin salones registrados aún</p>
          </div>
        ) : (
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {salones.map(s => {
              const limite = limites[s.plan] || 15
              const porcentaje = Math.min((s.citas_mes / limite) * 100, 100)

              return (
                <div key={s.id} style={{background: 'white', borderRadius: '14px', padding: '20px', border: '1px solid #F3F4F6'}}>

                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', gap: '16px', flexWrap: 'wrap'}}>
                    <div>
                      <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px'}}>
                        <p style={{fontWeight: '600', fontSize: '15px', color: '#111827', margin: 0}}>{s.nombre}</p>
                        <span style={{
                          background: planColor[s.plan]?.bg,
                          color: planColor[s.plan]?.text,
                          padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase'
                        }}>{s.plan}</span>
                        {!s.activo && <span style={{background: '#FEE2E2', color: '#B91C1C', padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: '700'}}>INACTIVO</span>}
                      </div>
                      <p style={{fontSize: '13px', color: '#6B7280', margin: '0 0 2px'}}>{s.email}</p>
                      <p style={{fontSize: '12px', color: '#9CA3AF', margin: 0, fontFamily: 'monospace'}}>📱 {s.telefono_bot}</p>
                    </div>

                    <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                      <button onClick={() => cambiarPlan(s.id, 'free')}
                        style={{background: s.plan === 'free' ? '#111827' : '#F3F4F6', color: s.plan === 'free' ? 'white' : '#374151', border: 'none', padding: '7px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer'}}>
                        Free
                      </button>
                      <button onClick={() => cambiarPlan(s.id, 'basico')}
                        style={{background: s.plan === 'basico' ? '#1E40AF' : '#F3F4F6', color: s.plan === 'basico' ? 'white' : '#374151', border: 'none', padding: '7px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer'}}>
                        Básico S/39
                      </button>
                      <button onClick={() => cambiarPlan(s.id, 'premium')}
                        style={{background: s.plan === 'premium' ? '#BE185D' : '#F3F4F6', color: s.plan === 'premium' ? 'white' : '#374151', border: 'none', padding: '7px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer'}}>
                        Premium S/69
                      </button>
                    </div>
                  </div>

                  {/* Progreso de citas */}
                  <div style={{marginBottom: '12px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                      <p style={{fontSize: '12px', color: '#6B7280', margin: 0}}>Citas del mes</p>
                      <p style={{fontSize: '12px', color: '#111827', fontWeight: '600', margin: 0}}>
                        {s.citas_mes || 0} / {limite === 999999 ? '∞' : limite}
                      </p>
                    </div>
                    <div style={{background: '#F3F4F6', height: '6px', borderRadius: '999px', overflow: 'hidden'}}>
                      <div style={{background: porcentaje >= 90 ? '#EF4444' : '#10B981', height: '100%', width: `${porcentaje}%`, transition: 'width 0.3s'}}></div>
                    </div>
                  </div>

                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#9CA3AF'}}>
                    <span>
                      {s.fecha_pago ? `Último pago: ${new Date(s.fecha_pago).toLocaleDateString('es-PE')}` : 'Sin pagos registrados'}
                    </span>
                    <div style={{display: 'flex', gap: '8px'}}>
                      <button onClick={() => resetearCitas(s.id)}
                        style={{background: 'none', border: '1px solid #E5E7EB', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', color: '#6B7280', cursor: 'pointer'}}>
                        Resetear citas
                      </button>
                      <button onClick={() => toggleActivo(s.id, s.activo)}
                        style={{background: s.activo ? '#FEE2E2' : '#DCFCE7', color: s.activo ? '#B91C1C' : '#15803D', border: 'none', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600', cursor: 'pointer'}}>
                        {s.activo ? 'Desactivar' : 'Activar'}
                      </button>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        )}

      </div>
    </div>
  )
}