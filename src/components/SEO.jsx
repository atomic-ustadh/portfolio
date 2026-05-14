import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function SEO({ title, description, image }) {
  const location = useLocation()

  useEffect(() => {
    const baseTitle = 'atomicustadh | Portfolio'
    document.title = title ? `${title} - ${baseTitle}` : baseTitle

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Abdurrahman Luqman Yusuf | atomic ustadh | Personal portfolio showcasing projects, skills, and technical articles, web development and ranslation')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title || 'atomicustadh portfolio | Welcome to my personal portfolio | Abdurrahman Luqman Yusuf')

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description || 'Abdurrahman Luqman Yusuf | atomic ustadh | Personal portfolio showcasing projects, skills, and technical articles, web development and translation')

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.origin + location.pathname)
  }, [title, description, image, location])

  return null
}

export default SEO
