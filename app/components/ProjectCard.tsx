import React from "react";
import { MediaPicker, type MediaItem } from "./MediaPicker";

interface ProjectCardData {
  title: string;
  role?: string;
  company?: string;
  description: string;
  tech: string[];
  media: MediaItem;
  type: 'work' | 'personal';
  githubUrl?: string;
  liveUrl?: string;
  date?: string; // optional display date
}

interface ProjectCardProps {
  project: ProjectCardData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasMedia =
    (project.media?.type === 'video' && project.media.videoSrc) ||
    (project.media?.type === 'images' && project.media.images && project.media.images.length > 0);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Media Section (only if present) */}
      {hasMedia && <MediaPicker media={project.media} />}
      
      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3>{project.title}</h3>
            {project.role && (
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {project.role}{project.company ? ` • ${project.company}` : ''}
              </p>
            )}
          </div>
          {project.date && (
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium text-xs whitespace-nowrap">
              📅 {project.date}
            </div>
          )}
        </div>
        
        <p>{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Action Links (standardized) */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                <span>📂</span>
                View Repo
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                <span>🚀</span>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export type { ProjectCardData };