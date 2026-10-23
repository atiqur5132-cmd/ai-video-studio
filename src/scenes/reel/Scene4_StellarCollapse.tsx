import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { CosmicAtmosphere } from '../../components/CosmicAtmosphere';

export const Scene4_StellarCollapse: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sudden core collapse triggers around frame 65
  const collapse = interpolate(frame, [50, 110], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Star core radius & brightness
  const starRadius = interpolate(collapse, [0, 0.2, 0.85, 1], [180, 230, 20, 0]);
  const coreBrightness = interpolate(collapse, [0, 0.2, 0.7, 1], [1, 2.5, 0.2, 0]);

  // Expanding Supernova Shockwave
  const shockR = interpolate(collapse, [0.15, 0.9], [0, 520], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const shockOp = interpolate(collapse, [0.15, 0.35, 0.9], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Emerging Black Hole accretion ring after collapse
  const bhEmergence = interpolate(collapse, [0.75, 1], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const bhRot = frame * 1.5;

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
      <CosmicAtmosphere nebulaColor="#38BDF8" intensity={1.2} />
      {/* Background Volumetric Nebula */}
      <div
        style={{
          position: 'absolute',
          top: '36%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1000,
          height: 1000,
          background:
            collapse < 0.5
              ? 'radial-gradient(circle at center, rgba(56, 189, 248, 0.25) 0%, rgba(99, 102, 241, 0.15) 35%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(245, 158, 11, 0.25) 0%, rgba(220, 38, 38, 0.15) 35%, transparent 70%)',
          filter: 'blur(70px)',
          transition: 'all 0.5s ease',
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
        }}
      >
        <defs>
          <filter id="starGlow4" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="45" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="starGrad4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={coreBrightness} />
            <stop offset="40%" stopColor="#38BDF8" stopOpacity={coreBrightness * 0.9} />
            <stop offset="75%" stopColor="#6366F1" stopOpacity={coreBrightness * 0.5} />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Supernova Blast Wave */}
        {collapse > 0.15 && (
          <g>
            <circle
              cx="540"
              cy="720"
              r={shockR}
              fill="none"
              stroke="#38BDF8"
              strokeWidth="10"
              opacity={shockOp}
              filter="url(#starGlow4)"
            />
            <circle
              cx="540"
              cy="720"
              r={shockR * 0.85}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="6"
              opacity={shockOp * 0.8}
            />
          </g>
        )}

        {/* 2. Collapsing Star Core */}
        {starRadius > 1 && (
          <g transform="translate(540, 720)">
            <circle cx="0" cy="0" r={starRadius * 1.6} fill="url(#starGrad4)" />
            <circle cx="0" cy="0" r={starRadius} fill="#FFFFFF" opacity={coreBrightness} filter="url(#starGlow4)" />
          </g>
        )}

        {/* 3. Emerging Black Hole Event Horizon (After Stellar Death) */}
        {bhEmergence > 0.05 && (
          <g transform={`translate(540, 720)`} opacity={bhEmergence}>
            {/* Swirling Relativistic Accretion Ring */}
            <g transform={`rotate(${bhRot})`}>
              <ellipse
                cx="0"
                cy="0"
                rx="340"
                ry="130"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="20"
                strokeDasharray="40 20 100 30"
                filter="url(#starGlow4)"
              />
            </g>

            {/* Photon Sphere */}
            <circle cx="0" cy="0" r="148" fill="none" stroke="#FFFFFF" strokeWidth="4" filter="url(#starGlow4)" />

            {/* Absolute Void: The Singularity */}
            <circle cx="0" cy="0" r="140" fill="#000000" />
          </g>
        )}
      </svg>

    </div>
  );
};
