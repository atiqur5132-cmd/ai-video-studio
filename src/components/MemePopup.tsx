import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export interface MemePopupProps {
  imageSrc?: string;
  caption?: string;
  width?: number;
  height?: number;
  delay?: number;
  durationFrames?: number;
  position?: "bottom-left" | "bottom-right" | "top-right";
}

export const MemePopup: React.FC<MemePopupProps> = ({
  imageSrc = "evidence/harold_coffee.png",
  caption = "everything is fine",
  width = 360,
  height = 220,
  delay = 0,
  durationFrames = 120,
  position = "bottom-left",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 12, stiffness: 140 },
  });

  // Exit spring / fade
  const exitProgress = interpolate(
    frame,
    [delay + durationFrames - 15, delay + durationFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  if (frame < delay || frame > delay + durationFrames) {
    return null;
  }

  const posStyle: React.CSSProperties =
    position === "bottom-left"
      ? { bottom: 35, left: 45 }
      : position === "bottom-right"
      ? { bottom: 35, right: 45 }
      : { top: 35, right: 45 };

  return (
    <div
      style={{
        position: "absolute",
        ...posStyle,
        width,
        borderRadius: 16,
        overflow: "hidden",
        border: "2px solid #475569",
        backgroundColor: "#0f172a",
        boxShadow: "0 12px 30px rgba(0,0,0,0.8)",
        transform: `scale(${enterSpring * exitProgress}) rotate(${interpolate(
          enterSpring,
          [0, 1],
          [-4, -1]
        )}deg)`,
        opacity: enterSpring * exitProgress,
        zIndex: 40,
        fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
      }}
    >
      <Img
        src={staticFile(imageSrc)}
        style={{
          width: "100%",
          height: height - 40,
          objectFit: "cover",
          display: "block",
        }}
      />
      {caption && (
        <div
          style={{
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 700,
            color: "#e2e8f0",
            backgroundColor: "#020617",
            letterSpacing: "0.5px",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
};
