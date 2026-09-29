import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const AdaptiveThinkingVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });

  // Animated token count comparison
  const legacyTokens = interpolate(frame, [0, 45], [0, 4200], {
    extrapolateRight: "clamp",
  });
  const sonnetTokens = interpolate(frame, [0, 45], [0, 2940], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          width: 1760,
          height: 890,
          transform: `scale(${entrance}) translateY(-10px)`,
          borderRadius: 24,
          border: "1.5px solid rgba(56, 189, 248, 0.4)",
          backgroundColor: "#090d16",
          boxShadow: "0 35px 120px rgba(0,0,0,0.98), 0 0 60px rgba(56, 189, 248, 0.2)",
          display: "flex",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Left Side: Legacy Recursive Waste */}
        <div
          style={{
            flex: 1,
            borderRight: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "48px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.03) 0%, rgba(9, 13, 22, 0.95) 100%)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ef4444",
                  boxShadow: "0 0 10px #ef4444",
                }}
              />
              <span
                style={{
                  color: "#ef4444",
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  fontFamily: "monospace",
                }}
              >
                PREVIOUS FRONTIER MODELS
              </span>
            </div>

            <h3
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#FFFFFF",
                margin: "0 0 8px 0",
                letterSpacing: "-0.02em",
              }}
            >
              VERBOSE RECURSIVE LOOPS
            </h3>
            <p style={{ fontSize: 15, color: "#94a3b8", margin: 0, lineHeight: 1.4 }}>
              Thousands of wasted tokens wandering through redundant reasoning trees before solving simple bugs.
            </p>
          </div>

          {/* Stat Box */}
          <div
            style={{
              padding: "24px 32px",
              borderRadius: 16,
              backgroundColor: "rgba(239, 68, 68, 0.08)",
              border: "1.5px solid rgba(239, 68, 68, 0.25)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 800, color: "#f87171", fontFamily: "monospace" }}>
              AVERAGE TOKENS CONSUMED / TASK
            </span>
            <span style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF", fontFamily: "monospace" }}>
              {Math.round(legacyTokens).toLocaleString()}
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#ef4444" }}>
              ⚠️ High Latency + Unnecessary Cost Inflation
            </span>
          </div>

          {/* Loop visualization dots */}
          <div style={{ display: "flex", gap: 10 }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "rgba(239, 68, 68, 0.4)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Sonnet 5.5 Adaptive Thinking */}
        <div
          style={{
            flex: 1,
            padding: "48px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(9, 13, 22, 0.95) 100%)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#38bdf8",
                  boxShadow: "0 0 10px #38bdf8",
                }}
              />
              <span
                style={{
                  color: "#38bdf8",
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  fontFamily: "monospace",
                }}
              >
                CLAUDE SONNET 5.5 ARCHITECTURE
              </span>
            </div>

            <h3
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#FFFFFF",
                margin: "0 0 8px 0",
                letterSpacing: "-0.02em",
              }}
            >
              ADAPTIVE THINKING & PRUNING
            </h3>
            <p style={{ fontSize: 15, color: "#94a3b8", margin: 0, lineHeight: 1.4 }}>
              Refined internal deliberation reaches verified conclusions in fewer reasoning steps with zero hallucination loops.
            </p>
          </div>

          {/* Stat Box */}
          <div
            style={{
              padding: "24px 32px",
              borderRadius: 16,
              backgroundColor: "rgba(56, 189, 248, 0.08)",
              border: "1.5px solid rgba(56, 189, 248, 0.35)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.15)",
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 800, color: "#38bdf8", fontFamily: "monospace" }}>
              PRUNED TOKENS CONSUMED / TASK
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
              <span style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF", fontFamily: "monospace" }}>
                {Math.round(sonnetTokens).toLocaleString()}
              </span>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#10b981",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  padding: "4px 12px",
                  borderRadius: 8,
                }}
              >
                -30% FEWER TOKENS
              </span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#38bdf8" }}>
              ⚡ 30% Cheaper Effective Bill + 30% Faster Streaming
            </span>
          </div>

          {/* Feature Badges */}
          <div style={{ display: "flex", gap: 12 }}>
            <div
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 8,
                backgroundColor: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                textAlign: "center",
                fontSize: 12,
                fontWeight: 800,
                color: "#38bdf8",
                fontFamily: "monospace",
              }}
            >
              1M CONTEXT WINDOW
            </div>
            <div
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 8,
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                textAlign: "center",
                fontSize: 12,
                fontWeight: 800,
                color: "#10b981",
                fontFamily: "monospace",
              }}
            >
              128K MAX OUTPUT
            </div>
            <div
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 8,
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                textAlign: "center",
                fontSize: 12,
                fontWeight: 800,
                color: "#a855f7",
                fontFamily: "monospace",
              }}
            >
              ASL-3 CYBER SHIELDS
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
