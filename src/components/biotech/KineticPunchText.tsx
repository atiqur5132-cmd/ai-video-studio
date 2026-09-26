import React from 'react';
import { useCurrentFrame, spring, interpolate, useVideoConfig } from 'remotion';

export const KineticPunchText: React.FC<{
  kicker?: string;
  hero: string; // strictly 1 to 4 words!
  accentColor?: string;
  top?: number | string;
  bottom?: number | string;
  startFrame?: number;
  maxWidth?: number | string;
}> = ({
  kicker,
  hero,
  accentColor = '#10B981',
  top,
  bottom = 100,
  startFrame,
  maxWidth = 1350,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Calculate frame relative to scene entrance
  const relFrame = startFrame !== undefined ? Math.max(0, frame - startFrame) : frame;

  // Split hero into discrete punch words
  const words = hero.trim().split(/\s+/);
  const charCount = hero.length;

  // Responsive font size to guarantee zero overflow
  let fontSize = 82;
  if (charCount > 21) {
    fontSize = 64;
  } else if (words.length >= 3 || charCount > 16) {
    fontSize = 72;
  }

  // Kicker entrance animations
  const kickerOpacity = interpolate(relFrame, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const kickerTracking = interpolate(relFrame, [0, 20], [8, 4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const kickerY = interpolate(relFrame, [0, 12], [-14, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Global continuous subtle drift to keep scene alive
  const drift = interpolate(relFrame, [20, 240], [1.0, 1.03], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        ...(top !== undefined ? { top } : { bottom }),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transform: `scale(${drift})`,
        pointerEvents: 'none',
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth,
          padding: '0 30px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {kicker && (
          <div
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: accentColor,
              letterSpacing: `${kickerTracking}px`,
              textTransform: 'uppercase',
              marginBottom: 10,
              opacity: kickerOpacity,
              transform: `translateY(${kickerY}px)`,
              textShadow: `0 0 25px ${accentColor}aa`,
            }}
          >
            {kicker}
          </div>
        )}

        {/* Word-by-word Staggered Spring Reveal */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
          }}
        >
          {words.map((word, idx) => {
            const wordDelay = idx * 4;
            const wordSpring = spring({
              frame: Math.max(0, relFrame - wordDelay),
              fps,
              config: { stiffness: 220, damping: 14, mass: 0.8 },
            });
            const wordOpacity = interpolate(relFrame - wordDelay, [0, 4], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const wordY = interpolate(relFrame - wordDelay, [0, 8], [24, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });

            // Accent highlighting for last word if desired
            const isLast = idx === words.length - 1 && words.length > 2;

            return (
              <span
                key={idx}
                style={{
                  display: 'inline-block',
                  fontSize,
                  fontWeight: 950,
                  color: isLast ? '#F8FAFC' : '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '-1.5px',
                  lineHeight: 1.05,
                  transform: `scale(${wordSpring}) translateY(${wordY}px)`,
                  opacity: wordOpacity,
                  textShadow: `0 10px 40px rgba(0, 0, 0, 0.95), 0 0 35px ${accentColor}55`,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
