import React from 'react';
import { Img, staticFile, useCurrentFrame, interpolate, useVideoConfig } from 'remotion';

export const VolumetricDnaGenomeViewer: React.FC<{
  title?: string;
  locus?: string;
  startFrame?: number;
}> = ({
  title = 'WHOLE-GENOME LATENT RECONSTRUCTION',
  locus = 'CHR 12 : 25,245,300 - 25,248,800 [KRAS GENE LOCUS]',
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = startFrame !== undefined ? Math.max(0, frame - startFrame) : frame;

  // 3D Orbital perspective rotation
  const rotY = Math.sin(relFrame * 0.02) * 25;
  const rotX = Math.cos(relFrame * 0.015) * 12;
  const floatY = Math.sin(relFrame * 0.04) * 15;
  const scale = interpolate(relFrame, [0, 150], [1.0, 1.05], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* 3D Perspective Coordinate Floor Grid */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          width: 1400,
          height: 600,
          backgroundImage:
            'linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'perspective(600px) rotateX(65deg)',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      {/* Centerpiece: Authentic 3D B-DNA Crystal Structure from RCSB PDB */}
      <div
        style={{
          position: 'relative',
          width: 620,
          height: 620,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `perspective(1000px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(${floatY}px) scale(${scale})`,
          filter:
            'drop-shadow(0 0 35px rgba(16, 185, 129, 0.55)) drop-shadow(0 20px 50px rgba(0, 0, 0, 0.95))',
        }}
      >
        <Img
          src={staticFile('evidence/dna_crystal_structure.png')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />

        {/* Orbiting Laser Targeting Ring */}
        <div
          style={{
            position: 'absolute',
            width: 480,
            height: 480,
            borderRadius: '50%',
            border: '2px dashed rgba(6, 182, 212, 0.45)',
            transform: `rotate(${relFrame * 0.8}deg)`,
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.25)',
          }}
        />
      </div>

      {/* Top Right: Spacious, Legible Genomic Locus Browser Telemetry */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          right: 80,
          maxWidth: 540,
          background: 'rgba(3, 7, 18, 0.94)',
          border: '1.5px solid rgba(6, 182, 212, 0.45)',
          borderRadius: 22,
          padding: '28px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(6, 182, 212, 0.15)',
          backdropFilter: 'blur(24px)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 13, color: '#38BDF8', fontWeight: 800, letterSpacing: '2px' }}>
            {title}
          </span>
          <span
            style={{
              background: '#06B6D4',
              color: '#000000',
              fontWeight: 900,
              fontSize: 12,
              padding: '4px 10px',
              borderRadius: 6,
            }}
          >
            PDB: 1BNA (B-DNA)
          </span>
        </div>

        <div style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 950, fontFamily: 'monospace', letterSpacing: '-0.5px' }}>
          {locus}
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '4px 0' }} />

        {/* Base-Pair Sequence Display */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: '#94A3B8', fontWeight: 800, letterSpacing: '1px' }}>
            READ:
          </span>
          {['5\'-C', 'G', 'C', 'G', 'A', 'A', 'T', 'T', 'C', 'G', 'C', 'G-3\''].map((base, idx) => (
            <span
              key={idx}
              style={{
                fontSize: 14,
                fontWeight: 900,
                color: base.includes('A')
                  ? '#10B981'
                  : base.includes('T')
                  ? '#F43F5E'
                  : base.includes('G')
                  ? '#06B6D4'
                  : '#F59E0B',
                background: 'rgba(255,255,255,0.08)',
                padding: '3px 8px',
                borderRadius: 5,
                fontFamily: 'monospace',
              }}
            >
              {base}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
