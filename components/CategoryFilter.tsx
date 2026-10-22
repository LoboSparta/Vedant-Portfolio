"use client";

import { filters, type Filter } from "@/data/projects";

interface CategoryFilterProps {
  active: Filter;
  onChange: (filter: Filter) => void;
  /** Count shown next to each option. */
  counts: Record<Filter, number>;
}

export default function CategoryFilter({
  active,
  onChange,
  counts,
}: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter work by category"
      className="flex flex-wrap items-center gap-2"
    >
      {filters.map((filter) => {
        const isActive = filter === active;

        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ease-editorial ${
              isActive
                ? "border-accent bg-accent text-paper"
                : "border-line bg-transparent text-muted hover:border-ink/50 hover:text-ink"
            }`}
          >
            {filter}
            <span
              className={`ml-2 text-[11px] font-normal ${
                isActive ? "text-paper/70" : "text-muted/70"
              }`}
            >
              {counts[filter]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
