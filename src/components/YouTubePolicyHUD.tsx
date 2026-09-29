import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const YouTubePolicyHUD: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const policies = [
    {
      date: "MARCH 2024",
      title: "SYNTHETIC DISCLOSURE MANDATE",
      rule: "Mandatory Creator Studio declaration for realistic synthetic audio, deepfakes, or altered events.",
      status: "STRICT ENFORCEMENT",
      color: "#38BDF8",
    },
    {
      date: "JULY 2025",
      title: "YPP INAUTHENTIC CONTENT CRACKDOWN",
      rule: "Demonetization of automated, template-based, or bulk-uploaded videos lacking substantial human commentary.",
      status: "YPP INELIGIBLE",
      color: "#EF4444",
    },
    {
      date: "MID-2026",
      title: "130,000+ AUTOMATED SPAM PURGE",
      rule: "Behavioral detection models identifying upload velocity, repetitive audio hash, and metadata collusion.",
      status: "CHANNELS TERMINATED",
      color: "#F59E0B",
    },
    {
      date: "ACTIVE",
      title: "CONTENT ID FOR VOICE & LIKENESS",
      rule: "Algorithmic protection preventing unauthorized synthetic cloning of human creator voices and faces.",
      status: "IDENTITY SHIELD",
      color: "#10B981",
    },
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
          marginBottom: 30,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: '#38BDF8',
              letterSpacing: 2,
              marginBottom: 6,
            }}
          >
            ● OFFICIAL PLATFORM GOVERNANCE
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
            YOUTUBE'S TWO-FRONT ENFORCEMENT
          </h2>
        </div>

        {/* Clear Policy Boundary Badge */}
        <div
          style={{
            padding: '12px 24px',
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            borderRadius: 12,
            fontSize: 16,
            fontWeight: 800,
            color: '#38BDF8',
          }}
        >
          AI-ASSISTED ≠ PROHIBITED
        </div>
      </div>

      {/* Policy Grid */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          zIndex: 5,
        }}
      >
        {policies.map((p, idx) => {
          const cardSpring = spring({
            frame: frame - idx * 5,
            fps,
            config: { damping: 14, stiffness: 130 },
          });

          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#090e18',
                borderRadius: 12,
                border: `1px solid ${p.color}40`,
                padding: '16px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                transform: `scale(${interpolate(cardSpring, [0, 1], [0.95, 1])})`,
                opacity: cardSpring,
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: p.color, letterSpacing: 1 }}>
                    {p.date}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      backgroundColor: `${p.color}20`,
                      color: p.color,
                      padding: '4px 10px',
                      borderRadius: 6,
                      border: `1px solid ${p.color}50`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                <div style={{ fontSize: 20, fontWeight: 800, color: '#FFFFFF', marginTop: 12 }}>
                  {p.title}
                </div>

                <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.5, marginTop: 8 }}>
                  {p.rule}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: 12,
                  marginTop: 12,
                  fontSize: 12,
                  color: '#64748b',
                }}
              >
                SOURCE: Official YouTube Help & Creator Safety Guidelines
              </div>
            </div>
          );
        })}
      </div>

      {/* Critical Rule Highlight */}
      <div
        style={{
          marginTop: 12,
          marginBottom: 65,
          padding: '10px 20px',
          backgroundColor: '#060a12',
          borderRadius: 10,
          border: '1px solid rgba(16, 185, 129, 0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 13,
          color: '#e2e8f0',
        }}
      >
        <span>
          <strong style={{ color: '#10B981' }}>RULE OF ORIGINALITY:</strong> If your video provides unique human commentary, education, or analysis, AI production tools are 100% monetizable.
        </span>
        <span style={{ fontSize: 11, color: '#94a3b8' }}>Neal Mohan, YouTube CEO</span>
      </div>
    </div>
  );
};
