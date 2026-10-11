import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HandDrawnCircle, HandDrawnUnderline } from "./HandDrawnAnnotations";

export interface HighlightBox {
  x: number; // percentage from left
  y: number; // percentage from top
  width: number; // percentage
  height: number; // percentage
  delay?: number;
  color?: string;
}

export interface CleanEvidenceViewProps {
  imageSrc: string;
  headline?: string;
  highlights?: HighlightBox[];
  width?: number;
  height?: number;
  zoom?: number;
}

export const CleanEvidenceView: React.FC<CleanEvidenceViewProps> = ({
  imageSrc,
  headline,
  highlights = [],
  width = 1400,
  height = 720,
  zoom = 1.0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle continuous push-in
  const cameraScale = interpolate(frame, [0, 300], [1.0, 1.04], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
      }}
    >
      {headline && (
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#fde047",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          {headline}
        </div>
      )}

      {/* Clean Document Container - Zero Fake Window Chrome */}
      <div
        style={{
          width,
          height,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid #334155",
          backgroundColor: "#030712",
          boxShadow: "0 20px 50px rgba(0,0,0,0.9)",
          position: "relative",
          transform: `scale(${cameraScale * zoom})`,
        }}
      >
        <Img
          src={staticFile(imageSrc)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />

        {/* Hand-drawn SVG Highlight Overlays */}
        {highlights.map((h, i) => {
          const hProgress = spring({
            frame: Math.max(0, frame - (h.delay || 15)),
            fps,
            config: { damping: 14, stiffness: 100 },
          });

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${h.x}%`,
                top: `${h.y}%`,
                width: `${h.width}%`,
                height: `${h.height}%`,
                border: `3px solid ${h.color || "#ef4444"}`,
                borderRadius: 8,
                backgroundColor: `${h.color || "#ef4444"}15`,
                boxShadow: `0 0 20px ${h.color || "#ef4444"}44`,
                transform: `scale(${hProgress})`,
                opacity: hProgress,
                pointerEvents: "none",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
