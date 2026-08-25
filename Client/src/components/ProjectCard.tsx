import { Globe, type LucideIcon } from "lucide-react";
import { Github } from "./Icons";
import type { Project } from "../data/content";

export default function ProjectCard({
  id,
  title,
  desc,
  stack,
  image,
  deploy,
  github,
}: Project) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-surface flex flex-col h-full">
      <div className="flex h-48 w-full items-center justify-center bg-surface-soft overflow-hidden">
        <img 
          src={image} 
          alt={`Preview de ${title}`} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <span className="font-mono text-xs text-slate-500">{id}</span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400 flex-1">{desc}</p>

        <p className="mt-4 font-mono text-xs text-accent">{stack.join(" · ")}</p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {deploy && (
              <a href={deploy} target="_blank" rel="noreferrer" title="Acessar projeto">
                <IconButton icon={Globe} />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" title="Ver código fonte">
                <IconButton icon={Github} />
              </a>
            )}
          </div>

          {(deploy || github) && (
            <a
              href={deploy || github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-slate-400 transition-colors hover:text-accent"
            >
              VER PROJETO →
            </a>
          )}
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
