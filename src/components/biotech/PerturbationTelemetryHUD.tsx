import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

export const PerturbationTelemetryHUD: React.FC<{
  title?: string;
  totalCells?: string;
  totalDrugs?: string;
  perturbationEfficiency?: string;
}> = ({
  title = 'TAHOE-100M SINGLE-CELL PERTURBATION ATLAS',
  totalCells = '502,410,290',
  totalDrugs = '1,142 COMPOUNDS',
  perturbationEfficiency = '99.82%',
}) => {
  const frame = useCurrentFrame();

  // Animated gene expression heat matrix (8x6 grid)
  const rows = 6;
  const cols = 10;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 80,
        left: 80,
        right: 80,
        background: 'rgba(3, 7, 18, 0.88)',
        border: '1px solid rgba(6, 182, 212, 0.35)',
        backdropFilter: 'blur(20px)',
        borderRadius: 20,
        padding: '24px 36px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
        pointerEvents: 'none',
      }}
    >
      {/* Left: Summary Metrics */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 13, color: '#38BDF8', letterSpacing: '2px', fontWeight: 800 }}>
          {title}
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'baseline', marginTop: 4 }}>
          <div>
            <span style={{ fontSize: 13, color: '#64748B', display: 'block' }}>PROFILED CELLS:</span>
            <span style={{ fontSize: 26, fontWeight: 900, color: '#10B981' }}>{totalCells}</span>
          </div>
          <div>
            <span style={{ fontSize: 13, color: '#64748B', display: 'block' }}>PERTURBED DRUGS:</span>
            <span style={{ fontSize: 26, fontWeight: 900, color: '#06B6D4' }}>{totalDrugs}</span>
          </div>
          <div>
            <span style={{ fontSize: 13, color: '#64748B', display: 'block' }}>MODEL RESOLUTION:</span>
            <span style={{ fontSize: 26, fontWeight: 900, color: '#F59E0B' }}>SINGLE-CELL RNA</span>
          </div>
        </div>
      </div>

      {/* Right: Real-time Gene Expression Heatmap Matrix */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
        <div style={{ fontSize: 12, color: '#64748B', letterSpacing: '1.5px', fontWeight: 700 }}>
          GENE TRANSCRIPTION FLUCTUATION
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 16px)`, gap: 4 }}>
          {Array.from({ length: rows * cols }).map((_, idx) => {
            const freq = 0.08 + (idx % 7) * 0.02;
            const val = (Math.sin(frame * freq + idx) + 1) / 2;
            const bg =
              val > 0.75 ? '#10B981' : val > 0.45 ? '#06B6D4' : val > 0.2 ? '#3B82F6' : '#1E293B';
            return (
              <div
                key={idx}
                style={{
                  width: 16,
                  height: 12,
                  borderRadius: 2,
                  background: bg,
                  opacity: 0.85,
                  boxShadow: val > 0.75 ? '0 0 8px rgba(16,185,129,0.6)' : 'none',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
