import { motion } from 'framer-motion'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  style: { width: '100%', height: '100%' },
}

const icons = {
  languages: (
    <svg {...iconProps}><polyline points="8 6 2 12 8 18" /><polyline points="16 6 22 12 16 18" /></svg>
  ),
  frontend: (
    <svg {...iconProps}><rect x="3" y="4" width="18" height="16" rx="1" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="9" x2="9" y2="20" /></svg>
  ),
  backend: (
    <svg {...iconProps}><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><circle cx="7" cy="7" r="0.6" /><circle cx="7" cy="17" r="0.6" /></svg>
  ),
  infra: (
    <svg {...iconProps}><path d="M6.5 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 16.5 8h.5a4.5 4.5 0 0 1 0 9h-11z" /></svg>
  ),
  databases: (
    <svg {...iconProps}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" /><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></svg>
  ),
  other: (
    <svg {...iconProps}><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>
  ),
}

const skillCategories = [
  { key: 'languages', label: 'Languages', items: 'JavaScript, Python, C#, Go' },
  { key: 'frontend', label: 'Frontend', items: 'React, Angular, Tailwind CSS' },
  { key: 'backend', label: 'Backend', items: 'ASP.NET Core, FastAPI, Express, Node.js, Serverless' },
  { key: 'infra', label: 'Infra & DevOps', items: 'AWS, Docker, Git' },
  { key: 'databases', label: 'Databases', items: 'PostgreSQL, DynamoDB, Oracle' },
  { key: 'other', label: 'Other', items: 'Stripe, AI' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 py-20 max-w-6xl mx-auto" style={{ borderTop: '1px solid #D4CFC1' }}>
      <motion.h2
        {...fadeUp()}
        className="font-mono text-xs tracking-widest uppercase mb-10"
        style={{ color: '#7C776A' }}
      >
        Skills
      </motion.h2>

      <div className="flex flex-col" style={{ maxWidth: '640px' }}>
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.key}
            {...fadeUp(i * 0.04)}
            className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-4 gap-y-1.5 py-3.5"
            style={{ borderTop: '1px solid #D4CFC1', borderBottom: i === skillCategories.length - 1 ? '1px solid #D4CFC1' : 'none' }}
          >
            <div className="flex items-center gap-2.5">
              <span style={{ display: 'block', width: '16px', height: '16px', color: '#7C776A', flexShrink: 0 }}>
                {icons[cat.key]}
              </span>
              <span className="font-mono text-xs tracking-wide whitespace-nowrap" style={{ color: '#8A2A28' }}>
                {cat.label.toUpperCase()}
              </span>
            </div>
            <span className="font-body text-[15px] sm:pt-px" style={{ color: '#1C1A17' }}>
              {cat.items}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
