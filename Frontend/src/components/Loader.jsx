import { useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress, active } = useProgress();

  if (!active && progress >= 100) return null;

  return (
    <div className="loader">
      <div className="loader-label">Setting the desk — {Math.round(progress)}%</div>
      <div className="loader-bar">
        <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
