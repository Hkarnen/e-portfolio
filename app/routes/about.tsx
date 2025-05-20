import React from "react";

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

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 space-y-10">
      {/* Background */}
      <div>
        <h1 className="font-semibold mb-2">About Me</h1>
        <p>
          I'm a final-year Master of IT (Distributed Computing) student at the
          University of Melbourne, passionate about building scalable web
          applications, integrating AI tools, and architecting modern cloud
          systems. I enjoy solving real-world problems through software and
          collaborating with diverse teams.
        </p>
      </div>
      {/* Education */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
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
      </div>
      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
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
      </div>
      {/* Work Experience */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>

        <div className="space-y-12">
          {/* Clinical Reasoning Simulations */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h4 className="font-bold">
                Full Stack Developer – Clinical Reasoning Simulations
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                University of Melbourne × University of Eastern Finland (Mar
                2025 – Present)
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>
                  Collaborated on an AI-driven clinical simulator used by
                  medical students and researchers.
                </li>
                <li>
                  Built a real-time simulation engine using XState v5, RESTful
                  backend, PostgreSQL, and React.
                </li>
                <li>
                  Developed a chat interface using LLaMA 3.5 on Groq and
                  LangChain for natural language input and state transitions.
                </li>
                <li>
                  Managed concurrent session handling, user onboarding, and
                  system documentation.
                </li>
                <li>
                  Created Postman collections for API testing and wrote
                  developer onboarding materials.
                </li>
                <li>
                  Delivered the product 3 weeks early due to early architectural
                  research.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/simulation.png"
                alt="Simulation screenshot"
                className="rounded shadow w-full"
              />
            </div>
          </div>

          {/* Queue Solutions */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h4 className="font-bold">
                Full Stack Developer Intern – Queue Solutions
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Melbourne, Australia (Jun 2024 – Dec 2024)
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>
                  Maintained and extended a motivational modelling web
                  application using React and TypeScript.
                </li>
                <li>
                  Implemented interactive goal-based graphs with zooming,
                  resizing, and exporting capabilities.
                </li>
                <li>
                  Refactored legacy frontend code and improved responsiveness
                  and accessibility.
                </li>
                <li>
                  Developed new UI flows to support stakeholder onboarding and
                  requirement tracking.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/queue.png"
                alt="Queue Solutions project"
                className="rounded shadow w-full"
              />
            </div>
          </div>

          {/* StudyGenie */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h4 className="font-bold">Co-Founder – StudyGenie</h4>
              <p className="text-sm text-gray-600 mb-2">
                Melbourne, Australia (Jan 2024 – Dec 2024)
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>
                  Co-founded an educational startup that helps university
                  students study more effectively.
                </li>
                <li>
                  Built AI-driven flashcard generator using OpenAI GPT models
                  and PDF extraction tools.
                </li>
                <li>Designed the frontend UI using Tailwind CSS and React.</li>
                <li>
                  Acquired over 100 beta users and pitched the project at
                  university entrepreneurship events.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/studygenie.png"
                alt="StudyGenie UI"
                className="rounded shadow w-full"
              />
            </div>
          </div>

          {/* Longbeach */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h4 className="font-bold">
                Full Stack Developer – Longbeach Community Centre
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Victoria, Australia (Jul 2023 – Nov 2023)
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>
                  Developed a staff scheduling and booking system using Flask
                  and PostgreSQL.
                </li>
                <li>
                  Created CSV export functionality and form-based UI using Jinja
                  templates and Bootstrap.
                </li>
                <li>
                  Delivered a production-ready web app with user authentication
                  and role-based access.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/longbeach.png"
                alt="Longbeach app screenshot"
                className="rounded shadow w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
