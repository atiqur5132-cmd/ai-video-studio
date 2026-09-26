import React, { useEffect, useRef } from 'react';
import { useCurrentFrame } from 'remotion';

export const VirtualPatientClone3D: React.FC<{
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
    const centerY = height / 2 - 30;

    // 1. Digital DNA Double Helix Orbital Rings surrounding patient
    ctx.save();
    for (let ring = 0; ring < 3; ring++) {
      const ringRadius = 240 + ring * 50;
      const ringAngle = frame * 0.015 * (ring % 2 === 0 ? 1 : -1) + ring;

      ctx.strokeStyle = ring % 2 === 0 ? 'rgba(16, 185, 129, 0.35)' : 'rgba(6, 182, 212, 0.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, ringRadius, ringRadius * 0.45, ringAngle, 0, Math.PI * 2);
      ctx.stroke();

      // Orbital data nodes along ring
      for (let d = 0; d < 8; d++) {
        const da = (d * Math.PI / 4) + ringAngle;
        const dx = centerX + Math.cos(da) * ringRadius;
        const dy = centerY + Math.sin(da) * (ringRadius * 0.45);

        ctx.beginPath();
        ctx.arc(dx, dy, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = ring % 2 === 0 ? '#10B981' : '#06B6D4';
        ctx.shadowBlur = 10;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
      }
    }
    ctx.restore();

    // 2. Holographic Human Avatar Silhouette (Procedural Wireframe Nodes)
    ctx.save();
    const avatarNodes = [
      // Head
      { x: 0, y: -160, r: 24, c: '#38BDF8' },
      // Spine & Torso
      { x: 0, y: -120, r: 16, c: '#10B981' },
      { x: 0, y: -70, r: 20, c: '#10B981' },
      { x: 0, y: -20, r: 18, c: '#10B981' },
      { x: 0, y: 30, r: 22, c: '#10B981' },
      // Shoulders & Arms
      { x: -50, y: -100, r: 14, c: '#38BDF8' },
      { x: 50, y: -100, r: 14, c: '#38BDF8' },
      { x: -80, y: -50, r: 12, c: '#06B6D4' },
      { x: 80, y: -50, r: 12, c: '#06B6D4' },
      { x: -100, y: 10, r: 10, c: '#06B6D4' },
      { x: 100, y: 10, r: 10, c: '#06B6D4' },
      // Hips & Legs
      { x: -35, y: 70, r: 16, c: '#38BDF8' },
      { x: 35, y: 70, r: 16, c: '#38BDF8' },
      { x: -45, y: 140, r: 14, c: '#10B981' },
      { x: 45, y: 140, r: 14, c: '#10B981' },
      { x: -50, y: 210, r: 12, c: '#06B6D4' },
      { x: 50, y: 210, r: 12, c: '#06B6D4' },
    ];

    // Wireframe connections
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    // Spine
    ctx.moveTo(centerX, centerY - 160);
    ctx.lineTo(centerX, centerY + 30);
    // Shoulders
    ctx.moveTo(centerX - 100, centerY + 10);
    ctx.lineTo(centerX - 80, centerY - 50);
    ctx.lineTo(centerX - 50, centerY - 100);
    ctx.lineTo(centerX + 50, centerY - 100);
    ctx.lineTo(centerX + 80, centerY - 50);
    ctx.lineTo(centerX + 100, centerY + 10);
    // Legs
    ctx.moveTo(centerX - 50, centerY + 210);
    ctx.lineTo(centerX - 45, centerY + 140);
    ctx.lineTo(centerX - 35, centerY + 70);
    ctx.lineTo(centerX + 35, centerY + 70);
    ctx.lineTo(centerX + 45, centerY + 140);
    ctx.lineTo(centerX + 50, centerY + 210);
    ctx.stroke();

    // Glowing Avatar Nodes
    avatarNodes.forEach((node) => {
      const nx = centerX + node.x;
      const ny = centerY + node.y;

      ctx.beginPath();
      ctx.arc(nx, ny, node.r, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(nx - 3, ny - 3, 2, nx, ny, node.r);
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.4, node.c);
      grad.addColorStop(1, '#030712');
      ctx.fillStyle = grad;
      ctx.shadowBlur = 15;
      ctx.shadowColor = node.c;
      ctx.fill();
    });
    ctx.restore();

    // 3. Scanning Laser Line
    const scanY = centerY - 180 + ((frame * 4) % 400);
    ctx.save();
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 2;
    ctx.shadowBlur = 12;
    ctx.shadowColor = '#10B981';
    ctx.beginPath();
    ctx.moveTo(centerX - 180, scanY);
    ctx.lineTo(centerX + 180, scanY);
    ctx.stroke();
    ctx.restore();
  }, [frame, width, height]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <canvas ref={canvasRef} width={width} height={height} style={{ width: '100%', height: '100%' }} />

      {/* Patient Clone Telemetry */}
      <div
        style={{
          position: 'absolute',
          top: 90,
          left: 90,
          background: 'rgba(5, 11, 24, 0.88)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          borderRadius: 14,
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        }}
      >
        <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 800, letterSpacing: '1.5px' }}>
          PERSONALIZED DIGITAL TWIN
        </div>
        <div style={{ fontSize: 22, color: '#10B981', fontWeight: 900 }}>
          IN-SILICO CLINICAL TRIAL ACTIVE
        </div>
        <div style={{ fontSize: 14, color: '#38BDF8', fontWeight: 700 }}>
          WHOLE-GENOME RECONSTRUCTION: 100%
        </div>
      </div>
    </div>
  );
};
