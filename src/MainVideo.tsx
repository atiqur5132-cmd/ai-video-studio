import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { GeminiArgonScenes } from "./scenes/GeminiArgonScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Studio Mastered Broadcast Voiceover (Kokoro bm_fable + Whisper 1:1) */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* Subtle Ambient Cinematic BGM ducked at -24dB */}
      <Audio src={staticFile("bgm.mp3")} volume={0.06} />

      {/* Gemini 4 Argon - Complete Documentary */}
      <GeminiArgonScenes />
    </AbsoluteFill>
  );
};
