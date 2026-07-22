import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";

export default function Trophy({
  position,
  onSelect,
  onHover,
  index,
  scale = 1,
  rotation = [0, 0, 0],
}) {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF("/model/paw_trophy.glb");

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1.6 + 4) * 0.02;
      group.current.rotation.y += hovered ? 0.02 : 0.004;
      const targetScale = hovered ? scale * 1.08 : scale;
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
        onSelect("achievements");
      }}
    >
      <primitive object={scene} scale={2} />

      {hovered && (
        <pointLight color="#f5cd6a" intensity={1.4} distance={2.2} position={[0, 0.5, 0]} />
      )}

      {hovered && (
        <Html position={[0, 0.75, 0]} center distanceFactor={8} occlude>
          <div className="object-tag">
            <span className="idx">{index}</span> Achievements — open file
          </div>
        </Html>
      )}
    </group>
  );
}

useGLTF.preload("/model/paw_trophy.glb");