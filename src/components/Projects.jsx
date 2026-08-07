import { motion } from 'framer-motion'

const stack = ['ASP.NET Core', 'AWS', 'Stripe', 'PostgreSQL', 'React Native + Expo']

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-20 max-w-6xl mx-auto" style={{ borderTop: '1px solid #D4CFC1' }}>
      <motion.p
        {...fadeUp}
        className="font-mono text-xs tracking-widest uppercase mb-10"
        style={{ color: '#7C776A' }}
      >
        Projects
      </motion.p>

      <motion.div {...fadeUp} style={{ maxWidth: '620px' }}>
        <h3 className="font-display font-medium text-2xl mb-2" style={{ color: '#1C1A17' }}>
          HuellitasApp
        </h3>

        <p className="font-body text-[15px] mb-3" style={{ color: '#8A2A28' }}>
          The platform connecting pet owners with trusted walkers.
        </p>

        <p className="font-body text-[15px] leading-relaxed mb-5" style={{ color: '#4A473F' }}>
          Production-ready mobile platform with scheduled bookings, real-time GPS tracking, and secure in-app payments. Built to scale from day one.
        </p>

        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs" style={{ color: '#7C776A' }}>
          <span className="tracking-widest uppercase">Stack</span>
          <span>—</span>
          <span>{stack.join(', ')}</span>
        </div>
      </motion.div>
    </section>
  )
}
