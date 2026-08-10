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
        </div>

        <div>
          {projects.map(
            (project, index) => {
              const primaryLink =
                project.live ||
                project.github;

              return (
                <article
                  key={project.id}
                  className="grid gap-10 border-t border-white/[0.08] py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
                >
                  {/* Preview */}
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-solid)]"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.035]"
                      style={{
                        backgroundImage: `
                          linear-gradient(
                            to top,
                            rgba(5,3,8,0.85),
                            rgba(5,3,8,0.02) 55%
                          ),
                          url("${project.preview}")
                        `,
                      }}
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(139,92,246,0.08),transparent_45%)]" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono-custom text-[9px] uppercase tracking-[0.2em] backdrop-blur-xl">
                      Project / 0{index + 1}
                    </div>

                    <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-xl transition duration-300 group-hover:scale-110 group-hover:border-[var(--purple-light)]">
                      <ArrowUpRight
                        size={18}
                      />
                    </div>
                  </a>

                  {/* Details */}
                  <div className="lg:px-6">
                    <p className="mb-4 font-mono-custom text-[10px] uppercase tracking-[0.22em] text-[var(--purple-light)]">
                      {project.type}
                    </p>

                    <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-[var(--muted-light)]"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-9 flex flex-wrap gap-3">
                      {project.live && (
                        <a
                          href={
                            project.live
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.025]"
                        >
                          View project

                          <ExternalLink
                            size={15}
                          />
                        </a>
                      )}

                      <a
                        href={
                          project.github
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm transition hover:border-[var(--border-bright)] hover:bg-[var(--glow-purple)]"
                      >
                        <Code2
                          size={15}
                        />

                        Source code
                      </a>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}