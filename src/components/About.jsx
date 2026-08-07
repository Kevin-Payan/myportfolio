import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const paragraphs = [
  "If I do something, I do it right.",
  "Backend engineer. I've worked on systems that move billions of dollars and I'm also building a dog walking app. The scale is different, the care isn't.",
  "I lean toward the problems that have real stakes. Distributed systems, data migrations, architectures that need to hold up when things get serious. Fullstack when needed, backend by choice.",
  "Currently at Capital One in Mexico City. Previously at Trimble. Always shipping something on the side.",
]

export default function About() {
  return (
    <section id="about" className="w-full px-6 py-20 max-w-6xl mx-auto" style={{ borderTop: '1px solid #D4CFC1' }}>
      <motion.p
        {...fadeUp}
        className="font-mono text-xs tracking-widest uppercase mb-10"
        style={{ color: '#7C776A' }}
      >
        About
      </motion.p>

      <div className="flex flex-col gap-5" style={{ maxWidth: '620px' }}>
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            {...fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
            className="font-body leading-relaxed"
            style={{
              color: i === 0 ? '#1C1A17' : '#4A473F',
              fontSize: i === 0 ? '19px' : '16.5px',
              fontWeight: i === 0 ? 500 : 400,
            }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
