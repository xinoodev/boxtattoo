import React from 'react'

export default function History() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <article className="card p-6">
        <h3 className="text-xl font-semibold neon">Origen</h3>
        <p className="mt-3 text-neutral-200">Breve texto sobre cuándo y cómo se fundó el estudio. Placeholder.</p>
      </article>
      <article className="card p-6">
        <h3 className="text-xl font-semibold neon">Filosofía</h3>
        <p className="mt-3 text-neutral-200">Filosofía y valores del estudio. Placeholder.</p>
      </article>
      <article className="card p-6">
        <h3 className="text-xl font-semibold neon">Evolución</h3>
        <p className="mt-3 text-neutral-200">Cómo ha evolucionado el estudio a lo largo del tiempo. Placeholder.</p>
      </article>
    </div>
  )
}
