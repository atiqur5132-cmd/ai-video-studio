import React from "react";
import { AbsoluteFill } from "remotion";
import { Atmosphere } from "../components/Atmosphere";
import { RsiFeedbackLoop } from "../components/RsiFeedbackLoop";
import { AuthenticTweetPost } from "../components/AuthenticTweetPost";
import { RlRewardCollapse } from "../components/RlRewardCollapse";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { GoogleOfficialLogo, XAiLogo } from "../components/RealLogos";

export const HookBeat1Rsi: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(56, 189, 248, 0.2)" secondaryGlow="rgba(129, 140, 248, 0.15)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.05}>
      <RsiFeedbackLoop title="RECURSIVE SELF-IMPROVEMENT" cycleMultiplier="4.8x" />
    </ParallaxCameraScene>
  </AbsoluteFill>
);

export const HookBeat2GoogleTweets: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(66, 133, 244, 0.2)" secondaryGlow="rgba(52, 168, 83, 0.15)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.04}>
      <AuthenticTweetPost
        brandLogo={<GoogleOfficialLogo size={28} />}
        brandName="Google DeepMind"
        brandColor="#4285F4"
        authorName="Pankaj Kumar"
        authorHandle="pankajkumar_dev"
        authorAvatarColor="#1E40AF"
        dateStr="Sep 2026"
        tweetText={"Google Might Have Achieved RSI\n\n• Sergey Brin was pushing resource allocation toward Recursive Self-Improvement in Google's AI efforts.\n• Google DeepMind is now near RSI, making each generation better at improving the next."}
        highlightPhrase="Sergey Brin pushing resource allocation toward Recursive Self-Improvement"
        mediaSrc="media/pankaj_rsi.jpg"
        sourceUrl="x.com/pankajkumar_dev/status/2098534988107133082"
        durationInFrames={durationInFrames}
      />
    </ParallaxCameraScene>
  </AbsoluteFill>
);

export const HookBeat3XAiTweet: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(239, 68, 68, 0.2)" secondaryGlow="rgba(255, 255, 255, 0.1)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.04}>
      <AuthenticTweetPost
        brandLogo={<XAiLogo size={26} color="#FFFFFF" />}
        brandName="xAI / Grok"
        brandColor="#EF4444"
        authorName="Haider."
        authorHandle="haider1"
        authorAvatarColor="#991B1B"
        dateStr="Sep 2026"
        tweetText={"in case you didn't know:\n\nGrok 4.7 was supposed to launch today, but once again, the Elon timeline hits hard.\ngrok 4.6 is a fantastic model, but sometimes it goes off track unless given clear conditions."}
        highlightPhrase="Grok 4.7 was supposed to launch today, but postponed"
        mediaSrc="media/haider_grok.png"
        sourceUrl="x.com/haider1/status/2098467861094363613"
        durationInFrames={durationInFrames}
      />
    </ParallaxCameraScene>
  </AbsoluteFill>
);

export const HookBeat4RlCollapse: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(239, 68, 68, 0.22)" secondaryGlow="rgba(15, 23, 42, 0.8)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.05}>
      <RlRewardCollapse title="RL REWARD PATHOLOGY" />
    </ParallaxCameraScene>
  </AbsoluteFill>
);
