import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Isometric3DBalanceScale: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  // Dynamic mechanical tilt downwards on left (slop is heavy)
  const tiltDeg = interpolate(frame, [0, 80], [0, 14], {
    extrapolateRight: 'clamp',
  });

  const floatGem = Math.sin(frame * 0.08) * 10;
  const gemRot = (frame * 1.8) % 360;

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
            linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.07) 50%, rgba(2, 5, 12, 0.95)),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(239, 68, 68, 0.14) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(239, 68, 68, 0.14) 40px)
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
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.14) 0%, rgba(56, 189, 248, 0.06) 55%, transparent 75%)',
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
          backgroundColor: 'rgba(239, 68, 68, 0.12)',
          border: '1px solid rgba(239, 68, 68, 0.35)',
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
            backgroundColor: '#EF4444',
            boxShadow: '0 0 12px #EF4444',
          }}
        />
        <span
          style={{
            fontFamily: 'Montserrat, Inter, sans-serif',
            fontSize: 13,
            fontWeight: 800,
            color: '#FCA5A5',
            letterSpacing: 2.5,
            textTransform: 'uppercase',
          }}
        >
          VALUE EQUILIBRIUM • SLOP VS CRAFT
        </span>
      </div>

      {/* Massive 3D Mechanical Balance Scale Stage */}
      <div
        style={{
          width: 1300,
          height: 580,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(14deg) translateY(-85px)',
          zIndex: 15,
        }}
      >
        {/* Massive Central Fulcrum Triangle */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            width: 0,
            height: 0,
            borderLeft: '110px solid transparent',
            borderRight: '110px solid transparent',
            borderBottom: '240px solid #1a2333',
            filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))',
            zIndex: 10,
          }}
        />

        {/* Central Pivot Hub */}
        <div
          style={{
            position: 'absolute',
            top: 290,
            width: 56,
            height: 56,
            borderRadius: '50%',
            backgroundColor: '#0c1626',
            border: '4px solid #38BDF8',
            boxShadow: '0 0 25px #38BDF8',
            zIndex: 30,
          }}
        />

        {/* Main Mechanical Balance Beam (Rotates via tiltDeg) */}
        <div
          style={{
            position: 'absolute',
            top: 310,
            width: 1200,
            height: 24,
            backgroundColor: '#1e293b',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 12,
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8)',
            transformOrigin: 'center center',
            transform: `rotate(${-tiltDeg}deg)`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            zIndex: 20,
          }}
        >
          {/* Laser Guide along beam */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: 4,
              backgroundColor: '#38BDF8',
              boxShadow: '0 0 16px #38BDF8',
            }}
          />

          {/* Left Pan (Heavy Generic Slop) */}
          <div
            style={{
              position: 'absolute',
              left: -40,
              top: 10,
              width: 380,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: `rotate(${tiltDeg}deg)`, // Keep pan level
            }}
          >
            {/* Suspension Cable */}
            <div style={{ width: 2, height: 70, backgroundColor: 'rgba(255,255,255,0.3)' }} />

            {/* Stacked 3D Slop Cubes */}
            <div
              style={{
                width: 320,
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 8,
                marginBottom: 8,
              }}
            >
              {Array.from({ length: 12 }).map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    height: 38,
                    borderRadius: 8,
                    backgroundColor: '#1c0808',
                    border: '1.5px solid #EF4444',
                    boxShadow: '0 0 12px rgba(239, 68, 68, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                    fontWeight: 900,
                    color: '#EF4444',
                    letterSpacing: 1,
                  }}
                >
                  SLOP
                </div>
              ))}
            </div>

            {/* Scale Tray */}
            <div
              style={{
                width: 360,
                height: 20,
                borderRadius: 10,
                backgroundColor: '#0c1626',
                border: '2px solid #EF4444',
                boxShadow: '0 0 25px rgba(239, 68, 68, 0.6)',
              }}
            />

            <div
              style={{
                marginTop: 12,
                padding: '4px 14px',
                borderRadius: 6,
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid #EF4444',
                fontSize: 12,
                fontWeight: 900,
                color: '#F87171',
                letterSpacing: 2,
              }}
            >
              +1,000% VOLUME // ZERO MOAT
            </div>
          </div>

          {/* Right Pan (Rare Uniqueness) */}
          <div
            style={{
              position: 'absolute',
              right: -40,
              top: 10,
              width: 380,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: `rotate(${tiltDeg}deg)`, // Keep pan level
            }}
          >
            {/* Suspension Cable */}
            <div style={{ width: 2, height: 70, backgroundColor: 'rgba(255,255,255,0.3)' }} />

            {/* Glowing 3D Crystal Gemstone */}
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: 28,
                backgroundColor: '#081c2e',
                border: '3px solid #38BDF8',
                boxShadow: '0 0 45px rgba(56, 189, 248, 0.8), inset 0 0 20px #38BDF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 50,
                transform: `translateY(${floatGem - 10}px) rotateY(${gemRot}deg)`,
                marginBottom: 12,
              }}
            >
              💎
            </div>

            {/* Scale Tray */}
            <div
              style={{
                width: 360,
                height: 20,
                borderRadius: 10,
                backgroundColor: '#0c1626',
                border: '2px solid #38BDF8',
                boxShadow: '0 0 25px rgba(56, 189, 248, 0.6)',
              }}
            />

            <div
              style={{
                marginTop: 12,
                padding: '4px 14px',
                borderRadius: 6,
                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                border: '1px solid #38BDF8',
                fontSize: 12,
                fontWeight: 900,
                color: '#38BDF8',
                letterSpacing: 2,
              }}
            >
              RARE UNIQUENESS // HIGH VALUE
            </div>
          </div>
        </div>
      </div>

      {/* Scale Stage ends cleanly */}
    </div>
  );
};
