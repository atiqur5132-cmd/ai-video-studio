import React from "react";
import { AbsoluteFill, Audio, staticFile } from "remotion";
import { VirtualCellMasterScenes } from "./scenes/VirtualCellMasterScenes";
import { YouTubeSubscribeOverlay } from "./components/YouTubeSubscribeOverlay";

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#030712" }}>
      {/* Studio Mastered Google Gemini 3.8 Flash TTS (Puck) Voiceover */}
      <Audio src={staticFile("voiceover.mp3")} />

      {/* Frame-Accurate Whisper-Synchronized 5-Act Virtual Cell AI Documentary */}
      <VirtualCellMasterScenes />

      {/* Real YouTube Creator Like & Subscribe Overlay (Popups at ~00:48 and ~02:30) */}
      <YouTubeSubscribeOverlay startFrame={1440} durationInFrames={140} position="bottom-right" />
      <YouTubeSubscribeOverlay startFrame={4500} durationInFrames={140} position="bottom-right" />
    </AbsoluteFill>
  );
};
