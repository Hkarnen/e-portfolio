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
      slug: "cloud-analytics-platform",
      title: "Cloud Analytics Platform",
  role: "HPC Developer",
  company: "SPARTAN HPC (Unimelb)",
      date: "Apr 2025 – Jun 2025",
      description:
        "Parallelised analysis of the COMP90024 Twitter dataset on the University of Melbourne SPARTAN HPC cluster. Using the provided created_at and pre-computed sentiment fields, I partitioned the JSON across workers to compute the happiest hour/day (max aggregate sentiment) and most active hour/day (max tweet count). Jobs were submitted via SLURM and scaled across 1×1, 1×8, and 2×8 core/node configurations, recording end-to-end runtime and speedup on the shared system.",
      tech: ["Python", "JSON", "mpi4py", "SLURM", "SPARTAN HPC"],
      media: { type: "images", images: [] },
      type: "personal",
  githubUrl: "https://github.com/Hkarnen/COMP90024-A1",
    },
    {
      slug: "interactive-portfolio",
      title: "Interactive Portfolio",
      role: "Developer",
      company: "Personal",
      date: "Jul 2025 – Aug 2025",
      description:
        "Built a fast, accessible portfolio focused on clarity over flair. Problem: keep content accurate and maintainable. Approach: React Router 7 + TypeScript + Tailwind with reusable cards and conditional media; Terraform for AWS learning, deployed on Vercel for simplicity. Outcome: consistent UI, standardized actions, and easy content updates.",
      tech: ["React Router 7", "TypeScript", "Tailwind CSS", "Vite", "AWS", "Terraform", "Docker", "Vercel"],
      media: { type: "images", images: [] },
      type: "personal",
      githubUrl: "https://github.com/Hkarnen/e-portfolio",
    },
    {
      slug: "nlp-fact-checking-pipeline",
      title: "NLP Fact-Checking Pipeline",
      role: "NLP Data Engineer",
      company: "Group Project",
      date: "Apr 2025 – Jun 2025",
      description:
        "Built a fact-checking system for the COMP90042 climate-claims task: given a claim, retrieve relevant evidence passages from a large corpus and predict one of {SUPPORTS, REFUTES, NOT_ENOUGH_INFO, DISPUTED}. The pipeline uses Sentence-BERT + FAISS for dense retrieval, cross-encoder re-ranking, and Gemma-3-1B-it for claim classification, delivering a strong recall lift over the provided baseline on a 1M+ document set within Colab-scale constraints.",
      tech: ["Python", "Sentence-BERT", "FAISS", "Hugging Face", "Cross-Encoder", "Gemma-3-1B-it", "Elasticsearch", "Pandas"],
      media: { type: "images", images: [] },
      type: "personal",
    },
    {
      slug: "traffic-air-quality-analytics",
      title: "Traffic & Air Quality Analytics",
      role: "DevOps / Cloud Engineer",
      company: "OpenStack MRC",
      date: "Apr 2024 – Jun 2024",
      description:
        "Built a real-time pipeline on the Melbourne Research Cloud: Fission harvesters on Kubernetes pulled VicRoads traffic, BoM weather, and EPA air-quality feeds, transformed them, and loaded Elasticsearch indices. I analyzed travel time and pollutant trends (PM10/PM2.5, etc.) across freeway segments in Jupyter, highlighting relationships between congestion and air quality and proposing improvements to reduce cold starts and streamline data flow.",
      tech: ["Kubernetes", "Fission", "OpenStack (MRC)", "Python", "Elasticsearch", "Docker", "Jupyter"],
      media: { type: "images", images: [] },
      type: "personal",
      githubUrl: "https://github.com/Hkarnen/comp90024-assignment-2",
    },
    {
      slug: "kr-translator",
      title: "KR Translator",
      role: "Developer",
      company: "Personal",
      date: "2025",
      description:
        "A Chrome extension for reading Korean web novels where text is embedded in images. I built a selection mode to pick images on the page, run OCR with Tesseract.js (bundled locally to satisfy Manifest V3), then batch-translate the extracted Korean into natural English using the OpenAI API. Translations open in a dedicated results window with saved history and adjustable font/size, and the API key is managed via Chrome local storage.",
      tech: ["Chrome Extension (MV3)", "JavaScript", "Tesseract.js", "OpenAI API", "HTML/CSS", "Chrome Storage"],
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

      {/* Projects Grid with anchor targets for deep links */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} id={p.slug ?? p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}> 
            <ProjectCard project={p} />
          </div>
        ))}
      </section>
    </div>
  );
}

