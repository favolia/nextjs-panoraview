"use client";
import Portals from "@/components/component/Portals";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";


export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={false}
          rotateSpeed={-0.5}
        />
        <Suspense fallback={null}>
          <Preload all />
          <Portals />
        </Suspense>
      </Canvas>
    </main>
  );
}
