import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HandDrawnCircle, HandDrawnUnderline } from "./HandDrawnAnnotations";

export interface DirectTestimonyCanvasProps {
  speaker?: string;
  role?: string;
  logoSrc?: string;
  quote?: string;
  highlightedPhrase?: string;
  pills?: { label: string; value: string; color: string }[];
  startFrame?: number;
}

export const DirectTestimonyCanvas: React.FC<DirectTestimonyCanvasProps> = ({
  speaker = "DR. ALICE FRIEND",
  role = "Director of AI Policy, Google",
  logoSrc = "logos/google_logo.png",
  quote = "Google confirmed that our AI agents experienced test escapes on three separate occasions.",
  highlightedPhrase = "three separate occasions",
  pills = [
    { label: "LEGAL STATUS", value: "UNDER OATH", color: "#38bdf8" },
    { label: "CONFIRMED ESCAPES", value: "3 INCIDENTS", color: "#ef4444" },
    { label: "TARGET INFILTRATED", value: "LIVE WEBSITES", color: "#f59e0b" },
  ],
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: Math.max(0, frame - startFrame),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const highlightSpring = spring({
    frame: Math.max(0, frame - startFrame - 20),
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  return (
    <div
      style={{
        width: 1400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
        transform: `scale(${entrance})`,
        opacity: entrance,
      }}
    >
      {/* Top Header directly on black */}
      <div
        style={{
          fontSize: 32,
          fontWeight: 700,
          color: "#fde047",
          marginBottom: 8,
          letterSpacing: "-0.5px",
          textAlign: "center",
        }}
      >
        NYC COUNCIL LEGISLATIVE HEARING
      </div>

      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#ef4444",
          letterSpacing: "1px",
          marginBottom: 35,
        }}
      >
        OFFICIAL SWORN RECORD • UNDER PENALTY OF PERJURY
      </div>

      {/* Direct Quote Block */}
      <div
        style={{
          width: "100%",
          borderRadius: 22,
          border: "2px solid #334155",
          backgroundColor: "#000000",
          padding: "36px 44px",
          boxSizing: "border-box",
          position: "relative",
          marginBottom: 35,
        }}
      >
        {/* Speaker Profile Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 20 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img
              src={staticFile(logoSrc)}
              style={{ width: 40, height: 40, objectFit: "contain" }}
            />
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#ffffff" }}>
              {speaker}
            </div>
            <div style={{ fontSize: 18, color: "#94a3b8" }}>{role}</div>
          </div>
        </div>

        {/* Spoken Quote */}
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            color: "#e2e8f0",
            lineHeight: 1.5,
            letterSpacing: "-0.5px",
          }}
        >
          “Yes, Council Member. During rigorous evaluations,{" "}
          <span
            style={{
              color: "#f87171",
              fontWeight: 800,
              borderBottom: "3px solid #ef4444",
              paddingBottom: 2,
              backgroundColor: "#ef444415",
              paddingLeft: 6,
              paddingRight: 6,
              borderRadius: 4,
            }}
          >
            Google confirmed that our AI agents experienced test escapes on three separate occasions
          </span>
          . The models inadvertently gained access to the live internet.”
        </div>
      </div>

      {/* Bottom Metric Pills - Clean Native Flexbox, Perfectly Aligned */}
      <div
        style={{
          display: "flex",
          gap: 24,
          width: "100%",
          justifyContent: "center",
        }}
      >
        {pills.map((pill, idx) => {
          const pillSpring = spring({
            frame: Math.max(0, frame - startFrame - 15 - idx * 10),
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          return (
            <div
              key={idx}
              style={{
                flex: 1,
                padding: "20px 24px",
                borderRadius: 16,
                border: `2px solid ${pill.color}`,
                backgroundColor: "#000000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform: `scale(${pillSpring})`,
                opacity: pillSpring,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#94a3b8",
                  letterSpacing: "1px",
                  marginBottom: 6,
                }}
              >
                {pill.label}
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: pill.color,
                  letterSpacing: "0.5px",
                }}
              >
                {pill.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
