import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Atmosphere } from "../components/Atmosphere";
import { AuthenticTweetPost } from "../components/AuthenticTweetPost";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { LeanProofTree } from "../components/LeanProofTree";
import { OpenAILogo } from "../components/RealLogos";

export const OpenAiNavierStokesScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(16, 163, 127, 0.22)" secondaryGlow="rgba(56, 189, 248, 0.15)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.04}>
      <AuthenticTweetPost
        brandLogo={<OpenAILogo size={28} color="#10A37F" />}
        brandName="OpenAI / GPT-6 Astra"
        brandColor="#10A37F"
        authorName="Chris"
        authorHandle="ChrisGPT"
        authorAvatarColor="#065F46"
        dateStr="Sep 2026"
        tweetText={"I personally believe OpenAI’s Navier Stokes proof already survives scrutiny.\n\nThis is a genuinely novel mathematical result on a problem humans have been trying to solve for nearly a century.\nAn internal model was able to search this enormous hypothesis space and discover a construction that establishes the breakdown route, and then it produced a formally verifiable Lean proof."}
        highlightPhrase="Astra discovered novel construction and formalized verifiable Lean proof"
        mediaSrc="media/chrisgpt_math.jpg"
        sourceUrl="x.com/ChrisGPT/status/2098194490590674980"
        durationInFrames={durationInFrames}
      />
    </ParallaxCameraScene>
  </AbsoluteFill>
);

export const OpenAiLeanProofScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(16, 185, 129, 0.25)" secondaryGlow="rgba(59, 130, 246, 0.15)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.05}>
      <LeanProofTree title="GPT-6 ASTRA FORMAL VERIFICATION" />
    </ParallaxCameraScene>
  </AbsoluteFill>
);

export const OpenAiFinancialScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });

  return (
    <AbsoluteFill>
      <Atmosphere primaryGlow="rgba(16, 163, 127, 0.25)" secondaryGlow="rgba(245, 158, 11, 0.15)" />
      <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.04}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", fontFamily: "system-ui, sans-serif" }}>
          <div
            style={{
              width: 1240,
              background: "rgba(15, 23, 42, 0.95)",
              border: "1.5px solid rgba(16, 163, 127, 0.4)",
              borderRadius: 24,
              padding: "36px 44px",
              boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9), 0 0 50px rgba(16, 163, 127, 0.15)",
              transform: `scale(${entrance})`,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <OpenAILogo size={46} color="#10A37F" />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", color: "#10B981" }}>
                    OFFICIAL ENTERPRISE LAUNCH
                  </div>
                  <h1 style={{ margin: "4px 0 0 0", fontSize: 34, fontWeight: 900, color: "#F8FAFC" }}>
                    ChatGPT for Financial Services
                  </h1>
                </div>
              </div>

              <div
                style={{
                  padding: "8px 20px",
                  borderRadius: 14,
                  background: "rgba(239, 68, 68, 0.15)",
                  border: "1px solid rgba(239, 68, 68, 0.5)",
                  color: "#EF4444",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                }}
              >
                $200 PRO SIGNUPS PAUSED
              </div>
            </div>

            {/* Features Row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
              <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "20px 18px", borderRadius: 16, border: "1px solid rgba(51, 65, 85, 0.5)" }}>
                <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700 }}>INTEGRATED DATA</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#38BDF8", marginTop: 4 }}>PitchBook & LSEG</div>
                <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>Live financial streams & SEC filings</div>
              </div>

              <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "20px 18px", borderRadius: 16, border: "1px solid rgba(51, 65, 85, 0.5)" }}>
                <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700 }}>REASONING CORE</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#10B981", marginTop: 4 }}>GPT-6 Astra Work</div>
                <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>Autonomous financial modeling</div>
              </div>

              <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "20px 18px", borderRadius: 16, border: "1px solid rgba(51, 65, 85, 0.5)" }}>
                <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 700 }}>CAPACITY CRUNCH</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#EF4444", marginTop: 4 }}>Severe GPU Strain</div>
                <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>Enterprise demand surging</div>
              </div>
            </div>

            {/* Source quote */}
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
                SOURCE: <span style={{ color: "#F8FAFC", fontWeight: 700 }}>openai.com/index/introducing-chatgpt-financial-services</span>
              </span>
              <span style={{ fontSize: 12, color: "#10B981", fontWeight: 700 }}>VERIFIED ANNOUNCEMENT</span>
            </div>
          </div>
        </AbsoluteFill>
      </ParallaxCameraScene>
    </AbsoluteFill>
  );
};
