import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
    { to: '/admin', label: 'Admin' },
    { to: '/CV', label: 'CV' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 text-white z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-white text-md">
            atomic <br></br> ustadh
          </Link>

          <div className="hidden space-x-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  location.pathname === link.to
                    ? 'text-white font-bold'
                    : 'text-gray-400 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 md:hidden hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-between w-6 h-5">
              <span className={`block h-0.5 bg-current transform transition ${isOpen ? 'rotate-45 translate-y-2.25' : ''}`} />
              <span className={`block h-0.5 bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transform transition ${isOpen ? '-rotate-45 -translate-y-2.25' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden border-t border-gray-700 ${
          isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-sm'
        }`}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 ${
                location.pathname === link.to
                  ? 'text-white font-bold bg-gray-50'
                  : 'text-gray-400 hover:text-white hover:bg-gray-50'
              }`}
              aria-current={location.pathname === link.to ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
