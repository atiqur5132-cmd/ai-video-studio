import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const HybridDeveloperPlaybook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 15, stiffness: 90 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], { extrapolateRight: "clamp" });

  const tiers = [
    {
      step: "01",
      role: "HIGH-VOLUME SWEEPS",
      model: "GPT-6.1 Sol & Dots",
      provider: "OPENAI",
      desc: "Massive parallel test writing, broad codebase exploration, background autonomous worker bots at 1/5th price.",
      tag: "ECONOMICS ENGINE",
      color: "#10b981",
    },
    {
      step: "02",
      role: "SURGICAL REVIEWS",
      model: "Claude Opus 5.5 & Sonnet",
      provider: "ANTHROPIC",
      desc: "Zero-hallucination AST inspection, 94.2% SWE-bench accuracy, critical merge approvals, and self-healing guidance.",
      tag: "PRECISION ENGINE",
      color: "#f97316",
    },
    {
      step: "03",
      role: "SOVEREIGN AGENTS",
      model: "Gemini 4 Argon & Astra",
      provider: "DEEPMIND / OPENAI",
      desc: "1M continuous token monolith rewrites, classified cyber defense, restricted behind government Fairwind protocols.",
      tag: "CLASSIFIED TIER",
      color: "#00f0ff",
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
      {/* Background Volumetric Emerald & Cyan Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(2, 5, 12, 0.98) 75%)",
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
          border: "1.5px solid rgba(16, 185, 129, 0.4)",
          backgroundColor: "#070b14",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.98), 0 0 60px rgba(16, 185, 129, 0.15)",
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
                backgroundColor: "#10b981",
                boxShadow: "0 0 14px #10b981",
              }}
            />
            <span style={{ color: "#10b981", fontSize: 14, fontWeight: 900, letterSpacing: "0.2em" }}>
              2026 DEVELOPER BLUEPRINT // HYBRID ORCHESTRATION STACK
            </span>
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 8,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#10b981",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.1em",
            }}
          >
            OPTIMAL PRODUCTION PIPELINE
          </div>
        </div>

        {/* 3 Step Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 24, flex: 1 }}>
          {tiers.map((t, idx) => (
            <div
              key={t.step}
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: `1.5px solid ${t.color}45`,
                borderRadius: 18,
                padding: "24px 26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: t.color, fontSize: 13, fontWeight: 900 }}>
                    LAYER {t.step}
                  </span>
                  <span
                    style={{
                      backgroundColor: `${t.color}20`,
                      color: t.color,
                      padding: "3px 8px",
                      borderRadius: 4,
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {t.tag}
                  </span>
                </div>

                <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700, marginTop: 10 }}>
                  {t.role}
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#ffffff", margin: "4px 0 10px 0" }}>
                  {t.model}
                </h3>
                <p style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.6, margin: 0, fontFamily: "sans-serif" }}>
                  {t.desc}
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.06)",
                  marginTop: 16,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>PROVIDER</span>
                <span style={{ color: t.color, fontSize: 12, fontWeight: 800 }}>{t.provider}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Efficiency Callout */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: 16,
            marginTop: 20,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 26, fontWeight: 900, color: "#10b981" }}>10X</span>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>DEVELOPMENT SPEED VIA SOL SWEEPS</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 26, fontWeight: 900, color: "#f97316" }}>94.2%</span>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>ACCURACY VIA CLAUDE OPUS 5.5 AUDIT</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 26, fontWeight: 900, color: "#00f0ff" }}>70%</span>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>INFERENCE COST SAVINGS</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
