import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import History from './components/History'
import Artists from './components/Artists'
import Location from './components/Location'
import AppointmentForm from './components/AppointmentForm'
import Footer from './components/Footer'
import { STUDIO } from './data/studio'
import SEO from './components/SEO'

export default function App() {
  return (
    <>
      <SEO title={`${STUDIO.name} — ${STUDIO.address.city}`} description={STUDIO.tagline} />
      <div className="min-h-screen text-white bg-neutral-900">
        <Navbar />
        <main id="main" className="mt-16">
          <Hero />
          <section aria-labelledby="gallery-title" className="py-12">
            <div className="container mx-auto px-6">
              <h2 id="gallery-title" className="text-3xl font-semibold mb-6">Galería</h2>
              <Gallery />
            </div>
          </section>

          <section id="studio" aria-labelledby="studio-title" className="py-12">
            <div className="container mx-auto px-6">
              <h2 id="studio-title" className="text-3xl font-semibold mb-6">Nuestra historia</h2>
              <History />
            </div>
          </section>

          <section id="artists" aria-labelledby="artists-title" className="py-12 bg-neutral-900/60">
            <div className="container mx-auto px-6">
              <h2 id="artists-title" className="text-3xl font-semibold mb-6">Tatuadores</h2>
              <Artists />
            </div>
          </section>

          <section id="location" aria-labelledby="location-title" className="py-12">
            <div className="container mx-auto px-6">
              <h2 id="location-title" className="text-3xl font-semibold mb-6">Ubicación</h2>
              <Location />
            </div>
          </section>

          <section id="appointment" aria-labelledby="appointment-title" className="py-12 bg-neutral-900/60">
            <div className="container mx-auto px-6">
              <h2 id="appointment-title" className="text-3xl font-semibold mb-6">Solicitar cita</h2>
              <AppointmentForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
