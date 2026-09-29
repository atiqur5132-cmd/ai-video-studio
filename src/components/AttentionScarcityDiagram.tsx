import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const AttentionScarcityDiagram: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Flowing particle data streams
  const particles = Array.from({ length: 24 }, (_, i) => {
    const offset = (frame * 3 + i * 45) % 600;
    const xPos = 200 + (i % 6) * 220 + Math.sin(frame * 0.05 + i) * 30;
    return { id: i, x: xPos, y: offset };
  });

  const pulse = Math.sin(frame * 0.15) * 0.05 + 1;

  return (
    <div
      style={{
        width: 1720,
        height: 960,
        backgroundColor: '#030712',
        borderRadius: 20,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        padding: 40,
        position: 'relative',
        overflow: 'hidden',
        opacity: entrance,
      }}
    >
      {/* Volumetric glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
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
          paddingBottom: 24,
          marginBottom: 30,
          zIndex: 10,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: '#EF4444',
              letterSpacing: 2,
              marginBottom: 6,
            }}
          >
            ● MACROECONOMIC BOTTLENECK
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
            THE ATTENTION COLLISION
          </h2>
        </div>

        <div
          style={{
            padding: '12px 24px',
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: 12,
            fontSize: 18,
            fontWeight: 800,
            color: '#FCA5A5',
          }}
        >
          INFINITE SUPPLY vs FINITE TIME
        </div>
      </div>

      {/* Main Diagram Area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          padding: '0 40px',
          zIndex: 5,
        }}
      >
        {/* Left Side: Infinite Supply Reservoir */}
        <div
          style={{
            width: 440,
            height: 580,
            backgroundColor: '#0a0f1d',
            borderRadius: 16,
            border: '1px solid rgba(56, 189, 248, 0.3)',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#38BDF8', letterSpacing: 1 }}>
              CONTENT SUPPLY
            </div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#FFFFFF', marginTop: 4 }}>
              NEARLY INFINITE
            </div>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.5, marginTop: 10 }}>
              Generative video, autonomous scripts, and automated rendering pipelines produce content with zero marginal physical cost.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                borderRadius: 8,
                border: '1px solid rgba(56, 189, 248, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: 13, color: '#94a3b8' }}>Upload Velocity:</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: '#38BDF8' }}>500+ hrs / min</span>
            </div>
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(56, 189, 248, 0.08)',
                borderRadius: 8,
                border: '1px solid rgba(56, 189, 248, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: 13, color: '#94a3b8' }}>Marginal Cost:</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: '#10B981' }}>$0.00 / video</span>
            </div>
          </div>
        </div>

        {/* Center: The Funnel Chokepoint */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Animated SVG Funnel */}
          <svg width="420" height="360" viewBox="0 0 420 360" fill="none">
            {/* Wide mouth converging to narrow neck */}
            <path
              d="M 40 40 L 170 180 L 170 320 L 250 320 L 250 180 L 380 40 Z"
              fill="rgba(15, 23, 42, 0.6)"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
            />
            {/* Chokepoint Glow */}
            <rect
              x="160"
              y="170"
              width="100"
              height="20"
              fill="#EF4444"
              opacity="0.25"
              filter="blur(8px)"
            />
            <line
              x1="170"
              y1="180"
              x2="250"
              y2="180"
              stroke="#EF4444"
              strokeWidth="4"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Central Label */}
          <div
            style={{
              position: 'absolute',
              top: '52%',
              backgroundColor: '#030712',
              border: '2px solid #EF4444',
              borderRadius: 20,
              padding: '6px 18px',
              fontSize: 13,
              fontWeight: 900,
              color: '#FCA5A5',
              transform: `scale(${pulse})`,
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
            }}
          >
            CRITICAL CHOKEPOINT
          </div>
        </div>

        {/* Right Side: Finite Human Attention */}
        <div
          style={{
            width: 440,
            height: 580,
            backgroundColor: '#0a0f1d',
            borderRadius: 16,
            border: '1px solid rgba(239, 68, 68, 0.35)',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#EF4444', letterSpacing: 1 }}>
              HUMAN ATTENTION
            </div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#FFFFFF', marginTop: 4 }}>
              STRICTLY FINITE
            </div>
            <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.5, marginTop: 10 }}>
              Human biological capacity does not scale with AI compute. Viewers still have fixed hours, limited cognitive bandwidth, and fatigue.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                borderRadius: 8,
                border: '1px solid rgba(239, 68, 68, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: 13, color: '#94a3b8' }}>Human Day Limit:</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: '#EF4444' }}>24 Hours Flat</span>
            </div>
            <div
              style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                borderRadius: 8,
                border: '1px solid rgba(239, 68, 68, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: 13, color: '#94a3b8' }}>Active Users:</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: '#FFFFFF' }}>2.7 Billion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
