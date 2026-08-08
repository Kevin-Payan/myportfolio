import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export default function Contact() {
  return (
    <section id="contact" className="w-full px-6 py-24 max-w-6xl mx-auto" style={{ borderTop: '1px solid #D4CFC1' }}>
      <motion.h2
        {...fadeUp()}
        className="font-mono text-xs tracking-widest uppercase mb-10"
        style={{ color: '#7C776A' }}
      >
        Contact
      </motion.h2>

      <div style={{ maxWidth: '540px' }}>
        <motion.h3
          {...fadeUp(0.05)}
          className="font-display font-medium leading-snug mb-4"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#1C1A17' }}
        >
          Let's build something.
        </motion.h3>

        <motion.p
          {...fadeUp(0.1)}
          className="font-body text-[15px] leading-relaxed mb-8"
          style={{ color: '#7C776A' }}
        >
          If you're working on something ambitious and need someone who genuinely cares about what they build, reach out.
        </motion.p>

        <motion.a
          {...fadeUp(0.15)}
          href="mailto:kevinpn@hotmail.com"
          className="inline-block font-display font-medium"
          style={{ fontSize: '1.5rem', color: '#8A2A28' }}
        >
          kevinpn@hotmail.com
        </motion.a>

        <motion.div {...fadeUp(0.2)} className="flex flex-wrap items-center gap-6 mt-10">
          {[
            { label: 'GitHub', href: 'https://github.com/Kevin-Payan' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevinpayan/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: '#7C776A' }}
              onMouseEnter={e => e.currentTarget.style.color = '#8A2A28'}
              onMouseLeave={e => e.currentTarget.style.color = '#7C776A'}
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        {...fadeUp(0.3)}
        className="mt-20 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        style={{ borderTop: '1px solid #D4CFC1' }}
      >
        <p className="font-display font-medium text-base" style={{ color: '#1C1A17' }}>
          Software Engineer, Mexico City.
        </p>
        <p className="font-mono text-xs" style={{ color: '#7C776A' }}>
          Kevin Payan, {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  )
}
