"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/data/site";

const FPS = 24;
/** The timecode in the nav "plays" a two-minute timeline as you scroll. */
const TIMELINE_SECONDS = 120;

const pad = (value: number) => String(value).padStart(2, "0");

function toTimecode(progress: number): string {
  const frames = Math.round(progress * TIMELINE_SECONDS * FPS);
  const seconds = Math.floor(frames / FPS);
  return [
    pad(Math.floor(seconds / 3600)),
    pad(Math.floor((seconds % 3600) / 60)),
    pad(seconds % 60),
    pad(frames % FPS),
  ].join(":");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timecodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    // One rAF-throttled handler feeds the progress line, the timecode and
    // the hero parallax (through CSS variables), so scrolling stays cheap.
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = Math.max(root.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(y / max, 0), 1);

      root.style.setProperty("--sp", progress.toFixed(4));
      root.style.setProperty(
        "--sy",
        reduceMotion.matches ? "0" : String(Math.min(Math.round(y), 900)),
      );
      if (timecodeRef.current) {
        timecodeRef.current.textContent = toTimecode(progress);
      }
      setScrolled(y > 12);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ease-editorial ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <nav aria-label="Main" className="shell">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-display text-base font-semibold tracking-[-0.01em] text-ink transition-opacity hover:opacity-70"
          >
            <span aria-hidden="true" className="h-2 w-2 bg-accent" />
            {profile.name}
          </a>

          <div className="flex items-center gap-8 lg:gap-10">
            {/* Desktop links */}
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Decorative timecode that follows the scroll position. */}
            <span
              aria-hidden="true"
              className="hidden w-[7.5rem] font-mono text-xs tabular-nums text-muted lg:block"
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
              <span ref={timecodeRef}>00:00:00:00</span>
            </span>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="-mr-2 px-2 py-2 text-sm text-ink md:hidden"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          hidden={!menuOpen}
          className="border-t border-line pb-5 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Page-progress line, like a playhead travelling the timeline. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent"
        style={{ transform: "scaleX(var(--sp, 0))" }}
      />
    </header>
  );
}
