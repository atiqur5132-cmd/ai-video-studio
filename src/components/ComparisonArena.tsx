import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ComparisonArena: React.FC<{
  leftTitle?: string;
  leftSubtitle?: string;
  leftStat?: string;
  rightTitle?: string;
  rightSubtitle?: string;
  rightStat?: string;
}> = ({
  leftTitle = "TRADITIONAL LAB",
  leftSubtitle = "500 Elite PhD Researchers",
  leftStat = "24",
  rightTitle = "RSI FACTORY",
  rightSubtitle = "100,000 Automated Agents",
  rightStat = "1,000,000+",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 15, stiffness: 100 } });
  const laserPulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.6, 1.0]);

  // Live counter for right stat
  const rightCounter = interpolate(frame, [20, 80], [1000, 1000000], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const formattedRight = Math.round(rightCounter).toLocaleString();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          width: 1520,
          height: 560,
          transform: `scale(${entrance}) translateY(40px)`,
          display: "flex",
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.95)",
          background: "rgba(8, 12, 20, 0.95)",
        }}
      >
        {/* ========================================================= */}
        {/* Left Side: Traditional AI Lab (Simple, Minimal, Bold)     */}
        {/* ========================================================= */}
        <div
          style={{
            flex: 1,
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(8, 12, 20, 0.8) 100%)",
            padding: "48px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          {/* Header */}
          <div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 900,
                color: "#94A3B8",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              LEGACY ARCHITECTURE
            </span>
            <h3
              style={{
                fontSize: 34,
                fontWeight: 900,
                color: "#F8FAFC",
                margin: "8px 0 4px",
                letterSpacing: "-0.01em",
              }}
            >
              {leftTitle}
            </h3>
            <p style={{ fontSize: 16, color: "#64748B", margin: 0 }}>{leftSubtitle}</p>
          </div>

          {/* Central Hero Number */}
          <div style={{ padding: "20px 0" }}>
            <div
              style={{
                fontSize: 104,
                fontWeight: 900,
                color: "#94A3B8",
                fontFamily: "system-ui, -apple-system, sans-serif",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              ~24
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#CBD5E1",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              Experiments Per Year
            </div>
          </div>

          {/* Bottom Pill */}
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(239, 68, 68, 0.12)",
                border: "1px solid rgba(239, 68, 68, 0.35)",
                color: "#F87171",
                fontSize: 12,
                fontWeight: 800,
                padding: "6px 16px",
                borderRadius: 999,
                fontFamily: "monospace",
                letterSpacing: "0.06em",
              }}
            >
              <span>●</span> HUMAN BOTTLENECK (40 HRS/WK)
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Center Divider & Velocity Pill                            */}
        {/* ========================================================= */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: 2,
            background: "#00F0FF",
            boxShadow: `0 0 25px #00F0FF, 0 0 50px rgba(0, 240, 255, ${laserPulse})`,
            zIndex: 10,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(8, 14, 26, 0.96)",
            border: "1.5px solid #00F0FF",
            borderRadius: 999,
            padding: "8px 20px",
            boxShadow: "0 0 35px rgba(0, 240, 255, 0.4)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 900, color: "#00F0FF", letterSpacing: "0.1em" }}>
            4,166x
          </span>
          <span style={{ fontSize: 9, fontWeight: 800, color: "#38BDF8", fontFamily: "monospace" }}>
            SPEEDUP
          </span>
        </div>

        {/* ========================================================= */}
        {/* Right Side: RSI Agent Factory (Simple, Clean, Glowing)    */}
        {/* ========================================================= */}
        <div
          style={{
            flex: 1,
            background: "linear-gradient(135deg, rgba(8, 47, 73, 0.4) 0%, rgba(8, 14, 26, 0.8) 100%)",
            padding: "48px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Header */}
          <div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 900,
                color: "#38BDF8",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              FRONTIER PARADIGM (2026+)
            </span>
            <h3
              style={{
                fontSize: 34,
                fontWeight: 900,
                color: "#00F0FF",
                margin: "8px 0 4px",
                letterSpacing: "-0.01em",
              }}
            >
              {rightTitle}
            </h3>
            <p style={{ fontSize: 16, color: "#7DD3FC", margin: 0 }}>{rightSubtitle}</p>
          </div>

          {/* Central Hero Number */}
          <div style={{ padding: "20px 0" }}>
            <div
              style={{
                fontSize: 96,
                fontWeight: 900,
                color: "#FFFFFF",
                fontFamily: "system-ui, -apple-system, sans-serif",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                textShadow: "0 0 45px rgba(0, 240, 255, 0.6)",
              }}
            >
              {frame > 75 ? "1,000,000+" : formattedRight}
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#38BDF8",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              Experiments Per 24 Hours
            </div>
          </div>

          {/* Bottom Pill */}
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(0, 240, 255, 0.15)",
                border: "1px solid #00F0FF",
                color: "#00F0FF",
                fontSize: 12,
                fontWeight: 900,
                padding: "6px 16px",
                borderRadius: 999,
                fontFamily: "monospace",
                letterSpacing: "0.06em",
                boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
              }}
            >
              <span>●</span> 24/7 AUTONOMOUS MACHINE SPEED
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
