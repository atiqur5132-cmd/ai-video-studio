import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { Gemini4ArgonLeakScenes } from "./scenes/Gemini4ArgonLeakScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Studio Mastered Broadcast Voiceover (en-US-ChristopherNeural + Whisper 1:1 sync) */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* Subtle Ambient Cinematic BGM ducked at -24dB */}
      <Audio src={staticFile("bgm.mp3")} volume={0.06} />

      {/* Gemini 4 Argon: Google's Secret Canary Replacing Flash (Full 8-minute Documentary) */}
      <Gemini4ArgonLeakScenes />
    </AbsoluteFill>
  );
};
