import Reveal from "./Reveal";
import { experience, profile } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="shell pb-14 pt-10 md:pb-20 md:pt-16">
      <Reveal>
        <h1 className="font-display text-[clamp(2.5rem,10vw,5.75rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-ink">
          {profile.name}
        </h1>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 border-t border-line pt-6 md:mt-10">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-ink sm:text-2xl">
                {profile.title}
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                {profile.positioning}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity duration-200 hover:opacity-85"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
                >
                  Let&rsquo;s Work Together
                </a>
              </div>
            </div>

            {/* Current roles — factual, keeps the hero short and useful. */}
            <div className="md:col-span-5 md:border-l md:border-line md:pl-10">
              <p className="label">Currently</p>
              <ul className="mt-4 space-y-4">
                {experience.map((item) => (
                  <li key={item.company}>
                    <p className="text-sm font-medium text-ink">
                      {item.company}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">
                      {item.role} · {item.type}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
