import Reveal from "./Reveal";
import { courseWork } from "@/data/site";

export default function CourseSection() {
  return (
    <section className="shell py-10 md:py-12">
      <Reveal>
        <div className="rounded-[4px] border border-line bg-card p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="label">Course Production</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                Educational Content
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                {courseWork.intro}
              </p>
            </div>

            <ul className="md:col-span-7 md:border-l md:border-line md:pl-10">
              {courseWork.courses.map((course, index) => (
                <li
                  key={course.name}
                  className={`py-4 ${index > 0 ? "border-t border-line" : "pt-0 md:pt-0"}`}
                >
                  <p className="font-display text-base font-semibold text-ink">
                    {course.name}
                  </p>
                  {course.detail ? (
                    <p className="mt-1 text-sm text-muted">{course.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
