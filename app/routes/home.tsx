import React from "react";
import { Link } from "react-router";
import { ProjectCard, type ProjectCardData } from '../components/ProjectCard';

/** Page-specific <title> and meta tags */
export function meta() {
  return [
    { title: "Houston Karnen – Software Engineer & MIT Student" },
    {
      name: "description",
      content: "Final-year MIT student specialising in distributed systems & full-stack development.",
    },
  ];
}

// Featured work project (from about page)
const featuredWork: ProjectCardData = {
  title: "Clinical Reasoning Simulations Platform",
  role: "Full Stack Developer",
  company: "University of Melbourne × University of Eastern Finland",
  description: "AI-powered medical education simulator with natural language interaction and real-time clinical reasoning.",
  tech: ["React", "Groq", "LLaMA 3", "LangChain", "Tailwind", "Express", "PostgreSQL", "XState"],
  media: {
    type: 'video',
    videoSrc: '/videos/clinical-demo.mp4',
    posterSrc: '/images/si-logo.png',
    title: 'Clinical Reasoning Platform Demo'
  },
  type: 'work'
};

// Placeholder personal projects with image carousels
const featuredPersonalProjects: ProjectCardData[] = [
  {
    title: "Personal Project 1",
    description: "Description",
    tech: ["React", "Node.js", "PostgreSQL"],
    media: {
      type: 'images',
      images: [
        { src: '/images/placeholder.png', alt: 'Personal project screenshot' }
      ]
    },
    type: 'personal',
    githubUrl: ''
  },
  {
    title: "Personal Project 2", 
    description: "Description",
    tech: ["Python", "Flask", "MongoDB"],
    media: {
      type: 'images',
      images: [
        { src: '/images/placeholder.png', alt: 'Personal project screenshot' }
      ]
    },
    type: 'personal',
    githubUrl: ''
  }
];

export default function Home() {

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-20">
      {/* Intro Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1>Houston Karnen</h1>
          <div className="space-y-2">
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
              Master's Student & Full-Stack Developer
            </p>
            <p>
              Graduating Master of IT student experienced in distributed systems, AI integration, 
              and scalable full stack applications.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 inline-block">
          <p className="text-green-800 dark:text-green-200 font-medium">
            🎓 Available for opportunities starting July 2025
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="space-y-8">
        <h2 className="text-center">Current Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-xl">
            <div className="text-2xl mb-3">🎓</div>
            <h3>Graduating Soon</h3>
            <p>Master of IT finishing June 2025</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl">
            <div className="text-2xl mb-3">💼</div>
            <h3>Currently Building</h3>
            <p>AI medical simulation platform</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl">
            <div className="text-2xl mb-3">🔍</div>
            <h3>Seeking Opportunities</h3>
            <p>Junior/entry-level full-stack roles</p>
          </div>
        </div>
      </section>

      {/* Featured Work Project */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2>Recent Work</h2>
          <p>
            Highlighting my current professional project
          </p>
        </div>
        {/* Show SI-Redback */}
        <div className="max-w-2xl mx-auto">
          <ProjectCard project={featuredWork} />
        </div>
        {/* Link to about page */}
        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View All Work Experience
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Featured Personal Projects */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2>Personal Projects</h2>
          <p>
            Showcasing my passion projects and university work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPersonalProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {/* Link to projects page */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View All Personal Projects
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8 space-y-6">
        <div className="space-y-2">
          <h2>Ready to Contribute to Your Team</h2>
          <p className="max-w-2xl mx-auto">
            I'm actively seeking junior/entry-level opportunities where I can apply my full-stack development 
            skills and passion for building meaningful software solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:houston.ten@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium hover:scale-105 transform transition-transform duration-200"
          >
            <span>📧</span>
            Get In Touch
          </a>
          <a
            href="/Karnen_Houston_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium hover:scale-105 transform transition-transform duration-200"
          >
            <span>📄</span>
            Download Resume
          </a>
          <a
            href="/Karnen_Houston_Transcript.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gray-400 text-gray-600 dark:text-gray-400 px-6 py-3 rounded-lg hover:bg-gray-400 hover:text-white transition-colors font-medium hover:scale-105 transform transition-transform duration-200"
          >
            <span>📊</span>
            View Transcript
          </a>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium hover:scale-105 transform transition-transform duration-200"
          >
            <span>👋</span>
            Learn More About Me
          </Link>
        </div>
      </section>
    </div>
  );
}