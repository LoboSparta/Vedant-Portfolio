import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  /** Optional one-line description under the title. */
  description?: string;
  /** Optional controls rendered on the right on wider screens. */
  aside?: ReactNode;
}

/**
 * Every section opens with a hairline and a short amber segment, like an
 * in-point marker on a timeline.
 */
export default function SectionHeading({
  title,
  description,
  aside,
}: SectionHeadingProps) {
  return (
    <div className="relative border-t border-line pt-7 md:pt-9">
      <span
        aria-hidden="true"
        className="absolute -top-px left-0 h-px w-14 bg-accent"
      />
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>
        {aside ? <div className="md:pb-2">{aside}</div> : null}
      </div>
    </div>
  );
}
