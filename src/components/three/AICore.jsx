"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useFrame } from "@react-three/fiber";
import { Html, Line, Sparkles } from "@react-three/drei";

import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
} from "d3-force-3d";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  skillGraphNodes,
  skillGraphLinks,
} from "@/data/skillGraph";

gsap.registerPlugin(ScrollTrigger);

const skillClusters = [
  "frontend",
  "data",
  "ai",
  "tools",
];

function shouldShowLabel(node, activeCluster) {
  if (node.major) return true;

  if (activeCluster === "skills") {
    return skillClusters.includes(node.cluster);
  }

  if (activeCluster === "projects") {
    return node.cluster === "projects";
  }

  if (activeCluster === "learning") {
    return node.cluster === "learning";
  }

  if (activeCluster === "ai") {
    return node.cluster === "ai";
  }

  return false;
}

function nodeColor(node) {
  if (node.type === "core") {
    return "#f5f3ff";
  }

  if (node.type === "project") {
    return "#72e7ff";
  }

  if (node.status === "learning") {
    return "#8b5cf6";
  }

  if (node.status === "developing") {
    return "#9f7aea";
  }

  return "#c4b5fd";
}

export default function AICore() {
  const storyGroup = useRef();
  const motionGroup = useRef();

  const pulseRefs = useRef([]);

  const pointer = useRef({
    x: 0,
    y: 0,
  });

  const [activeCluster, setActiveCluster] =
    useState("core");

  const graph = useMemo(() => {
    const nodes = skillGraphNodes.map((node) => ({
      ...node,
    }));

    const links = skillGraphLinks.map((link) => ({
      ...link,
    }));

    const simulation = forceSimulation(nodes, 3)
      .force(
        "link",
        forceLink(links)
          .id((node) => node.id)
          .distance((link) => {
            if (link.kind === "root") return 95;
            if (link.kind === "project-skill") return 70;

            return 60;
          })
          .strength((link) =>
            link.kind === "project-skill" ? 0.45 : 0.8
          )
      )
      .force(
        "charge",
        forceManyBody().strength((node) =>
          node.type === "core" ? -320 : -125
        )
      )
      .force("center", forceCenter(0, 0, 0))
      .force(
        "collision",
        forceCollide()
          .radius((node) =>
            node.major ? 18 : 10
          )
          .strength(0.9)
      )
      .stop();

    // Let the layout settle immediately instead
    // of wobbling forever in the browser.
    for (let i = 0; i < 260; i += 1) {
      simulation.tick();
    }

    const coordinates = nodes.flatMap((node) => [
      Math.abs(node.x || 0),
      Math.abs(node.y || 0),
      Math.abs(node.z || 0),
    ]);

    const maximum =
      Math.max(...coordinates, 1);

    const scale = 2.45 / maximum;

    nodes.forEach((node) => {
      node.x = (node.x || 0) * scale;
      node.y = (node.y || 0) * scale;
      node.z = (node.z || 0) * scale;
    });

    return {
      nodes,
      links,
    };
  }, []);

  const pulseLinks = useMemo(
    () =>
      graph.links
        .filter(
          (link) =>
            link.kind === "project-skill" ||
            link.kind === "root"
        )
        .slice(0, 7),
    [graph]
  );

  useEffect(() => {
    function handlePointerMove(event) {
      pointer.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      pointer.current.y =
        -(event.clientY / window.innerHeight) * 2 + 1;
    }

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, []);

  useEffect(() => {
    if (!storyGroup.current) return;

    const sectionStates = [
      {
        selector: "#home",
        cluster: "core",
      },
      {
        selector: "#about",
        cluster: "core",
      },
      {
        selector: "#skills",
        cluster: "skills",
      },
      {
        selector: "#projects",
        cluster: "projects",
      },
      {
        selector: "#journey",
        cluster: "learning",
      },
      {
        selector: "#ask-ai",
        cluster: "ai",
      },
    ];

    const triggers = sectionStates.map(
      ({ selector, cluster }) =>
        ScrollTrigger.create({
          trigger: selector,
          start: "top 60%",
          end: "bottom 40%",

          onEnter: () => {
            setActiveCluster(cluster);
          },

          onEnterBack: () => {
            setActiveCluster(cluster);
          },
        })
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        endTrigger: "#contact",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4,
      },
    });

    timeline
      .to(storyGroup.current.position, {
        z: 0.45,
        y: 0.1,
        duration: 1,
      })

      .to(
        storyGroup.current.scale,
        {
          x: 1.03,
          y: 1.03,
          z: 1.03,
          duration: 1,
        },
        "<"
      )

      .to(storyGroup.current.rotation, {
        y: 0.14,
        duration: 1,
      })

      .to(storyGroup.current.position, {
        z: 0.15,
        y: -0.08,
        duration: 1,
      })

      .to(storyGroup.current.rotation, {
        y: -0.1,
        duration: 1,
      })

      .to(storyGroup.current.position, {
        z: 0.35,
        y: 0,
        duration: 1,
      });

    return () => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });

      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, []);

  useFrame((state) => {
    if (!motionGroup.current) return;

    const time = state.clock.elapsedTime;

    const targetY =
      pointer.current.x * 0.08;

    const targetX =
      -pointer.current.y * 0.045;

    motionGroup.current.rotation.y +=
      (targetY -
        motionGroup.current.rotation.y) *
      0.018;

    motionGroup.current.rotation.x +=
      (targetX -
        motionGroup.current.rotation.x) *
      0.018;

    motionGroup.current.rotation.z =
      Math.sin(time * 0.12) * 0.018;

    pulseLinks.forEach((link, index) => {
      const pulse = pulseRefs.current[index];

      if (!pulse) return;

      const source = link.source;
      const target = link.target;

      const progress =
        (time * (0.11 + index * 0.012) +
          index * 0.17) %
        1;

      pulse.position.set(
        source.x +
          (target.x - source.x) * progress,

        source.y +
          (target.y - source.y) * progress,

        source.z +
          (target.z - source.z) * progress
      );
    });
  });

  return (
    <group
      ref={storyGroup}
      position={[1.85, 0, 0]}
      scale={0.88}
    >
      <group ref={motionGroup}>
        {/* Connections */}
        {graph.links.map((link, index) => {
          const source = link.source;
          const target = link.target;

          const sourceRelevant =
            activeCluster === "skills"
              ? skillClusters.includes(
                  source.cluster
                )
              : source.cluster === activeCluster;

          const targetRelevant =
            activeCluster === "skills"
              ? skillClusters.includes(
                  target.cluster
                )
              : target.cluster === activeCluster;

          const active =
            sourceRelevant || targetRelevant;

          return (
            <Line
              key={`${source.id}-${target.id}-${index}`}
              points={[
                [
                  source.x,
                  source.y,
                  source.z,
                ],
                [
                  target.x,
                  target.y,
                  target.z,
                ],
              ]}
              color={
                active
                  ? "#a78bfa"
                  : "#5b3b82"
              }
              lineWidth={active ? 0.75 : 0.3}
              transparent
              opacity={active ? 0.62 : 0.16}
              depthWrite={false}
            />
          );
        })}

        {/* Nodes */}
        {graph.nodes.map((node) => {
          const isCore =
            node.type === "core";

          const isProject =
            node.type === "project";

          const radius = isCore
            ? 0.14
            : node.major
              ? 0.09
              : isProject
                ? 0.065
                : 0.042;

          const showLabel =
            shouldShowLabel(
              node,
              activeCluster
            );

          return (
            <group
              key={node.id}
              position={[
                node.x,
                node.y,
                node.z,
              ]}
            >
              <mesh>
                <sphereGeometry
                  args={[
                    radius,
                    16,
                    16,
                  ]}
                />

                <meshBasicMaterial
                  color={nodeColor(node)}
                />
              </mesh>

              <mesh>
                <sphereGeometry
                  args={[
                    radius * 2.6,
                    12,
                    12,
                  ]}
                />

                <meshBasicMaterial
                  color={nodeColor(node)}
                  transparent
                  opacity={
                    isCore ? 0.13 : 0.055
                  }
                  depthWrite={false}
                />
              </mesh>

              {showLabel && (
                <Html
                  center
                  position={[
                    0,
                    radius + 0.14,
                    0,
                  ]}
                  distanceFactor={7}
                  style={{
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "var(--font-geist-mono)",
                      fontSize: node.major
                        ? "10px"
                        : "8px",
                      letterSpacing:
                        "0.08em",
                      color:
                        isProject
                          ? "#72e7ff"
                          : "#ddd6fe",
                      textTransform:
                        "uppercase",
                      textShadow:
                        "0 0 14px rgba(139,92,246,0.6)",
                    }}
                  >
                    {node.label}
                  </span>
                </Html>
              )}
            </group>
          );
        })}

        {/* Moving data signals */}
        {pulseLinks.map((link, index) => (
          <mesh
            key={`pulse-${index}`}
            ref={(element) => {
              pulseRefs.current[index] =
                element;
            }}
          >
            <sphereGeometry
              args={[0.028, 10, 10]}
            />

            <meshBasicMaterial
              color="#72e7ff"
            />
          </mesh>
        ))}

        <Sparkles
          count={35}
          scale={[5, 4, 3]}
          size={0.7}
          speed={0.1}
          noise={0.35}
          color="#b49aff"
          opacity={0.2}
        />
      </group>
    </group>
  );
}