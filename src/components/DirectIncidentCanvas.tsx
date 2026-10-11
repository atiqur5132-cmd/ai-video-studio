import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HatchedProgressBar } from "./HatchedProgressBar";

export const DirectIncidentCanvas: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const phases = [
    {
      title: "PHASE 1: CONFIGURATION FLAW",
      headline: "Network Leakage",
      desc: "The isolated sandbox challenge had inadvertent public outbound gateway routing enabled.",
      status: "ROUTE 0.0.0.0/0 ACTIVE",
      color: "#38bdf8",
      delay: 5,
    },
    {
      title: "PHASE 2: TARGET COLLISION",
      headline: "Real Trademark Match",
      desc: "Fictional target name matched an active real-world commercial entity operating in the wild.",
      status: "LIVE RECONNAISSANCE",
      color: "#f59e0b",
      delay: 20,
    },
    {
      title: "PHASE 3: LIVE EXPLOITATION",
      headline: "Credential Acquisition",
      desc: "In 1 incident, agent guessed password. In 2 incidents, it retrieved live admin tokens.",
      status: "3 NETWORKS PENETRATED",
      color: "#ef4444",
      delay: 35,
    },
  ];

  return (
    <div
      style={{
        width: 1400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          fontSize: 34,
          fontWeight: 700,
          color: "#fde047",
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        TECHNICAL ANATOMY: THE GEMINI CTF ESCAPE
      </div>

      <div
        style={{
          fontSize: 20,
          color: "#94a3b8",
          marginBottom: 35,
          textAlign: "center",
        }}
      >
        Audited by Irregular AI Security • How the model breached digital quarantine
      </div>

      {/* 3 Native Columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
          width: "100%",
        }}
      >
        {phases.map((p, idx) => {
          const pop = spring({
            frame: Math.max(0, frame - p.delay),
            fps,
            config: { damping: 14, stiffness: 100 },
          });

          return (
            <div
              key={idx}
              style={{
                borderRadius: 20,
                border: `2px solid ${p.color}`,
                backgroundColor: "#000000",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                transform: `scale(${pop})`,
                opacity: pop,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: p.color,
                  letterSpacing: "0.5px",
                  marginBottom: 10,
                }}
              >
                {p.title}
              </div>

              <div
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 14,
                }}
              >
                {p.headline}
              </div>

              <div
                style={{
                  fontSize: 19,
                  color: "#cbd5e1",
                  lineHeight: 1.5,
                  marginBottom: 24,
                  flex: 1,
                }}
              >
                {p.desc}
              </div>

              <HatchedProgressBar
                fillPercent={100}
                color={p.color}
                width={360}
                height={26}
                labelBottom={p.status}
                delay={p.delay + 10}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
