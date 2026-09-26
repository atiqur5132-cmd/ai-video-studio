import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const TpuClusterSchematic: React.FC = () => {
  const frame = useCurrentFrame();
  const scanLine = (frame * 6) % 1080;

  // 4x4 TPU v6e Matrix Units
  const grid = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const activePulse = Math.sin((frame + (row + col * 4) * 8) / 10) * 0.5 + 0.5;
      grid.push({ row, col, activePulse, id: `${row}-${col}` });
    }
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      }}
    >
      {/* Background Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.12) 0%, rgba(3, 7, 18, 0.98) 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid Pattern */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}
      >
        <defs>
          <pattern id="semiconductorGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38BDF8" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#semiconductorGrid)" />
      </svg>

      {/* Main Semiconductor Die Chassis */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 1400,
          height: 820,
          borderRadius: 24,
          border: "2px solid rgba(56, 189, 248, 0.35)",
          background: "rgba(9, 14, 26, 0.88)",
          boxShadow:
            "0 30px 100px rgba(0, 0, 0, 0.95), inset 0 0 80px rgba(14, 165, 233, 0.08)",
          display: "flex",
          flexDirection: "column",
          padding: 36,
          boxSizing: "border-box",
        }}
      >
        {/* Top Die Architecture Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(56, 189, 248, 0.25)",
            paddingBottom: 18,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#00F0FF",
                boxShadow: "0 0 16px #00F0FF",
              }}
            />
            <span style={{ color: "#F8FAFC", fontSize: 20, fontWeight: 800, letterSpacing: "0.1em" }}>
              PROJECT IRONWOOD // TPU V6E MATRIX ACCELERATOR CLUSTER
            </span>
          </div>
          <div style={{ display: "flex", gap: 24, color: "#38BDF8", fontSize: 14 }}>
            <span>CLUSTER: 32,768 NODES</span>
            <span>HBM3E: 192 GB/CHIP</span>
            <span>FABRIC: 3.2 Tbps OCS</span>
          </div>
        </div>

        {/* 4x4 Core Die Matrix */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gap: 20,
            marginTop: 24,
          }}
        >
          {grid.map((cell) => {
            const isHighlighted = cell.row === 1 && cell.col === 2;
            return (
              <div
                key={cell.id}
                style={{
                  borderRadius: 12,
                  border: isHighlighted
                    ? "2px solid #00F0FF"
                    : `1px solid rgba(56, 189, 248, ${0.15 + cell.activePulse * 0.25})`,
                  background: isHighlighted
                    ? "rgba(14, 165, 233, 0.2)"
                    : `rgba(15, 23, 42, ${0.6 + cell.activePulse * 0.2})`,
                  boxShadow: isHighlighted ? "0 0 25px rgba(0, 240, 255, 0.4)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 16,
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#64748B" }}>
                  <span>MXU_{cell.row}_{cell.col}</span>
                  <span style={{ color: cell.activePulse > 0.6 ? "#10B981" : "#0EA5E9" }}>
                    {(cell.activePulse * 100).toFixed(0)}% LOAD
                  </span>
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                  {Array.from({ length: 8 }).map((_, barIdx) => (
                    <div
                      key={barIdx}
                      style={{
                        flex: 1,
                        height: 8,
                        borderRadius: 2,
                        background:
                          barIdx / 8 < cell.activePulse
                            ? isHighlighted
                              ? "#00F0FF"
                              : "#38BDF8"
                            : "rgba(255, 255, 255, 0.08)",
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontSize: 10, color: "#94A3B8" }}>
                  SPARSE TENSOR TILE
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Laser Scanning Sweep Line */}
      <div
        style={{
          position: "absolute",
          top: scanLine,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent 0%, #00F0FF 50%, transparent 100%)",
          boxShadow: "0 0 20px #00F0FF, 0 0 40px #00F0FF",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </AbsoluteFill>
  );
};
