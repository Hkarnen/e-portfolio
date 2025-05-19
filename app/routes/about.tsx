import React from "react";


/** Page-specific <title> and meta tags */
export function meta() {
    return [
        { title: "Houston Karnen – About" },
        {
        name: "description",
        content:
            "Background, education, technical skills, work experience",
        },
    ];
}

export default function About() {
    return (
       <section className="max-w-4xl mx-auto space-y-10">
        {/* Background */}
            <div>
                <h2 className="text-2x1 font-semibold mb-2">About Me</h2>
                <p>
                    I'm a final-year Master of IT (Distributed Computing) student at the University of Melbourne,
                    passionate about building scalable web applications, integrating AI tools, and architecting modern cloud systems.
                    I enjoy solving real-world problems through software and collaborating with diverse teams.
                </p>
            </div>
        {/* Education */}
            <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>
                        <strong>Master of Information Technology – Distributed Computing</strong>, University of Melbourne (2024–2025)
                    </li>
                    <li>
                        <strong>BSc – Computing and Software Systems</strong>, University of Melbourne (2021–2023)
                    </li>
                </ul>
                
            </div>
        {/* Skills */}
            <div>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <ul className="flex flex-wrap gap-3 text-sm">
                    {[
                        "React",
                        "TypeScript",
                        "Node.js",
                        "Python",
                        "PostgreSQL",
                        "Docker",
                        "AWS",
                        "Kubernetes",
                        "XState",
                        "Azure",
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
                <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2">
                            <h4 className="font-bold">Full Stack Developer – Clinical Reasoning Simulations</h4>
                            <p className="text-sm text-gray-600 mb-2">University of Melbourne × University of Eastern Finland (Mar 2025 – Present)</p>
                            <ul className="list-disc ml-5 text-sm space-y-1">
                                <li>Built real-time clinical simulation engine using XState v5 and RESTful APIs.</li>
                                <li>Integrated LLaMA 3.5 with Groq for natural language event handling.</li>
                                <li>Managed concurrent user sessions and onboarding documentation.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/images/simulation.png"
                            alt="Simulation screenshot"
                            className="rounded shadow"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <h4 className="font-bold">Cloud Engineer – Traffic & Weather Pipeline</h4>
                        <p className="text-sm text-gray-600 mb-2">Melbourne Research Cloud (2024)</p>
                        <ul className="list-disc ml-5 text-sm space-y-1">
                            <li>Developed serverless data ingestion using Fission and REST APIs.</li>
                            <li>Processed and visualized real-time freeway, air-quality, and weather data.</li>
                            <li>Deployed Kubernetes-based pipelines with CI/CD.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/images/traffic-pipeline.png"
                            alt="Traffic pipeline"
                            className="rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}