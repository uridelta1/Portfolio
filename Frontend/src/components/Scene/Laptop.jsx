import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";

export default function Laptop({
  position,
  onSelect,
  onHover,
  index,
  scale = 0.3,
  rotation = [0, -1, 0],
}) {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF("/model/gaming_laptop.glb");

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1.2) * 0.02;
      const targetScale = hovered ? scale * 1.06 : scale;
      group.current.scale.lerp(
        { x: targetScale, y: targetScale, z: targetScale },
        0.15
      );
    }
  });

  return (
    <group
      ref={group}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover(true, position);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        onHover(false, position);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect("projects");
      }}
    >
      <primitive object={scene} 
      scale={0.8} />

      {hovered && (
        <pointLight color="#e8b84b" intensity={1.2} distance={2} position={[0, 0.6, 0]} />
      )}

      {hovered && (
        <Html position={[0, 1, 0]} center distanceFactor={8} occlude>
          <div className="object-tag">
            <span className="idx">{index}</span> Projects — open file
          </div>
        </Html>
      )}
    </group>
  );
}

useGLTF.preload("/model/gaming_laptop.glb");