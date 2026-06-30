import { useEffect, useRef } from 'react';

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasElement: HTMLCanvasElement = canvas;

    const ctx = canvasElement.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvasElement.width;
        this.y = Math.random() * canvasElement.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasElement.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvasElement.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none w-full h-full"
    />
  );
}
