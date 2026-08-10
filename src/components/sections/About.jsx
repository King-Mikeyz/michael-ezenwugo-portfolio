export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
            01 / About
          </p>

          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Building now.
            <br />
            Learning what&apos;s next.
          </h2>
        </div>

        <div className="flex items-end">
          <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
            I&apos;m a frontend developer and Computer Science student
            progressively moving deeper into data science, artificial
            intelligence and machine learning.
            <br />
            <br />
            I&apos;m interested in building useful digital products while
            understanding the intelligent systems that will shape the next
            generation of software.
          </p>
        </div>
      </div>
    </section>
  );
}