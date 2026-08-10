const stages = [
  {
    label: "Now",
    title: "Python + Data Foundations",
    description:
      "Working through Python on Kaggle while building stronger foundations for data analysis and data science.",
    items: [
      "Python",
      "Kaggle",
      "Data Science Scholarship",
    ],
  },

  {
    label: "Next",
    title: "Data Analysis",
    description:
      "Moving deeper into the practical tools and thinking required to work confidently with real datasets.",
    items: [
      "Pandas",
      "NumPy",
      "Statistics",
      "Data Visualisation",
    ],
  },

  {
    label: "Direction",
    title: "Machine Learning + AI",
    description:
      "Building toward the ability to understand, train and integrate intelligent systems rather than only consuming AI tools.",
    items: [
      "Machine Learning",
      "Model Development",
      "AI Systems",
    ],
  },
];

export default function CurrentlyLearning() {
  return (
    <section
      id="learning"
      className="relative px-6 py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-4xl">
          <p className="font-mono-custom mb-6 text-[10px] uppercase tracking-[0.28em] text-[var(--purple-light)]">
            05 / Currently building toward
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">
            Learning with
            <br />

            <span className="gradient-text">
              intention.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl leading-8 text-[var(--muted)]">
            I don&apos;t want my portfolio to pretend I&apos;ve
            already reached the destination. This is the path
            I&apos;m actively working through.
          </p>
        </div>

        <div className="border-t border-white/[0.08]">
          {stages.map((stage, index) => (
            <article
              key={stage.label}
              className="grid gap-8 border-b border-white/[0.08] py-10 md:grid-cols-[100px_0.85fr_1.15fr]"
            >
              <div>
                <span className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[var(--purple-light)]">
                  0{index + 1}
                </span>
              </div>

              <div>
                <p className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  {stage.label}
                </p>

                <h3 className="mt-3 text-2xl font-medium">
                  {stage.title}
                </h3>
              </div>

              <div>
                <p className="max-w-xl leading-7 text-[var(--muted)]">
                  {stage.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {stage.items.map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-[var(--muted-light)]"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}