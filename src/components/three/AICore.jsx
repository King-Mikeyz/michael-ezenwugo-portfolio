"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AICore() {
  const storyGroup = useRef();
  const motionGroup = useRef();
  const innerCore = useRef();
  const ringOne = useRef();
  const ringTwo = useRef();

  const viewportWidth = useThree((state) => state.viewport.width);
  const desktop = viewportWidth > 5;

  useFrame((state, delta) => {
    if (!motionGroup.current) return;

    // Small living movement
    motionGroup.current.rotation.y += delta * 0.08;

    if (innerCore.current) {
      innerCore.current.rotation.x += delta * 0.25;
      innerCore.current.rotation.y += delta * 0.35;
    }

    if (ringOne.current) {
      ringOne.current.rotation.z += delta * 0.18;
    }

    if (ringTwo.current) {
      ringTwo.current.rotation.x += delta * 0.14;
    }
  });

  useEffect(() => {
    if (!storyGroup.current) return;

    const group = storyGroup.current;
    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 768px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions;

        if (reduceMotion) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#home",
            endTrigger: "#contact",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });

        timeline

          // Hero -> About
          .to(group.position, {
            x: desktop ? -2.2 : 0,
            y: 0.4,
            duration: 1,
          })

          .to(
            group.rotation,
            {
              z: Math.PI * 0.25,
              duration: 1,
            },
            "<"
          )

          // About -> Skills
          .to(group.position, {
            x: desktop ? 2.1 : 0,
            y: -0.2,
            duration: 1,
          })

          .to(
            group.scale,
            {
              x: 0.8,
              y: 0.8,
              z: 0.8,
              duration: 1,
            },
            "<"
          )

          // Skills -> Projects
          .to(group.position, {
            x: desktop ? -2.4 : 0,
            y: 0.2,
            duration: 1,
          })

          .to(
            group.scale,
            {
              x: 1.2,
              y: 1.2,
              z: 1.2,
              duration: 1,
            },
            "<"
          )

          // Projects -> Journey
          .to(group.position, {
            x: desktop ? 2.3 : 0,
            y: -0.4,
            duration: 1,
          })

          .to(
            group.rotation,
            {
              z: -Math.PI * 0.35,
              duration: 1,
            },
            "<"
          )

          // Journey -> Contact
          .to(group.position, {
            x: 0,
            y: 0,
            duration: 1,
          })

          .to(
            group.scale,
            {
              x: 0.65,
              y: 0.65,
              z: 0.65,
              duration: 1,
            },
            "<"
          );
      }
    );

    return () => media.revert();
  }, []);

  return (
    <group
      ref={storyGroup}
      position={[desktop ? 1.7 : 0, 0, 0]}
    >
      <Float
        speed={1.5}
        rotationIntensity={0.1}
        floatIntensity={0.35}
      >
        <group ref={motionGroup}>
          <mesh>
            <icosahedronGeometry args={[1.35, 2]} />

            <meshStandardMaterial
              color="#111827"
              emissive="#311b92"
              emissiveIntensity={0.6}
              wireframe
            />
          </mesh>

          <mesh ref={innerCore}>
            <icosahedronGeometry args={[0.72, 1]} />

            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#5ee7f7"
              emissiveIntensity={1.8}
              roughness={0.25}
              metalness={0.5}
            />
          </mesh>

          <mesh ref={ringOne} rotation={[Math.PI / 2.5, 0, 0]}>
            <torusGeometry args={[1.75, 0.018, 16, 120]} />
            <meshBasicMaterial color="#5ee7f7" />
          </mesh>

          <mesh ref={ringTwo} rotation={[0, Math.PI / 2.4, 0]}>
            <torusGeometry args={[2.05, 0.012, 16, 120]} />
            <meshBasicMaterial color="#8b5cf6" />
          </mesh>
        </group>
      </Float>
    </group>
  );
}