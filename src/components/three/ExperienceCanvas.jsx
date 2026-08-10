"use client";

import { Canvas } from "@react-three/fiber";
import AICore from "./AICore";

export default function ExperienceCanvas() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
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
      >
        <AICore />
      </Canvas>
    </div>
  );
}