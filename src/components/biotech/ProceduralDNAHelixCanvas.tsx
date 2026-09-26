import React, { useEffect, useRef } from 'react';
import { useCurrentFrame } from 'remotion';

export const ProceduralDNAHelixCanvas: React.FC<{
  width?: number;
  height?: number;
  rotationSpeed?: number;
}> = ({ width = 1920, height = 1080, rotationSpeed = 0.015 }) => {
  const frame = useCurrentFrame();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const basePairs = 42;
    const radius = 140;
    const verticalPitch = 26;
    const FOV = 800;
    const CAM_DIST = 500;

    interface HelixItem {
      type: 'rung' | 'node';
      x: number;
      y: number;
      z: number;
      scale: number;
      color: string;
      radius?: number;
      p1?: { sx: number; sy: number };
      p2?: { sx: number; sy: number };
    }

    const items: HelixItem[] = [];

    for (let i = 0; i < basePairs; i++) {
      const angle = i * 0.44 + frame * rotationSpeed;
      const y = (i - basePairs / 2) * verticalPitch;

      // Strand 1
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;

      // Strand 2 (anti-parallel offset)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      const scale1 = FOV / (FOV + z1 + CAM_DIST);
      const sx1 = width / 2 + x1 * scale1;
      const sy1 = height / 2 + y * scale1;

      const scale2 = FOV / (FOV + z2 + CAM_DIST);
      const sx2 = width / 2 + x2 * scale2;
      const sy2 = height / 2 + y * scale2;

      // Base pair connector rung
      items.push({
        type: 'rung',
        x: 0,
        y,
        z: (z1 + z2) / 2,
        scale: (scale1 + scale2) / 2,
        color: 'rgba(255, 255, 255, 0.35)',
        p1: { sx: sx1, sy: sy1 },
        p2: { sx: sx2, sy: sy2 },
      });

      // Nucleotide strand 1
      items.push({
        type: 'node',
        x: x1,
        y,
        z: z1,
        scale: scale1,
        color: '#10B981', // Emerald
        radius: 7 * scale1,
        p1: { sx: sx1, sy: sy1 },
      });

      // Nucleotide strand 2
      items.push({
        type: 'node',
        x: x2,
        y,
        z: z2,
        scale: scale2,
        color: '#06B6D4', // Cyan
        radius: 7 * scale2,
        p1: { sx: sx2, sy: sy2 },
      });
    }

    // Depth sort back-to-front
    items.sort((a, b) => a.z - b.z);

    items.forEach((item) => {
      const alpha = Math.min(1, Math.max(0.18, (item.z + radius) / (2 * radius)));

      if (item.type === 'rung' && item.p1 && item.p2) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(item.p1.sx, item.p1.sy);
        ctx.lineTo(item.p2.sx, item.p2.sy);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.35})`;
        ctx.lineWidth = 2.5 * item.scale;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.restore();
      } else if (item.type === 'node' && item.p1 && item.radius) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(item.p1.sx, item.p1.sy, item.radius, 0, Math.PI * 2);

        const grad = ctx.createRadialGradient(
          item.p1.sx - item.radius * 0.35,
          item.p1.sy - item.radius * 0.35,
          item.radius * 0.1,
          item.p1.sx,
          item.p1.sy,
          item.radius
        );
        grad.addColorStop(0, '#FFFFFF');
        grad.addColorStop(0.4, item.color);
        grad.addColorStop(1, '#030712');

        ctx.fillStyle = grad;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 10 * item.scale;
        ctx.shadowColor = item.color;
        ctx.fill();
        ctx.restore();
      }
    });
  }, [frame, width, height, rotationSpeed]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};
