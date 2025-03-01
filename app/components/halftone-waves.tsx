"use client";

import { useEffect, useRef } from 'react';

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;  // Fix TypeScript error
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawHalftoneWave = (visibility: number) => {  // Fix TypeScript error
      const gridSize = 20;
      const rows = Math.ceil(canvas.height / gridSize);
      const cols = Math.ceil(canvas.width / gridSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const centerX = x * gridSize;
          const centerY = y * gridSize;
          const distanceFromCenter = Math.sqrt(
            Math.pow(centerX - canvas.width / 2, 2) +
            Math.pow(centerY - canvas.height / 2, 2)
          );
          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / 2, 2) +
            Math.pow(canvas.height / 2, 2)
          );
          const normalizedDistance = distanceFromCenter / maxDistance;
          const waveOffset = Math.sin(normalizedDistance * 10 - time) * 0.5 + 0.5;
          const size = gridSize * waveOffset * 0.8 * visibility;

          ctx.beginPath();
          ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${waveOffset * 0.5 * visibility})`;
          ctx.fill();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear fully for vanishing
      const visibility = Math.max(1 - scrollRef.current / window.innerHeight, 0);
      drawHalftoneWave(visibility);
      time += 0.05;
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-screen bg-black" />
      <div style={{ height: '200vh' }}> {/* Add scrollable content */}
        {/* Your content here */}
      </div>
    </>
  );
}