import React from "react";
import { motion } from "motion/react";

interface Work {
  title: string;
  subtitle: string;
  company: string;
  date: string;
  summary: string;
  image: string;
  alt: string;
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
    image: "/images/simulation.png",
    alt: "Simulation screenshot",
    tech: ["Groq", "LLaMA 3.5", "LangChain", "Tailwind", "Express", "PostgreSQL", "XState", "React"],
    highlights: [
      "Mapped free-text input to structured clinical actions with >95% accuracy",
      "Simulation engine mimics real-time deterioration with config-driven timers",
      "Adopted xAPI standard for full interaction logging and research use"
    ]
  },
  {
    title: "Full Stack Developer",
    subtitle: "Motivational Modelling Tool",
    company: "Queue Solutions",
    date: "Jun 2024 – Dec 2024",
    summary: "Graph-based stakeholder modelling platform for university student teams' project planning",
    image: "/images/queue.png",
    alt: "Queue Solutions project",
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
    image: "/images/studygenie.png",
    alt: "StudyGenie UI",
    tech: ["Microsoft Azure", "OpenAI API", "Flask", "React", "Azure Storage"],
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
    image: "/images/longbeach.png",
    alt: "Longbeach app screenshot",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Eliminated paper-based attendance systems entirely",
      "Built tutor interface and attendance tracking",
      "Improved operational efficiency significantly"
    ]
  },
];

// Fade up animation. Staggered.
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

// Slide in from right animation for highlights
const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

// Scale up animation for education cards
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
      delay: i * 0.2,
    },
  }),
};

const WorkCard = ({ work, index }: WorkCardProps) => {
  return (
    <motion.div
      className={`flex flex-col lg:flex-row gap-8 items-center ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      {/* Content Section */}
      <div className="lg:w-1/2 space-y-4">
        <div className="space-y-2">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {work.title}
          </motion.h3>
          
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          <div className="flex flex-wrap gap-2">
            {work.tech.map((tech, i) => (
              <motion.span
                key={i}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2 overflow-hidden"
        >
          <motion.h4
            initial={{ opacity: 0, x: -15}}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ delay: 0.4 }}
          > 
            Key Highlights:
          </motion.h4>
          <motion.ul 
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                }
              }
            }}
          >
            {work.highlights.map((point, i) => (
              // Spring animation on bullet points on hover
              <motion.li 
                key={i} 
                className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                variants={slideInRight}
                custom={i}
                whileHover={{
                  x:6,
                  transition: {type: "spring", stiffness: 400, damping: 10}
                }}
              >
                {/* Random spinny on bullet points */}
                <motion.span 
                  className="text-blue-500 mt-1 text-xs"
                  initial={{ rotate: 0, scale: 1 }}
                  whileInView={{
                    rotate: [0, 360, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                >
                    ▸
                </motion.span>
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        
      </div>

      {/* Image Section */}
      <motion.div 
        className="lg:w-1/2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative group">
          <img
            src={work.image}
            alt={work.alt}
            className="rounded-lg shadow-lg w-full object-cover aspect-video bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          />
          {/* Overlay for better visual feedback */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>
    </motion.div>
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
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
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
      </motion.section>

      {/* Quick Info Grid */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Education */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-6 text-center">
          <div className="text-2xl mb-2">🎓</div>
          <h3>Education</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            Master of IT (Distributed Computing)<br />
            {/* Bachelor of Science (Computing & Software Systems)<br /> */}
            University of Melbourne
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-6 text-center">
          <div className="text-2xl mb-2">🌏</div>
          <h3>Languages</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            English (Fluent)<br />
            Indonesian (Native)<br />
            Chinese (Basic)
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-6 text-center">
          <div className="text-2xl mb-2">📍</div>
          <h3>Location</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            Melbourne, Victoria<br />
            Australia
          </p>
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        className="space-y-6"
      >
        <h2 className="text-center">Technical Skills</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Work Experience */}
      <section className="space-y-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-16">
          {works.map((work, i) => (
            <WorkCard key={work.title} work={work} index={i} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
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
      </motion.section>
    </div>
  );
}
