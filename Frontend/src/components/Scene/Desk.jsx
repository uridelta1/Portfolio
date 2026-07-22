import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Desk({ lampTargetRef }) {
  const spotRef = useRef();
  const targetObj = useRef(new THREE.Object3D());

  useFrame(() => {
    if (spotRef.current && lampTargetRef.current) {
      targetObj.current.position.lerp(lampTargetRef.current, 0.08);
      spotRef.current.target = targetObj.current;
      spotRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <group>
      {/* Desk surface */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[7.2, 0.1, 3.6]} />
        <meshStandardMaterial color="#2a2018" roughness={0.75} metalness={0.05} />
      </mesh>

      {/* Desk legs (just for depth, barely visible) */}
      {[
        [-3.4, -1.2, -1.6],
        [3.4, -1.2, -1.6],
        [-3.4, -1.2, 1.6],
        [3.4, -1.2, 1.6],
      ].map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.15, 2.2, 0.15]} />
          <meshStandardMaterial color="#161616" roughness={0.9} />
        </mesh>
      ))}

      {/* Lamp base + arm + shade, positioned back-left of the desk */}
      <group position={[-2.6, 0.05, -1.2]}>
        <mesh>
          <cylinderGeometry args={[0.28, 0.32, 0.06, 24]} />
          <meshStandardMaterial color="#1c1c1c" metalness={0.6} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 1.1, 8]} />
          <meshStandardMaterial color="#1c1c1c" metalness={0.6} roughness={0.4} />
        </mesh>
        <group position={[0, 1.05, 0]} rotation={[0, 0, 0]}>
          <mesh>
            <coneGeometry args={[0.32, 0.5, 24, 1, true]} />
            <meshStandardMaterial
              color="#c9a24b"
              emissive="#e8b84b"
              emissiveIntensity={0.6}
              side={THREE.DoubleSide}
              roughness={0.5}
            />
          </mesh>
          <pointLight
            color="#e8b84b"
            intensity={1.4}
            distance={6}
            position={[0, -0.1, 0]}
          />
        </group>
      </group>

      {/* The dynamic spotlight that follows whatever object is hovered */}
      <spotLight
        ref={spotRef}
        position={[-2.6, 3.5, 0.5]}
        angle={0.55}
        penumbra={0.6}
        intensity={2.2}
        color="#f2d18a"
        castShadow
      />
    </group>
  );
}