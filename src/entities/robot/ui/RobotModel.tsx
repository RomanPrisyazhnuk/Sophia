import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

const RobotScene = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      {/* Модель персонажа */}
      <mesh ref={meshRef}>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>

      {/* Контроллер вращения и масштабирования */}
      <OrbitControls
        enableZoom={true}
        minDistance={9}  // Минимальная дистанция для зума (90%)
        maxDistance={11} // Максимальная дистанция для зума (110%)
        minPolarAngle={Math.PI / 2}  // Ограничение вращения по X (только горизонтальная ось)
        maxPolarAngle={Math.PI / 2}  // Ограничение вращения по X (только горизонтальная ось)
      />    
    </Canvas>
  );
};

export default RobotScene;
