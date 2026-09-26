import React from "react";
import { AbsoluteFill } from "remotion";
import { OfficialLogoBadge } from "./components/OfficialLogoBadge";

export const Thumbnail: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        overflow: "hidden",
        fontFamily: "'Montserrat', 'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Volumetric Radial Glows */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: 1200,
          height: 1200,
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.25) 0%, rgba(14, 165, 233, 0.1) 40%, transparent 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 1100,
          height: 1100,
          background: "radial-gradient(circle, rgba(235, 140, 90, 0.2) 0%, transparent 60%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Main Content Layout */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "80px 100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Left Column: Headlines & High-Stakes Narrative */}
        <div style={{ maxWidth: 950 }}>
          {/* Top Pill Bar */}
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 28 }}>
            <span
              style={{
                background: "rgba(0, 240, 255, 0.15)",
                border: "1.5px solid #00F0FF",
                borderRadius: 999,
                padding: "8px 22px",
                color: "#00F0FF",
                fontWeight: 900,
                fontSize: 18,
                letterSpacing: "0.1em",
              }}
            >
              ANTHROPIC SEPTEMBER LEAK
            </span>
            <span
              style={{
                background: "rgba(239, 68, 68, 0.2)",
                border: "1px solid #EF4444",
                borderRadius: 999,
                padding: "8px 20px",
                color: "#F87171",
                fontWeight: 900,
                fontSize: 16,
              }}
            >
              EPOCH AI: LEVEL 4
            </span>
          </div>

          {/* Massive 2-Tier Hero Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: "#38BDF8",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              RECURSIVE SELF-IMPROVEMENT
            </span>
            <h1
              style={{
                margin: 0,
                fontSize: 140,
                fontWeight: 950,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                lineHeight: 0.9,
                filter: "drop-shadow(0 0 45px rgba(0, 240, 255, 0.8))",
              }}
            >
              AI BUILDS AI
            </h1>
          </div>

          {/* Bottom High-Impact Evidence Bar */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              gap: 24,
              background: "rgba(15, 23, 42, 0.95)",
              border: "1.5px solid rgba(56, 189, 248, 0.4)",
              borderRadius: 20,
              padding: "18px 36px",
              width: "fit-content",
              boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
            }}
          >
            <div style={{ color: "#00F0FF", fontSize: 26, fontWeight: 900 }}>26% CLAUDE-LED</div>
            <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.2)" }} />
            <div style={{ color: "#34D399", fontSize: 26, fontWeight: 900 }}>100,000 AGENTS</div>
            <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.2)" }} />
            <div style={{ color: "#FBBF24", fontSize: 26, fontWeight: 900 }}>100GW STARGATE</div>
          </div>
        </div>

        {/* Right Column: Visual Face-off Logos & Telemetry */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 36,
            background: "rgba(8, 14, 26, 0.85)",
            border: "1px solid rgba(0, 240, 255, 0.3)",
            borderRadius: 28,
            padding: "50px 60px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.9), 0 0 50px rgba(14, 165, 233, 0.15)",
          }}
        >
          <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
            <OfficialLogoBadge logo="anthropic" label="ANTHROPIC" size={130} glowColor="rgba(235, 140, 90, 0.7)" staticMode={true} />
            <div style={{ fontSize: 32, fontWeight: 900, color: "#64748B" }}>VS</div>
            <OfficialLogoBadge logo="openai" label="OPENAI" size={130} glowColor="rgba(16, 185, 129, 0.7)" staticMode={true} />
          </div>

          <div
            style={{
              background: "rgba(0, 240, 255, 0.1)",
              border: "1px solid #00F0FF",
              borderRadius: 14,
              padding: "12px 24px",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 13, color: "#94A3B8", textTransform: "uppercase", fontWeight: 700, display: "block" }}>
              Singularity Index
            </span>
            <span style={{ fontSize: 32, fontWeight: 900, color: "#00F0FF", fontFamily: "monospace" }}>
              LEVEL 4 LEADS
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
