import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const FormalMathVerificationTree: React.FC = () => {
  const frame = useCurrentFrame();

  const proofSteps = [
    { step: "01", claim: "Formal Tensor Decomposition", status: "VERIFIED", latency: "1.2ms", color: "#10B981" },
    { step: "02", claim: "Navier-Stokes Fluid Discretization", status: "VERIFIED", latency: "2.8ms", color: "#10B981" },
    { step: "03", claim: "Lift-to-Drag Vector Equivalence", status: "VERIFIED", latency: "1.9ms", color: "#10B981" },
    { step: "04", claim: "Recursive Syntax Self-Correction", status: "PRUNED // 0 ERRORS", latency: "0.8ms", color: "#38BDF8" },
    { step: "05", claim: "WebGL Shading Coordinate Convergence", status: "VERIFIED", latency: "3.1ms", color: "#10B981" },
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
      {/* Background Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.12) 0%, rgba(3, 7, 18, 0.98) 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Verification Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 1460,
          height: 820,
          borderRadius: 24,
          border: "2px solid rgba(16, 185, 129, 0.35)",
          background: "rgba(9, 14, 26, 0.92)",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 50px rgba(16, 185, 129, 0.1)",
          display: "flex",
          flexDirection: "column",
          padding: 36,
          boxSizing: "border-box",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(16, 185, 129, 0.25)",
            paddingBottom: 18,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#10B981",
                boxShadow: "0 0 16px #10B981",
              }}
            />
            <span style={{ color: "#F8FAFC", fontSize: 20, fontWeight: 800, letterSpacing: "0.1em" }}>
              DEEPMIND FORMAL SOLVER // RECURSIVE SELF-CORRECTION TREE
            </span>
          </div>
          <div style={{ display: "flex", gap: 28, color: "#6EE7B7", fontSize: 14 }}>
            <span>TREE SEARCH: MONTE CARLO</span>
            <span>VERIFICATION: FORMAL LEAN 4 SOLVER</span>
            <span>ERROR RATE: 0.00%</span>
          </div>
        </div>

        {/* Verification Tree Layout */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 24,
            gap: 40,
          }}
        >
          {/* Left: Logic Pipeline Summary */}
          <div
            style={{
              width: 360,
              padding: 24,
              borderRadius: 16,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "rgba(15, 23, 42, 0.7)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <span style={{ fontSize: 12, color: "#94A3B8" }}>INFERENCE INTEGRITY HARNESS</span>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF" }}>FORMAL PROOF ENGINE</span>
            <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
              Internal reasoning steps are formally audited against deterministic symbolic solvers before token emission.
            </div>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                color: "#10B981",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ✓ 100% REASONING PATHWAY CERTIFIED
            </div>
          </div>

          {/* Right: Step-by-Step Proof Verification Ladder */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {proofSteps.map((p, idx) => {
              const stepPulse = Math.sin((frame + idx * 15) / 10) * 0.15 + 0.85;
              return (
                <div
                  key={idx}
                  style={{
                    padding: "18px 24px",
                    borderRadius: 12,
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    background: `rgba(6, 78, 59, ${0.2 * stepPulse})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "rgba(255, 255, 255, 0.08)",
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#94A3B8",
                      }}
                    >
                      STEP {p.step}
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "#F8FAFC" }}>
                      {p.claim}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontSize: 12, color: "#64748B" }}>{p.latency}</span>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: p.color,
                        padding: "4px 12px",
                        borderRadius: 6,
                        background: "rgba(16, 185, 129, 0.15)",
                        border: `1px solid ${p.color}40`,
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
