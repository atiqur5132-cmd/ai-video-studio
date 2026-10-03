import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { ThreeWayWarScenes } from "./scenes/ThreeWayWarScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Studio Mastered Broadcast Voiceover (Kokoro-82M bm_fable + Whisper 1:1 sync) */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* Subtle Ambient Cinematic BGM ducked at -24dB */}
      <Audio src={staticFile("bgm.mp3")} volume={0.06} />

      {/* Gemini 4 Argon vs GPT-6.1 Sol vs Claude Sonnet 5.5 (Full 9m 9s Documentary) */}
      <ThreeWayWarScenes />
    </AbsoluteFill>
  );
};
