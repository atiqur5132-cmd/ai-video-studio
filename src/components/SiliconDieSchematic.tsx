import React from 'react';
import { useCurrentFrame } from 'remotion';

interface SiliconDieSchematicProps {
  color?: string;
  label?: string;
}

export const SiliconDieSchematic: React.FC<SiliconDieSchematicProps> = ({
  color = '#00F0FF',
  label = 'NEURAL CO-PROCESSOR ARCHITECTURE',
}) => {
  const frame = useCurrentFrame();
  const scanY = (frame * 4) % 400;

  return (
    <div
      style={{
        position: 'relative',
        width: 440,
        height: 380,
        background: 'rgba(10, 15, 29, 0.75)',
        border: `1.5px solid ${color}40`,
        borderRadius: 16,
        boxShadow: `0 20px 50px rgba(0,0,0,0.8), 0 0 30px ${color}20`,
        backdropFilter: 'blur(16px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Header */}
      <div
        style={{
          padding: '10px 16px',
          borderBottom: `1px solid ${color}30`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.4)',
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, monospace, sans-serif',
            fontSize: 12,
            fontWeight: 800,
            color: color,
            letterSpacing: '0.1em',
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#10B981',
            background: 'rgba(16, 185, 129, 0.15)',
            padding: '2px 8px',
            borderRadius: 6,
          }}
        >
          ACTIVE_STATE
        </span>
      </div>

      {/* Schematic Grid Body */}
      <div style={{ position: 'relative', flex: 1, padding: 16 }}>
        {/* Moving Laser Scanline */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: scanY,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            boxShadow: `0 0 15px ${color}`,
            zIndex: 10,
          }}
        />

        {/* Die Core Modules */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
            height: '100%',
          }}
        >
          {[
            'TENSOR CORE A1',
            'LATENT REASONING',
            'TENSOR CORE A2',
            '80K CONTEXT CACHE',
            'EXECUTION MATRIX',
            'VOXEL PHYSICS DIE',
            'FP8 SYNAPSE CLUSTER',
            'DMA INTERCONNECT',
            'HIGH-BW MEMORY',
          ].map((block, idx) => {
            const isHighlight = (idx + Math.floor(frame / 15)) % 9 === 0;
            return (
              <div
                key={idx}
                style={{
                  background: isHighlight ? `${color}25` : 'rgba(255,255,255,0.03)',
                  border: isHighlight
                    ? `1.5px solid ${color}`
                    : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8,
                  padding: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'background 0.2s',
                  boxShadow: isHighlight ? `0 0 16px ${color}40` : 'none',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: isHighlight ? color : 'rgba(255,255,255,0.2)',
                    marginBottom: 6,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 9,
                    fontWeight: 700,
                    color: isHighlight ? '#FFFFFF' : '#94A3B8',
                    textAlign: 'center',
                    lineHeight: 1.2,
                  }}
                >
                  {block}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
