import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#22d3ee" />
      <directionalLight position={[-5, -3, -5]} intensity={0.7} color="#a855f7" />
      <pointLight position={[0, 0, 4]} intensity={0.6} color="#ec4899" />

      <group ref={groupRef}>
        <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.5}>
          <Sphere args={[1.4, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#7c3aed"
              attach="material"
              distort={0.45}
              speed={2.2}
              roughness={0.2}
              metalness={0.85}
            />
          </Sphere>
        </Float>

        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Torus args={[2.3, 0.04, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.6} />
          </Torus>
        </Float>
        <Float speed={1.4} rotationIntensity={1.5} floatIntensity={1.5}>
          <Torus args={[2.7, 0.03, 16, 100]} rotation={[Math.PI / 2.2, Math.PI / 4, 0]}>
            <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
          </Torus>
        </Float>
      </group>
    </>
  );
};

export const Hero3D = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  </Canvas>
);
