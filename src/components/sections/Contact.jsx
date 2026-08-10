import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
          05 / Contact
        </p>

        <h2 className="max-w-5xl text-6xl font-semibold tracking-tight md:text-8xl">
          Have something worth building?
        </h2>

        <p className="mt-8 max-w-xl text-lg text-[var(--muted)]">
          I&apos;m open to internships, collaborations, learning opportunities
          and interesting projects.
        </p>

        <a
          href="mailto:YOUR_EMAIL_HERE"
          className="mt-12 inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-6 py-4 transition hover:border-[var(--cyan)]"
        >
          Start a conversation
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}