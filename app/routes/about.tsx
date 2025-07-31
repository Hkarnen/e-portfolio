import React from "react";
import { MediaPicker, type MediaItem } from "../components/MediaPicker";
import { type CarouselImage } from "../components/ImageCarousel";

interface Work {
  title: string;
  subtitle: string;
  company: string;
  date: string;
  summary: string;
  media: MediaItem; // Required media using MediaPicker
  tech: string[];
  highlights: string[];
}

interface WorkCardProps {
  work: Work;
  index: number;
}

/** Page-specific <title> and meta tags */
export function meta() {
  return [
    { title: "Houston Karnen - About" },
    {
      name: "description",
      content: "Background, education, technical skills, work experience",
    },
  ];
}

const works: Work[] = [
  {
    title: "Full Stack Developer",
    subtitle: "Clinical Reasoning Simulations Platform",
    company: "University of Melbourne × University of Eastern Finland",
    date: "Mar 2025 – Present",
    summary: "A real-time simulation platform for practicing clinical reasoning under pressure, where students interact with a virtual patient using natural language",
    media: {
      type: 'video',
      videoSrc: '/videos/clinical-demo.mp4',
      posterSrc: '/images/si-logo.png',
      title: 'Clinical Reasoning Platform Demo'
    },
    tech: ["Groq", "LLaMA 3", "LangChain", "Tailwind", "Express", "PostgreSQL", "XState", "React"],
    highlights: [
      "Mapped free-text input in multiple languages to structured clinical actions created in XState and YAML files with >95% accuracy",
      "Simulation engine mimics real-time patient deterioration with config-driven timers",
      "Adopted xAPI standard for full interaction logging and research use",
    ]
  },
  {
    title: "Full Stack Developer",
    subtitle: "Motivational Modelling Tool",
    company: "Queue Solutions",
    date: "Jun 2024 – Dec 2024",
    summary: "Graph-based stakeholder modelling platform for university student teams' project planning",
    media: {
      type: 'images',
      images: [
        { src: '/images/queue.png', alt: 'Queue Solutions project screenshot' }
      ]
    },
    tech: ["React", "MaxGraph", "React Bootstrap"],
    highlights: [
      "Modernized 30% of legacy jQuery codebase to React",
      "Implemented graph features (reset, export, themes, etc.)",
      "Used in University of Melbourne's IT Project curriculum"
    ]
  },
  {
    title: "Co-Founder & Full Stack Developer",
    subtitle: "StudyGenie",
    company: "StudyGenie",
    date: "Jan 2024 – Dec 2024",
    summary: "Startup project: AI quiz app for students using GPT-4 and learning materials",
    media: {
      type: 'images',
      images: [
        { src: '/images/studygenie.png', alt: 'StudyGenie UI screenshot' }
      ]
    },
    tech: ["Microsoft Azure", "OpenAI", "Flask", "React"],
    highlights: [
      "Secured Microsoft funding for innovative AI approach",
      "Generated personalized quizzes from study documents",
      "Built progress dashboard with detailed analytics"
    ]
  },
  {
    title: "Full Stack Developer",
    subtitle: "Longbeach Scheduler",
    company: "Longbeach Community Centre",
    date: "Jul 2023 – Nov 2023",
    summary: "Staff booking system with CSV export, role-based login, and admin dashboard, fully replacing paper processes",
    media: {
      type: 'images',
      images: [
        { src: '/images/longbeach.png', alt: 'Longbeach app screenshot' }
      ]
    },
    tech: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Eliminated paper-based attendance systems entirely",
      "Built tutor interface and attendance tracking",
      "Improved operational efficiency significantly"
    ]
  },
];

const languages: string[] = ["English (Fluent)", "Indonesian (Native)", "Chinese (Basic)"];

const WorkCard = ({ work, index }: WorkCardProps) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 items-center fade-in ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Content Section */}
      <div className="lg:w-1/2 space-y-4">
        <div className="space-y-2">
          <h3>
            {work.title}
          </h3>
          
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium"> 
            {work.subtitle}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">{work.company}</span>
            <span>•</span>
            <span>{work.date}</span>
          </div>
        </div>

        <p>
          {work.summary}
        </p>

        {/* Tech Stack */}
        <div>
          <div className="flex flex-wrap gap-2">
            {work.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="space-y-2 overflow-hidden">
          <h4> 
            Key Highlights:
          </h4>
          <ul className="space-y-1">
            {work.highlights.map((point, i) => (
              // Spring animation on bullet points on hover
              <li 
                key={i} 
                className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
              >
                {/* Random spinny on bullet points */}
                <span className="text-blue-500 mt-1 text-xs">
                    ▸
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      {/* Media Section */}
      <div className="lg:w-1/2">
        <div className="relative group">
          <MediaPicker media={work.media} />
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const skills = [
    "React", "React Bootstrap", "Motion", "JavaScript", "TypeScript", "Node.js", "Express", "Python", 
    "Flask", "Java", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Fission", "Elasticsearch", "XState", 
    "Microsoft Azure", "Tailwind CSS"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1>About Me</h1>
        <div className="max-w-3xl mx-auto space-y-4">
          <p>
            I'm a final-semester Master of IT (Distributed Computing) student at the 
            University of Melbourne, passionate about building scalable web
            applications, integrating AI tools, and architecting modern cloud
            systems.
          </p>
          <p>
            I enjoy solving real-world problems through software and
            collaborating with diverse teams to create meaningful impact.
          </p>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-6 text-center">
          <div className="text-2xl mb-2">
            🎓
          </div>

          <h3>
            Education
          </h3>

          <div className="space-y-2">
            <h4>
              University of Melbourne
            </h4>

            <p className="card-text">
              Master of IT <br />
              Distributed Computing
              <p className="card-text-accent">
                WAM: 77.5
              </p>
            </p>
            
            <p className="card-text">
              Bachelor of Science<br />Computing & Software Systems
              <p className="card-text-accent">
                WAM: 79.15
              </p>
            </p>
          </div>
        </div>

        {/* Languages */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-6 text-center hover:scale-105 transform transition-transform duration-200">
          <div className="text-2xl mb-2">
            🌏
          </div>

          <h3>
            Languages
          </h3>

          <div className="space-y-2">
            {languages.map((lang, i) => (
              <p 
                key={lang}
                className="card-text hover:scale-105 transform transition-transform duration-200"
              >
                {lang}
              </p>
            ))}
          </div>
        </div>
        
        {/* Location */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-6 text-center hover:scale-105 transform transition-transform duration-200">
          <div className="text-2xl mb-3">
            📍
          </div>
          <h3>
            Location
          </h3>
          <p className="card-text">
            Melbourne, Victoria<br />
            Australia
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="space-y-6">
        <h2 className="text-center">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform transition-transform duration-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="space-y-12">
        <h2 className="text-center">
          Work Experience
        </h2>

        <div className="space-y-16">
          {works.map((work, i) => (
            <WorkCard key={work.title} work={work} index={i} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      {/* <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8"
      >
        <h2>Let's Connect</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Interested in collaborating or want to know more about my work?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="mailto:houston.ten@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📧</span>
            Get In Touch
          </motion.a>
          <motion.a
            href="/Karnen_Houston_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📄</span>
            Download Resume
          </motion.a>
        </div>
      </motion.section> */}
    </div>
  );
}
