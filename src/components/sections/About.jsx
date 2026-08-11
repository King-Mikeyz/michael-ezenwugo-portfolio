import Image from "next/image";

import { profile } from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] px-6 py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-20 xl:gap-24">
          {/* About content */}
          <div>
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

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:justify-self-end">
            {/* Purple atmosphere behind the portrait */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22),rgba(76,29,149,0.08)_45%,transparent_72%)] blur-2xl"
            />

            {/* Portrait frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem]">
                <Image
                  src={profile.portrait}
                  alt="Portrait of Michael Ezenwugo"
                  fill
                  sizes="(min-width: 1280px) 380px, (min-width: 1024px) 34vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Small technical accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-[rgba(180,154,255,0.35)]"
            />

            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-16 w-16 border-r border-t border-[rgba(114,231,255,0.22)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}