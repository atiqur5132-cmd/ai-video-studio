import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const EarthBlackHoleAbsorption: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Tidal disruption / pull trajectory towards center
  const pullProgress = interpolate(frame, [0, 110], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const earthX = interpolate(pullProgress, [0, 1], [300, 0]);
  const earthY = interpolate(pullProgress, [0, 1], [-260, 0]);
  const earthScale = interpolate(pullProgress, [0, 0.7, 1], [1, 0.6, 0.05]) * entrance;
  const distortion = interpolate(pullProgress, [0, 0.7, 1], [1, 1.8, 3.5]);
  const opacity = interpolate(pullProgress, [0.8, 1], [1, 0]);

  // Earth rotation
  const rot = frame * 1.5;

  return (
    <div
      style={{
        position: 'absolute',
        top: 760,
        left: 540,
        transform: `translate(${earthX}px, ${earthY}px) scale(${earthScale})`,
        opacity,
        zIndex: 25,
        pointerEvents: 'none',
      }}
    >
      {/* Gravitational Distortion Stream Lines */}
      <svg
        width="400"
        height="400"
        viewBox="-200 -200 400 400"
        style={{
          position: 'absolute',
          top: -200,
          left: -200,
          transform: `scale(${distortion}, 1)`,
        }}
      >
        <defs>
          <radialGradient id="earthGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#0284C7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Gravitational Tidal Tails */}
        {pullProgress > 0.2 && (
          <path
            d={`M 0,0 Q ${-earthX * 0.5},${-earthY * 0.5} ${-earthX},${-earthY}`}
            stroke="#38BDF8"
            strokeWidth="4"
            fill="none"
            opacity={0.7}
            strokeDasharray="10 5"
          />
        )}

        {/* Glowing Atmosphere */}
        <circle cx="0" cy="0" r="70" fill="url(#earthGlow)" />

        {/* Earth Globe Circle */}
        <circle
          cx="0"
          cy="0"
          r="55"
          fill="#0F172A"
          stroke="#38BDF8"
          strokeWidth="3"
        />

        {/* Wireframe Longitudes and Latitudes */}
        <g transform={`rotate(${rot})`}>
          <ellipse cx="0" cy="0" rx="55" ry="25" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />
          <ellipse cx="0" cy="0" rx="25" ry="55" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" />
          <line x1="-55" y1="0" x2="55" y2="0" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.5" />
          <line x1="0" y1="-55" x2="0" y2="55" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Floating HUD Pill */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(2, 6, 23, 0.9)',
          border: '1px solid #38BDF8',
          borderRadius: 999,
          padding: '4px 14px',
          color: '#38BDF8',
          fontSize: 16,
          fontWeight: 800,
          whiteSpace: 'nowrap',
          letterSpacing: 1.5,
          boxShadow: '0 0 15px rgba(56, 189, 248, 0.4)',
        }}
      >
        EARTH // GRAVITATIONAL CAPTURE
      </div>
    </div>
  );
};
