import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-5xl w-full">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan)] mb-6">
          Portfolio / 2026
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
          {profile.name}
        </h1>

        <h2 className="mt-6 text-2xl md:text-4xl text-[var(--muted)] max-w-3xl">
          {profile.headline}
        </h2>

        <p className="mt-8 max-w-2xl text-base md:text-lg leading-8 text-[var(--muted)]">
          {profile.description}
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] font-medium"
          >
            Explore my work
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-[var(--border)]"
          >
            GitHub ↗
          </a>
        </div>
      </section>
    </main>
  );
}