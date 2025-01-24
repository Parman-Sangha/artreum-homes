import React from "react";
import { Canvas } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const ThreeDCanvas = ({ lines = [] }) => {
  const safeLines = Array.isArray(lines) ? lines : [];

  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group>
        {safeLines.map((line, index) => (
          <Line
            key={index}
            points={line.map((point) => [
              point.x / 100,
              -point.y / 100,
              0,
            ])}
            color="blue"
            lineWidth={2}
          />
        ))}
      </group>
    </Canvas>
  );
};

export default ThreeDCanvas;
