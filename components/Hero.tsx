import Image from "next/image";
import Reveal from "./Reveal";
import { experience, profile } from "@/data/site";

const visualClips = [
  { id: "ELUwf25kz8o", label: "Commercial" },
  { id: "G2hLTxG-Cak", label: "Story" },
  { id: "PTn_5iWnwP0", label: "Long-form" },
  { id: "bay16F71V1Y", label: "Motion" },
];

export default function Hero() {
  return (
    <section id="top" className="shell relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-4 h-72 w-72 rounded-full bg-accent/10 blur-[100px] md:h-[26rem] md:w-[26rem]" />

      <Reveal>
        <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-muted sm:text-xs">
          <span className="hero-kicker-dot inline-block h-2 w-2 rounded-full bg-accent" />
          <span>Video editor · Motion & storytelling</span>
          <span className="hidden text-line sm:inline">/</span>
          <span className="hidden sm:inline">Based in {profile.location}</span>
        </div>
      </Reveal>

      <Reveal delay={70}>
        <h1 className="max-w-[1120px] font-display text-[clamp(3.2rem,10vw,9.2rem)] font-extrabold uppercase leading-[.82] tracking-[-0.075em] text-ink">
          MAKE EVERY
          <span className="mt-2 block text-accent">SECOND COUNT<span className="text-ink">.</span></span>
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-10 border-t border-line pt-7 md:mt-14 md:grid-cols-12 md:gap-12 md:pt-9">
        <Reveal delay={130} className="md:col-span-7">
          <p className="max-w-2xl text-lg leading-relaxed text-ink/85 sm:text-xl md:text-2xl">
            I&apos;m {profile.name}, a video editor shaping raw footage into sharp, story-led edits — from scroll-stopping reels and AI-assisted ads to long-form podcasts.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Rhythm, sound, motion and the details between the cuts. Built to hold attention, made to feel intentional.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-paper transition duration-300 hover:-translate-y-0.5 hover:shadow-amber">
              Explore the work <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition duration-300 hover:border-accent hover:text-accent">
              Let&apos;s make something
            </a>
          </div>
        </Reveal>

        <Reveal delay={210} className="md:col-span-5">
          <div className="relative ml-auto max-w-[440px]">
            <div aria-hidden="true" className="absolute -right-4 -top-4 z-10 rounded-full border border-accent/60 bg-paper px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-accent sm:-right-5">
              FRAME / 001
            </div>
            <div className="hero-float relative aspect-[4/3] overflow-hidden rounded-sm border border-line bg-card">
              <Image src="/images/vedant-thakur.jpg" alt={profile.portraitAlt} fill sizes="(min-width: 768px) 440px, 100vw" priority className="object-cover object-center opacity-90 transition duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-paper/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
                <div>
                  <p className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">{profile.name}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink/75">Editor behind the timeline</p>
                </div>
                <span aria-hidden="true" className="font-mono text-xs text-accent">▶ REC</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
              <span>Story in every frame</span><span>24 FPS / 16:9</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={260}>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-20">
          {visualClips.map((clip, index) => (
            <div key={clip.id} className={`group relative aspect-[16/7] overflow-hidden border border-line bg-card ${index % 2 ? "sm:translate-y-3" : ""}`}>
              {/* Decorative filmstrip uses existing public YouTube thumbnails. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://i.ytimg.com/vi/${clip.id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover opacity-55 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0" />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-paper/90 to-transparent px-3 pb-2 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-ink">
                <span>{clip.label}</span><span className="text-accent">0{index + 1}</span>
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-9 flex items-center justify-between border-t border-line pt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
        <span>Scroll to explore</span><span aria-hidden="true" className="text-accent">↓ ↓ ↓</span>
      </div>
    </section>
  );
}
