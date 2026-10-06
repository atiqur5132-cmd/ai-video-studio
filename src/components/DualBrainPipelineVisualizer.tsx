import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const DualBrainPipelineVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 15, stiffness: 90 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], { extrapolateRight: "clamp" });

  const pulseOffset = (frame * 3) % 100;

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
      {/* Background Volumetric Sky Blue Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(2, 5, 12, 0.98) 75%)",
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
          border: "1.5px solid rgba(56, 189, 248, 0.4)",
          backgroundColor: "#070b14",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.98), 0 0 60px rgba(56, 189, 248, 0.15)",
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
            borderBottom: "1px solid rgba(56, 189, 248, 0.25)",
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
                boxShadow: "0 0 14px #38bdf8",
              }}
            />
            <span style={{ color: "#38bdf8", fontSize: 14, fontWeight: 900, letterSpacing: "0.2em" }}>
              STANFORD RESEARCH // DUAL-BRAIN AGENT ARCHITECTURE
            </span>
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 8,
              backgroundColor: "rgba(56, 189, 248, 0.15)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              color: "#38bdf8",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.1em",
            }}
          >
            ARXIV:2608.05643 BENCHMARK
          </div>
        </div>

        {/* Central Architecture Pipeline Flow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 32, flex: 1, gap: 24 }}>
          {/* Node 1: Fast Generator (GPT-6.1 Sol) */}
          <div
            style={{
              flex: 1,
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1.5px solid rgba(16, 185, 129, 0.45)",
              padding: "28px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#10b981", fontSize: 12, fontWeight: 800 }}>TIER 1: HIGH SPEED</span>
                <span style={{ backgroundColor: "rgba(16, 185, 129, 0.2)", color: "#10b981", padding: "3px 8px", borderRadius: 4, fontSize: 11, fontWeight: 900 }}>
                  $0.05 / TASK
                </span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#ffffff", margin: "10px 0 6px 0" }}>
                GPT-6.1 Sol
              </h3>
              <div style={{ color: "#38bdf8", fontSize: 14, fontWeight: 700 }}>
                Autonomous Draft Generator
              </div>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.5, marginTop: 10, fontFamily: "sans-serif" }}>
                Rapidly explores hypothesis spaces, executes multi-file code transformations, and generates high-volume test cases.
              </p>
            </div>

            <div style={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", marginTop: 16 }}>
              <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>PRIMARY ADVANTAGE</div>
              <div style={{ color: "#10b981", fontSize: 15, fontWeight: 900, marginTop: 2 }}>Sub-Cent Inference Speed</div>
            </div>
          </div>

          {/* Center Pipeline Bridge & Pulse */}
          <div style={{ width: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <div style={{ color: "#38bdf8", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textAlign: "center" }}>
              CONTINUOUS FEEDBACK LOOP
            </div>

            <div
              style={{
                width: "100%",
                height: 6,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: `${pulseOffset}%`,
                  width: 50,
                  height: "100%",
                  backgroundColor: "#38bdf8",
                  boxShadow: "0 0 12px #38bdf8",
                  borderRadius: 3,
                }}
              />
            </div>

            <div
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                padding: "8px 14px",
                borderRadius: 8,
                color: "#f0fdf4",
                fontSize: 12,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              AUTONOMOUS AST AUDIT
            </div>
          </div>

          {/* Node 2: Surgical Verifier (Claude Opus 5.5) */}
          <div
            style={{
              flex: 1,
              borderRadius: 18,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1.5px solid rgba(249, 115, 22, 0.45)",
              padding: "28px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#f97316", fontSize: 12, fontWeight: 800 }}>TIER 2: SURGICAL AUDIT</span>
                <span style={{ backgroundColor: "rgba(249, 115, 22, 0.2)", color: "#f97316", padding: "3px 8px", borderRadius: 4, fontSize: 11, fontWeight: 900 }}>
                  94.2% SWE-BENCH
                </span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#ffffff", margin: "10px 0 6px 0" }}>
                Claude Opus 5.5
              </h3>
              <div style={{ color: "#f97316", fontSize: 14, fontWeight: 700 }}>
                Surgical Code Reviewer & Verifier
              </div>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.5, marginTop: 10, fontFamily: "sans-serif" }}>
                Conducts zero-tolerance logic verification, catches subtle edge cases, and guides Sol to autonomous self-healing.
              </p>
            </div>

            <div style={{ backgroundColor: "rgba(0,0,0,0.4)", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", marginTop: 16 }}>
              <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>PRIMARY ADVANTAGE</div>
              <div style={{ color: "#f97316", fontSize: 15, fontWeight: 900, marginTop: 2 }}>Zero Hallucination Precision</div>
            </div>
          </div>
        </div>

        {/* Bottom Proven Results Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: 16,
            marginTop: 22,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 32, fontWeight: 900, color: "#10b981" }}>91.2%</span>
            <div>
              <div style={{ color: "#ffffff", fontSize: 14, fontWeight: 800 }}>AUTONOMOUS BUG RECOVERY</div>
              <div style={{ color: "#94a3b8", fontSize: 12 }}>Self-healing without human intervention</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 32, fontWeight: 900, color: "#38bdf8" }}>70%</span>
            <div>
              <div style={{ color: "#ffffff", fontSize: 14, fontWeight: 800 }}>INFERENCE COST REDUCTION</div>
              <div style={{ color: "#94a3b8", fontSize: 12 }}>Versus running Opus exclusively</div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
