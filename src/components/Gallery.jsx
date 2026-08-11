import React, { useState } from 'react'
import { GALLERY } from '../data/gallery'
import { ARTISTS } from '../data/artists'
import GalleryModal from './GalleryModal'

export default function Gallery() {
  const [filterArtist, setFilterArtist] = useState('all')
  const [filterStyle, setFilterStyle] = useState('all')
  const [selected, setSelected] = useState(null)

  const artistsOptions = [{ id: 'all', name: 'Todos' }, ...ARTISTS.map(a => ({ id: a.id, name: a.name }))]
  const styles = Array.from(new Set(GALLERY.map(g => g.style)))
  const items = GALLERY.filter(g => (filterArtist === 'all' || g.artistId === filterArtist) && (filterStyle === 'all' || g.style === filterStyle))

  return (
    <div>
      <div className="flex gap-3 mb-6 flex-wrap">
        <select value={filterArtist} onChange={(e)=> setFilterArtist(e.target.value)} aria-label="Filtrar por tatuador" className="bg-neutral-800/40 px-3 py-2 rounded">
          {artistsOptions.map(a=> <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>

        <select value={filterStyle} onChange={(e)=> setFilterStyle(e.target.value)} aria-label="Filtrar por estilo" className="bg-neutral-800/40 px-3 py-2 rounded">
          <option value="all">Todos los estilos</option>
          {styles.map(s=> <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(item => (
          <button key={item.id} onClick={() => setSelected(item)} className="block card group overflow-hidden text-left">
            <img src={item.thumbnail} alt={`${item.title} — ${item.style}`} loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-3">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-neutral-400">{item.style} • {item.category}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && <GalleryModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
