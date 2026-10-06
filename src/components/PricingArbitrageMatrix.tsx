import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const PricingArbitrageMatrix: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 15, stiffness: 90 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], { extrapolateRight: "clamp" });

  const progress1 = interpolate(frame, [10, 45], [0, 80], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const progress2 = interpolate(frame, [25, 60], [0, 95], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
      {/* Background Volumetric Emerald Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(2, 5, 12, 0.98) 75%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Dossier Window */}
      <div
        style={{
          width: 1740,
          height: 780,
          transform: `scale(${entrance * scale}) translateY(-55px)`,
          borderRadius: 22,
          border: "1.5px solid rgba(16, 185, 129, 0.45)",
          backgroundColor: "#070b14",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.98), 0 0 60px rgba(16, 185, 129, 0.18)",
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
            borderBottom: "1px solid rgba(16, 185, 129, 0.3)",
            paddingBottom: 18,
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
              OPENAI API ARBITRAGE // GPT-6.1 SOL PRICING BREAKDOWN
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
            OFFICIAL SAM ALTMAN ANNOUNCEMENT
          </div>
        </div>

        {/* 3 Comparative Tier Columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28, marginTop: 28, flex: 1 }}>
          {/* Card 1: GPT-6.1 Astra (Shelved Baseline) */}
          <div
            style={{
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.7)",
              border: "1.5px solid rgba(255, 255, 255, 0.1)",
              padding: "26px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>
                PLANNED FLAGSHIP (SHELVED)
              </div>
              <div style={{ fontSize: 30, fontWeight: 900, color: "#cbd5e1", marginTop: 4 }}>
                GPT-6.1 Astra
              </div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#64748b", marginTop: 14, textDecoration: "line-through" }}>
                $15.00
              </div>
              <div style={{ color: "#64748b", fontSize: 12, marginTop: 2 }}>per 1M input tokens</div>
            </div>

            <div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 14 }}>
                <div style={{ color: "#94a3b8", fontSize: 12 }}>Architecture: Heavy Compute</div>
                <div style={{ color: "#ef4444", fontSize: 13, fontWeight: 800, marginTop: 4 }}>
                  Status: Shelved Post-Audit
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: GPT-6.1 Sol (The Price Slash) */}
          <div
            style={{
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1.5px solid rgba(16, 185, 129, 0.5)",
              padding: "26px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 0 40px rgba(16, 185, 129, 0.15)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#10b981", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em" }}>
                  1/5TH PRICE OF ASTRA
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "#10b981",
                    padding: "3px 8px",
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 900,
                  }}
                >
                  -80% CUT
                </span>
              </div>
              <div style={{ fontSize: 30, fontWeight: 900, color: "#ffffff", marginTop: 4 }}>
                GPT-6.1 Sol
              </div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#10b981", marginTop: 14 }}>
                $3.00
              </div>
              <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 2 }}>per 1M input tokens</div>
            </div>

            <div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#64748b", marginBottom: 4 }}>
                  <span>COST REDUCTION</span>
                  <span style={{ color: "#10b981", fontWeight: 800 }}>80% SAVINGS</span>
                </div>
                <div style={{ height: 8, backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${progress1}%`, backgroundColor: "#10b981" }} />
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 14 }}>
                <div style={{ color: "#94a3b8", fontSize: 12 }}>Token Cost: 80% Lower</div>
                <div style={{ color: "#10b981", fontSize: 13, fontWeight: 800, marginTop: 4 }}>
                  Status: Live in Production
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Prompt Caching Read Tier (The 95% Weapon) */}
          <div
            style={{
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1.5px solid rgba(0, 240, 255, 0.5)",
              padding: "26px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 0 40px rgba(0, 240, 255, 0.15)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#00f0ff", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em" }}>
                  PROMPT CACHING READ
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(0, 240, 255, 0.2)",
                    color: "#00f0ff",
                    padding: "3px 8px",
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 900,
                  }}
                >
                  -95% DISCOUNT
                </span>
              </div>
              <div style={{ fontSize: 30, fontWeight: 900, color: "#ffffff", marginTop: 4 }}>
                Cached Sol
              </div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#00f0ff", marginTop: 14 }}>
                $0.15
              </div>
              <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 2 }}>per 1M cached tokens</div>
            </div>

            <div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#64748b", marginBottom: 4 }}>
                  <span>PROMPT CACHE DISCOUNT</span>
                  <span style={{ color: "#00f0ff", fontWeight: 800 }}>95% MARGIN</span>
                </div>
                <div style={{ height: 8, backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${progress2}%`, backgroundColor: "#00f0ff" }} />
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 14 }}>
                <div style={{ color: "#94a3b8", fontSize: 12 }}>Continuous Agent Sweeps</div>
                <div style={{ color: "#00f0ff", fontSize: 13, fontWeight: 800, marginTop: 4 }}>
                  Status: Sub-Cent API Access
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-strip */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: 14,
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "#64748b",
          }}
        >
          <span>ENGINEERING SHIFT: BRUTE-FORCE HIGH-VOLUME BACKGROUND AGENTS</span>
          <span style={{ color: "#10b981", fontWeight: 700 }}>
            DEVELOPER ARBITRAGE: MASSIVE SCALE RUNNERS AT 1/20TH HISTORIC COST
          </span>
          <span>SOURCE: OPENAI OFFICIAL API TIERS</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
