"use client";

import { useState } from "react";
import {
  ArrowUp,
  Bot,
  Loader2,
  Sparkles,
} from "lucide-react";

const suggestions = [
  "What is Michael learning right now?",
  "Show me his strongest project.",
  "What frontend technologies does he use?",
  "Why should I consider Michael for an internship?",
];

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const isLoading = status === "loading";

  async function askAI(questionToAsk) {
    const cleanQuestion = questionToAsk.trim();

    if (!cleanQuestion || isLoading) return;

    // Keep the input empty after submitting,
    // including when a suggestion is clicked.
    setQuestion("");
    setError("");
    setStatus("loading");

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: cleanQuestion,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to ask the assistant."
        );
      }

      setAnswer(data.answer);
      setStatus("success");
    } catch (error) {
      console.error("Ask Michael error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while contacting the AI."
      );

      setStatus("error");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    askAI(question);
  }

  function handleKeyDown(event) {
    // Enter sends.
    // Shift + Enter creates a new line.
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      askAI(question);
    }
  }

  return (
    <section
      id="ask-ai"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* Section intro */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
              05 / Intelligence
            </p>

            <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Don&apos;t just
              <br />
              read my portfolio.
              <br />

              <span className="text-[var(--muted)]">
                Ask it.
              </span>
            </h2>

            <p className="mt-8 max-w-md leading-7 text-[var(--muted)]">
              Ask about my projects, current skills, learning
              journey or the direction I&apos;m heading in.
            </p>
          </div>

          {/* AI interface */}
          <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-[rgba(180,154,255,0.22)] bg-[rgba(10,6,16,0.94)] p-6 shadow-[0_24px_90px_rgba(76,29,149,0.20)] backdrop-blur-xl md:p-8">
            <div
  aria-hidden="true"
  className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--purple)] opacity-[0.08] blur-[100px]"
/>

            {/* Header */}
            <div className="relative z-10 mb-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]">
                  <Bot size={19} />
                </div>

                <div>
                  <p className="font-medium">
                    Ask Michael
                  </p>

                  <p className="text-xs text-[var(--muted)]">
                    AI portfolio assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[var(--cyan)]">
                <span className="h-2 w-2 rounded-full bg-[var(--cyan)]" />
                Online
              </div>
            </div>

            {/* Suggestions stay visible */}
            <div className="mb-8">
              <div className="mb-5 flex items-center gap-2 text-sm text-[var(--muted)]">
                <Sparkles size={15} />
                Try asking
              </div>

              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    disabled={isLoading}
                    onClick={() => askAI(suggestion)}
                    className="rounded-full border border-[var(--border)] px-4 py-2 text-left text-sm text-[var(--muted)] transition hover:border-[var(--cyan)] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Stable response area */}
            <div
              aria-live="polite"
              aria-busy={isLoading}
              className="min-h-[220px] max-h-[260px] overflow-y-auto border-y border-[var(--border)] py-6"
            >
              {isLoading && (
                <div className="flex min-h-[160px] items-center gap-3 text-[var(--muted)]">
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />

                  <p>Thinking about that...</p>
                </div>
              )}

              {!isLoading && answer && (
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--cyan)]">
                    Response
                  </p>

                  <p className="whitespace-pre-line text-lg leading-8">
                    {answer}
                  </p>
                </div>
              )}

              {!isLoading &&
                !answer &&
                !error && (
                  <div className="flex min-h-[160px] items-center">
                    <p className="max-w-md text-[var(--muted)]">
                      Ask a question or choose one of the
                      suggestions above.
                    </p>
                  </div>
                )}

              {!isLoading && error && (
                <div className="flex min-h-[160px] items-center">
                  <p className="text-sm text-red-400">
                    {error}
                  </p>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex items-end gap-3"
            >
              <label
                htmlFor="portfolio-question"
                className="sr-only"
              >
                Ask Michael a question
              </label>

              <textarea
                id="portfolio-question"
                value={question}
                onChange={(event) =>
                  setQuestion(event.target.value)
                }
                onKeyDown={handleKeyDown}
                maxLength={500}
                rows={2}
                placeholder="Ask something about Michael..."
                className="min-h-[60px] flex-1 resize-none bg-transparent py-3 text-base outline-none placeholder:text-[var(--muted)]"
              />

              <button
                type="submit"
                disabled={
                  !question.trim() || isLoading
                }
                aria-label={
                  isLoading
                    ? "Michael's AI is answering"
                    : "Ask Michael"
                }
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isLoading ? (
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                ) : (
                  <ArrowUp size={19} />
                )}
              </button>
            </form>

            <div className="mt-4 flex items-center justify-between gap-4 text-xs text-[var(--muted)]">
              <p>
                Answers use Michael&apos;s portfolio information.
              </p>

              <p>
                {question.length}/500
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}