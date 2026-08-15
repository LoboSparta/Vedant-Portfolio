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
      <div className="relative aspect-[9/16] overflow-hidden rounded-[3px] border border-line bg-card">
        <VideoThumbnail
          youtubeId={project.youtubeId}
          alt=""
          className="transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
        />

        {/* Quiet hover state: a slight darkening and a small play mark. */}
        <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15 group-focus-visible:bg-ink/15" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span
            className={`flex items-center justify-center rounded-full bg-paper/90 opacity-0 transition-all duration-300 ease-editorial group-hover:opacity-100 group-focus-visible:opacity-100 ${
              isFeatured ? "h-12 w-12" : "h-10 w-10"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={isFeatured ? "h-4 w-4" : "h-3.5 w-3.5"}
              fill="#171717"
            >
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </span>
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
          className={`shrink-0 uppercase tracking-[0.16em] ${
            isFeatured ? "text-[11px] text-accent" : "text-[10px] text-muted"
          }`}
        >
          {project.category}
        </span>
      </div>
    </button>
  );
}
