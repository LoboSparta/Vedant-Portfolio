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
    <header className={`sticky top-0 z-40 border-b transition-colors duration-300 ease-editorial ${scrolled ? "border-line bg-paper/90 backdrop-blur-xl" : "border-transparent bg-paper/65 backdrop-blur-sm"}`}>
      <nav aria-label="Main" className="shell">
        <div className="flex h-[68px] items-center justify-between md:h-[76px]">
          <a href="#top" className="group flex items-center gap-3 font-display text-[12px] font-extrabold uppercase tracking-[0.18em] text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-accent text-accent transition-colors group-hover:bg-accent group-hover:text-paper">V.</span>
            <span>{profile.name}</span>
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a href={link.href} className="group relative py-2 text-xs uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink">
                  {link.label}<span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  {index === 0 ? <span className="ml-1.5 align-top font-mono text-[9px] text-accent">↗</span> : null}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" className="rounded-full border border-line px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-ink transition hover:border-accent hover:text-accent md:hidden">
            {menuOpen ? "Close −" : "Menu +"}
          </button>
        </div>
        <div id="mobile-menu" hidden={!menuOpen} className="border-t border-line pb-5 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}><a href={link.href} onClick={() => setMenuOpen(false)} className="font-display text-xl font-semibold text-ink transition-colors hover:text-accent">{link.label} <span className="text-accent">↗</span></a></li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
