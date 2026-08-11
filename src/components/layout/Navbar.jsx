import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { profile } from "@/data/profile";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-5 pt-5 md:px-6">
        <nav className="flex items-center justify-between rounded-full border border-white/[0.07] bg-black/20 px-4 py-3 backdrop-blur-xl md:px-5">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3"
          >
            <div className="relative transition duration-300 group-hover:scale-105">
              <Image
                src="/brand/me-monogram.svg"
                alt=""
                width={38}
                height={38}
                priority
                className="drop-shadow-[0_0_14px_rgba(139,92,246,0.18)]"
              />
            </div>

            <span className="hidden text-sm font-medium text-[var(--muted-light)] sm:block">
              Michael Ezenwugo
            </span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-white/[0.05] bg-white/[0.025] p-1 md:flex">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Journey", "#journey"],
              ["AI", "#ask-ai"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-xs text-[var(--muted)] transition duration-300 hover:bg-white/[0.05] hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Professional links */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Michael Ezenwugo's GitHub"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-[var(--muted-light)] transition duration-300 hover:border-[var(--border-bright)] hover:bg-[var(--glow-purple)] hover:text-white xl:px-4"
            >
              <span className="hidden sm:inline">
                GitHub
              </span>

              <ExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Michael Ezenwugo's LinkedIn"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-[var(--muted-light)] transition duration-300 hover:border-[var(--border-bright)] hover:bg-[var(--glow-purple)] hover:text-white xl:px-4"
            >
              <span className="hidden lg:inline">
                LinkedIn
              </span>

              <ExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={profile.resume}
              download="Michael-Ezenwugo-CV.pdf"
              aria-label="Download Michael Ezenwugo's CV"
              className="rounded-full border border-[rgba(180,154,255,0.28)] bg-[linear-gradient(135deg,#8b5cf6,#6d3fd8)] px-3 py-2 text-xs font-medium text-white shadow-[0_8px_28px_rgba(139,92,246,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(139,92,246,0.28)] xl:px-4"
            >
              CV ↓
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}