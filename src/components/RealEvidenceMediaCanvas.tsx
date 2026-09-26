import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

interface RealEvidenceMediaCanvasProps {
  mediaSrc: string;
  categoryBadge?: string;
  sourceLabel?: string;
  verifiedResolution?: string;
  maxDossierWidth?: number;
  maxDossierHeight?: number;
  cameraDrift?: "zoomIn" | "zoomOut" | "panRight";
}

export const RealEvidenceMediaCanvas: React.FC<RealEvidenceMediaCanvasProps> = ({
  mediaSrc,
  maxDossierWidth = 1680,
  maxDossierHeight = 920,
  cameraDrift = "zoomIn",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Snappy Spring Entrance
  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 110, mass: 0.8 },
  });

  // Camera Drift Dynamics (Pure 2D, zero tilt)
  const zoomScale =
    cameraDrift === "zoomIn"
      ? interpolate(frame, [0, durationInFrames], [0.98, 1.04], { extrapolateRight: "clamp" })
      : cameraDrift === "zoomOut"
      ? interpolate(frame, [0, durationInFrames], [1.04, 0.98], { extrapolateRight: "clamp" })
      : 1.0;

  const panX =
    cameraDrift === "panRight"
      ? interpolate(frame, [0, durationInFrames], [-15, 15], { extrapolateRight: "clamp" })
      : 0;

  const scale = entrance * zoomScale;

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
      {/* 1. Dynamic Blurred Mirror Background */}
      <div
        style={{
          position: "absolute",
          inset: -30,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Img
          src={safeStatic(mediaSrc)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(60px) brightness(0.28) saturate(1.3)",
            transform: "scale(1.2)",
          }}
        />
        {/* Radial Darkening Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.2) 0%, rgba(2, 4, 10, 0.92) 85%)",
          }}
        />
      </div>

      {/* 2. Primary Evidence Frame (Clean, zero top text/URL bar, zero tilt) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: maxDossierWidth,
          maxHeight: maxDossierHeight,
          width: "auto",
          height: "auto",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.14)",
          backgroundColor: "#000000",
          boxShadow:
            "0 35px 100px rgba(0, 0, 0, 0.95), 0 10px 30px rgba(0, 0, 0, 0.8)",
          transform: `scale(${scale}) translate3d(${panX}px, 0px, 0px)`,
          transformOrigin: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* RAW HIGH-RES IMAGE */}
        <Img
          src={safeStatic(mediaSrc)}
          style={{
            width: "auto",
            height: "auto",
            maxWidth: maxDossierWidth,
            maxHeight: maxDossierHeight,
            objectFit: "contain",
            display: "block",
          }}
        />
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
