import React from 'react';
import { Img, staticFile, useCurrentFrame, interpolate, useVideoConfig } from 'remotion';

export const HighThroughputScreeningMatrix: React.FC<{
  targetName?: string;
  totalMolecules?: string;
  startFrame?: number;
}> = ({
  targetName = 'ONCOGENIC KRAS-G12D INHIBITOR COMPLEX',
  totalMolecules = '10,000,000',
  startFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = startFrame !== undefined ? Math.max(0, frame - startFrame) : frame;

  // Screen count progression
  const countProgress = interpolate(relFrame, [0, 90], [9820000, 10000000], {
    extrapolateRight: 'clamp',
  });
  const formattedCount = Math.floor(countProgress).toLocaleString();

  // Floating rotation
  const rotY = Math.sin(relFrame * 0.02) * 18;
  const rotX = Math.cos(relFrame * 0.015) * 10;
  const scale = interpolate(relFrame, [0, 120], [1.0, 1.04], { extrapolateRight: 'clamp' });

  // Candidate compound streams
  const candidates = [
    { id: 'CMPD-894201', kd: '0.24 nM', deltaG: '-14.8 kcal/mol', status: 'LEAD CANDIDATE', color: '#10B981' },
    { id: 'CMPD-894202', kd: '1.82 nM', deltaG: '-11.2 kcal/mol', status: 'PASS', color: '#38BDF8' },
    { id: 'CMPD-894203', kd: '48.5 nM', deltaG: '-8.4 kcal/mol', status: 'FILTERED', color: '#64748B' },
    { id: 'CMPD-894204', kd: '0.31 nM', deltaG: '-14.1 kcal/mol', status: 'LEAD CANDIDATE', color: '#10B981' },
  ];

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
            'linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'perspective(600px) rotateX(65deg)',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      {/* Left Column: High-Throughput Screening Counter & Telemetry */}
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
            border: '1.5px solid rgba(16, 185, 129, 0.45)',
            borderRadius: 22,
            padding: '28px 34px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(16, 185, 129, 0.15)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <div style={{ fontSize: 13, color: '#94A3B8', fontWeight: 800, letterSpacing: '2px' }}>
            IN-SILICO SCREENING RUN
          </div>
          <div style={{ fontSize: 48, fontWeight: 950, color: '#10B981', lineHeight: 1.1, marginTop: 6 }}>
            {formattedCount}
          </div>
          <div style={{ fontSize: 15, color: '#38BDF8', fontWeight: 800, marginTop: 4 }}>
            MOLECULES EVALUATED / 48 HRS
          </div>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '14px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>THROUGHPUT:</span>
            <span style={{ color: '#F8FAFC', fontWeight: 900, fontSize: 16 }}>58,000 MOL / SEC</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>SEARCH ALGORITHM:</span>
            <span style={{ color: '#F59E0B', fontWeight: 900, fontSize: 16 }}>GENERATIVE DIFFUSION</span>
          </div>
        </div>

        {/* Live Filter Stream */}
        <div
          style={{
            background: 'rgba(3, 7, 18, 0.92)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            borderRadius: 18,
            padding: '22px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
          }}
        >
          <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 800, letterSpacing: '1.5px' }}>
            TOP AFFINITY CANDIDATES
          </div>
          {candidates.map((c, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14 }}>
              <span style={{ fontFamily: 'monospace', color: '#F8FAFC', fontWeight: 700 }}>{c.id}</span>
              <span style={{ color: '#38BDF8', fontWeight: 900, fontSize: 15 }}>{c.kd}</span>
              <span style={{ color: c.color, fontWeight: 900, background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: 6, fontSize: 12 }}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Centerpiece: Authentic 3D KRAS Crystal Structure from RCSB PDB */}
      <div
        style={{
          position: 'relative',
          width: 580,
          height: 580,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `perspective(1000px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(${scale})`,
          filter:
            'drop-shadow(0 0 45px rgba(6, 182, 212, 0.55)) drop-shadow(0 25px 60px rgba(0, 0, 0, 0.95))',
        }}
      >
        <Img
          src={staticFile('evidence/kras_crystal_structure.png')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />

        {/* Dynamic Targeting Reticle */}
        <div
          style={{
            position: 'absolute',
            width: 440,
            height: 440,
            borderRadius: '50%',
            border: '2px dashed rgba(16, 185, 129, 0.5)',
            transform: `rotate(${relFrame * -0.6}deg)`,
            boxShadow: '0 0 35px rgba(16, 185, 129, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -24,
            background: '#10B981',
            color: '#000000',
            fontWeight: 900,
            fontSize: 13,
            padding: '4px 16px',
            borderRadius: 14,
            letterSpacing: '1px',
          }}
        >
          TARGET POCKET ENGAGED
        </div>
      </div>

      {/* Right Column: Binding Affinity Radar & Crystal HUD */}
      <div
        style={{
          position: 'absolute',
          right: 90,
          top: 130,
          background: 'rgba(3, 7, 18, 0.94)',
          border: '1.5px solid rgba(16, 185, 129, 0.45)',
          borderRadius: 22,
          padding: '28px 34px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(16, 185, 129, 0.15)',
          backdropFilter: 'blur(24px)',
          width: 440,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: '#94A3B8', fontWeight: 800, letterSpacing: '2px' }}>
            CRYSTALLOGRAPHIC PROOF
          </span>
          <span style={{ background: '#10B981', color: '#000000', fontWeight: 900, fontSize: 12, padding: '4px 10px', borderRadius: 6 }}>
            PDB: 4OBE
          </span>
        </div>
        <div style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 950, lineHeight: 1.2 }}>
          {targetName}
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '4px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>BINDING AFFINITY:</span>
          <span style={{ color: '#10B981', fontWeight: 950, fontSize: 17 }}>0.24 nM (SUPER-TIGHT)</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
          <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>OFF-TARGET BINDING:</span>
          <span style={{ color: '#38BDF8', fontWeight: 950, fontSize: 17 }}>0.00% (SELECTIVE)</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
          <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>IN-SILICO HIT RATE:</span>
          <span style={{ color: '#F59E0B', fontWeight: 950, fontSize: 17 }}>1 IN 10,000</span>
        </div>
      </div>
    </div>
  );
};
