import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { Gemini4ProRealScenes } from "./scenes/Gemini4ProRealScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Studio Mastered Broadcast Voiceover (1:1 with Whisper Timestamps) */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* 100% Real Full-Screen Evidence Scenes (Mapped 1:1 to Spoken Words, Zero Flicker, Zero Distractions) */}
      <Gemini4ProRealScenes />
    </AbsoluteFill>
  );
};
