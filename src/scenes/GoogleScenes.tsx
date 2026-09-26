import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Atmosphere } from "../components/Atmosphere";
import { AuthenticTweetPost } from "../components/AuthenticTweetPost";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { GoogleOfficialLogo, OpenAILogo, AnthropicLogo, XAiLogo, DeepSeekLogo } from "../components/RealLogos";

export const BriefingIntroScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: `scale(${entrance})`,
              gap: 24,
            }}
          >
            {/* 100% Authentic Verified Brand Logos */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 36,
                padding: "18px 42px",
                borderRadius: 999,
                background: "rgba(15, 23, 42, 0.9)",
                border: "1.5px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.15)",
              }}
            >
              <GoogleOfficialLogo size={42} />
              <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.15)" }} />
              <XAiLogo size={36} color="#FFFFFF" />
              <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.15)" }} />
              <OpenAILogo size={40} color="#10A37F" />
              <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.15)" }} />
              <AnthropicLogo size={38} color="#D97706" />
              <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.15)" }} />
              <DeepSeekLogo size={40} color="#4D6BFE" />
            </div>

            <div
              style={{
                padding: "8px 24px",
                borderRadius: 999,
                background: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.5)",
                color: "#38BDF8",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              FRONTIER INTELLIGENCE ROUNDUP
            </div>

            <h1
              style={{
                fontSize: 64,
                fontWeight: 950,
                margin: 0,
                textAlign: "center",
                background: "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI BRIEFING • SEPT 2026
            </h1>

            <div style={{ fontSize: 20, color: "#94A3B8", fontWeight: 600 }}>
              AUTHENTIC SOURCE REVELATIONS & MOTION BREAKDOWN
            </div>
          </div>
        </AbsoluteFill>
      </ParallaxCameraScene>
    </AbsoluteFill>
  );
};

export const GoogleBeatLeaksScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(66, 133, 244, 0.22)" secondaryGlow="rgba(234, 67, 53, 0.15)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.04}>
      <AuthenticTweetPost
        brandLogo={<GoogleOfficialLogo size={28} />}
        brandName="Google DeepMind"
        brandColor="#4285F4"
        authorName="alex getman"
        authorHandle="alexgetmancom"
        authorAvatarColor="#2563EB"
        dateStr="Sep 2026"
        tweetText={"🚨 Gemini 4 Pro looks like it's in the final internal stage.\n\nLyra's latest comments strongly hint that something significant is happening behind the scenes at Google.\nHe says Google is using RSI internally, pointing to recent Flash models and asking how else they could ship this many models so quickly."}
        highlightPhrase="Google is using RSI internally, accelerating next frontier models"
        mediaSrc="media/alexgetman_gemini4.jpg"
        sourceUrl="x.com/alexgetmancom/status/2098519689894801559"
        durationInFrames={durationInFrames}
      />
    </ParallaxCameraScene>
  </AbsoluteFill>
);

export const GoogleBeatSergeyBrinScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(52, 168, 83, 0.2)" secondaryGlow="rgba(251, 188, 5, 0.15)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.04}>
      <AuthenticTweetPost
        brandLogo={<GoogleOfficialLogo size={28} />}
        brandName="Google DeepMind / RSI Clusters"
        brandColor="#34A853"
        authorName="Lumina"
        authorHandle="LuminaBench"
        authorAvatarColor="#059669"
        dateStr="Sep 2026"
        tweetText={"Somethings happening at Google rn\n\nAbout a month back there were leaks that Google DeepMind were heavily pushing for RSI, and Sergey Brin was steering more resources into it.\nNow people are teasing stuff about RSI, and Google are getting really strict on leakers."}
        highlightPhrase="Sergey Brin steering massive compute resources into RSI"
        mediaSrc="media/lumina_rsi.jpg"
        sourceUrl="x.com/LuminaBench/status/2098527351755751810"
        durationInFrames={durationInFrames}
      />
    </ParallaxCameraScene>
  </AbsoluteFill>
);
