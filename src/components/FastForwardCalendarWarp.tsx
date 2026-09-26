import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { OfficialLogoBadge } from "./OfficialLogoBadge";

export const FastForwardCalendarWarp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animations
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });

  // Rapid month ticker: from Feb to Aug
  // Months: Feb (0-40f), Mar (40-60f), Apr (60-80f), May (80-100f), Jun (100-120f), Jul (120-140f), Aug (140f+)
  const months = ["FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST"];
  const monthProgress = interpolate(frame, [35, 140], [0, 6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const currentMonthIndex = Math.min(6, Math.floor(monthProgress));
  const currentMonthName = months[currentMonthIndex];

  // Number counter: 1% up to 26%
  const numberProgress = interpolate(frame, [60, 150], [1, 26], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const formattedPercent = Math.round(numberProgress);

  // August slam effect
  const augSlam = spring({
    frame: frame - 130,
    fps,
    config: { damping: 12, stiffness: 180 },
  });

  const isAugust = frame >= 135;
  const pulse = Math.sin(frame / 8);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        perspective: 1200,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Background Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          width: 1100,
          height: 650,
          background: isAugust
            ? "radial-gradient(circle, rgba(0, 240, 255, 0.22) 0%, rgba(235, 140, 90, 0.12) 40%, transparent 75%)"
            : "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          transition: "all 0.4s ease",
        }}
      />

      <div
        style={{
          width: 1540,
          height: 660,
          transform: `scale(${entrance}) rotateX(3deg)`,
          background: "rgba(8, 14, 26, 0.95)",
          border: isAugust ? "1.5px solid rgba(0, 240, 255, 0.5)" : "1px solid rgba(56, 189, 248, 0.3)",
          borderRadius: 28,
          padding: "36px 52px",
          boxShadow: isAugust
            ? "0 35px 100px rgba(0,0,0,0.95), 0 0 60px rgba(0, 240, 255, 0.2)"
            : "0 35px 90px rgba(0,0,0,0.95), 0 0 40px rgba(56, 189, 248, 0.12)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Top Header Tag */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            paddingBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                background: "rgba(0, 240, 255, 0.15)",
                border: "1px solid #00F0FF",
                color: "#00F0FF",
                padding: "5px 14px",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.14em",
                fontFamily: "monospace",
              }}
            >
              ● 180-DAY ACCELERATION WARP
            </span>
            <span style={{ color: "#94A3B8", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em" }}>
              ANTHROPIC INTERNAL R&amp;D PROGRESSION (2026)
            </span>
          </div>

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div
              style={{
                background: "rgba(235, 140, 90, 0.15)",
                border: "1px solid #EB8C5A",
                borderRadius: 10,
                padding: "6px 16px",
                color: "#EB8C5A",
                fontSize: 12,
                fontWeight: 900,
                fontFamily: "monospace",
              }}
            >
              CLAUDE OPUS 5.5
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 10,
                padding: "6px 14px",
                color: "#F8FAFC",
                fontSize: 12,
                fontWeight: 800,
                fontFamily: "monospace",
              }}
            >
              +6 MONTHS
            </div>
          </div>
        </div>

        {/* Middle Stage: The 6-Month Calendar Progression Flip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, margin: "14px 0" }}>
          
          {/* Card 1: February 2026 (The Baseline) */}
          <div
            style={{
              flex: 1,
              background: "rgba(15, 23, 42, 0.8)",
              border: "1.5px solid rgba(148, 163, 184, 0.3)",
              borderRadius: 22,
              padding: "26px 28px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
              position: "relative",
            }}
          >
            {/* Calendar Header Badge */}
            <div
              style={{
                background: "linear-gradient(90deg, #1E293B 0%, #334155 100%)",
                borderRadius: 12,
                padding: "10px 18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>📅</span>
                <span style={{ fontSize: 18, fontWeight: 900, color: "#FFFFFF", letterSpacing: "0.08em" }}>
                  FEBRUARY 2026
                </span>
              </div>
              <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: "monospace", fontWeight: 800 }}>
                START OF YEAR
              </span>
            </div>

            {/* Metric Display */}
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#94A3B8", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                AI RESEARCH WORKLOAD
              </div>
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 900,
                  color: "#94A3B8",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  lineHeight: 1,
                  margin: "8px 0",
                }}
              >
                &lt; 1%
              </div>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#CBD5E1",
                  padding: "4px 12px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 800,
                  fontFamily: "monospace",
                }}
              >
                99% HUMAN RESEARCHERS
              </div>
            </div>

            {/* Bottom State */}
            <div style={{ marginTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14, fontSize: 12, color: "#64748B", display: "flex", justifyContent: "space-between" }}>
              <span>Claude Role: Helper</span>
              <span>Autonomy: AL1 (Assistive)</span>
            </div>
          </div>

          {/* Center: Animated Fast-Forward Calendar Flip Conveyor */}
          <div
            style={{
              width: 380,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Rapid Flip Month Counter Display */}
            <div
              style={{
                background: "rgba(15, 23, 42, 0.9)",
                border: "2px solid #00F0FF",
                borderRadius: 20,
                padding: "20px 28px",
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 0 35px rgba(0, 240, 255, 0.3)",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 900,
                  color: "#38BDF8",
                  letterSpacing: "0.2em",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                }}
              >
                ⏩ 6-MONTH TIME-LAPSE
              </span>

              {/* Dynamic Flipping Month Box */}
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: isAugust ? "#00F0FF" : "#FFFFFF",
                  margin: "8px 0",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  textShadow: isAugust ? "0 0 20px rgba(0, 240, 255, 0.8)" : "none",
                }}
              >
                {currentMonthName} 2026
              </div>

              {/* Month dots progression */}
              <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                {months.map((m, idx) => (
                  <div
                    key={m}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: idx <= currentMonthIndex ? "#00F0FF" : "rgba(255,255,255,0.15)",
                      boxShadow: idx <= currentMonthIndex ? "0 0 8px #00F0FF" : "none",
                      transition: "all 0.15s ease",
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#F59E0B",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                26x MULTIPLIER ACCELERATION
              </div>
            </div>

            {/* High-speed motion flow arrow */}
            <div
              style={{
                marginTop: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#00F0FF",
                fontSize: 13,
                fontWeight: 900,
                fontFamily: "monospace",
              }}
            >
              <span>FEBRUARY</span>
              <span style={{ fontSize: 18 }}>━━━━━━━━▶</span>
              <span style={{ color: "#00F0FF" }}>AUGUST</span>
            </div>
          </div>

          {/* Card 2: August 2026 (The 26% Explosion) */}
          <div
            style={{
              flex: 1,
              background: isAugust
                ? "linear-gradient(180deg, rgba(14, 165, 233, 0.22) 0%, rgba(15, 23, 42, 0.95) 100%)"
                : "rgba(15, 23, 42, 0.8)",
              border: isAugust ? "2px solid #00F0FF" : "1.5px solid rgba(148, 163, 184, 0.3)",
              borderRadius: 22,
              padding: "26px 28px",
              display: "flex",
              flexDirection: "column",
              boxShadow: isAugust ? "0 0 50px rgba(0, 240, 255, 0.25)" : "0 15px 40px rgba(0,0,0,0.6)",
              transform: isAugust ? `scale(${Math.min(1.03, 1 + augSlam * 0.03)})` : "scale(1)",
              position: "relative",
              transition: "border 0.3s ease",
            }}
          >
            {/* Calendar Header Badge */}
            <div
              style={{
                background: isAugust
                  ? "linear-gradient(90deg, rgba(0, 240, 255, 0.3) 0%, rgba(14, 165, 233, 0.15) 100%)"
                  : "linear-gradient(90deg, #1E293B 0%, #334155 100%)",
                borderRadius: 12,
                padding: "10px 18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
                border: isAugust ? "1px solid #00F0FF" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>⚡</span>
                <span style={{ fontSize: 18, fontWeight: 900, color: "#FFFFFF", letterSpacing: "0.08em" }}>
                  AUGUST 2026
                </span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: isAugust ? "#00F0FF" : "#94A3B8",
                  fontFamily: "monospace",
                  fontWeight: 900,
                }}
              >
                ● 6 MONTHS LATER
              </span>
            </div>

            {/* Metric Display */}
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: isAugust ? "#00F0FF" : "#94A3B8",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                CLAUDE AUTONOMOUS LEAD
              </div>
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 900,
                  color: isAugust ? "#FFFFFF" : "#94A3B8",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  lineHeight: 1,
                  margin: "8px 0",
                  textShadow: isAugust ? "0 0 35px rgba(0, 240, 255, 0.8)" : "none",
                }}
              >
                {formattedPercent}%
              </div>
              <div
                style={{
                  display: "inline-block",
                  background: isAugust ? "rgba(0, 240, 255, 0.2)" : "rgba(255, 255, 255, 0.06)",
                  border: isAugust ? "1px solid #00F0FF" : "1px solid rgba(255, 255, 255, 0.12)",
                  color: isAugust ? "#00F0FF" : "#CBD5E1",
                  padding: "4px 14px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 900,
                  fontFamily: "monospace",
                }}
              >
                26.0x EXPLOSION IN WORKLOAD
              </div>
            </div>

            {/* Bottom State */}
            <div style={{ marginTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14, fontSize: 12, color: isAugust ? "#BAE6FD" : "#64748B", display: "flex", justifyContent: "space-between" }}>
              <span>Claude Role: Primary Lead</span>
              <span style={{ color: isAugust ? "#10B981" : "#64748B", fontWeight: 800 }}>Autonomy: AL4 (Leads)</span>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Ticker */}
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "14px 26px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>⏱️</span>
            <div>
              <span style={{ fontSize: 10, color: "#64748B", fontWeight: 800, letterSpacing: "0.08em" }}>
                TIMELINE WINDOW
              </span>
              <div style={{ fontSize: 15, fontWeight: 900, color: "#FFFFFF", fontFamily: "monospace" }}>
                180 Days (Feb → Aug 2026)
              </div>
            </div>
          </div>

          <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.1)" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>🚀</span>
            <div>
              <span style={{ fontSize: 10, color: "#64748B", fontWeight: 800, letterSpacing: "0.08em" }}>
                RESEARCH VELOCITY
              </span>
              <div style={{ fontSize: 15, fontWeight: 900, color: "#00F0FF", fontFamily: "monospace" }}>
                26x Exponential Growth
              </div>
            </div>
          </div>

          <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.1)" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>⚡</span>
            <div>
              <span style={{ fontSize: 10, color: "#64748B", fontWeight: 800, letterSpacing: "0.08em" }}>
                ENGINEERING STATUS
              </span>
              <div style={{ fontSize: 15, fontWeight: 900, color: "#818CF8", fontFamily: "monospace" }}>
                Over 90% AI Collaboration
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
