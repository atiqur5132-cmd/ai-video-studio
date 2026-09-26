import React from "react";
import { AbsoluteFill, Video, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

interface RealEvidenceVideoCanvasProps {
  videoSrc: string;
  sourceLabel?: string;
  authorHandle?: string;
  badgeText?: string;
  aspectRatio?: "16:9" | "9:16" | "auto";
  maxDossierWidth?: number;
  maxDossierHeight?: number;
}

export const RealEvidenceVideoCanvas: React.FC<RealEvidenceVideoCanvasProps> = ({
  videoSrc,
  aspectRatio = "16:9",
  maxDossierWidth = 1720,
  maxDossierHeight = 940,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Snappy Spring Entrance
  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 110, mass: 0.8 },
  });

  // Slow continuous push-in (Zero tilt)
  const pushIn = interpolate(frame, [0, durationInFrames], [0.98, 1.03], {
    extrapolateRight: "clamp",
  });

  const scale = entrance * pushIn;
  const isVertical = aspectRatio === "9:16";

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020408",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* 1. Dynamic Synchronous Blurred Mirror Canvas (Zero Black Void) */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Video
          src={safeStatic(videoSrc)}
          muted
          volume={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(55px) brightness(0.28) saturate(1.3)",
            transform: "scale(1.25)",
          }}
        />
        {/* Cinematic Radial Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.25) 0%, rgba(2, 4, 10, 0.94) 85%)",
          }}
        />
      </div>

      {/* 2. Primary Evidence Video Container (Clean, zero top text/URL bar, zero tilt) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: isVertical ? 540 : maxDossierWidth,
          height: isVertical ? 960 : maxDossierHeight,
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.14)",
          backgroundColor: "#000000",
          boxShadow:
            "0 35px 100px rgba(0, 0, 0, 0.95), 0 10px 30px rgba(0, 0, 0, 0.8)",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Video
          src={safeStatic(videoSrc)}
          muted
          volume={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: isVertical ? "cover" : "contain",
            backgroundColor: "#000000",
            display: "block",
          }}
        />
      </div>

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 65%, rgba(0, 0, 0, 0.75) 100%)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />
    </AbsoluteFill>
  );
};
