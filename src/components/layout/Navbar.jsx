import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          ME<span className="text-[var(--cyan)]">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#journey" className="transition hover:text-white">
            Journey
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="rounded-full border border-[var(--border)] p-3 transition hover:border-[var(--cyan)]"
        >
          <ExternalLink size={18} />
        </a>
      </nav>
    </header>
  );
}