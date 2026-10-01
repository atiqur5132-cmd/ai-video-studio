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
  zoom?: number; // default 1.0 (strict zero-crop)
  zoomOrigin?: string; // e.g. "center 35%" or "center center"
  objectPosition?: string;
  panMode?: "none" | "slow-down" | "slow-up";
}

export const EvidenceDossierView: React.FC<EvidenceDossierViewProps> = ({
  mediaSrc,
  glowColor = "#38bdf8",
  badgeLabel = "AUTHENTIC EVIDENCE • PRIMARY SOURCE",
  badgeStatus = "VERIFIED LAUNCH",
  zoom = 1.0,
  zoomOrigin = "center center",
  objectPosition = "center center",
  panMode = "none",
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Subtle continuous cinematic camera push-in
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.02], {
    extrapolateRight: "clamp",
  });

  // Smooth vertical pan if enabled (for long vertical tweets to inspect header then table)
  const panOffset = panMode === "slow-down"
    ? interpolate(frame, [0, durationInFrames], [0, -180], { extrapolateRight: "clamp" })
    : panMode === "slow-up"
    ? interpolate(frame, [0, durationInFrames], [-180, 0], { extrapolateRight: "clamp" })
    : 0;

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
          width: 1300,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor}25 0%, rgba(2, 5, 12, 0.98) 75%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 
        Sleek 16:9 Dossier Window (1740 x 780)
        Shifted up to translateY(-55px) so the bottom 210px of the 1080p canvas
        is a dedicated, non-overlapping safety zone for KineticPunchText!
      */}
      <div
        style={{
          width: 1740,
          height: 780,
          borderRadius: 22,
          overflow: "hidden",
          border: `1.5px solid ${glowColor}70`,
          backgroundColor: "#070b14",
          boxShadow: `0 30px 100px rgba(0, 0, 0, 0.98), 0 0 50px ${glowColor}30`,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          transform: `translateY(-55px) scale(${scale})`,
          zIndex: 5,
        }}
      >
        {/* Top Header Pill */}
        <div
          style={{
            height: 48,
            backgroundColor: "#0a0f1d",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
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
                width: 9,
                height: 9,
                borderRadius: "50%",
                backgroundColor: glowColor,
                boxShadow: `0 0 12px ${glowColor}`,
              }}
            />
            <span
              style={{
                color: glowColor,
                fontSize: 13,
                fontWeight: 900,
                letterSpacing: "0.14em",
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
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.08em",
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
          {/* Layer 1: Blurred Ambient Mirror Background (fills letterboxes with authentic matching colors) */}
          <div
            style={{
              position: "absolute",
              inset: -30,
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
                filter: "blur(70px) brightness(0.28) saturate(1.5)",
                transform: "scale(1.25)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(4, 7, 17, 0.45)",
              }}
            />
          </div>

          {/* Layer 2: Foreground Crisp High-Res Media Container (Strict Zero Cropping) */}
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
                borderRadius: 12,
                overflow: panMode !== "none" ? "hidden" : "visible",
                boxShadow: "0 20px 60px rgba(0,0,0,0.85), 0 0 25px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#070b14",
              }}
            >
              <Img
                src={safeStatic(mediaSrc)}
                style={{
                  maxWidth: "100%",
                  maxHeight: "690px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition,
                  display: "block",
                  transform: `translateY(${panOffset}px) scale(${zoom})`,
                  transformOrigin: zoomOrigin,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
