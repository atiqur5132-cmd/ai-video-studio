import React from "react";
import { AbsoluteFill } from "remotion";

export const ReasoningJumpGauge: React.FC = () => {
  const models = [
    { name: "GEMINI 3 PRO", score: "38.4%", progress: 0.384, color: "#64748B", note: "PREVIOUS GEN BASELINE" },
    { name: "CLAUDE OPUS 5.5", score: "72.8%", progress: 0.728, color: "#F59E0B", note: "ANTHROPIC FLAGSHIP" },
    { name: "GEMINI 4 PRO (LEAKED)", score: "77.1%", progress: 0.771, color: "#00F0FF", note: "NEW FRONTIER CHAMPION", isHero: true },
  ];

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
      {/* Volumetric Radial Glow */}
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
          width: 1480,
          height: 820,
          borderRadius: 24,
          border: "2px solid rgba(56, 189, 248, 0.35)",
          background: "rgba(9, 14, 26, 0.92)",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(14, 165, 233, 0.1)",
          display: "flex",
          flexDirection: "column",
          padding: 40,
          boxSizing: "border-box",
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
            <span style={{ color: "#F8FAFC", fontSize: 20, fontWeight: 800, letterSpacing: "0.1em" }}>
              ARC-AGI-2 // FRONTIER NOVEL REASONING BENCHMARK (PASS@1)
            </span>
          </div>
          <div style={{ color: "#38BDF8", fontSize: 14 }}>
            EVALUATION: ZERO MEMORIZATION BIAS
          </div>
        </div>

        {/* 3 Model Comparison Cards */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
            marginTop: 36,
          }}
        >
          {models.map((m, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                height: "100%",
                borderRadius: 18,
                border: m.isHero
                  ? "2px solid #00F0FF"
                  : "1px solid rgba(255, 255, 255, 0.12)",
                background: m.isHero
                  ? "rgba(14, 165, 233, 0.15)"
                  : "rgba(15, 23, 42, 0.6)",
                boxShadow: m.isHero
                  ? "0 0 40px rgba(0, 240, 255, 0.25)"
                  : "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 32,
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: 12, color: m.color, fontWeight: 800, letterSpacing: "0.08em" }}>
                  {m.note}
                </span>
                <span style={{ fontSize: 22, fontWeight: 900, color: "#FFFFFF" }}>
                  {m.name}
                </span>
              </div>

              {/* Big Score Display */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span
                  style={{
                    fontSize: 88,
                    fontWeight: 900,
                    color: m.color,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    textShadow: m.isHero ? `0 0 35px ${m.color}` : "none",
                  }}
                >
                  {m.score}
                </span>
              </div>

              {/* Progress Arc Bar */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div
                  style={{
                    height: 12,
                    borderRadius: 6,
                    background: "rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${m.progress * 100}%`,
                      height: "100%",
                      borderRadius: 6,
                      background: m.isHero
                        ? "linear-gradient(90deg, #0EA5E9, #00F0FF)"
                        : m.color,
                      boxShadow: m.isHero ? "0 0 15px #00F0FF" : "none",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#64748B" }}>
                  <span>0%</span>
                  <span>100% MAXIMUM</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
