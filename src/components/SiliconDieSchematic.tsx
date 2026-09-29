import React from 'react';
import { useCurrentFrame } from 'remotion';

interface SiliconDieSchematicProps {
  color?: string;
  label?: string;
  fullCanvas?: boolean;
}

export const SiliconDieSchematic: React.FC<SiliconDieSchematicProps> = ({
  color = '#00F0FF',
  label = 'NEURAL VIDEO DIFFUSION ENGINE // SILICON MATRIX',
  fullCanvas = true,
}) => {
  const frame = useCurrentFrame();
  const scanY = (frame * 5) % 550;

  if (fullCanvas) {
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
              linear-gradient(to bottom, transparent, ${color}12 50%, rgba(2, 5, 12, 0.95)),
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255, 255, 255, 0.06) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255, 255, 255, 0.06) 40px)
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
            background: `radial-gradient(circle, ${color}16 0%, transparent 65%)`,
            filter: 'blur(80px)',
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
            backgroundColor: `${color}18`,
            border: `1px solid ${color}40`,
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
              backgroundColor: color,
              boxShadow: `0 0 12px ${color}`,
            }}
          />
          <span
            style={{
              fontFamily: 'Montserrat, Inter, sans-serif',
              fontSize: 13,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: 2.5,
              textTransform: 'uppercase',
            }}
          >
            {label}
          </span>
        </div>

        {/* Grand 2.5D Semiconductor Die Matrix (Spanning 1100px) */}
        <div
          style={{
            width: 1100,
            height: 560,
            backgroundColor: '#070d18',
            borderRadius: 24,
            border: `2px solid ${color}60`,
            boxShadow: `0 30px 80px rgba(0, 0, 0, 0.95), 0 0 50px ${color}20`,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(20deg) translateY(-20px)',
            zIndex: 15,
          }}
        >
          {/* Laser Scanning Bar */}
          <div
            style={{
              position: 'absolute',
              top: scanY,
              left: 0,
              right: 0,
              height: 4,
              backgroundColor: color,
              boxShadow: `0 0 25px ${color}, 0 0 50px ${color}`,
              zIndex: 30,
            }}
          />

          {/* 16-Core Matrix Blocks Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
              width: 960,
              height: 440,
              zIndex: 10,
            }}
          >
            {Array.from({ length: 16 }).map((_, idx) => {
              const isActive = (idx + Math.floor(frame / 6)) % 4 === 0;

              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: isActive ? 'rgba(0, 240, 255, 0.12)' : '#0a1424',
                    border: `1.5px solid ${isActive ? color : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: 12,
                    boxShadow: isActive ? `0 0 20px ${color}30` : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 14,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 900, color: isActive ? color : '#64748B' }}>
                      NPU_{idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: isActive ? '#10B981' : '#64748B',
                        boxShadow: isActive ? '0 0 8px #10B981' : 'none',
                      }}
                    />
                  </div>

                  <div style={{ fontSize: 18, fontWeight: 900, color: '#FFFFFF' }}>
                    {isActive ? 'ACTIVE' : 'READY'}
                  </div>

                  {/* Micro circuit line */}
                  <div
                    style={{
                      width: '100%',
                      height: 2,
                      backgroundColor: isActive ? color : 'rgba(255, 255, 255, 0.08)',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean Status Ticker above bottom punch zone */}
        <div
          style={{
            position: 'absolute',
            bottom: 120,
            textAlign: 'center',
            zIndex: 20,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: '#64748B', letterSpacing: 3 }}>
            COMPUTATIONAL INFERENCE CONVERTS SILICON POWER DIRECTLY INTO MILLIONS OF VIDEO FRAMES.
          </div>
        </div>
      </div>
    );
  }

  // Compact Inline Mode
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
            borderRadius: 4,
          }}
        >
          ONLINE
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          top: scanY,
          left: 0,
          right: 0,
          height: 2,
          backgroundColor: color,
          boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
        }}
      />
    </div>
  );
};
