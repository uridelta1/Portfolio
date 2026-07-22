import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";

export default function Notepad({
  position,
  onSelect,
  onHover,
  index,
  scale = 1,
  rotation = [0, -0.2, 0],
}) {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  // TODO: swap in your exact filename from public/model (e.g. pen_and_notebook_props_xxx.glb)
  const { scene } = useGLTF("/model/pen.glb");

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1.3 + 1) * 0.015;
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
        onSelect("contact");
      }}
    >
      <primitive object={scene} scale={5} />

      {hovered && (
        <pointLight color="#e8b84b" intensity={1} distance={1.8} position={[0, 0.3, 0]} />
      )}

      {hovered && (
        <Html position={[0, 0.5, 0]} center distanceFactor={8} occlude>
          <div className="object-tag">
            <span className="idx">{index}</span> Contact — open file
          </div>
        </Html>
      )}
    </group>
  );
}

// TODO: swap in your exact filename from public/model
useGLTF.preload("/model/pen.glb");