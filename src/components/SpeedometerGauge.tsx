import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

interface SpeedometerGaugeProps {
  value: number; // e.g. 80000 or 18.8 or 98
  maxValue?: number;
  label: string; // e.g. "THINKING TOKENS"
  unit?: string; // e.g. "TOKENS" or "MINUTES" or "%"
  color?: string; // e.g. "#FF6B4A" (Opus) or "#10B981" (Sol)
  size?: number; // default 260
  delay?: number;
}

export const SpeedometerGauge: React.FC<SpeedometerGaugeProps> = ({
  value,
  maxValue = 100,
  label,
  unit = '',
  color = '#00F0FF',
  size = 280,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);
  const progressSpring = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 15, stiffness: 90 },
  });

  // Calculate animated value
  const currentValue = interpolate(progressSpring, [0, 1], [0, value]);
  const formattedValue =
    value > 1000
      ? Math.round(currentValue).toLocaleString()
      : currentValue.toFixed(value % 1 !== 0 ? 1 : 0);

  // Angle from -120deg to +120deg
  const angle = interpolate(progressSpring, [0, 1], [-120, -120 + Math.min(240, (value / maxValue) * 240)]);

  const radius = size / 2 - 25;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * 0.67 * Math.min(1, value / maxValue) * progressSpring);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width={size}
          height={size}
          style={{
            transform: 'rotate(150deg)',
            overflow: 'visible',
          }}
        >
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="12"
            strokeDasharray={`${circumference * 0.67} ${circumference}`}
            strokeLinecap="round"
          />
          {/* Active progress arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeDasharray={`${circumference * 0.67 * (value / maxValue) * progressSpring} ${circumference}`}
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 16px ${color})`,
            }}
          />
        </svg>

        {/* Center needle hub */}
        <div
          style={{
            position: 'absolute',
            width: size,
            height: size,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `rotate(${angle}deg)`,
            transformOrigin: 'center center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 25,
              width: 4,
              height: size / 2 - 30,
              background: `linear-gradient(to top, #FFFFFF, ${color})`,
              borderRadius: 2,
              boxShadow: `0 0 12px ${color}`,
            }}
          />
        </div>

        {/* Center value display */}
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, monospace, sans-serif',
              fontWeight: 900,
              fontSize: size > 260 ? 44 : 36,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              textShadow: `0 0 20px ${color}`,
            }}
          >
            {formattedValue}
          </span>
          {unit && (
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                color: color,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: -2,
              }}
            >
              {unit}
            </span>
          )}
        </div>
      </div>

      {/* Outer label badge */}
      <div
        style={{
          marginTop: -10,
          background: 'rgba(15, 23, 42, 0.8)',
          border: `1px solid ${color}40`,
          borderRadius: 16,
          padding: '4px 16px',
          boxShadow: `0 4px 20px rgba(0,0,0,0.8)`,
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            fontSize: 14,
            color: '#E2E8F0',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
