import React, { useState } from 'react'
import { STUDIO } from '../data/studio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <nav className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="24" height="24" rx="4" fill="#000" opacity="0.2" />
            <path d="M6 18L12 6l6 12" stroke="#ff2fa6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-semibold text-lg neon">{STUDIO.navBarName}</span>
        </a>

        <button className="md:hidden p-2" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <span className="sr-only">Abrir menú</span>
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transform transition ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 bg-white transform transition ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        <ul id="main-nav" className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#hero" className="hover:underline">Inicio</a></li>
          <li><a href="#gallery" className="hover:underline">Galería</a></li>
          <li><a href="#studio" className="hover:underline">Estudio</a></li>
          <li><a href="#artists" className="hover:underline">Tatuadores</a></li>
          <li><a href="#location" className="hover:underline">Ubicación</a></li>
          <li><a href="#appointment" className="btn btn-primary ml-2">Solicitar cita</a></li>
        </ul>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'} bg-neutral-900/95`}> 
        <div className="px-6 pb-6 pt-2">
          <a href="#hero" className="block py-2">Inicio</a>
          <a href="#gallery" className="block py-2">Galería</a>
          <a href="#studio" className="block py-2">Estudio</a>
          <a href="#artists" className="block py-2">Tatuadores</a>
          <a href="#location" className="block py-2">Ubicación</a>
          <a href="#appointment" className="block py-2 mt-2 btn btn-primary text-center">Solicitar cita</a>
        </div>
      </div>
    </header>
  )
}
