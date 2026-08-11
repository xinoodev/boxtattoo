import React from 'react'
import { STUDIO } from '../data/studio'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const customMarkerIcon = new L.Icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
})

export default function Location() {
  const addressQuery = encodeURIComponent(STUDIO.address.full)
  const coordsQuery = STUDIO.coords ? `${STUDIO.coords.lat},${STUDIO.coords.lng}` : STUDIO.address.full
  const mapsUrl = STUDIO.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordsQuery)}`
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

        {STUDIO.coords ? (
          <MapContainer center={[STUDIO.coords.lat, STUDIO.coords.lng]} zoom={17} scrollWheelZoom={false} className="w-full h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[STUDIO.coords.lat, STUDIO.coords.lng]} icon={customMarkerIcon}>
              <Popup>
                <div>
                  <strong>{STUDIO.name}</strong>
                  <br />
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-neonpink">Abrir en Google Maps</a>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <iframe title="Mapa" src={`https://maps.google.com/maps?q=${encodeURIComponent(coordsQuery)}&z=17&output=embed`} className="w-full h-full border-0" loading="lazy"></iframe>
        )}
      </div>
    </div>
  )
}
