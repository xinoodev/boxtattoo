import React from 'react'
import { ARTISTS } from '../data/artists'
import ArtistCard from './ArtistCard'

export default function Artists() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {ARTISTS.map(a => <ArtistCard key={a.id} artist={a} />)}
    </div>
  )
}
