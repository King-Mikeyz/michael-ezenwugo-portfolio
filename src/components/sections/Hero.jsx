import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6"
    >
      <div className="mx-auto grid min-h-screen max-w-7xl items-center pt-28 lg:grid-cols-[1.08fr_0.92fr]">
        
        {/* LEFT */}
        <div className="relative z-20 pb-16 pt-10 lg:pb-0">
          
          {/* Availability */}
          <div className="mb-10 flex items-center gap-3">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--purple)] opacity-30" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--purple-light)] shadow-[0_0_14px_var(--purple)]" />
            </div>

            <p className="font-mono-custom text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
              Open to internships · freelance · collaborations
            </p>
          </div>

          {/* Main title */}
          <h1 className="max-w-4xl">
            <span className="block text-[clamp(4rem,10vw,8.5rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
              Michael
            </span>

            <span className="gradient-text block text-[clamp(4rem,10vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Ezenwugo.
            </span>
          </h1>

          {/* Role */}
          <div className="mt-10 max-w-2xl border-l border-[var(--border-bright)] pl-5">
            <p className="text-xl leading-8 text-[var(--muted-light)] md:text-2xl">
              Frontend developer building toward{" "}
              <span className="text-white">
                AI, machine learning and data science.
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
            {profile.description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
             href="#projects"
              className="group flex items-center gap-3 rounded-full border border-[var(--border-bright)] bg-[linear-gradient(135deg,#8b5cf6,#6d3fe0)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_rgba(139,92,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_50px_rgba(139,92,246,0.3)]"
             >
              Explore my work

              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>

            <a
              href="#ask-ai"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm text-[var(--muted-light)] transition duration-300 hover:border-[var(--border-bright)] hover:bg-[var(--glow-purple)] hover:text-white"
            >
              Ask my portfolio

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE RESERVED FOR 3D */}
        <div
          aria-hidden="true"
          className="relative hidden min-h-[700px] lg:block"
        >
          
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-8 left-6 right-6 z-20 mx-auto flex max-w-7xl items-center gap-4">
        <span className="font-mono-custom text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
          
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-[var(--purple)]/30 to-transparent" />
      </div>
    </section>
  );
}