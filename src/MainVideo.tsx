import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { AiYouTubeDocScenes } from "./scenes/AiYouTubeDocScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Studio Mastered Broadcast Voiceover (Brian Multilingual + Whisper 1:1) */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* Subtle Ambient Cinematic BGM ducked at -24dB */}
      <Audio src={staticFile("bgm.mp3")} volume={0.06} />

      {/* Did AI Just Kill YouTube? - Complete 9-Act Documentary */}
      <AiYouTubeDocScenes />
    </AbsoluteFill>
  );
};
