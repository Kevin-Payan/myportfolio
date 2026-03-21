import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="w-full px-6 py-32 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-sm tracking-widest uppercase mb-16"
        style={{ color: '#FF2056' }}
      >
        {t('contact.section_label')}
      </motion.p>

      <div className="max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="font-display font-extrabold leading-tight mb-6"
          style={{ fontSize: 'clamp(1.75rem, 7vw, 5rem)', color: '#F1F5F9', letterSpacing: '-0.02em' }}
        >
          {t('contact.cta_heading')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="font-body text-base leading-relaxed mb-10"
          style={{ color: '#64748B' }}
        >
          {t('contact.cta_sub')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:kevinpn@hotmail.com"
            className="font-display font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            style={{
              background: 'rgba(255,32,86,0.12)',
              border: '1px solid rgba(255,32,86,0.4)',
              color: '#FF2056',
              fontSize: '1rem',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            {t('contact.cta_button')}
          </a>

          <div className="flex items-center gap-3">
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
                className="glass glass-hover p-3 rounded-xl flex items-center justify-center"
                style={{ color: '#64748B' }}
                onMouseEnter={e => e.currentTarget.style.color = '#FF2056'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="font-display font-bold text-xl gradient-text">
          {t('contact.tagline')}
        </p>
        <p className="font-mono text-xs" style={{ color: '#64748B' }}>
          Designed & built by myself, obviously.
        </p>
      </motion.div>
    </section>
  )
}
