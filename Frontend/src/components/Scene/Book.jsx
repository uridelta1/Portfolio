import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";

export default function Book({
  position,
  onSelect,
  onHover,
  index,
  scale = 1,
  rotation = [0, 0.8, 0],
}) {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF("/model/books.glb");

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1.4 + 2) * 0.015;
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
        onSelect("about");
      }}
    >
      <primitive object={scene} scale={0.5} />

      {hovered && (
        <pointLight color="#e8b84b" intensity={1.2} distance={2} position={[0, 0.4, 0]} />
      )}

      {hovered && (
        <Html position={[0, 0.7, 0]} center distanceFactor={8} occlude>
          <div className="object-tag">
            <span className="idx">{index}</span> About &amp; Skills — open file
          </div>
        </Html>
      )}
    </group>
  );
}

useGLTF.preload("/model/books.glb");