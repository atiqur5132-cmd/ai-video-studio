import React, { useEffect, useRef } from 'react';
import { useCurrentFrame } from 'remotion';

export const LipidBilayerCrossSection3D: React.FC<{
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

    const membraneY = height / 2;
    const lipidCount = 40;
    const spacing = width / lipidCount;
    const bilayerGap = 85;

    // 1. Draw Extracellular & Intracellular Fluid Particles
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      const px = (i * 32 + frame * 1.5) % width;
      const isTop = i % 2 === 0;
      const py = isTop
        ? (membraneY - bilayerGap - 60) + Math.sin(frame * 0.05 + i) * 40
        : (membraneY + bilayerGap + 60) + Math.cos(frame * 0.05 + i) * 40;

      ctx.save();
      ctx.beginPath();
      ctx.arc(px, py, 3, 0, Math.PI * 2);
      ctx.fillStyle = isTop ? 'rgba(56, 189, 248, 0.4)' : 'rgba(16, 185, 129, 0.3)';
      ctx.shadowBlur = 8;
      ctx.shadowColor = isTop ? '#38BDF8' : '#10B981';
      ctx.fill();
      ctx.restore();
    }

    // 2. Transmembrane Receptor Protein Channel (Center)
    const channelX = width / 2;
    const channelWidth = 140;
    const channelHeight = bilayerGap * 2 + 70;

    ctx.save();
    // Receptor Outer Glow
    ctx.shadowBlur = 25;
    ctx.shadowColor = '#8B5CF6';

    // Left Receptor Subunit
    const leftGrad = ctx.createLinearGradient(channelX - channelWidth / 2, membraneY - channelHeight / 2, channelX - 15, membraneY + channelHeight / 2);
    leftGrad.addColorStop(0, '#A78BFA');
    leftGrad.addColorStop(0.5, '#7C3AED');
    leftGrad.addColorStop(1, '#4C1D95');

    ctx.fillStyle = leftGrad;
    ctx.beginPath();
    ctx.roundRect(channelX - channelWidth / 2, membraneY - channelHeight / 2, channelWidth / 2 - 15, channelHeight, 20);
    ctx.fill();

    // Right Receptor Subunit
    const rightGrad = ctx.createLinearGradient(channelX + 15, membraneY - channelHeight / 2, channelX + channelWidth / 2, membraneY + channelHeight / 2);
    rightGrad.addColorStop(0, '#A78BFA');
    rightGrad.addColorStop(0.5, '#7C3AED');
    rightGrad.addColorStop(1, '#4C1D95');

    ctx.fillStyle = rightGrad;
    ctx.beginPath();
    ctx.roundRect(channelX + 15, membraneY - channelHeight / 2, channelWidth / 2 - 15, channelHeight, 20);
    ctx.fill();

    // Ion flow through central channel pore
    const ionY = (membraneY - channelHeight / 2) + ((frame * 4) % channelHeight);
    ctx.beginPath();
    ctx.arc(channelX, ionY, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#F59E0B';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#F59E0B';
    ctx.fill();
    ctx.restore();

    // 3. Phospholipid Bilayer Leaflets (Upper & Lower)
    for (let i = 0; i < lipidCount; i++) {
      const lx = i * spacing + spacing / 2;
      // Skip drawing lipids directly inside the transmembrane channel
      if (Math.abs(lx - channelX) < channelWidth / 2 + 10) continue;

      const wave = Math.sin(frame * 0.04 + i * 0.3) * 6;

      // --- Upper Leaflet ---
      const topHeadY = membraneY - bilayerGap + wave;
      // Tail 1 & 2
      ctx.save();
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.7)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(lx - 4, topHeadY + 8);
      ctx.quadraticCurveTo(lx - 8, topHeadY + bilayerGap * 0.45, lx - 3, topHeadY + bilayerGap * 0.85);
      ctx.moveTo(lx + 4, topHeadY + 8);
      ctx.quadraticCurveTo(lx + 8, topHeadY + bilayerGap * 0.45, lx + 5, topHeadY + bilayerGap * 0.85);
      ctx.stroke();

      // Hydrophilic Head
      ctx.beginPath();
      ctx.arc(lx, topHeadY, 9, 0, Math.PI * 2);
      const headGradTop = ctx.createRadialGradient(lx - 2, topHeadY - 2, 1, lx, topHeadY, 9);
      headGradTop.addColorStop(0, '#FFFFFF');
      headGradTop.addColorStop(0.3, '#10B981');
      headGradTop.addColorStop(1, '#064E3B');
      ctx.fillStyle = headGradTop;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#10B981';
      ctx.fill();
      ctx.restore();

      // --- Lower Leaflet ---
      const bottomHeadY = membraneY + bilayerGap + wave;
      ctx.save();
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.7)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(lx - 4, bottomHeadY - 8);
      ctx.quadraticCurveTo(lx - 8, bottomHeadY - bilayerGap * 0.45, lx - 3, bottomHeadY - bilayerGap * 0.85);
      ctx.moveTo(lx + 4, bottomHeadY - 8);
      ctx.quadraticCurveTo(lx + 8, bottomHeadY - bilayerGap * 0.45, lx + 5, bottomHeadY - bilayerGap * 0.85);
      ctx.stroke();

      // Hydrophilic Head
      ctx.beginPath();
      ctx.arc(lx, bottomHeadY, 9, 0, Math.PI * 2);
      const headGradBottom = ctx.createRadialGradient(lx - 2, bottomHeadY + 2, 1, lx, bottomHeadY, 9);
      headGradBottom.addColorStop(0, '#FFFFFF');
      headGradBottom.addColorStop(0.3, '#06B6D4');
      headGradBottom.addColorStop(1, '#083344');
      ctx.fillStyle = headGradBottom;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#06B6D4';
      ctx.fill();
      ctx.restore();
    }

    // 4. Extracellular Drug Molecule approaching receptor
    const drugX = channelX + Math.sin(frame * 0.05) * 20;
    const drugY = Math.max(membraneY - channelHeight / 2 - 40, (membraneY - channelHeight / 2 - 120) + (frame * 1.2) % 150);

    ctx.save();
    // Drug ball-and-stick cluster
    const drugAtoms = [
      { dx: 0, dy: 0, r: 12, c: '#EF4444' }, // Oxygen red
      { dx: -18, dy: -14, r: 10, c: '#38BDF8' }, // Nitrogen blue
      { dx: 18, dy: -10, r: 14, c: '#F59E0B' }, // Carbon amber
      { dx: 2, dy: -28, r: 9, c: '#FFFFFF' }, // Hydrogen
    ];

    // Bonds
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    drugAtoms.slice(1).forEach((a) => {
      ctx.beginPath();
      ctx.moveTo(drugX, drugY);
      ctx.lineTo(drugX + a.dx, drugY + a.dy);
      ctx.stroke();
    });

    // Atoms
    drugAtoms.forEach((a) => {
      ctx.beginPath();
      ctx.arc(drugX + a.dx, drugY + a.dy, a.r, 0, Math.PI * 2);
      ctx.fillStyle = a.c;
      ctx.shadowBlur = 15;
      ctx.shadowColor = a.c;
      ctx.fill();
    });
    ctx.restore();
  }, [frame, width, height]);

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
