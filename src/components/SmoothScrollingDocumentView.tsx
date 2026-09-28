import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig, Easing } from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

interface SmoothScrollingDocumentViewProps {
  mediaSrc: string;
  scrollRatio?: number; // How far down to scroll (e.g. 0.35 = 35% of height)
  startDelayFrames?: number;
  containerWidth?: number;
  containerHeight?: number;
}

export const SmoothScrollingDocumentView: React.FC<SmoothScrollingDocumentViewProps> = ({
  mediaSrc,
  scrollRatio = 0.4,
  startDelayFrames = 15,
  containerWidth = 1440,
  containerHeight = 980,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Smooth scroll progression synced to voiceover duration
  const scrollProgress = interpolate(
    frame,
    [startDelayFrames, durationInFrames - 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.2, 0.0, 0.2, 1),
    }
  );

  // Subtle continuous push-in
  const pushIn = interpolate(frame, [0, durationInFrames], [1.0, 1.025], {
    extrapolateRight: "clamp",
  });

  const translateYPercent = -scrollProgress * (scrollRatio * 100);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Zero-Flicker Ambient Backing */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.95) 0%, #000000 85%)",
          pointerEvents: "none",
        }}
      />

      {/* Primary Scrolling Window */}
      <div
        style={{
          width: containerWidth,
          height: containerHeight,
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          backgroundColor: "#000000",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.98), 0 0 50px rgba(0, 0, 0, 0.8)",
          position: "relative",
          transform: `scale(${pushIn})`,
        }}
      >
        <div
          style={{
            width: "100%",
            transform: `translate3d(0, ${translateYPercent}%, 0)`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Img
            src={safeStatic(mediaSrc)}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
