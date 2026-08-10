"use client";

import { Canvas } from "@react-three/fiber";
import AICore from "./AICore";

export default function ExperienceCanvas() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    >
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 40,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={0.5} />

        <pointLight
          position={[4, 4, 4]}
          intensity={20}
          color="#5ee7f7"
        />

        <pointLight
          position={[-4, -2, 3]}
          intensity={16}
          color="#8b5cf6"
        />

        <AICore />
      </Canvas>
    </div>
  );
}