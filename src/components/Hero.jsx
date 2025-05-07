import React from 'react'
import { LuGithub } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { LuMail } from "react-icons/lu";


const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl'>Hi, I'm Kevin Payan</h1>
      <h2 className='text-2xl'>I'm a Software Engineer</h2>
      <button className='bg-custom-border px-4 py-2 rounded m-3'>
        Placeholder
      </button>
      <div className='flex items-center justify-center space-x-4 m-2'>
        <a href="https://github.com/Kevin-Payan"><LuGithub className='w-6 h-6' /></a>
        <a href="https://www.linkedin.com/in/kevinpayan/"><LiaLinkedin className='w-8 h-8' /></a>
        <a href="mailto:kevinpn@hotmail.com"><LuMail className='w-6 h-6' /></a>
      </div>
    </div>
  )
}

export default Hero