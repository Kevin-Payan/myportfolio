import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' },
}

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="w-full px-6 py-24 max-w-6xl mx-auto">
      {/* Section label */}
      <motion.p
        {...fadeUp}
        className="font-mono text-sm tracking-widest uppercase mb-16"
        style={{ color: '#FF2056' }}
      >
        {t('about.section_label')}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left — pull quote */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <GlassCard className="p-8 lg:p-10" glow>
            <p
              className="font-display font-bold leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#F1F5F9',
                letterSpacing: '-0.02em',
              }}
            >
              "{t('about.pull_quote')}"
            </p>
            <div
              className="mt-6 h-px w-16"
              style={{ background: 'linear-gradient(to right, #FF2056, transparent)' }}
            />
          </GlassCard>
        </motion.div>

        {/* Right — bio */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col gap-5"
        >
          {[t('about.bio_p1'), t('about.bio_p2'), t('about.bio_p3')].map((p, i) => (
            <p key={i} className="font-body text-base leading-relaxed" style={{ color: i === 0 ? '#F1F5F9' : '#64748B' }}>
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
