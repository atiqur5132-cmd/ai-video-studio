import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ContinuousTokenEngine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 90 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], { extrapolateRight: "clamp" });

  // Token counter counting up to 1,000,000
  const tokenCount = Math.round(
    interpolate(frame, [15, 90], [64000, 1000000], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const formattedTokens = tokenCount.toLocaleString();

  // Pulse animation for memory grid
  const pulse = Math.sin(frame * 0.15) * 0.5 + 0.5;

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
      {/* Background Volumetric Cyan Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(2, 5, 12, 0.98) 75%)",
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
          border: "1.5px solid rgba(0, 240, 255, 0.4)",
          backgroundColor: "#070b14",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.98), 0 0 60px rgba(0, 240, 255, 0.18)",
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
            borderBottom: "1px solid rgba(0, 240, 255, 0.25)",
            paddingBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#00f0ff",
                boxShadow: `0 0 ${12 + pulse * 10}px #00f0ff`,
              }}
            />
            <span style={{ color: "#00f0ff", fontSize: 14, fontWeight: 900, letterSpacing: "0.2em" }}>
              DEEPMIND ARCHITECTURAL BREAKTHROUGH // CONTINUOUS TOKEN ENGINE
            </span>
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 8,
              backgroundColor: "rgba(0, 240, 255, 0.15)",
              border: "1px solid rgba(0, 240, 255, 0.4)",
              color: "#00f0ff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.1em",
            }}
          >
            GEMINI 4 ARGON SOVEREIGN SPEC
          </div>
        </div>

        {/* Content Body: Side by Side Comparison */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 32, marginTop: 24, flex: 1 }}>
          {/* Left Column: Standard Limit (64K) */}
          <div
            style={{
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.7)",
              border: "1.5px solid rgba(239, 68, 68, 0.35)",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>
                INDUSTRY STANDARD LLM
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#ffffff", marginTop: 4 }}>
                32K – 64K Output Limit
              </div>
              <div style={{ color: "#ef4444", fontSize: 13, fontWeight: 800, marginTop: 10 }}>
                CRITICAL BOTTLENECK:
              </div>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6, marginTop: 6, fontFamily: "sans-serif" }}>
                Standard models choke, loop, or truncate when generating extensive code. Forces developers to chop refactors into brittle micro-patches.
              </p>
            </div>

            <div style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(239, 68, 68, 0.25)" }}>
              <div style={{ color: "#ef4444", fontSize: 12, fontWeight: 800 }}>FILE CAPACITY PER CALL</div>
              <div style={{ color: "#ffffff", fontSize: 22, fontWeight: 900, marginTop: 4 }}>~1 to 3 Files Max</div>
              <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 2 }}>Context degradation above 32K tokens</div>
            </div>
          </div>

          {/* Right Column: Argon Hero 1,000,000 Continuous Tokens */}
          <div
            style={{
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: "1.5px solid rgba(0, 240, 255, 0.5)",
              padding: "28px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 0 50px rgba(0, 240, 255, 0.15)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#00f0ff", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em" }}>
                  UNPRECEDENTED GENERATION CAPACITY
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(0, 240, 255, 0.2)",
                    color: "#00f0ff",
                    padding: "4px 10px",
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 900,
                  }}
                >
                  SINGLE INFERENCE PASS
                </span>
              </div>

              {/* Big Animated Counter */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 12 }}>
                <span style={{ fontSize: 62, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em" }}>
                  {formattedTokens}
                </span>
                <span style={{ fontSize: 24, fontWeight: 900, color: "#00f0ff" }}>
                  CONTINUOUS TOKENS
                </span>
              </div>
              <div style={{ color: "#94a3b8", fontSize: 13, marginTop: -4 }}>
                Zero context forgetting • Uninterrupted multi-file monolith generation
              </div>
            </div>

            {/* 3 Metric Pills */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginTop: 16 }}>
              <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(0, 240, 255, 0.2)" }}>
                <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>MONOLITH REFACTOR</div>
                <div style={{ color: "#00f0ff", fontSize: 20, fontWeight: 900, marginTop: 4 }}>140+ Files</div>
                <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 2 }}>Rewritten in 1 Pass</div>
              </div>

              <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(0, 240, 255, 0.2)" }}>
                <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>PURGED CODE</div>
                <div style={{ color: "#10b981", fontSize: 20, fontWeight: 900, marginTop: 4 }}>38,000 Lines</div>
                <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 2 }}>Zero AST breakages</div>
              </div>

              <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(0, 240, 255, 0.2)" }}>
                <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>BENCHMARK SCORE</div>
                <div style={{ color: "#38bdf8", fontSize: 20, fontWeight: 900, marginTop: 4 }}>77.9% DeepSWE</div>
                <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 2 }}>First-pass solve rate</div>
              </div>
            </div>
          </div>
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
          <span>EVALUATION LOG: DEEPMIND TPUS-v5e POD RUNTIME</span>
          <span style={{ color: "#00f0ff", fontWeight: 700 }}>
            REASONING ARCHITECTURE: FULL CODEBASE AST INGESTION & HEALING
          </span>
          <span>INTERNAL INFRASTRUCTURE ONLY</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
