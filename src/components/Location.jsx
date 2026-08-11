import React from 'react'
import { STUDIO } from '../data/studio'

export default function Location() {
  const mapsQuery = encodeURIComponent(STUDIO.address.full)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
  return (
    <div className="grid md:grid-cols-2 gap-6 items-stretch">
      <div className="card p-6 h-full">
        <h3 className="text-xl font-semibold">Dirección</h3>
        <p className="mt-2 text-neutral-200">{STUDIO.address.full}</p>
        <p className="mt-2"><strong>Teléfono:</strong> <a href={`tel:${STUDIO.phone}`} className="text-neonpink hover:underline">{STUDIO.phone}</a></p>
        <div className="mt-4">
          <h4 className="font-medium">Horario</h4>
          <ul className="mt-2 text-neutral-300">
            {STUDIO.hours.map((h, i) => (
              <li key={i}>
                {h.days}: {h.closed ? 'Cerrado' : (
                  h.shifts ? h.shifts.map((s, j) => (
                    <span key={j}>
                      {s.opens} — {s.closes}{j < h.shifts.length - 1 ? ', ' : ''}
                    </span>
                  )) : `${h.opens} — ${h.closes}`
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Cómo llegar (Google Maps)</a>
        </div>
      </div>

      <div className="card overflow-hidden h-full">
        <iframe title="Mapa" src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed`} className="w-full h-full border-0" loading="lazy"></iframe>
      </div>
    </div>
  )
}
