import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { CosmicAtmosphere } from '../../components/CosmicAtmosphere';

export const Scene5_SurahAnbiya: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const rotRings = frame * 0.4;
  const pulse = Math.sin(frame * 0.1) * 0.15 + 0.85;

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
      <CosmicAtmosphere nebulaColor="#06B6D4" intensity={1.3} />
      {/* Volumetric Cyan/Emerald Nebula Aura */}
      <div
        style={{
          position: 'absolute',
          top: '36%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 950,
          height: 950,
          background:
            'radial-gradient(circle at center, rgba(6, 182, 212, 0.28) 0%, rgba(59, 130, 246, 0.12) 40%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Spacetime Curvature Ripple Rings */}
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
          <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="35" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric Spacetime Waves */}
        <g transform={`translate(540, 680) rotate(${rotRings})`} opacity="0.45">
          <ellipse cx="0" cy="0" rx="420" ry="240" fill="none" stroke="#00F0FF" strokeWidth="2" strokeDasharray="16 10" />
          <ellipse cx="0" cy="0" rx="340" ry="190" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
          <ellipse cx="0" cy="0" rx="260" ry="140" fill="none" stroke="#818CF8" strokeWidth="2" strokeDasharray="10 8" />
        </g>
      </svg>

      {/* Main Sacred Typography */}
      <div
        style={{
          position: 'absolute',
          top: 660,
          left: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          width: 960,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        {/* Surah Citation Header */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1.5px solid rgba(6, 182, 212, 0.6)',
            borderRadius: 999,
            padding: '10px 28px',
            marginBottom: 36,
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#00F0FF',
              boxShadow: '0 0 10px #00F0FF',
            }}
          />
          <span
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            SURAH AL-ANBIYA • AYAH 104
          </span>
        </div>

        {/* Sacred Arabic Calligraphy */}
        <div
          style={{
            fontFamily: '"Amiri", "Scheherazade New", "Traditional Arabic", serif',
            fontSize: 78,
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.45,
            direction: 'rtl',
            textShadow:
              '0 0 50px rgba(6, 182, 212, 1), 0 0 100px rgba(14, 165, 233, 0.8), 0 4px 20px rgba(0,0,0,0.9)',
            marginBottom: 28,
            transform: `scale(${1 + Math.sin(frame * 0.08) * 0.015})`,
          }}
        >
          يَوْمَ نَطْوِي السَّمَاءَ كَطَيِّ السِّجِلِّ لِلْكُتُبِ
        </div>

        {/* Roman Transliteration */}
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 32,
            fontWeight: 800,
            color: '#38BDF8',
            letterSpacing: 1,
            fontStyle: 'italic',
            marginBottom: 20,
            textShadow: '0 0 20px rgba(6, 182, 212, 0.8)',
          }}
        >
          "Yawma Natwis-Samaa'a Ka-Tayyis-Sijilli lil-Kutub"
        </div>

        {/* English Translation */}
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 34,
            fontWeight: 600,
            color: '#E2E8F0',
            lineHeight: 1.4,
            maxWidth: 880,
            textShadow: '0 4px 15px rgba(0,0,0,0.9)',
          }}
        >
          "The Day when We will fold the heaven like the folding of a sheet for records."
        </div>
      </div>
    </div>
  );
};
