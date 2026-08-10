import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export default function AICore() {
  const group = useRef();
  const innerCore = useRef();
  const ringOne = useRef();
  const ringTwo = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    const targetX = state.pointer.y * 0.25;
    const targetY = state.pointer.x * 0.35;

    group.current.rotation.x +=
      (targetX - group.current.rotation.x) * 0.04;

    group.current.rotation.y +=
      (targetY - group.current.rotation.y) * 0.04;

    if (innerCore.current) {
      innerCore.current.rotation.x += delta * 0.25;
      innerCore.current.rotation.y += delta * 0.35;
    }

    if (ringOne.current) {
      ringOne.current.rotation.z += delta * 0.15;
    }

    if (ringTwo.current) {
      ringTwo.current.rotation.x += delta * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={group}>
        {/* Outer shell */}
        <mesh>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshStandardMaterial
            color="#111827"
            emissive="#311b92"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>

        {/* Inner core */}
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

        {/* Orbit ring 1 */}
        <mesh ref={ringOne} rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[1.75, 0.018, 16, 120]} />
          <meshBasicMaterial color="#5ee7f7" />
        </mesh>

        {/* Orbit ring 2 */}
        <mesh ref={ringTwo} rotation={[0, Math.PI / 2.4, 0]}>
          <torusGeometry args={[2.05, 0.012, 16, 120]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>
      </group>
    </Float>
  );
}