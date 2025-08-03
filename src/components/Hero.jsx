import React from 'react'
import { LuGithub } from "react-icons/lu"
import { LiaLinkedin } from "react-icons/lia"
import { LuMail } from "react-icons/lu"

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-custom-background text-custom-primary">
      <div className="w-full max-w-4xl px-4 sm:px-8 flex flex-col items-center">
        <div className="relative flex flex-col justify-center items-center z-10 font-custom-alt text-center">
          <div className="absolute w-80 h-80 bg-custom-primary/10 blur-3xl rounded-full z-0 opacity-40" />
          <h1 className="text-5xl sm:text-7xl font-bold relative z-10 text-custom-text-primary">
            Hi, I'm
          </h1>
          <h1 className="text-5xl sm:text-7xl font-bold mt-2 relative z-10 text-custom-text-primary">
            Kevin Payan
          </h1>
          <h2 className="text-2xl sm:text-3xl mt-4 text-custom-text-secondary relative z-10">
            I'm a Software Engineer
          </h2>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6 z-10">
          <a
            href="https://github.com/Kevin-Payan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-custom-foreground text-lg font-medium border border-custom-border hover:bg-custom-border transition-colors duration-200"
          >
            <LuGithub className="w-6 h-6 text-custom-primary" />
            <span className="text-custom-primary">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kevinpayan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-custom-foreground text-lg font-medium border border-custom-border hover:bg-custom-border transition-colors duration-200"
          >
            <LiaLinkedin className="w-6 h-6 text-custom-primary" />
            <span className="text-custom-primary">LinkedIn</span>
          </a>
          <a
            href="mailto:kevinpn@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-custom-foreground text-lg font-medium border border-custom-border hover:bg-custom-border transition-colors duration-200"
          >
            <LuMail className="w-6 h-6 text-custom-primary" />
            <span className="text-custom-primary">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
