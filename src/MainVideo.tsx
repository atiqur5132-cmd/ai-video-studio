import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import {
  Act1_ColdOpenHook,
  Act2_EarlyAccessShock,
  Act3_BenchmarkForensics,
  Act4_EconomicCollapse,
  Act5_NaturalCommunication,
  Act6_FrontierWarRoadmap,
} from "./scenes/Opus55LaunchComprehensiveScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#030712" }}>
      {/* Studio Mastered Brian Multilingual HD Voiceover (303.29s / 9,099 frames @ 30fps) */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Frame-Accurate Whisper-Synchronized 6-Act Comprehensive Documentary (5 Minutes) */}
      <Series>
        {/* Act 1: Cold Open Hook & The Shock Leapfrog (1346 frames | 0.0s -> 44.86s) */}
        <Series.Sequence durationInFrames={1346}>
          <Act1_ColdOpenHook durationInFrames={1346} />
        </Series.Sequence>

        {/* Act 2: Ethan Mollick Test & 680k Code Migration (1674 frames | 44.86s -> 100.66s) */}
        <Series.Sequence durationInFrames={1674}>
          <Act2_EarlyAccessShock durationInFrames={1674} />
        </Series.Sequence>

        {/* Act 3: Benchmark Forensics - Crushing Terminal-Bench 4.0 (1697 frames | 100.66s -> 157.24s) */}
        <Series.Sequence durationInFrames={1697}>
          <Act3_BenchmarkForensics durationInFrames={1697} />
        </Series.Sequence>

        {/* Act 4: The 40% Economic Collapse & HAProxy Rewrite (2103 frames | 157.24s -> 227.34s) */}
        <Series.Sequence durationInFrames={2103}>
          <Act4_EconomicCollapse durationInFrames={2103} />
        </Series.Sequence>

        {/* Act 5: Natural Communication & Alignment Verification (1405 frames | 227.34s -> 274.18s) */}
        <Series.Sequence durationInFrames={1405}>
          <Act5_NaturalCommunication durationInFrames={1405} />
        </Series.Sequence>

        {/* Act 6: The Frontier War & Upcoming Roadmap (874 frames | 274.18s -> 303.29s) */}
        <Series.Sequence durationInFrames={874}>
          <Act6_FrontierWarRoadmap durationInFrames={874} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
