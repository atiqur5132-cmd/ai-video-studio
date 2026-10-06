import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { AstraArgonWarScenes } from "./scenes/AstraArgonWarScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Studio Mastered Broadcast Voiceover (Kokoro-82M bm_fable + Whisper 1:1 sync) */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* Subtle Ambient Cinematic BGM ducked at -24dB */}
      <Audio src={staticFile("bgm.mp3")} volume={0.06} />

      {/* Why OpenAI Shelved GPT-6.1 Astra & DeepMind Locked Gemini 4 Argon (Full 8m 2s Documentary) */}
      <AstraArgonWarScenes />
    </AbsoluteFill>
  );
};
