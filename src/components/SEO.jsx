import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function SEO({ title, description, image }) {
  const location = useLocation()

  useEffect(() => {
    const baseTitle = 'atomicustadh | Portfolio'
    document.title = title ? `${title} - ${baseTitle}` : baseTitle

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Personal portfolio showcasing projects, skills, and technical articles')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title || 'atomicustadh | Portfolio')

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description || 'Personal portfolio showcasing projects, skills, and technical articles')

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.origin + location.pathname)
  }, [title, description, image, location])

  return null
}

export default SEO
