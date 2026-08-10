"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import AICore from "./AICore";

export default function ExperienceCanvas() {
  const [ready, setReady] = useState(false);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[1] hidden transition-opacity duration-700 md:block ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    >
      <Canvas
        camera={{
          position: [0, 0, 6.5],
          fov: 42,
        }}
        dpr={[1, 1.4]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={() => {
          requestAnimationFrame(() => {
            setReady(true);
          });
        }}
      >
        <AICore />
      </Canvas>
    </div>
  );
}