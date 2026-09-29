import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Isometric3DPipeline: React.FC<{
  speedMode?: 'slow' | 'hyper';
}> = ({ speedMode = 'hyper' }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const speedMult = speedMode === 'hyper' ? 2.5 : 1.0;
  const conveyorProgress = (frame * speedMult) % 360;

  const blocks = [
    { title: "PROMPT", sub: "NATURAL LANGUAGE", color: "#A855F7", icon: "💬", metric: "0.1s" },
    { title: "LLM SCRIPT", sub: "STRUCTURAL LOGIC", color: "#38BDF8", icon: "🧠", metric: "2.4s" },
    { title: "AI VOICE", sub: "NEURAL SPEECH", color: "#10B981", icon: "🎙️", metric: "3.8s" },
    { title: "VIDEO SYNTHESIS", sub: "DIFFUSION RENDER", color: "#EF4444", icon: "🎬", metric: "12.0s" },
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

      {/* Volumetric Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: 1300,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(56, 189, 248, 0.06) 50%, transparent 75%)',
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
          AUTOMATED GENERATIVE PIPELINE
        </span>
      </div>

      {/* Massive 3D Conveyor Assembly Line (Fills Canvas) */}
      <div
        style={{
          width: 1680,
          height: 520,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(22deg) rotateY(-6deg) translateY(-20px)',
          zIndex: 15,
        }}
      >
        {/* Conveyor Bed Slab */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: 120,
            backgroundColor: '#070d1a',
            border: '2px solid rgba(56, 189, 248, 0.3)',
            borderRadius: 24,
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(56, 189, 248, 0.1)',
            transform: 'translateZ(-40px)',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Moving Laser Guide Tracks */}
          <div
            style={{
              width: '100%',
              height: 4,
              backgroundColor: '#00F0FF',
              boxShadow: '0 0 20px #00F0FF',
            }}
          />
        </div>

        {/* 4 Grand 3D Stage Modules */}
        {blocks.map((block, idx) => {
          const itemEntrance = spring({
            frame: frame - idx * 6,
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          const float = Math.sin((frame + idx * 30) * 0.08) * 12;

          return (
            <div
              key={idx}
              style={{
                width: 370,
                height: 380,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transform: `translateY(${float}px) scale(${interpolate(itemEntrance, [0, 1], [0.8, 1])})`,
                opacity: itemEntrance,
              }}
            >
              {/* Floating Holographic 3D Block */}
              <div
                style={{
                  width: 330,
                  height: 310,
                  borderRadius: 24,
                  backgroundColor: '#0c1424',
                  border: `2px solid ${block.color}`,
                  boxShadow: `0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px ${block.color}35`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 24,
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(30px)',
                }}
              >
                {/* Module Header */}
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 900,
                      color: block.color,
                      letterSpacing: 2,
                    }}
                  >
                    PHASE 0{idx + 1}
                  </div>
                  <div
                    style={{
                      padding: '4px 10px',
                      borderRadius: 6,
                      backgroundColor: `${block.color}20`,
                      border: `1px solid ${block.color}50`,
                      fontSize: 12,
                      fontWeight: 800,
                      color: block.color,
                    }}
                  >
                    {block.metric}
                  </div>
                </div>

                {/* 3D Center Icon Emitted Beacon */}
                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 24,
                    backgroundColor: `${block.color}15`,
                    border: `1.5px solid ${block.color}60`,
                    boxShadow: `0 0 30px ${block.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 44,
                  }}
                >
                  {block.icon}
                </div>

                {/* Title & Subtitle */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 900,
                      color: '#FFFFFF',
                      letterSpacing: -0.5,
                    }}
                  >
                    {block.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#94A3B8',
                      letterSpacing: 1.5,
                      marginTop: 4,
                    }}
                  >
                    {block.sub}
                  </div>
                </div>

                {/* Bottom Laser Connection Pulse */}
                <div
                  style={{
                    width: '100%',
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: block.color,
                    boxShadow: `0 0 14px ${block.color}`,
                  }}
                />
              </div>

              {/* Connecting Laser Beam to next node */}
              {idx < blocks.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    right: -40,
                    width: 70,
                    height: 3,
                    backgroundColor: '#38BDF8',
                    boxShadow: '0 0 16px #38BDF8',
                    zIndex: 5,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
