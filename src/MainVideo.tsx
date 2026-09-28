import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { DevDay2026Scenes } from "./scenes/DevDay2026Scenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Studio Mastered Broadcast Voiceover (Brian Multilingual + Whisper 1:1) */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* DevDay 2026 Hard Evidence Scenes (Project o, $500 Pro Max, Rogue Agents, Cerebras Silicon) */}
      <DevDay2026Scenes />
    </AbsoluteFill>
  );
};
