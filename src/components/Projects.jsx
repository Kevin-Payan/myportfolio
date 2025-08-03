import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="bg-custom-background w-full px-4 sm:px-8 py-12 max-w-4xl mx-auto text-custom-text">
      <h2 className="text-2xl font-medium tracking-widest mb-8 text-custom-secondary">PROJECTS</h2>
      <div className="mb-12">
        <h3 className="text-xl font-bold mt-1 text-custom-secondary">HuellitasApp</h3>
        <p className="mt-2 text-sm leading-relaxed">
          A cross-platform mobile booking app for dog walking services. Built with React Native and ASP.NET Core, it enables pet owners to schedule walks, make secure payments via Stripe, and locate walkers using Google Maps. Hosted on Azure, the app is designed for deployment on both iOS and Android from a single codebase. Focused on streamlined booking rather than real-time ride matching.
        </p>
      </div>
    </section>
  )
}

export default Projects

