import React from "react";
import { AbsoluteFill, Img, Video, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { MotionBackground } from "./MotionBackground";

interface RealSourceSceneProps {
  imageSrc?: string;
  videoSrc?: string;
  durationInFrames: number;
  primaryGlow?: string;
  secondaryGlow?: string;
  badgeText?: string;
  objectFit?: "contain" | "cover";
  containerBg?: string;
}

export const RealSourceScene: React.FC<RealSourceSceneProps> = ({
  imageSrc,
  videoSrc,
  durationInFrames,
  primaryGlow = "rgba(56, 189, 248, 0.25)",
  secondaryGlow = "rgba(15, 23, 42, 0.6)",
  badgeText,
  objectFit = "contain",
  containerBg = "#000000",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy smooth spring entrance
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });
  const opacity = interpolate(frame, [0, 8], [0, 1], { extrapolateRight: "clamp" });

  // Subtle continuous organic floating animation (NO zoom-in that crops edges)
  const floatY = Math.sin((frame / 45) * Math.PI * 2) * 4;

  return (
    <AbsoluteFill style={{ backgroundColor: "#06080E" }}>
      {/* Layer 0: Ambient Dark Motion Graphic Loop */}
      <MotionBackground primaryColor={primaryGlow} secondaryColor={secondaryGlow} />

      {/* Layer 1: Clean Real Screenshot / Video Container */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", zIndex: 10 }}>
        <div
          style={{
            width: 1728,
            height: 972,
            opacity,
            transform: `scale(${interpolate(entrance, [0, 1], [0.97, 1])}) translateY(${floatY}px)`,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9), 0 0 1px rgba(255, 255, 255, 0.15)",
            border: "1.5px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: containerBg,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Active media viewport - strictly muted for videos, 100% full view for images */}
          {videoSrc ? (
            <Video
              src={videoSrc.startsWith("http") ? videoSrc : staticFile(videoSrc)}
              style={{ width: "100%", height: "100%", objectFit }}
              muted={true}
              volume={0}
            />
          ) : imageSrc ? (
            <Img
              src={imageSrc.startsWith("http") ? imageSrc : staticFile(imageSrc)}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit }}
            />
          ) : null}

          {/* Sleek minimalist verified source badge in corner */}
          {badgeText && (
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 24,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: 20,
                padding: "7px 20px",
                fontSize: 13,
                fontWeight: 700,
                color: "#E2E8F0",
                display: "flex",
                alignItems: "center",
                gap: 8,
                backdropFilter: "blur(10px)",
                zIndex: 20,
                boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10B981" }} />
              <span>{badgeText.replace(/[^\x20-\x7E]/g, " - ").replace(/\s+-\s+/g, " - ")}</span>
            </div>
          )}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
