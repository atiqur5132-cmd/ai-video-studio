import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { CosmicAtmosphere } from '../../components/CosmicAtmosphere';

export const Scene2_EarthDisruption: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Violent camera shake begins as gravitational capture triggers
  const shakeIntensity = interpolate(frame, [40, 140], [0, 18], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const shakeX = Math.sin(frame * 0.95) * shakeIntensity;
  const shakeY = Math.cos(frame * 1.15) * (shakeIntensity * 0.7);

  // Gravitational capture starts after frame 45
  const pull = interpolate(frame, [40, 145], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const earthX = interpolate(pull, [0, 1], [540, 780]);
  const earthY = interpolate(pull, [0, 1], [740, 520]);
  const earthScale = interpolate(pull, [0, 0.5, 1], [1.1, 0.9, 0.25]);
  const stretchX = interpolate(pull, [0, 0.5, 1], [1, 1.25, 2.5]);
  const stretchY = interpolate(pull, [0, 0.5, 1], [1, 0.9, 0.5]);

  const earthRot = frame * 0.8;

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
      {/* 1. Volumetric Space Nebula with perspective horizon */}
      <CosmicAtmosphere nebulaColor="#0284C7" secondaryColor="#4C1D95" intensity={1.3} />

      {/* Main SVG Scene */}
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `translate(${shakeX}px, ${shakeY}px)`,
        }}
      >
        <defs>
          <filter id="cinematicGlow2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="35" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Realistic 3D Spherical Earth Shading Gradient */}
          <radialGradient id="earthSphereGrad2" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="35%" stopColor="#0284C7" />
            <stop offset="65%" stopColor="#0369A1" />
            <stop offset="85%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          {/* Atmospheric Glow Rim */}
          <radialGradient id="atmosphereHalo2" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="transparent" />
            <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="95%" stopColor="#7DD3FC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E0F2FE" stopOpacity="1" />
          </radialGradient>

          {/* Spaghettification Plasma Ribbon */}
          <linearGradient id="spaghettifyGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#EF4444" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 2. Looming Black Hole Singularity in the upper right */}
        <g transform="translate(860, 420)">
          {/* Gravitational Warping Waves */}
          <circle cx="0" cy="0" r="300" fill="none" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="6" strokeDasharray="25 15" />
          <circle cx="0" cy="0" r="240" fill="none" stroke="#F59E0B" strokeWidth="8" filter="url(#cinematicGlow2)" />
          <circle cx="0" cy="0" r="200" fill="#000000" />
          <circle cx="0" cy="0" r="204" fill="none" stroke="#FFFFFF" strokeWidth="4" filter="url(#cinematicGlow2)" />
        </g>

        {/* 3. Plasma Spaghettification Ribbons (Matter Sucked into Singularity) */}
        {pull > 0.05 && (
          <g filter="url(#cinematicGlow2)">
            <path
              d={`M ${earthX + 100},${earthY - 40} Q ${(earthX + 860) / 2},${(earthY + 420) / 2 - 140} 860,420`}
              fill="none"
              stroke="url(#spaghettifyGrad2)"
              strokeWidth={interpolate(pull, [0.05, 0.7, 1], [6, 44, 12])}
              strokeDasharray="50 25"
              strokeDashoffset={-frame * 24}
              strokeLinecap="round"
            />
            <path
              d={`M ${earthX},${earthY - 90} Q ${(earthX + 860) / 2 - 40},${(earthY + 420) / 2 - 80} 860,420`}
              fill="none"
              stroke="#38BDF8"
              strokeWidth="8"
              strokeDasharray="25 15"
              strokeDashoffset={-frame * 30}
            />
          </g>
        )}

        {/* 4. Massive Photorealistic 3D Planet Earth */}
        <g
          transform={`translate(${earthX}, ${earthY}) scale(${earthScale}) scale(${stretchX}, ${stretchY}) rotate(${earthRot})`}
        >
          {/* Atmospheric Halo */}
          <circle cx="0" cy="0" r="230" fill="url(#atmosphereHalo2)" filter="url(#cinematicGlow2)" />

          {/* Deep Ocean 3D Shaded Sphere */}
          <circle cx="0" cy="0" r="210" fill="url(#earthSphereGrad2)" />

          {/* Continents (High detail vector landmasses) */}
          <g opacity="0.92">
            {/* African & Eurasian Landmass */}
            <path
              d="M -30,-140 Q 40,-170 100,-110 Q 150,-70 120,20 Q 90,120 -10,140 Q -70,80 -60,-30 Z"
              fill="#15803D"
            />
            <path
              d="M 10,-120 Q 70,-140 120,-80 Q 90,-20 30,-50 Z"
              fill="#854D0E"
              opacity="0.8"
            />
            {/* Americas */}
            <path
              d="M -170,-110 Q -120,-130 -80,-70 Q -110,20 -150,90 Q -190,40 -170,-110 Z"
              fill="#166534"
            />
            {/* Asian archipelago */}
            <circle cx="130" cy="-40" r="14" fill="#15803D" />
            <circle cx="150" cy="-20" r="10" fill="#15803D" />
            <circle cx="140" cy="15" r="12" fill="#15803D" />
          </g>

          {/* Multi-layer Swirling Cloud Layers */}
          <g opacity="0.85">
            <path
              d="M -180,-70 Q -70,-120 70,-50 Q 170,-20 150,50"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M -130,70 Q -10,130 110,70"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M -90,-20 Q 0,10 90,-30"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="14"
              strokeLinecap="round"
            />
          </g>

          {/* Fissures & Planetary Rupture Glowing Fiery Red */}
          {pull > 0.2 && (
            <g stroke="#EF4444" strokeWidth="6" fill="none" filter="url(#cinematicGlow2)">
              <line x1="-80" y1="-50" x2="70" y2="90" strokeDasharray="12 6" />
              <line x1="30" y1="-120" x2="-50" y2="70" strokeDasharray="14 7" />
              <line x1="-130" y1="30" x2="120" y2="-10" strokeDasharray="16 8" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
