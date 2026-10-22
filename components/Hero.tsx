import Image from "next/image";
import TimelineStrip from "./TimelineStrip";
import { experience, profile } from "@/data/site";

export default function Hero() {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />

      <div className="shell relative pb-12 pt-10 md:pb-16 md:pt-16">
        <p className="fade-up text-sm text-muted">{profile.title}</p>

        <h1
          aria-label={profile.name}
          className="mt-4 font-display text-[clamp(4rem,15vw,11.5rem)] font-extrabold leading-[0.86] tracking-[-0.045em] text-ink"
        >
          <span className="line" aria-hidden="true">
            <span className="line-inner" style={{ animationDelay: "60ms" }}>
              {firstName}
            </span>
          </span>
          <span className="line" aria-hidden="true">
            <span className="line-inner" style={{ animationDelay: "170ms" }}>
              {lastName}
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-10">
          <div className="fade-up md:col-span-7" style={{ animationDelay: "380ms" }}>
            <p className="max-w-2xl font-display text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-3xl md:text-[2.5rem]">
              {profile.headline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {profile.positioning}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition-transform duration-300 ease-editorial hover:-translate-y-0.5"
              >
                View Selected Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/60"
              >
                Let&rsquo;s Work Together
              </a>
            </div>
          </div>

          {/* Portrait + current roles — factual, kept from the original hero. */}
          <div
            className="fade-up md:col-span-5 md:pl-6"
            style={{ animationDelay: "480ms" }}
          >
            <div className="parallax-slow flex items-start gap-6 sm:gap-8">
              <div className="relative w-[132px] shrink-0 sm:w-[168px]">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2 translate-y-2 rounded-[3px] border border-accent/60"
                />
                <div className="relative overflow-hidden rounded-[3px] border border-line bg-card">
                  <Image
                    src="/images/vedant-thakur.jpg"
                    alt={profile.portraitAlt}
                    width={1000}
                    height={1250}
                    sizes="(min-width: 640px) 168px, 132px"
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="min-w-0 pt-1">
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
        </div>
      </div>

      <TimelineStrip />
    </section>
  );
}
