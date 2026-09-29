import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Isometric3DEconomicCascade: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const steps = [
    { title: "ZERO COST", sub: "Marginal Cost Drops to $0", color: "#38BDF8", height: 380, metric: "$0.00" },
    { title: "SUPPLY SHOCK", sub: "Exponential Video Flood", color: "#F59E0B", height: 300, metric: "+10,000x" },
    { title: "NOISE WALL", sub: "Feed Saturation Barrier", color: "#EF4444", height: 220, metric: "CRITICAL" },
    { title: "DISCOVERY CRISIS", sub: "Human Value Obscured", color: "#A855F7", height: 140, metric: "THE SQUEEZE" },
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
            linear-gradient(to bottom, transparent, rgba(245, 158, 11, 0.07) 50%, rgba(2, 5, 12, 0.95)),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(245, 158, 11, 0.14) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(245, 158, 11, 0.14) 40px)
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
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.14) 0%, rgba(239, 68, 68, 0.06) 55%, transparent 75%)',
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
          backgroundColor: 'rgba(245, 158, 11, 0.12)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
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
            backgroundColor: '#F59E0B',
            boxShadow: '0 0 12px #F59E0B',
          }}
        />
        <span
          style={{
            fontFamily: 'Montserrat, Inter, sans-serif',
            fontSize: 13,
            fontWeight: 800,
            color: '#FDE68A',
            letterSpacing: 2.5,
            textTransform: 'uppercase',
          }}
        >
          THE FOUR-STAGE ECONOMIC SHIFT
        </span>
      </div>

      {/* Massive 4-Plinth 3D Stepped Cascade Stage */}
      <div
        style={{
          width: 1360,
          height: 560,
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(18deg) rotateY(-8deg) translateY(-20px)',
          zIndex: 15,
        }}
      >
        {steps.map((st, idx) => {
          const stepEntrance = spring({
            frame: frame - idx * 7,
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          return (
            <div
              key={idx}
              style={{
                width: 310,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transformStyle: 'preserve-3d',
                transform: `translateY(${interpolate(stepEntrance, [0, 1], [150, 0])}px)`,
                opacity: stepEntrance,
              }}
            >
              {/* Floating Metric Badge */}
              <div
                style={{
                  padding: '6px 14px',
                  borderRadius: 8,
                  backgroundColor: `${st.color}20`,
                  border: `1.5px solid ${st.color}`,
                  boxShadow: `0 0 20px ${st.color}40`,
                  fontSize: 14,
                  fontWeight: 900,
                  color: st.color,
                  letterSpacing: 1.5,
                  marginBottom: 16,
                }}
              >
                {st.metric}
              </div>

              {/* 3D Extruded Plinth Body */}
              <div
                style={{
                  width: 290,
                  height: st.height,
                  backgroundColor: '#0c1524',
                  borderRadius: '20px 20px 0 0',
                  border: `2px solid ${st.color}70`,
                  boxShadow: `0 25px 60px rgba(0, 0, 0, 0.9), inset 0 0 30px ${st.color}20`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: '24px 18px',
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(25px)',
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 900,
                    color: st.color,
                    letterSpacing: 2,
                    marginBottom: 8,
                  }}
                >
                  STEP 0{idx + 1}
                </div>

                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    letterSpacing: -0.5,
                  }}
                >
                  {st.title}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#94A3B8',
                    letterSpacing: 1.5,
                    marginTop: 6,
                    textAlign: 'center',
                  }}
                >
                  {st.sub}
                </div>

                {/* Vertical Laser Light Line */}
                <div
                  style={{
                    width: 4,
                    height: 60,
                    backgroundColor: st.color,
                    boxShadow: `0 0 16px ${st.color}`,
                    borderRadius: 2,
                    marginTop: 'auto',
                    marginBottom: 12,
                  }}
                />
              </div>

              {/* Connecting Cascade Light Line */}
              {idx < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    right: -25,
                    bottom: steps[idx + 1].height / 2,
                    width: 50,
                    height: 2,
                    backgroundColor: '#F59E0B',
                    boxShadow: '0 0 14px #F59E0B',
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* End Cascade Stage */}
    </div>
  );
};
