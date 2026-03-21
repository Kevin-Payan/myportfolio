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

export default function Experience() {
  const { t } = useTranslation()

  const experiences = [
    {
      role: t('experience.capitalone_role'),
      company: t('experience.capitalone_company'),
      date: t('experience.capitalone_date'),
      desc: t('experience.capitalone_desc'),
      link: 'https://www.capitalone.com/',
      logo: '/logos/capitalone.png',
      logoSquare: false,
      tags: ['Commercial Banking', 'Backend', 'Microservices', 'Python', 'C#', 'AWS'],
      current: true,
    },
    {
      role: t('experience.trimble_role'),
      company: t('experience.trimble_company'),
      date: t('experience.trimble_date'),
      desc: t('experience.trimble_desc'),
      link: 'https://www.trimble.com/',
      logo: '/logos/trimble.png',
      logoSquare: true,
      tags: ['Web Dev', 'AI', 'Automation', 'Testing', 'Agile'],
      current: false,
    },
  ]

  return (
    <section id="experience" className="w-full px-6 py-24 max-w-6xl mx-auto">
      <motion.p
        {...fadeUp()}
        className="font-mono text-sm tracking-widest uppercase mb-16"
        style={{ color: '#FF2056' }}
      >
        {t('experience.section_label')}
      </motion.p>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-0 top-3 bottom-3 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, rgba(255,32,86,0.4), transparent)' }}
        />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div key={i} {...fadeUp(i * 0.15)} className="md:pl-10 relative">
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-3 w-2 h-2 rounded-full -translate-x-[3px] hidden md:block"
                style={{
                  background: exp.current ? '#FF2056' : '#64748B',
                  boxShadow: exp.current ? '0 0 8px rgba(255,32,86,0.6)' : 'none',
                }}
              />

              <GlassCard hover className="p-7 lg:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="rounded-lg mt-0.5 shrink-0"
                        style={exp.logoSquare
                          ? { width: '36px', height: '36px', objectFit: 'contain', background: 'rgba(255,255,255,0.08)', padding: '2px' }
                          : { height: '32px', maxWidth: '120px', objectFit: 'contain', background: 'white', padding: '4px 8px' }
                        }
                        onError={e => e.currentTarget.style.display = 'none'}
                      />
                    )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="font-display font-bold text-xl"
                        style={{ color: '#F1F5F9' }}
                      >
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: 'rgba(251,191,36,0.1)',
                            border: '1px solid rgba(251,191,36,0.3)',
                            color: '#FBBF24',
                          }}
                        >
                          {t('experience.now')}
                        </span>
                      )}
                    </div>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-sm transition-colors duration-200"
                      style={{ color: '#64748B' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#FF2056'}
                      onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
                    >
                      {exp.company}
                      <FiExternalLink size={13} />
                    </a>
                  </div>
                  </div>
                  <span className="font-mono text-xs shrink-0" style={{ color: '#64748B' }}>
                    {exp.date}
                  </span>
                </div>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: '#64748B' }}>
                  {exp.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, ti) => (
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
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
