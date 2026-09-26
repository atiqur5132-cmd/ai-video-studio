import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const LeanProofTree: React.FC<{
  title?: string;
}> = ({ title = "FORMAL THEOREM VERIFICATION" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });
  const revealStep = Math.min(4, Math.floor(frame / 20));

  const steps = [
    { label: "NAVIER-STOKES PDE", type: "CONTINUOUS FORMULATION", status: "INPUT", color: "#38BDF8" },
    { label: "HYPOTHESIS SEARCH", type: "GPT-6 ASTRA COGNITION", status: "SOLVED", color: "#818CF8" },
    { label: "STATEMENT C & D", type: "BREAKDOWN CONSTRUCTION", status: "PROVEN", color: "#F59E0B" },
    { label: "LEAN 4 AST KERNEL", type: "MACHINE FORMALIZED", status: "100% VERIFIED", color: "#10B981" },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        perspective: 1100,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          width: 1160,
          background: "rgba(15, 23, 42, 0.95)",
          border: "1.5px solid rgba(16, 185, 129, 0.4)",
          borderRadius: 24,
          padding: "40px 48px",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9), 0 0 50px rgba(16, 185, 129, 0.15)",
          transform: `scale(${entrance}) rotateX(6deg)`,
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#10B981",
                textTransform: "uppercase",
              }}
            >
              MILLENNIUM PRIZE SOLVER ENGINE
            </div>
            <h1 style={{ margin: "6px 0 0 0", fontSize: 40, fontWeight: 900, color: "#F8FAFC" }}>
              {title}
            </h1>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.5)",
              color: "#34D399",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.08em",
            }}
          >
            LEAN 4 INTERACTIVE PROVER
          </div>
        </div>

        {/* Pipeline Step Nodes */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          {steps.map((s, idx) => {
            const isUnlocked = idx <= revealStep;
            return (
              <React.Fragment key={s.label}>
                <div
                  style={{
                    flex: 1,
                    background: isUnlocked ? "rgba(30, 41, 59, 0.9)" : "rgba(15, 23, 42, 0.4)",
                    border: `1.5px solid ${isUnlocked ? s.color : "rgba(51, 65, 85, 0.3)"}`,
                    borderRadius: 18,
                    padding: "24px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    boxShadow: isUnlocked ? `0 10px 25px rgba(0,0,0,0.5), 0 0 20px ${s.color}33` : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: "0.1em" }}>
                      PHASE 0{idx + 1}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: 6,
                        background: isUnlocked ? `${s.color}22` : "transparent",
                        color: isUnlocked ? s.color : "#64748B",
                        border: `1px solid ${isUnlocked ? s.color : "#475569"}`,
                      }}
                    >
                      {isUnlocked ? s.status : "PENDING"}
                    </span>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: isUnlocked ? "#F8FAFC" : "#64748B" }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: 12, color: isUnlocked ? "#94A3B8" : "#475569", fontWeight: 600 }}>
                    {s.type}
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div style={{ color: isUnlocked ? "#10B981" : "#475569", fontSize: 22, fontWeight: 900 }}>
                    →
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Downstream Impact Tags */}
        <div
          style={{
            background: "rgba(2, 6, 23, 0.8)",
            borderRadius: 16,
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid rgba(51, 65, 85, 0.5)",
          }}
        >
          <span style={{ fontSize: 13, color: "#94A3B8", fontWeight: 600 }}>
            DOWNSTREAM SCIENTIFIC IMPACT:
          </span>
          <div style={{ display: "flex", gap: 12 }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 8, background: "rgba(56, 189, 248, 0.15)", color: "#38BDF8", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
              ⚡ BATTERY CHEMISTRY
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 8, background: "rgba(245, 158, 11, 0.15)", color: "#F59E0B", border: "1px solid rgba(245, 158, 11, 0.3)" }}>
              ⚛️ FUSION KINETICS
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 8, background: "rgba(168, 85, 247, 0.15)", color: "#C084FC", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
              🧬 MATERIALS DISCOVERY
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
