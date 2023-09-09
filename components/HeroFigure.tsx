"use client";
import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const Torus = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2, 0.2, 16, 100]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export const HeroFigure = () => {
  return (
    //   should be full screen
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <Torus />
    </Canvas>
  );
};
