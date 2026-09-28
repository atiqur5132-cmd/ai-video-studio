import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

interface EvidenceDossierViewProps {
  mediaSrc: string;
  glowColor?: string; // e.g. "#38bdf8" or "#f97316" or "#ef4444"
  badgeLabel?: string;
  badgeStatus?: string;
}

export const EvidenceDossierView: React.FC<EvidenceDossierViewProps> = ({
  mediaSrc,
  glowColor = "#38bdf8",
  badgeLabel = "AUTHENTIC EVIDENCE • PRIMARY SOURCE",
  badgeStatus = "VERIFIED LEAK"
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Subtle continuous cinematic camera push-in (Zero static frame)
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.03], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Ambient Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor}18 0%, rgba(3, 7, 18, 0.95) 75%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Sleek 16:9 Dossier Window - 100% Centered & Fully Visible */}
      <div
        style={{
          width: 1480,
          height: 800,
          borderRadius: 20,
          overflow: "hidden",
          border: `1.5px solid ${glowColor}50`,
          backgroundColor: "#090d16",
          boxShadow: `0 30px 100px rgba(0, 0, 0, 0.95), 0 0 50px ${glowColor}25`,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          transform: `translateY(-24px) scale(${scale})`,
          zIndex: 5,
        }}
      >
        {/* Top Header Pill */}
        <div
          style={{
            height: 48,
            backgroundColor: "#0d1322",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: glowColor, boxShadow: `0 0 10px ${glowColor}` }} />
            <span style={{ color: glowColor, fontSize: 13, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {badgeLabel}
            </span>
          </div>
          <span style={{ color: "#10b981", fontSize: 12, fontWeight: 800, letterSpacing: "0.05em" }}>
            ● {badgeStatus}
          </span>
        </div>

        {/* Media Container - Perfectly Centered, Zero Scroll Cutoff */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#050811",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 24px",
            overflow: "hidden",
          }}
        >
          <Img
            src={safeStatic(mediaSrc)}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              display: "block",
              borderRadius: 8,
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
