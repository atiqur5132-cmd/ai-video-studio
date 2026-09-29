import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Geometric3DFunnel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.8, stiffness: 90 },
  });

  // Butter-smooth camera push & organic 3D floating
  const cameraZoom = interpolate(frame, [0, 240], [1.0, 1.05], {
    extrapolateRight: 'clamp',
  });
  const floatY = Math.sin(frame / 36) * 8;
  const rotY = Math.sin(frame / 50) * 6;

  // Generate 32 floating video cubes with organic spiral descent
  const cubes = Array.from({ length: 32 }).map((_, i) => {
    const angle = (i * 0.45) + (frame * 0.025);
    const radius = 180 + ((i % 5) * 55);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * (radius * 0.35) - 60;
    const rot = (frame * 0.8 + i * 25) % 360;

    return { id: i, x, y, rot };
  });

  return (
    <div
      style={{
        width: 1840,
        height: 1000,
        backgroundColor: '#030712',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        perspective: 1200,
        transform: `scale(${cameraZoom})`,
      }}
    >
      {/* 3D Perspective Grid Floor */}
      <div
        style={{
          position: 'absolute',
          bottom: -150,
          width: 2400,
          height: 700,
          background: `
            linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.08) 50%, rgba(3, 7, 18, 0.95)),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(56, 189, 248, 0.12) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(56, 189, 248, 0.12) 40px)
          `,
          transform: 'perspective(600px) rotateX(68deg)',
          pointerEvents: 'none',
        }}
      />

      {/* Volumetric Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: 1200,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.14) 0%, rgba(239, 68, 68, 0.06) 50%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      {/* Sleek Minimal Status Badge (Clean & High-End) */}
      <div
        style={{
          position: 'absolute',
          top: 48,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 22px',
          backgroundColor: 'rgba(56, 189, 248, 0.12)',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          borderRadius: 100,
          backdropFilter: 'blur(10px)',
          opacity: entrance,
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#38BDF8',
            boxShadow: '0 0 12px #38BDF8',
          }}
        />
        <span
          style={{
            fontFamily: 'Montserrat, Inter, sans-serif',
            fontSize: 13,
            fontWeight: 800,
            color: '#BAE6FD',
            letterSpacing: 2.5,
            textTransform: 'uppercase',
          }}
        >
          THE ATTENTION CHOKEPOINT
        </span>
      </div>

      {/* Grand 3D Geometric Funnel Center Stage */}
      <div
        style={{
          width: 1000,
          height: 640,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          transform: `translateY(${floatY}px) rotateX(14deg) rotateY(${rotY}deg) scale(${entrance})`,
          zIndex: 15,
        }}
      >
        {/* Top Floating Video Cubes Inflow */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            width: '100%',
            height: 240,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Top Reservoir Orbital Ring */}
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: 100,
              width: 800,
              height: 280,
              borderRadius: '50%',
              border: '2px solid rgba(56, 189, 248, 0.4)',
              boxShadow: '0 0 35px rgba(56, 189, 248, 0.25)',
              transform: 'rotateX(72deg)',
            }}
          />

          {cubes.map((c) => (
            <div
              key={c.id}
              style={{
                position: 'absolute',
                left: `calc(50% + ${c.x}px)`,
                top: `calc(50% + ${c.y}px)`,
                width: 34,
                height: 26,
                borderRadius: 6,
                backgroundColor: '#0c1a30',
                border: '1.5px solid #38BDF8',
                boxShadow: '0 0 16px rgba(56, 189, 248, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                color: '#FFFFFF',
                transform: `rotate(${c.rot}deg)`,
              }}
            >
              ▶
            </div>
          ))}
        </div>

        {/* 3D Tapering Funnel Walls (SVG with Volumetric Gradients) */}
        <svg
          width="740"
          height="400"
          viewBox="0 0 740 400"
          style={{
            marginTop: 90,
            filter: 'drop-shadow(0 25px 60px rgba(0, 0, 0, 0.9))',
          }}
        >
          <defs>
            <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#EF4444" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* Funnel Body Conical Polygon */}
          <polygon
            points="70,20 670,20 420,270 320,270"
            fill="url(#funnelGrad)"
            stroke="#EF4444"
            strokeWidth="3"
            strokeOpacity="0.85"
          />

          {/* Funnel Structural Lines */}
          <line x1="140" y1="20" x2="340" y2="270" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <line x1="260" y1="20" x2="360" y2="270" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <line x1="370" y1="20" x2="370" y2="270" stroke="#00F0FF" strokeWidth="2.5" />
          <line x1="480" y1="20" x2="380" y2="270" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <line x1="600" y1="20" x2="400" y2="270" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />

          {/* Chokepoint Neck Cylinder */}
          <rect
            x="320"
            y="270"
            width="100"
            height="110"
            fill="#1e0505"
            stroke="#EF4444"
            strokeWidth="3"
            rx="8"
          />

          {/* Bottleneck Laser Sensor */}
          <line x1="300" y1="320" x2="440" y2="320" stroke="#00F0FF" strokeWidth="3" filter="drop-shadow(0 0 10px #00F0FF)" />
        </svg>

        {/* Filtered Output Core Badge */}
        <div
          style={{
            marginTop: -8,
            padding: '10px 28px',
            borderRadius: 14,
            backgroundColor: 'rgba(8, 26, 20, 0.95)',
            border: '2px solid #10B981',
            boxShadow: '0 0 35px rgba(16, 185, 129, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            zIndex: 20,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
          <span style={{ fontSize: 16, fontWeight: 900, color: '#34D399', letterSpacing: 2 }}>
            FILTERED COGNITIVE BANDWIDTH
          </span>
        </div>
      </div>
    </div>
  );
};
