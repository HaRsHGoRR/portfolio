import React, { useEffect, useRef } from 'react';

const CyberGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 50;
    let offset = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient for grid lines
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 245, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(255, 0, 128, 0.05)');
      gradient.addColorStop(1, 'rgba(138, 43, 226, 0.1)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = offset; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = offset; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Add some glowing intersections
      ctx.fillStyle = 'rgba(0, 245, 255, 0.3)';
      for (let x = offset; x < canvas.width; x += gridSize * 3) {
        for (let y = offset; y < canvas.height; y += gridSize * 3) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Animate the grid
      offset += 0.5;
      if (offset >= gridSize) {
        offset = 0;
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -2,
        background: 'transparent'
      }}
    />
  );
};

export default CyberGrid;