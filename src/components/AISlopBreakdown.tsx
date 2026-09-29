import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const AISlopBreakdown: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const anatomyPoints = [
    {
      num: "01",
      title: "HALLUCINATED SCRIPT",
      desc: "Surface-level LLM text with fabricated facts, circular logic, and zero research.",
      color: "#F87171",
    },
    {
      num: "02",
      title: "SYNTHETIC MONOTONE",
      desc: "Cheap text-to-speech with uncanny pauses, zero cadence, and flat emotional range.",
      color: "#FB923C",
    },
    {
      num: "03",
      title: "GLITCHED DIFFUSION B-ROLL",
      desc: "Eerie morphing imagery, extra fingers, melting text, and repetitive visual filler.",
      color: "#FBBF24",
    },
    {
      num: "04",
      title: "ALGORITHMIC CLICKBAIT",
      desc: "Extreme sensationalist thumbnails and false headlines engineered to hijack CTR.",
      color: "#EF4444",
    },
    {
      num: "05",
      title: "BULK VELOCITY FACTORIES",
      desc: "Autonomous bots publishing 50+ videos daily across hundreds of cloned channels.",
      color: "#A855F7",
    },
  ];

  // Scale tilt animation: volume up, uniqueness down
  const tiltAngle = interpolate(frame, [0, 90], [0, 12], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: 1720,
        height: 960,
        backgroundColor: '#030712',
        borderRadius: 20,
        border: '1px solid rgba(239, 68, 68, 0.3)',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        padding: 40,
        position: 'relative',
        overflow: 'hidden',
        opacity: entrance,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: 24,
          marginBottom: 30,
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
            ● DIGITAL POLLUTION ANALYSIS
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
            THE ANATOMY OF "AI SLOP"
          </h2>
        </div>

        {/* Kapwing Verified Evidence Pill */}
        <div
          style={{
            padding: '12px 20px',
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <span style={{ fontSize: 11, color: '#f87171', fontWeight: 800 }}>KAPWING INVESTIGATION 2025</span>
          <span style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 900 }}>
            20.4% OF NEW USER FEEDS • $117M AD REVENUE
          </span>
        </div>
      </div>

      {/* Main Body */}
      <div style={{ flex: 1, display: 'flex', gap: 36, marginBottom: 70 }}>
        {/* Left: 5 Anatomy Pillars */}
        <div
          style={{
            flex: 1.2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {anatomyPoints.map((item, idx) => {
            const cardSpring = spring({
              frame: frame - idx * 4,
              fps,
              config: { damping: 14, stiffness: 130 },
            });

            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '7px 18px',
                  backgroundColor: '#090e18',
                  borderRadius: 10,
                  border: `1px solid ${item.color}40`,
                  transform: `translateX(${interpolate(cardSpring, [0, 1], [-30, 0])}px)`,
                  opacity: cardSpring,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    backgroundColor: `${item.color}20`,
                    color: item.color,
                    fontSize: 14,
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#FFFFFF' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: The Paradox Scale (More Content != More Value) */}
        <div
          style={{
            flex: 0.8,
            backgroundColor: '#090e18',
            borderRadius: 16,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 13, color: '#94a3b8', fontWeight: 800, letterSpacing: 1 }}>
              THE CORE PARADOX
            </span>
            <div style={{ fontSize: 26, fontWeight: 900, color: '#EF4444', marginTop: 6 }}>
              MORE CONTENT ≠ MORE VALUE
            </div>
          </div>

          {/* Animated Balance Scale Visual */}
          <div
            style={{
              width: 380,
              height: 220,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Fulcrum Base */}
            <div
              style={{
                position: 'absolute',
                bottom: 20,
                width: 0,
                height: 0,
                borderLeft: '24px solid transparent',
                borderRight: '24px solid transparent',
                borderBottom: '48px solid #334155',
              }}
            />

            {/* Tilting Lever */}
            <div
              style={{
                width: 340,
                height: 8,
                backgroundColor: '#64748b',
                borderRadius: 4,
                position: 'relative',
                transform: `rotate(${tiltAngle}deg)`,
                transformOrigin: 'center center',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* Left Weight: Volume Heavy (Lowered) */}
              <div
                style={{
                  position: 'absolute',
                  left: -20,
                  top: -60,
                  width: 130,
                  padding: '12px 10px',
                  backgroundColor: '#dc2626',
                  borderRadius: 8,
                  color: '#FFFFFF',
                  textAlign: 'center',
                  boxShadow: '0 10px 25px rgba(220, 38, 38, 0.4)',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 800 }}>CONTENT VOLUME</div>
                <div style={{ fontSize: 18, fontWeight: 900 }}>+1,000%</div>
              </div>

              {/* Right Weight: Uniqueness Light (Raised) */}
              <div
                style={{
                  position: 'absolute',
                  right: -20,
                  top: -60,
                  width: 130,
                  padding: '12px 10px',
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: 8,
                  color: '#94a3b8',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 800 }}>UNIQUENESS</div>
                <div style={{ fontSize: 18, fontWeight: 900, color: '#f87171' }}>-95%</div>
              </div>
            </div>
          </div>

          {/* Word of the Year Label */}
          <div
            style={{
              padding: '10px 18px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 8,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: 12,
              color: '#94a3b8',
              textAlign: 'center',
            }}
          >
            "SLOP" NAMED 2025 WORD OF THE YEAR<br />
            <span style={{ fontSize: 10, color: '#64748b' }}>Merriam-Webster & American Dialect Society</span>
          </div>
        </div>
      </div>
    </div>
  );
};
