import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en'

  const toggleLang = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['about', 'skills', 'experience', 'certifications', 'projects', 'contact']

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div
        className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between"
        style={{
          background: scrolled ? 'rgba(8, 12, 20, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-lg tracking-tight"
          style={{ color: '#F1F5F9' }}
        >
          KP<span style={{ color: '#FBBF24' }}>.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-body transition-colors duration-200"
              style={{ color: '#64748B' }}
              onMouseEnter={e => e.target.style.color = '#F1F5F9'}
              onMouseLeave={e => e.target.style.color = '#64748B'}
            >
              {t(`nav.${link}`)}
            </button>
          ))}
        </nav>

        {/* Right side: lang toggle + mobile hamburger */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-mono font-medium transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#F1F5F9',
            }}
          >
            <span style={{ color: currentLang === 'en' ? '#FF2056' : '#64748B' }}>EN</span>
            <span style={{ color: '#64748B' }}>/</span>
            <span style={{ color: currentLang === 'es' ? '#FF2056' : '#64748B' }}>ES</span>
          </button>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px transition-all duration-200" style={{ background: '#F1F5F9', transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none' }} />
            <span className="block w-5 h-px transition-all duration-200" style={{ background: '#F1F5F9', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-all duration-200" style={{ background: '#F1F5F9', transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden px-6 pb-6 flex flex-col gap-4"
            style={{ background: 'rgba(8,12,20,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-left text-sm font-body py-1"
                style={{ color: '#64748B' }}
              >
                {t(`nav.${link}`)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
