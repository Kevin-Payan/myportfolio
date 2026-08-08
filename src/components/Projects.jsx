import { motion } from 'framer-motion'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'

const stack = ['ASP.NET Core', 'AWS', 'Stripe', 'PostgreSQL', 'React Native + Expo']

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const PawIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ width: '100%', height: '100%' }}
  >
    <ellipse cx="6.2" cy="11.4" rx="2" ry="2.5" />
    <ellipse cx="10.4" cy="7.6" rx="2.1" ry="2.7" />
    <ellipse cx="15.2" cy="7.6" rx="2.1" ry="2.7" />
    <ellipse cx="19.1" cy="11.4" rx="2" ry="2.5" />
    <path d="M12.6 13.4c-3.1 0-5.6 2.3-5.6 4.8 0 1.8 1.4 2.9 3 2.9 1 0 1.8-.5 2.6-.5s1.6.5 2.6.5c1.6 0 3-1.1 3-2.9 0-2.5-2.5-4.8-5.6-4.8Z" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-20 max-w-6xl mx-auto" style={{ borderTop: '1px solid #D4CFC1' }}>
      <motion.h2
        {...fadeUp}
        className="font-mono text-xs tracking-widest uppercase mb-10"
        style={{ color: '#7C776A' }}
      >
        Projects
      </motion.h2>

      <motion.div {...fadeUp} style={{ maxWidth: '620px' }}>
        <h3 className="font-display font-medium text-2xl mb-2 flex items-center gap-2.5" style={{ color: '#1C1A17' }}>
          <span style={{ display: 'block', width: '22px', height: '22px', color: '#8A2A28', flexShrink: 0 }}>
            <PawIcon />
          </span>
          HuellitasApp
        </h3>

        <p className="font-body text-[15px] mb-3" style={{ color: '#8A2A28' }}>
          The platform connecting pet owners with trusted walkers.
        </p>

        <p className="font-body text-[15px] leading-relaxed mb-5" style={{ color: '#4A473F' }}>
          Production-ready mobile platform with scheduled bookings, real-time GPS tracking, and secure in-app payments. Built to scale from day one.
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs mb-4" style={{ color: '#7C776A' }}>
          <span className="tracking-widest uppercase">Soon on</span>
          <span className="inline-flex items-center gap-2">
            <FaAppStoreIos size={14} aria-hidden="true" />
            App Store
          </span>
          <span className="inline-flex items-center gap-2">
            <FaGooglePlay size={12} aria-hidden="true" />
            Google Play
          </span>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs" style={{ color: '#7C776A' }}>
          <span className="tracking-widest uppercase">Stack</span>
          <span>—</span>
          <span>{stack.join(', ')}</span>
        </div>
      </motion.div>
    </section>
  )
}
