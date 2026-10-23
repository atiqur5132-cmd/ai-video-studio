import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

export interface HighlightBox {
  top: number | string;
  left: number | string;
  width: number | string;
  height: number | string;
  color?: string;
  label?: string;
}

interface RealDesktopTweetViewProps {
  screenshotSrc: string;
  // Window dimensions on the 1920x1080 canvas
  windowWidth?: number;  // Default 840px (fills 44% of width, leaving breathing room for atmospheric glow)
  windowHeight?: number; // Default 880px (fills 82% of height)
  // Camera push & scroll
  baseScale?: number;    // Window scale at start (default 1.0)
  zoomScale?: number;    // Window scale at end (default 1.12 for continuous slow push)
  panY?: [number, number]; // [startY, endY] in pixels (scrolls tall tweet inside window)
  focalZoom?: {          // Optional focal zoom on a specific detail
    scale: number;       // e.g. 1.45
    origin: string;      // e.g. "center 30%"
    startFrame?: number;
  };
  highlightBox?: HighlightBox;
  // Backward compatibility
  maxWidth?: number;
  maxHeight?: number;
}

export const RealDesktopTweetView: React.FC<RealDesktopTweetViewProps> = ({
  screenshotSrc,
  windowWidth = 840,
  windowHeight = 880,
  baseScale = 1.0,
  zoomScale = 1.12,
  panY = [0, 0],
  focalZoom,
  highlightBox,
  maxWidth,
  maxHeight,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // If older code passed maxWidth, use it nicely
  const effectiveWidth = maxWidth && maxWidth < windowWidth ? maxWidth : windowWidth;
  const effectiveHeight = maxHeight && maxHeight < windowHeight ? maxHeight : windowHeight;

  // Snappy spring entrance for the entire card
  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.8 },
  });

  // Continuous subtle push-in on the window
  const windowScale = interpolate(
    frame,
    [0, durationInFrames],
    [baseScale, zoomScale],
    { extrapolateRight: "clamp" }
  );

  // Smooth vertical scroll through tall tweet
  const currentScrollY = interpolate(
    frame,
    [0, durationInFrames],
    [panY[0], panY[1]],
    { extrapolateRight: "clamp" }
  );

  // Optional focal zoom on specific detail (e.g. video player or JSON config)
  let detailScale = 1.0;
  let detailOrigin = "center top";
  if (focalZoom) {
    const zoomStart = focalZoom.startFrame || 0;
    const zoomProgress = spring({
      frame: Math.max(0, frame - zoomStart),
      fps,
      config: { damping: 16, stiffness: 100 },
    });
    detailScale = interpolate(zoomProgress, [0, 1], [1.0, focalZoom.scale]);
    detailOrigin = focalZoom.origin;
  }

  const highlightPulse = Math.sin(frame * 0.1) * 0.2 + 0.8;

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
      {/* LAYER 1: Rich Atmospheric Blurred Mirror Canvas (Eliminating Empty Black Void) */}
      <div
        style={{
          position: "absolute",
          inset: -60,
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
            filter: "blur(65px) brightness(0.55) saturate(1.7)",
            transform: "scale(1.35)",
          }}
        />
        {/* Soft Radial Vignette for Depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.25) 0%, rgba(2, 4, 10, 0.85) 90%)",
          }}
        />
      </div>

      {/* LAYER 2: Sleek Documentary Showcase Window (Enlarged & Floating) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: effectiveWidth,
          height: effectiveHeight,
          borderRadius: 22,
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          backgroundColor: "#000000",
          boxShadow:
            "0 40px 120px rgba(0, 0, 0, 0.98), 0 15px 45px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
          transform: `scale(${entrance * windowScale})`,
          transformOrigin: "center center",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* Inner Scroll & Detail Zoom Container */}
        <div
          style={{
            width: "100%",
            transform: `translate3d(0, ${currentScrollY}px, 0) scale(${detailScale})`,
            transformOrigin: detailOrigin,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* THE 100% REAL DESKTOP SCREENSHOT (Fits exact width, ZERO horizontal clipping!) */}
          <Img
            src={safeStatic(screenshotSrc)}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />

          {/* Highlight Bounding Box for Specific Proof Point */}
          {highlightBox && (
            <div
              style={{
                position: "absolute",
                top: highlightBox.top,
                left: highlightBox.left,
                width: highlightBox.width,
                height: highlightBox.height,
                border: `3px solid ${highlightBox.color || "#EF4444"}`,
                borderRadius: 8,
                backgroundColor: `${highlightBox.color || "#EF4444"}18`,
                boxShadow: `0 0 25px ${highlightBox.color || "#EF4444"}, inset 0 0 15px ${highlightBox.color || "#EF4444"}40`,
                opacity: highlightPulse,
                zIndex: 10,
                pointerEvents: "none",
              }}
            >
              {highlightBox.label && (
                <div
                  style={{
                    position: "absolute",
                    top: -28,
                    left: 0,
                    backgroundColor: highlightBox.color || "#EF4444",
                    color: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  {highlightBox.label}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Edge Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.7) 100%)",
          pointerEvents: "none",
          zIndex: 4,
        }}
      />
    </AbsoluteFill>
  );
};
