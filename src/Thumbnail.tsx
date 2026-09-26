import React from "react";
import { AbsoluteFill } from "remotion";
import { ProceduralCellCanvas } from "./components/biotech/ProceduralCellCanvas";

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
          top: "-10%",
          left: "-5%",
          width: 1200,
          height: 1200,
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: 1100,
          height: 1100,
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, transparent 60%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Layer 4: Bold Rounded Outer Neon Border Flush to Perimeter */}
      <div
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          right: 18,
          bottom: 18,
          border: "6px solid #10B981",
          borderRadius: 28,
          boxShadow: "0 0 45px rgba(16, 185, 129, 0.45), inset 0 0 30px rgba(16, 185, 129, 0.25)",
          zIndex: 40,
          pointerEvents: "none",
        }}
      />

      {/* 3D Procedural Cell Canvas in the Right Half */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: -100,
          width: 1100,
          height: 1100,
          transform: "translateY(-50%)",
          zIndex: 5,
          opacity: 0.95,
        }}
      >
        <ProceduralCellCanvas width={1100} height={1100} pulseSpeed={1.2} />
      </div>

      {/* Main Content Layout */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          padding: "90px 100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
          maxWidth: 1150,
        }}
      >
        {/* Top Authority Header */}
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div
            style={{
              background: "#10B981",
              color: "#000000",
              fontWeight: 900,
              fontSize: 16,
              padding: "6px 18px",
              borderRadius: 8,
              letterSpacing: "1.5px",
            }}
          >
            NATURE BIOTECHNOLOGY
          </div>
          <div
            style={{
              background: "rgba(5, 11, 24, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#94A3B8",
              fontWeight: 800,
              fontSize: 15,
              padding: "6px 18px",
              borderRadius: 8,
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
            ARC INSTITUTE • TAHOE-100M
          </div>
        </div>

        {/* Massive 2-Tier Kinetic Punch Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 40 }}>
          <span
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#FF5252",
              letterSpacing: "3px",
              textTransform: "uppercase",
              textShadow: "0 0 25px rgba(255, 82, 82, 0.5)",
            }}
          >
            BIOLOGY'S CHATGPT MOMENT
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: 130,
              fontWeight: 950,
              letterSpacing: "-2px",
              textTransform: "uppercase",
              color: "#FFFFFF",
              lineHeight: 0.95,
              filter:
                "drop-shadow(0 0 25px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 50px rgba(16, 185, 129, 0.75)) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.95))",
            }}
          >
            THE VIRTUAL<br />
            <span style={{ color: "#10B981" }}>CELL</span>
          </h1>
        </div>

        {/* Bottom High-Impact Evidence Bar */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 24,
            background: "rgba(5, 11, 24, 0.92)",
            border: "1.5px solid rgba(16, 185, 129, 0.45)",
            borderRadius: 20,
            padding: "18px 36px",
            width: "fit-content",
            boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
          }}
        >
          <div style={{ color: "#10B981", fontSize: 26, fontWeight: 900 }}>502M CELLS</div>
          <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.2)" }} />
          <div style={{ color: "#06B6D4", fontSize: 26, fontWeight: 900 }}>1,142 DRUGS</div>
          <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.2)" }} />
          <div style={{ color: "#FBBF24", fontSize: 26, fontWeight: 900 }}>ZERO-SHOT IN-SILICO</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
