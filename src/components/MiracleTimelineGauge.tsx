import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const MiracleTimelineGauge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Gauge needle & arc progress
  const progress = interpolate(frame, [10, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const yearsCounter = Math.floor(progress * 1400);

  return (
    <div
      style={{
        position: 'absolute',
        top: '32%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        width: 920,
        zIndex: 28,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.94) 0%, rgba(3, 7, 18, 0.98) 100%)',
          backdropFilter: 'blur(25px)',
          border: '1.5px solid #F59E0B',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 50px rgba(245, 158, 11, 0.35)',
          borderRadius: 32,
          padding: '44px 36px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Top Header Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.5)',
            borderRadius: 999,
            padding: '8px 24px',
            marginBottom: 24,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#F59E0B',
              boxShadow: '0 0 8px #F59E0B',
            }}
          />
          <span
            style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            SCIENTIFIC REVELATION PRECEDENCE
          </span>
        </div>

        {/* Big Animated Counter */}
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 92,
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1,
            textShadow: '0 0 40px rgba(245, 158, 11, 0.7), 0 4px 20px rgba(0,0,0,0.8)',
            marginBottom: 8,
          }}
        >
          {yearsCounter}+ YEARS
        </div>

        <div
          style={{
            color: '#F59E0B',
            fontFamily: 'Inter, sans-serif',
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          AHEAD OF MODERN ASTROPHYSICS
        </div>

        {/* Comparison Dual Cards */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: 16,
          }}
        >
          {/* Card 1: Modern Science */}
          <div
            style={{
              flex: 1,
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: 20,
              padding: '20px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ color: '#94A3B8', fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
              MODERN SCIENCE
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 26, fontWeight: 800 }}>
              1915 - 2019 AD
            </div>
            <div style={{ color: '#64748B', fontSize: 15, marginTop: 4 }}>
              General Relativity & EHT Photo
            </div>
          </div>

          {/* Card 2: The Holy Quran */}
          <div
            style={{
              flex: 1,
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1.5px solid #F59E0B',
              borderRadius: 20,
              padding: '20px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)',
            }}
          >
            <div style={{ color: '#F59E0B', fontSize: 16, fontWeight: 800, marginBottom: 6 }}>
              THE HOLY QURAN
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 26, fontWeight: 900 }}>
              610 AD (1400 YRS AGO)
            </div>
            <div style={{ color: '#FCD34D', fontSize: 15, marginTop: 4 }}>
              Divine Cosmic Revelation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
