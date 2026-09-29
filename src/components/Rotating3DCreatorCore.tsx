import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Rotating3DCreatorCore: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const rotY = frame * 1.2;
  const rotX = Math.sin(frame * 0.035) * 18 + 18;

  const capabilities = [
    { title: "RESEARCH", sub: "DEEP SYNTHESIS", icon: "🔍", color: "#38BDF8", angle: 0 },
    { title: "DUBBING", sub: "30+ LANGUAGES", icon: "🌐", color: "#10B981", angle: 72 },
    { title: "SMART CUT", sub: "EFFORT REDUCTION", icon: "✂️", color: "#F59E0B", angle: 144 },
    { title: "VFX / 3D", sub: "STUDIO GRADE", icon: "🎨", color: "#EC4899", angle: 216 },
    { title: "CAPTIONS", sub: "GLOBAL SYNC", icon: "📝", color: "#818CF8", angle: 288 },
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
            linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.07) 50%, rgba(2, 5, 12, 0.95)),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(16, 185, 129, 0.14) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(16, 185, 129, 0.14) 40px)
          `,
          transform: 'perspective(600px) rotateX(68deg)',
          pointerEvents: 'none',
        }}
      />

      {/* Volumetric Radial Emerald Aura */}
      <div
        style={{
          position: 'absolute',
          width: 1400,
          height: 900,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(56, 189, 248, 0.06) 55%, transparent 75%)',
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
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.35)',
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
            backgroundColor: '#10B981',
            boxShadow: '0 0 12px #10B981',
          }}
        />
        <span
          style={{
            fontFamily: 'Montserrat, Inter, sans-serif',
            fontSize: 13,
            fontWeight: 800,
            color: '#A7F3D0',
            letterSpacing: 2.5,
            textTransform: 'uppercase',
          }}
        >
          THE AUGMENTED CREATOR CORE
        </span>
      </div>

      {/* Massive 3D Gyroscopic Gimbal Center Stage */}
      <div
        style={{
          width: 1100,
          height: 600,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotX}deg) translateY(-20px)`,
          zIndex: 15,
        }}
      >
        {/* Outer Gimbal Ring */}
        <div
          style={{
            position: 'absolute',
            width: 880,
            height: 580,
            borderRadius: '50%',
            border: '2.5px solid rgba(16, 185, 129, 0.45)',
            transform: `rotateZ(${rotY * 0.8}deg)`,
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 40px rgba(16, 185, 129, 0.25)',
          }}
        />

        {/* Middle Gimbal Ring */}
        <div
          style={{
            position: 'absolute',
            width: 760,
            height: 480,
            borderRadius: '50%',
            border: '2px dashed rgba(56, 189, 248, 0.45)',
            transform: `rotateY(${rotY * 1.3}deg) rotateZ(35deg)`,
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 35px rgba(56, 189, 248, 0.25)',
          }}
        />

        {/* Inner Gimbal Ring */}
        <div
          style={{
            position: 'absolute',
            width: 640,
            height: 400,
            borderRadius: '50%',
            border: '2px solid rgba(245, 158, 11, 0.4)',
            transform: `rotateX(${rotY * 1.1}deg) rotateZ(-30deg)`,
            transformStyle: 'preserve-3d',
          }}
        />

        {/* Grand Central Human Creator Core (220px) */}
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #0e2e28 0%, #061512 70%, #020806 100%)',
            border: '3px solid #10B981',
            boxShadow: '0 0 60px rgba(16, 185, 129, 0.7), inset 0 0 30px #10B981',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(40px)',
            zIndex: 30,
          }}
        >
          <div style={{ fontSize: 56, filter: 'drop-shadow(0 0 20px #10B981)' }}>👤</div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: 2,
              marginTop: 6,
            }}
          >
            HUMAN CREATOR
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#34D399',
              letterSpacing: 1.5,
              marginTop: 2,
            }}
          >
            CENTRAL PILOT
          </div>
        </div>

        {/* 5 Grand Orbiting 3D Capability Pods */}
        {capabilities.map((cap, idx) => {
          const currentAngle = ((cap.angle + rotY * 1.5) * Math.PI) / 180;
          const radiusX = 390;
          const radiusY = 220;
          const podX = Math.cos(currentAngle) * radiusX;
          const podY = Math.sin(currentAngle) * radiusY;
          const podZ = Math.sin(currentAngle) * 80;

          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                width: 200,
                height: 110,
                borderRadius: 18,
                backgroundColor: '#0c1626',
                border: `2px solid ${cap.color}`,
                boxShadow: `0 15px 40px rgba(0, 0, 0, 0.9), 0 0 25px ${cap.color}40`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 16px',
                transformStyle: 'preserve-3d',
                transform: `translate3d(${podX}px, ${podY}px, ${podZ}px)`,
                zIndex: podZ > 0 ? 35 : 10,
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 4 }}>{cap.icon}</div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: 1,
                }}
              >
                {cap.title}
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: cap.color,
                  letterSpacing: 1.5,
                  marginTop: 2,
                }}
              >
                {cap.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* End Gimbal Stage */}
    </div>
  );
};
