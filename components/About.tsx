import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about, profile } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="shell scroll-mt-24 py-14 md:py-20">
      <SectionHeading label="About" title="About" />

      <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-8">
          <div className="max-w-2xl space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-ink/85 sm:text-[17px]">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="md:col-span-4">
          <dl className="md:border-l md:border-line md:pl-10">
            <div className="border-t border-line py-4 md:border-t-0 md:pt-0">
              <dt className="label">Focus</dt>
              <dd className="mt-2 text-sm text-ink">Short-form vertical video</dd>
            </div>
            <div className="border-t border-line py-4">
              <dt className="label">Experience</dt>
              <dd className="mt-2 text-sm text-ink">2+ years hands-on editing</dd>
            </div>
            <div className="border-t border-line py-4">
              <dt className="label">Based in</dt>
              <dd className="mt-2 text-sm text-ink">{profile.location}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
