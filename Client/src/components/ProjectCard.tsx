import { Zap, Globe, type LucideIcon } from "lucide-react";
import { Github } from "./Icons";
import type { Project } from "../data/content";

export default function ProjectCard({
  id,
  title,
  desc,
  stack,
  highlight,
  gradient,
}: Project) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-surface">
      <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${gradient}`}>
        <span className="font-mono text-6xl font-bold text-white/10">
          {title.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <span className="font-mono text-xs text-slate-500">{id}</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">{desc}</p>

        <p className="mt-4 font-mono text-xs text-accent">{stack.join(" · ")}</p>

        <div className="mt-4 flex gap-3 rounded-lg border border-accent/20 bg-accent-soft p-4">
          <Zap size={16} className="mt-0.5 shrink-0 text-accent" />
          <p className="text-xs leading-relaxed text-slate-300">{highlight}</p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            <IconButton icon={Globe} />
            <IconButton icon={Github} />
          </div>

          <a
            href="#"
            className="font-mono text-xs text-slate-400 transition-colors hover:text-accent"
          >
            VER DETALHES →
          </a>
        </div>
      </div>
    </article>
  );
}

function IconButton({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-slate-400 transition-colors hover:border-accent/40 hover:text-accent">
      <Icon size={15} />
    </button>
  );
}
