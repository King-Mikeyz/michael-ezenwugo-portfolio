import {
  ArrowUpRight,
  Code2,
  ExternalLink,
} from "lucide-react";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20 max-w-4xl">
          <p className="font-mono-custom mb-5 text-[10px] uppercase tracking-[0.28em] text-[var(--purple-light)]">
            03 / Selected work
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Things I&apos;ve
            <br />

            <span className="gradient-text">
              actually built.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl leading-8 text-[var(--muted)]">
            I&apos;m still early in my journey, so I&apos;d rather
            show a few real projects clearly than pretend I&apos;ve
            built twenty production systems.
          </p>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => {
            const primaryLink =
              project.live || project.github;

            return (
              <article
                key={project.id}
                className="grid gap-12 border-t border-white/[0.08] py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
              >
                {/* Project preview */}
                <a
                  href={primaryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-solid)] shadow-[0_30px_100px_rgba(0,0,0,0.22)]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-[1.035]"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          to top,
                          rgba(5,3,8,0.88),
                          rgba(5,3,8,0.03) 60%
                        ),
                        url("${project.preview}")
                      `,
                    }}
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(139,92,246,0.12),transparent_45%)] opacity-60 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono-custom text-[9px] uppercase tracking-[0.2em] backdrop-blur-xl">
                    Project / 0{index + 1}
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/50 backdrop-blur-xl transition duration-300 group-hover:scale-110 group-hover:border-[var(--purple-light)] group-hover:bg-[rgba(139,92,246,0.18)]">
                    <ArrowUpRight size={18} />
                  </div>
                </a>

                {/* Project details */}
                <div className="lg:px-5">
                  <p className="mb-4 font-mono-custom text-[10px] uppercase tracking-[0.22em] text-[var(--purple-light)]">
                    {project.type}
                  </p>

                  <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
                    {project.description}
                  </p>

                  {/* Mini case study */}
                  <div className="mt-8 border-y border-white/[0.08]">
                    <div className="grid gap-2 border-b border-white/[0.08] py-5 sm:grid-cols-[130px_1fr]">
                      <span className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-[var(--purple-light)]">
                        Focus
                      </span>

                      <p className="text-sm leading-6 text-[var(--muted-light)]">
                        {project.focus}
                      </p>
                    </div>

                    <div className="grid gap-2 py-5 sm:grid-cols-[130px_1fr]">
                      <span className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-[var(--purple-light)]">
                        Shows
                      </span>

                      <p className="text-sm leading-6 text-[var(--muted-light)]">
                        {project.demonstrates}
                      </p>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-[var(--muted-light)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-9 flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-[rgba(180,154,255,0.28)] bg-[linear-gradient(135deg,#8b5cf6,#6d3fd8)] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_35px_rgba(139,92,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(139,92,246,0.32)]"
                      >
                        View project

                        <ExternalLink
                          size={15}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm text-[var(--muted-light)] transition duration-300 hover:border-[var(--border-bright)] hover:bg-[var(--glow-purple)] hover:text-white"
                    >
                      <Code2 size={15} />

                      Source code
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}