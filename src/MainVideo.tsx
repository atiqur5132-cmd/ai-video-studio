import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { KimiK31DocScenes } from "./scenes/KimiK31DocScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#020408" }}>
      {/* 1. Mastered Broadcast Voiceover (446.32s = 7m 26s) */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* 2. Modern Tech Documentary Ambient BGM ducked at -29dB */}
      <Audio src={staticFile("bgm.mp3")} volume={0.035} />

      {/* 3. The 16:9 Documentary Scene Pipeline */}
      <KimiK31DocScenes />
    </AbsoluteFill>
  );
};
