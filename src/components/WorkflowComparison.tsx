import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const WorkflowComparison: React.FC<{
  activeMode?: 'split' | 'traditional' | 'ai';
}> = ({ activeMode = 'split' }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const cameraZoom = interpolate(frame, [0, 180], [1.0, 1.04], {
    extrapolateRight: 'clamp',
  });

  // Animated timers
  const traditionalHours = Math.min(42, Math.floor(frame * 0.4));
  const aiMinutes = Math.min(4, Math.max(1, Math.floor(frame * 0.05)));

  const isTradFocus = activeMode === 'traditional';
  const isAiFocus = activeMode === 'ai';

  return (
    <div
      style={{
        width: 1760,
        height: 720,
        backgroundColor: '#030712',
        borderRadius: 24,
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        padding: '36px 44px',
        position: 'relative',
        overflow: 'hidden',
        opacity: entrance,
        transform: `scale(${entrance * cameraZoom}) translateY(-35px)`,
      }}
    >
      {/* Studio Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: 1200,
          height: 600,
          top: '20%',
          left: '20%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Header Pill Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: 20,
          marginBottom: 28,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              padding: '6px 16px',
              borderRadius: 100,
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: '#38BDF8',
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            ● PRODUCTION VELOCITY SHIFT
          </div>
          <span style={{ fontSize: 24, fontWeight: 900, color: '#FFFFFF', letterSpacing: 1 }}>
            THE FRICTION COLLAPSE
          </span>
        </div>

        <div
          style={{
            padding: '6px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 800,
            color: '#94A3B8',
            letterSpacing: 1.5,
          }}
        >
          COST PER MINUTE OF VIDEO
        </div>
      </div>

      {/* Split Comparison Columns */}
      <div style={{ display: 'flex', flex: 1, gap: 32, position: 'relative' }}>
        {/* Left Side: Traditional Human Pipeline */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            borderRadius: 20,
            border: isTradFocus
              ? '2px solid rgba(239, 68, 68, 0.7)'
              : '1px solid rgba(239, 68, 68, 0.25)',
            boxShadow: isTradFocus
              ? '0 0 50px rgba(239, 68, 68, 0.3)'
              : 'none',
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            opacity: isAiFocus ? 0.45 : 1,
            transform: isTradFocus ? 'scale(1.02)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#F87171', letterSpacing: 2 }}>
                TRADITIONAL CREATOR WORKFLOW
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '4px 12px',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  color: '#FCA5A5',
                  borderRadius: 8,
                }}
              >
                HIGH FRICTION MOAT
              </span>
            </div>

            <div
              style={{
                fontSize: 68,
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: -1,
                marginBottom: 20,
                textShadow: '0 0 40px rgba(239, 68, 68, 0.4)',
              }}
            >
              {traditionalHours}+ <span style={{ fontSize: 30, color: '#F87171' }}>HOURS</span>
            </div>

            {/* 3 Bold Visual Milestones */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 12,
                  padding: '12px 18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 800, color: '#E2E8F0' }}>
                  Manual Research & Scriptwriting
                </span>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#F87171' }}>12 Hours</span>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 12,
                  padding: '12px 18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 800, color: '#E2E8F0' }}>
                  Physical Camera & Audio Production
                </span>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#F87171' }}>14 Hours</span>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 12,
                  padding: '12px 18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 800, color: '#E2E8F0' }}>
                  Timeline Editing, Sound Design & Color
                </span>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#F87171' }}>16 Hours</span>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '12px 16px',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 800,
              color: '#F87171',
              letterSpacing: 1.5,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Physical Labor • Equipment Scarcity • Creative Moat
          </div>
        </div>

        {/* Center Speed Multiplier Divider */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              padding: '10px 18px',
              borderRadius: 100,
              backgroundColor: '#0F172A',
              border: '2px solid #38BDF8',
              boxShadow: '0 0 30px rgba(56, 189, 248, 0.6)',
              fontSize: 15,
              fontWeight: 900,
              color: '#38BDF8',
              letterSpacing: 2,
              whiteSpace: 'nowrap',
            }}
          >
            1,000x VELOCITY
          </div>
        </div>

        {/* Right Side: Autonomous AI Pipeline */}
        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            borderRadius: 20,
            border: isAiFocus
              ? '2px solid rgba(56, 189, 248, 0.7)'
              : '1px solid rgba(56, 189, 248, 0.25)',
            boxShadow: isAiFocus
              ? '0 0 50px rgba(56, 189, 248, 0.3)'
              : 'none',
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            opacity: isTradFocus ? 0.45 : 1,
            transform: isAiFocus ? 'scale(1.02)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#38BDF8', letterSpacing: 2 }}>
                GENERATIVE AUTOMATION PIPELINE
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '4px 12px',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  color: '#7DD3FC',
                  borderRadius: 8,
                }}
              >
                ZERO MARGINAL COST
              </span>
            </div>

            <div
              style={{
                fontSize: 68,
                fontWeight: 900,
                color: '#38BDF8',
                letterSpacing: -1,
                marginBottom: 20,
                textShadow: '0 0 40px rgba(56, 189, 248, 0.4)',
              }}
            >
              {aiMinutes} <span style={{ fontSize: 30, color: '#7DD3FC' }}>MINUTES</span>
            </div>

            {/* 3 Bold Visual Milestones */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 12,
                  padding: '12px 18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 800, color: '#E2E8F0' }}>
                  Multimodal Prompt Ingest & Script
                </span>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#38BDF8' }}>5 Seconds</span>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 12,
                  padding: '12px 18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 800, color: '#E2E8F0' }}>
                  Neural Voice Cloning & Video Synthesis
                </span>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#38BDF8' }}>90 Seconds</span>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 12,
                  padding: '12px 18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 800, color: '#E2E8F0' }}>
                  Direct YouTube Studio API Upload
                </span>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#38BDF8' }}>10 Seconds</span>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: '12px 16px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 800,
              color: '#38BDF8',
              letterSpacing: 1.5,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Zero Humans • Algorithmic Scale • Infinite Feeds
          </div>
        </div>
      </div>
    </div>
  );
};
