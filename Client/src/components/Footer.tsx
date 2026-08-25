import { Mail } from "lucide-react";
import { Github, Instagram } from "./Icons";
import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">{footer.copy}</p>

        <div className="flex gap-4">
          <a href="#" className="text-slate-400 transition-colors hover:text-accent">
            <Github size={18} />
          </a>
          <a href="#" className="text-slate-400 transition-colors hover:text-accent">
            <Instagram size={18} />
          </a>
          <a href="#" className="text-slate-400 transition-colors hover:text-accent">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
