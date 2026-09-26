import React from 'react';
import { Img, staticFile, useCurrentFrame, interpolate, useVideoConfig } from 'remotion';

export const CrisprCas9ComplexViewer3D: React.FC<{
  title?: string;
  targetGene?: string;
  startFrame?: number;
}> = ({
  title = 'CRISPR-CAS9 TARGETED PERTURBATION ENGINE',
  targetGene = 'PDB: 5F9R [CAS9 ENDONUCLEASE COMPLEX]',
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = startFrame !== undefined ? Math.max(0, frame - startFrame) : frame;

  // 3D Orbital perspective rotation
  const rotY = Math.sin(relFrame * 0.02) * 22;
  const rotX = Math.cos(relFrame * 0.018) * 14;
  const floatY = Math.sin(relFrame * 0.035) * 12;
  const scale = interpolate(relFrame, [0, 140], [1.0, 1.05], { extrapolateRight: 'clamp' });

  // Cleavage laser progress
  const laserAngle = (relFrame * 1.8) % 360;

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
      {/* 3D Perspective Ground Grid */}
      <div
        style={{
          position: 'absolute',
          bottom: '-12%',
          width: 1500,
          height: 600,
          backgroundImage:
            'linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'perspective(600px) rotateX(65deg)',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      {/* Centerpiece: Authentic 3D CRISPR-Cas9 Complex from RCSB PDB */}
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
            'drop-shadow(0 0 40px rgba(139, 92, 246, 0.55)) drop-shadow(0 25px 60px rgba(0, 0, 0, 0.95))',
        }}
      >
        <Img
          src={staticFile('evidence/crispr_cas9_complex.png')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />

        {/* Orbiting Cleavage Targeting Ring */}
        <div
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            border: '2px dashed rgba(168, 85, 247, 0.45)',
            transform: `rotate(${laserAngle}deg)`,
            boxShadow: '0 0 35px rgba(168, 85, 247, 0.25)',
          }}
        />

        {/* Inner Targeting Crosshair */}
        <div
          style={{
            position: 'absolute',
            width: 160,
            height: 160,
            border: '1px solid rgba(236, 72, 153, 0.5)',
            borderRadius: '50%',
            transform: `rotate(-${laserAngle * 1.5}deg)`,
          }}
        />
      </div>

      {/* Left Column: Spacious, High-Visibility Telemetry HUD Cards */}
      <div
        style={{
          position: 'absolute',
          left: 90,
          top: 130,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          width: 460,
        }}
      >
        <div
          style={{
            background: 'rgba(3, 7, 18, 0.94)',
            border: '1.5px solid rgba(139, 92, 246, 0.45)',
            borderRadius: 22,
            padding: '28px 34px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(139, 92, 246, 0.15)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <div style={{ fontSize: 13, color: '#C084FC', fontWeight: 800, letterSpacing: '2px' }}>
            {title}
          </div>
          <div style={{ fontSize: 24, fontWeight: 950, color: '#F8FAFC', marginTop: 8, lineHeight: 1.2 }}>
            {targetGene}
          </div>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '14px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>CLEAVAGE SPECIFICITY:</span>
            <span style={{ color: '#10B981', fontWeight: 900, fontSize: 16 }}>99.98% ON-TARGET</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>PAM SITE MOTIF:</span>
            <span style={{ color: '#C084FC', fontWeight: 900, fontSize: 16 }}>5&apos;-NGG-3&apos; CANONICAL</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>SINGLE-GUIDE RNA:</span>
            <span style={{ color: '#38BDF8', fontWeight: 900, fontSize: 16 }}>20-NT COMPLEMENTARY</span>
          </div>
        </div>

        {/* Live Perturbation Counter Card */}
        <div
          style={{
            background: 'rgba(3, 7, 18, 0.94)',
            border: '1.5px solid rgba(16, 185, 129, 0.45)',
            borderRadius: 20,
            padding: '24px 34px',
            backdropFilter: 'blur(24px)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
          }}
        >
          <div style={{ fontSize: 13, color: '#94A3B8', fontWeight: 800, letterSpacing: '2px' }}>
            PERTURB-SEQ SYSTEM
          </div>
          <div style={{ fontSize: 36, fontWeight: 950, color: '#10B981', marginTop: 6, lineHeight: 1.1 }}>
            502,000,000 CELLS
          </div>
          <div style={{ fontSize: 13, color: '#64748B', fontWeight: 700, marginTop: 4 }}>
            HIGH-THROUGHPUT SYSTEMATIC KNOCKOUTS
          </div>
        </div>
      </div>

      {/* Top Right: Status Badge */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          right: 80,
          background: 'rgba(3, 7, 18, 0.94)',
          border: '1.5px solid rgba(139, 92, 246, 0.45)',
          borderRadius: 18,
          padding: '18px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#A855F7',
            boxShadow: '0 0 16px #A855F7',
          }}
        />
        <span style={{ fontSize: 15, fontWeight: 900, color: '#F8FAFC', letterSpacing: '1px' }}>
          GENETIC CODE INTERFERENCE ACTIVE
        </span>
      </div>
    </div>
  );
};
