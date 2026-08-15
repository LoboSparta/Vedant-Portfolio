"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ProjectCard from "./ProjectCard";
import ProjectViewer from "./ProjectViewer";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  filterProjects,
  filters,
  getProjects,
  type Filter,
  type ResolvedProject,
} from "@/data/projects";

export default function ProjectGrid() {
  const allProjects = useMemo(() => getProjects(), []);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => filterProjects(allProjects, activeFilter),
    [allProjects, activeFilter],
  );

  const counts = useMemo(() => {
    const entries = filters.map((filter) => [
      filter,
      filterProjects(allProjects, filter).length,
    ]);
    return Object.fromEntries(entries) as Record<Filter, number>;
  }, [allProjects]);

  const featured = visible.filter((project) => project.featured);
  const rest = visible.filter((project) => !project.featured);

  const openProject = (project: ResolvedProject) =>
    setOpenIndex(visible.findIndex((item) => item.id === project.id));

  const step = (direction: 1 | -1) =>
    setOpenIndex((current) =>
      current === null
        ? null
        : (current + direction + visible.length) % visible.length,
    );

  const handleFilterChange = (filter: Filter) => {
    setActiveFilter(filter);
    setOpenIndex(null);
  };

  return (
    <section id="work" className="shell scroll-mt-24 py-14 md:py-20">
      <SectionHeading
        label="Work"
        title="Selected Work"
        aside={
          <CategoryFilter
            active={activeFilter}
            onChange={handleFilterChange}
            counts={counts}
          />
        }
      />

      {/* The key makes the grid fade in again whenever the filter changes. */}
      <div key={activeFilter} className="fade-in">
        {featured.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 md:mt-12 md:grid-cols-3 md:gap-x-7 md:gap-y-12">
            {featured.map((project, index) => (
              <Reveal key={project.id} delay={Math.min(index, 3) * 60}>
                <ProjectCard
                  project={project}
                  onOpen={openProject}
                  variant="featured"
                />
              </Reveal>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <>
            <div className="mt-14 flex items-center gap-4 md:mt-20">
              <p className="label shrink-0">More Work</p>
              <span className="h-px w-full bg-line" />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-5">
              {rest.map((project, index) => (
                <Reveal key={project.id} delay={Math.min(index, 4) * 50}>
                  <ProjectCard project={project} onOpen={openProject} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        {visible.length === 0 && (
          <p className="mt-12 text-sm text-muted">
            No projects in this category yet. Add one in{" "}
            <code className="text-ink">data/projects.ts</code>.
          </p>
        )}
      </div>

      <ProjectViewer
        project={openIndex === null ? null : visible[openIndex]}
        onClose={() => setOpenIndex(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </section>
  );
}
