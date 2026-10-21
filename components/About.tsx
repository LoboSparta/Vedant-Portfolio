import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about, profile } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="shell scroll-mt-24 py-16 md:py-24">
      <SectionHeading label="04 / Behind the edits" title="More than a cut." />
      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-14">
        <Reveal className="md:col-span-8">
          <div className="max-w-3xl space-y-5">
            {about.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 24)} className="text-base leading-[1.85] text-ink/80 sm:text-lg">{paragraph}</p>)}
          </div>
        </Reveal>
        <Reveal delay={90} className="md:col-span-4">
          <dl className="border-t border-line">
            <div className="border-b border-line py-5">
              <dt className="label">Creative focus</dt>
              <dd className="mt-2 font-display text-lg font-semibold text-ink">Short-form / Long-form / Ads</dd>
            </div>
            <div className="border-b border-line py-5">
              <dt className="label">Experience</dt>
              <dd className="mt-2 font-display text-lg font-semibold text-ink">2+ years hands-on editing</dd>
            </div>
            <div className="border-b border-line py-5">
              <dt className="label">Based in</dt>
              <dd className="mt-2 font-display text-lg font-semibold text-ink">{profile.location}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
