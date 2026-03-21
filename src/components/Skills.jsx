import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import {
  SiJavascript, SiReact, SiAngular, SiTailwindcss,
  SiFastapi, SiExpress, SiNodedotjs, SiServerless, SiDotnet,
  SiAmazonwebservices, SiDocker, SiGit,
  SiAmazondynamodb, SiStripe,
} from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FiCpu } from 'react-icons/fi'

const PythonIcon = () => (
  <svg viewBox="0 0 256 255" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path fill="#3776AB" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zm-34.habitual 19.574c6.153 0 11.175 5.023 11.175 11.175 0 6.15-5.022 11.153-11.175 11.153-6.15 0-11.153-5.002-11.153-11.153 0-6.152 5.002-11.175 11.153-11.175z"/>
    <path fill="#FFD43B" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.088-19.574c-6.152 0-11.175-5.022-11.175-11.153 0-6.15 5.023-11.175 11.175-11.175 6.15 0 11.153 5.025 11.153 11.175 0 6.131-5.002 11.153-11.153 11.153z"/>
  </svg>
)

const CSharpIcon = () => (
  <svg viewBox="0 0 256 288" width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M255.569,84.452C255.567,79.622 254.534,75.354 252.445,71.691C250.393,68.089 247.32,65.07 243.198,62.683C209.173,43.064 175.115,23.505 141.101,3.866C131.931,-1.428 123.04,-1.235 113.938,4.135C100.395,12.122 32.59,50.969 12.385,62.672C4.064,67.489 0.015,74.861 0.013,84.443C0,123.898 0.013,163.352 0,202.808C0,207.532 0.991,211.717 2.988,215.325C5.041,219.036 8.157,222.138 12.374,224.579C32.58,236.282 100.394,275.126 113.934,283.115C123.04,288.488 131.931,288.68 141.104,283.384C175.119,263.744 209.179,244.186 243.209,224.567C247.426,222.127 250.542,219.023 252.595,215.315C254.589,211.707 255.582,207.522 255.582,202.797C255.582,202.797 255.582,123.908 255.569,84.452Z" opacity="0.3"/>
    <path d="M128.456,48.626C163.6,48.626 194.284,67.712 210.719,96.082L169.21,119.617C161.063,105.824 146.128,96.515 128.996,96.323L128.457,96.32C102.331,96.32 81.151,117.5 81.151,143.625C81.151,152.169 83.428,160.178 87.39,167.095C95.544,181.33 110.873,190.931 128.457,190.931C146.15,190.931 161.566,181.208 169.678,166.821L210.768,190.084C194.513,219.213 164.25,238.241 129.515,238.62L128.457,238.626C93.202,238.626 62.432,219.422 46.038,190.902C38.035,176.979 33.456,160.838 33.456,143.625C33.456,91.159 75.988,48.626 128.456,48.626Z" fill="currentColor"/>
    <path d="M201.892,116.294L201.892,129.768L215.366,129.768L215.366,116.294L222.103,116.294L222.103,129.768L235.577,129.768L235.577,136.505L222.103,136.505L222.103,149.978L235.577,149.978L235.577,156.715L222.103,156.715L222.103,170.189L215.366,170.189L215.366,156.715L201.892,156.715L201.892,170.189L195.155,170.189L195.155,156.715L181.682,156.715L181.682,149.978L195.155,149.978L195.155,136.505L181.682,136.505L181.682,129.768L195.155,129.768L195.155,116.294L201.892,116.294ZM215.366,136.505L201.892,136.505L201.892,149.978L215.366,149.978L215.366,136.505Z" fill="currentColor"/>
  </svg>
)

const skillCategories = (t) => [
  {
    label: t('skills.cat_languages'),
    skills: [
      { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { icon: PythonIcon, name: 'Python', color: null },
      { icon: CSharpIcon, name: 'C#', color: '#A78BFA' },
    ],
  },
  {
    label: t('skills.cat_frontend'),
    skills: [
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiAngular, name: 'Angular', color: '#DD0031' },
      { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    ],
  },
  {
    label: t('skills.cat_backend'),
    skills: [
      { icon: SiDotnet, name: 'ASP.NET Core', color: '#FBBF24' },
      { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
      { icon: SiExpress, name: 'Express', color: '#F1F5F9' },
      { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
      { icon: SiServerless, name: 'Serverless', color: '#FD5750' },
    ],
  },
  {
    label: t('skills.cat_infra'),
    skills: [
      { icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900' },
      { icon: SiDocker, name: 'Docker', color: '#2496ED' },
      { icon: SiGit, name: 'Git', color: '#F05032' },
    ],
  },
  {
    label: t('skills.cat_databases'),
    skills: [
      { icon: BiLogoPostgresql, name: 'PostgreSQL', color: '#4169E1' },
      { icon: SiAmazondynamodb, name: 'DynamoDB', color: '#FF9900' },
    ],
  },
  {
    label: t('skills.cat_other'),
    skills: [
      { icon: SiStripe, name: 'Stripe', color: '#635BFF' },
      { icon: FiCpu, name: 'AI', color: '#FF2056' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  const { t } = useTranslation()
  const categories = skillCategories(t)

  return (
    <section id="skills" className="w-full px-6 py-24 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-sm tracking-widest uppercase mb-16"
        style={{ color: '#FF2056' }}
      >
        {t('skills.section_label')}
      </motion.p>

      <div className="flex flex-col gap-8">
        {categories.map((cat, ci) => (
          <div key={ci}>
            <p className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: '#64748B' }}>
              {cat.label}
            </p>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {cat.skills.map((skill, si) => (
                <motion.div key={si} variants={itemVariants}>
                  <GlassCard hover className="px-4 py-3 flex items-center gap-2.5">
                    <span style={{ display: 'flex', alignItems: 'center', color: skill.color || 'inherit' }}>
                      {skill.color === null ? (
                        <skill.icon />
                      ) : typeof skill.icon === 'function' && skill.icon.toString().includes('svg') ? (
                        <skill.icon />
                      ) : (
                        <skill.icon size={20} />
                      )}
                    </span>
                    <span className="font-mono text-sm" style={{ color: '#F1F5F9' }}>
                      {skill.name}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
