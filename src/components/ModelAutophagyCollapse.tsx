import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ModelAutophagyCollapse: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const pulse = Math.sin(frame / 8);

  // Live fidelity drop animation: from 100% down to 14.8%
  const fidelityProgress = interpolate(frame, [20, 100], [100, 14.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const currentFidelity = fidelityProgress.toFixed(1);

  // Generation stages data
  const generations = [
    {
      gen: "GEN 0",
      title: "GROUND TRUTH",
      fidelity: "100%",
      status: "OPTIMAL",
      color: "#10B981",
      desc: "Pure Human & Frontier Verified Data",
    },
    {
      gen: "GEN 1",
      title: "1ST RECURSION",
      fidelity: "98.2%",
      status: "STABLE",
      color: "#38BDF8",
      desc: "Self-Generated Reasoning Chains",
    },
    {
      gen: "GEN 2",
      title: "COMPOUNDING",
      fidelity: "79.4%",
      status: "DEGRADING",
      color: "#F59E0B",
      desc: "Errors Recursively Amplified",
    },
    {
      gen: "GEN 3",
      title: "MODE COLLAPSE",
      fidelity: "14.8%",
      status: "CATASTROPHIC",
      color: "#EF4444",
      desc: "Autophagic Hallucination Loop",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        perspective: 1200,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Background Warning Ambience */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 600,
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.16) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          width: 1540,
          height: 650,
          transform: `scale(${entrance}) translateY(-10px)`,
          background: "rgba(8, 12, 22, 0.96)",
          border: "1.5px solid rgba(239, 68, 68, 0.4)",
          borderRadius: 24,
          padding: "36px 48px",
          boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 50px rgba(239, 68, 68, 0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            paddingBottom: 16,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  background: "rgba(239, 68, 68, 0.2)",
                  border: "1px solid #EF4444",
                  color: "#F87171",
                  fontSize: 11,
                  fontWeight: 900,
                  padding: "4px 12px",
                  borderRadius: 20,
                  letterSpacing: "0.12em",
                  fontFamily: "monospace",
                }}
              >
                ● CRITICAL RSI ANOMALY
              </span>
              <span style={{ color: "#94A3B8", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em" }}>
                SYNTHETIC TRAINING FEEDBACK LOOP
              </span>
            </div>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#F8FAFC",
                margin: "8px 0 0",
                letterSpacing: "-0.02em",
              }}
            >
              Model Autophagy Disorder (M.A.D.)
            </h2>
          </div>

          <div
            style={{
              background: "rgba(239, 68, 68, 0.15)",
              border: "1.5px solid #EF4444",
              borderRadius: 14,
              padding: "10px 22px",
              textAlign: "right",
              boxShadow: "0 0 25px rgba(239, 68, 68, 0.2)",
            }}
          >
            <div style={{ fontSize: 10, color: "#FCA5A5", fontWeight: 800, letterSpacing: "0.1em" }}>
              GEN-3 REASONING FIDELITY
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 900,
                color: "#EF4444",
                fontFamily: "monospace",
                lineHeight: 1.1,
                marginTop: 2,
              }}
            >
              {currentFidelity}%
            </div>
          </div>
        </div>

        {/* Middle Stage: 4-Generation Progression Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, margin: "16px 0" }}>
          {generations.map((g, idx) => {
            const isCollapse = idx === 3;
            const isDegrading = idx === 2;
            const itemSpring = spring({
              frame: frame - idx * 10,
              fps,
              config: { damping: 14, stiffness: 130 },
            });

            return (
              <div
                key={g.gen}
                style={{
                  transform: `scale(${Math.max(0, itemSpring)})`,
                  background: isCollapse
                    ? "linear-gradient(180deg, rgba(239, 68, 68, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%)"
                    : isDegrading
                    ? "linear-gradient(180deg, rgba(245, 158, 11, 0.15) 0%, rgba(15, 23, 42, 0.9) 100%)"
                    : "rgba(15, 23, 42, 0.7)",
                  border: isCollapse
                    ? "2px solid #EF4444"
                    : isDegrading
                    ? "1.5px solid #F59E0B"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 18,
                  padding: "20px 22px",
                  boxShadow: isCollapse ? "0 0 35px rgba(239, 68, 68, 0.3)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: 12,
                        fontWeight: 900,
                        color: g.color,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {g.gen}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: g.color,
                        background: `${g.color}20`,
                        border: `1px solid ${g.color}`,
                        borderRadius: 6,
                        padding: "2px 8px",
                        fontFamily: "monospace",
                      }}
                    >
                      {g.status}
                    </span>
                  </div>

                  <div style={{ fontSize: 18, fontWeight: 900, color: "#FFFFFF", margin: "10px 0 6px" }}>
                    {g.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.4 }}>
                    {g.desc}
                  </div>
                </div>

                <div style={{ marginTop: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 800, color: "#64748B", marginBottom: 6 }}>
                    <span>FIDELITY</span>
                    <span style={{ color: g.color, fontFamily: "monospace", fontWeight: 900 }}>{g.fidelity}</span>
                  </div>
                  <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
                    <div
                      style={{
                        width: g.fidelity,
                        height: "100%",
                        background: g.color,
                        borderRadius: 3,
                        boxShadow: `0 0 10px ${g.color}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Root Cause & Defense Banner */}
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "16px 26px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>⚠️</span>
              <div>
                <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 800, letterSpacing: "0.1em" }}>
                  PRIMARY MECHANISM
                </div>
                <div style={{ fontSize: 15, fontWeight: 900, color: "#F87171", fontFamily: "monospace" }}>
                  Self-Referential Error Compounding
                </div>
              </div>
            </div>

            <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.1)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>📉</span>
              <div>
                <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 800, letterSpacing: "0.1em" }}>
                  COLLAPSE TIMELINE
                </div>
                <div style={{ fontSize: 15, fontWeight: 900, color: "#F59E0B", fontFamily: "monospace" }}>
                  Catastrophic within 3 Generations
                </div>
              </div>
            </div>

            <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.1)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22 }}>🛡️</span>
              <div>
                <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 800, letterSpacing: "0.1em" }}>
                  MANDATORY COUNTERMEASURE
                </div>
                <div style={{ fontSize: 15, fontWeight: 900, color: "#34D399", fontFamily: "monospace" }}>
                  Strict Formal Verification (Lean 4)
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(239, 68, 68, 0.2)",
              border: "1px solid #EF4444",
              color: "#EF4444",
              borderRadius: 10,
              padding: "6px 16px",
              fontSize: 12,
              fontWeight: 900,
              fontFamily: "monospace",
            }}
          >
            HAZARD: RUNAWAY COLLAPSE
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
