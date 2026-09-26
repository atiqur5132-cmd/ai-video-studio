import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

interface KineticPunchTextProps {
  words: string[]; // Strictly 1-4 punch words
  accentWordIndex?: number;
  accentColor?: string; // default cyan #00F0FF or amber #F59E0B or coral #FF6B4A
  fontSize?: number; // default 84
  glowColor?: string;
  delay?: number;
}

export const KineticPunchText: React.FC<KineticPunchTextProps> = ({
  words,
  accentWordIndex = 0,
  accentColor = '#00F0FF',
  fontSize = 86,
  glowColor,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);
  const containerScale = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  const glow = glowColor || accentColor;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        transform: `scale(${containerScale})`,
        transformOrigin: 'center center',
        zIndex: 50,
      }}
    >
      {words.slice(0, 4).map((word, idx) => {
        const wordDelay = delay + idx * 3;
        const wordFrame = Math.max(0, frame - wordDelay);
        const wordSpring = spring({
          frame: wordFrame,
          fps,
          config: { damping: 12, stiffness: 160 },
        });

        const isAccent = idx === accentWordIndex;

        return (
          <span
            key={idx}
            style={{
              fontFamily: 'Inter, Montserrat, system-ui, sans-serif',
              fontWeight: 900,
              fontSize: `${fontSize}px`,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: isAccent ? accentColor : '#FFFFFF',
              textShadow: isAccent
                ? `0 0 40px ${glow}, 0 8px 30px rgba(0,0,0,0.95)`
                : '0 8px 30px rgba(0,0,0,0.95)',
              transform: `scale(${wordSpring})`,
              display: 'inline-block',
              filter: `drop-shadow(0 10px 25px rgba(0,0,0,0.9))`,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
