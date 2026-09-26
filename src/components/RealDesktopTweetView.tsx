import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

export interface HighlightBox {
  top?: number | string;
  left?: number | string;
  width?: number | string;
  height?: number | string;
}

interface RealDesktopTweetViewProps {
  screenshotSrc: string;
  sourceHandle?: string;
  authorName?: string;
  sourceUrl?: string;
  badgeText?: string;
  highlightBox?: HighlightBox;
  highlightColor?: string;
  zoomOnHighlight?: boolean;
  zoomStartFrame?: number;
  tiltAngle?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export const RealDesktopTweetView: React.FC<RealDesktopTweetViewProps> = ({
  screenshotSrc,
  maxWidth = 1560,
  maxHeight = 920,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Snappy Spring Entrance
  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.8 },
  });

  // Continuous subtle push-in (Zero 3D tilt, pure 2D scale)
  const pushIn = interpolate(frame, [0, durationInFrames], [0.98, 1.03], {
    extrapolateRight: "clamp",
  });

  const scale = entrance * pushIn;

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
      {/* LAYER 1: Dynamic Blurred Mirror Canvas (Zero Black Void) */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Img
          src={safeStatic(screenshotSrc)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(55px) brightness(0.28) saturate(1.3)",
            transform: "scale(1.2)",
          }}
        />
        {/* Radial Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.25) 0%, rgba(2, 4, 10, 0.94) 85%)",
          }}
        />
      </div>

      {/* LAYER 2: Clean, Flat Real Screenshot Container (Zero Header, Zero URLs, Zero Highlights, Zero Tilt) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth,
          maxHeight,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backgroundColor: "#000000",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.95), 0 10px 30px rgba(0, 0, 0, 0.8)",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* THE 100% REAL DESKTOP SCREENSHOT WITHOUT ANY OVERLAYS */}
        <Img
          src={safeStatic(screenshotSrc)}
          style={{
            width: "100%",
            height: "auto",
            maxHeight,
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Subtle vignette edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 65%, rgba(0, 0, 0, 0.75) 100%)",
          pointerEvents: "none",
          zIndex: 4,
        }}
      />
    </AbsoluteFill>
  );
};
