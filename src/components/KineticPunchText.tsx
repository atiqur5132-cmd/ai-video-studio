import React from 'react';

interface KineticPunchTextProps {
  words: string[]; // Strictly 1-4 punch words
  accentWordIndex?: number;
  accentColor?: string; // default cyan #00F0FF or amber #F59E0B or coral #FF6B4A
  fontSize?: number; // default 84
}

export const KineticPunchText: React.FC<KineticPunchTextProps> = ({
  words,
  accentWordIndex = 0,
  accentColor = '#00F0FF',
  fontSize = 76,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '12px 28px',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(8px)',
        zIndex: 50,
      }}
    >
      {words.slice(0, 4).map((word, idx) => {
        const isAccent = idx === accentWordIndex;

        return (
          <span
            key={idx}
            style={{
              fontFamily: 'Inter, Montserrat, system-ui, sans-serif',
              fontWeight: 900,
              fontSize: `${fontSize}px`,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: isAccent ? accentColor : '#FFFFFF',
              textShadow: '0 4px 20px rgba(0,0,0,0.95)',
              display: 'inline-block',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
