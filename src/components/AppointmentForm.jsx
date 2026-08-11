import React, { useState } from 'react'
import { ARTISTS } from '../data/artists'
import { STUDIO } from '../data/studio'

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    artist: 'any',
    style: '',
    description: '',
    zone: '',
    size: '',
    date: '',
    files: []
  })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    const { name, value, files } = e.target
    if (files) {
      setForm(prev => ({ ...prev, files }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.description) {
      setStatus({ type: 'error', message: 'Completa los campos obligatorios' })
      return
    }
    const payload = {
      ...form,
      studio: STUDIO.name,
      submittedAt: new Date().toISOString()
    }
    console.log('Appointment request:', payload)
    setStatus({ type: 'success', message: 'Solicitud enviada. Te contactaremos pronto.' })
    setForm({
      name: '',
      email: '',
      phone: '',
      artist: 'any',
      style: '',
      description: '',
      zone: '',
      size: '',
      date: '',
      files: []
    })
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6" aria-label="Formulario de solicitud de cita">
      <div>
        <label className="block text-sm">Nombre*</label>
        <input name="name" value={form.name} onChange={handleChange} required className="w-full mt-1 px-3 py-2 rounded bg-neutral-800/40" />
      </div>
      <div>
        <label className="block text-sm">Email*</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full mt-1 px-3 py-2 rounded bg-neutral-800/40" />
      </div>
      <div>
        <label className="block text-sm">Teléfono</label>
        <input name="phone" value={form.phone} onChange={handleChange} className="w-full mt-1 px-3 py-2 rounded bg-neutral-800/40" />
      </div>
      <div>
        <label className="block text-sm">Tatuador preferido</label>
        <select name="artist" value={form.artist} onChange={handleChange} className="w-full mt-1 px-3 py-2 rounded bg-neutral-800/40">
          <option value="any">Cualquiera</option>
          {ARTISTS.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm">Estilo</label>
        <input name="style" value={form.style} onChange={handleChange} className="w-full mt-1 px-3 py-2 rounded bg-neutral-800/40" />
      </div>
      <div>
        <label className="block text-sm">Zona del cuerpo</label>
        <input name="zone" value={form.zone} onChange={handleChange} className="w-full mt-1 px-3 py-2 rounded bg-neutral-800/40" />
      </div>

      <div>
        <label className="block text-sm">Tamaño aproximado</label>
        <input name="size" value={form.size} onChange={handleChange} className="w-full mt-1 px-3 py-2 rounded bg-neutral-800/40" />
      </div>
      <div>
        <label className="block text-sm">Fecha preferida</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full mt-1 px-3 py-2 rounded bg-neutral-800/40" />
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm">Descripción*</label>
        <textarea name="description" value={form.description} onChange={handleChange} required rows="4" className="w-full mt-1 px-3 py-2 rounded bg-neutral-800/40"></textarea>
      </div>

      <div>
        <label className="block text-sm">Adjuntar imágenes</label>
        <input type="file" name="files" onChange={handleChange} multiple className="mt-1" />
      </div>

      <div className="md:col-span-2 flex items-center justify-between">
        <label className="flex items-center text-sm gap-2"><input type="checkbox" required /> Acepto la política de privacidad</label>
        <button type="submit" className="btn btn-primary">Enviar solicitud</button>
      </div>

      {status && <div className={`md:col-span-2 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{status.message}</div>}
    </form>
  )
}
