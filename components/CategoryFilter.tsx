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
      role="tablist"
      aria-label="Filter work by category"
      className="flex flex-wrap items-center gap-2"
    >
      {filters.map((filter) => {
        const isActive = filter === active;

        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${
              isActive
                ? "border-ink bg-ink text-paper"
                : "border-line bg-transparent text-muted hover:border-accent hover:text-ink"
            }`}
          >
            {filter}
            <span
              className={`ml-2 text-[11px] ${
                isActive ? "text-paper/60" : "text-muted/70"
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
