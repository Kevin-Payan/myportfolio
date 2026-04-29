import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import GlassCard from './GlassCard'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const certs = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Apr 2026',
    badge: '/aws-saa-badge.png',
    link: 'https://www.credly.com/badges/fec44154-a26f-4b97-b15e-8e63a6cb0be1/public_url',
    tags: ['Cloud Architecture', 'AWS', 'Infrastructure', 'Security'],
  },
]

export default function Certifications() {
  const { t } = useTranslation()

  return (
    <section id="certifications" className="w-full px-6 py-24 max-w-6xl mx-auto">
      <motion.p
        {...fadeUp()}
        className="font-mono text-sm tracking-widest uppercase mb-16"
        style={{ color: '#FF2056' }}
      >
        {t('certifications.section_label')}
      </motion.p>

      <div className="flex flex-col gap-8">
        {certs.map((cert, i) => (
          <motion.div key={i} {...fadeUp(i * 0.15)}>
            <GlassCard hover className="p-7 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Badge image */}
                <div className="shrink-0 flex items-center justify-center">
                  <motion.img
                    src={cert.badge}
                    alt={cert.name}
                    style={{ width: '96px', height: '96px', objectFit: 'contain', filter: 'drop-shadow(0 0 16px rgba(255,153,0,0.25))' }}
                    whileHover={{ scale: 1.08, filter: 'drop-shadow(0 0 24px rgba(255,153,0,0.45))' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3 className="font-display font-bold text-lg leading-snug" style={{ color: '#F1F5F9' }}>
                      {cert.name}
                    </h3>
                    <span className="font-mono text-xs shrink-0" style={{ color: '#64748B' }}>
                      {cert.date}
                    </span>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-sm mb-4 transition-colors duration-200"
                    style={{ color: '#64748B' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FF2056'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
                  >
                    {cert.issuer}
                    <FiExternalLink size={13} />
                  </a>

                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="font-mono text-xs px-3 py-1 rounded-full"
                        style={{
                          background: 'rgba(255,32,86,0.08)',
                          border: '1px solid rgba(255,32,86,0.2)',
                          color: '#FF2056',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
