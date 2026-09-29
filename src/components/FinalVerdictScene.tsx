import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile } from 'remotion';

export const FinalVerdictScene: React.FC<{
  phase?: 1 | 2 | 3; // 1: question & verdict, 2: centered lone video, 3: ultimate conclusion
}> = ({ phase = 2 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const glowPulse = Math.sin(frame * 0.08) * 0.06 + 1;

  return (
    <div
      style={{
        width: 1840,
        height: 1000,
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
        opacity: entrance,
      }}
    >
      {/* 3D Perspective Grid Floor */}
      <div
        style={{
          position: 'absolute',
          bottom: -160,
          width: 2400,
          height: 750,
          background: `
            linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.07) 50%, rgba(2, 5, 12, 0.95)),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(56, 189, 248, 0.14) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(56, 189, 248, 0.14) 40px)
          `,
          transform: 'perspective(600px) rotateX(68deg)',
          pointerEvents: 'none',
        }}
      />

      {/* Volumetric Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: 1400,
          height: 900,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(16, 185, 129, 0.05) 55%, transparent 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      {/* Sleek Minimal Status Badge */}
      <div
        style={{
          position: 'absolute',
          top: 48,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 22px',
          backgroundColor: 'rgba(56, 189, 248, 0.12)',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          borderRadius: 100,
          backdropFilter: 'blur(10px)',
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#38BDF8',
            boxShadow: '0 0 12px #38BDF8',
          }}
        />
        <span
          style={{
            fontFamily: 'Montserrat, Inter, sans-serif',
            fontSize: 13,
            fontWeight: 800,
            color: '#BAE6FD',
            letterSpacing: 2.5,
            textTransform: 'uppercase',
          }}
        >
          FINAL INVESTIGATION VERDICT
        </span>
      </div>

      {/* Phase 1: The Core Question & Direct Answer */}
      {phase === 1 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 10,
            marginTop: -40,
          }}
        >
          {/* Official YouTube Logo with Glow */}
          <div
            style={{
              width: 200,
              height: 140,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 0 35px rgba(255, 0, 0, 0.6))',
              marginBottom: 20,
            }}
          >
            <Img
              src={staticFile('logos/youtube_logo.png')}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <h1
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: -2,
              margin: 0,
              lineHeight: 1.1,
              maxWidth: 1200,
            }}
          >
            DID AI JUST KILL YOUTUBE?
          </h1>

          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#EF4444',
              marginTop: 20,
              letterSpacing: 4,
              textShadow: '0 0 40px rgba(239, 68, 68, 0.8)',
            }}
          >
            NO.
          </div>
        </div>
      )}

      {/* Phase 2: Grand Lone Human Video Dossier */}
      {phase === 2 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
            marginTop: -40,
          }}
        >
          {/* Grand 1100x480px 3D Video Dossier */}
          <div
            style={{
              width: 1120,
              height: 480,
              backgroundColor: '#0a101d',
              borderRadius: 24,
              border: '2px solid rgba(56, 189, 248, 0.6)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9), 0 0 60px rgba(56, 189, 248, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transform: `scale(${glowPulse})`,
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: '#040812',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Play Button Icon */}
              <div
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(56, 189, 248, 0.25)',
                  border: '3px solid #38BDF8',
                  boxShadow: '0 0 35px #38BDF8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: 34,
                }}
              >
                ▶
              </div>

              {/* Verified Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  padding: '8px 18px',
                  backgroundColor: 'rgba(16, 185, 129, 0.25)',
                  border: '1.5px solid #10B981',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 900,
                  color: '#34D399',
                  letterSpacing: 1.5,
                }}
              >
                AUTHENTIC HUMAN CRAFT
              </div>

              {/* Resolution Pill */}
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  padding: '8px 18px',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 800,
                  color: '#38BDF8',
                  letterSpacing: 1.5,
                }}
              >
                ORIGINAL REPORTING
              </div>
            </div>

            {/* Dossier Bottom Bar */}
            <div
              style={{
                padding: '24px 32px',
                backgroundColor: '#090e1a',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: 24, fontWeight: 900, color: '#FFFFFF' }}>
                  Something Real: Why Genuine Human Stories Will Endure
                </div>
                <div style={{ fontSize: 14, color: '#94A3B8', marginTop: 4 }}>
                  Investigative Documentary • Real Perspective
                </div>
              </div>

              <div
                style={{
                  padding: '8px 18px',
                  borderRadius: 8,
                  backgroundColor: '#10B98120',
                  border: '1px solid #10B981',
                  fontSize: 13,
                  fontWeight: 900,
                  color: '#10B981',
                }}
              >
                HIGH TRUST SCORE
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Phase 3: Ultimate Monumental Resolution */}
      {phase === 3 && (
        <div
          style={{
            textAlign: 'center',
            zIndex: 10,
            maxWidth: 1400,
            marginTop: -30,
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: 900,
              color: '#38BDF8',
              letterSpacing: 4,
              marginBottom: 20,
            }}
          >
            ● THE FUTURE OF DIGITAL VIDEO
          </div>

          <h2
            style={{
              fontSize: 54,
              fontWeight: 900,
              color: '#64748B',
              letterSpacing: -1,
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            THE FUTURE OF YOUTUBE IS NOT ABOUT MAKING MORE VIDEOS.
          </h2>

          <h1
            style={{
              fontSize: 78,
              fontWeight: 900,
              color: '#38BDF8',
              letterSpacing: -1.5,
              lineHeight: 1.2,
              marginTop: 20,
              textShadow: '0 0 50px rgba(56, 189, 248, 0.7)',
            }}
          >
            IT IS ABOUT MAKING VIDEOS THAT MATTER.
          </h1>
        </div>
      )}
    </div>
  );
};
