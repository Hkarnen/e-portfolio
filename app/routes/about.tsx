import React from "react";
import { motion } from "motion/react";

interface Work {
  title: string;
  company: string;
  date: string;
  summary: string;
  image: string;
  alt: string;
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
    title: "Clinical Reasoning Simulations",
    company: "Unimelb × University of Eastern Finland",
    date: "Mar 2025 – Present",
    summary: "AI-powered simulator for medical students with LLM-based chat interface and state-driven logic.",
    image: "/images/simulation.png",
    alt: "Simulation screenshot",
  },
  {
    title: "Motivational Modelling Tool",
    company: "Queue Solutions",
    date: "Jun 2024 – Dec 2024",
    summary: "Graph-based stakeholder modelling platform with zoom, export, and interactive goal logic.",
    image: "/images/queue.png",
    alt: "Queue Solutions project",
  },
  {
    title: "StudyGenie",
    company: "Co-Founder",
    date: "Jan 2024 – Dec 2024",
    summary: "Startup project: AI flashcard app for students with PDF input and OpenAI-powered generation.",
    image: "/images/studygenie.png",
    alt: "StudyGenie UI",
  },
  {
    title: "Longbeach Scheduler",
    company: "Longbeach Community Centre",
    date: "Jul 2023 – Nov 2023",
    summary: "Staff booking system with CSV export, role-based login, and form-based admin dashboard.",
    image: "/images/longbeach.png",
    alt: "Longbeach app screenshot",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
			duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const WorkCard = ({ work, index }: WorkCardProps) => {
	return (
		<motion.div 
			className={`flex flex-col md:flex-row gap-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""} `}
			variants={fadeUp}
			initial="hidden"
    	whileInView="visible"
			viewport={{ once: false, amount:0.2 }}
		>
			<div className="md:w-1/2">
				<h3>{work.title}</h3>
				<p>
					{work.company} ({work.date})
				</p>
				<p>{work.summary}</p>
			</div>
			<div className="md:w-1/2">
				<img
					src={work.image}
					alt={work.alt}
					className="rounded shadow w-full"
				/>	
			</div>
		</motion.div>
	)
};

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 space-y-10">
      {/* Background */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h1>About Me</h1>
        <p>
          I'm a final-year Master of IT (Distributed Computing) student at the 
					University of Melbourne, passionate about building scalable web
          applications, integrating AI tools, and architecting modern cloud
          systems. I enjoy solving real-world problems through software and
          collaborating with diverse teams.
        </p>
      </motion.div>

      {/* Education */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
        <h2>Education</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>
              Master of Information Technology - Distributed Computing
            </strong>
            , University of Melbourne (2024-2025)
          </li>
          <li>
            <strong>BSc - Computing and Software Systems</strong>, University of
            Melbourne (2021-2023)
          </li>
        </ul>
      </motion.div>

      {/* Skills */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
        <h2>Technical Skills</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          {[
            "React",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Express",
            "Python",
            "Flask",
            "Java",
            "PostgreSQL",
            "MongoDB",
            "Docker",
            "Kubernetes",
            "XState",
            "Microsoft Azure",
          ].map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 border rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Work Experience */}
      <div>
        <h2>Work Experience</h2>

        <div className="space-y-12">
						{works.map((work, i) => (
							<WorkCard key={work.title} work={work} index={i}/>
						))}
        </div>
      </div>
    </section>
  );
}
