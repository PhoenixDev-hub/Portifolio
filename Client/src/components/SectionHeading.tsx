interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{eyebrow}.</span>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
