import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl lg:max-w-[58%]">
          <p className="font-mono-custom mb-6 text-[10px] uppercase tracking-[0.28em] text-[var(--purple-light)]">
            02 / Knowledge graph
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">
            What I use.
            <br />

            <span className="gradient-text">
              What I&apos;m becoming.
            </span>
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-[var(--muted)]">
            My stack is intentionally evolving. Some technologies
            represent tools I already build with, while others mark
            the direction I&apos;m actively learning toward.
          </p>

          {/* Mobile fallback because the 3D graph is hidden on small screens */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:hidden">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="border-t border-white/[0.08] pt-5"
              >
                <p className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[var(--purple-light)]">
                  {group.title}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-[var(--muted-light)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop explanation */}
          <div className="mt-14 hidden border-t border-white/[0.08] lg:block">
            <div className="grid grid-cols-2 gap-8 py-6">
              <div>
                <span className="mb-3 block h-2 w-2 rounded-full bg-[var(--purple-light)] shadow-[0_0_12px_var(--purple)]" />

                <p className="text-sm text-white">
                  Building with
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Frontend tools, Git, Supabase and technologies
                  already used in projects.
                </p>
              </div>

              <div>
                <span className="mb-3 block h-2 w-2 rounded-full bg-[var(--purple)] opacity-60" />

                <p className="text-sm text-white">
                  Learning toward
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Python, data science, machine learning and deeper
                  AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}