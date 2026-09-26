import React, { useEffect, useRef } from 'react';
import { useCurrentFrame } from 'remotion';

export const CellularMetropolis3D: React.FC<{
  width?: number;
  height?: number;
}> = ({ width = 1920, height = 1080 }) => {
  const frame = useCurrentFrame();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2 - 20;

    // 1. Microtubule Cytoskeletal Rail Highways (Radiating curved splines)
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.lineWidth = 2;
    ctx.setLineDash([12, 8]);
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
      ctx.beginPath();
      ctx.moveTo(centerX + Math.cos(angle) * 120, centerY + Math.sin(angle) * 120);
      ctx.quadraticCurveTo(
        centerX + Math.cos(angle + 0.3) * 320,
        centerY + Math.sin(angle + 0.3) * 320,
        centerX + Math.cos(angle) * 580,
        centerY + Math.sin(angle) * 580
      );
      ctx.stroke();

      // Vesicle transport along microtubules
      const vT = ((frame * 0.015 + angle) % 1);
      const vx = (centerX + Math.cos(angle) * 120) * (1 - vT) + (centerX + Math.cos(angle) * 580) * vT;
      const vy = (centerY + Math.sin(angle) * 120) * (1 - vT) + (centerY + Math.sin(angle) * 580) * vT;

      ctx.save();
      ctx.beginPath();
      ctx.arc(vx, vy, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#10B981';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#10B981';
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();

    // 2. Mitochondria Powerhouses (Ellipsoids with Cristae Folds)
    const mitoPositions = [
      { x: centerX - 360, y: centerY - 140, rot: -0.4 },
      { x: centerX + 340, y: centerY + 120, rot: 0.5 },
      { x: centerX - 240, y: centerY + 220, rot: 0.8 },
      { x: centerX + 280, y: centerY - 200, rot: -0.6 },
    ];

    mitoPositions.forEach((mito) => {
      ctx.save();
      ctx.translate(mito.x, mito.y);
      ctx.rotate(mito.rot + Math.sin(frame * 0.02) * 0.05);

      // Outer Membrane
      ctx.beginPath();
      ctx.ellipse(0, 0, 90, 48, 0, 0, Math.PI * 2);
      const mitoGrad = ctx.createRadialGradient(-10, -10, 5, 0, 0, 90);
      mitoGrad.addColorStop(0, '#F59E0B');
      mitoGrad.addColorStop(0.6, '#B45309');
      mitoGrad.addColorStop(1, '#451A03');
      ctx.fillStyle = mitoGrad;
      ctx.shadowBlur = 25;
      ctx.shadowColor = '#F59E0B';
      ctx.fill();
      ctx.strokeStyle = '#FDE68A';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Inner Cristae Folds (Zig-zag)
      ctx.strokeStyle = '#FEF3C7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-60, -15);
      ctx.lineTo(-40, 15);
      ctx.lineTo(-20, -15);
      ctx.lineTo(0, 15);
      ctx.lineTo(20, -15);
      ctx.lineTo(40, 15);
      ctx.lineTo(60, -15);
      ctx.stroke();
      ctx.restore();
    });

    // 3. Endoplasmic Reticulum (Curving layered ribbons around nucleus)
    ctx.save();
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.6)';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#8B5CF6';

    for (let r = 160; r <= 220; r += 24) {
      ctx.beginPath();
      for (let a = 0.4; a < Math.PI * 1.6; a += 0.1) {
        const fold = Math.sin(a * 8 + frame * 0.04) * 10;
        const x = centerX + Math.cos(a) * (r + fold);
        const y = centerY + Math.sin(a) * (r + fold) * 0.7;
        if (a === 0.4) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();

    // 4. Central Giant Nucleus with Glowing Nuclear Pores
    ctx.save();
    const nucleusRadius = 110;
    ctx.beginPath();
    ctx.arc(centerX, centerY, nucleusRadius, 0, Math.PI * 2);

    const nucGrad = ctx.createRadialGradient(centerX - 25, centerY - 25, 10, centerX, centerY, nucleusRadius);
    nucGrad.addColorStop(0, '#FDA4AF');
    nucGrad.addColorStop(0.4, '#F43F5E');
    nucGrad.addColorStop(0.85, '#881337');
    nucGrad.addColorStop(1, '#030712');

    ctx.fillStyle = nucGrad;
    ctx.shadowBlur = 40;
    ctx.shadowColor = '#F43F5E';
    ctx.fill();

    // Nuclear Pores Ring
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 12]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, nucleusRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Nucleolus core
    ctx.beginPath();
    ctx.arc(centerX - 15, centerY - 15, 35, 0, Math.PI * 2);
    ctx.fillStyle = '#FFE4E6';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#FFFFFF';
    ctx.fill();
    ctx.restore();
  }, [frame, width, height]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <canvas ref={canvasRef} width={width} height={height} style={{ width: '100%', height: '100%' }} />

      {/* Cellular Metropolis Legend HUD */}
      <div
        style={{
          position: 'absolute',
          top: 90,
          right: 90,
          background: 'rgba(5, 11, 24, 0.88)',
          border: '1px solid rgba(244, 63, 94, 0.35)',
          borderRadius: 14,
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        }}
      >
        <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 800, letterSpacing: '1.5px' }}>
          CELLULAR METROPOLIS ARTIFACTS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F43F5E' }} />
            <span style={{ fontSize: 13, color: '#F8FAFC', fontWeight: 700 }}>Nucleus & Genome Core</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
            <span style={{ fontSize: 13, color: '#F8FAFC', fontWeight: 700 }}>Mitochondrial Energy Grid</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
            <span style={{ fontSize: 13, color: '#F8FAFC', fontWeight: 700 }}>Vesicular Cargo Logistics</span>
          </div>
        </div>
      </div>
    </div>
  );
};
