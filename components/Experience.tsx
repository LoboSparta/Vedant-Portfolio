import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="shell scroll-mt-24 py-14 md:py-20">
      <SectionHeading label="Experience" title="Experience" />

      <div className="mt-10 md:mt-12">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 80}>
            <article
              className={`grid gap-6 py-9 md:grid-cols-12 md:gap-10 ${
                index > 0 ? "border-t border-line" : ""
              }`}
            >
              <div className="md:col-span-4">
                <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink sm:text-2xl">
                  {item.company}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.period}</p>
              </div>

              <div className="md:col-span-8">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
                  {item.role} · {item.type}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/85">
                  {item.summary}
                </p>

                <ul className="mt-6 grid gap-y-2 sm:grid-cols-2 sm:gap-x-8">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-line" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
