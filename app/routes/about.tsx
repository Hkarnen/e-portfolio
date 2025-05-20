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
        {/* SI-Redback */}
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h4 className="font-bold">
                Full Stack Developer - Clinical Reasoning Simulations
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                University of Melbourne x University of Eastern Finland (Mar
                2025 - Present)
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>
                  Collaborated on an AI-driven clinical simulator to be used by medical students and researchers at the University of Eastern Finland.
                </li>
                <li>
                  Built a real-time simulation engine using XState v5, with a RESTful backend integrated with PostgreSQL and a React frontend.
                </li>
                <li>
                  Developed a natural language chat interface using LLaMA 3.5 on Groq and LangChain to interpret student input and trigger clinical state transitions.
                </li>
                <li>
                  Authored onboarding documentation and API test collections using Postman for easier developer handoff and QA.
                </li>
                <li>
                  Completed product 3 weeks faster due to early research on state machines.
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
        </div>
      </div>
    </section>
  );
}
