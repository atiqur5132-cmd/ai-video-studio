import React, { useMemo } from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { CosmicAtmosphere } from '../../components/CosmicAtmosphere';

export const Scene1_HookBlackHole: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Camera accelerating push towards the singularity
  const cameraZoom = interpolate(frame, [0, 150], [1.0, 1.45], {
    extrapolateRight: 'clamp',
  });
  const cameraRot = interpolate(frame, [0, 150], [0, 6]);

  // Rotations for 3 layered accretion plasma rings
  const rotInner = frame * 1.8;
  const rotMid = -frame * 0.9;
  const rotOuter = frame * 0.4;
  const jetPulse = Math.sin(frame * 0.15) * 0.2 + 0.8;

  // Starfield spiraling inwards
  const stars = useMemo(() => {
    return Array.from({ length: 90 }).map((_, i) => ({
      baseAngle: (i * 137.5 * Math.PI) / 180,
      baseRadius: 100 + ((i * 47) % 650),
      size: 1.5 + ((i * 13) % 3.5),
      speed: 0.8 + ((i * 19) % 1.5),
      color: i % 4 === 0 ? '#38BDF8' : i % 3 === 0 ? '#F59E0B' : '#FFFFFF',
    }));
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        width: 1080,
        height: 1920,
        overflow: 'hidden',
        backgroundColor: '#020408',
      }}
    >
      <CosmicAtmosphere nebulaColor="#F59E0B" intensity={1.1} />
      {/* Deep Volumetric Space Nebula */}
      <div
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1100,
          height: 1100,
          background:
            'radial-gradient(circle at center, rgba(245, 158, 11, 0.22) 0%, rgba(99, 102, 241, 0.15) 35%, rgba(15, 23, 42, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `scale(${cameraZoom}) rotate(${cameraRot}deg)`,
          transformOrigin: '540px 720px',
        }}
      >
        <defs>
          <filter id="bhGlow1" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="diskGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="25%" stopColor="#F59E0B" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#DC2626" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#450A0A" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="jetGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#818CF8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Orbiting Stars pulled into singularity */}
        <g id="stars">
          {stars.map((s, idx) => {
            const currentR = Math.max(
              30,
              (s.baseRadius - (frame * s.speed * 2.5) % s.baseRadius)
            );
            const currentA = s.baseAngle + frame * 0.015 * (450 / currentR);
            const cx = 540 + Math.cos(currentA) * currentR;
            const cy = 720 + Math.sin(currentA) * (currentR * 0.48);
            const op = interpolate(currentR, [30, 120, 500], [0, 0.9, 0.4]);

            return (
              <circle
                key={idx}
                cx={cx}
                cy={cy}
                r={s.size}
                fill={s.color}
                opacity={op}
              />
            );
          })}
        </g>

        {/* Relativistic Vertical Polar Jets */}
        <g opacity={0.75 * jetPulse}>
          <polygon
            points="536,720 500,-100 580,-100 544,720"
            fill="url(#jetGrad1)"
            filter="url(#bhGlow1)"
          />
          <polygon
            points="536,720 500,1600 580,1600 544,720"
            fill="url(#jetGrad1)"
            filter="url(#bhGlow1)"
          />
        </g>

        {/* Main Black Hole Core System */}
        <g transform="translate(540, 720)">
          {/* Gravitational Space Distortion Ring */}
          <ellipse
            cx="0"
            cy="0"
            rx="460"
            ry="220"
            fill="none"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />

          {/* Outer Accretion Disc */}
          <g transform={`rotate(${rotOuter})`}>
            <ellipse
              cx="0"
              cy="0"
              rx="400"
              ry="160"
              fill="none"
              stroke="url(#diskGrad1)"
              strokeWidth="18"
              strokeDasharray="50 30 110 20 180 40"
              filter="url(#bhGlow1)"
              opacity="0.9"
            />
          </g>

          {/* Mid High-Velocity Plasma Stream */}
          <g transform={`rotate(${rotMid})`}>
            <ellipse
              cx="0"
              cy="0"
              rx="320"
              ry="120"
              fill="none"
              stroke="#EA580C"
              strokeWidth="24"
              strokeDasharray="80 40 140 30"
              filter="url(#bhGlow1)"
              opacity="0.85"
            />
          </g>

          {/* Inner Swirling Lensed Plasma Hotspot (Doppler Beaming) */}
          <g transform={`rotate(${rotInner})`}>
            <ellipse
              cx="0"
              cy="0"
              rx="230"
              ry="80"
              fill="none"
              stroke="url(#diskGrad1)"
              strokeWidth="32"
              filter="url(#bhGlow1)"
            />
            {/* Blinding Doppler white hotspot */}
            <ellipse
              cx="-160"
              cy="-20"
              rx="75"
              ry="32"
              fill="#FFFFFF"
              filter="url(#bhGlow1)"
            />
          </g>

          {/* Lensed Back-Disk Arc (Interstellar curved halo) */}
          <ellipse
            cx="0"
            cy="-35"
            rx="185"
            ry="195"
            fill="none"
            stroke="#FEF08A"
            strokeWidth="9"
            filter="url(#bhGlow1)"
          />

          {/* Razor-sharp Photon Sphere */}
          <circle
            cx="0"
            cy="0"
            r="152"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
            filter="url(#bhGlow1)"
          />

          {/* Pitch Black Void: Event Horizon Singularity */}
          <circle cx="0" cy="0" r="144" fill="#000000" />
        </g>
      </svg>
    </div>
  );
};
