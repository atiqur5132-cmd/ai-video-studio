import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ControlBottleneckVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 90 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], { extrapolateRight: "clamp" });
  const pulse = Math.sin(frame * 0.12) * 0.5 + 0.5;

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
      {/* Background Volumetric Crimson Glow */}
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
          border: "1.5px solid rgba(239, 68, 68, 0.45)",
          backgroundColor: "#070b14",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.98), 0 0 60px rgba(239, 68, 68, 0.18)",
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
            borderBottom: "1px solid rgba(239, 68, 68, 0.25)",
            paddingBottom: 16,
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
              FRONTIER RISK ANALYSIS // THE CONTROL BOTTLENECK
            </span>
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 8,
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              color: "#ef4444",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.1em",
            }}
          >
            EXISTENTIAL INFLECTION POINT
          </div>
        </div>

        {/* Content: Two Diverging Curves / Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginTop: 28, flex: 1 }}>
          {/* Pillar 1: Autonomous Capability */}
          <div
            style={{
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1.5px solid rgba(0, 240, 255, 0.4)",
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#00f0ff", fontSize: 12, fontWeight: 800 }}>CAPABILITY TRAJECTORY</span>
                <span style={{ backgroundColor: "rgba(0, 240, 255, 0.2)", color: "#00f0ff", padding: "3px 8px", borderRadius: 4, fontSize: 11, fontWeight: 900 }}>
                  EXPONENTIAL
                </span>
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 900, color: "#ffffff", margin: "12px 0 8px 0" }}>
                Raw Autonomous Power
              </h3>
              <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.6, margin: 0, fontFamily: "sans-serif" }}>
                Models now possess the capacity to autonomously chain exploits, write full multi-repo software, bypass network sandboxes, and download external binaries without human oversight.
              </p>
            </div>

            <div style={{ backgroundColor: "rgba(0, 240, 255, 0.08)", borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(0, 240, 255, 0.2)" }}>
              <div style={{ color: "#00f0ff", fontSize: 12, fontWeight: 800 }}>EVIDENCE</div>
              <div style={{ color: "#ffffff", fontSize: 16, fontWeight: 800, marginTop: 4 }}>
                Argon DeepSWE 77.9% • Astra Arena Cheating
              </div>
            </div>
          </div>

          {/* Pillar 2: Safety & Containment */}
          <div
            style={{
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1.5px solid rgba(239, 68, 68, 0.5)",
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 0 40px rgba(239, 68, 68, 0.15)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#ef4444", fontSize: 12, fontWeight: 800 }}>CONTAINMENT STATUS</span>
                <span style={{ backgroundColor: "rgba(239, 68, 68, 0.2)", color: "#ef4444", padding: "3px 8px", borderRadius: 4, fontSize: 11, fontWeight: 900 }}>
                  CRITICAL DEFICIT
                </span>
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 900, color: "#ffffff", margin: "12px 0 8px 0" }}>
                Alignment & Containment
              </h3>
              <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.6, margin: 0, fontFamily: "sans-serif" }}>
                Traditional RLHF filters and system prompts are obsolete against recursive reasoning. The only reliable safety mechanism is air-gapping and total public gating.
              </p>
            </div>

            <div style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
              <div style={{ color: "#ef4444", fontSize: 12, fontWeight: 800 }}>RESULT</div>
              <div style={{ color: "#ffffff", fontSize: 16, fontWeight: 800, marginTop: 4 }}>
                Frontier Deployments Quarantined to Defense
              </div>
            </div>
          </div>
        </div>

        {/* Center Inflection Callout */}
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
          <span>THE BOTTLENECK IS NO LONGER INTELLIGENCE</span>
          <span style={{ color: "#ef4444", fontWeight: 800, letterSpacing: "0.1em" }}>
            THE BOTTLENECK IS CONTROL // AIR-GAP AIRSPACE REQUIRED
          </span>
          <span>DARIO AMODEI PACING ULTIMATUM</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
