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
  zoom?: number; // default 1.15 for bold, readable screenshots
  zoomOrigin?: string; // e.g. "center 35%" or "center center"
  objectPosition?: string;
}

export const EvidenceDossierView: React.FC<EvidenceDossierViewProps> = ({
  mediaSrc,
  glowColor = "#38bdf8",
  badgeLabel = "AUTHENTIC EVIDENCE • PRIMARY SOURCE",
  badgeStatus = "VERIFIED LEAK",
  zoom = 1.15,
  zoomOrigin = "center 35%",
  objectPosition = "center center",
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Subtle continuous cinematic camera push-in
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02050c",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Ambient Volumetric Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor}22 0%, rgba(2, 5, 12, 0.98) 75%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Massive 16:9 Dossier Window (1760 x 890) - Dominates 92% of Canvas */}
      <div
        style={{
          width: 1760,
          height: 890,
          borderRadius: 24,
          overflow: "hidden",
          border: `1.5px solid ${glowColor}60`,
          backgroundColor: "#070b14",
          boxShadow: `0 35px 120px rgba(0, 0, 0, 0.98), 0 0 60px ${glowColor}30`,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          transform: `translateY(-12px) scale(${scale})`,
          zIndex: 5,
        }}
      >
        {/* Top Header Pill */}
        <div
          style={{
            height: 52,
            backgroundColor: "#0a0f1d",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: glowColor,
                boxShadow: `0 0 12px ${glowColor}`,
              }}
            />
            <span
              style={{
                color: glowColor,
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {badgeLabel}
            </span>
          </div>
          <span
            style={{
              color: "#10b981",
              fontSize: 13,
              fontWeight: 900,
              letterSpacing: "0.06em",
              fontFamily: "monospace",
            }}
          >
            ● {badgeStatus}
          </span>
        </div>

        {/* Media Container with Dynamic Blurred Ambient Mirror Background */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#040711",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Layer 1: Blurred Ambient Mirror Background (fills all letterboxes with beautiful matching colors) */}
          <div
            style={{
              position: "absolute",
              inset: -20,
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <Img
              src={safeStatic(mediaSrc)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "blur(60px) brightness(0.25) saturate(1.4)",
                transform: "scale(1.2)",
              }}
            />
            {/* Subtle dark gradient overlay to keep foreground pop */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(4, 7, 17, 0.4)",
              }}
            />
          </div>

          {/* Layer 2: Foreground Crisp High-Res Media Container */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 24px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Img
                src={safeStatic(mediaSrc)}
                style={{
                  maxWidth: "100%",
                  maxHeight: "820px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition,
                  display: "block",
                  transform: `scale(${zoom})`,
                  transformOrigin: zoomOrigin,
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
