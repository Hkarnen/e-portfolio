import React from "react";
import { Link } from "react-router";

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

// Featured work project (from About page)
const featuredWork = {
  title: "Clinical Reasoning Simulations Platform",
  role: "Full Stack Developer",
  company: "University of Melbourne × University of Eastern Finland",
  description: "AI-powered medical education simulator with natural language interaction and real-time clinical reasoning.",
  tech: ["React", "Express", "LLaMA 3", "PostgreSQL", "XState", "LangChain"],
  image: "/images/simulation.png",
  type: "work",
  highlight: "Used in UEF for medical research and training"
};

// Placeholder personal projects (to be replaced when Projects page is built)
const featuredPersonalProjects = [
  {
    title: "Personal Project 1",
    description: "Placeholder",
    tech: [],
    image: "/images/placeholder.png",
    type: "personal",
    highlight: "Key achievement or feature"
  },
  {
    title: "Personal Project 2", 
    description: "Placeholder",
    tech: [],
    image: "/images/placeholder.png",
    type: "personal",
    highlight: "Key achievement or feature"
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Company and Role */}
      <div className="p-6 space-y-4">
        <div>
          <h3>{project.title}</h3>
          {project.role && (
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {project.role} • {project.company}
            </p>
          )}
        </div>
        {/* Project description */}
        <p>
          {project.description}
        </p>
        {/* Highlight */}
        {project.highlight && (
          <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-3">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <span className="text-blue-500">✨</span> {project.highlight}
            </p>
          </div>
        )}
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {/* + more - TBD: make this expandable */}
          {project.tech.length > 4 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

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
            🎓 Available for opportunities starting June 2025
          </p>
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