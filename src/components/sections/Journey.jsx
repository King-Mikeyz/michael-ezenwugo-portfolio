const journey = [
  {
    number: "01",
    title: "Frontend foundations",
    text: "Learning how interfaces are structured, styled, made responsive and turned into working web experiences.",
  },
  {
    number: "02",
    title: "AI literacy",
    text: "Studying prompt engineering and using AI tools as part of my development and problem-solving workflow.",
  },
  {
    number: "03",
    title: "Data foundations",
    text: "Learning Python through Kaggle while developing a stronger understanding of data analysis and data science.",
  },
  {
    number: "04",
    title: "Machine learning",
    text: "My longer-term direction: building the mathematical, programming and data foundations required for ML and intelligent systems.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative px-6 py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-4xl">
          <p className="font-mono-custom mb-6 text-[10px] uppercase tracking-[0.28em] text-[var(--purple-light)]">
            04 / Trajectory
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">
            Not a finished story.
            <br />

            <span className="gradient-text">
              A direction.
            </span>
          </h2>
        </div>

        <div className="max-w-5xl">
          {journey.map((item, index) => (
            <div
              key={item.number}
              className="group grid gap-5 border-t border-white/[0.08] py-8 transition duration-500 md:grid-cols-[90px_0.8fr_1.2fr]"
            >
              <span className="font-mono-custom text-[10px] text-[var(--purple-light)]">
                {item.number}
              </span>

              <h3 className="text-xl font-medium transition duration-300 group-hover:text-[var(--purple-light)] md:text-2xl">
                {item.title}
              </h3>

              <p className="max-w-xl leading-7 text-[var(--muted)]">
                {item.text}
              </p>

              {index !== journey.length - 1 && (
                <div className="hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}