import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { CosmicAtmosphere } from '../../components/CosmicAtmosphere';

export const Scene6_ScrollFolding: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Folding progress (from flat universe plane into rolled cylinder)
  const fold = interpolate(frame, [15, 115], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const rollAngle = fold * 360;
  const cylinderRadius = interpolate(fold, [0, 1], [0, 85]);
  const sheetWidth = interpolate(fold, [0, 1], [940, 220]);
  const sheetCurl = interpolate(fold, [0, 0.5, 1], [0, 60, 140]);

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
      <CosmicAtmosphere nebulaColor="#A855F7" intensity={1.2} />
      {/* Background Volumetric Nebula */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 950,
          height: 950,
          background:
            'radial-gradient(circle at center, rgba(168, 85, 247, 0.22) 0%, rgba(6, 182, 212, 0.15) 35%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Main SVG Scene */}
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
          <filter id="scrollGlow6" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="b1" />
            <feMerge>
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="parchmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="cylinderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#D97706" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* 1. Spacetime Coordinate Grid warping into the folding seam */}
        <g transform="translate(540, 680)">
          {/* Longitudinal Coordinate Lines */}
          {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => {
            const x = (i / 4) * (sheetWidth * 0.45);
            return (
              <path
                key={i}
                d={`M ${x},-280 Q ${x * (1 - fold * 0.8)},${sheetCurl} ${x * 0.2},280`}
                fill="none"
                stroke="#00F0FF"
                strokeWidth={i === 0 ? 3 : 1.5}
                opacity={0.65}
              />
            );
          })}

          {/* Latitudinal Curvature Bands */}
          {[-3, -2, -1, 0, 1, 2, 3].map((j) => {
            const y = j * 70;
            return (
              <ellipse
                key={j}
                cx="0"
                cy={y}
                rx={Math.max(30, (sheetWidth * 0.45) * (1 - Math.abs(j) * 0.1))}
                ry={Math.max(12, 45 * (1 - fold * 0.5))}
                fill="none"
                stroke="url(#parchmentGrad)"
                strokeWidth="2"
                opacity={0.7}
              />
            );
          })}

          {/* 2. The Golden Rolled Parchment Cylinder (The Celestial Record) */}
          {fold > 0.15 && (
            <g transform={`rotate(${rollAngle * 0.15})`}>
              {/* Rolled Cylinder Sheet */}
              <rect
                x={-sheetWidth * 0.5}
                y="-180"
                width={sheetWidth}
                height="360"
                rx={24}
                fill="rgba(15, 23, 42, 0.85)"
                stroke="#F59E0B"
                strokeWidth="3.5"
                filter="url(#scrollGlow6)"
              />

              {/* End Caps (Rolled Scroll edges) */}
              <ellipse cx={-sheetWidth * 0.5} cy="0" rx="30" ry="170" fill="url(#cylinderGrad)" />
              <ellipse cx={sheetWidth * 0.5} cy="0" rx="30" ry="170" fill="url(#cylinderGrad)" />
            </g>
          )}

          {/* Central Gravity Well / Singularity Anchor */}
          <circle cx="0" cy="0" r="45" fill="#000000" stroke="#00F0FF" strokeWidth="2" />
        </g>
      </svg>

    </div>
  );
};
