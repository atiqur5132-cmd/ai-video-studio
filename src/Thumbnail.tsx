import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { OfficialLogoBadge } from "./components/OfficialLogoBadge";

export const Thumbnail: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020408",
        overflow: "hidden",
        fontFamily: "'Montserrat', 'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* 1. Background: Dynamic Volumetric Glow */}
      <div style={{ position: "absolute", inset: -20, zIndex: 0, overflow: "hidden" }}>
        <Img
          src={staticFile("evidence/sonnet55/01b_anthropic_benchmark_table.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(35px) brightness(0.25) saturate(1.4)",
            transform: "scale(1.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 65% 50%, rgba(0, 240, 255, 0.22) 0%, rgba(2, 4, 10, 0.95) 80%)",
          }}
        />
      </div>

      {/* 2. Outer Neon Frame */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          right: 24,
          bottom: 24,
          border: "4px solid rgba(0, 240, 255, 0.6)",
          borderRadius: 24,
          boxShadow: "0 0 50px rgba(0, 240, 255, 0.3), inset 0 0 30px rgba(0, 240, 255, 0.15)",
          zIndex: 40,
          pointerEvents: "none",
        }}
      />

      {/* 3. Right Side: 3D Floating Real Evidence Dossier */}
      <div
        style={{
          position: "absolute",
          right: 60,
          top: "50%",
          transform: "translateY(-50%) perspective(1200px) rotateY(-8deg) rotateX(3deg) scale(0.95)",
          width: 900,
          height: 620,
          borderRadius: 20,
          border: "2px solid rgba(0, 240, 255, 0.5)",
          boxShadow: "0 30px 100px rgba(0,0,0,0.95), 0 0 60px rgba(0, 240, 255, 0.3)",
          overflow: "hidden",
          backgroundColor: "#090d16",
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
        }}
      >
        <div
          style={{
            height: 48,
            backgroundColor: "#0d1322",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#00f0ff" }} />
            <span style={{ color: "#00f0ff", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em" }}>
              ANTHROPIC OFFICIAL • BENCHMARK TABLE
            </span>
          </div>
          <span style={{ color: "#10b981", fontSize: 13, fontWeight: 900 }}>
            ● 70.6% VERIFIED LEAP
          </span>
        </div>
        <div style={{ flex: 1, padding: 16, backgroundColor: "#050811", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Img
            src={staticFile("evidence/sonnet55/01b_anthropic_benchmark_table.png")}
            style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 8 }}
          />
        </div>
      </div>

      {/* 4. Left Side: High-CTR Kinetic Punch Hook */}
      <div
        style={{
          position: "absolute",
          left: 90,
          top: "50%",
          transform: "translateY(-50%)",
          width: 820,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* Urgent Alert Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <OfficialLogoBadge logo="claude" size={54} glowColor="rgba(0, 240, 255, 0.8)" staticMode={true} />
          <div
            style={{
              padding: "10px 22px",
              borderRadius: 30,
              backgroundColor: "rgba(0, 240, 255, 0.15)",
              border: "1.5px solid #00f0ff",
              boxShadow: "0 0 25px rgba(0, 240, 255, 0.4)",
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 900,
                color: "#00f0ff",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              CLAUDE SONNET 5.5 DROPPED
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              textShadow: "0 10px 40px rgba(0,0,0,0.9)",
            }}
          >
            70.6% <span style={{ color: "#00f0ff" }}>TERMINAL</span>
          </h1>
          <h2
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: "#f87171",
              margin: "12px 0 0 0",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              textShadow: "0 0 40px rgba(239, 68, 68, 0.5)",
            }}
          >
            BEATS OPUS 5.5!
          </h2>
        </div>

        {/* 3 Metric Pills */}
        <div style={{ display: "flex", gap: 14 }}>
          <div
            style={{
              padding: "12px 20px",
              borderRadius: 14,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1.5px solid #10b981",
              color: "#10b981",
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: "0.05em",
            }}
          >
            ★ $2 / M (HALF PRICE)
          </div>
          <div
            style={{
              padding: "12px 20px",
              borderRadius: 14,
              backgroundColor: "rgba(168, 85, 247, 0.15)",
              border: "1.5px solid #a855f7",
              color: "#a855f7",
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: "0.05em",
            }}
          >
            ★ 80.1% OSWORLD
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
