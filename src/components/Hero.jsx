import React from 'react'
import { LuGithub } from "react-icons/lu"
import { LiaLinkedin } from "react-icons/lia"
import { LuMail } from "react-icons/lu"

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-custom-background text-custom-secondary">
      <div className="flex flex-col justify-center items-center z-10 font-custom-alt text-center">
        <h1 className="text-3xl sm:text-4xl">Hi, I'm</h1>
        <h1 className="text-3xl sm:text-4xl">Kevin Payan</h1>
        <h2 className="text-xl sm:text-2xl mt-2 text-custom-text">I'm a Software Engineer</h2>
      </div>
      <button
        className="mt-6 bg-custom-primary text-custom-accent font-medium px-6 py-2 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-custom-primary/40"
        onClick={() =>
          document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })
        }
      >
        Explore My Journey
      </button>
      <div className="flex items-center justify-center space-x-6 mt-6 z-10">
        <a href="https://github.com/Kevin-Payan" target="_blank" rel="noopener noreferrer">
          <LuGithub className="w-6 h-6 text-custom-primary transition-transform transform hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />
        </a>
        <a href="https://www.linkedin.com/in/kevinpayan/" target="_blank" rel="noopener noreferrer">
          <LiaLinkedin className="w-7 h-7 text-custom-primary transition-transform transform hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />
        </a>
        <a href="mailto:kevinpn@hotmail.com" target="_blank" rel="noopener noreferrer">
          <LuMail className="w-6 h-6 text-custom-primary transition-transform transform hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />
        </a>
      </div>
    </section>
  )
}

export default Hero
