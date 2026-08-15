import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Small uppercase eyebrow, e.g. "02 — Work". */
  label: string;
  title: string;
  /** Optional controls rendered on the right on wider screens. */
  aside?: ReactNode;
}

export default function SectionHeading({
  label,
  title,
  aside,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="label">{label}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      {aside ? <div className="md:pb-1">{aside}</div> : null}
    </div>
  );
}
