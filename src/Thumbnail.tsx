import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

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
          src={staticFile("evidence/devday2026/devday_keynote_official.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(40px) brightness(0.22) saturate(1.4)",
            transform: "scale(1.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 65% 50%, rgba(249, 115, 22, 0.25) 0%, rgba(2, 4, 10, 0.95) 80%)",
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
          border: "4px solid rgba(249, 115, 22, 0.6)",
          borderRadius: 24,
          boxShadow: "0 0 50px rgba(249, 115, 22, 0.3), inset 0 0 30px rgba(249, 115, 22, 0.15)",
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
          overflow: "hidden",
          border: "2px solid rgba(249, 115, 22, 0.5)",
          backgroundColor: "#0d1117",
          boxShadow: "0 40px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(249, 115, 22, 0.35)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: 48,
            background: "#161b22",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <span style={{ color: "#f97316", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em" }}>
            ● CONFIDENTIAL LEAK • PRODUCTION REPO
          </span>
          <span style={{ color: "#10B981", fontSize: 12, fontWeight: 800 }}>VERIFIED COMMIT</span>
        </div>
        <div style={{ flex: 1, backgroundColor: "#0d1117", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }}>
          <Img
            src={staticFile("evidence/devday2026/openai_codex_promax_commit.png")}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* 4. Left Side: High-CTR Ultra Bold Punch Headlines */}
      <div
        style={{
          position: "absolute",
          left: 90,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          maxWidth: 820,
        }}
      >
        {/* Top Eyebrow Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            background: "rgba(239, 68, 68, 0.15)",
            border: "1.5px solid #EF4444",
            borderRadius: 30,
            padding: "8px 24px",
            alignSelf: "flex-start",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EF4444", boxShadow: "0 0 12px #EF4444" }} />
          <span style={{ color: "#EF4444", fontSize: 16, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            OPENAI DEVDAY 2026 LEAKS
          </span>
        </div>

        {/* Main Title 1 */}
        <h1
          style={{
            fontSize: 98,
            fontWeight: 900,
            lineHeight: 1.0,
            margin: 0,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            textShadow: "0 10px 40px rgba(0, 0, 0, 0.9)",
          }}
        >
          $500 <span style={{ color: "#f97316", textShadow: "0 0 45px rgba(249, 115, 22, 0.6)" }}>PRO MAX</span>
        </h1>

        {/* Sub Punch */}
        <h2
          style={{
            fontSize: 74,
            fontWeight: 900,
            lineHeight: 1.05,
            margin: 0,
            color: "#38bdf8",
            letterSpacing: "-0.02em",
            textShadow: "0 0 35px rgba(56, 189, 248, 0.5)",
          }}
        >
          & PROJECT "o" AGENT
        </h2>

        {/* Third Line Metric Box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 14,
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: 16,
            padding: "16px 26px",
            alignSelf: "flex-start",
          }}
        >
          <div>
            <div style={{ color: "#94A3B8", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>AUTONOMOUS EXECUTION</div>
            <div style={{ color: "#10B981", fontSize: 34, fontWeight: 900, textShadow: "0 0 20px #10B981" }}>24/7 BACKGROUND</div>
          </div>
          <div style={{ width: 1, height: 44, backgroundColor: "rgba(255, 255, 255, 0.15)" }} />
          <div>
            <div style={{ color: "#94A3B8", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>CEREBRAS SILICON</div>
            <div style={{ color: "#f97316", fontSize: 34, fontWeight: 900 }}>14X SPEEDUP</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
