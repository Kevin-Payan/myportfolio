import React from 'react'
import SkillTag from './SkillTag'

import { 
  SiReact, SiTailwindcss, SiJavascript, SiPython, SiGo,
  SiAmazonwebservices, SiGit, SiDocker, SiFastapi,
  SiMongodb, SiPostgresql, SiDotnet, SiExpress,
  SiServerless, SiNodedotjs
} from "react-icons/si"

const skills = [
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiPython, label: 'Python' },
  { icon: SiGo, label: 'Go' },
  { icon: SiReact, label: 'React' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: SiFastapi, label: 'FastAPI' },
  { icon: SiExpress, label: 'Express' },
  { icon: SiServerless, label: 'Serverless' },
  { icon: SiAmazonwebservices, label: 'AWS' },
  { icon: SiGit, label: 'Git' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
]

const About = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-12 max-w-4xl mx-auto">
      <h1 className="text-2xl text-custom-primary mb-8 font-medium">ABOUT ME</h1>
      <h2 className="text-xl font-semibold text-custom-secondary mb-2">Behind the code</h2>
      <p className="text-base leading-relaxed text-custom-text mb-8">
        Passionate about crafting elegant, efficient solutions to complex problems. I enjoy building APIs, 
        managing databases, and setting up cloud infrastructure—but I also enjoy making sure the frontend 
        feels smooth and intuitive. I'm especially interested in how artificial intelligence can unlock new 
        possibilities across the stack—from smarter automation to more adaptive systems. Always learning, 
        always building—I'm driven by curiosity, creativity, and the goal of delivering meaningful impact 
        through technology.
      </p>

      <h2 className="text-xl font-semibold text-custom-secondary mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillTag key={index} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </section>
  )
}

export default About
