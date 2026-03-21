import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,32,86,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Subtitle label */}
        <motion.p
          {...fadeUp(0.1)}
          className="font-mono text-sm mb-6 tracking-widest uppercase"
          style={{ color: '#FF2056' }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-extrabold leading-none mb-6 lg:mb-10"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            color: '#F1F5F9',
            letterSpacing: '-0.02em',
          }}
        >
          {t('hero.title')}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.35)}
          className="font-body text-xl mb-8"
          style={{ color: '#64748B' }}
        >
          {t('hero.tagline')}
        </motion.p>

        {/* Descriptor chips */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {[
            { key: 'chip_overachiever', gold: false },
            { key: 'chip_open', gold: true },
            { key: 'chip_builder', gold: false },
          ].map(({ key, gold }) => (
            <span
              key={key}
              className="font-mono text-xs px-3 py-1.5 rounded-full"
              style={{
                background: gold ? 'rgba(251,191,36,0.08)' : 'rgba(255,255,255,0.04)',
                border: gold ? '1px solid rgba(251,191,36,0.3)' : '1px solid rgba(255,255,255,0.08)',
                color: gold ? '#FBBF24' : '#64748B',
              }}
            >
              {t(`hero.${key}`)}
            </span>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex justify-center gap-4"
        >
          {[
            { icon: FiGithub, href: 'https://github.com/Kevin-Payan', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kevinpayan/', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:kevinpn@hotmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="glass glass-hover rounded-xl p-3 flex items-center justify-center"
              style={{ color: '#64748B' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FF2056'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        >
          <FiChevronDown size={24} style={{ color: '#FF2056' }} />
        </motion.div>
      </motion.button>
    </section>
  )
}
