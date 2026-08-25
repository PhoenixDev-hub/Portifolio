import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow={projects.eyebrow} title={projects.title} />

      <p className="mt-4 max-w-2xl text-slate-400">{projects.intro}</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.items.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
