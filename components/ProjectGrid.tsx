"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import LongFormCollection from "./LongFormCollection";
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
import { longFormCollection } from "../data/longform";

export default function ProjectGrid() {
  const allProjects = useMemo(() => getProjects(), []);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => filterProjects(allProjects, activeFilter),
    [allProjects, activeFilter],
  );

  const episodeCount = longFormCollection.episodes.length;

  const counts = useMemo(() => {
    const entries = filters.map((filter) => [
      filter,
      filterProjects(allProjects, filter).length,
    ]);
    const byFilter = Object.fromEntries(entries) as Record<Filter, number>;
    // "All" counts every video on the page; Long-Form counts its episodes.
    byFilter.All = allProjects.length + episodeCount;
    byFilter["Long-Form"] = episodeCount;
    return byFilter;
  }, [allProjects, episodeCount]);

  const featured = visible.filter((project) => project.featured);
  const rest = visible.filter((project) => !project.featured);
  const showLongForm = activeFilter === "All" || activeFilter === "Long-Form";

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
    <section id="work" className="shell scroll-mt-24 py-16 md:py-24">
      <SectionHeading
        title="Selected Work"
        description="Short-form Reels and AI-assisted ads, alongside long-form podcast editing."
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
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 md:mt-14 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
            {featured.map((project, index) => (
              <Reveal
                key={project.id}
                delay={Math.min(index, 3) * 70}
                /* Editorial stagger: the middle column sits lower on desktop. */
                className={index % 3 === 1 ? "md:mt-16" : ""}
              >
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
            <div className="mt-16 flex items-center gap-4 md:mt-24">
              <p className="label shrink-0">More work</p>
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

        {visible.length === 0 && !showLongForm && (
          <p className="mt-12 text-sm text-muted">
            No projects in this category yet. Add one in{" "}
            <code className="text-ink">data/projects.ts</code>.
          </p>
        )}

        {showLongForm && (
          <div className={activeFilter === "All" ? "mt-20 md:mt-28" : "mt-10 md:mt-14"}>
            <Reveal>
              <LongFormCollection />
            </Reveal>
          </div>
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
