import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SiliconMoatBreakthrough: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const scanLine = (frame * 5) % 800;

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
      {/* Volumetric Cyan Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, rgba(3, 7, 18, 0.98) 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 1540,
          height: 840,
          borderRadius: 24,
          border: "2px solid rgba(56, 189, 248, 0.35)",
          background: "rgba(9, 14, 26, 0.94)",
          boxShadow:
            "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(14, 165, 233, 0.15)",
          display: "flex",
          flexDirection: "column",
          padding: 40,
          boxSizing: "border-box",
          transform: `scale(${interpolate(entrance, [0, 1], [0.95, 1])})`,
          opacity: entrance,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(56, 189, 248, 0.25)",
            paddingBottom: 20,
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
            <span
              style={{
                color: "#F8FAFC",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "0.08em",
              }}
            >
              HARDWARE MOAT ARBITRAGE // ASCEND 910C MATRIX
            </span>
          </div>
          <div
            style={{
              color: "#38BDF8",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.05em",
              background: "rgba(14, 165, 233, 0.12)",
              padding: "6px 14px",
              borderRadius: 8,
              border: "1px solid rgba(56, 189, 248, 0.3)",
            }}
          >
            SILICON INDEPENDENCE: VERIFIED
          </div>
        </div>

        {/* 2-Column Architecture Dossier */}
        <div
          style={{
            flex: 1,
            display: "flex",
            gap: 32,
            marginTop: 32,
          }}
        >
          {/* Card 1: Closed American Moat */}
          <div
            style={{
              flex: 1,
              borderRadius: 18,
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "rgba(15, 23, 42, 0.6)",
              display: "flex",
              flexDirection: "column",
              padding: 36,
              boxSizing: "border-box",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  color: "#94A3B8",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                TRADITIONAL HARDWARE HEGEMONY
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                AMERICAN SILICON MOAT
              </div>
              <p
                style={{
                  color: "#64748B",
                  fontSize: 15,
                  marginTop: 12,
                  lineHeight: 1.5,
                }}
              >
                Multi-billion dollar capex barriers, H100/Blackwell export restrictions, and proprietary API gatekeeping.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: 10,
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <span style={{ color: "#94A3B8", fontSize: 14 }}>Hardware Stack</span>
                <span style={{ color: "#CBD5E1", fontSize: 14, fontWeight: 700 }}>
                  Nvidia NVLink 5 Clusters
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: 10,
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <span style={{ color: "#94A3B8", fontSize: 14 }}>Access Model</span>
                <span style={{ color: "#EF4444", fontSize: 14, fontWeight: 700 }}>
                  Closed Proprietary API
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: 10,
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <span style={{ color: "#94A3B8", fontSize: 14 }}>Vulnerability</span>
                <span style={{ color: "#F59E0B", fontSize: 14, fontWeight: 700 }}>
                  Export Barrier Fragility
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: DEEPSEEK V5 (HERO) */}
          <div
            style={{
              flex: 1.2,
              borderRadius: 18,
              border: "2px solid #00F0FF",
              background: "rgba(14, 165, 233, 0.12)",
              boxShadow: "0 0 50px rgba(0, 240, 255, 0.2)",
              display: "flex",
              flexDirection: "column",
              padding: 36,
              boxSizing: "border-box",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Moving Laser Scanline */}
            <div
              style={{
                position: "absolute",
                top: scanLine,
                left: 0,
                right: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, #00F0FF, transparent)",
                boxShadow: "0 0 15px #00F0FF",
                pointerEvents: "none",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: 13,
                  color: "#00F0FF",
                  fontWeight: 900,
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                2026 ARCHITECTURAL DISRUPTION
              </div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                DEEPSEEK V5 (2.1T PARAMS)
              </div>
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: 15,
                  marginTop: 12,
                  lineHeight: 1.5,
                }}
              >
                Trained completely on 200,000 Huawei Ascend 910C NPUs using DualPipe latency hiding and zero Western hardware dependency.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  background: "rgba(0, 240, 255, 0.08)",
                  borderRadius: 10,
                  border: "1px solid rgba(0, 240, 255, 0.25)",
                }}
              >
                <span style={{ color: "#E2E8F0", fontSize: 14, fontWeight: 700 }}>
                  Hardware Substrate
                </span>
                <span style={{ color: "#00F0FF", fontSize: 14, fontWeight: 900 }}>
                  200,000x HUAWEI ASCEND 910C
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  background: "rgba(0, 240, 255, 0.08)",
                  borderRadius: 10,
                  border: "1px solid rgba(0, 240, 255, 0.25)",
                }}
              >
                <span style={{ color: "#E2E8F0", fontSize: 14, fontWeight: 700 }}>
                  Pipeline Efficiency
                </span>
                <span style={{ color: "#10B981", fontSize: 14, fontWeight: 900 }}>
                  DUALPIPE LATENT OVERLAP
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 18px",
                  background: "rgba(0, 240, 255, 0.08)",
                  borderRadius: 10,
                  border: "1px solid rgba(0, 240, 255, 0.25)",
                }}
              >
                <span style={{ color: "#E2E8F0", fontSize: 14, fontWeight: 700 }}>
                  Distribution Strategy
                </span>
                <span style={{ color: "#00F0FF", fontSize: 14, fontWeight: 900 }}>
                  100% OPEN WEIGHTS RELEASE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Strip */}
        <div
          style={{
            borderTop: "1px solid rgba(56, 189, 248, 0.2)",
            paddingTop: 16,
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "#64748B",
          }}
        >
          <span>CLUSTER CAPACITY: 200K HETERO-POD ACCELERATORS</span>
          <span style={{ color: "#00F0FF", fontWeight: 700 }}>
            RESULT: GEOPOLITICAL HARDWARE MOAT EVAPORATES
          </span>
          <span>LATENCY HIDING EFFICIENCY: 94.2%</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
