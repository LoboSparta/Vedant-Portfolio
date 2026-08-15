import Image from "next/image";
import Reveal from "./Reveal";
import { experience, profile } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="shell pb-12 pt-8 md:pb-16 md:pt-12">
      <Reveal>
        <h1 className="font-display text-[clamp(2.5rem,10vw,5.75rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-ink">
          {profile.name}
        </h1>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-6 border-t border-line pt-5 md:mt-8">
          <div className="grid gap-7 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-ink sm:text-2xl">
                {profile.title}
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                {profile.positioning}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity duration-200 hover:opacity-85"
                >
                  View Selected Work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
                >
                  Let&rsquo;s Work Together
                </a>
              </div>
            </div>

            {/* Portrait + current roles — factual, keeps the hero short and useful. */}
            <div className="md:col-span-5 md:border-l md:border-line md:pl-10">
              {/* Sized to read as a deliberate part of the hero, not a thumbnail. */}
              <div className="w-[150px] overflow-hidden rounded-[3px] border border-line bg-card sm:w-[180px]">
                <Image
                  src="/images/vedant-thakur.jpg"
                  alt={profile.portraitAlt}
                  width={1000}
                  height={1250}
                  sizes="(min-width: 640px) 180px, 150px"
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              <p className="label mt-7">Currently</p>
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
