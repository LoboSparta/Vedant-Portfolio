"use client";

import { useCallback, useEffect, useRef } from "react";
import type { ResolvedProject } from "@/data/projects";

interface ProjectViewerProps {
  project: ResolvedProject | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectViewer({
  project,
  onClose,
  onPrev,
  onNext,
}: ProjectViewerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    if (!project) return;

    // Lock background scrolling while the viewer is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title}, ${project.category}`}
      className="fixed inset-0 z-50 overflow-y-auto bg-ink/80 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-8"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="mx-auto w-full max-w-5xl rounded-[4px] border border-line bg-paper"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-6">
          <p className="label">{project.category}</p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous project"
              className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next project"
              className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              Next
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="ml-1 rounded-full border border-line px-4 py-1.5 text-sm text-ink transition-colors hover:border-ink"
            >
              Close
            </button>
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_300px]">
          {/* Video — keeps its natural vertical ratio, never cropped. */}
          <div className="flex items-center justify-center bg-ink p-3 sm:p-6">
            <div className="relative aspect-[9/16] h-[58vh] max-h-[640px] w-auto max-w-full overflow-hidden rounded-[3px] bg-black">
              <iframe
                key={project.id}
                src={embedUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          {/* Details — deliberately secondary to the video. */}
          <div className="border-t border-line p-5 sm:p-6 md:border-l md:border-t-0">
            <h2 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">
              {project.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-6">
              <p className="label">Role</p>
              <p className="mt-2 text-sm text-ink">{project.role.join(" · ")}</p>
            </div>

            <div className="mt-6">
              <p className="label">Skills</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
