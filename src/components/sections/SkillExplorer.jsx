"use client";

import { useState } from "react";
import { skillGraphNodes } from "@/data/skillGraph";

const clusterNames = {
  frontend: "Frontend",
  data: "Data",
  ai: "AI",
  tools: "Tools",
};

const statusLabels = {
  current: "Building with",
  learning: "Learning",
  developing: "Developing",
};

const allowedClusters = [
  "frontend",
  "data",
  "ai",
  "tools",
];

export default function SkillExplorer() {
  const [activeNode, setActiveNode] = useState(null);

  const skills = skillGraphNodes.filter(
    (node) =>
      allowedClusters.includes(node.cluster) &&
      node.type !== "hub"
  );

  function focusGraph(node) {
    setActiveNode(node);

    window.dispatchEvent(
      new CustomEvent("portfolio-node-focus", {
        detail: {
          id: node?.id || null,
        },
      })
    );
  }

  function clearGraph() {
    setActiveNode(null);

    window.dispatchEvent(
      new CustomEvent("portfolio-node-focus", {
        detail: {
          id: null,
        },
      })
    );
  }

  return (
    <div className="mt-14">
      <div className="grid gap-10 sm:grid-cols-2">
        {allowedClusters.map((cluster) => {
          const clusterSkills = skills.filter(
            (skill) => skill.cluster === cluster
          );

          return (
            <div
              key={cluster}
              className="border-t border-white/[0.08] pt-5"
            >
              <p className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-[var(--purple-light)]">
                {clusterNames[cluster]}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {clusterSkills.map((skill) => {
                  const selected =
                    activeNode?.id === skill.id;

                  return (
                    <button
                      key={skill.id}
                      type="button"
                      onMouseEnter={() =>
                        focusGraph(skill)
                      }
                      onMouseLeave={clearGraph}
                      onFocus={() =>
                        focusGraph(skill)
                      }
                      onBlur={clearGraph}
                      className={`rounded-full border px-3 py-1.5 text-xs transition duration-300 ${
                        selected
                          ? "border-[var(--purple-light)] bg-[rgba(139,92,246,0.18)] text-white shadow-[0_0_25px_rgba(139,92,246,0.15)]"
                          : "border-white/[0.08] bg-white/[0.025] text-[var(--muted-light)] hover:border-[var(--border-bright)] hover:text-white"
                      }`}
                    >
                      {skill.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 min-h-[92px] border-y border-white/[0.08] py-5">
        {activeNode ? (
          <div className="grid gap-2 sm:grid-cols-[140px_1fr]">
            <span className="font-mono-custom text-[9px] uppercase tracking-[0.2em] text-[var(--purple-light)]">
              {statusLabels[activeNode.status] ||
                "Exploring"}
            </span>

            <div>
              <p className="text-lg font-medium">
                {activeNode.label}
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                Hovering here also highlights this
                technology and its relationships inside
                the knowledge graph.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex min-h-[50px] items-center">
            <p className="text-sm text-[var(--muted)]">
              Hover or focus a technology to explore its
              place in my knowledge graph.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}