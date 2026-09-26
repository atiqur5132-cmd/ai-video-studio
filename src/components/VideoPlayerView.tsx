import React from "react";
import { AbsoluteFill, Video, staticFile, useCurrentFrame, interpolate } from "remotion";

interface VideoPlayerViewProps {
  videoSrc: string;
  title?: string;
  durationInFrames: number;
  badge?: string;
  aspectRatio?: "cover" | "contain";
}

export const VideoPlayerView: React.FC<VideoPlayerViewProps> = ({
  videoSrc,
  title = "DEMO RECORDING",
  durationInFrames,
  badge = "LIVE PROOF",
  aspectRatio = "contain",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fullSrc = videoSrc.startsWith("http") ? videoSrc : staticFile(videoSrc);

  return (
    <AbsoluteFill style={{ backgroundColor: "#02040A", justifyContent: "center", alignItems: "center" }}>
      {/* 1. Ambient Blurred Video Light Canvas (Zero black void anywhere on screen) */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <Video
          src={fullSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(60px) brightness(0.35) saturate(1.8)",
            transform: "scale(1.25)",
          }}
          muted={true}
          volume={0}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(2, 4, 10, 0.45)" }} />
      </div>

      {/* 2. Hero Native Video Container: 95%+ Canvas Fill (1840 x 980) */}
      <div
        style={{
          width: 1840,
          height: 980,
          position: "relative",
          zIndex: 2,
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid rgba(56, 189, 248, 0.35)",
          boxShadow: "0 35px 90px rgba(0, 0, 0, 0.95), 0 0 45px rgba(56, 189, 248, 0.18)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#050811",
        }}
      >
        <Video
          src={fullSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: aspectRatio,
          }}
          muted={true}
          volume={0}
        />

        {/* Clean, Non-Obscuring Lower Third Telemetry Bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 52,
            background: "linear-gradient(to top, rgba(2, 6, 23, 0.95) 0%, rgba(2, 6, 23, 0.8) 70%, transparent 100%)",
            display: "flex",
            alignItems: "center",
            padding: "0 28px",
            gap: 18,
            zIndex: 10,
          }}
        >
          {/* Status Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              borderRadius: 6,
              padding: "4px 10px",
            }}
          >
            <span style={{ color: "#10B981", fontSize: 10 }}>●</span>
            <span style={{ color: "#10B981", fontSize: 11, fontWeight: 800, letterSpacing: 1.2, textTransform: "uppercase" }}>
              {badge}
            </span>
          </div>

          {/* Progress bar */}
          <div style={{ flex: 1, height: 4, backgroundColor: "rgba(255, 255, 255, 0.18)", borderRadius: 2, position: "relative" }}>
            <div style={{ width: `${progress}%`, height: "100%", backgroundColor: "#38BDF8", borderRadius: 2, boxShadow: "0 0 8px #38BDF8" }} />
          </div>

          {/* Title label */}
          <span style={{ color: "#F8FAFC", fontSize: 13, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "monospace" }}>
            {title}
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
