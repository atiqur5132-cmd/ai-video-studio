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
      {/* 1. Background: Dynamic Blurred Mirror of Real Leak Asset */}
      <div style={{ position: "absolute", inset: -20, zIndex: 0, overflow: "hidden" }}>
        <Img
          src={staticFile("evidence/screenshots/floatplane_physics_opus55_desktop.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(40px) brightness(0.25) saturate(1.5)",
            transform: "scale(1.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 65% 50%, rgba(14, 165, 233, 0.25) 0%, rgba(2, 4, 10, 0.95) 80%)",
          }}
        />
      </div>

      {/* 2. Outer Neon Documentary Frame */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          right: 24,
          bottom: 24,
          border: "4px solid rgba(56, 189, 248, 0.6)",
          borderRadius: 24,
          boxShadow: "0 0 50px rgba(56, 189, 248, 0.3), inset 0 0 30px rgba(56, 189, 248, 0.15)",
          zIndex: 40,
          pointerEvents: "none",
        }}
      />

      {/* 3. Right Side: 3D Floating Real Evidence Dossier */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: "50%",
          transform: "translateY(-50%) perspective(1200px) rotateY(-8deg) rotateX(4deg) scale(0.95)",
          width: 860,
          height: 820,
          borderRadius: 20,
          overflow: "hidden",
          border: "2px solid rgba(56, 189, 248, 0.4)",
          backgroundColor: "#000000",
          boxShadow: "0 40px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(14, 165, 233, 0.3)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: 48,
            background: "#090D16",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <span style={{ color: "#38BDF8", fontSize: 13, fontWeight: 900, letterSpacing: "0.1em" }}>
            ● LIVE SIGHTING • ARENA LEAK
          </span>
          <span style={{ color: "#10B981", fontSize: 12, fontWeight: 800 }}>VERIFIED CHECKPOINT</span>
        </div>
        <div style={{ flex: 1, backgroundColor: "#02040A", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Img
            src={staticFile("evidence/screenshots/floatplane_physics_opus55_desktop.png")}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* 4. Left Side: High-CTR Ultra Bold Punch Headlines */}
      <div
        style={{
          position: "absolute",
          left: 100,
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
            UNRELEASED FRONTIER MODEL
          </span>
        </div>

        {/* Main Title 1 */}
        <h1
          style={{
            fontSize: 104,
            fontWeight: 900,
            lineHeight: 1.0,
            margin: 0,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            textShadow: "0 10px 40px rgba(0, 0, 0, 0.9)",
          }}
        >
          GEMINI 4 <span style={{ color: "#38BDF8", textShadow: "0 0 45px rgba(56, 189, 248, 0.6)" }}>PRO</span>
        </h1>

        {/* Sub Punch */}
        <h2
          style={{
            fontSize: 78,
            fontWeight: 900,
            lineHeight: 1.05,
            margin: 0,
            color: "#FACC15",
            letterSpacing: "-0.02em",
            textShadow: "0 0 35px rgba(250, 204, 21, 0.5)",
          }}
        >
          HUGE ARENA LEAK
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
            <div style={{ color: "#94A3B8", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>ARC-AGI-2 REASONING</div>
            <div style={{ color: "#10B981", fontSize: 36, fontWeight: 900, textShadow: "0 0 20px #10B981" }}>77.1% SOTA</div>
          </div>
          <div style={{ width: 1, height: 44, backgroundColor: "rgba(255, 255, 255, 0.15)" }} />
          <div>
            <div style={{ color: "#94A3B8", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em" }}>CONTEXT LIMIT</div>
            <div style={{ color: "#38BDF8", fontSize: 36, fontWeight: 900 }}>2,000,000</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
