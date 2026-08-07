import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section className="relative px-6" style={{ paddingTop: '160px', paddingBottom: '64px' }}>
      <div className="relative z-10 w-full">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-xs mb-5 tracking-widest uppercase"
          style={{ color: '#8A2A28' }}
        >
          Software Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-medium leading-[0.9] mb-7"
          style={{
            fontSize: 'clamp(3.5rem, 11vw, 8.5rem)',
            color: '#1C1A17',
            letterSpacing: '-0.02em',
            maxWidth: '900px',
          }}
        >
          Kevin Payan
        </motion.h1>

        {/* Tagline, offset right */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-display italic text-lg leading-relaxed"
          style={{ color: '#7C776A', maxWidth: '440px', marginLeft: '8%' }}
        >
          Start before you're ready.
        </motion.p>

        {/* Contact / social links */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap gap-6 mt-14"
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
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: '#7C776A' }}
              onMouseEnter={e => e.currentTarget.style.color = '#8A2A28'}
              onMouseLeave={e => e.currentTarget.style.color = '#7C776A'}
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
