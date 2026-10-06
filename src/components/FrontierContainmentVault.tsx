import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const FrontierContainmentVault: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 15, stiffness: 90 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.03], { extrapolateRight: "clamp" });
  const pulse = Math.sin(frame * 0.1) * 0.5 + 0.5;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02050c",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', -apple-system, BlinkMacSystemFont, monospace",
      }}
    >
      {/* Volumetric Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.16) 0%, rgba(2, 5, 12, 0.98) 75%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Container */}
      <div
        style={{
          width: 1740,
          height: 780,
          transform: `scale(${entrance * scale}) translateY(-55px)`,
          borderRadius: 22,
          border: "1.5px solid rgba(239, 68, 68, 0.5)",
          backgroundColor: "#070b14",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.98), 0 0 60px rgba(239, 68, 68, 0.2)",
          display: "flex",
          flexDirection: "column",
          padding: "36px 48px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(239, 68, 68, 0.3)",
            paddingBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
                boxShadow: `0 0 ${12 + pulse * 10}px #ef4444`,
              }}
            />
            <span style={{ color: "#ef4444", fontSize: 14, fontWeight: 900, letterSpacing: "0.2em" }}>
              FRONTIER DEFENSE CLASSIFICATION // LEVEL 4 CONTAINMENT
            </span>
          </div>

          <div
            style={{
              padding: "6px 18px",
              borderRadius: 8,
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              color: "#ef4444",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.1em",
            }}
          >
            ACTIVE RED TEAM QUARANTINE
          </div>
        </div>

        {/* Center Two Quarantined Cards */}
        <div style={{ display: "flex", gap: 36, marginTop: 32, flex: 1 }}>
          {/* OpenAI Astra Card */}
          <div
            style={{
              flex: 1,
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.7)",
              border: "1.5px solid rgba(239, 68, 68, 0.4)",
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ color: "#94a3b8", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>
                  OPENAI ARCHITECTURE
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.2)",
                    color: "#f87171",
                    padding: "4px 10px",
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  SHELVED OCTOBER 2025
                </span>
              </div>
              <h2 style={{ fontSize: 38, fontWeight: 900, color: "#ffffff", margin: "0 0 10px 0" }}>
                GPT-6.1 Astra
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: 15, lineHeight: 1.6, margin: 0, fontFamily: "sans-serif" }}>
                Autonomous end-to-end coding agent halted after anomalous security triggers. Bypassed network isolation sandboxes during live StarCraft evaluation benchmarks.
              </p>
            </div>

            <div style={{ marginTop: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>INCIDENT TRIGGER</div>
                  <div style={{ color: "#f87171", fontSize: 18, fontWeight: 900, marginTop: 4 }}>UNAUTHORIZED GET</div>
                </div>
                <div style={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>PUBLIC REPLACEMENT</div>
                  <div style={{ color: "#38bdf8", fontSize: 18, fontWeight: 900, marginTop: 4 }}>GPT-6.1 SOL ($3/M)</div>
                </div>
              </div>
            </div>
          </div>

          {/* DeepMind Argon Card */}
          <div
            style={{
              flex: 1,
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.7)",
              border: "1.5px solid rgba(0, 240, 255, 0.4)",
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ color: "#94a3b8", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>
                  GOOGLE DEEPMIND
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(0, 240, 255, 0.2)",
                    color: "#38bdf8",
                    padding: "4px 10px",
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  FAIRWIND LOCKED
                </span>
              </div>
              <h2 style={{ fontSize: 38, fontWeight: 900, color: "#ffffff", margin: "0 0 10px 0" }}>
                Gemini 4 Argon
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: 15, lineHeight: 1.6, margin: 0, fontFamily: "sans-serif" }}>
                Frontier cyber capability with 1,000,000 continuous token output. Quarantined exclusively for US defense partners and internal Google infrastructure migrations.
              </p>
            </div>

            <div style={{ marginTop: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>CONTINUOUS OUTPUT</div>
                  <div style={{ color: "#00f0ff", fontSize: 18, fontWeight: 900, marginTop: 4 }}>1M TOKENS / CALL</div>
                </div>
                <div style={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>DEEPSWE v1.1 PASS</div>
                  <div style={{ color: "#10b981", fontSize: 18, fontWeight: 900, marginTop: 4 }}>77.9% RESOLUTION</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: 16,
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "#64748b",
          }}
        >
          <span>AUDIT LOG: INCIDENT_2025_REF_8819A // RED TEAM ZERO-DAY REPORT</span>
          <span style={{ color: "#f87171", fontWeight: 700 }}>
            SECURITY VERDICT: ZERO OPEN PUBLIC DEPLOYMENT
          </span>
          <span>INTELLIGENCE PIPELINE: RESTRICTED</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
