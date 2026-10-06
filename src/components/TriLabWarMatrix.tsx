import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const TriLabWarMatrix: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 95 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], { extrapolateRight: "clamp" });

  const labs = [
    {
      name: "OPENAI",
      model: "GPT-6.1 Sol",
      pivot: "Astra Shelved -> Sol Launched",
      keyStat: "80% Price Cut // 95% Cache Discount",
      benchmark: "52 Pts Artificial Analysis",
      color: "#10b981",
      badge: "ECONOMIC SUB-CENT",
      status: "PUBLIC COMMODITY",
      barWidth: 72,
    },
    {
      name: "GOOGLE DEEPMIND",
      model: "Gemini 4 Argon",
      pivot: "Sovereign AI Locked to Fairwind",
      keyStat: "1,000,000 Continuous Tokens",
      benchmark: "77.9% DeepSWE v1.1 Pass",
      color: "#00f0ff",
      badge: "DEFENSE RESTRICTED",
      status: "CLASSIFIED AGENT",
      barWidth: 92,
    },
    {
      name: "ANTHROPIC",
      model: "Claude Opus 5.5",
      pivot: "Sudden Luxury Ambush Weapon",
      keyStat: "94.2% SWE-bench Verified",
      benchmark: "58 Pts Artificial Analysis (#1)",
      color: "#f97316",
      badge: "SURGICAL SCALPEL",
      status: "ENTERPRISE STANDARD",
      barWidth: 96,
    },
  ];

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
      {/* Background Volumetric Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(2, 5, 12, 0.98) 75%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Dossier Container */}
      <div
        style={{
          width: 1740,
          height: 780,
          transform: `scale(${entrance * scale}) translateY(-55px)`,
          borderRadius: 22,
          border: "1.5px solid rgba(56, 189, 248, 0.4)",
          backgroundColor: "#070b14",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.98), 0 0 60px rgba(56, 189, 248, 0.15)",
          display: "flex",
          flexDirection: "column",
          padding: "32px 48px",
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
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#38bdf8",
                boxShadow: "0 0 12px #38bdf8",
              }}
            />
            <span style={{ color: "#38bdf8", fontSize: 14, fontWeight: 900, letterSpacing: "0.2em" }}>
              2026 FRONTIER LAB SHIFT // THE THREE-WAY BIFURCATION
            </span>
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 8,
              backgroundColor: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              color: "#38bdf8",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.1em",
            }}
          >
            CONFIDENTIAL MARKET AUDIT
          </div>
        </div>

        {/* 3 Horizontal Lab Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 24, flex: 1 }}>
          {labs.map((lab, i) => {
            const barFill = interpolate(frame, [10 + i * 8, 45 + i * 8], [0, lab.barWidth], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(15, 23, 42, 0.75)",
                  border: `1.5px solid ${lab.color}50`,
                  borderRadius: 16,
                  padding: "20px 28px",
                  gap: 30,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.5)`,
                }}
                key={lab.name}
              >
                {/* Lab Identity */}
                <div style={{ width: 260 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: lab.color }} />
                    <span style={{ color: lab.color, fontSize: 12, fontWeight: 900, letterSpacing: "0.15em" }}>
                      {lab.name}
                    </span>
                  </div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: "#ffffff", marginTop: 4 }}>
                    {lab.model}
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: 6,
                      fontSize: 10,
                      fontWeight: 800,
                      color: lab.color,
                      backgroundColor: `${lab.color}20`,
                      padding: "3px 8px",
                      borderRadius: 4,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {lab.badge}
                  </div>
                </div>

                {/* Strategic Pivot & Features */}
                <div style={{ width: 380 }}>
                  <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>STRATEGIC PIVOT</div>
                  <div style={{ color: "#f1f5f9", fontSize: 15, fontWeight: 800, marginTop: 2 }}>
                    {lab.pivot}
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: 13, marginTop: 4, fontFamily: "sans-serif" }}>
                    {lab.keyStat}
                  </div>
                </div>

                {/* Progress Bar & Benchmark */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>BENCHMARK DOMINANCE</span>
                    <span style={{ color: lab.color, fontSize: 13, fontWeight: 900 }}>{lab.benchmark}</span>
                  </div>
                  <div
                    style={{
                      height: 12,
                      width: "100%",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      borderRadius: 6,
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${barFill}%`,
                        backgroundColor: lab.color,
                        boxShadow: `0 0 12px ${lab.color}`,
                        borderRadius: 6,
                      }}
                    />
                  </div>
                </div>

                {/* Access Level Status */}
                <div style={{ width: 200, textAlign: "right" }}>
                  <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>DEPLOYMENT TIER</div>
                  <div
                    style={{
                      color: lab.color,
                      fontSize: 14,
                      fontWeight: 900,
                      marginTop: 4,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {lab.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Sub-strip */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: 14,
            marginTop: 18,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "#64748b",
          }}
        >
          <span>CROSS-LAB VERIFICATION: OPENAI • GOOGLE DEEPMIND • ANTHROPIC</span>
          <span style={{ color: "#38bdf8", fontWeight: 700 }}>
            INTELLIGENCE FRAGMENTATION: LUXURY REASONING VS COMMODITY AUTOMATION
          </span>
          <span>REPORT: 2026-Q1 INVESTIGATION</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
