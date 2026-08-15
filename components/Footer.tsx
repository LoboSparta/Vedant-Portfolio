import { profile } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
          {profile.name}
        </p>
        <p className="text-sm text-muted">
          {profile.title} · © {year}
        </p>
      </div>
    </footer>
  );
}
