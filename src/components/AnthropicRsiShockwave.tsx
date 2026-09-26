import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { OfficialLogoBadge } from "./OfficialLogoBadge";
import { KineticPunchText } from "./KineticPunchText";

export const AnthropicRsiShockwave: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animations
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const pulse = 1 + Math.sin(frame / 12) * 0.04;

  // Progression interpolation: 1% to 26%
  const numberProgress = interpolate(frame, [45, 120], [1, 26], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const formattedNumber = Math.round(numberProgress);

  // Phase transitions:
  // Phase 1 (0-60 frames): Shockwave announcement & Anthropic Logo
  // Phase 2 (60-180 frames): The explosive jump 1% -> 26%
  // Phase 3 (180+ frames): >90% Engineering Collaboration
  const phase = frame < 70 ? 1 : frame < 200 ? 2 : 3;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        perspective: 1200,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Background Volumetric Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 600,
          background: "radial-gradient(circle, rgba(235, 140, 90, 0.18) 0%, rgba(14, 165, 233, 0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          width: 1440,
          transform: `scale(${entrance}) rotateX(3deg)`,
          background: "rgba(8, 14, 26, 0.94)",
          border: "1px solid rgba(235, 140, 90, 0.35)",
          borderRadius: 28,
          padding: "48px 56px",
          boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 50px rgba(235, 140, 90, 0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Top Header Tag */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            paddingBottom: 20,
            marginBottom: 36,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                background: "rgba(235, 140, 90, 0.2)",
                border: "1px solid #EB8C5A",
                color: "#EB8C5A",
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.12em",
                fontFamily: "monospace",
              }}
            >
              ● INTERNAL R&D INDEX
            </span>
            <span style={{ color: "#94A3B8", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>
              FRONTIER AI BENCHMARK 2026
            </span>
          </div>

          <div
            style={{
              background: "rgba(0, 240, 255, 0.1)",
              border: "1px solid #00F0FF",
              borderRadius: 12,
              padding: "6px 16px",
              color: "#00F0FF",
              fontWeight: 800,
              fontSize: 13,
              fontFamily: "monospace",
            }}
          >
            CONFIRMED TELEMETRY
          </div>
        </div>

        {/* Center Stage: Split between Official Logo and Dynamic Telemetry */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            gap: 60,
          }}
        >
          {/* Left: Official Anthropic Badge */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <OfficialLogoBadge
              logo="anthropic"
              size={130}
              label="ANTHROPIC"
              sublabel="AUTONOMOUS R&D"
              glowColor="rgba(235, 140, 90, 0.7)"
            />
          </div>

          {/* Center Divider / Kinetic Arrow */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 13,
                fontWeight: 900,
                color: "#94A3B8",
                letterSpacing: "0.15em",
              }}
            >
              6-MONTH TRAJECTORY
            </div>
            <div
              style={{
                width: 140,
                height: 3,
                background: "linear-gradient(90deg, #64748B, #00F0FF)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: -6,
                  top: -5,
                  width: 12,
                  height: 12,
                  borderTop: "3px solid #00F0FF",
                  borderRight: "3px solid #00F0FF",
                  transform: "rotate(45deg)",
                }}
              />
            </div>
            <div
              style={{
                background: "rgba(239, 68, 68, 0.15)",
                border: "1px solid #EF4444",
                borderRadius: 8,
                padding: "3px 10px",
                color: "#F87171",
                fontSize: 11,
                fontWeight: 800,
                fontFamily: "monospace",
              }}
            >
              26x MULTIPLIER
            </div>
          </div>

          {/* Right: Dynamic Explosion Meter */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(15, 23, 42, 0.7)",
              border: "1.5px solid rgba(0, 240, 255, 0.4)",
              borderRadius: 24,
              padding: "28px 48px",
              boxShadow: "0 0 40px rgba(0, 240, 255, 0.15)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 900,
                color: "#00F0FF",
                letterSpacing: "0.15em",
                fontFamily: "monospace",
                marginBottom: 8,
              }}
            >
              CLAUDE OPUS 5.5 LEADS R&D
            </div>

            <div
              style={{
                fontSize: 84,
                fontWeight: 900,
                fontFamily: "system-ui, -apple-system, sans-serif",
                color: "#FFFFFF",
                lineHeight: 1,
                textShadow: "0 0 35px rgba(0, 240, 255, 0.8)",
                display: "flex",
                alignItems: "baseline",
                transform: `scale(${pulse})`,
              }}
            >
              <span>{formattedNumber}</span>
              <span style={{ fontSize: 44, color: "#00F0FF", marginLeft: 4 }}>%</span>
            </div>

            <div
              style={{
                marginTop: 14,
                display: "flex",
                gap: 16,
                alignItems: "center",
                fontSize: 12,
                fontFamily: "monospace",
              }}
            >
              <span style={{ color: "#64748B" }}>FEB: &lt;1%</span>
              <span style={{ color: "#00F0FF" }}>➔</span>
              <span style={{ color: "#10B981", fontWeight: 800 }}>AUG: 26% LEADS</span>
            </div>
          </div>
        </div>

        {/* Bottom Stat Ticker */}
        <div
          style={{
            marginTop: 36,
            width: "100%",
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "16px 28px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 24 }}>⚡</span>
            <div>
              <div style={{ fontSize: 11, color: "#64748B", fontWeight: 800 }}>ENGINEERING COLLABORATION</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#818CF8", fontFamily: "monospace" }}>
                &gt;90% OF WORKFLOWS
              </div>
            </div>
          </div>

          <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.1)" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 24 }}>🧠</span>
            <div>
              <div style={{ fontSize: 11, color: "#64748B", fontWeight: 800 }}>PRIMARY CREATOR SHIFT</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#10B981", fontFamily: "monospace" }}>
                AI BUILDS NEXT AI
              </div>
            </div>
          </div>

          <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.1)" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 24 }}>🚀</span>
            <div>
              <div style={{ fontSize: 11, color: "#64748B", fontWeight: 800 }}>RECURSIVE CYCLE</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#F59E0B", fontFamily: "monospace" }}>
                EXPONENTIAL VELOCITY
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
