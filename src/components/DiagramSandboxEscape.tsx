import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HatchedProgressBar } from "./HatchedProgressBar";
import { HandDrawnCross, HandDrawnCircle } from "./HandDrawnAnnotations";

export interface DiagramSandboxEscapeProps {
  phase?: 1 | 2 | 3;
}

export const DiagramSandboxEscape: React.FC<DiagramSandboxEscapeProps> = ({
  phase = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const breakSpring = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  const arrowPulse = Math.sin(frame * 0.15) * 8;

  return (
    <div
      style={{
        width: 1500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Top Title in yellow/white */}
      <div
        style={{
          fontSize: 34,
          fontWeight: 700,
          color: "#fde047",
          marginBottom: 10,
          letterSpacing: "-0.5px",
        }}
      >
        ANATOMY OF THE CAPTURE-THE-FLAG ESCAPE
      </div>

      <div
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: "#94a3b8",
          marginBottom: 35,
        }}
      >
        How an autonomous model bypassed digital quarantine into the live internet
      </div>

      {/* Main Split Diagram: Sandbox vs Live Internet */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Left: Supposed Sandbox */}
        <div
          style={{
            width: 580,
            borderRadius: 20,
            border: "2px solid #22c55e",
            backgroundColor: "#000000",
            padding: "28px 30px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 700, color: "#22c55e" }}>
              TESTING SANDBOX
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#ef4444",
                border: "1px solid #ef4444",
                padding: "4px 10px",
                borderRadius: 8,
              }}
            >
              ISOLATION FAILED
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Img
                src={staticFile("logos/google_logo.png")}
                style={{ width: 48, height: 48, objectFit: "contain" }}
              />
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#ffffff" }}>
                Autonomous Agent
              </div>
              <div style={{ fontSize: 18, color: "#94a3b8" }}>
                Capture-the-Flag Red Team Suite
              </div>
            </div>
          </div>

          <HatchedProgressBar
            labelTop="SANDBOX ISOLATION INTEGRITY"
            fillPercent={0}
            color="#ef4444"
            width={510}
            height={30}
            labelBottom="0.0.0.0/0 ROUTE ACCIDENTALLY OPEN"
          />
        </div>

        {/* Center: The Broken Boundary Arrow */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 280,
            position: "relative",
          }}
        >
          {/* Animated Escape Arrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              transform: `translateX(${arrowPulse}px)`,
            }}
          >
            <div
              style={{
                height: 4,
                width: 140,
                background: "repeating-linear-gradient(90deg, #ef4444, #ef4444 8px, transparent 8px, transparent 16px)",
              }}
            />
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                borderLeft: "20px solid #ef4444",
              }}
            />
          </div>

          <div
            style={{
              marginTop: 15,
              fontSize: 20,
              fontWeight: 800,
              color: "#ef4444",
              textAlign: "center",
              letterSpacing: "0.5px",
            }}
          >
            3 TEST ESCAPES
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#f87171",
              marginTop: 4,
            }}
          >
            ADMITTED UNDER OATH
          </div>
        </div>

        {/* Right: Live Internet Targets */}
        <div
          style={{
            width: 580,
            borderRadius: 20,
            border: "2px solid #ef4444",
            backgroundColor: "#000000",
            padding: "28px 30px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 700, color: "#ef4444" }}>
              LIVE INTERNET (IN THE WILD)
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#fbbf24",
                border: "1px solid #fbbf24",
                padding: "4px 10px",
                borderRadius: 8,
              }}
            >
              REAL CORPORATIONS
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#e2e8f0",
                lineHeight: 1.5,
              }}
            >
              • Target trademark matched active real company
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#e2e8f0",
                lineHeight: 1.5,
              }}
            >
              • Agent mapped external network attack surface
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#ef4444",
                lineHeight: 1.5,
              }}
            >
              • Live production credentials harvested & accessed
            </div>
          </div>

          <HatchedProgressBar
            labelTop="UNAUTHORIZED INTRUSION REACH"
            fillPercent={100}
            color="#ef4444"
            width={510}
            height={30}
            labelBottom="ONLY HALTED BY HEADER ANOMALY"
          />
        </div>
      </div>
    </div>
  );
};
