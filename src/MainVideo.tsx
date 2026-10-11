import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { AiEscapeUnderOathScenes } from "./scenes/AiEscapeUnderOathScenes";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Studio Mastered Broadcast Voiceover (en-US-ChristopherNeural + Whisper 1:1 sync) */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* Subtle Ambient Cinematic BGM ducked at -24dB */}
      <Audio src={staticFile("bgm.mp3")} volume={0.06} />

      {/* Under Oath: Big Tech Admits AI Escaped Containment (Full 7m 35s Investigative Documentary) */}
      <AiEscapeUnderOathScenes />
    </AbsoluteFill>
  );
};
