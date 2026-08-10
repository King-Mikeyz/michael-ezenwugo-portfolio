import { ArrowDownRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-28"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center lg:grid-cols-2">
        {/* Text */}
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--cyan)]" />

            <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              Available for internships & collaborations
            </p>
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--cyan)]">
            Frontend × Data × AI
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
            I build for
            <br />
            the web.
            <br />

            <span className="text-[var(--muted)]">
              I&apos;m learning
              <br />
              intelligence.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
            >
              Explore my work
              <ArrowDownRight size={18} />
            </a>

            <a
              href="#about"
              className="rounded-full border border-[var(--border)] px-6 py-3 transition hover:border-[var(--cyan)]"
            >
              More about me
            </a>
          </div>
        </div>

        {/* Space reserved for the fixed 3D canvas */}
        <div
          aria-hidden="true"
          className="hidden min-h-[500px] lg:block"
        />
      </div>
    </section>
  );
}