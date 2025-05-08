import React from 'react'
import { LuGithub } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { LuMail } from "react-icons/lu";


const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-auto'>
      <div className='relative'>
        <img src="/src/assets/me.png" alt="image of me" className='top-0 z-0' />
        <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-custom-background to-transparent pointer-events-none"></div>
      </div>
      <div className='flex flex-col justify-center items-center z-10 font-custom-alt'>
      <h1 className='text-4xl'>Hi, I'm</h1>
      <h1 className='text-4xl'>Kevin Payan</h1>
      <h2 className='text-2xl m-2'>I'm a Software Engineer</h2>
      </div>
      <button className='bg-custom-border px-4 py-2 rounded m-3 z-10 text-custom-accent'>
        View my work
      </button>
      <div className='flex items-center justify-center space-x-4 m-2 z-10'>
        <a href="https://github.com/Kevin-Payan"><LuGithub className='w-6 h-6 text-custom-primary' /></a>
        <a href="https://www.linkedin.com/in/kevinpayan/"><LiaLinkedin className='w-8 h-8 text-custom-primary' /></a>
        <a href="mailto:kevinpn@hotmail.com"><LuMail className='w-6 h-6 text-custom-primary' /></a>
      </div>
    </div>
  )
}

export default Hero