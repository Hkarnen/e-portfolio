import React from "react";
import { MediaPicker, type MediaItem } from "../components/MediaPicker";

interface Work {
  title: string;
  subtitle: string;
  company: string;
  date: string;
  summary: string;
  media: MediaItem;
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
    { title: "Houston Karnen - Work Experience" },
    {
      name: "description",
      content: "Detailed professional work experience in full-stack development, AI applications, and cloud infrastructure projects.",
    },
  ];
}

const works: Work[] = [
  {
    title: "Full Stack Developer",
    subtitle: "Clinical Reasoning Simulations Platform",
    company: "University of Melbourne × University of Eastern Finland",
    date: "Mar 2025 – Jul 2025",
    summary: "Led development of an AI-powered medical education platform that simulates high-pressure clinical scenarios. Students interact with virtual patients using natural language, receiving real-time feedback on their diagnostic and treatment decisions. The platform serves medical students across multiple universities and supports multilingual interactions.",
    media: {
      type: 'video',
      videoSrc: '/videos/clinical-demo.mp4',
      posterSrc: '/images/si-logo.png',
      title: 'Clinical Reasoning Platform Demo'
    },
    tech: ["React", "TypeScript", "LLaMA 3", "LangChain", "Tailwind CSS", "Express.js", "PostgreSQL", "XState", "Docker"],
    highlights: [
      "Architected natural language processing pipeline using LangChain and LLaMA 3 that maps free-text clinical input to structured actions with >95% accuracy across English, Finnish, and other languages",
      "Built real-time simulation engine with XState state machines and YAML configuration files, enabling complex patient deterioration scenarios with precise timing controls",
      "Implemented xAPI standard for comprehensive interaction logging, enabling detailed learning analytics and research data collection for educational institutions",
      "Developed responsive React frontend with real-time state updates and support for multiple concurrent user simulations",
      "Created admin interface for case management, allowing instructors to upload scenarios, monitor running simulations, and manage user sessions",
      "Integrated PostgreSQL database with optimized queries for storing simulation states, user progress, and detailed interaction histories",
      "Collaborated with medical educators to ensure clinical accuracy and pedagogical effectiveness of simulation scenarios"
    ]
  },
  {
    title: "Full Stack Developer",
    subtitle: "Motivational Modelling Tool",
    company: "Queue Solutions",
    date: "Jun 2024 – Dec 2024",
    summary: "Modernized a legacy stakeholder analysis platform used by University of Melbourne's IT Project curriculum. The tool helps student teams visualize and model stakeholder relationships through interactive graph interfaces, supporting project planning and team collaboration for 200+ students per semester.",
    media: {
      type: 'images',
      images: [
        { src: '/images/queue.png', alt: 'Queue Solutions project screenshot' }
      ]
    },
    tech: ["React", "TypeScript", "MaxGraph", "React Bootstrap", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Migrated all remaining jQuery codebase to modern React components, representing 30% of the total codebase and improving maintainability and performance",
      "Implemented advanced graph visualization features including node positioning, connection routing, theme switching, and data export functionality",
      "Built responsive UI components using React Bootstrap, ensuring cross-device compatibility for student teams",
      "Developed tool specifically for University of Melbourne's capstone IT Project subject, supporting undergraduate computer science students in stakeholder analysis",
      "Collaborated directly with the subject coordinator to align tool functionality with curriculum requirements and learning objectives",
      "Created accessible solution that students can deploy locally, supporting project planning workflows for the capstone subject"
    ]
  },
  {
    title: "Co-Founder & Full Stack Developer",
    subtitle: "StudyGenie",
    company: "StudyGenie",
    date: "Jan 2024 – Dec 2024",
    summary: "Co-founded an AI-powered study platform that generates personalized quizzes from student learning materials. Secured Microsoft funding through their startup accelerator program. Built end-to-end solution from MVP to production deployment, serving students across multiple universities with GPT-4 integration.",
    media: {
      type: 'images',
      images: []
    },
    tech: ["React", "TypeScript", "Python", "Flask", "Microsoft Azure", "OpenAI GPT-4", "Azure Cognitive Services", "PostgreSQL", "Docker"],
    highlights: [
      "Secured Microsoft for Startups funding and Azure credits through competitive application process, validating innovative AI approach to personalized learning",
      "Developed intelligent content processing pipeline that extracts key concepts from PDFs, lecture notes, and textbooks using Azure Document Intelligence and GPT-4",
      "Built adaptive quiz generation system that creates contextual questions based on student learning materials and content analysis",
      "Designed comprehensive analytics dashboard showing learning patterns, knowledge gaps, and progress tracking with data visualization",
      "Implemented user authentication system and built foundation for scalable SaaS platform architecture",
      "Deployed application on Azure using App Services and Storage, enabling reliable hosting and file management for student documents"
    ]
  },
  {
    title: "Full Stack Developer",
    subtitle: "Staff Scheduling & Management System",
    company: "Longbeach Community Centre",
    date: "Jul 2023 – Nov 2023",
    summary: "Developed a comprehensive digital transformation solution for Longbeach Community Centre, completely replacing their paper-based staff scheduling and attendance tracking systems. The platform serves 50+ staff members and administrators, managing tutoring schedules, attendance records, and operational workflows.",
    media: {
      type: 'images',
      images: [
        { src: '/images/longbeach.png', alt: 'Longbeach scheduling system screenshot' }
      ],
      linkUrl: 'https://www.longbeachcentre.org.au/'
    },
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "CSV Export", "Responsive Design"],
    highlights: [
      "Completely eliminated paper-based attendance and scheduling systems, improving operational efficiency by an estimated 70%",
      "Built role-based authentication system with separate interfaces for administrators and students with appropriate permission levels",
      "Developed automated attendance tracking with real-time updates and CSV export functionality for payroll integration",
      "Implemented responsive design using React Native ensuring usability across desktop, tablet, and mobile devices for on-the-go staff management",
      "Created comprehensive admin dashboard with scheduling overview, staff availability management, and reporting capabilities",
      "Deployed secure production environment with data backup systems and user training for smooth organizational transition"
    ]
  },
];

