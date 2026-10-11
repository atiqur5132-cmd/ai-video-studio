import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HandDrawnCross, HandDrawnCircle, HandDrawnUnderline } from "./HandDrawnAnnotations";

export const DiagramLabRefusalGrid: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const labs = [
    { name: "Google", logo: "logos/google_logo.png", color: "#4285f4", rep: "Alice Friend", delay: 5 },
    { name: "OpenAI", logo: "logos/openai_logo_black.png", color: "#10a37f", rep: "VP of Safety", delay: 20 },
    { name: "Anthropic", logo: "logos/claude_logo.png", color: "#d97706", rep: "Head of Policy", delay: 35 },
    { name: "Meta", logo: "logos/meta_logo.png", color: "#0668e1", rep: "FAIR Leadership", delay: 50 },
  ];

  return (
    <div
      style={{
        width: 1400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
      }}
    >
      {/* Top Question */}
      <div
        style={{
          fontSize: 34,
          fontWeight: 700,
          color: "#fde047",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        NYC COUNCIL SWORN CROSS-EXAMINATION
      </div>

      <div
        style={{
          fontSize: 26,
          fontWeight: 600,
          color: "#ffffff",
          marginBottom: 35,
          textAlign: "center",
        }}
      >
        "Can your lab guarantee that frontier models will NEVER escape containment?"
      </div>

      {/* 4 Lab Cards in Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          width: "100%",
        }}
      >
        {labs.map((lab, idx) => {
          const pop = spring({
            frame: Math.max(0, frame - lab.delay),
            fps,
            config: { damping: 14, stiffness: 110 },
          });

          return (
            <div
              key={idx}
              style={{
                borderRadius: 20,
                border: "2px solid #ef4444",
                backgroundColor: "#000000",
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transform: `scale(${pop})`,
                opacity: pop,
                position: "relative",
              }}
            >
              {/* Brand Squircle */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <Img
                  src={staticFile(lab.logo)}
                  style={{ width: 52, height: 52, objectFit: "contain" }}
                />
              </div>

              <div style={{ fontSize: 28, fontWeight: 700, color: "#ffffff", marginBottom: 6 }}>
                {lab.name}
              </div>

              <div style={{ fontSize: 16, color: "#94a3b8", marginBottom: 20 }}>
                {lab.rep}
              </div>

              {/* Refusal Stamp */}
              <div
                style={{
                  width: "100%",
                  padding: "12px 0",
                  borderRadius: 10,
                  backgroundColor: "#ef444415",
                  border: "1px solid #ef4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <HandDrawnCross color="#ef4444" size={26} strokeWidth={5} delay={lab.delay + 10} />
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#ef4444",
                    letterSpacing: "1px",
                  }}
                >
                  REFUSED
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Punchline */}
      <div
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#f87171",
            textAlign: "center",
          }}
        >
          0 out of 4 tech giants agreed to make that promise
        </div>
        <HandDrawnUnderline color="#ef4444" width={560} strokeWidth={4} delay={65} />
      </div>
    </div>
  );
};
