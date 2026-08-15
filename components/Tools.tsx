import Reveal from "./Reveal";
import { tools } from "@/data/site";

function ToolColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="label">{label}</p>
      <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-card px-4 py-2 text-sm text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Tools() {
  return (
    <section className="shell py-10 md:py-12">
      <Reveal>
        <div className="grid gap-8 border-t border-line pt-8 md:grid-cols-2 md:gap-14">
          <ToolColumn label="Software" items={tools.software} />
          <ToolColumn label="AI Tools" items={tools.ai} />
        </div>
      </Reveal>
    </section>
  );
}
