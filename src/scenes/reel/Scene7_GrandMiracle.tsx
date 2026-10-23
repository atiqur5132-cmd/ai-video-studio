import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { CosmicAtmosphere } from '../../components/CosmicAtmosphere';

export const Scene7_GrandMiracle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Animated counter up to 1400
  const progress = interpolate(frame, [10, 75], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const years = Math.floor(progress * 1400);

  // Speedometer needle angle (-120 to +120 deg)
  const needleAngle = interpolate(progress, [0, 1], [-120, 120]);

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
      {/* 1. Volumetric Golden Ambient Space */}
      <CosmicAtmosphere nebulaColor="#F59E0B" intensity={1.3} />

      {/* Main Center Telemetry System */}
      <div
        style={{
          position: 'absolute',
          top: 640,
          left: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          width: 980,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        {/* Speedometer Gauge Visualizer */}
        <div style={{ position: 'relative', width: 680, height: 420 }}>
          <svg width="680" height="420" viewBox="0 0 680 420">
            <defs>
              <filter id="gaugeGlow7" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="b1" />
                <feMerge>
                  <feMergeNode in="b1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="gaugeArc7" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="60%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>

            {/* Gauge Background Ring */}
            <g transform="translate(340, 360)">
              {/* Tick Marks */}
              {Array.from({ length: 25 }).map((_, idx) => {
                const angle = -120 + idx * 10;
                const rad = (angle * Math.PI) / 180;
                const x1 = Math.cos(rad) * 260;
                const y1 = Math.sin(rad) * 260;
                const x2 = Math.cos(rad) * 295;
                const y2 = Math.sin(rad) * 295;

                return (
                  <line
                    key={idx}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={idx % 4 === 0 ? '#F59E0B' : 'rgba(148, 163, 184, 0.5)'}
                    strokeWidth={idx % 4 === 0 ? 4 : 2}
                  />
                );
              })}

              {/* Glowing Progress Arc */}
              <circle
                cx="0"
                cy="0"
                r="245"
                fill="none"
                stroke="url(#gaugeArc7)"
                strokeWidth="18"
                strokeDasharray="1100"
                strokeDashoffset={1100 - progress * 720}
                strokeLinecap="round"
                filter="url(#gaugeGlow7)"
              />

              {/* Dynamic Needle */}
              <g transform={`rotate(${needleAngle})`}>
                <polygon points="-10,0 0,-240 10,0" fill="#F59E0B" filter="url(#gaugeGlow7)" />
                <circle cx="0" cy="0" r="22" fill="#FFFFFF" />
                <circle cx="0" cy="0" r="12" fill="#020408" />
              </g>
            </g>
          </svg>
        </div>

        {/* Big Impact Counter */}
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 125,
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1,
            textShadow:
              '0 0 60px rgba(245, 158, 11, 0.95), 0 0 120px rgba(245, 158, 11, 0.5), 0 8px 30px rgba(0,0,0,0.95)',
            marginTop: -60,
            marginBottom: 6,
          }}
        >
          {years}+ YEARS
        </div>

        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 30,
            fontWeight: 800,
            color: '#F59E0B',
            letterSpacing: 4,
            textTransform: 'uppercase',
            textShadow: '0 0 25px rgba(245, 158, 11, 0.8)',
            marginBottom: 48,
          }}
        >
          AHEAD OF MODERN ASTROPHYSICS
        </div>

        {/* Dual Holographic Comparison Cards */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          {/* Modern Science */}
          <div
            style={{
              flex: 1,
              background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1.5px solid rgba(56, 189, 248, 0.5)',
              borderRadius: 24,
              padding: '28px 24px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 30px rgba(56, 189, 248, 0.15)',
              textAlign: 'center',
            }}
          >
            <div style={{ color: '#94A3B8', fontSize: 18, fontWeight: 800, letterSpacing: 2, marginBottom: 8 }}>
              MODERN SCIENCE
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 900 }}>
              1915 - 2019 AD
            </div>
            <div style={{ color: '#38BDF8', fontSize: 17, fontWeight: 600, marginTop: 6 }}>
              Einstein & EHT Telescope
            </div>
          </div>

          {/* The Holy Quran */}
          <div
            style={{
              flex: 1,
              background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.15) 0%, rgba(30, 20, 5, 0.8) 100%)',
              border: '2px solid #F59E0B',
              borderRadius: 24,
              padding: '28px 24px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.8), 0 0 40px rgba(245, 158, 11, 0.35)',
              textAlign: 'center',
            }}
          >
            <div style={{ color: '#F59E0B', fontSize: 18, fontWeight: 900, letterSpacing: 2, marginBottom: 8 }}>
              THE NOBLE QURAN
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 900 }}>
              610 AD (1400 YRS)
            </div>
            <div style={{ color: '#FEF08A', fontSize: 17, fontWeight: 700, marginTop: 6 }}>
              Divine Cosmic Revelation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
