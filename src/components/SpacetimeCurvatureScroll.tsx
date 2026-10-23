import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const SpacetimeCurvatureScroll: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance
  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  // Folding progression: from flat curvature grid into rolled scroll / folded sheet
  const fold = interpolate(frame, [30, 130], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Roll angle and compression
  const rollAngle = fold * 180;
  const gridWidth = interpolate(fold, [0, 1], [880, 180]);
  const curvatureDepth = interpolate(fold, [0, 0.5, 1], [40, 180, 320]);

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
      <svg width="960" height="700" viewBox="-480 -350 960 700">
        <defs>
          <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.3" />
          </linearGradient>

          <filter id="scrollGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Spacetime Grid Concentric Rings curving inwards */}
        {[-3, -2, -1, 0, 1, 2, 3].map((ringIndex) => {
          const rx = (gridWidth * 0.45) * (1 - Math.abs(ringIndex) * 0.12);
          const ry = (120 + Math.abs(ringIndex) * 25) * (1 - fold * 0.5);
          const cy = ringIndex * (35 * (1 - fold * 0.4)) + (fold * curvatureDepth * 0.3);

          return (
            <ellipse
              key={ringIndex}
              cx="0"
              cy={cy}
              rx={Math.max(20, rx)}
              ry={Math.max(10, ry)}
              fill="none"
              stroke="url(#gridGrad)"
              strokeWidth={ringIndex === 0 ? 3 : 1.5}
              strokeDasharray={fold > 0.3 ? '8 4' : 'none'}
              filter="url(#scrollGlow)"
              opacity={0.7}
            />
          );
        })}

        {/* 2. Longitudinal Curvature Geodesics */}
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((lineIndex) => {
          const xOffset = (lineIndex / 4) * (gridWidth * 0.45);
          const topX = xOffset;
          const topY = -180 * (1 - fold * 0.3);
          const botX = xOffset * (1 - fold * 0.8);
          const botY = 180 + fold * curvatureDepth * 0.4;
          const ctrlX = xOffset * 0.3;
          const ctrlY = 0;

          return (
            <path
              key={lineIndex}
              d={`M ${topX},${topY} Q ${ctrlX},${ctrlY} ${botX},${botY}`}
              fill="none"
              stroke="#00F0FF"
              strokeWidth={lineIndex === 0 ? 3.5 : 1.5}
              opacity={0.65}
            />
          );
        })}

        {/* 3. The Sacred Cosmic Scroll Cylinder (Folding Sheets) */}
        {fold > 0.15 && (
          <g transform={`rotate(${rollAngle * 0.2})`}>
            {/* Cylindrical Scroll Body */}
            <rect
              x={-gridWidth * 0.5}
              y={-140}
              width={gridWidth}
              height={280}
              rx={18}
              fill="rgba(15, 23, 42, 0.75)"
              stroke="#F59E0B"
              strokeWidth="2.5"
              filter="url(#scrollGlow)"
            />
            {/* Scroll End Rolled Edges */}
            <ellipse
              cx={-gridWidth * 0.5}
              cy={0}
              rx={22}
              ry={135}
              fill="#F59E0B"
              opacity={0.35}
            />
            <ellipse
              cx={gridWidth * 0.5}
              cy={0}
              rx={22}
              ry={135}
              fill="#F59E0B"
              opacity={0.35}
            />
          </g>
        )}
      </svg>

      {/* Floating HUD Telemetry Badge */}
      <div
        style={{
          marginTop: -60,
          background: 'rgba(2, 6, 23, 0.95)',
          border: '1.5px solid #00F0FF',
          borderRadius: 999,
          padding: '8px 24px',
          color: '#00F0FF',
          fontFamily: 'Inter, sans-serif',
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: 2,
          boxShadow: '0 0 25px rgba(0, 240, 255, 0.35)',
        }}
      >
        SPACETIME CURVATURE // SINGULARITY FOLDING
      </div>
    </div>
  );
};
