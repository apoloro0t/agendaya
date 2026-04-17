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

  useEffect(() => {
    async function cargarCitas() {
      const { data } = await supabase
        .from('citas')
        .select('*, servicios(nombre, precio)')
        .order('fecha', { ascending: true })
      if (data) setCitas(data)
      setLoading(false)
    }
    cargarCitas()
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-pink-500 mb-2">AgendaYa</h1>
        <p className="text-gray-500 text-sm mb-6">Panel de citas</p>

        {loading ? (
          <p className="text-gray-400 text-center">Cargando citas...</p>
        ) : citas.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center">
            <p className="text-gray-400">No hay citas por ahora</p>
            <p className="text-gray-300 text-sm mt-1">Las citas aparecerán aquí cuando alguien agende por WhatsApp</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {citas.map((cita) => (
              <div key={cita.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">{cita.cliente_nombre || 'Cliente'}</p>
                    <p className="text-gray-500 text-sm">{cita.cliente_telefono}</p>
                    <p className="text-pink-500 text-sm mt-1">{cita.servicios?.nombre} — S/{cita.servicios?.precio}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">{cita.fecha}</p>
                    <p className="text-gray-500 text-sm">{cita.hora}</p>
                    <span className="bg-pink-50 text-pink-500 text-xs px-2 py-1 rounded-full mt-1 inline-block">
                      {cita.estado}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}