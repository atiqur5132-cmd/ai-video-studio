import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SpeedometerGauge } from "./SpeedometerGauge";

export const DeepSweSolBenchmark: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const bannerOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      }}
    >
      {/* Volumetric Radial Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.12) 0%, rgba(3, 7, 18, 0.98) 75%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 1540,
          height: 840,
          borderRadius: 24,
          border: "2px solid rgba(16, 185, 129, 0.35)",
          background: "rgba(9, 14, 26, 0.94)",
          boxShadow:
            "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(16, 185, 129, 0.15)",
          display: "flex",
          flexDirection: "column",
          padding: 44,
          boxSizing: "border-box",
          opacity: bannerOpacity,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(16, 185, 129, 0.25)",
            paddingBottom: 22,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#10B981",
                boxShadow: "0 0 16px #10B981",
              }}
            />
            <span
              style={{
                color: "#F8FAFC",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "0.08em",
              }}
            >
              DEEPSWE v1.1 // MULTI-FILE REPO BENCHMARK (PASS@1)
            </span>
          </div>
          <div
            style={{
              color: "#10B981",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.05em",
              background: "rgba(16, 185, 129, 0.12)",
              padding: "6px 14px",
              borderRadius: 8,
              border: "1px solid rgba(16, 185, 129, 0.3)",
            }}
          >
            FIRST-PASS RESOLUTION // ENTERPRISE CODEBASES
          </div>
        </div>

        {/* 3 Circular Speedometer Dials */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "20px 40px",
          }}
        >
          {/* GPT-4o Baseline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              opacity: 0.85,
            }}
          >
            <SpeedometerGauge
              value={49.2}
              maxValue={100}
              label="GPT-4o BASELINE"
              unit="%"
              color="#64748B"
              size={290}
              delay={5}
            />
            <span
              style={{
                fontSize: 13,
                color: "#94A3B8",
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
              PREVIOUS PRODUCTION STANDARD
            </span>
          </div>

          {/* GPT-6 SOL (HERO) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              transform: `scale(${interpolate(titleSpring, [0, 1], [0.92, 1.05])})`,
              background: "rgba(16, 185, 129, 0.08)",
              padding: "28px 36px",
              borderRadius: 20,
              border: "2px solid rgba(16, 185, 129, 0.5)",
              boxShadow: "0 0 50px rgba(16, 185, 129, 0.2)",
            }}
          >
            <SpeedometerGauge
              value={68.8}
              maxValue={100}
              label="GPT-6 SOL (LEAKED)"
              unit="%"
              color="#10B981"
              size={320}
              delay={0}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  color: "#10B981",
                  letterSpacing: "0.1em",
                  fontWeight: 900,
                }}
              >
                +19.6% OVER GPT-4o // 12x LOWER INFERENCE
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "#E2E8F0",
                  letterSpacing: "0.05em",
                }}
              >
                HIGH-SPEED REASONING ENGINE
              </span>
            </div>
          </div>

          {/* OpenAI Astra */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              opacity: 0.9,
            }}
          >
            <SpeedometerGauge
              value={74.6}
              maxValue={100}
              label="OPENAI ASTRA"
              unit="%"
              color="#00F0FF"
              size={290}
              delay={12}
            />
            <span
              style={{
                fontSize: 13,
                color: "#38BDF8",
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
              HEAVY REASONING COMPUTE CLUSTER
            </span>
          </div>
        </div>

        {/* Bottom Telemetry Strip */}
        <div
          style={{
            borderTop: "1px solid rgba(16, 185, 129, 0.2)",
            paddingTop: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "#64748B",
          }}
        >
          <span>EVALUATION: DEEPSWE BENCHMARK VERSION 1.1</span>
          <span style={{ color: "#10B981", fontWeight: 700 }}>
            TARGET ARCHITECTURE: DENSE SUB-CENT INFERENCE TIERS
          </span>
          <span>AUTONOMOUS CODE HEALING CAPABILITY: VERIFIED</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
