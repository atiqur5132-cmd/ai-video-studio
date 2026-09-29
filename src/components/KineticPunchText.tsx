import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface KineticPunchTextProps {
  words: string[]; // Strictly 1-4 punch words
  accentWordIndex?: number;
  accentColor?: string; // default amber #FACC15, cyan #38BDF8, or red #EF4444
  fontSize?: number; // default 74
  style?: React.CSSProperties;
}

export const KineticPunchText: React.FC<KineticPunchTextProps> = ({
  words,
  accentWordIndex = 0,
  accentColor = '#FACC15',
  fontSize = 74,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle continuous floating or slow pulse to keep it alive
  const microFloat = Math.sin(frame * 0.08) * 3;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '18px',
        padding: '16px 36px',
        position: 'relative',
        zIndex: 50,
        transform: `translateY(${microFloat}px)`,
        ...style,
      }}
    >
      {/* Soft atmospheric gradient pill behind text for broadcast legibility without hard borders */}
      <div
        style={{
          position: 'absolute',
          inset: -10,
          borderRadius: 24,
          background: 'radial-gradient(ellipse at center, rgba(3, 7, 18, 0.88) 0%, rgba(3, 7, 18, 0.45) 70%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {words.slice(0, 4).map((word, idx) => {
        const isAccent = idx === accentWordIndex;

        // Staggered spring entrance for each word (Vox / Magnates Media style)
        const wordDelay = idx * 3.5;
        const wordFrame = Math.max(0, frame - wordDelay);
        
        const enterSpring = spring({
          frame: wordFrame,
          fps,
          config: { damping: 13, mass: 0.6, stiffness: 180 },
        });

        const scale = interpolate(enterSpring, [0, 1], [1.3, 1.0]);
        const opacity = interpolate(enterSpring, [0, 1], [0, 1]);
        const translateY = interpolate(enterSpring, [0, 1], [22, 0]);

        // Highlighter bar animation for accent word
        const highlightDelay = (words.length - 1) * 3.5 + 2;
        const highlightFrame = Math.max(0, frame - highlightDelay);
        const highlightSpring = spring({
          frame: highlightFrame,
          fps,
          config: { damping: 14, mass: 0.5, stiffness: 160 },
        });

        if (isAccent) {
          return (
            <div
              key={idx}
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity,
                transform: `scale(${scale}) translateY(${translateY}px)`,
                padding: '4px 18px',
                borderRadius: 10,
              }}
            >
              {/* Animated Highlighter Box (Vox signature visual) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: accentColor,
                  borderRadius: 8,
                  transformOrigin: 'left center',
                  transform: `scaleX(${highlightSpring})`,
                  boxShadow: `0 0 30px ${accentColor}66, 0 4px 16px rgba(0,0,0,0.6)`,
                  zIndex: 1,
                }}
              />
              <span
                style={{
                  position: 'relative',
                  fontFamily: 'Montserrat, Inter, system-ui, sans-serif',
                  fontWeight: 900,
                  fontSize: `${fontSize}px`,
                  lineHeight: 1.0,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#030712', // Pure dark text against vibrant fluorescent highlight
                  zIndex: 2,
                  textShadow: 'none',
                }}
              >
                {word}
              </span>
            </div>
          );
        }

        return (
          <span
            key={idx}
            style={{
              fontFamily: 'Montserrat, Inter, system-ui, sans-serif',
              fontWeight: 900,
              fontSize: `${fontSize}px`,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textShadow: '0 4px 24px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.8)',
              display: 'inline-block',
              opacity,
              transform: `scale(${scale}) translateY(${translateY}px)`,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
