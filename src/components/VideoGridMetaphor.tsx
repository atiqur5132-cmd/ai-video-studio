import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface VideoGridMetaphorProps {
  stage?: number; // 1 to 5: 1 video, 10, 100, 10k, 1M
  countText?: string;
}

export const VideoGridMetaphor: React.FC<VideoGridMetaphorProps> = ({
  stage = 3,
  countText = "10,000 VIDEOS",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Grid dimensions based on stage
  const columns = stage === 1 ? 1 : stage === 2 ? 3 : stage === 3 ? 6 : stage === 4 ? 12 : 20;
  const totalCards = columns * 6;

  const pulse = Math.sin(frame * 0.1) * 0.05 + 1;

  // Staggered pop-in for grid cards
  const gridCards = Array.from({ length: totalCards }, (_, i) => {
    const cardEntrance = spring({
      frame: frame - (i % columns) * 1.5,
      fps,
      config: { damping: 12, stiffness: 140 },
    });

    const isDuplicate = i % 3 === 0;

    return (
      <div
        key={i}
        style={{
          flex: `1 0 calc(${100 / columns}% - 8px)`,
          height: stage <= 2 ? 140 : stage <= 3 ? 90 : 45,
          backgroundColor: isDuplicate ? '#111827' : '#0c121e',
          borderRadius: 6,
          border: isDuplicate
            ? '1px solid rgba(239, 68, 68, 0.4)'
            : '1px solid rgba(56, 189, 248, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          opacity: Math.max(0, cardEntrance),
          transform: `scale(${Math.max(0, cardEntrance)})`,
          boxShadow: isDuplicate ? '0 0 12px rgba(239, 68, 68, 0.15)' : 'none',
        }}
      >
        {/* Fake Thumbnail Video Header */}
        <div
          style={{
            flex: 1,
            backgroundColor: isDuplicate ? '#1f2937' : '#172554',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {stage <= 3 && (
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: 10,
              }}
            >
              ▶
            </div>
          )}
          {isDuplicate && stage <= 4 && (
            <div
              style={{
                position: 'absolute',
                top: 4,
                left: 4,
                backgroundColor: '#dc2626',
                color: '#FFFFFF',
                fontSize: 8,
                fontWeight: 800,
                padding: '1px 4px',
                borderRadius: 3,
              }}
            >
              AI REPLICANT
            </div>
          )}
        </div>
        {/* Card Title Simulation */}
        {stage <= 3 && (
          <div style={{ height: 26, padding: '4px 6px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ width: '80%', height: 4, backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: 2 }} />
            <div style={{ width: '50%', height: 3, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
          </div>
        )}
      </div>
    );
  });

  return (
    <div
      style={{
        width: 1720,
        height: 960,
        backgroundColor: '#030712',
        borderRadius: 20,
        border: '1px solid rgba(56, 189, 248, 0.25)',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.95)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        padding: 36,
      }}
    >
      {/* Background Volumetric Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900,
          height: 600,
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header HUD Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: 20,
          marginBottom: 24,
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              padding: '6px 14px',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid #EF4444',
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 800,
              color: '#F87171',
              letterSpacing: 1,
            }}
          >
            ● INGEST FLOOD TELEMETRY
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#94a3b8' }}>
            SIMULATED RECOMMENDATION SURGE
          </span>
        </div>

        <div
          style={{
            fontSize: 32,
            fontWeight: 900,
            color: '#38BDF8',
            letterSpacing: -0.5,
            transform: `scale(${pulse})`,
            textShadow: '0 0 25px rgba(56, 189, 248, 0.6)',
          }}
        >
          {countText}
        </div>
      </div>

      {/* Grid Container */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          alignContent: 'flex-start',
          zIndex: 5,
        }}
      >
        {gridCards}
      </div>

      {/* Bottom Telemetry Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: 16,
          marginTop: 16,
          fontSize: 13,
          color: '#64748b',
          zIndex: 10,
        }}
      >
        <span>STATUS: EXPONENTIAL REPLICATION DETECTED</span>
        <span>UPLOAD INGEST RATE: 500+ HRS/MIN + AI FACTORIES</span>
      </div>
    </div>
  );
};
