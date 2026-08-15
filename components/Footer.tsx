import { contact, profile } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = contact.filter((item) => item.href !== "" && item.value !== "");

  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
          {profile.name}
        </p>

        {/* Compact contact links — kept quiet, same list as the Contact section. */}
        {links.length > 0 && (
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="text-sm text-muted">
          {profile.title} · © {year}
        </p>
      </div>
    </footer>
  );
}
