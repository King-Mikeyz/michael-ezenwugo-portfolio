export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] px-6 py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl lg:max-w-[58%]">
          <p className="font-mono-custom mb-6 text-[10px] uppercase tracking-[0.28em] text-[var(--purple-light)]">
            01 / About
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">
            Still learning.
            <br />
            <span className="gradient-text">
              Already building.
            </span>
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--muted-light)]">
            I&apos;m a Computer Science student with a frontend
            development foundation and a growing focus on data,
            artificial intelligence and machine learning.
          </p>

          <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
            I enjoy turning ideas into working digital products,
            experimenting with AI-assisted development and gradually
            building the technical depth required for intelligent
            software systems.
          </p>

          <div className="mt-14 border-t border-white/[0.08]">
            {[
              ["Education", "200 Level Computer Science"],
              ["Foundation", "Frontend Development · Tech Crush"],
              ["AI", "Prompt Engineering · Tech Crush"],
              ["Now", "Python · Kaggle · Data Science"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-white/[0.08] py-5 sm:grid-cols-[130px_1fr]"
              >
                <span className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[var(--purple-light)]">
                  {label}
                </span>

                <span className="text-[var(--muted-light)]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}