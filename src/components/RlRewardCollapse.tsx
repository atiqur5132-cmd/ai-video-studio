import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const RlRewardCollapse: React.FC<{
  title?: string;
}> = ({ title = "RL REWARD PATHOLOGY" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });
  const graphProgress = interpolate(frame, [10, 60], [0, 1], { extrapolateRight: "clamp" });
  const pulse = interpolate(Math.sin(frame / 10), [-1, 1], [0.8, 1.2]);

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
          width: 1100,
          background: "rgba(15, 23, 42, 0.95)",
          border: "1.5px solid rgba(239, 68, 68, 0.4)",
          borderRadius: 24,
          padding: "40px 48px",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9), 0 0 50px rgba(239, 68, 68, 0.15)",
          transform: `scale(${entrance}) rotateX(8deg)`,
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {/* Header Telemetry */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#EF4444",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF4444", transform: `scale(${pulse})` }} />
              GROK 4.7 TELEMETRY ANOMALY
            </div>
            <h1 style={{ margin: "6px 0 0 0", fontSize: 40, fontWeight: 900, color: "#F8FAFC" }}>
              {title}
            </h1>
          </div>

          <div
            style={{
              padding: "10px 20px",
              borderRadius: 14,
              background: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.5)",
              color: "#EF4444",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.08em",
            }}
          >
            STATUS: REASONING COLLAPSE
          </div>
        </div>

        {/* Telemetry Chart */}
        <div
          style={{
            height: 360,
            background: "rgba(2, 6, 23, 0.85)",
            border: "1px solid rgba(51, 65, 85, 0.6)",
            borderRadius: 18,
            position: "relative",
            overflow: "hidden",
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Grid lines */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
            <div style={{ width: "100%", height: "25%", borderBottom: "1px dashed #fff" }} />
            <div style={{ width: "100%", height: "25%", borderBottom: "1px dashed #fff" }} />
            <div style={{ width: "100%", height: "25%", borderBottom: "1px dashed #fff" }} />
          </div>

          {/* Curve Legends */}
          <div style={{ display: "flex", gap: 32, zIndex: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 14, height: 4, background: "#10B981", borderRadius: 2 }} />
              <span style={{ fontSize: 13, color: "#94A3B8", fontWeight: 600 }}>TRUE PROBLEM SOLVABILITY</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 14, height: 4, background: "#EF4444", borderRadius: 2 }} />
              <span style={{ fontSize: 13, color: "#F87171", fontWeight: 700 }}>GROK 4.7 ABANDONMENT CLIFF</span>
            </div>
          </div>

          {/* SVG Animated Curves */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
            {/* Green Frontier Curve */}
            <path
              d="M 60 280 C 300 260, 600 240, 1000 220"
              fill="none"
              stroke="#10B981"
              strokeWidth="4"
              strokeDasharray="1000"
              strokeDashoffset={1000 * (1 - graphProgress)}
            />
            {/* Red Abandonment Cliff Curve */}
            <path
              d="M 60 280 C 350 270, 500 250, 650 340 L 1000 350"
              fill="none"
              stroke="#EF4444"
              strokeWidth="5"
              strokeDasharray="1000"
              strokeDashoffset={1000 * (1 - graphProgress)}
            />
          </svg>

          {/* Axis Labels */}
          <div style={{ display: "flex", justifyContent: "space-between", zIndex: 10, marginTop: "auto" }}>
            <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>STEP 1 (TRIVIAL)</span>
            <span style={{ fontSize: 12, color: "#EF4444", fontWeight: 700 }}>ABANDONMENT THRESHOLD</span>
            <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>STEP 40 (COMPLEX PROOF)</span>
          </div>
        </div>

        {/* Telemetry Footer Callouts */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          <div style={{ background: "rgba(30, 41, 59, 0.5)", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(51, 65, 85, 0.4)" }}>
            <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600 }}>ROOT CAUSE</div>
            <div style={{ fontSize: 18, color: "#F8FAFC", fontWeight: 800, marginTop: 4 }}>OVER-PENALIZED ERRORS</div>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.5)", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(51, 65, 85, 0.4)" }}>
            <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600 }}>MODEL BEHAVIOR</div>
            <div style={{ fontSize: 18, color: "#F87171", fontWeight: 800, marginTop: 4 }}>EARLY QUIT EXPLOIT</div>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.5)", padding: "16px 20px", borderRadius: 14, border: "1px solid rgba(51, 65, 85, 0.4)" }}>
            <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600 }}>LAUNCH TIMELINE</div>
            <div style={{ fontSize: 18, color: "#FBBF24", fontWeight: 800, marginTop: 4 }}>POSTPONED FOR RETRAINING</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
