import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { MoonshotKimiLogo, QwenLogo } from "./RealLogos";

interface MoENetworkProps {
  modelName: string;
  totalParams: string;
  activeParams: string;
  expertCount: number;
  activeCount: number;
  highlightKDA?: boolean;
}

export const MoENetworkVisualizer: React.FC<MoENetworkProps> = ({
  modelName,
  totalParams,
  activeParams,
  expertCount,
  activeCount,
  highlightKDA = false,
}) => {
  const frame = useCurrentFrame();

  // Pulse animation for central router
  const pulse = Math.sin(frame * 0.1) * 0.08 + 1;

  // Center coordinates on 1920x1080 canvas
  const centerX = 960;
  const centerY = 550;

  // Generate 48 expert nodes radially distributed across the entire 1760px wide area
  const nodeCount = 48;
  const nodes = Array.from({ length: nodeCount }).map((_, i) => {
    const angle = (i / nodeCount) * Math.PI * 2;
    const radiusX = 640 + (i % 3) * 60;
    const radiusY = 280 + (i % 2) * 50;
    const x = centerX + Math.cos(angle) * radiusX;
    const y = centerY + Math.sin(angle) * radiusY;
    const isActive = (i + Math.floor(frame / 6)) % (nodeCount / activeCount) === 0;
    return { x, y, isActive, id: i };
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at center, #0B1124 0%, #030611 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "36px 60px",
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #1E293B",
          paddingBottom: 20,
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {modelName.includes("Kimi") ? (
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                background: "#081528",
                border: "1px solid #1E3A8A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 25px rgba(23, 131, 255, 0.4)",
              }}
            >
              <MoonshotKimiLogo size={48} />
            </div>
          ) : (
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                background: "#160D2D",
                border: "1px solid #432889",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 25px rgba(111, 105, 247, 0.4)",
              }}
            >
              <QwenLogo size={48} />
            </div>
          )}
          <div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: 38,
                fontWeight: 900,
                color: "#F8FAFC",
                letterSpacing: -0.5,
              }}
            >
              {modelName}
            </div>
            <div
              style={{
                fontSize: 18,
                color: "#38BDF8",
                fontWeight: 700,
                letterSpacing: 1.8,
                textTransform: "uppercase",
              }}
            >
              Official Sparse Mixture-of-Experts (MoE) Architecture
            </div>
          </div>
        </div>

        {/* Telemetry Badges */}
        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              borderRadius: 16,
              padding: "12px 28px",
              textAlign: "right",
            }}
          >
            <div style={{ fontSize: 14, color: "#94A3B8", fontWeight: 700, textTransform: "uppercase" }}>
              Total Weights
            </div>
            <div style={{ fontSize: 32, color: "#38BDF8", fontWeight: 900 }}>
              {totalParams}
            </div>
          </div>
          <div
            style={{
              background: "rgba(168, 85, 247, 0.12)",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              borderRadius: 16,
              padding: "12px 28px",
              textAlign: "right",
            }}
          >
            <div style={{ fontSize: 14, color: "#94A3B8", fontWeight: 700, textTransform: "uppercase" }}>
              Active Routing
            </div>
            <div style={{ fontSize: 32, color: "#C084FC", fontWeight: 900 }}>
              {activeParams} / Token
            </div>
          </div>
        </div>
      </div>

      {/* Main Full-Canvas Constellation */}
      <div style={{ position: "relative", width: "100%", height: 750 }}>
        {/* Dynamic Laser Beams */}
        <svg
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {nodes.map((node) => {
            if (!node.isActive) return null;
            return (
              <line
                key={node.id}
                x1={centerX - 60}
                y1={centerY - 100}
                x2={node.x - 60}
                y2={node.y - 100}
                stroke={modelName.includes("Kimi") ? "#38BDF8" : "#818CF8"}
                strokeWidth={3}
                strokeOpacity={0.9}
                strokeDasharray="8 4"
              />
            );
          })}
        </svg>

        {/* Central Router Hub */}
        <div
          style={{
            position: "absolute",
            left: centerX - 60,
            top: centerY - 100,
            transform: `translate(-50%, -50%) scale(${pulse})`,
            width: 210,
            height: 210,
            borderRadius: "50%",
            background: modelName.includes("Kimi")
              ? "radial-gradient(circle, #0284C7 0%, #082F49 75%, rgba(8, 47, 73, 0) 100%)"
              : "radial-gradient(circle, #6366F1 0%, #1E1B4B 75%, rgba(30, 27, 75, 0) 100%)",
            boxShadow: modelName.includes("Kimi")
              ? "0 0 70px rgba(56, 189, 248, 0.7)"
              : "0 0 70px rgba(129, 140, 248, 0.7)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: modelName.includes("Kimi") ? "3px solid #7DD3FC" : "3px solid #A5B4FC",
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: 16, color: "#E0F2FE", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1 }}>
            Token Router
          </div>
          <div style={{ fontSize: 32, color: "#FFFFFF", fontWeight: 900, marginTop: 4 }}>
            {activeCount}/{expertCount}
          </div>
          <div style={{ fontSize: 13, color: "#94A3B8", fontWeight: 700, marginTop: 4 }}>
            Sparse Experts
          </div>
        </div>

        {/* Circular Expert Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            style={{
              position: "absolute",
              left: node.x - 60,
              top: node.y - 100,
              transform: "translate(-50%, -50%)",
              width: node.isActive ? 48 : 30,
              height: node.isActive ? 48 : 30,
              borderRadius: "50%",
              background: node.isActive
                ? modelName.includes("Kimi")
                  ? "linear-gradient(135deg, #38BDF8, #0284C7)"
                  : "linear-gradient(135deg, #818CF8, #4F46E5)"
                : "#0F172A",
              border: node.isActive ? "2px solid #FFFFFF" : "1px solid #334155",
              boxShadow: node.isActive
                ? "0 0 30px #38BDF8, 0 0 60px rgba(56, 189, 248, 0.5)"
                : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 800,
              color: "#FFFFFF",
              zIndex: 5,
            }}
          >
            {node.isActive ? "E" : ""}
          </div>
        ))}

        {/* Left Side Architecture Specification Box */}
        <div
          style={{
            position: "absolute",
            left: 20,
            bottom: 40,
            width: 480,
            background: "rgba(10, 15, 29, 0.9)",
            border: "1px solid #1E293B",
            borderRadius: 20,
            padding: 26,
            backdropFilter: "blur(14px)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.85)",
            zIndex: 15,
          }}
        >
          <div
            style={{
              fontSize: 15,
              color: "#38BDF8",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 10,
            }}
          >
            {highlightKDA ? "Breakthrough: KDA Linear Attention" : "Breakthrough: MoE GQA Attention"}
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.35,
              marginBottom: 12,
            }}
          >
            {highlightKDA
              ? "Replaces Quadratic O(N²) Matrices with Linear State Tracking"
              : "Grouped Query Attention with Fine-Grained Active Routing"}
          </div>
          <div style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.5 }}>
            {highlightKDA
              ? "Eliminates memory spikes during 1M token sequences, enabling always-on CoT without expensive Monte Carlo tree search."
              : "Activates only 95B parameters per forward pass, providing the speed of mid-tier models with frontier flagship depth."}
          </div>
        </div>

        {/* Right Side Telemetry Card */}
        <div
          style={{
            position: "absolute",
            right: 20,
            bottom: 40,
            width: 440,
            background: "rgba(10, 15, 29, 0.9)",
            border: "1px solid #1E293B",
            borderRadius: 20,
            padding: 26,
            backdropFilter: "blur(14px)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.85)",
            zIndex: 15,
          }}
        >
          <div style={{ fontSize: 14, color: "#A5B4FC", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
            Hardware Footprint
          </div>
          <div style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF", marginBottom: 6 }}>
            {modelName.includes("Kimi") ? "896 Sparse Experts" : "64 Routing Experts"}
          </div>
          <div style={{ fontSize: 16, color: "#94A3B8" }}>
            {modelName.includes("Kimi")
              ? "16 active experts per token · 104B parameter forward latency"
              : "95B active weights · Retaining 98.2% benchmark score via Bonsai 2"}
          </div>
        </div>
      </div>

      {/* Bottom Status Ticker */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #1E293B",
          paddingTop: 16,
          fontSize: 18,
          color: "#64748B",
          fontFamily: "monospace",
          zIndex: 20,
        }}
      >
        <span>STATUS: 100% VERIFIED MOE TOPOLOGY</span>
        <span style={{ color: "#38BDF8" }}>
          EXPERT ROUTING: {activeCount} / {expertCount} ACTIVE
        </span>
        <span>BENCHMARK: 93.5% GPQA DIAMOND</span>
      </div>
    </AbsoluteFill>
  );
};
