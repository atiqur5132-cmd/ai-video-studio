import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Atmosphere } from "../components/Atmosphere";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { AnthropicLogo, GoogleOfficialLogo } from "../components/RealLogos";

export const AnthropicThreatScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });

  return (
    <AbsoluteFill>
      <Atmosphere primaryGlow="rgba(217, 119, 6, 0.22)" secondaryGlow="rgba(239, 68, 68, 0.15)" />
      <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.04}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", fontFamily: "system-ui, sans-serif" }}>
          <div
            style={{
              width: 1220,
              background: "rgba(15, 23, 42, 0.95)",
              border: "1.5px solid rgba(217, 119, 6, 0.4)",
              borderRadius: 24,
              padding: "36px 44px",
              boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9), 0 0 50px rgba(217, 119, 6, 0.15)",
              transform: `scale(${entrance})`,
              display: "flex",
              flexDirection: "column",
              gap: 26,
            }}
          >
            {/* Header with Official Anthropic Logo */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <AnthropicLogo size={46} color="#D97706" />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", color: "#F59E0B" }}>
                    OFFICIAL SECURITY AUDIT • SEPT 2026
                  </div>
                  <h1 style={{ margin: "4px 0 0 0", fontSize: 34, fontWeight: 900, color: "#F8FAFC" }}>
                    Anthropic Threat Intelligence Report
                  </h1>
                </div>
              </div>

              <div
                style={{
                  padding: "8px 20px",
                  borderRadius: 14,
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.5)",
                  color: "#34D399",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                }}
              >
                100% OPERATIONS NEUTRALIZED
              </div>
            </div>

            {/* Threat Vectors Row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
              <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "22px 18px", borderRadius: 16, border: "1px solid rgba(51, 65, 85, 0.5)" }}>
                <div style={{ fontSize: 11, color: "#EF4444", fontWeight: 700 }}>VECTOR 01</div>
                <div style={{ fontSize: 19, fontWeight: 900, color: "#F8FAFC", marginTop: 6 }}>Autonomous Cyberattacks</div>
                <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 4 }}>Automated zero-day exploit pipelines</div>
              </div>

              <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "22px 18px", borderRadius: 16, border: "1px solid rgba(51, 65, 85, 0.5)" }}>
                <div style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700 }}>VECTOR 02</div>
                <div style={{ fontSize: 19, fontWeight: 900, color: "#F8FAFC", marginTop: 6 }}>Biological Synthesis</div>
                <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 4 }}>Pathogen protocol filtration triggers</div>
              </div>

              <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "22px 18px", borderRadius: 16, border: "1px solid rgba(51, 65, 85, 0.5)" }}>
                <div style={{ fontSize: 11, color: "#38BDF8", fontWeight: 700 }}>VECTOR 03</div>
                <div style={{ fontSize: 19, fontWeight: 900, color: "#F8FAFC", marginTop: 6 }}>Covert Influence</div>
                <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 4 }}>State-aligned autonomous persona swarms</div>
              </div>
            </div>

            {/* Quote Footer */}
            <div
              style={{
                background: "rgba(2, 6, 23, 0.85)",
                borderRadius: 14,
                padding: "14px 22px",
                border: "1px solid rgba(51, 65, 85, 0.4)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 13, color: "#94A3B8" }}>
                "We disrupted every operation in the report and shared telemetry with federal authorities."
              </span>
              <span style={{ fontSize: 12, color: "#D97706", fontWeight: 700 }}>ANTHROPIC REPORT</span>
            </div>
          </div>
        </AbsoluteFill>
      </ParallaxCameraScene>
    </AbsoluteFill>
  );
};

export const FastBlitzAndOutroScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });

  return (
    <AbsoluteFill>
      <Atmosphere primaryGlow="rgba(56, 189, 248, 0.25)" secondaryGlow="rgba(168, 85, 247, 0.2)" />
      <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.05}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", fontFamily: "system-ui, sans-serif" }}>
          <div
            style={{
              width: 1200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${entrance})`,
              gap: 28,
            }}
          >
            {/* 3 Quick Cards with Authentic Brand Badges */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, width: "100%" }}>
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1.5px solid rgba(56, 189, 248, 0.4)",
                  borderRadius: 20,
                  padding: "22px 18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: "#38BDF8" }}>COGNITION SHIPMENT</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#F8FAFC", marginTop: 4 }}>SWE-2 Devin</div>
                <div style={{ fontSize: 13, color: "#10B981", fontWeight: 700, marginTop: 6 }}>64% LOWER COST</div>
                <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>Matches Fable 5.1 on FrontierCode</div>
              </div>

              <div
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1.5px solid rgba(66, 133, 244, 0.4)",
                  borderRadius: 20,
                  padding: "22px 18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <GoogleOfficialLogo size={16} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#4285F4" }}>GOOGLE ECOSYSTEM</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#F8FAFC", marginTop: 4 }}>Gemini for Windows</div>
                <div style={{ fontSize: 13, color: "#38BDF8", fontWeight: 700, marginTop: 6 }}>ALT + SPACE OVERLAY</div>
                <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>Global rollout for Windows 10 & 11</div>
              </div>

              <div
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1.5px solid rgba(168, 85, 247, 0.4)",
                  borderRadius: 20,
                  padding: "22px 18px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: "#A855F7" }}>CURSOR EVOLUTION</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#F8FAFC", marginTop: 4 }}>Cursor Projects</div>
                <div style={{ fontSize: 13, color: "#C084FC", fontWeight: 700, marginTop: 6 }}>PERSISTENT MEMORY</div>
                <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 4 }}>Coordinated subagent threads</div>
              </div>
            </div>

            {/* Big Closing Statement */}
            <div
              style={{
                width: "100%",
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)",
                border: "1.5px solid rgba(255, 255, 255, 0.15)",
                borderRadius: 20,
                padding: "28px 36px",
                textAlign: "center",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8)",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: "#38BDF8", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                THE COMPACTING VELOCITY OF 2026
              </div>
              <h2
                style={{
                  margin: "8px 0 0 0",
                  fontSize: 34,
                  fontWeight: 950,
                  background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                "The question is no longer when RSI arrives. It is whether we are ready for what it builds next."
              </h2>
            </div>
          </div>
        </AbsoluteFill>
      </ParallaxCameraScene>
    </AbsoluteFill>
  );
};