const WorkCard = ({ work, index }: WorkCardProps) => {
  return (
    <div className="fade-in space-y-6">
      {/* Header with title, company, date */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="space-y-2">
          <h2>
            {work.title}
          </h2>
          
          <p className="text-lg mb-3 leading-relaxed text-blue-600 dark:text-blue-400 font-medium"> 
            {work.subtitle}
          </p>
          
          <p className="font-medium">{work.company}</p>
        </div>
        
        <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium lg:flex-shrink-0">
          📅 {work.date}
        </div>
      </div>

      {/* Media Section - Only show if media exists */}
      {((work.media.type === 'video' && work.media.videoSrc) || 
        (work.media.type === 'images' && work.media.images && work.media.images.length > 0)) && (
        <div className="w-full">
          <MediaPicker media={work.media} />
        </div>
      )}

      {/* Content Section - Full width below media */}
      <div className="space-y-4">
        <p>
          {work.summary}
        </p>

        {/* Tech Stack */}
        <div>
          <div className="flex flex-wrap gap-2">
            {work.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full font-medium border border-gray-200 dark:border-gray-700"
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
              <li 
                key={i} 
                className="flex items-start gap-2"
              >
                <span className="text-blue-500 mt-1 text-sm">
                    ▸
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1>Work Experience</h1>
        <div className="max-w-3xl mx-auto">
          <p>
            A detailed look at my professional projects, from AI-powered educational platforms 
            to full-stack web applications. Each role has contributed to my expertise in 
            modern development practices and collaborative software engineering.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="space-y-16">
        {works.map((work, i) => (
          <WorkCard key={work.title} work={work} index={i} />
        ))}
      </section>

      {/* Education & Credentials Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8 space-y-8">
        <h2 className="text-center">Education & Background</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="text-2xl">🎓</div>
              <h3>Education</h3>
            </div>
            
            <div className="space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <h4>Master of IT (Distributed Computing)</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  University of Melbourne • WAM: 80.8
                </p>
              </div>
              
              <div className="space-y-2">
                <h4>Bachelor of Science (Computing & Software Systems)</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  University of Melbourne • WAM: 79.15
                </p>
              </div>
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="text-2xl">💻</div>
              <h3>Core Technologies</h3>
            </div>
            
            <div className="space-y-3 text-center md:text-left">
              <div>
                <h4 className="font-semibold">Languages</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  React • TypeScript • Python • Java • Node.js
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">Cloud & DevOps</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  AWS • Docker • Terraform • Kubernetes • Linux
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">Databases</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  PostgreSQL • MongoDB • Elasticsearch
                </p>
              </div>
            </div>
          </div>
          
          {/* Languages & Location & Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="text-2xl">🌏</div>
              <h3>Personal & Achievements</h3>
            </div>
            
            <div className="space-y-3 text-center md:text-left">
              <div>
                <h4 className="font-semibold">Languages</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  English (Fluent) • Indonesian (Native) • Chinese (Basic)
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Melbourne, Victoria, Australia
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">Achievements</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Microsoft for Startups Funding • Academic Excellence Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
