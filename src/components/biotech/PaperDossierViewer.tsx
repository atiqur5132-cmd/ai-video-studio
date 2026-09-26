import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const PaperDossierViewer: React.FC<{
  journal?: string;
  doi?: string;
  headline?: string;
  authors?: string;
  abstract?: string;
}> = ({
  journal = 'NATURE BIOTECHNOLOGY (SEPTEMBER 2026)',
  doi = '10.1038/s41587-026-02489-x',
  headline = 'TAHOE-100M: A GIGA-SCALE SINGLE-CELL PERTURBATION ATLAS FOR VIRTUAL CELL DISCOVERY',
  authors = 'Arc Institute, Stanford University & Chan Zuckerberg Initiative',
  abstract = 'Mapping 502 million single-cell gene expression transcriptomes across 1,142 small-molecule perturbation conditions to enable zero-shot in-silico cellular simulation.',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { stiffness: 100, damping: 15 } });
  const scale = interpolate(frame, [0, 150], [1.0, 1.03], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${entrance * scale})`,
        width: 1440,
        background: 'rgba(3, 7, 18, 0.92)',
        border: '1px solid rgba(16, 185, 129, 0.4)',
        borderRadius: 24,
        padding: '48px 56px',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95), 0 0 50px rgba(16, 185, 129, 0.15)',
        backdropFilter: 'blur(25px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        pointerEvents: 'none',
      }}
    >
      {/* Header Badges */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div
            style={{
              background: '#10B981',
              color: '#000000',
              fontWeight: 900,
              fontSize: 14,
              padding: '6px 14px',
              borderRadius: 8,
              letterSpacing: '1px',
            }}
          >
            {journal}
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#94A3B8',
              fontSize: 14,
              fontWeight: 700,
              padding: '6px 16px',
              borderRadius: 8,
              fontFamily: 'monospace',
            }}
          >
            DOI: {doi}
          </div>
        </div>

        {/* Peer-Reviewed Badge */}
        <div
          style={{
            color: '#10B981',
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: '1.5px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 18 }}>✔</span> PEER-REVIEWED PRIMARY LITERATURE
        </div>
      </div>

      {/* Main Paper Headline */}
      <div
        style={{
          fontSize: 34,
          fontWeight: 900,
          color: '#FFFFFF',
          lineHeight: 1.25,
          letterSpacing: '-0.5px',
          textShadow: '0 4px 20px rgba(0,0,0,0.8)',
        }}
      >
        {headline}
      </div>

      {/* Authors Lab */}
      <div style={{ fontSize: 18, color: '#38BDF8', fontWeight: 700 }}>
        {authors}
      </div>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '4px 0' }} />

      {/* Abstract Excerpt */}
      <div
        style={{
          fontSize: 20,
          color: '#CBD5E1',
          lineHeight: 1.6,
          fontWeight: 500,
          fontStyle: 'italic',
        }}
      >
        "{abstract}"
      </div>
    </div>
  );
};
