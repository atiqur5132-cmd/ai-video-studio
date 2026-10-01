import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

interface SpeedometerGaugeProps {
  value: number; // e.g. 80000 or 18.8 or 98
  maxValue?: number;
  label: string; // e.g. "THINKING TOKENS"
  unit?: string; // e.g. "TOKENS" or "MINUTES" or "%"
  color?: string; // e.g. "#FF6B4A" (Opus) or "#10B981" (Sol)
  size?: number; // default 280
  delay?: number;
  fullCanvas?: boolean;
  width?: number; // custom card width
  height?: number; // custom card height
}

export const SpeedometerGauge: React.FC<SpeedometerGaugeProps> = ({
  value,
  maxValue = 100,
  label,
  unit = '',
  color = '#00F0FF',
  size,
  delay = 0,
  fullCanvas = true,
  width,
  height,
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

  const cardWidth = width || (fullCanvas ? 1600 : 460);
  const cardHeight = height || (fullCanvas ? 760 : 460);
  const actualSize = size || (cardWidth < 600 ? 240 : cardWidth < 900 ? 290 : 380);
  const radius = actualSize / 2 - 32;
  const circumference = 2 * Math.PI * radius;

  if (fullCanvas) {
    return (
      <div
        style={{
          width: cardWidth,
          height: cardHeight,
          backgroundColor: '#02050c',
          borderRadius: 24,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 40px 120px rgba(0, 0, 0, 0.98)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          perspective: 1400,
          transform: 'translateY(-30px)',
        }}
      >
        {/* 3D Perspective Grid Floor */}
        <div
          style={{
            position: 'absolute',
            bottom: -110,
            width: cardWidth * 1.4,
            height: cardHeight * 0.7,
            background: `
              linear-gradient(to bottom, transparent, ${color}15 50%, rgba(2, 5, 12, 0.95)),
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255, 255, 255, 0.06) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255, 255, 255, 0.06) 40px)
            `,
            transform: 'perspective(600px) rotateX(68deg)',
            pointerEvents: 'none',
          }}
        />

        {/* Volumetric Radial Glow */}
        <div
          style={{
            position: 'absolute',
            width: cardWidth * 0.85,
            height: cardHeight * 0.85,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${color}20 0%, transparent 65%)`,
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />

        {/* Sleek Minimal Status Badge */}
        <div
          style={{
            position: 'absolute',
            top: cardHeight < 700 ? 24 : 32,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '6px 18px',
            backgroundColor: `${color}18`,
            border: `1px solid ${color}40`,
            borderRadius: 100,
            backdropFilter: 'blur(10px)',
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
            }}
          />
          <span
            style={{
              fontFamily: 'Montserrat, Inter, sans-serif',
              fontSize: cardWidth < 600 ? 11 : 12,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            {label}
          </span>
        </div>

        {/* Grand Speedometer Dial Center Stage */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            marginTop: cardHeight < 700 ? 10 : 0,
            zIndex: 15,
          }}
        >
          <div
            style={{
              width: actualSize,
              height: actualSize,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width={actualSize}
              height={actualSize}
              style={{
                transform: 'rotate(150deg)',
                overflow: 'visible',
              }}
            >
              {/* Background track */}
              <circle
                cx={actualSize / 2}
                cy={actualSize / 2}
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth={cardWidth < 600 ? "14" : "18"}
                strokeDasharray={`${circumference * 0.67} ${circumference}`}
                strokeLinecap="round"
              />
              {/* Active progress arc */}
              <circle
                cx={actualSize / 2}
                cy={actualSize / 2}
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={cardWidth < 600 ? "14" : "18"}
                strokeDasharray={`${circumference * 0.67 * (value / maxValue) * progressSpring} ${circumference}`}
                strokeLinecap="round"
                style={{
                  filter: `drop-shadow(0 0 24px ${color})`,
                }}
              />
            </svg>

            {/* Center needle hub */}
            <div
              style={{
                position: 'absolute',
                width: actualSize,
                height: actualSize,
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
                  top: cardWidth < 600 ? 25 : 32,
                  width: cardWidth < 600 ? 5 : 6,
                  height: actualSize / 2 - (cardWidth < 600 ? 35 : 42),
                  background: `linear-gradient(to top, #FFFFFF, ${color})`,
                  borderRadius: 3,
                  boxShadow: `0 0 16px ${color}`,
                }}
              />
            </div>

            {/* Center Pivot Core */}
            <div
              style={{
                position: 'absolute',
                width: 18,
                height: 18,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                boxShadow: `0 0 16px ${color}`,
                border: `3px solid #02050c`,
                zIndex: 25,
              }}
            />

            {/* Center value display */}
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: cardWidth < 600 ? 55 : cardWidth < 850 ? 70 : 85,
                zIndex: 30,
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter, monospace, sans-serif',
                  fontWeight: 900,
                  fontSize: cardWidth < 600 ? 46 : cardWidth < 850 ? 58 : 72,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  textShadow: `0 0 30px ${color}`,
                }}
              >
                {formattedValue}
              </span>
              {unit && (
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 800,
                    fontSize: cardWidth < 600 ? 15 : 18,
                    color: color,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginTop: 2,
                  }}
                >
                  {unit}
                </span>
              )}
            </div>
          </div>

          {/* Label Badge */}
          <div
            style={{
              marginTop: -16,
              background: '#0c1626',
              border: `2px solid ${color}`,
              borderRadius: 14,
              padding: cardWidth < 600 ? '6px 18px' : '8px 24px',
              boxShadow: `0 0 25px ${color}40`,
              zIndex: 30,
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 900,
                fontSize: cardWidth < 600 ? 13 : 16,
                color: '#FFFFFF',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Compact Inline Mode
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
          width: actualSize,
          height: actualSize,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width={actualSize}
          height={actualSize}
          style={{
            transform: 'rotate(150deg)',
            overflow: 'visible',
          }}
        >
          <circle
            cx={actualSize / 2}
            cy={actualSize / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="12"
            strokeDasharray={`${circumference * 0.67} ${circumference}`}
            strokeLinecap="round"
          />
          <circle
            cx={actualSize / 2}
            cy={actualSize / 2}
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

        <div
          style={{
            position: 'absolute',
            width: actualSize,
            height: actualSize,
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
              height: actualSize / 2 - 30,
              background: `linear-gradient(to top, #FFFFFF, ${color})`,
              borderRadius: 2,
              boxShadow: `0 0 12px ${color}`,
            }}
          />
        </div>

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
              fontSize: 36,
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
