import React, { useMemo } from 'react';
import { useCurrentFrame } from 'remotion';

interface CosmicAtmosphereProps {
  nebulaColor?: string; // e.g. '#F59E0B' (gold), '#38BDF8' (cyan), '#EF4444' (red)
  secondaryColor?: string; // e.g. '#6366F1' (indigo)
  intensity?: number;
}

export const CosmicAtmosphere: React.FC<CosmicAtmosphereProps> = ({
  nebulaColor = '#F59E0B',
  secondaryColor = '#312E81',
  intensity = 1,
}) => {
  const frame = useCurrentFrame();

  // Natural pseudo-random star distribution (140 stars)
  const stars = useMemo(() => {
    return Array.from({ length: 140 }).map((_, i) => {
      // Natural scatter hash
      const x = Math.abs(Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1080;
      const baseY = Math.abs(Math.cos(i * 93.9898 + 67.345) * 24634.63) % 1920;
      const size = 1.2 + ((i * 11) % 4);
      const speed = 0.2 + ((i * 7) % 0.8);
      const isTwinkle = i % 4 === 0;
      const color = i % 6 === 0 ? '#38BDF8' : i % 5 === 0 ? '#FDE047' : '#FFFFFF';

      return { x, baseY, size, speed, isTwinkle, color };
    });
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background: `radial-gradient(ellipse at 50% 38%, ${nebulaColor}35 0%, ${secondaryColor}40 50%, #020408 85%)`,
      }}
    >
      {/* Subtle Perspective Coordinate Horizon Grid */}
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{ position: 'absolute', top: 0, left: 0, opacity: 0.2 }}
      >
        {/* Horizontal Perspective Rings */}
        {[300, 500, 700, 900, 1100, 1300, 1500].map((y, idx) => (
          <ellipse
            key={idx}
            cx="540"
            cy={y}
            rx={300 + idx * 120}
            ry={40 + idx * 15}
            fill="none"
            stroke="rgba(56, 189, 248, 0.25)"
            strokeWidth="1.2"
            strokeDasharray="6 8"
          />
        ))}

        {/* Vertical Radial Perspective Geodesics */}
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => {
          const topX = 540 + i * 40;
          const botX = 540 + i * 160;
          return (
            <line
              key={i}
              x1={topX}
              y1="200"
              x2={botX}
              y2="1800"
              stroke="rgba(56, 189, 248, 0.2)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Realistic Natural Twinkling Stars */}
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {stars.map((s, idx) => {
          const cy = (s.baseY - frame * s.speed) % 1920;
          const actualY = cy < 0 ? cy + 1920 : cy;
          const twinkle = s.isTwinkle
            ? Math.sin(frame * 0.12 + idx) * 0.45 + 0.55
            : 0.85;

          return (
            <circle
              key={idx}
              cx={s.x}
              cy={actualY}
              r={s.size}
              fill={s.color}
              opacity={twinkle * intensity}
            />
          );
        })}
      </svg>
    </div>
  );
};
