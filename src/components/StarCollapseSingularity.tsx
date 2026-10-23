import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const StarCollapseSingularity: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance
  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  // Collapse phase: frame 40 to 110
  const collapse = interpolate(frame, [35, 95], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Star size: starts large, expands slightly (supernova trigger), then collapses to zero
  const starRadius = interpolate(collapse, [0, 0.25, 0.9, 1], [140, 175, 12, 0]);
  const coreBrightness = interpolate(collapse, [0, 0.2, 0.8, 1], [1, 2.5, 0.1, 0]);
  const shockwaveRadius = interpolate(collapse, [0.2, 0.9], [0, 360], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const shockwaveOpacity = interpolate(collapse, [0.2, 0.4, 0.9], [0, 0.9, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Black hole event horizon emergence after collapse
  const bhEmergence = interpolate(collapse, [0.75, 1], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 760,
        left: 540,
        transform: `translate(-50%, -50%) scale(${entrance})`,
        zIndex: 26,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <svg width="800" height="800" viewBox="-400 -400 800 800">
        <defs>
          {/* Supergiant Star Glow */}
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={coreBrightness} />
            <stop offset="35%" stopColor="#38BDF8" stopOpacity={coreBrightness * 0.9} />
            <stop offset="70%" stopColor="#818CF8" stopOpacity={coreBrightness * 0.5} />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Collapsed Event Horizon Rim */}
          <radialGradient id="newBhGlow" cx="50%" cy="50%" r="50%">
            <stop offset="85%" stopColor="#000000" stopOpacity="1" />
            <stop offset="92%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Supernova Shockwave Ring */}
        {collapse > 0.15 && (
          <circle
            cx="0"
            cy="0"
            r={shockwaveRadius}
            fill="none"
            stroke="#38BDF8"
            strokeWidth="6"
            opacity={shockwaveOpacity}
          />
        )}

        {/* 2. Collapsing Star Core */}
        {starRadius > 0.5 && (
          <g>
            <circle cx="0" cy="0" r={starRadius * 1.5} fill="url(#starGlow)" />
            <circle cx="0" cy="0" r={starRadius} fill="#FFFFFF" opacity={coreBrightness} />
          </g>
        )}

        {/* 3. Emerging Gravitational Singularity */}
        {bhEmergence > 0.05 && (
          <g opacity={bhEmergence}>
            <circle cx="0" cy="0" r={95} fill="url(#newBhGlow)" />
            <circle cx="0" cy="0" r={80} fill="#000000" />
            <circle
              cx="0"
              cy="0"
              r={86}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeDasharray="15 8"
            />
          </g>
        )}
      </svg>

      {/* Dynamic Telemetry HUD */}
      <div
        style={{
          marginTop: -160,
          background: 'rgba(2, 6, 23, 0.92)',
          border: '1.5px solid #F59E0B',
          borderRadius: 999,
          padding: '8px 24px',
          color: '#F59E0B',
          fontFamily: 'Inter, sans-serif',
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: 2,
          boxShadow: '0 0 25px rgba(245, 158, 11, 0.4)',
        }}
      >
        {collapse < 0.6 ? 'STELLAR NUCLEOSYNTHESIS // SHUTDOWN' : 'LIGHT CONFINEMENT // ZERO ESCAPE'}
      </div>
    </div>
  );
};
