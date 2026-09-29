import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const HumanValuePillars: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const pillars = [
    {
      word: "ORIGINALITY",
      subtitle: "EMPIRICAL REALITY",
      glyph: "💎",
      color: "#38BDF8",
      accentGlow: "rgba(56, 189, 248, 0.4)",
      height: 420,
    },
    {
      word: "TRUST",
      subtitle: "REPUTATIONAL CAPITAL",
      glyph: "🛡️",
      color: "#10B981",
      accentGlow: "rgba(16, 185, 129, 0.4)",
      height: 480,
    },
    {
      word: "HUMAN EXPERIENCE",
      subtitle: "LIVED CONSCIOUSNESS",
      glyph: "✨",
      color: "#F59E0B",
      accentGlow: "rgba(245, 158, 11, 0.4)",
      height: 440,
    },
  ];

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
      {/* 3D Perspective Grid Floor to fill canvas */}
      <div
        style={{
          position: 'absolute',
          bottom: -160,
          width: 2400,
          height: 750,
          background: `
            linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.08) 50%, rgba(2, 5, 12, 0.95)),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(56, 189, 248, 0.14) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(56, 189, 248, 0.14) 40px)
          `,
          transform: 'perspective(600px) rotateX(68deg)',
          pointerEvents: 'none',
        }}
      />

      {/* Volumetric background glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1300,
          height: 800,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(16, 185, 129, 0.05) 55%, transparent 75%)',
          filter: 'blur(80px)',
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
          THE ENDURING HUMAN MOAT
        </span>
      </div>

      {/* 3D Isometric Monument Stage (Spanning 1320px) */}
      <div
        style={{
          width: 1300,
          height: 620,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(18deg) rotateY(-4deg) translateY(-20px) translateX(-35px)',
          zIndex: 15,
        }}
      >
        {pillars.map((p, idx) => {
          const pillarEntrance = spring({
            frame: frame - idx * 8,
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          const floatOrb = Math.sin((frame + idx * 25) * 0.08) * 12;
          const rotOrb = (frame * 1.5 + idx * 45) % 360;

          return (
            <div
              key={idx}
              style={{
                width: 360,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transformStyle: 'preserve-3d',
                transform: `translateY(${interpolate(pillarEntrance, [0, 1], [200, 0])}px)`,
                opacity: pillarEntrance,
              }}
            >
              {/* Floating 3D Beacon Orb */}
              <div
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: 28,
                  backgroundColor: '#081020',
                  border: `3px solid ${p.color}`,
                  boxShadow: `0 0 50px ${p.accentGlow}, inset 0 0 20px ${p.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 50,
                  transformStyle: 'preserve-3d',
                  transform: `translateY(${floatOrb - 40}px) rotateY(${rotOrb}deg)`,
                  marginBottom: 30,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    border: `1.5px dashed ${p.color}80`,
                    transform: 'rotateX(75deg)',
                  }}
                />
                <span style={{ transform: `rotateY(${-rotOrb}deg)` }}>{p.glyph}</span>
              </div>

              {/* 3D Extruded Monolith / Pillar */}
              <div
                style={{
                  width: 320,
                  height: p.height,
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front Face */}
                <div
                  style={{
                    position: 'absolute',
                    width: 320,
                    height: p.height,
                    backgroundColor: '#0c1424',
                    border: `2px solid ${p.color}80`,
                    borderRadius: '20px 20px 0 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '32px 20px',
                    boxShadow: `inset 0 0 35px ${p.accentGlow}`,
                    transform: 'translateZ(30px)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 900,
                      color: p.color,
                      letterSpacing: 2.5,
                      marginBottom: 12,
                    }}
                  >
                    ● PILLAR 0{idx + 1}
                  </div>

                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      color: '#FFFFFF',
                      textAlign: 'center',
                      letterSpacing: -0.5,
                      lineHeight: 1.15,
                    }}
                  >
                    {p.word}
                  </div>

                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#94A3B8',
                      letterSpacing: 1.5,
                      marginTop: 8,
                      textAlign: 'center',
                    }}
                  >
                    {p.subtitle}
                  </div>

                  {/* Vertical Light Bar */}
                  <div
                    style={{
                      width: 4,
                      height: 120,
                      backgroundColor: p.color,
                      boxShadow: `0 0 20px ${p.color}`,
                      borderRadius: 2,
                      marginTop: 'auto',
                      marginBottom: 20,
                    }}
                  />
                </div>

                {/* Right Side Shading Face */}
                <div
                  style={{
                    position: 'absolute',
                    width: 60,
                    height: p.height,
                    backgroundColor: '#060a14',
                    border: `1px solid ${p.color}30`,
                    right: -30,
                    transform: 'rotateY(90deg)',
                    transformOrigin: 'right',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)',
                  }}
                />

                {/* Top Face */}
                <div
                  style={{
                    position: 'absolute',
                    width: 320,
                    height: 60,
                    backgroundColor: '#1e293b',
                    border: `2px solid ${p.color}`,
                    top: -30,
                    transform: 'rotateX(90deg) translateZ(30px)',
                    boxShadow: `0 0 30px ${p.accentGlow}`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
