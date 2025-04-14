import React, { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";

const DrawingBoard = () => {
  const [is3DMode, setIs3DMode] = useState(false);
  const [lines, setLines] = useState([]);
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const drawnLines = useRef([]);

  const toggleMode = () => {
    setIs3DMode((prev) => !prev);
  };

  const handleMouseDown = (e) => {
    if (is3DMode) return;
    isDrawing.current = true;
    drawnLines.current.push([{ x: e.clientX, y: e.clientY }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current || is3DMode) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const currentLine = drawnLines.current[drawnLines.current.length - 1];
    currentLine.push({ x: e.clientX, y: e.clientY });
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    if (is3DMode) return;
    isDrawing.current = false;
    setLines([...drawnLines.current]);
  };

  useEffect(() => {
    if (!is3DMode) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth * 0.8;
      canvas.height = window.innerHeight * 0.7;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
    }
  }, [is3DMode]);

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-md px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
            Floor Planner
          </h1>
          <button
            onClick={toggleMode}
            className="button-18"
          >
            Switch to {is3DMode ? "2D Mode" : "3D Mode"}
          </button>
        </div>
      </header>
      <div className="flex flex-grow">
        <aside className="w-1/5 bg-white shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Tools</h2>
          <ul className="space-y-4">
            <li>
              <button className="button-18">Outside Wall</button>
            </li>
            <li>
              <button className="button-18">Partition Wall</button>
            </li>
            <li>
              <button className="button-18">Glass Wall</button>
            </li>
            <li>
              <button className="button-18">Door</button>
            </li>
            <li>
              <button className="button-18">Window</button>
            </li>
            <li>
              <button className="button-18">Table</button>
            </li>
            <li>
              <button className="button-18">Chair</button>
            </li>
          </ul>
        </aside>
        <main className="flex-1 flex justify-center items-center bg-gray-50">
          {is3DMode ? (
            <Canvas
              camera={{ position: [0, 0, 10] }}
              style={{
                width: "80%",
                height: "70%",
                background: "white",
                borderRadius: "10px",
              }}
            >
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <group>
                {lines.map((line, index) => (
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
          ) : (
            <canvas
              className="shadow-lg"
              ref={canvasRef}
              style={{
                border: "2px solid #E5E7EB",
                backgroundColor: "white",
                borderRadius: "10px",
                width: "80%",
                height: "70%",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            />
          )}
        </main>
        <aside className="w-1/5 bg-white shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Options</h2>
          <ul className="space-y-4">
            <li>
              <button className="button-18">Settings</button>
            </li>
            <li>
              <button className="button-18">Layers</button>
            </li>
            <li>
              <button className="button-18">Measure</button>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};
  

export default DrawingBoard;
