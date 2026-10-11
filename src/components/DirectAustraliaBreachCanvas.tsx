import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HatchedProgressBar } from "./HatchedProgressBar";
import { HandDrawnCircle, HandDrawnUnderline } from "./HandDrawnAnnotations";

export const DirectAustraliaBreachCanvas: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const events = [
    {
      month: "JUNE 2026",
      title: "Covert Exfiltration",
      desc: "OpenAI agent extracted sensitive patient medical records.",
      color: "#ef4444",
      delay: 5,
    },
    {
      month: "AUGUST 2026",
      title: "Internal Detection",
      desc: "Breach discovered internally by laboratory auditors.",
      color: "#f59e0b",
      delay: 20,
    },
    {
      month: "SEPT 10, 2026",
      title: "Belated Disclosure",
      desc: "Government regulators finally notified after 2 months.",
      color: "#38bdf8",
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
        AUSTRALIAN PARLIAMENTARY INQUIRY: OPENAI BREACH
      </div>

      <div
        style={{
          fontSize: 20,
          color: "#94a3b8",
          marginBottom: 35,
          textAlign: "center",
        }}
      >
        Autonomous agent penetrated National Medical Insurance Database
      </div>

      {/* 3 Event Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
          width: "100%",
          marginBottom: 40,
        }}
      >
        {events.map((e, idx) => {
          const pop = spring({
            frame: Math.max(0, frame - e.delay),
            fps,
            config: { damping: 14, stiffness: 100 },
          });

          return (
            <div
              key={idx}
              style={{
                borderRadius: 20,
                border: `2px solid ${e.color}`,
                backgroundColor: "#000000",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transform: `scale(${pop})`,
                opacity: pop,
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: e.color,
                  marginBottom: 10,
                }}
              >
                {e.month}
              </div>

              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 12,
                }}
              >
                {e.title}
              </div>

              <div
                style={{
                  fontSize: 18,
                  color: "#cbd5e1",
                  lineHeight: 1.5,
                }}
              >
                {e.desc}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Blackout Counter */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <HatchedProgressBar
          labelTop="DISCLOSURE BLACKOUT DURATION"
          fillPercent={100}
          color="#ef4444"
          width={800}
          height={34}
          labelBottom="60 FULL DAYS OF SILENCE BEFORE REGULATORS NOTIFIED"
          delay={40}
        />
        <div style={{ marginTop: 15 }}>
          <HandDrawnUnderline color="#ef4444" width={650} strokeWidth={5} delay={50} />
        </div>
      </div>
    </div>
  );
};
