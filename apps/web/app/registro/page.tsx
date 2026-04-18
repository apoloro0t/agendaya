'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Registro() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono_bot: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [exito, setExito] = useState(false)

  async function handleSubmit() {
    setLoading(true)
    setMensaje('')

    if (!form.nombre || !form.email || !form.telefono_bot || !form.password) {
      setMensaje('Completa todos los campos')
      setLoading(false)
      return
    }

    const { error } = await supabase.from('salones').insert({
      nombre: form.nombre,
      email: form.email,
      telefono_bot: form.telefono_bot,
      password_hash: form.password
    })

    if (error) {
      setMensaje('Error al registrarse. El email o teléfono ya existe.')
    } else {
      setExito(true)
      setMensaje('¡Registro exitoso! Nos contactaremos contigo pronto.')
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-sm">
        <h1 className="text-2xl font-bold text-pink-500 mb-1">AgendaYa</h1>
        <p className="text-gray-500 text-sm mb-6">Crea tu cuenta gratis</p>

        {exito ? (
          <div className="text-center py-8">
            <p className="text-2xl mb-2">✅</p>
            <p className="font-semibold text-gray-800">¡Bienvenida!</p>
            <p className="text-gray-500 text-sm mt-2">{mensaje}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-gray-600 text-sm mb-1 block">Nombre del salón</label>
              <input
                type="text"
                placeholder="Salón Valentina"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400"
                value={form.nombre}
                onChange={e => setForm({...form, nombre: e.target.value})}
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-1 block">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-1 block">Tu número de WhatsApp</label>
              <input
                type="text"
                placeholder="+51999999999"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400"
                value={form.telefono_bot}
                onChange={e => setForm({...form, telefono_bot: e.target.value})}
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-1 block">Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400"
                value={form.password}
                onChange={e => setForm({...form, password: e.target.value})}
              />
            </div>

            {mensaje && (
              <p className="text-red-500 text-sm">{mensaje}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-pink-500 text-white py-4 rounded-xl font-semibold text-sm mt-2"
            >
              {loading ? 'Creando cuenta...' : 'Crear cuenta gratis'}
            </button>

            <p className="text-gray-400 text-xs text-center">
              14 días gratis · Sin tarjeta · Cancela cuando quieras
            </p>
          </div>
        )}
      </div>
    </main>
  )
}