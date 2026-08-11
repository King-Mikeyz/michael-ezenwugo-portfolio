"use client";

import { useState } from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

import { profile } from "@/data/profile";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const isLoading = status === "loading";

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      setStatus("loading");
      setFeedback("");

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to send your message."
        );
      }

      form.reset();

      setStatus("success");

      setFeedback(
        "Message received. I’ll get back to you as soon as I can."
      );
    } catch (error) {
      setStatus("error");

      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative px-6 py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Intro */}
          <div>
            <p className="font-mono-custom mb-6 text-[10px] uppercase tracking-[0.28em] text-[var(--purple-light)]">
              07 / Contact
            </p>

            <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] md:text-7xl">
              Have something
              <br />

              <span className="gradient-text">
                worth building?
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[var(--muted)]">
              I&apos;m open to internships, collaborations,
              freelance opportunities and interesting technical
              projects.
            </p>

            <div className="mt-12 border-t border-white/[0.08] pt-6">
              <p className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Best reason to reach out
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted-light)]">
                You have an opportunity where curiosity,
                willingness to learn and the ability to build
                things matter.
              </p>
            </div>

            {/* Professional links */}
            <div className="mt-8 flex max-w-lg flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm text-[var(--muted-light)] transition duration-300 hover:border-[var(--border-bright)] hover:bg-[var(--glow-purple)] hover:text-white"
              >
                Email

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm text-[var(--muted-light)] transition duration-300 hover:border-[var(--border-bright)] hover:bg-[var(--glow-purple)] hover:text-white"
              >
                LinkedIn

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm text-[var(--muted-light)] transition duration-300 hover:border-[var(--border-bright)] hover:bg-[var(--glow-purple)] hover:text-white"
              >
                GitHub

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={profile.resume}
                download="Michael-Ezenwugo-CV.pdf"
                className="inline-flex items-center rounded-full border border-[rgba(180,154,255,0.22)] bg-[var(--glow-purple)] px-4 py-2.5 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--border-bright)]"
              >
                Download CV ↓
              </a>
            </div>
          </div>

          {/* Contact console */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(180,154,255,0.22)] bg-[rgba(10,6,16,0.96)] p-6 shadow-[0_24px_90px_rgba(76,29,149,0.18)] md:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[var(--purple)] opacity-[0.08] blur-[100px]"
            />

            <div className="relative z-10">
              <div className="mb-10 flex items-center justify-between border-b border-white/[0.08] pb-6">
                <div>
                  <p className="font-medium">
                    Start a conversation
                  </p>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Send a message directly from the portfolio.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025]">
                  <Send size={17} />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-8 md:grid-cols-2">
                  <label className="block">
                    <span className="font-mono-custom mb-3 block text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      Your name
                    </span>

                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      placeholder="Jane Doe"
                      className="w-full border-b border-white/[0.1] bg-transparent py-4 text-base text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[var(--purple-light)]"
                    />
                  </label>

                  <label className="block">
                    <span className="font-mono-custom mb-3 block text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      Email
                    </span>

                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={200}
                      placeholder="jane@company.com"
                      className="w-full border-b border-white/[0.1] bg-transparent py-4 text-base text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[var(--purple-light)]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="font-mono-custom mb-3 block text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Subject
                  </span>

                  <input
                    type="text"
                    name="subject"
                    maxLength={150}
                    placeholder="Internship, freelance project, collaboration..."
                    className="w-full border-b border-white/[0.1] bg-transparent py-4 text-base text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[var(--purple-light)]"
                  />
                </label>

                <label className="block">
                  <span className="font-mono-custom mb-3 block text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Message
                  </span>

                  <textarea
                    name="message"
                    required
                    maxLength={3000}
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full resize-none border-b border-white/[0.1] bg-transparent py-4 text-base leading-7 text-white outline-none transition duration-300 placeholder:text-white/25 focus:border-[var(--purple-light)]"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group inline-flex items-center gap-3 rounded-full border border-[rgba(180,154,255,0.28)] bg-[linear-gradient(135deg,#8b5cf6,#6d3fd8)] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_35px_rgba(139,92,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(139,92,246,0.3)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        Sending

                        <Loader2
                          size={17}
                          className="animate-spin"
                        />
                      </>
                    ) : (
                      <>
                        Send message

                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>

                  {feedback && (
                    <p
                      aria-live="polite"
                      className={
                        status === "success"
                          ? "flex max-w-sm items-center gap-2 text-sm text-[var(--purple-light)]"
                          : "max-w-sm text-sm text-red-400"
                      }
                    >
                      {status === "success" && (
                        <CheckCircle2 size={16} />
                      )}

                      {feedback}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}