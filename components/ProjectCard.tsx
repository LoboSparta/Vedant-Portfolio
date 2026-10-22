"use client";

import VideoThumbnail from "./VideoThumbnail";
import type { ResolvedProject } from "@/data/projects";

interface ProjectCardProps {
  project: ResolvedProject;
  onOpen: (project: ResolvedProject) => void;
  variant?: "featured" | "compact";
}

export default function ProjectCard({
  project,
  onOpen,
  variant = "compact",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`Play ${project.title} — ${project.category}`}
      className="group block w-full text-left"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[4px] border border-line bg-card transition-colors duration-500 ease-editorial group-hover:border-accent/70 group-focus-visible:border-accent/70">
        <VideoThumbnail
          youtubeId={project.youtubeId}
          alt=""
          className="transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"
        />

        {/* Soft shade at the foot of the frame so the play mark always reads. */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Always visible (touch devices have no hover); turns amber on hover. */}
        <span
          className={`pointer-events-none absolute bottom-3 left-3 flex items-center justify-center rounded-full bg-black/55 text-ink backdrop-blur-sm transition-all duration-300 ease-editorial group-hover:scale-110 group-hover:bg-accent group-hover:text-paper group-focus-visible:bg-accent group-focus-visible:text-paper ${
            isFeatured ? "h-11 w-11" : "h-9 w-9"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`ml-0.5 ${isFeatured ? "h-4 w-4" : "h-3.5 w-3.5"}`}
            fill="currentColor"
          >
            <path d="M8 5.5v13l11-6.5-11-6.5z" />
          </svg>
        </span>
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3
          className={`font-display font-semibold tracking-[-0.01em] text-ink ${
            isFeatured ? "text-base sm:text-lg" : "text-sm"
          }`}
        >
          {project.title}
        </h3>
        <span
          className={`shrink-0 ${
            isFeatured ? "text-xs text-accent" : "text-[11px] text-muted"
          }`}
        >
          {project.category}
        </span>
      </div>
    </button>
  );
}
