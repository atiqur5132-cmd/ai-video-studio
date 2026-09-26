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
      {/* Dynamic Ambient Blurred Background to eliminate empty black voids */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <Img
          src={resolvedSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(45px) brightness(0.35) saturate(1.2)",
            transform: "scale(1.15)",
          }}
        />
      </div>

      {/* Foreground Crisp Media */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "100%",
          maxHeight: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 25px 80px rgba(0, 0, 0, 0.9)",
        }}
      >
        <Img
          src={resolvedSrc}
          style={{
            maxWidth: "1920px",
            maxHeight: "1080px",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            borderRadius: 8,
            display: "block",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
