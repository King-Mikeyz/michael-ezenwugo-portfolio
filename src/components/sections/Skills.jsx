import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          02 / System
        </p>

        <h2 className="mb-16 text-5xl font-semibold tracking-tight md:text-7xl">
          My evolving stack.
        </h2>

        <div className="grid border-t border-[var(--border)] md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-b border-[var(--border)] p-8 md:border-r"
            >
              <span className="text-xs text-[var(--muted)]">
                {group.number}
              </span>

              <h3 className="my-4 text-3xl font-medium">{group.title}</h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}