import React, { useEffect, useRef, useMemo } from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

interface CellPoint {
  x: number;
  y: number;
  z: number;
  cluster: 'healthy' | 'tumor' | 'immune';
  color: string;
}

export const UmapLatentCluster3D: React.FC<{
  width?: number;
  height?: number;
}> = ({ width = 1920, height = 1080 }) => {
  const frame = useCurrentFrame();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate 3 clusters in 3D latent space
  const points = useMemo(() => {
    const list: CellPoint[] = [];

    // Cluster 1: Healthy Cells (Emerald)
    for (let i = 0; i < 280; i++) {
      const r = Math.random() * 150;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.random() * Math.PI;
      list.push({
        x: -360 + r * Math.sin(ph) * Math.cos(th),
        y: -80 + r * Math.sin(ph) * Math.sin(th),
        z: r * Math.cos(ph),
        cluster: 'healthy',
        color: '#10B981',
      });
    }

    // Cluster 2: Activated Immune T-Cells (Cyan)
    for (let i = 0; i < 220; i++) {
      const r = Math.random() * 140;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.random() * Math.PI;
      list.push({
        x: 80 + r * Math.sin(ph) * Math.cos(th),
        y: 240 + r * Math.sin(ph) * Math.sin(th),
        z: r * Math.cos(ph),
        cluster: 'immune',
        color: '#06B6D4',
      });
    }

    // Cluster 3: Tumor/Oncogenic Cells (Rose/Amber)
    for (let i = 0; i < 240; i++) {
      const r = Math.random() * 145;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.random() * Math.PI;
      list.push({
        x: 360 + r * Math.sin(ph) * Math.cos(th),
        y: -180 + r * Math.sin(ph) * Math.sin(th),
        z: r * Math.cos(ph),
        cluster: 'tumor',
        color: '#F43F5E',
      });
    }

    return list;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const theta = (frame * 0.01) % (Math.PI * 2);
    const phi = 0.3 + Math.sin(frame * 0.005) * 0.1;
    const FOV = 800;
    const CAM_DIST = 600;

    // Perturbation shift factor (tumor cells shifting towards healthy)
    const shiftProgress = interpolate(frame % 120, [30, 90], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

    const projected = points.map((p) => {
      let curX = p.x;
      let curY = p.y;
      let curZ = p.z;

      // If tumor, shift towards healthy center (-220, -60, 0)
      if (p.cluster === 'tumor') {
        curX = p.x + (-220 - p.x) * shiftProgress * 0.65;
        curY = p.y + (-60 - p.y) * shiftProgress * 0.65;
      }

      // Rotate Y
      const x1 = curX * Math.cos(theta) - curZ * Math.sin(theta);
      const z1 = curX * Math.sin(theta) + curZ * Math.cos(theta);

      // Rotate X
      const y2 = curY * Math.cos(phi) - z1 * Math.sin(phi);
      const z2 = curY * Math.sin(phi) + z1 * Math.cos(phi);

      const scale = FOV / (FOV + z2 + CAM_DIST);
      const sx = width / 2 + x1 * scale;
      const sy = height / 2 + y2 * scale;

      return {
        sx,
        sy,
        z: z2,
        scale,
        color: p.cluster === 'tumor' && shiftProgress > 0.5 ? '#10B981' : p.color,
      };
    });

    // Z-Sort
    projected.sort((a, b) => a.z - b.z);

    // Draw single-cell transcriptomic points
    projected.forEach((pt) => {
      const alpha = Math.min(1, Math.max(0.2, (pt.z + 300) / 600));
      const rad = 6.5 * pt.scale;

      ctx.save();
      ctx.beginPath();
      ctx.arc(pt.sx, pt.sy, rad, 0, Math.PI * 2);
      ctx.fillStyle = pt.color;
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = 12 * pt.scale;
      ctx.shadowColor = pt.color;
      ctx.fill();
      ctx.restore();
    });

    // Draw Glowing Perturbation Vector Arrow from Tumor to Healthy
    ctx.save();
    const vecStartX = width / 2 + 160 * Math.cos(theta);
    const vecStartY = height / 2 - 80;
    const vecEndX = width / 2 - 150 * Math.cos(theta);
    const vecEndY = height / 2 - 40;

    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(vecStartX, vecStartY);
    ctx.lineTo(vecEndX, vecEndY);
    ctx.stroke();

    // Pulse dot along the perturbation vector
    const pulseT = (frame % 60) / 60;
    const pulseX = vecStartX + (vecEndX - vecStartX) * pulseT;
    const pulseY = vecStartY + (vecEndY - vecStartY) * pulseT;
    ctx.beginPath();
    ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowBlur = 18;
    ctx.shadowColor = '#F59E0B';
    ctx.fill();
    ctx.restore();
  }, [frame, points, width, height]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <canvas ref={canvasRef} width={width} height={height} style={{ width: '100%', height: '100%' }} />

      {/* Latent UMAP Telemetry Badge (Top Left) */}
      <div
        style={{
          position: 'absolute',
          top: 90,
          left: 90,
          background: 'rgba(5, 11, 24, 0.88)',
          border: '1px solid rgba(6, 182, 212, 0.35)',
          borderRadius: 14,
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        }}
      >
        <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 800, letterSpacing: '1.5px' }}>
          3D SINGLE-CELL LATENT MANIFOLD
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
            <span style={{ fontSize: 13, color: '#F8FAFC', fontWeight: 700 }}>Healthy Phenotype</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F43F5E' }} />
            <span style={{ fontSize: 13, color: '#F8FAFC', fontWeight: 700 }}>Malignant Profile</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
            <span style={{ fontSize: 13, color: '#F8FAFC', fontWeight: 700 }}>Perturbation Shift</span>
          </div>
        </div>
      </div>
    </div>
  );
};
