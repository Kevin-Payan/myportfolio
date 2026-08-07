import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div
        className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between"
        style={{
          background: scrolled ? 'rgba(239, 237, 230, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid #D4CFC1' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-medium text-lg tracking-tight"
          style={{ color: '#1C1A17' }}
        >
          KP
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: '#7C776A' }}
              onMouseEnter={e => e.target.style.color = '#8A2A28'}
              onMouseLeave={e => e.target.style.color = '#7C776A'}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px transition-all duration-200" style={{ background: '#1C1A17', transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none' }} />
          <span className="block w-5 h-px transition-all duration-200" style={{ background: '#1C1A17', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-200" style={{ background: '#1C1A17', transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden px-6 pb-6 flex flex-col gap-4"
            style={{ background: 'rgba(239,237,230,0.97)', borderBottom: '1px solid #D4CFC1' }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left font-mono text-xs uppercase tracking-widest py-1"
                style={{ color: '#7C776A' }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
