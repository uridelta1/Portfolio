import { useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";
import Desk from "./Desk.jsx";
import Laptop from "./Laptop.jsx";
import Book from "./Book.jsx";
import Trophy from "./Trophy.jsx";
import Notepad from "./Notepad.jsx";

const DEFAULT_LAMP_TARGET = new THREE.Vector3(0, 0, 0);

export default function DeskScene({ onSelect }) {
  const lampTargetRef = useRef(DEFAULT_LAMP_TARGET.clone());

  const handleHover = useCallback((isHovering, position) => {
    if (isHovering) {
      lampTargetRef.current.set(position[0], position[1] + 0.3, position[2]);
    } else {
      lampTargetRef.current.copy(DEFAULT_LAMP_TARGET);
    }
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 2.6, 4.6], fov: 42 }}
      dpr={[1, 1.75]}
    >
      <color attach="background" args={["#0a0b0f"]} />
      <fog attach="fog" args={["#0a0b0f", 6, 16]} />

      <ambientLight intensity={0.18} />
      <hemisphereLight skyColor="#2a3038" groundColor="#0a0b0f" intensity={0.25} />

      <Desk lampTargetRef={lampTargetRef} />

      {/*
        scale/rotation are starting guesses — real .glb exports vary a lot
        in unit size and pivot point. If a model looks huge, tiny, sunk into
        the desk, or floating, adjust `scale` and the y position here first.
      */}
      <Laptop
        position={[-0.9, 0.05, 0.3]}
        scale={0.5}
        index="01"
        onSelect={onSelect}
        onHover={handleHover}
      />
      <Book
        position={[0.9, 0.05, 0.5]}
        scale={0.5}
        index="02"
        onSelect={onSelect}
        onHover={handleHover}
      />
      <Trophy
        position={[1.7, 0.05, -0.5]}
        scale={0.5}
        index="03"
        onSelect={onSelect}
        onHover={handleHover}
      />
      <Notepad
        position={[0.1, 0.05, 1.1]}
        scale={0.5}
        index="04"
        onSelect={onSelect}
        onHover={handleHover}
      />

      <ContactShadows
        position={[0, -0.001, 0]}
        opacity={0.55}
        scale={9}
        blur={2.2}
        far={2}
      />

      <Environment preset="apartment" />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3.2}
        maxDistance={6.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.1}
        minAzimuthAngle={-0.9}
        maxAzimuthAngle={0.9}
        target={[0, 0.1, 0]}
      />
    </Canvas>
  );
}