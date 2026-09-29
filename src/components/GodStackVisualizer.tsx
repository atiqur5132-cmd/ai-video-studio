import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { OfficialLogoBadge } from "./OfficialLogoBadge";

export const GodStackVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const pulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.95, 1.05]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dynamic Ambient Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div
        style={{
          width: 1760,
          height: 890,
          transform: `scale(${entrance}) translateY(-10px)`,
          borderRadius: 24,
          border: "1.5px solid rgba(234, 88, 12, 0.4)",
          backgroundColor: "#090d16",
          boxShadow: "0 35px 120px rgba(0,0,0,0.98), 0 0 60px rgba(234, 88, 12, 0.25)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
          padding: "36px 48px",
          justifyContent: "space-between",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ea580c",
                  boxShadow: "0 0 10px #ea580c",
                }}
              />
              <span
                style={{
                  color: "#ea580c",
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  fontFamily: "monospace",
                }}
              >
                THE ELITE DEVELOPER CONSENSUS
              </span>
            </div>
            <h2
              style={{
                fontSize: 38,
                fontWeight: 900,
                color: "#FFFFFF",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              THE DUAL-ENGINE "GODSTACK"
            </h2>
          </div>

          <div
            style={{
              padding: "8px 18px",
              borderRadius: 20,
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#10b981",
              fontSize: 13,
              fontWeight: 800,
              fontFamily: "monospace",
              letterSpacing: "0.08em",
            }}
          >
            ● OPTIMAL PERFORMANCE & MARGINS
          </div>
        </div>

        {/* Dual Tier Cards */}
        <div style={{ display: "flex", gap: 32, flex: 1, margin: "24px 0" }}>
          {/* Tier 1: Opus 5.5 */}
          <div
            style={{
              flex: 1,
              borderRadius: 20,
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              border: "1.5px solid rgba(217, 119, 87, 0.35)",
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#d97757", fontFamily: "monospace", letterSpacing: "0.1em" }}>
                  TIER 1 • SYSTEM ARCHITECT (10% TRAFFIC)
                </span>
                <h3 style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>
                  CLAUDE OPUS 5.5
                </h3>
                <span style={{ fontSize: 14, color: "#94a3b8", fontFamily: "monospace" }}>
                  $4 / M In • $20 / M Out
                </span>
              </div>
              <OfficialLogoBadge logo="claude" size={60} staticMode={true} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0" }}>
              {[
                "High-level microservices & schema architecture",
                "Critical cybersecurity & cryptographic audits",
                "Multi-repository long-horizon planning",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#d97757", fontSize: 16 }}>◆</span>
                  <span style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 600 }}>{text}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                backgroundColor: "rgba(217, 119, 87, 0.1)",
                border: "1px solid rgba(217, 119, 87, 0.3)",
                color: "#d97757",
                fontSize: 12,
                fontWeight: 800,
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              CHIEF TECHNICAL OFFICER INTELLIGENCE
            </div>
          </div>

          {/* Tier 2: Sonnet 5.5 */}
          <div
            style={{
              flex: 1,
              borderRadius: 20,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "2px solid rgba(56, 189, 248, 0.6)",
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 40px rgba(0,0,0,0.6), 0 0 35px rgba(56, 189, 248, 0.2)",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#38bdf8", fontFamily: "monospace", letterSpacing: "0.1em" }}>
                  TIER 2 • WORKHORSE EXECUTION (90% TRAFFIC)
                </span>
                <h3 style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>
                  CLAUDE SONNET 5.5
                </h3>
                <span style={{ fontSize: 14, color: "#38bdf8", fontWeight: 700, fontFamily: "monospace" }}>
                  $2 / M In • $10 / M Out (50% CHEAPER)
                </span>
              </div>
              <OfficialLogoBadge logo="claude" size={60} glowColor="rgba(56, 189, 248, 0.7)" staticMode={true} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0" }}>
              {[
                "Daily code generation & refactoring loops",
                "Automated terminal & CLI bug resolution (70.6%)",
                "Interactive UI & full-stack web applications",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#38bdf8", fontSize: 16 }}>★</span>
                  <span style={{ fontSize: 14, color: "#f8fafc", fontWeight: 700 }}>{text}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.5)",
                color: "#38bdf8",
                fontSize: 12,
                fontWeight: 900,
                textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              100X DEVELOPER VELOCITY AT FRACTIONAL COST
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            padding: "14px 28px",
            borderRadius: 14,
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 14, color: "#94a3b8", fontWeight: 700 }}>
            Enterprise Deployment Architecture: High-level planning to Opus, continuous automated pipeline to Sonnet.
          </span>
          <span style={{ fontSize: 14, color: "#10b981", fontWeight: 900, fontFamily: "monospace" }}>
            ESTIMATED CLOUD SAVINGS: 42% - 58%
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
