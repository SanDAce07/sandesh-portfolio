import { useEffect, useRef } from "react";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const shape = container.querySelector(".geo-shape") as HTMLElement;
      if (shape) {
        shape.style.setProperty("--mouse-x", `${dx * 15}deg`);
        shape.style.setProperty("--mouse-y", `${-dy * 15}deg`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
          width: "420px",
          height: "420px",
          position: "relative",
          transformStyle: "preserve-3d",
          animation: "geoRotate 20s linear infinite",
          transform:
            "rotateX(var(--mouse-y, 0deg)) rotateY(var(--mouse-x, 0deg))",
          opacity: 0.6,
        }}
      >
        {/* Outer wireframe cube */}
        {[...Array(6)].map((_, i) => {
          const faces = [
            { rotateY: "0deg", translateZ: "210px" },
            { rotateY: "180deg", translateZ: "210px" },
            { rotateY: "90deg", translateZ: "210px" },
            { rotateY: "-90deg", translateZ: "210px" },
            { rotateX: "90deg", translateZ: "210px" },
            { rotateX: "-90deg", translateZ: "210px" },
          ];
          const face = faces[i];
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "420px",
                height: "420px",
                top: 0,
                left: 0,
                transformStyle: "preserve-3d",
                transform: `${face.rotateX ? `rotateX(${face.rotateX})` : `rotateY(${face.rotateY})`} translateZ(${face.translateZ})`,
                border: "1px solid rgba(34,211,238,0.22)",
                boxSizing: "border-box",
                background: "transparent",
              }}
            />
          );
        })}

        {/* Ledger-like diagonal rails inside the frame. */}
        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
          <div
            key={`diag-${i}`}
            style={{
              position: "absolute",
              width: "2px",
              height: "594px",
              top: "50%",
              left: "50%",
              marginTop: "-297px",
              marginLeft: "-1px",
              background: `linear-gradient(to bottom, transparent, rgba(252,211,77,${0.14 + i * 0.02}), rgba(34,211,238,0.18), rgba(16,185,129,${0.13 + i * 0.02}), transparent)`,
              transformOrigin: "center center",
              transform: `rotateZ(${angle}deg) rotateX(${angle * 0.6}deg)`,
            }}
          />
        ))}

        {/* Audit mark core */}
        <div
          style={{
            position: "absolute",
            width: "108px",
            height: "108px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            border: "1px solid rgba(34,211,238,0.32)",
            background:
              "linear-gradient(135deg, rgba(120,53,15,0.68), rgba(6,78,59,0.78), rgba(8,47,73,0.9))",
            boxShadow:
              "0 0 42px rgba(34,211,238,0.18), 0 0 28px rgba(252,211,77,0.12)",
            animation: "corePulse 3s ease-in-out infinite",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "28px",
              borderLeft: "6px solid rgba(253,230,138,0.95)",
              borderBottom: "6px solid rgba(253,230,138,0.95)",
              transform: "rotate(-45deg) translateY(-4px)",
            }}
          />
        </div>

        {/* Evidence panels */}
        {[140, 200, 260].map((size, i) => (
          <div
            key={`panel-${i}`}
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${Math.round(size * 0.58)}px`,
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotateX(${58 + i * 16}deg) rotateZ(${i * 28}deg)`,
              borderRadius: "8px",
              border: `1px solid rgba(${i % 2 === 0 ? "34,211,238" : "252,211,77"},${0.25 - i * 0.04})`,
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
          50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.08); }
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
