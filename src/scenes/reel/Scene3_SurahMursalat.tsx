import React, { useMemo } from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { CosmicAtmosphere } from '../../components/CosmicAtmosphere';

export const Scene3_SurahMursalat: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const rotMandala = frame * 0.3;
  const shimmer = Math.sin(frame * 0.12) * 0.15 + 0.85;

  // Golden particle dust
  const embers = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      x: 100 + ((i * 31) % 880),
      baseY: 200 + ((i * 43) % 1500),
      size: 2 + ((i * 7) % 5),
      speed: 1 + ((i * 3) % 2.5),
    }));
  }, []);

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
      <CosmicAtmosphere nebulaColor="#F59E0B" intensity={1.3} />
      {/* Divine Golden Volumetric Aura */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 950,
          height: 950,
          background:
            'radial-gradient(circle at center, rgba(245, 158, 11, 0.28) 0%, rgba(217, 119, 6, 0.12) 40%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

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
          <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="divineRay" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Volumetric God Rays */}
        <polygon points="540,-50 300,1200 780,1200" fill="url(#divineRay)" opacity={0.6 * shimmer} />
        <polygon points="540,-50 150,1100 450,1100" fill="url(#divineRay)" opacity={0.35 * shimmer} />
        <polygon points="540,-50 630,1100 930,1100" fill="url(#divineRay)" opacity={0.35 * shimmer} />

        {/* 2. Floating Golden Celestial Dust */}
        {embers.map((em, idx) => {
          const cy = (em.baseY - frame * em.speed * 2) % 1920;
          return (
            <circle
              key={idx}
              cx={em.x}
              cy={cy < 0 ? cy + 1920 : cy}
              r={em.size}
              fill="#FDE047"
              filter="url(#goldGlow)"
              opacity={0.7}
            />
          );
        })}

        {/* 3. Sacred 8-Point Geometric Star Mandala in Background */}
        <g transform={`translate(540, 680) rotate(${rotMandala}) scale(1.1)`} opacity="0.45">
          <circle cx="0" cy="0" r="380" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="12 8" />
          <circle cx="0" cy="0" r="340" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
          <rect x="-240" y="-240" width="480" height="480" fill="none" stroke="#F59E0B" strokeWidth="2" />
          <rect
            x="-240"
            y="-240"
            width="480"
            height="480"
            transform="rotate(45)"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
          />
        </g>
      </svg>

      {/* Main Sacred Typography Presentation */}
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
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1.5px solid rgba(245, 158, 11, 0.6)',
            borderRadius: 999,
            padding: '10px 28px',
            marginBottom: 36,
            boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)',
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#F59E0B',
              boxShadow: '0 0 10px #F59E0B',
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
            SURAH AL-MURSAALAT • AYAH 8
          </span>
        </div>

        {/* Majestic Sacred Arabic Calligraphy */}
        <div
          style={{
            fontFamily: '"Amiri", "Scheherazade New", "Traditional Arabic", serif',
            fontSize: 98,
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.4,
            direction: 'rtl',
            textShadow:
              '0 0 50px rgba(245, 158, 11, 1), 0 0 100px rgba(217, 119, 6, 0.8), 0 4px 20px rgba(0,0,0,0.9)',
            marginBottom: 28,
            transform: `scale(${1 + Math.sin(frame * 0.08) * 0.015})`,
          }}
        >
          فَإِذَا النُّجُومُ طُمِسَتْ
        </div>

        {/* Roman Transliteration */}
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 34,
            fontWeight: 800,
            color: '#FDE047',
            letterSpacing: 1,
            fontStyle: 'italic',
            marginBottom: 20,
            textShadow: '0 0 20px rgba(245, 158, 11, 0.8)',
          }}
        >
          "Fa-iza an-Nujoomu Tumisat"
        </div>

        {/* English Translation */}
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 34,
            fontWeight: 600,
            color: '#E2E8F0',
            lineHeight: 1.4,
            maxWidth: 860,
            textShadow: '0 4px 15px rgba(0,0,0,0.9)',
          }}
        >
          "So when the stars are extinguished and their light obliterated."
        </div>
      </div>
    </div>
  );
};
