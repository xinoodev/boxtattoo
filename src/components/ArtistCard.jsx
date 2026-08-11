import React from 'react'

export default function ArtistCard({ artist }) {
  return (
    <article className="card p-4">
      <img src={artist.photo} alt={artist.name} className="w-full h-56 object-cover rounded" loading="lazy" />
      <div className="mt-3">
        <h4 className="text-lg font-semibold">{artist.name}</h4>
        <p className="text-sm text-neutral-300">{artist.specialty}</p>
        <p className="mt-2 text-sm text-neutral-400">{artist.bio}</p>
        <div className="mt-3 flex items-center gap-3">
          <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-100 hover:underline">Instagram</a>
          <span className="text-sm text-neutral-400">• {artist.experience}</span>
        </div>
      </div>
    </article>
  )
}
