export default function Journey() {
  const journey = [
    ["Frontend Development", "Building foundations for the web."],
    ["Prompt Engineering", "Learning to communicate effectively with AI systems."],
    ["Python & Data", "Developing skills for data science and analysis."],
    ["Machine Learning", "The direction I am actively working toward."],
  ];

  return (
    <section id="journey" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          04 / Journey
        </p>

        <h2 className="mb-20 text-5xl font-semibold md:text-7xl">
          Where I&apos;m going.
        </h2>

        {journey.map(([title, text], index) => (
          <div
            key={title}
            className="grid gap-4 border-t border-[var(--border)] py-8 md:grid-cols-[100px_1fr_1fr]"
          >
            <span className="text-[var(--muted)]">0{index + 1}</span>

            <h3 className="text-2xl">{title}</h3>

            <p className="text-[var(--muted)]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}