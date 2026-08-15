import Reveal from "./Reveal";
import { contact } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="shell scroll-mt-24 py-14 md:py-20">
      <Reveal>
        <div className="border-t border-line pt-8">
          <p className="label">Contact</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
            Let&rsquo;s Work Together.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            Open to editing work, advertising creatives and content production.
            The fastest way to reach me is email.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-10 border-t border-line">
          {contact.map((item) => {
            const isSet = item.href !== "" && item.value !== "";

            return (
              <li key={item.label} className="border-b border-line">
                {isSet ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="group flex flex-wrap items-baseline justify-between gap-2 py-5 transition-colors duration-200"
                  >
                    <span className="font-display text-lg font-semibold text-ink sm:text-xl">
                      {item.label}
                    </span>
                    <span className="text-sm text-muted transition-colors duration-200 group-hover:text-ink">
                      {item.value}
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                    <span className="font-display text-lg font-semibold text-ink sm:text-xl">
                      {item.label}
                    </span>
                    {/* Placeholder — replace in data/site.ts */}
                    <span className="text-sm text-accent">
                      Add your {item.label} link in{" "}
                      <code className="text-ink">data/site.ts</code>
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
