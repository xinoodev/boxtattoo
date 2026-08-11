import React, { useEffect } from 'react'
import { STUDIO } from '../data/studio'

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title || STUDIO.name
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description || STUDIO.tagline)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', document.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description || STUDIO.tagline)
  }, [title, description])
  return null
}
