import { useState } from "react";
import { Code } from "lucide-react";
import { skills } from "../data/content";
import SectionHeading from "./SectionHeading";

const TAB_NAMES = Object.keys(skills.tabs);

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>(TAB_NAMES[0]);

  return (
    <>
      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow={skills.eyebrow} title={skills.title} />

        <TabList active={activeTab} onChange={setActiveTab} />
        <SkillGrid items={skills.tabs[activeTab]} />
      </section>

      <Marquee items={skills.marquee} />
    </>
  );
}

interface TabListProps {
  active: string;
  onChange: (tab: string) => void;
}

function TabList({ active, onChange }: TabListProps) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {TAB_NAMES.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
            active === tab
              ? "bg-accent font-semibold text-slate-950"
              : "border border-white/15 text-slate-300 hover:border-white/30"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function SkillGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((name) => (
        <div
          key={name}
          className="flex flex-col items-center gap-4 rounded-xl border border-border bg-surface p-6 text-center transition-colors hover:border-accent/40"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Code size={22} />
          </div>
          <span className="text-sm text-slate-200">{name}</span>
        </div>
      ))}
    </div>
  );
}

function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <div className="flex animate-marquee gap-8 whitespace-nowrap font-mono text-sm text-slate-400">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item} <span className="text-accent/70">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
