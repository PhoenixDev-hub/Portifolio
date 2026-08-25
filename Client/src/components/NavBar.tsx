import { Terminal } from "lucide-react";
import { nav } from "../data/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-mono text-sm text-accent">
          <Terminal size={16} />
          <span>{nav.brand}</span>
        </div>

        <nav className="hidden items-center gap-8 font-mono text-xs text-slate-300 md:flex">
          {nav.items.map((item) => (
            <a
              key={item.n}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              <span className="text-accent/70">{item.n}.</span> {item.label}
            </a>
          ))}
        </nav>

        <button className="rounded-md border border-accent/40 px-4 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent/10">
          {nav.cta}
        </button>
      </div>
    </header>
  );
}
