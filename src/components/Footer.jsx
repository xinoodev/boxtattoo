import React from 'react'
import { STUDIO } from '../data/studio'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 mt-12">
      <div className="container mx-auto px-6 py-10">
        <div className="md:flex md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">{STUDIO.name}</h3>
            <p className="text-neutral-400">{STUDIO.address.full}</p>
            <p className="text-neutral-400 mt-2">Tel: <a href={`tel:${STUDIO.phone}`} className="text-neonpink">{STUDIO.phone}</a></p>
          </div>

          <div className="mt-6 md:mt-0">
            <h4 className="font-medium mb-2">Enlaces</h4>
            <ul className="text-neutral-400">
              <li><a href="#hero" className="hover:underline">Inicio</a></li>
              <li><a href="#gallery" className="hover:underline">Galería</a></li>
              <li><a href="#studio" className="hover:underline">Estudio</a></li>
              <li><a href="#artists" className="hover:underline">Tatuadores</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-neutral-500 text-sm">
          <p>Política de privacidad · Política de cookies · Aviso legal</p>
          <p className="mt-4">© {new Date().getFullYear()} {STUDIO.name}. Todos los derechos reservados.</p>
          {STUDIO.webAuthor?.name && (
            <p className="mt-2 text-neutral-400 text-xs">
              Diseñado y desarrollado por{' '}
              {STUDIO.webAuthor.url ? (
                <a href={STUDIO.webAuthor.url} target="_blank" rel="noopener noreferrer" className="text-neonpink hover:underline">{STUDIO.webAuthor.name}</a>
              ) : (
                <span className="text-neutral-400">{STUDIO.webAuthor.name}</span>
              )}
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
