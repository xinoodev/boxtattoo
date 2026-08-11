import React, { useEffect } from 'react'

export default function GalleryModal({ item, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
      <div className="max-w-4xl w-full relative">
        <button onClick={onClose} aria-label="Cerrar" className="absolute top-3 right-3 bg-white/10 rounded-full p-2">✕</button>
        <img src={item.image} alt={item.title} className="w-full h-auto rounded" />
        <div className="mt-3 text-white">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm text-neutral-400">{item.style} • {item.category}</p>
        </div>
      </div>
    </div>
  )
}
