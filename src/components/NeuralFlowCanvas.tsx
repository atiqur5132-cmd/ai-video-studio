import React from 'react';
import { useCurrentFrame } from 'remotion';

interface NeuralFlowCanvasProps {
  color?: string; // default cyan '#00F0FF' or coral '#FF6B4A'
  secondaryColor?: string; // purple/pink
  intensity?: number;
}

export const NeuralFlowCanvas: React.FC<NeuralFlowCanvasProps> = ({
  color = '#00F0FF',
  secondaryColor = '#A855F7',
  intensity = 1,
}) => {
  const frame = useCurrentFrame();

  // Moving offset for dash animation
  const offset = frame * 3;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.7 * intensity,
        }}
      >
        <defs>
          <linearGradient id="neuralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="neuralGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.2" />
          </linearGradient>
          <filter id="neuralGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic Curved Splines */}
        <path
          d="M -100 200 C 500 100, 700 700, 1000 500 C 1300 300, 1500 800, 2020 700"
          fill="none"
          stroke="url(#neuralGrad1)"
          strokeWidth="3"
          strokeDasharray="20 40"
          strokeDashoffset={-offset}
          filter="url(#neuralGlow)"
        />

        <path
          d="M -100 800 C 400 900, 800 300, 1100 600 C 1400 900, 1600 400, 2020 300"
          fill="none"
          stroke="url(#neuralGrad2)"
          strokeWidth="3.5"
          strokeDasharray="30 60"
          strokeDashoffset={offset * 1.3}
          filter="url(#neuralGlow)"
        />

        <path
          d="M 200 -50 C 400 400, 1400 200, 1800 1150"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeOpacity="0.3"
          strokeDasharray="15 30"
          strokeDashoffset={-offset * 0.8}
        />

        {/* Synapse nodes pulsing */}
        {[
          { cx: 500, cy: 300, r: 6 },
          { cx: 780, cy: 620, r: 8 },
          { cx: 1000, cy: 500, r: 10 },
          { cx: 1300, cy: 420, r: 7 },
          { cx: 1540, cy: 750, r: 9 },
        ].map((node, i) => {
          const pulse = Math.sin((frame + i * 20) / 12) * 3;
          return (
            <g key={i}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r + pulse}
                fill={color}
                filter="url(#neuralGlow)"
                opacity={0.8}
              />
              <circle
                cx={node.cx}
                cy={node.cy}
                r={(node.r + pulse) * 2.2}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                opacity={0.3}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
