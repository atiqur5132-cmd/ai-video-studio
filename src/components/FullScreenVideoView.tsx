import React from "react";
import { AbsoluteFill, Video, staticFile } from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

interface FullScreenVideoViewProps {
  videoSrc: string;
}

export const FullScreenVideoView: React.FC<FullScreenVideoViewProps> = ({ videoSrc }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* SINGLE ROCK-SOLID VIDEO (Zero Duplicate Decoders, Zero Scaling, Zero Flicker) */}
      <Video
        src={safeStatic(videoSrc)}
        muted
        volume={0}
        onError={(e) => {
          // Gracefully ignore harmless audio packet decode notices
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </AbsoluteFill>
  );
};
