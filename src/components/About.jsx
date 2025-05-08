import React from 'react'
import SkillTag from './SkillTag'

import { 
  SiReact, 
  SiTailwindcss,  
  SiJavascript,
  SiPython,
  SiGo,
  SiAmazonwebservices,
  SiGit,
  SiDocker,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiDotnet,
  SiExpress,
  SiServerless,
  SiNodedotjs
} from "react-icons/si";


const skills = [
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiPython, label: 'Python' },
  { icon: SiGo, label: 'Go' },
  { icon: SiNodedotjs, label: 'Node.js' },
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
];

const About = () => {
  return (
    <section className='flex flex-col h-screen w-auto'>
      <h1 className='flex text-2xl text-custom-primary p-2 m-2 font-medium'>ABOUT ME</h1>
      <p className='p-2 m-2'>
      Passionate about crafting elegant, efficient solutions to complex problems. I enjoy building APIs, 
      managing databases, and setting up cloud infrastructure—but I also enjoy making sure the frontend 
      feels smooth and intuitive. I'm especially interested in how artificial intelligence can unlock new 
      possibilities across the stack—from smarter automation to more adaptive systems. Always learning, 
      always building—I'm driven by curiosity, creativity, and the goal of delivering meaningful impact 
      through technology.
      </p>
      <div>
        <h2 className='p-2 m-2'>Skills</h2>
        <div className='flex flex-wrap gap-4 p-2 m-2'>
          {skills.map((skill, index) => (
            <SkillTag key={index} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About