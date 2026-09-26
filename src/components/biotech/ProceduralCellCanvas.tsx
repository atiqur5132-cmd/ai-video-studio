import React, { useEffect, useRef, useMemo } from 'react';
import { useCurrentFrame } from 'remotion';

interface CellNode {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  type: 'membrane' | 'receptor' | 'cytoplasm' | 'nucleus';
  color: string;
}

export const ProceduralCellCanvas: React.FC<{
  width?: number;
  height?: number;
  pulseSpeed?: number;
}> = ({ width = 1920, height = 1080, pulseSpeed = 1.0 }) => {
  const frame = useCurrentFrame();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate 3D spherical nodes for the cell
  const nodes = useMemo(() => {
    const list: CellNode[] = [];
    const cellRadius = 260;

    // 1. Membrane surface nodes (Fibonacci sphere distribution)
    const membraneCount = 220;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    for (let i = 0; i < membraneCount; i++) {
      const y = 1 - (i / (membraneCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const isReceptor = i % 14 === 0;
      list.push({
        x: x * cellRadius,
        y: y * cellRadius,
        z: z * cellRadius,
        baseRadius: isReceptor ? 10 : 5,
        type: isReceptor ? 'receptor' : 'membrane',
        color: isReceptor ? '#10B981' : '#06B6D4',
      });
    }

    // 2. Cytoplasmic organelles & ribosomes
    const cytoplasmCount = 140;
    for (let i = 0; i < cytoplasmCount; i++) {
      const r = Math.cbrt(Math.random()) * (cellRadius * 0.75);
      const theta = Math.random() * Math.PI * 2;
      const phiAngle = Math.acos(2 * Math.random() - 1);

      list.push({
        x: r * Math.sin(phiAngle) * Math.cos(theta),
        y: r * Math.sin(phiAngle) * Math.sin(theta),
        z: r * Math.cos(phiAngle),
        baseRadius: 3 + Math.random() * 3,
        type: 'cytoplasm',
        color: '#8B5CF6',
      });
    }

    // 3. Central Nucleus Cluster
    const nucleusCount = 45;
    for (let i = 0; i < nucleusCount; i++) {
      const r = Math.cbrt(Math.random()) * 75;
      const theta = Math.random() * Math.PI * 2;
      const phiAngle = Math.acos(2 * Math.random() - 1);

      list.push({
        x: r * Math.sin(phiAngle) * Math.cos(theta),
        y: r * Math.sin(phiAngle) * Math.sin(theta),
        z: r * Math.cos(phiAngle),
        baseRadius: 6 + Math.random() * 4,
        type: 'nucleus',
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

    // Orbital camera rotation
    const theta = (frame * 0.008 * pulseSpeed) % (Math.PI * 2);
    const phi = 0.3 + Math.sin(frame * 0.005) * 0.12;
    const FOV = 850;
    const CAM_DIST = 600;

    // Membrane wave pulse
    const wave = Math.sin(frame * 0.06 * pulseSpeed) * 8;

    // Transform and project
    const projected = nodes.map((node) => {
      // Add membrane undulation
      const distMult = node.type === 'membrane' || node.type === 'receptor' ? (1 + wave * 0.015) : 1;
      const nx = node.x * distMult;
      const ny = node.y * distMult;
      const nz = node.z * distMult;

      // Rotate Y
      const x1 = nx * Math.cos(theta) - nz * Math.sin(theta);
      const z1 = nx * Math.sin(theta) + nz * Math.cos(theta);

      // Rotate X
      const y2 = ny * Math.cos(phi) - z1 * Math.sin(phi);
      const z2 = ny * Math.sin(phi) + z1 * Math.cos(phi);

      const scale = FOV / (FOV + z2 + CAM_DIST);
      const sx = width / 2 + x1 * scale;
      const sy = height / 2 + y2 * scale;

      return {
        sx,
        sy,
        z: z2,
        scale,
        baseRadius: node.baseRadius,
        type: node.type,
        color: node.color,
      };
    });

    // Z-Sort (Painter's Algorithm)
    projected.sort((a, b) => a.z - b.z);

    // Render back-to-front
    projected.forEach((node) => {
      const radius = node.baseRadius * node.scale;
      if (radius <= 0.5) return;

      const alpha = Math.min(1, Math.max(0.18, (node.z + 350) / 700));

      ctx.save();
      ctx.beginPath();
      ctx.arc(node.sx, node.sy, radius, 0, Math.PI * 2);

      // Specular 3D highlight
      const grad = ctx.createRadialGradient(
        node.sx - radius * 0.35,
        node.sy - radius * 0.35,
        radius * 0.1,
        node.sx,
        node.sy,
        radius
      );
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.35, node.color);
      grad.addColorStop(1, '#030712');

      ctx.fillStyle = grad;
      ctx.globalAlpha = node.type === 'membrane' ? alpha * 0.75 : alpha;
      ctx.shadowBlur = (node.type === 'nucleus' ? 18 : 8) * node.scale;
      ctx.shadowColor = node.color;
      ctx.fill();
      ctx.restore();
    });
  }, [frame, nodes, width, height, pulseSpeed]);

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
