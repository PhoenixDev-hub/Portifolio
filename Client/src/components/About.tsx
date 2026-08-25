import { Target, Code2, MapPin, BookOpen, type LucideIcon } from "lucide-react";
import { about, type TechIcon, type TechRow } from "../data/content";
import SectionHeading from "./SectionHeading";

const ICONS: Record<TechIcon, LucideIcon> = {
  target: Target,
  code: Code2,
  map: MapPin,
  book: BookOpen,
};

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow={about.eyebrow} title={about.title} />

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 leading-relaxed text-slate-400 lg:col-span-2">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="pt-2 font-mono text-sm text-accent">{about.note}</p>
        </div>

        <TechSheet />
      </div>
    </section>
  );
}

function TechSheet() {
  return (
    <div className="h-fit space-y-6 rounded-xl border border-border bg-surface p-6">
      <p className="font-mono text-xs text-emerald-400">{about.card.label}</p>
      {about.card.rows.map((row) => (
        <TechRowItem key={row.label} {...row} />
      ))}
    </div>
  );
}

function TechRowItem({ icon, label, value }: TechRow) {
  const Icon = ICONS[icon];
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
        <Icon size={16} />
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-wide text-slate-500">
          {label}
        </p>
        <p className="text-sm text-slate-200">{value}</p>
      </div>
    </div>
  );
}
