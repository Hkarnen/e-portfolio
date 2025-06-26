import React from "react";

/** Page-specific <title> and meta tags */
export function meta() {
  return [
    { title: "Houston Karnen – Projects" },
    {
      name: "description",
      content: "Personal and university projects.",
    },
  ];
}

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <section className="text-center space-y-4">
        <h1>Projects</h1>
        <p>More projects coming soon. For now, check out these university assignments</p>
      </section>

      <section className="text-center">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 space-y-4">
          <h2>COMP90024 Assignment 2</h2>
          <p>A project on the Melbourne Research Cloud involving OpenStack, Kubernetes, Docker, Fission, Elasticsearch</p>
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
      </section>
    </div>
  );
}