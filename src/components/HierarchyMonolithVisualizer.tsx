import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { OfficialLogoBadge } from "./OfficialLogoBadge";

export const HierarchyMonolithVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02050c",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1000,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(2, 5, 12, 0.98) 75%)",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          width: 1760,
          height: 890,
          transform: `scale(${entrance * scale}) translateY(-12px)`,
          borderRadius: 24,
          border: "1.5px solid rgba(99, 102, 241, 0.6)",
          backgroundColor: "#080c17",
          boxShadow: "0 35px 120px rgba(0, 0, 0, 0.98), 0 0 60px rgba(99, 102, 241, 0.25)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
          zIndex: 5,
          padding: "36px 48px",
          justifyContent: "space-between",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#6366f1", boxShadow: "0 0 10px #6366f1" }} />
              <span style={{ color: "#6366f1", fontSize: 13, fontWeight: 900, letterSpacing: "0.15em", fontFamily: "monospace" }}>
                PRE-RELEASE ASSUMPTION
              </span>
            </div>
            <h2 style={{ fontSize: 38, fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              HIERARCHY LOCKED IN STONE
            </h2>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: 20,
              backgroundColor: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              color: "#6366f1",
              fontSize: 13,
              fontWeight: 800,
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>🔒</span> <span>ESTABLISHED PEAK FOR 2026</span>
          </div>
        </div>

        {/* 3-Tier Monolith Podium */}
        <div style={{ display: "flex", gap: 32, flex: 1, margin: "24px 0", alignItems: "flex-end" }}>
          {/* Tier 3: Haiku 5 (Base) */}
          <div
            style={{
              flex: 1,
              height: 380,
              borderRadius: 20,
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#94a3b8", fontFamily: "monospace" }}>
                TIER 3 • LIGHTWEIGHT AGENT
              </span>
              <h3 style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>
                CLAUDE HAIKU 5
              </h3>
              <span style={{ fontSize: 14, color: "#64748b", fontFamily: "monospace" }}>
                $0.25 / M In • $1.25 / M Out
              </span>
            </div>
            <div style={{ padding: "10px 14px", borderRadius: 8, backgroundColor: "rgba(255,255,255,0.03)", textAlign: "center", fontSize: 12, color: "#94a3b8", fontWeight: 700 }}>
              Rapid triage & simple classifications
            </div>
          </div>

          {/* Tier 2: Sonnet 5 (Mid-tier Workhorse) */}
          <div
            style={{
              flex: 1,
              height: 480,
              borderRadius: 20,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1.5px solid rgba(99, 102, 241, 0.4)",
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#6366f1", fontFamily: "monospace" }}>
                TIER 2 • STANDARD WORKHORSE
              </span>
              <h3 style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>
                CLAUDE SONNET 5
              </h3>
              <span style={{ fontSize: 14, color: "#94a3b8", fontFamily: "monospace" }}>
                10.3% Terminal-Bench • Oct 2024
              </span>
            </div>
            <div style={{ padding: "12px 14px", borderRadius: 8, backgroundColor: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.3)", textAlign: "center", fontSize: 13, color: "#6366f1", fontWeight: 800 }}>
              Assumed to remain the mid-tier baseline
            </div>
          </div>

          {/* Tier 1: Opus 5.5 (Flagship Apex) */}
          <div
            style={{
              flex: 1.2,
              height: 580,
              borderRadius: 20,
              backgroundColor: "rgba(217, 119, 87, 0.08)",
              border: "2px solid rgba(217, 119, 87, 0.6)",
              boxShadow: "0 20px 60px rgba(217, 119, 87, 0.2)",
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#d97757", fontFamily: "monospace", letterSpacing: "0.1em" }}>
                  TIER 1 • CROWNED KING OF CODE
                </span>
                <h3 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: "8px 0" }}>
                  CLAUDE OPUS 5.5
                </h3>
                <span style={{ fontSize: 16, color: "#d97757", fontWeight: 800, fontFamily: "monospace" }}>
                  $4 / M In • $20 / M Out • 66.4% Terminal
                </span>
              </div>
              <OfficialLogoBadge logo="claude" size={54} staticMode={true} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ color: "#f8fafc", fontSize: 14, fontWeight: 700 }}>
                Developers believed Opus 5.5 would reign supreme at double the price...
              </div>
              <div style={{ padding: "12px 16px", borderRadius: 8, backgroundColor: "rgba(217, 119, 87, 0.2)", border: "1px solid rgba(217, 119, 87, 0.5)", textAlign: "center", fontSize: 13, color: "#FFFFFF", fontWeight: 900 }}>
                UNTIL SONNET 5.5 DROPPED 6 DAYS LATER
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            padding: "14px 28px",
            borderRadius: 14,
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 14, color: "#94a3b8", fontWeight: 700 }}>
            September 2026: The entire developer world expected no further mid-tier updates until 2027.
          </span>
          <span style={{ fontSize: 14, color: "#ef4444", fontWeight: 900, fontFamily: "monospace" }}>
            DISRUPTION IMMINENT
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
