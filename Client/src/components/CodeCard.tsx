import type { ReactNode } from "react";
import { hero } from "../data/content";

const { filename, status, object } = hero.code;

export default function CodeCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0b0f17] shadow-2xl shadow-black/40">
      <CodeCardHeader filename={filename} />
      <CodeCardBody />
      <CodeCardFooter status={status} />
    </div>
  );
}

function CodeCardHeader({ filename }: { filename: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-white/[0.02] px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-red-500/80" />
      <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
      <span className="h-3 w-3 rounded-full bg-green-500/80" />
      <span className="ml-2 font-mono text-xs text-slate-400">{filename}</span>
    </div>
  );
}

function CodeCardBody() {
  return (
    <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
      <Line>
        <Kw>const</Kw> <Id>dev</Id> = {"{"}
      </Line>
      <Line indent={1}>
        <Key>nome</Key>: <Str>"{object.nome}"</Str>,
      </Line>
      <Line indent={1}>
        <Key>stack</Key>: [{object.stack.map((s) => `"${s}"`).join(", ")}],
      </Line>
      <Line indent={1}>
        <Key>foco</Key>: <Str>"{object.foco}"</Str>,
      </Line>
      <Line indent={1}>
        <Key>café</Key>: <Kw>{String(object.cafe)}</Kw>,
      </Line>
      <Line indent={1}>
        <Key>disponivel</Key>: <Kw>{String(object.disponivel)}</Kw>,
      </Line>
      <Line>{"};"}</Line>
      <Line>{" "}</Line>
      <Line>
        <Kw>while</Kw> (<Id>dev.disponivel</Id>) {"{"}
      </Line>
      <Line indent={1}>
        <Fn>construir</Fn>(<Str>"algo incrível"</Str>);
      </Line>
      <Line>
        {"}"}{" "}
        <span className="inline-block h-4 w-2 animate-pulse align-middle bg-accent" />
      </Line>
    </pre>
  );
}

function CodeCardFooter({ status }: { status: string }) {
  return (
    <div className="flex items-center gap-2 border-t border-border bg-white/[0.02] px-4 py-3 font-mono text-xs text-emerald-400">
      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      {status}
    </div>
  );
}

// --- pequenos helpers de sintaxe colorida ---
function Line({ children, indent = 0 }: { children: ReactNode; indent?: number }) {
  return (
    <div className="whitespace-pre">
      {"  ".repeat(indent)}
      {children}
    </div>
  );
}
function Kw({ children }: { children: ReactNode }) {
  return <span className="text-cyan-300">{children}</span>;
}
function Id({ children }: { children: ReactNode }) {
  return <span className="text-slate-200">{children}</span>;
}
function Key({ children }: { children: ReactNode }) {
  return <span className="text-rose-300">{children}</span>;
}
function Str({ children }: { children: ReactNode }) {
  return <span className="text-amber-200">{children}</span>;
}
function Fn({ children }: { children: ReactNode }) {
  return <span className="text-violet-300">{children}</span>;
}
