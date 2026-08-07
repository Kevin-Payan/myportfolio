import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

const experiences = [
  {
    role: 'Software Engineer II',
    company: 'Capital One',
    date: 'Jul 2026 — Present',
    desc: "Leading full-stack features end to end in Angular and Go, from backend services through production UI. Proposed and drove an LLM-powered interpretation layer that surfaces insight from previously unusable operational data, partnering directly with stakeholders to scope it and validate what it found.",
    link: 'https://www.capitalone.com/',
    current: true,
  },
  {
    role: 'Software Engineer',
    company: 'Capital One',
    date: 'Aug 2025 — Jul 2026',
    desc: "Built and maintained C# microservices and internal web apps on AWS supporting an $80B+ commercial banking portfolio. Automated the rollout of a new underwriting standard across 4,500+ customers and 180,000+ financial statements in a $50B lending portfolio, using concurrent processing in Python to hit a tight deadline. Led the decommission of a legacy Oracle dependency across 10 microservices, migrated it to PostgreSQL, and saved $27K a year — discovering and closing SQL injection and IDOR vulnerabilities along the way.",
    link: 'https://www.capitalone.com/',
    current: false,
  },
  {
    role: 'Software Engineer Intern',
    company: 'Trimble',
    date: 'Jun 2024 — Jun 2025',
    desc: "Worked on SketchUp's Extension Warehouse, a SPA where I shipped bug fixes, new features, and SEO improvements that reached real users at scale. Built an AI-powered chatbot using a RAG architecture inside a serverless setup. Automated developer workflows with Python and contributed to automated testing across teams.",
    link: 'https://www.trimble.com/',
    current: false,
  },
  {
    role: 'AWS Certified Solutions Architect – Associate',
    company: 'Amazon Web Services',
    date: 'Apr 2026',
    link: 'https://www.credly.com/badges/fec44154-a26f-4b97-b15e-8e63a6cb0be1/public_url',
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="w-full px-6 py-20 max-w-6xl mx-auto" style={{ borderTop: '1px solid #D4CFC1' }}>
      <motion.p
        {...fadeUp()}
        className="font-mono text-xs tracking-widest uppercase mb-10"
        style={{ color: '#7C776A' }}
      >
        Experience
      </motion.p>

      <div style={{ maxWidth: '680px' }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.08)}
            className="grid gap-5 py-5"
            style={{
              gridTemplateColumns: '110px 1fr',
              borderTop: '1px solid #D4CFC1',
              borderBottom: i === experiences.length - 1 ? '1px solid #D4CFC1' : 'none',
            }}
          >
            <div className="font-mono text-xs pt-1" style={{ color: '#7C776A' }}>
              {exp.date}
            </div>
            <div>
              <h3 className="font-display font-medium text-lg" style={{ color: '#1C1A17' }}>
                {exp.role}
                {' '}
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body font-normal text-[15px] transition-colors duration-200"
                  style={{ color: '#7C776A' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#8A2A28'}
                  onMouseLeave={e => e.currentTarget.style.color = '#7C776A'}
                >
                  · {exp.company}
                </a>
                {exp.current && (
                  <span className="font-mono text-xs ml-2 align-middle" style={{ color: '#8A2A28' }}>
                    now
                  </span>
                )}
              </h3>
              {exp.desc && (
                <p className="mt-2 font-body text-sm leading-relaxed" style={{ color: '#4A473F', maxWidth: '560px' }}>
                  {exp.desc}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
