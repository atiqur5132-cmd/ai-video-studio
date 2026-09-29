import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const SourcesRoll: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const sources = [
    {
      source: "YouTube Official Blog",
      title: "How We're Helping Creators Disclose Altered or Synthetic Content",
      year: "March 2024",
      domain: "blog.youtube",
    },
    {
      source: "YouTube Partner Program",
      title: "Inauthentic & Repetitive Content Monetization Policy",
      year: "Updated July 2025",
      domain: "support.google.com/youtube",
    },
    {
      source: "Kapwing Research Lab",
      title: "The Scale of AI Slop: Recommendations & Monetization Analysis",
      year: "October 2025",
      domain: "kapwing.com/research",
    },
    {
      source: "404 Media Investigation",
      title: "The Industrial Spam Economy: AI Content Farms and Algorithmic Exploits",
      year: "2025–2026",
      domain: "404media.co",
    },
    {
      source: "Wired Technology",
      title: "How Content Mills Are Flooding Online Video Platforms",
      year: "2025",
      domain: "wired.com",
    },
    {
      source: "Merriam-Webster & American Dialect Society",
      title: "Word of the Year: 'Slop' and the Rise of Synthetic Fatigue",
      year: "2025",
      domain: "merriam-webster.com",
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
        padding: '40px 50px',
        position: 'relative',
        overflow: 'hidden',
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
            linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.06) 50%, rgba(2, 5, 12, 0.95)),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255, 255, 255, 0.05) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255, 255, 255, 0.05) 40px)
          `,
          transform: 'perspective(600px) rotateX(68deg)',
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
          marginBottom: 28,
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
            ● RESEARCH DOCUMENTATION & EVIDENCE
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#FFFFFF', margin: 0 }}>
            PRIMARY SOURCES & INVESTIGATIONS
          </h2>
        </div>

        <div
          style={{
            padding: '8px 18px',
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 800,
            color: '#38BDF8',
          }}
        >
          PEER-REVIEWED & OFFICIAL DATA
        </div>
      </div>

      {/* Sources List */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}
      >
        {sources.map((s, idx) => {
          const itemSpring = spring({
            frame: frame - idx * 4,
            fps,
            config: { damping: 14, stiffness: 130 },
          });

          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#090e18',
                borderRadius: 14,
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                transform: `translateX(${interpolate(itemSpring, [0, 1], [-20, 0])}px)`,
                opacity: itemSpring,
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#38BDF8' }}>
                    {s.source}
                  </span>
                  <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600 }}>
                    {s.year}
                  </span>
                </div>

                <div style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginTop: 8 }}>
                  {s.title}
                </div>
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: '#64748b',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: 10,
                  marginTop: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span>🔗</span>
                <span>{s.domain}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer attribution */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: 14,
          marginTop: 14,
          fontSize: 12,
          color: '#64748b',
          textAlign: 'center',
        }}
      >
        ALL METRICS AND POLICY CITATIONS DERIVED DIRECTLY FROM OFFICIAL PLATFORM RELEASES AND VERIFIED REPORTING.
      </div>
    </div>
  );
};
