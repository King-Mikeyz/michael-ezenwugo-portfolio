"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

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
        throw new Error(data.error || "Unable to send your message.");
      }

      form.reset();

      setStatus("success");
      setFeedback("Message received. I’ll get back to you as soon as I can.");
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="px-6 py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
            05 / Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Have something worth building?
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
            I&apos;m open to internships, collaborations, freelance work,
            learning opportunities and interesting technical projects.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 border-t border-[var(--border)] pt-8"
        >
          {/* Honeypot — hidden from real visitors */}
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
              <span className="mb-3 block text-sm text-[var(--muted)]">
                Your name
              </span>

              <input
                type="text"
                name="name"
                required
                maxLength={100}
                placeholder="Jane Doe"
                className="w-full border-b border-[var(--border)] bg-transparent py-4 text-lg outline-none transition focus:border-[var(--cyan)]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-sm text-[var(--muted)]">
                Email
              </span>

              <input
                type="email"
                name="email"
                required
                maxLength={200}
                placeholder="jane@company.com"
                className="w-full border-b border-[var(--border)] bg-transparent py-4 text-lg outline-none transition focus:border-[var(--cyan)]"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-3 block text-sm text-[var(--muted)]">
              Subject
            </span>

            <input
              type="text"
              name="subject"
              maxLength={150}
              placeholder="Internship, project, collaboration..."
              className="w-full border-b border-[var(--border)] bg-transparent py-4 text-lg outline-none transition focus:border-[var(--cyan)]"
            />
          </label>

          <label className="block">
            <span className="mb-3 block text-sm text-[var(--muted)]">
              Tell me about it
            </span>

            <textarea
              name="message"
              required
              maxLength={3000}
              rows={5}
              placeholder="What would you like to build?"
              className="w-full resize-none border-b border-[var(--border)] bg-transparent py-4 text-lg outline-none transition focus:border-[var(--cyan)]"
            />
          </label>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-medium text-black transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  Sending
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>

            {feedback && (
              <p
                className={
                  status === "success"
                    ? "flex items-center gap-2 text-sm text-[var(--cyan)]"
                    : "text-sm text-red-400"
                }
              >
                {status === "success" && <CheckCircle2 size={17} />}
                {feedback}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}