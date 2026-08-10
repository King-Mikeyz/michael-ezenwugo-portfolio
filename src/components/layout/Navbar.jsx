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
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <span className="text-sm font-semibold tracking-[-0.04em]">
                ME
              </span>

              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[var(--purple-light)] shadow-[0_0_12px_var(--purple)]" />
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

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs transition duration-300 hover:border-[var(--border-bright)] hover:bg-[var(--glow-purple)]"
          >
            GitHub

            <ExternalLink
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}