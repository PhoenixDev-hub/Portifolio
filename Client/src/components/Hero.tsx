import { ChevronDown } from "lucide-react";
import { hero } from "../data/content";
import CodeCard from "./CodeCard";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-2">
      <div>
        <p className="mb-3 font-mono text-sm text-accent">{hero.eyebrow}</p>

        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          {hero.name}
          <span className="text-accent">.</span>
        </h1>

        <h2 className="mt-4 text-2xl font-bold leading-snug text-slate-300 sm:text-3xl">
          {hero.headline}
        </h2>

        <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
          {hero.paragraph}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            {hero.primaryCta} <ChevronDown size={16} />
          </a>
        </div>

        <p className="mt-6 font-mono text-xs text-accent">{hero.statusLine}</p>
      </div>

      <CodeCard />
    </section>
  );
}
