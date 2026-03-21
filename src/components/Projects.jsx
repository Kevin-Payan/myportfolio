import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaPaw, FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'
import GlassCard from './GlassCard'

const stack = ['ASP.NET Core', 'AWS', 'Stripe', 'PostgreSQL', 'React Native + Expo']

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="w-full px-6 py-24 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-sm tracking-widest uppercase mb-16"
        style={{ color: '#FF2056' }}
      >
        {t('projects.section_label')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <GlassCard glow className="p-6 sm:p-8 lg:p-12 relative overflow-hidden">
          {/* Paw — decorative top-right, hidden on small screens */}
          <FaPaw
            size={80}
            aria-hidden="true"
            className="hidden sm:block"
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              color: '#FF2056',
              opacity: 0.12,
              pointerEvents: 'none',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — info */}
            <div>
              {/* Status badge */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#FBBF24' }}
                />
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#FBBF24' }}>
                  {t('projects.huellitas_status')}
                </span>
              </div>

              <h3
                className="font-display font-extrabold mb-3"
                style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)', color: '#F1F5F9', letterSpacing: '-0.02em' }}
              >
                {t('projects.huellitas_name')}
              </h3>

              <p className="font-body text-base mb-4" style={{ color: '#FF2056' }}>
                {t('projects.huellitas_tagline')}
              </p>

              <p className="font-body text-sm leading-relaxed mb-8" style={{ color: '#64748B' }}>
                {t('projects.huellitas_desc')}
              </p>

              {/* Store badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'App Store', Icon: FaAppStoreIos },
                  { label: 'Google Play', Icon: FaGooglePlay },
                ].map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-sm"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#64748B',
                    }}
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{ background: 'rgba(251,191,36,0.15)', color: '#FBBF24' }}
                    >
                      {t('projects.huellitas_status')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stack */}
            <div className="flex flex-col gap-6 pt-6 border-t border-white/5 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-10">
              {/* Stack */}
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: '#64748B' }}>
                  {t('projects.stack_label')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg"
                      style={{
                        background: 'rgba(255,32,86,0.06)',
                        border: '1px solid rgba(255,32,86,0.15)',
                        color: '#FF2056',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}
