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
    desc: "I work on Community Finance, the part of Capital One that funds affordable housing through lending and tax-credit investments. I build the Go microservices and Angular front ends behind the workflows that actually move the money: approving equity disbursements and construction-loan draws. I work directly with clients and stakeholders to figure out what to build.",
    link: 'https://www.capitalone.com/',
    current: true,
  },
  {
    role: 'Software Engineer',
    company: 'Capital One',
    date: 'Aug 2025 — Jul 2026',
    desc: "I worked on Spreading and Pricing, the systems underwriters use to decide who gets money. Spreading is the first step: turning a company's financial statements into something you can actually analyze. Pricing is the engine behind every loan calculation on the platform. I automated the rollout of a new underwriting standard across thousands of customers, and decommissioned a legacy Oracle database — rewrote the queries for PostgreSQL, cut infrastructure costs, and fixed the SQL injection and IDOR vulnerabilities I found along the way.",
    link: 'https://www.capitalone.com/',
    current: false,
  },
  {
    role: 'Software Engineer Intern',
    company: 'Trimble',
    date: 'Jun 2024 — Jun 2025',
    desc: "I worked on SketchUp's Extension Warehouse, shipping fixes, features, and SEO work that reached real users. Also built a RAG chatbot on serverless AWS, and automated a few developer workflows in Python.",
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
      <motion.h2
        {...fadeUp()}
        className="font-mono text-xs tracking-widest uppercase mb-10"
        style={{ color: '#7C776A' }}
      >
        Experience
      </motion.h2>

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
