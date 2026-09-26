import React, { useEffect, useRef, useMemo } from 'react';
import { useCurrentFrame } from 'remotion';

interface AtomNode {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  type: 'carbon' | 'oxygen' | 'nitrogen' | 'sulfur';
}

interface RibbonPoint {
  x: number;
  y: number;
  z: number;
  plddt: number;
  type: 'helix' | 'sheet' | 'loop';
}

export const ProteinRibbonViewer3D: React.FC<{
  width?: number;
  height?: number;
  title?: string;
  pdbId?: string;
}> = ({
  width = 1920,
  height = 1080,
  title = 'ALPHAFOLD DE NOVO STRUCTURAL RECONSTRUCTION',
  pdbId = 'AF-P01116-F1 (KRAS-G12D)',
}) => {
  const frame = useCurrentFrame();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 1. Generate 3D Space-Filling CPK Atoms (Surface Density Cloud)
  const atoms = useMemo(() => {
    const list: AtomNode[] = [];
    const count = 180;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 180 + Math.cbrt(Math.random()) * 160;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = (r * Math.sin(phi) * Math.sin(theta)) * 0.75;
      const z = r * Math.cos(phi);

      const typeRand = Math.random();
      const type = typeRand > 0.65 ? 'carbon' : typeRand > 0.4 ? 'nitrogen' : typeRand > 0.15 ? 'oxygen' : 'sulfur';
      const color =
        type === 'carbon' ? '#475569' :
        type === 'nitrogen' ? '#38BDF8' :
        type === 'oxygen' ? '#EF4444' : '#F59E0B';

      list.push({
        x,
        y,
        z,
        radius: type === 'carbon' ? 14 : type === 'sulfur' ? 18 : 12,
        color,
        type,
      });
    }
    return list;
  }, []);

  // 2. Generate Dense 3D Protein Secondary Structure Backbone
  const backbone = useMemo(() => {
    const points: RibbonPoint[] = [];
    const total = 180;

    for (let i = 0; i < total; i++) {
      const isHelix1 = i < 60;
      const isSheet1 = i >= 60 && i < 110;
      const isHelix2 = i >= 110 && i < 155;

      let x = 0;
      let y = 0;
      let z = 0;
      let plddt = 94;

      if (isHelix1) {
        // Large cylindrical alpha-helix 1
        const t = i * 0.32;
        x = Math.cos(t) * 190 - 240;
        y = (i - 30) * 12;
        z = Math.sin(t) * 190;
        plddt = 96; // Dark blue
      } else if (isSheet1) {
        // Broad beta-sheet hairpin fold
        const t = (i - 60) * 0.18;
        x = Math.sin(t * 1.6) * 160 + (i - 85) * 8;
        y = Math.cos(t) * 220 + 20;
        z = Math.sin(t) * 240;
        plddt = 86; // Light cyan
      } else if (isHelix2) {
        // Second intersecting alpha-helix
        const t = (i - 110) * 0.32;
        x = Math.cos(t) * 180 + 240;
        y = (i - 132) * 11 - 40;
        z = Math.sin(t) * 180;
        plddt = 93;
      } else {
        // Disordered catalytic loop
        x = (i - 155) * 24 + 220;
        y = (i - 155) * 20 + 160;
        z = Math.sin(i * 0.5) * 120;
        plddt = 45; // Orange disordered
      }

      points.push({
        x,
        y,
        z,
        plddt,
        type: isHelix1 || isHelix2 ? 'helix' : isSheet1 ? 'sheet' : 'loop',
      });
    }
    return points;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const theta = (frame * 0.014) % (Math.PI * 2);
    const phi = 0.35 + Math.sin(frame * 0.008) * 0.12;
    const FOV = 850;
    const CAM_DIST = 600;

    // --- LAYER 1: Isometric 3D Perspective Coordinate Floor Grid ---
    ctx.save();
    const gridY = 380;
    const gridSize = 1400;
    const gridStep = 100;
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)';
    ctx.lineWidth = 1.5;

    for (let gx = -gridSize / 2; gx <= gridSize / 2; gx += gridStep) {
      // Rotate grid points
      const x1 = gx * Math.cos(theta) - (-gridSize / 2) * Math.sin(theta);
      const z1 = gx * Math.sin(theta) + (-gridSize / 2) * Math.cos(theta);
      const x2 = gx * Math.cos(theta) - (gridSize / 2) * Math.sin(theta);
      const z2 = gx * Math.sin(theta) + (gridSize / 2) * Math.cos(theta);

      const s1 = FOV / (FOV + z1 + CAM_DIST);
      const s2 = FOV / (FOV + z2 + CAM_DIST);

      ctx.beginPath();
      ctx.moveTo(width / 2 + x1 * s1, height / 2 + gridY * s1);
      ctx.lineTo(width / 2 + x2 * s2, height / 2 + gridY * s2);
      ctx.stroke();
    }
    ctx.restore();

    // --- LAYER 2: Out-Of-Focus Macro Depth Bokeh Atoms (Far Background) ---
    ctx.save();
    for (let i = 0; i < 40; i++) {
      const bx = ((i * 57 + frame * 0.8) % width);
      const by = ((i * 39 + Math.sin(frame * 0.02 + i) * 60) % height);
      ctx.beginPath();
      ctx.arc(bx, by, 16 + (i % 8) * 4, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 === 0 ? 'rgba(6, 182, 212, 0.07)' : 'rgba(16, 185, 129, 0.06)';
      ctx.shadowBlur = 24;
      ctx.shadowColor = i % 2 === 0 ? '#06B6D4' : '#10B981';
      ctx.fill();
    }
    ctx.restore();

    // --- LAYER 3: 3D Atoms & Ribbon Elements Depth Sorting ---
    interface RenderElement {
      type: 'atom' | 'ribbon';
      z: number;
      draw: (ctx: CanvasRenderingContext2D) => void;
    }

    const elements: RenderElement[] = [];

    // Project Space-Filling Atoms
    atoms.forEach((atom) => {
      const x1 = atom.x * Math.cos(theta) - atom.z * Math.sin(theta);
      const z1 = atom.x * Math.sin(theta) + atom.z * Math.cos(theta);
      const y2 = atom.y * Math.cos(phi) - z1 * Math.sin(phi);
      const z2 = atom.y * Math.sin(phi) + z1 * Math.cos(phi);

      const scale = FOV / (FOV + z2 + CAM_DIST);
      const sx = width / 2 + x1 * scale;
      const sy = height / 2 + y2 * scale;
      const radius = atom.radius * scale;

      elements.push({
        type: 'atom',
        z: z2,
        draw: (c) => {
          c.save();
          c.beginPath();
          c.arc(sx, sy, radius, 0, Math.PI * 2);
          const grad = c.createRadialGradient(
            sx - radius * 0.35,
            sy - radius * 0.35,
            radius * 0.1,
            sx,
            sy,
            radius
          );
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.35, atom.color);
          grad.addColorStop(1, '#050B14');
          c.fillStyle = grad;
          c.globalAlpha = Math.min(0.85, Math.max(0.15, (z2 + 400) / 800));
          c.shadowBlur = 8 * scale;
          c.shadowColor = atom.color;
          c.fill();
          c.restore();
        },
      });
    });

    // Project Ribbon Backbone Segments
    const projectedBackbone = backbone.map((node) => {
      const x1 = node.x * Math.cos(theta) - node.z * Math.sin(theta);
      const z1 = node.x * Math.sin(theta) + node.z * Math.cos(theta);
      const y2 = node.y * Math.cos(phi) - z1 * Math.sin(phi);
      const z2 = node.y * Math.sin(phi) + z1 * Math.cos(phi);

      const scale = FOV / (FOV + z2 + CAM_DIST);
      const sx = width / 2 + x1 * scale;
      const sy = height / 2 + y2 * scale;

      return { sx, sy, z: z2, scale, plddt: node.plddt, type: node.type };
    });

    for (let i = 0; i < projectedBackbone.length - 1; i++) {
      const p1 = projectedBackbone[i];
      const p2 = projectedBackbone[i + 1];
      const midZ = (p1.z + p2.z) / 2;

      const color =
        p1.plddt > 90 ? '#0053D6' :
        p1.plddt > 70 ? '#65CBF3' :
        p1.plddt > 50 ? '#FFDB13' : '#FF7D45';

      elements.push({
        type: 'ribbon',
        z: midZ,
        draw: (c) => {
          c.save();
          // Draw Volumetric Under-Ribbon (Shadow Thickness)
          c.beginPath();
          c.moveTo(p1.sx + 4 * p1.scale, p1.sy + 6 * p1.scale);
          c.lineTo(p2.sx + 4 * p2.scale, p2.sy + 6 * p2.scale);
          c.strokeStyle = 'rgba(0, 0, 0, 0.75)';
          c.lineWidth = Math.max(4, (p1.type === 'sheet' ? 32 : p1.type === 'helix' ? 22 : 10) * p1.scale);
          c.lineCap = 'round';
          c.stroke();

          // Draw Glowing Front Ribbon
          c.beginPath();
          c.moveTo(p1.sx, p1.sy);
          c.lineTo(p2.sx, p2.sy);
          c.strokeStyle = color;
          c.lineWidth = Math.max(3, (p1.type === 'sheet' ? 28 : p1.type === 'helix' ? 18 : 8) * p1.scale);
          c.lineCap = 'round';
          c.shadowBlur = 18 * p1.scale;
          c.shadowColor = color;
          c.stroke();

          // White Specular Ridge Highlight
          c.beginPath();
          c.moveTo(p1.sx - 2 * p1.scale, p1.sy - 2 * p1.scale);
          c.lineTo(p2.sx - 2 * p2.scale, p2.sy - 2 * p2.scale);
          c.strokeStyle = 'rgba(255, 255, 255, 0.65)';
          c.lineWidth = Math.max(1.5, 4 * p1.scale);
          c.stroke();
          c.restore();
        },
      });
    }

    // Sort All Elements Back-to-Front (Painter's Algorithm)
    elements.sort((a, b) => a.z - b.z);

    // Draw Elements
    elements.forEach((el) => el.draw(ctx));

    // --- LAYER 4: Active Site Callout Pins ---
    if (projectedBackbone.length > 80) {
      const activePocket = projectedBackbone[85];
      ctx.save();
      // Target reticle ring
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(activePocket.sx, activePocket.sy, 32 * activePocket.scale, 0, Math.PI * 2);
      ctx.stroke();

      // Connecting Pin Leader Line
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(activePocket.sx + 24 * activePocket.scale, activePocket.sy - 24 * activePocket.scale);
      ctx.lineTo(activePocket.sx + 90, activePocket.sy - 80);
      ctx.lineTo(activePocket.sx + 220, activePocket.sy - 80);
      ctx.stroke();

      // Pin Tag
      ctx.fillStyle = 'rgba(5, 11, 24, 0.9)';
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 1;
      ctx.roundRect(activePocket.sx + 90, activePocket.sy - 110, 200, 48, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 13px system-ui';
      ctx.fillText('CATALYTIC POCKET [ASP-12]', activePocket.sx + 102, activePocket.sy - 88);
      ctx.fillStyle = '#10B981';
      ctx.font = 'bold 12px monospace';
      ctx.fillText('DISTANCE: 2.4 Å (BOUND)', activePocket.sx + 102, activePocket.sy - 72);
      ctx.restore();
    }
  }, [frame, atoms, backbone, width, height]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <canvas ref={canvasRef} width={width} height={height} style={{ width: '100%', height: '100%' }} />

      {/* Top Right Crystallographic Telemetry Dossier */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          right: 80,
          background: 'rgba(3, 7, 18, 0.92)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          borderRadius: 18,
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(16, 185, 129, 0.15)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 12, color: '#94A3B8', fontWeight: 800, letterSpacing: '1.5px' }}>
            CRYSTAL ARCHITECTURE
          </span>
          <span style={{ background: '#10B981', color: '#000000', fontWeight: 900, fontSize: 11, padding: '3px 8px', borderRadius: 4 }}>
            1.8 Å CRYO-EM
          </span>
        </div>
        <div style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 900 }}>
          {pdbId}
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)' }} />
        {/* pLDDT Spectrum Legend */}
        <div style={{ display: 'flex', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: '#0053D6' }} />
            <span style={{ fontSize: 12, color: '#F8FAFC', fontWeight: 700 }}>&gt;90 Very High</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: '#65CBF3' }} />
            <span style={{ fontSize: 12, color: '#F8FAFC', fontWeight: 700 }}>70-90 Confident</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: '#FF7D45' }} />
            <span style={{ fontSize: 12, color: '#F8FAFC', fontWeight: 700 }}>&lt;50 Disordered</span>
          </div>
        </div>
      </div>
    </div>
  );
};
