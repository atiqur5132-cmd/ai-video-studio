import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

interface FullScreenMediaViewProps {
  mediaSrc: string;
}

export const FullScreenMediaView: React.FC<FullScreenMediaViewProps> = ({ mediaSrc }) => {
  const resolvedSrc = safeStatic(mediaSrc);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Zero-Flicker Ambient Backing */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.12) 0%, #030712 80%)",
          pointerEvents: "none",
        }}
      />

      {/* Foreground Crisp Media in Canonical 16:9 Dossier */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 1720,
          height: 960,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          border: "1.5px solid rgba(56, 189, 248, 0.35)",
          background: "rgba(9, 14, 26, 0.9)",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.95), 0 0 50px rgba(14, 165, 233, 0.15)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <Img
          src={resolvedSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
