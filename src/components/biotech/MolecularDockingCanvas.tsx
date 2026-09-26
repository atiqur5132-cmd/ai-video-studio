import React from 'react';
import { useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const MolecularDockingCanvas: React.FC<{
  targetName?: string;
  ligandName?: string;
  bindingAffinity?: string;
  deltaG?: string;
}> = ({
  targetName = 'VIRTUAL CELL TARGET',
  ligandName = 'PERTURBATION VECTOR-9',
  bindingAffinity = '0.35 nM',
  deltaG = '-13.4 kcal/mol',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const hudSpring = spring({ frame, fps, config: { stiffness: 120, damping: 14 } });
  const lockOn = frame > 45;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      {/* Targeting Reticle Center */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 360,
          height: 360,
          transform: `translate(-50%, -50%) scale(${hudSpring})`,
          border: `2px dashed ${lockOn ? '#10B981' : '#06B6D4'}`,
          borderRadius: '50%',
          boxShadow: `0 0 35px ${lockOn ? 'rgba(16, 185, 129, 0.45)' : 'rgba(6, 182, 212, 0.35)'}`,
          transition: 'all 0.3s ease',
        }}
      >
        {/* Crosshair lines */}
        <div style={{ position: 'absolute', top: '50%', left: -25, right: -25, height: 1, background: 'rgba(255,255,255,0.25)' }} />
        <div style={{ position: 'absolute', left: '50%', top: -25, bottom: -25, width: 1, background: 'rgba(255,255,255,0.25)' }} />

        {/* Lock-on Badge */}
        <div
          style={{
            position: 'absolute',
            top: -18,
            left: '50%',
            transform: 'translateX(-50%)',
            background: lockOn ? '#10B981' : '#06B6D4',
            color: '#000000',
            fontWeight: 900,
            fontSize: 13,
            padding: '4px 14px',
            borderRadius: 14,
            letterSpacing: '1.5px',
          }}
        >
          {lockOn ? 'ACTIVE SITE LOCKED' : 'SEARCHING CONFORMATION'}
        </div>
      </div>

      {/* Floating Scientific Telemetry HUD (Top-Right) */}
      <div
        style={{
          position: 'absolute',
          top: 90,
          right: 90,
          background: 'rgba(5, 11, 24, 0.88)',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          backdropFilter: 'blur(24px)',
          borderRadius: 18,
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          opacity: hudSpring,
        }}
      >
        <div style={{ fontSize: 13, color: '#94A3B8', letterSpacing: '2px', fontWeight: 800 }}>
          IN-SILICO DOCKING TELEMETRY
        </div>
        <div style={{ fontSize: 24, color: '#FFFFFF', fontWeight: 900 }}>
          {targetName} <span style={{ color: '#10B981', fontSize: 16 }}>: {ligandName}</span>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '4px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 36 }}>
          <span style={{ color: '#64748B', fontSize: 16, fontWeight: 600 }}>BINDING AFFINITY (Kd):</span>
          <span style={{ color: '#10B981', fontWeight: 900, fontSize: 18 }}>{bindingAffinity}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 36 }}>
          <span style={{ color: '#64748B', fontSize: 16, fontWeight: 600 }}>FREE ENERGY (ΔG):</span>
          <span style={{ color: '#38BDF8', fontWeight: 900, fontSize: 18 }}>{deltaG}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 36 }}>
          <span style={{ color: '#64748B', fontSize: 16, fontWeight: 600 }}>PREDICTION CONFIDENCE:</span>
          <span style={{ color: '#F59E0B', fontWeight: 900, fontSize: 18 }}>99.4%</span>
        </div>
      </div>
    </div>
  );
};
