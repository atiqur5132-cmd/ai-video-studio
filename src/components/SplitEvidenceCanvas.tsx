import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

interface SplitEvidenceCanvasProps {
  leftSrc: string;
  leftTitle?: string;
  leftBadge?: string;
  rightSrc: string;
  rightTitle?: string;
  rightBadge?: string;
  centerBadge?: string;
}

export const SplitEvidenceCanvas: React.FC<SplitEvidenceCanvasProps> = ({
  leftSrc,
  rightSrc,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Staggered Entrance
  const leftEntrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 110, mass: 0.8 },
  });

  const rightEntrance = spring({
    frame: frame - 12,
    fps,
    config: { damping: 18, stiffness: 110, mass: 0.8 },
  });

  // Slow continuous push-in (Zero tilt)
  const pushIn = interpolate(frame, [0, durationInFrames], [0.98, 1.03], {
    extrapolateRight: "clamp",
  });

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
      {/* 1. Dynamic Blurred Mirror Canvas */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
          display: "flex",
        }}
      >
        <div style={{ flex: 1, height: "100%", overflow: "hidden" }}>
          <Img
            src={safeStatic(leftSrc)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(60px) brightness(0.25) saturate(1.3)",
              transform: "scale(1.3)",
            }}
          />
        </div>
        <div style={{ flex: 1, height: "100%", overflow: "hidden" }}>
          <Img
            src={safeStatic(rightSrc)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(60px) brightness(0.25) saturate(1.3)",
              transform: "scale(1.3)",
            }}
          />
        </div>
        {/* Darkening Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.2) 0%, rgba(2, 4, 10, 0.94) 85%)",
          }}
        />
      </div>

      {/* 2. Dual Evidence Cards Container (Clean, zero top bars, zero badges, zero tilt) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: 36,
          width: 1780,
          justifyContent: "center",
          transform: `scale(${pushIn})`,
        }}
      >
        {/* Left Evidence */}
        <div
          style={{
            width: 850,
            height: 890,
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backgroundColor: "#000000",
            boxShadow:
              "0 30px 90px rgba(0, 0, 0, 0.95), 0 10px 25px rgba(0, 0, 0, 0.8)",
            transform: `scale(${leftEntrance})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Img
            src={safeStatic(leftSrc)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Right Evidence */}
        <div
          style={{
            width: 850,
            height: 890,
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backgroundColor: "#000000",
            boxShadow:
              "0 30px 90px rgba(0, 0, 0, 0.95), 0 10px 25px rgba(0, 0, 0, 0.8)",
            transform: `scale(${rightEntrance})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Img
            src={safeStatic(rightSrc)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Edge vignette */}
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
