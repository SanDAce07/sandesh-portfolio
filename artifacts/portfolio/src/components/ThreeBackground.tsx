import { useEffect, useRef } from 'react';

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const shape = container.querySelector('.geo-shape') as HTMLElement;
      if (shape) {
        shape.style.setProperty('--mouse-x', `${dx * 15}deg`);
        shape.style.setProperty('--mouse-y', `${-dy * 15}deg`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-end pr-0 md:pr-16"
      style={{ zIndex: 1 }}
    >
      <div
        className="geo-shape"
        style={{
          width: '420px',
          height: '420px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'geoRotate 20s linear infinite',
          transform: 'rotateX(var(--mouse-y, 0deg)) rotateY(var(--mouse-x, 0deg))',
          opacity: 0.6,
        }}
      >
        {/* Outer wireframe cube */}
        {[...Array(6)].map((_, i) => {
          const faces = [
            { rotateY: '0deg', translateZ: '210px' },
            { rotateY: '180deg', translateZ: '210px' },
            { rotateY: '90deg', translateZ: '210px' },
            { rotateY: '-90deg', translateZ: '210px' },
            { rotateX: '90deg', translateZ: '210px' },
            { rotateX: '-90deg', translateZ: '210px' },
          ];
          const face = faces[i];
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                top: 0,
                left: 0,
                transformStyle: 'preserve-3d',
                transform: `${face.rotateX ? `rotateX(${face.rotateX})` : `rotateY(${face.rotateY})`} translateZ(${face.translateZ})`,
                border: '1px solid rgba(99,102,241,0.25)',
                boxSizing: 'border-box',
                background: 'transparent',
              }}
            />
          );
        })}

        {/* Inner icosahedron edges — diagonal lines using rotated thin divs */}
        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
          <div
            key={`diag-${i}`}
            style={{
              position: 'absolute',
              width: '2px',
              height: '594px',
              top: '50%',
              left: '50%',
              marginTop: '-297px',
              marginLeft: '-1px',
              background: `linear-gradient(to bottom, transparent, rgba(99,102,241,${0.15 + i * 0.03}), rgba(168,85,247,0.2), rgba(99,102,241,${0.15 + i * 0.03}), transparent)`,
              transformOrigin: 'center center',
              transform: `rotateZ(${angle}deg) rotateX(${angle * 0.6}deg)`,
            }}
          />
        ))}

        {/* Glowing core sphere */}
        <div
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.2) 50%, transparent 70%)',
            boxShadow: '0 0 40px rgba(99,102,241,0.3), 0 0 80px rgba(168,85,247,0.15)',
            animation: 'corePulse 3s ease-in-out infinite',
          }}
        />

        {/* Orbit rings */}
        {[140, 200, 260].map((size, i) => (
          <div
            key={`ring-${i}`}
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotateX(${60 + i * 20}deg) rotateZ(${i * 30}deg)`,
              borderRadius: '50%',
              border: `1px solid rgba(${i % 2 === 0 ? '99,102,241' : '168,85,247'},${0.3 - i * 0.05})`,
              animation: `ringPulse ${2 + i * 0.5}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes geoRotate {
          0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          33%  { transform: rotateX(120deg) rotateY(240deg) rotateZ(120deg); }
          66%  { transform: rotateX(240deg) rotateY(120deg) rotateZ(240deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        @keyframes corePulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.3); }
        }
        @keyframes ringPulse {
          0%   { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
        .geo-shape {
          --mouse-x: 0deg;
          --mouse-y: 0deg;
        }
        @media (prefers-reduced-motion: reduce) {
          .geo-shape, .geo-shape * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
