import React from "react";
import { AbsoluteFill } from "remotion";
import { Atmosphere } from "../components/Atmosphere";
import { CinematicScreenRecord } from "../components/CinematicScreenRecord";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { ParetoFrontierChart } from "../components/ParetoFrontierChart";
import { DeepSeekLogo } from "../components/RealLogos";

export const DeepSeekLaunchScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(77, 107, 254, 0.22)" secondaryGlow="rgba(56, 189, 248, 0.15)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.04}>
      <CinematicScreenRecord
        mediaSrc="media/arena_deepseek.jpg"
        sourceUrl="x.com/arena/status/2098088993367949337"
        durationInFrames={durationInFrames}
        brandLogo={<DeepSeekLogo size={30} color="#4D6BFE" />}
        brandName="DeepSeek AI / Code Arena"
        badgeColor="#4D6BFE"
        headlineBadge="CODE ARENA #14 • 1620 PTS"
      />
    </ParallaxCameraScene>
  </AbsoluteFill>
);

export const DeepSeekParetoScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => (
  <AbsoluteFill>
    <Atmosphere primaryGlow="rgba(77, 107, 254, 0.25)" secondaryGlow="rgba(16, 185, 129, 0.15)" />
    <ParallaxCameraScene sceneDurationInFrames={durationInFrames} zoomIntensity={0.05}>
      <ParetoFrontierChart title="10x EFFICIENCY DISRUPTION" />
    </ParallaxCameraScene>
  </AbsoluteFill>
);
