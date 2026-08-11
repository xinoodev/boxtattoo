import React from 'react'
import { STUDIO } from '../data/studio'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen md:h-[80vh] flex items-center" aria-label="Hero">
      <picture className="absolute inset-0 -z-10">
        <img src="https://picsum.photos/seed/hero/1600/900" alt={`${STUDIO.name} — hero`} className="w-full h-full object-cover brightness-50" />
      </picture>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold neon">{STUDIO.name}</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto">{STUDIO.tagline}</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#appointment" className="btn btn-primary">Solicitar cita</a>
          <a href="#gallery" className="btn border border-neutral-700">Ver galería</a>
        </div>
      </div>
    </section>
  )
}
