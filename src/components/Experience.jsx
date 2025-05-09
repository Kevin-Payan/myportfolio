import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

const experiences = [
  {
    range: 'August 2025 — Current',
    title: 'Software Engineer',
    company: 'Capital One',
    link: 'https://www.capitalone.com/',
    description: `Soon...`,
    tags: ['Excited', ': D', 'New Beginnings'],
  },
  {
    range: 'June 2024 — June 2025',
    title: 'Software Engineer Intern',
    company: 'Trimble',
    link: 'https://www.trimble.com/',
    description: `Worked on the SketchUp product, specifically on the Extension Warehouse SPA built with Vue.js—fixing bugs, implementing new features, and enhancing functionality, user experience, and SEO.
    Additionally, I developed an AI-powered chatbot using a RAG approach within a serverless architecture to deliver dynamic user recommendations.
    I also contributed to the Desktop Automation team, where I automated tasks using Python to improve development workflow efficiency.
    Outside of SketchUp, I collaborated with the Trimble Cloud team, performing both automated and manual testing with Python and Pytest.`,
    tags: [
      'Web Development',
      'Agile',
      'AI',
      'Automation',
      'Testing',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-custom-background p-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-medium tracking-widest mb-8 text-custom-primary">EXPERIENCE</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-12">
          <p className="text-sm font-semibold">{exp.range}</p>
          <h3 className="text-xl font-bold mt-1 text-custom-secondary flex items-center gap-2">
            {exp.title} 
            <span>
              ·{' '}
            {exp.company}
            {' '}
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-custom-primary"
              >
                <HiOutlineExternalLink className="w-5 h-5 transition-transform transform hover:scale-110 hover:text-custom-primary hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />
              </a>
            </span>
          </h3>
          {exp.subtitle && <p className="text-custom-primary mt-1">{exp.subtitle}</p>}
          <p className="mt-2 text-sm leading-relaxed">{exp.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-custom-foreground border border-custom-border text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
