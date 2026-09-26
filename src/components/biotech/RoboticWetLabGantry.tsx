import React, { useEffect, useRef } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

export const RoboticWetLabGantry: React.FC<{
  width?: number;
  height?: number;
  startFrame?: number;
}> = ({ width = 1920, height = 1080, startFrame }) => {
  const frame = useCurrentFrame();
  const relFrame = startFrame !== undefined ? Math.max(0, frame - startFrame) : frame;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    // Microplate centered in the lower-middle zone
    const plateX = width / 2 - 440;
    const plateY = height / 2 - 80;
    const rows = 8;
    const cols = 12;
    const wellSize = 42;
    const wellGap = 13;

    // 1. Robotic Microplate Base Platform (384-well standard format)
    ctx.save();
    ctx.fillStyle = '#0F172A';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 3;
    ctx.roundRect(
      plateX - 25,
      plateY - 25,
      cols * (wellSize + wellGap) + 35,
      rows * (wellSize + wellGap) + 35,
      18
    );
    ctx.fill();
    ctx.stroke();

    // 2. Microplate Wells with Dynamic Liquid Fluorescences
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const wx = plateX + c * (wellSize + wellGap);
        const wy = plateY + r * (wellSize + wellGap);

        ctx.beginPath();
        ctx.arc(wx + wellSize / 2, wy + wellSize / 2, wellSize / 2 - 2, 0, Math.PI * 2);
        ctx.fillStyle = '#1E293B';
        ctx.fill();

        // Liquid filling
        const isFilled = r * cols + c < ((relFrame * 1.5) % (rows * cols));
        if (isFilled) {
          const liquidGrad = ctx.createRadialGradient(
            wx + wellSize / 2 - 4,
            wy + wellSize / 2 - 4,
            2,
            wx + wellSize / 2,
            wy + wellSize / 2,
            wellSize / 2 - 4
          );
          const col = r % 2 === 0 ? '#10B981' : '#06B6D4';
          liquidGrad.addColorStop(0, '#FFFFFF');
          liquidGrad.addColorStop(0.4, col);
          liquidGrad.addColorStop(1, '#064E3B');

          ctx.beginPath();
          ctx.arc(wx + wellSize / 2, wy + wellSize / 2, wellSize / 2 - 5, 0, Math.PI * 2);
          ctx.fillStyle = liquidGrad;
          ctx.shadowBlur = 10;
          ctx.shadowColor = col;
          ctx.fill();
        }
      }
    }
    ctx.restore();

    // 3. Multi-Channel Robotic Pipetting Head
    const activeCol = Math.floor((relFrame * 0.2) % cols);
    const gantryX = plateX + activeCol * (wellSize + wellGap) + wellSize / 2;
    const gantryDip = Math.sin(relFrame * 0.2) * 16;

    ctx.save();
    // Compact Robotic Pipetting Carriage
    ctx.fillStyle = '#334155';
    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 2;
    ctx.fillRect(gantryX - 20, plateY - 50 + gantryDip, 40, 42);
    ctx.strokeRect(gantryX - 20, plateY - 50 + gantryDip, 40, 42);

    // Multi-Channel Pipette Tips (8 tips)
    for (let r = 0; r < rows; r++) {
      const tipY = plateY + r * (wellSize + wellGap) + wellSize / 2 - 20 + gantryDip;

      ctx.fillStyle = '#06B6D4';
      ctx.beginPath();
      ctx.moveTo(gantryX - 5, tipY - 18);
      ctx.lineTo(gantryX + 5, tipY - 18);
      ctx.lineTo(gantryX + 2, tipY);
      ctx.lineTo(gantryX - 2, tipY);
      ctx.closePath();
      ctx.fill();

      // Dispensing droplet
      if (Math.sin(relFrame * 0.2) > 0.7) {
        ctx.beginPath();
        ctx.arc(gantryX, tipY + 8, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#10B981';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#10B981';
        ctx.fill();
      }
    }
    ctx.restore();

    // 4. Moving Laser Barcode Line
    const laserX = plateX - 20 + ((relFrame * 5.5) % (cols * (wellSize + wellGap) + 30));
    ctx.save();
    ctx.strokeStyle = '#EF4444';
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 14;
    ctx.shadowColor = '#EF4444';
    ctx.beginPath();
    ctx.moveTo(laserX, plateY - 25);
    ctx.lineTo(laserX, plateY + rows * (wellSize + wellGap) + 10);
    ctx.stroke();
    ctx.restore();
  }, [relFrame, width, height]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <canvas ref={canvasRef} width={width} height={height} style={{ width: '100%', height: '100%' }} />

      {/* Spacious, Highly Legible Robotics Telemetry HUD Card on Right Flank */}
      <div
        style={{
          position: 'absolute',
          top: height / 2 - 80,
          right: 90,
          width: 440,
          background: 'rgba(3, 7, 18, 0.94)',
          border: '1.5px solid rgba(239, 68, 68, 0.45)',
          borderRadius: 22,
          padding: '28px 34px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          boxShadow: '0 25px 60px rgba(0,0,0,0.92), 0 0 35px rgba(239, 68, 68, 0.15)',
          backdropFilter: 'blur(24px)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: '#F87171', fontWeight: 800, letterSpacing: '2px' }}>
            PHYSICAL WET-LAB AUTOMATION
          </span>
          <span
            style={{
              background: '#EF4444',
              color: '#FFFFFF',
              fontWeight: 900,
              fontSize: 11,
              padding: '3px 8px',
              borderRadius: 4,
            }}
          >
            SLOW
          </span>
        </div>

        <div style={{ fontSize: 34, color: '#EF4444', fontWeight: 950, lineHeight: 1.1, marginTop: 4 }}>
          384 WELLS / 4 HRS
        </div>
        <div style={{ fontSize: 14, color: '#94A3B8', fontWeight: 700 }}>
          MAXIMUM MECHANICAL THROUGHPUT
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '12px 0' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>PIPETTING SPEED:</span>
          <span style={{ color: '#F8FAFC', fontWeight: 900, fontSize: 15 }}>2.5 SEC / WELL</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>REAGENT CONSUMPTION:</span>
          <span style={{ color: '#F59E0B', fontWeight: 900, fontSize: 15 }}>$12,500 / SCREEN</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94A3B8', fontSize: 14, fontWeight: 600 }}>CRITICAL BOTTLENECK:</span>
          <span style={{ color: '#EF4444', fontWeight: 900, fontSize: 15 }}>HUMAN & REAGENT LIMIT</span>
        </div>
      </div>
    </div>
  );
};
