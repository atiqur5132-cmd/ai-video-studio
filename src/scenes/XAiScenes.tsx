import React from "react";
import { AbsoluteFill } from "remotion";
import { Atmosphere } from "../components/Atmosphere";
import { AuthenticTweetPost } from "../components/AuthenticTweetPost";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { RlRewardCollapse } from "../components/RlRewardCollapse";
import { XAiLogo } from "../components/RealLogos";

export const XAiDelayScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(239, 68, 68, 0.22)" secondaryGlow="rgba(255, 255, 255, 0.1)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.04}>
      <AuthenticTweetPost
        brandLogo={<XAiLogo size={26} color="#FFFFFF" />}
        brandName="xAI / Post-Training Delay"
        brandColor="#EF4444"
        authorName="Astro Polo"
        authorHandle="astropol0"
        authorAvatarColor="#7F1D1D"
        dateStr="Sep 2026"
        tweetText={"Grok 4.7 is not coming today not even this week...\n\nanother delay Elon said it needs more time because RL made it give up on hard problems it can actually solve...\nSpaceXAI won’t ship a half baked model.. hope this doesn’t turn into a Gemini 3.5 Pro situation"}
        highlightPhrase="Elon said RL made it give up on hard problems it can actually solve"
        mediaSrc="media/astropol0_grok1.jpg"
        sourceUrl="x.com/astropol0/status/2098473478462783847"
        durationInFrames={durationInFrames}
      />
    </ParallaxCameraScene>
  </AbsoluteFill>
);

export const XAiQuittingBehaviorScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(239, 68, 68, 0.25)" secondaryGlow="rgba(15, 23, 42, 0.9)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.05}>
      <RlRewardCollapse title="RL ALIGNMENT COLLAPSE" />
    </ParallaxCameraScene>
  </AbsoluteFill>
);
