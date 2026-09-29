import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const EconomicsShiftDiagram: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const chainSteps = [
    { title: "ZERO MARGINAL COST", sub: "Anyone can create infinite videos with a single prompt.", color: "#38BDF8" },
    { title: "EXPONENTIAL SUPPLY", sub: "Platform uploads surge by billions of synthetic impressions.", color: "#F59E0B" },
    { title: "ALGORITHMIC NOISE", sub: "Recommendation systems drown in hyper-templated clones.", color: "#EF4444" },
    { title: "DISCOVERY CRISIS", sub: "Finding unique human creators becomes exponentially harder.", color: "#A855F7" },
  ];

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
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: 24,
          marginBottom: 36,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: '#F59E0B',
              letterSpacing: 2,
              marginBottom: 6,
            }}
          >
            ● MACRO PLATFORM DYNAMICS
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
            THE ECONOMIC CASCADE
          </h2>
        </div>

        <div
          style={{
            padding: '12px 24px',
            backgroundColor: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            borderRadius: 12,
            fontSize: 18,
            fontWeight: 800,
            color: '#FCD34D',
          }}
        >
          DOES VIDEO ITSELF DEVALUE?
        </div>
      </div>

      {/* 4-Step Chain Reaction */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          padding: '0 20px',
        }}
      >
        {chainSteps.map((step, idx) => {
          const stepSpring = spring({
            frame: frame - idx * 6,
            fps,
            config: { damping: 14, stiffness: 130 },
          });

          return (
            <React.Fragment key={idx}>
              <div
                style={{
                  width: 320,
                  height: 380,
                  backgroundColor: '#090e18',
                  borderRadius: 16,
                  border: `2px solid ${step.color}50`,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: `0 15px 40px rgba(0, 0, 0, 0.7), 0 0 20px ${step.color}15`,
                  transform: `scale(${interpolate(stepSpring, [0, 1], [0.9, 1])})`,
                  opacity: stepSpring,
                }}
              >
                <div>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      backgroundColor: `${step.color}20`,
                      color: step.color,
                      fontSize: 18,
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    0{idx + 1}
                  </div>

                  <div style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', marginTop: 20, lineHeight: 1.2 }}>
                    {step.title}
                  </div>

                  <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.5, marginTop: 12 }}>
                    {step.sub}
                  </p>
                </div>

                <div
                  style={{
                    padding: '8px 12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: 8,
                    fontSize: 11,
                    fontWeight: 700,
                    color: step.color,
                  }}
                >
                  PHASE 0{idx + 1} IMPACT
                </div>
              </div>

              {/* Connecting Arrows between steps */}
              {idx < chainSteps.length - 1 && (
                <div
                  style={{
                    fontSize: 32,
                    color: '#64748b',
                    fontWeight: 900,
                    opacity: stepSpring,
                    transform: 'translateY(-20px)',
                  }}
                >
                  ➔
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Provocative Question Footnote */}
      <div
        style={{
          marginTop: 20,
          padding: '16px 24px',
          backgroundColor: '#060a12',
          borderRadius: 12,
          border: '1px solid rgba(239, 68, 68, 0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 18,
          fontWeight: 800,
          color: '#f87171',
        }}
      >
        "If anyone can make a video in sixty seconds, making a video is no longer the moat."
      </div>
    </div>
  );
};
