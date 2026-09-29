import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const CreatorToolsOrbit: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const tools = [
    { name: "RESEARCH SYNTHESIS", icon: "🔍", color: "#38BDF8" },
    { name: "MULTI-LANGUAGE DUBBING", icon: "🌐", color: "#10B981" },
    { name: "ROUGH-CUT EDITING", icon: "✂️", color: "#F59E0B" },
    { name: "AUTO CAPTIONS & CHAPTERS", icon: "📝", color: "#818CF8" },
    { name: "VFX STORYBOARDING", icon: "🎨", color: "#EC4899" },
    { name: "DYNAMIC COLOR GRADING", icon: "✨", color: "#06B6D4" },
  ];

  const orbitRadius = 260;
  const baseAngle = frame * 0.02;

  return (
    <div
      style={{
        width: 1720,
        height: 960,
        backgroundColor: '#030712',
        borderRadius: 20,
        border: '1px solid rgba(56, 189, 248, 0.3)',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        padding: 40,
        position: 'relative',
        overflow: 'hidden',
        opacity: entrance,
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: 20,
          marginBottom: 20,
          zIndex: 10,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: '#34D399',
              letterSpacing: 2,
              marginBottom: 6,
            }}
          >
            ● THE COUNTERARGUMENT
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
            AMPLIFYING HUMAN CREATORS
          </h2>
        </div>

        {/* Core Differentiation Badges */}
        <div style={{ display: 'flex', gap: 14 }}>
          <div
            style={{
              padding: '10px 22px',
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              border: '2px solid #10B981',
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 900,
              color: '#34D399',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
            }}
          >
            AI AS A TOOL ✓
          </div>

          <div
            style={{
              padding: '10px 22px',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 700,
              color: '#F87171',
              textDecoration: 'line-through',
            }}
          >
            AI AS A REPLACEMENT ✗
          </div>
        </div>
      </div>

      {/* Orbit Visualization Stage */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Orbital Ring Guide Line */}
        <div
          style={{
            position: 'absolute',
            width: orbitRadius * 2,
            height: orbitRadius * 2,
            borderRadius: '50%',
            border: '2px dashed rgba(56, 189, 248, 0.25)',
          }}
        />

        {/* Center: The Human Creator */}
        <div
          style={{
            width: 170,
            height: 170,
            borderRadius: '50%',
            backgroundColor: '#090e18',
            border: '3px solid #34D399',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 45px rgba(16, 185, 129, 0.4)',
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: 44 }}>🎙️</div>
          <span style={{ fontSize: 15, fontWeight: 900, color: '#FFFFFF', marginTop: 4 }}>
            HUMAN CREATOR
          </span>
          <span style={{ fontSize: 11, color: '#34D399', fontWeight: 700 }}>ORIGINAL VOICE</span>
        </div>

        {/* Orbiting Capability Nodes */}
        {tools.map((t, idx) => {
          const angle = baseAngle + (idx * (2 * Math.PI)) / tools.length;
          const x = Math.cos(angle) * orbitRadius;
          const y = Math.sin(angle) * (orbitRadius * 0.75); // slight perspective flattening

          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                transform: `translate(${x}px, ${y}px)`,
                backgroundColor: '#0c121e',
                border: `1.5px solid ${t.color}`,
                borderRadius: 14,
                padding: '10px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                boxShadow: `0 8px 24px rgba(0, 0, 0, 0.8), 0 0 15px ${t.color}30`,
                zIndex: 8,
              }}
            >
              <span style={{ fontSize: 20 }}>{t.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: '#f8fafc', whiteSpace: 'nowrap' }}>
                {t.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Real-World Case Evidence Footnote */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: 12,
          marginBottom: 65,
          fontSize: 12,
          color: '#94a3b8',
          zIndex: 10,
        }}
      >
        <span>CASE STUDY: MrBeast & Veritasium multi-track audio reaching 30+ languages</span>
        <span>BENEFIT: Removing friction amplifies creative scope rather than reducing it</span>
      </div>
    </div>
  );
};
