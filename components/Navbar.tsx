"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ease-editorial ${
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <nav aria-label="Main" className="shell">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#top"
            className="font-display text-[13px] font-semibold uppercase tracking-[0.22em] text-ink transition-opacity hover:opacity-60"
          >
            {profile.name}
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
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

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="text-[11px] uppercase tracking-[0.18em] text-ink md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
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
                  className="font-display text-lg font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
