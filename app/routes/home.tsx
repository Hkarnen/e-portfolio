import React from "react";
import { Link } from "react-router";
import { ProjectCard, type ProjectCardData } from '../components/ProjectCard';

/** Page-specific <title> and meta tags */
export function meta() {
  return [
    { title: "Houston Karnen – Full-Stack Developer & Cloud Engineer" },
    {
      name: "description",
      content: "Recent Master of IT graduate specializing in full-stack development, cloud infrastructure, and distributed systems.",
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
              Full-Stack Developer & Cloud Infrastructure Enthusiast
            </p>
            <p>
              Recent Master of IT graduate with hands-on experience in distributed systems, cloud infrastructure, 
              and scalable full-stack applications.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 inline-block">
          <p className="text-green-800 dark:text-green-200 font-medium">
            🎓 Recent graduate available for immediate opportunities
          </p>
        </div>
      </section>

      {/* About Me - Narrative Flow */}
      <section className="space-y-12">
        {/* About Me - Combined */}
        <div className="max-w-4xl mx-auto space-y-6 fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">👨‍💻</div>
            <div>
              <h2 className="mb-2">About Me</h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Full-Stack Developer & Cloud Infrastructure Enthusiast</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8 space-y-6">
            <p>
              I've just completed my Master of IT (Distributed Computing) at the University of Melbourne, 
              where I specialized in building scalable systems and cloud infrastructure. Throughout my studies 
              and work experience, I've developed expertise in both full-stack development and DevOps practices.
            </p>
            
            <p>
              On the development side, I build complete web applications from frontend to backend using React, 
              TypeScript, Node.js, and Python, with experience ranging from AI-powered medical simulations to 
              real-time collaboration tools. On the infrastructure side, I'm passionate about deploying and 
              scaling applications using AWS, Docker, Terraform, and modern CI/CD practices.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold mb-3 text-purple-800 dark:text-purple-200">Full-Stack Development</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Java", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Express"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-base font-semibold mb-3 text-cyan-800 dark:text-cyan-200">Cloud & Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Docker", "Terraform", "Kubernetes", "Linux", "CI/CD"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="max-w-4xl mx-auto space-y-6 fade-in-delayed-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">🔍</div>
            <div>
              <h2 className="mb-2">What I'm Seeking</h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Ready to contribute and grow</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl p-8">
            <p className="mb-4">
              I'm actively seeking opportunities where I can apply my full-stack development skills alongside 
              my passion for cloud infrastructure. I'm particularly interested in roles that involve modern 
              development practices, scalable architecture, and collaborative team environments.
            </p>
            <p>
              Whether it's a full-stack developer position, DevOps role, or something that combines both, 
              I'm excited to contribute to innovative projects and continue learning from experienced teams.
            </p>
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
            to="/experience"
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
            I'm actively seeking opportunities where I can apply my full-stack development 
            skills, cloud infrastructure experience, and passion for building scalable software solutions.
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
            to="/experience"
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