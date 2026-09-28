import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const MultiTierReasoningSelector: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 5 tiers revealed sequentially as voiceover speaks: "Low, medium, high, extra high, and max"
  const tiers = [
    { level: "01", name: "LOW", budget: "4,000 TOKENS", desc: "Fast Syntax Triage & Quick Edits", color: "#64748B", triggerFrame: 10 },
    { level: "02", name: "MEDIUM", budget: "16,000 TOKENS", desc: "Standard Component Logic & Testing", color: "#38BDF8", triggerFrame: 70 },
    { level: "03", name: "HIGH", budget: "32,000 TOKENS", desc: "Architectural Multi-Module Refactoring", color: "#00F0FF", triggerFrame: 130 },
    { level: "04", name: "EXTRA HIGH", budget: "64,000 TOKENS", desc: "Deep Algorithmic Proof & Bug Elimination", color: "#F59E0B", triggerFrame: 190 },
    { level: "05", name: "MAX (ADAPTIVE)", budget: "128,000 TOKENS", desc: "Autonomous Enterprise SWE Pipeline", color: "#FF6B4A", triggerFrame: 260 },
  ];

  const containerSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

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
            "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(3, 7, 18, 0.98) 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 1540,
          height: 840,
          borderRadius: 24,
          border: "2px solid rgba(245, 158, 11, 0.35)",
          background: "rgba(9, 14, 26, 0.94)",
          boxShadow:
            "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(245, 158, 11, 0.15)",
          display: "flex",
          flexDirection: "column",
          padding: 40,
          boxSizing: "border-box",
          transform: `scale(${interpolate(containerSpring, [0, 1], [0.95, 1])})`,
          opacity: containerSpring,
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(245, 158, 11, 0.25)",
            paddingBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#F59E0B",
                boxShadow: "0 0 16px #F59E0B",
              }}
            />
            <span
              style={{
                color: "#F8FAFC",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "0.08em",
              }}
            >
              DYNAMIC REASONING SELECTOR // 5 INTENSITY TIERS
            </span>
          </div>
          <div
            style={{
              color: "#F59E0B",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.05em",
              background: "rgba(245, 158, 11, 0.12)",
              padding: "6px 14px",
              borderRadius: 8,
              border: "1px solid rgba(245, 158, 11, 0.3)",
            }}
          >
            ADAPTIVE SUMMARIZED THINKING: ACTIVE
          </div>
        </div>

        {/* 5 Tier Cards Grid */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
            marginTop: 24,
          }}
        >
          {tiers.map((t, idx) => {
            const isActive = frame >= t.triggerFrame;
            const tierSpring = spring({
              frame: Math.max(0, frame - t.triggerFrame),
              fps,
              config: { damping: 14, stiffness: 120 },
            });

            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 28px",
                  borderRadius: 14,
                  background: isActive
                    ? `rgba(255, 255, 255, 0.05)`
                    : "rgba(255, 255, 255, 0.015)",
                  border: isActive
                    ? `1.5px solid ${t.color}`
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isActive
                    ? `0 0 25px ${t.color}30`
                    : "none",
                  transform: `translateX(${interpolate(tierSpring, [0, 1], [-20, 0])}px)`,
                  opacity: isActive ? 1 : 0.4,
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: isActive ? t.color : "#475569",
                      width: 32,
                    }}
                  >
                    {t.level}
                  </span>
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 900,
                      color: isActive ? "#FFFFFF" : "#64748B",
                      minWidth: 200,
                    }}
                  >
                    {t.name}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "#94A3B8",
                    }}
                  >
                    {t.desc}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: isActive ? t.color : "#475569",
                      background: "rgba(0, 0, 0, 0.4)",
                      padding: "6px 16px",
                      borderRadius: 8,
                      border: `1px solid ${isActive ? t.color + "50" : "rgba(255,255,255,0.05)"}`,
                    }}
                  >
                    {t.budget}
                  </span>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: isActive ? t.color : "#334155",
                      boxShadow: isActive ? `0 0 10px ${t.color}` : "none",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Telemetry Strip */}
        <div
          style={{
            borderTop: "1px solid rgba(245, 158, 11, 0.2)",
            paddingTop: 16,
            marginTop: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "#64748B",
          }}
        >
          <span>ENGINE: FACTORY DROID 0.228.0 INTEGRATION</span>
          <span style={{ color: "#F59E0B", fontWeight: 700 }}>
            FEATURE: ADAPTIVE SUMMARIZED CHAIN-OF-THOUGHT
          </span>
          <span>OUTPUT CAP: 128,000 TOKENS (MAX TIER)</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
