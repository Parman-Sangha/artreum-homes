import React, { useRef, useEffect } from "react";

const TwoDCanvas = ({ onDraw }) => {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lines = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
  }, []);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    lines.current.push([{ x: e.clientX, y: e.clientY }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const currentLine = lines.current[lines.current.length - 1];
    currentLine.push({ x: e.clientX, y: e.clientY });
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    if (onDraw) onDraw(lines.current);
  };

  return (
    <canvas
      className="canvas-grid w-full h-full"
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
};

export default TwoDCanvas;
