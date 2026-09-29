import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Isometric3DShieldVault: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const wheelRot = interpolate(frame, [0, 90], [0, 360], {
    extrapolateRight: 'clamp',
  });

  const lockColor = frame > 60 ? '#10B981' : '#38BDF8';

  const emblems = [
    { title: "SYNTHETIC DISCLOSURE", date: "MARCH 2024", icon: "🏷️", color: "#38BDF8", sub: "PLAYER & DESC LABELS" },
    { title: "INAUTHENTIC REJECTED", date: "JULY 2025", icon: "🚫", color: "#EF4444", sub: "YPP BULK DEMONETIZATION" },
    { title: "130,000 PURGED", date: "MID-2026", icon: "⚡", color: "#F59E0B", sub: "MASSIVE BOT CLEANUP" },
    { title: "CONTENT ID SHIELD", date: "ACTIVE", icon: "🛡️", color: "#10B981", sub: "VOICE & FACE PROTECTION" },
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
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(16, 185, 129, 0.06) 55%, transparent 75%)',
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
          PLATFORM IMMUNE SYSTEM • POLICY ENFORCEMENT
        </span>
      </div>

      {/* Massive 3D Titanium Vault Door (Spanning 1320px) */}
      <div
        style={{
          width: 1320,
          height: 560,
          backgroundColor: '#0a101d',
          borderRadius: 28,
          border: '3px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95), inset 0 0 60px rgba(56, 189, 248, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(14deg) translateY(-20px)',
          zIndex: 15,
        }}
      >
        {/* Left Pair of Emblems */}
        <div style={{ width: 440, display: 'flex', flexDirection: 'column', gap: 24, zIndex: 10 }}>
          {emblems.slice(0, 2).map((emb, idx) => (
            <div
              key={idx}
              style={{
                height: 190,
                borderRadius: 18,
                backgroundColor: '#0c1626',
                border: `2px solid ${emb.color}`,
                boxShadow: `0 15px 40px rgba(0, 0, 0, 0.8), 0 0 25px ${emb.color}30`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 22,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 32 }}>{emb.icon}</span>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: 6,
                    backgroundColor: `${emb.color}20`,
                    border: `1px solid ${emb.color}50`,
                    fontSize: 11,
                    fontWeight: 900,
                    color: emb.color,
                    letterSpacing: 1.5,
                  }}
                >
                  {emb.date}
                </span>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', letterSpacing: 0.5 }}>
                  {emb.title}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#94A3B8', letterSpacing: 1.5, marginTop: 4 }}>
                  {emb.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Massive Rotating Mechanical Lock Wheel (300px) */}
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            backgroundColor: '#08101e',
            border: `4px solid ${lockColor}`,
            boxShadow: `0 0 50px ${lockColor}60, inset 0 0 40px ${lockColor}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transform: `rotate(${wheelRot}deg)`,
            transformStyle: 'preserve-3d',
            zIndex: 20,
          }}
        >
          {/* Wheel Crossbars */}
          <div style={{ position: 'absolute', width: '100%', height: 4, backgroundColor: lockColor }} />
          <div style={{ position: 'absolute', width: 4, height: '100%', backgroundColor: lockColor }} />
          <div style={{ position: 'absolute', width: '100%', height: 4, backgroundColor: lockColor, transform: 'rotate(45deg)' }} />
          <div style={{ position: 'absolute', width: '100%', height: 4, backgroundColor: lockColor, transform: 'rotate(-45deg)' }} />

          {/* Central Hub Lock Icon */}
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: '50%',
              backgroundColor: '#02050c',
              border: `3px solid ${lockColor}`,
              boxShadow: `0 0 25px ${lockColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
              transform: `rotate(${-wheelRot}deg)`,
              zIndex: 30,
            }}
          >
            🔒
          </div>
        </div>

        {/* Right Pair of Emblems */}
        <div style={{ width: 440, display: 'flex', flexDirection: 'column', gap: 24, zIndex: 10 }}>
          {emblems.slice(2, 4).map((emb, idx) => (
            <div
              key={idx}
              style={{
                height: 190,
                borderRadius: 18,
                backgroundColor: '#0c1626',
                border: `2px solid ${emb.color}`,
                boxShadow: `0 15px 40px rgba(0, 0, 0, 0.8), 0 0 25px ${emb.color}30`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 22,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 32 }}>{emb.icon}</span>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: 6,
                    backgroundColor: `${emb.color}20`,
                    border: `1px solid ${emb.color}50`,
                    fontSize: 11,
                    fontWeight: 900,
                    color: emb.color,
                    letterSpacing: 1.5,
                  }}
                >
                  {emb.date}
                </span>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', letterSpacing: 0.5 }}>
                  {emb.title}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#94A3B8', letterSpacing: 1.5, marginTop: 4 }}>
                  {emb.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* End Vault Stage */}
    </div>
  );
};
