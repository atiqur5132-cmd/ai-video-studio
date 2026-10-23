import React from 'react';
import { useCurrentFrame, spring, useVideoConfig } from 'remotion';

interface QuranAyahCardProps {
  surahName: string;
  surahNumber: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  themeColor?: string; // default gold '#F59E0B' or cyan '#00F0FF'
}

export const QuranAyahCard: React.FC<QuranAyahCardProps> = ({
  surahName,
  surahNumber,
  arabicText,
  transliteration,
  translation,
  themeColor = '#F59E0B',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const opacity = spring({
    frame,
    fps,
    config: { damping: 20 },
  });

  // Ambient pulsing glow
  const glowPulse = Math.sin(frame * 0.08) * 0.2 + 0.8;

  return (
    <div
      style={{
        position: 'absolute',
        top: '28%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        width: 940,
        zIndex: 20,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.92) 0%, rgba(3, 7, 18, 0.96) 100%)',
          backdropFilter: 'blur(25px)',
          border: `1.5px solid ${themeColor}`,
          boxShadow: `0 25px 60px rgba(0, 0, 0, 0.95), 0 0 40px ${themeColor}40`,
          borderRadius: 32,
          padding: '48px 44px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top Decorative Celestial Accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 320,
            height: 3,
            background: `linear-gradient(90deg, transparent, ${themeColor}, transparent)`,
            boxShadow: `0 0 15px ${themeColor}`,
          }}
        />

        {/* Surah Reference Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: `${themeColor}18`,
            border: `1px solid ${themeColor}60`,
            borderRadius: 999,
            padding: '8px 24px',
            marginBottom: 28,
            boxShadow: `0 0 15px ${themeColor}20`,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: themeColor,
              boxShadow: `0 0 8px ${themeColor}`,
            }}
          />
          <span
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            {surahName} • {surahNumber}
          </span>
        </div>

        {/* Sacred Arabic Text */}
        <div
          style={{
            fontFamily: '"Amiri", "Scheherazade New", "Traditional Arabic", "Segoe UI", serif',
            fontSize: arabicText.length > 30 ? 54 : 68,
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.5,
            direction: 'rtl',
            marginBottom: 26,
            textShadow: `0 0 25px ${themeColor}99, 0 4px 15px rgba(0,0,0,0.8)`,
            transform: `scale(${1 + Math.sin(frame * 0.05) * 0.01})`,
          }}
        >
          {arabicText}
        </div>

        {/* Roman Transliteration */}
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 28,
            fontWeight: 700,
            color: themeColor,
            letterSpacing: 0.5,
            marginBottom: 16,
            fontStyle: 'italic',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}
        >
          "{transliteration}"
        </div>

        {/* English / Urdu Translation */}
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 32,
            fontWeight: 600,
            color: '#E2E8F0',
            lineHeight: 1.45,
            maxWidth: 820,
            textShadow: '0 2px 10px rgba(0,0,0,0.9)',
          }}
        >
          {translation}
        </div>

        {/* Corner Ambient Glow Points */}
        <div
          style={{
            position: 'absolute',
            bottom: -50,
            right: -50,
            width: 140,
            height: 140,
            borderRadius: '50%',
            background: themeColor,
            opacity: 0.12 * glowPulse,
            filter: 'blur(35px)',
          }}
        />
      </div>
    </div>
  );
};
