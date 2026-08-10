import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          03 / Selected Work
        </p>

        <h2 className="mb-20 text-5xl font-semibold tracking-tight md:text-7xl">
          Things I&apos;ve built.
        </h2>

        <div>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group grid gap-8 border-t border-[var(--border)] py-12 lg:grid-cols-[100px_1fr_1fr_auto]"
            >
              <span className="text-sm text-[var(--muted)]">
                0{index + 1}
              </span>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--cyan)]">
                  {project.type}
                </p>

                <h3 className="text-3xl font-medium md:text-4xl">
                  {project.title}
                </h3>
              </div>

              <div>
                <p className="leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title}`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition group-hover:border-[var(--cyan)]"
              >
                <ArrowUpRight size={20} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}