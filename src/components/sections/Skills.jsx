import SkillExplorer from "@/components/sections/SkillExplorer";

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
            My stack is evolving. Some technologies represent
            things I already build with, while others show the
            direction I&apos;m actively learning toward.
          </p>

          <SkillExplorer />
        </div>
      </div>
    </section>
  );
}