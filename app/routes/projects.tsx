import React from "react";

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
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1>Technical Projects</h1>
        <div className="max-w-3xl mx-auto">
          <p>
            A collection of technical projects spanning cloud computing, distributed systems, 
            and modern web development. Each project demonstrates practical application of 
            advanced computing concepts and industry-standard technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Cloud Computing Project - Enhanced */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 space-y-6 hover:shadow-lg transition-shadow">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">☁️</span>
              <h2 className="text-xl font-bold">Cloud Analytics Platform</h2>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              COMP90024 Assignment 2 - Melbourne Research Cloud
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Built a scalable social media analytics platform on Melbourne Research Cloud infrastructure, 
              processing Twitter data to analyze cultural patterns across Australian cities using cloud-native technologies.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {["OpenStack", "Kubernetes", "Docker", "Fission", "Elasticsearch", "CouchDB", "Ansible", "React"].map((tech) => (
                  <span key={tech} className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Technical Highlights:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  Deployed multi-node OpenStack cluster with automated scaling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  Implemented serverless data processing with Fission functions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  Built real-time analytics dashboard with Elasticsearch integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">▸</span>
                  Orchestrated containerized microservices with Kubernetes
                </li>
              </ul>
            </div>
          </div>
          
          <a
            href="https://github.com/Hkarnen/comp90024-assignment-2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span>📂</span>
            View on GitHub
          </a>
        </div>

        {/* E-Portfolio Project */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 space-y-6 hover:shadow-lg transition-shadow">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              <h2 className="text-xl font-bold">Interactive Portfolio</h2>
            </div>
            <p className="text-purple-600 dark:text-purple-400 font-medium">
              Personal Project - Modern React Portfolio with AWS Infrastructure
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Developed this responsive portfolio website using modern React patterns and deployed 
              with complete AWS infrastructure. Features dynamic content management, optimized performance, 
              and scalable cloud architecture (currently running on Vercel for simplicity).
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {["React Router 7", "TypeScript", "Tailwind CSS", "Vite", "AWS", "Terraform", "Docker", "Vercel"].map((tech) => (
                  <span key={tech} className="bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Technical Highlights:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  Built with React Router 7 App Router and SSR capabilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  Designed AWS infrastructure with VPC, EC2, and Security Groups
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  Implemented Infrastructure as Code using Terraform
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  Responsive design with modern CSS animations and dark mode
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-3">
            <a
              href="https://github.com/Hkarnen/e-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              <span>📂</span>
              View Source
            </a>
            <span className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium">
              <span>🌐</span>
              You're here!
            </span>
          </div>
        </div>

        {/* NLP Fact-Checking Pipeline Project */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 space-y-6 hover:shadow-lg transition-shadow">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔬</span>
              <h2 className="text-xl font-bold">NLP Fact-Checking Pipeline</h2>
            </div>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium">
              NLP Data Engineer — Two-stage retrieval with re-ranking and LLM classification
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Built a scalable fact-checking pipeline combining dense retrieval, cross-encoder re-ranking,
              and LLM-based claim classification. Designed for 1M+ documents with fast semantic search and
              measurable recall improvements.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Sentence-BERT", "FAISS", "Hugging Face", "Cross-Encoder", "Gemma-3-1B-it", "Elasticsearch", "Pandas"].map((tech) => (
                  <span key={tech} className="bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Technical Highlights:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">▸</span>
                  Indexed 1M+ documents using Sentence-BERT embeddings with FAISS for fast ANN search
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">▸</span>
                  Added cross-encoder re-ranking and dynamic filtering, boosting recall by 18%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">▸</span>
                  Chained Gemma-3-1B-it for claim classification with explainable outputs and evaluation notebook
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium cursor-not-allowed" title="Fork coming soon">
              <span>⏳</span>
              Repo coming soon
            </span>
          </div>
        </div>

        {/* Traffic & Air Quality Analytics Project */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 space-y-6 hover:shadow-lg transition-shadow">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛰️</span>
              <h2 className="text-xl font-bold">Traffic & Air Quality Analytics</h2>
            </div>
            <p className="text-sky-600 dark:text-sky-400 font-medium">
              Serverless on Kubernetes + Fission — OpenStack Melbourne Research Cloud
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Built a serverless data pipeline ingesting VicRoads and Bureau of Meteorology APIs into
              Elasticsearch, then analyzed PM2.5 vs congestion in Jupyter. Produced a high-distinction report.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {["Kubernetes", "Fission", "OpenStack (MRC)", "Python", "Elasticsearch", "Docker", "Jupyter"].map((tech) => (
                  <span key={tech} className="bg-sky-50 dark:bg-sky-900 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Technical Highlights:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 mt-1">▸</span>
                  Serverless ETL jobs with Fission and cron triggers for hourly ingestion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 mt-1">▸</span>
                  Normalized and indexed API data with robust Elasticsearch mappings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 mt-1">▸</span>
                  Data exploration and visualization in Jupyter; insights on PM2.5 vs traffic congestion
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium" title="Academic work; repo private">
              <span>🔒</span>
              Summary available on request
            </span>
          </div>
        </div>

        {/* HPC Cluster Project Placeholder */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 space-y-4 text-center">
          <div className="space-y-2">
            <span className="text-3xl">🖥️</span>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              HPC Cluster Project
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Spartan HPC cluster optimization project coming soon...
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}

