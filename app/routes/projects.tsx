import React from "react";
import { ProjectCard, type ProjectCardData } from "../components/ProjectCard";

/** Page-specific <title> and meta tags */
export function meta() {
  return [
    { title: "Houston Karnen - Projects" },
    {
      name: "description",
      content: "Technical projects showcasing cloud computing, distributed systems, and full-stack development skills.",
    },
  ];
}

export default function Projects() {
  const projects: ProjectCardData[] = [
    {
      title: "Cloud Analytics Platform",
      role: "Cloud Engineer",
      company: "Melbourne Research Cloud",
      date: "Apr 2025 – Jun 2025",
      description:
        "Scalable social media analytics platform on MRC OpenStack; Kubernetes + Fission serverless processing; Elasticsearch dashboard.",
      tech: ["OpenStack", "Kubernetes", "Docker", "Fission", "Elasticsearch", "CouchDB", "Ansible", "React"],
      media: { type: "images", images: [] },
      type: "personal",
      githubUrl: "https://github.com/Hkarnen/comp90024-assignment-2",
    },
    {
      title: "Interactive Portfolio",
      role: "Developer",
      company: "Personal",
      date: "Jul 2025 – Aug 2025",
      description:
        "This site. React Router 7 + TypeScript + Tailwind; IaC with Terraform; deployed via AWS infra (running on Vercel).",
      tech: ["React Router 7", "TypeScript", "Tailwind CSS", "Vite", "AWS", "Terraform", "Docker", "Vercel"],
      media: { type: "images", images: [] },
      type: "personal",
      githubUrl: "https://github.com/Hkarnen/e-portfolio",
      liveUrl: "/",
    },
    {
      title: "NLP Fact-Checking Pipeline",
      role: "NLP Data Engineer",
      company: "Group Project",
      date: "Apr 2025 – Jun 2025",
      description:
        "Two-stage retrieval (Sentence-BERT + FAISS) with cross-encoder re-ranking and Gemma-3-1B-it claim classification; 18% recall boost on 1M+ docs.",
      tech: ["Python", "Sentence-BERT", "FAISS", "Hugging Face", "Cross-Encoder", "Gemma-3-1B-it", "Elasticsearch", "Pandas"],
      media: { type: "images", images: [] },
      type: "personal",
    },
    {
      title: "Traffic & Air Quality Analytics",
      role: "DevOps / Cloud Engineer",
      company: "OpenStack MRC",
      date: "Apr 2024 – Jun 2024",
      description:
        "Serverless ETL on Kubernetes with Fission ingesting VicRoads + BoM APIs into Elasticsearch; analysis and visualization in Jupyter.",
      tech: ["Kubernetes", "Fission", "OpenStack (MRC)", "Python", "Elasticsearch", "Docker", "Jupyter"],
      media: { type: "images", images: [] },
      type: "personal",
    },
    {
      title: "KR Translator",
      role: "Developer",
      company: "Personal",
      date: "2025",
      description:
        "Korean-to-English translation utilities and tooling for study notes; experiments with tokenization and prompt templating.",
      tech: ["Python", "Hugging Face", "Tokenizers"],
      media: { type: "images", images: [] },
      type: "personal",
      githubUrl: "https://github.com/Hkarnen/kr-translator",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1>Technical Projects</h1>
        <div className="max-w-3xl mx-auto">
          <p>
            A collection of technical projects spanning cloud computing, distributed systems, and modern web development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </section>
    </div>
  );
}

