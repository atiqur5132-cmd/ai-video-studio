import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const MoERoutingEngine: React.FC = () => {
  const frame = useCurrentFrame();

  const experts = [
    { name: "EXPERT 01 // 3D SPATIAL KINEMATICS", load: 96, active: true },
    { name: "EXPERT 02 // THREE.JS WEBGL RENDERER", load: 94, active: true },
    { name: "EXPERT 03 // MULTI-FILE TYPESCRIPT", load: 88, active: true },
    { name: "EXPERT 04 // FORMAL MATH VERIFIER", load: 92, active: true },
    { name: "EXPERT 05 // AERODYNAMIC CFD ENGINE", load: 91, active: true },
    { name: "EXPERT 06 // LONG CONTEXT MEMORY 2M", load: 85, active: true },
    { name: "EXPERT 07 // SYMBOLIC ALGEBRA SOLVER", load: 42, active: false },
    { name: "EXPERT 08 // RECURSIVE PROOF VALIDATOR", load: 90, active: true },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020617",
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
            "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(2, 6, 23, 0.98) 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Routing Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 1540,
          height: 840,
          borderRadius: 24,
          border: "2px solid rgba(99, 102, 241, 0.35)",
          background: "rgba(10, 15, 30, 0.9)",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(99, 102, 241, 0.1)",
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
            borderBottom: "1px solid rgba(99, 102, 241, 0.25)",
            paddingBottom: 18,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#818CF8",
                boxShadow: "0 0 16px #818CF8",
              }}
            />
            <span style={{ color: "#F8FAFC", fontSize: 20, fontWeight: 800, letterSpacing: "0.1em" }}>
              DYNAMIC MULTI-HEAD ROUTER // SPARSE MIXTURE-OF-EXPERTS
            </span>
          </div>
          <div style={{ display: "flex", gap: 28, color: "#A5B4FC", fontSize: 14 }}>
            <span>NATIVE CONTEXT: 2,000,000 TOKENS</span>
            <span style={{ color: "#10B981" }}>LATENCY DROP: -42.8%</span>
            <span>ACTIVE ROUTING: TOP-2 SPARSE</span>
          </div>
        </div>

        {/* Dynamic Multi-Head Layout: Center Router dispatching to 8 Expert Banks */}
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
          {/* Left: Input Prompt Stream */}
          <div
            style={{
              width: 320,
              padding: 24,
              borderRadius: 16,
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "rgba(15, 23, 42, 0.7)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <span style={{ fontSize: 12, color: "#94A3B8" }}>INPUT TOKEN PIPELINE</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF" }}>2M CONTEXT DISPATCH</span>
            <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.6 }}>
              Evaluating incoming high-entropy prompt. Dynamic multi-head router skips monolithic weights and targets specialized sub-networks.
            </div>
            <div
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#10B981",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              ✓ ZERO HALLUCINATION GATE ACTIVE
            </div>
          </div>

          {/* Center: Dynamic Pulsing Router Core */}
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: "50%",
              border: "3px solid #818CF8",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(15, 23, 42, 0.9) 70%)",
              boxShadow: "0 0 50px rgba(99, 102, 241, 0.4), inset 0 0 30px rgba(99, 102, 241, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 11, color: "#A5B4FC" }}>MULTI-HEAD ROUTER</span>
            <span style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF" }}>MoE v4</span>
            <span style={{ fontSize: 12, color: "#38BDF8" }}>
              {(Math.sin(frame / 8) * 200 + 1850).toFixed(0)} TOK/SEC
            </span>
          </div>

          {/* Right: 8 Expert Banks */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {experts.map((exp, idx) => {
              const activePulse = exp.active
                ? Math.sin((frame + idx * 12) / 8) * 0.3 + 0.7
                : 0.2;
              return (
                <div
                  key={idx}
                  style={{
                    padding: 14,
                    borderRadius: 10,
                    border: exp.active
                      ? "1.5px solid rgba(99, 102, 241, 0.6)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    background: exp.active
                      ? `rgba(99, 102, 241, ${0.12 * activePulse})`
                      : "rgba(15, 23, 42, 0.4)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}>
                    <span style={{ color: exp.active ? "#FFFFFF" : "#64748B", fontWeight: 700 }}>
                      {exp.name}
                    </span>
                    <span style={{ color: exp.active ? "#10B981" : "#64748B" }}>
                      {exp.active ? `${exp.load}% ACTIVE` : "IDLE"}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 3,
                      background: "rgba(255, 255, 255, 0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${exp.load}%`,
                        height: "100%",
                        background: exp.active ? "linear-gradient(90deg, #6366F1, #38BDF8)" : "#475569",
                      }}
                    />
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
