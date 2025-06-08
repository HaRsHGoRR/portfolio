import React, { useEffect, useRef } from 'react';

const ParticleSystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = this.getRandomColor();
        this.opacity = Math.random() * 0.5 + 0.3;
        this.pulse = Math.random() * 0.02 + 0.01;
      }

      getRandomColor() {
        const colors = [
          '#00f5ff', // neon-cyan
          '#ff0080', // neon-pink
          '#8a2be2', // neon-purple
          '#00ff41', // neon-green
          '#ff6600', // neon-orange
          '#0066ff'  // neon-blue
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.speedX = -this.speedX;
        if (this.y <= 0 || this.y >= canvas.height) this.speedY = -this.speedY;

        // Breathing effect
        this.opacity = 0.3 + Math.sin(Date.now() * this.pulse + this.x * 0.01) * 0.3;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles = [];
    const numParticles = Math.min(60, Math.floor(window.innerWidth / 20));

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    // Mouse interaction
    let mouse = { x: 0, y: 0 };
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Mouse interaction - attract particles to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          particle.x += dx * 0.02;
          particle.y += dy * 0.02;
        }

        // Connect nearby particles with lines
        for (let j = index + 1; j < particles.length; j++) {
          const dx2 = particle.x - particles[j].x;
          const dy2 = particle.y - particles[j].y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 120) {
            ctx.save();
            ctx.globalAlpha = (120 - distance2) / 120 * 0.2;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
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
        zIndex: -1,
        background: 'transparent'
      }}
    />
  );
};

export default ParticleSystem;