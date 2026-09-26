import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const AttritionSpeedometerGauge: React.FC<{
  startFrame?: number;
}> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = startFrame !== undefined ? Math.max(0, frame - startFrame) : frame;

  // Needle spring from 0 to 90%
  const needleSpring = spring({
    frame: relFrame,
    fps,
    config: { stiffness: 90, damping: 12 },
  });

  const failureRate = Math.min(90, Math.round(needleSpring * 90));
  const cost = (needleSpring * 2.6).toFixed(1);
  const years = Math.min(14, Math.round(needleSpring * 14));

  // Gauge angle (-140 deg to +140 deg)
  const angle = -140 + needleSpring * 252; // 90% of 280 deg

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 60,
          background: 'rgba(5, 11, 24, 0.94)',
          border: '1.5px solid rgba(239, 68, 68, 0.45)',
          borderRadius: 28,
          padding: '48px 64px',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(239, 68, 68, 0.2)',
          backdropFilter: 'blur(25px)',
          alignItems: 'center',
        }}
      >
        {/* Speedometer Circular Arc */}
        <div
          style={{
            position: 'relative',
            width: 280,
            height: 280,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="280" height="280" viewBox="0 0 280 280">
            {/* Background Arc */}
            <circle
              cx="140"
              cy="140"
              r="110"
              fill="none"
              stroke="#1E293B"
              strokeWidth="18"
              strokeDasharray="520"
              strokeDashoffset="130"
              strokeLinecap="round"
              transform="rotate(135 140 140)"
            />
            {/* Danger Arc (Red/Amber) */}
            <circle
              cx="140"
              cy="140"
              r="110"
              fill="none"
              stroke="#EF4444"
              strokeWidth="18"
              strokeDasharray="520"
              strokeDashoffset={520 - needleSpring * 390}
              strokeLinecap="round"
              transform="rotate(135 140 140)"
              style={{ filter: 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.8))' }}
            />
          </svg>

          {/* Center Digital Readout */}
          <div style={{ position: 'absolute', textAlign: 'center' }}>
            <div style={{ fontSize: 58, fontWeight: 950, color: '#EF4444', lineHeight: 1 }}>
              {failureRate}%
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: '#94A3B8',
                letterSpacing: '1.5px',
                marginTop: 4,
              }}
            >
              CLINICAL ATTRITION
            </div>
          </div>
        </div>

        <div style={{ width: 1, height: 200, background: 'rgba(255, 255, 255, 0.12)' }} />

        {/* Telemetry Numbers Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div>
            <div style={{ fontSize: 14, color: '#94A3B8', fontWeight: 800, letterSpacing: '2px' }}>
              AVERAGE R&D CASH BURN
            </div>
            <div style={{ fontSize: 48, fontWeight: 950, color: '#F59E0B' }}>
              ${cost} BILLION
            </div>
          </div>
          <div>
            <div style={{ fontSize: 14, color: '#94A3B8', fontWeight: 800, letterSpacing: '2px' }}>
              DEVELOPMENT TIMELINE
            </div>
            <div style={{ fontSize: 48, fontWeight: 950, color: '#38BDF8' }}>
              {years} YEARS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
