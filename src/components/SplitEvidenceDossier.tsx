import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

interface SplitEvidenceDossierProps {
  leftMediaSrc: string; // e.g. tweet screenshot
  rightMediaSrc: string; // e.g. direct high-res benchmark/architecture
  glowColor?: string;
  badgeLabel?: string;
  badgeStatus?: string;
  leftTitle?: string;
  rightTitle?: string;
}

export const SplitEvidenceDossier: React.FC<SplitEvidenceDossierProps> = ({
  leftMediaSrc,
  rightMediaSrc,
  glowColor = "#38bdf8",
  badgeLabel = "AUTHENTIC EVIDENCE • MULTI-SOURCE AUDIT",
  badgeStatus = "PRIMARY PROOF",
  leftTitle = "OFFICIAL POST",
  rightTitle = "DIRECT BENCHMARK",
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.02], {
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
      {/* Background Volumetric Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor}25 0%, rgba(2, 5, 12, 0.98) 75%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main 16:9 Split Dossier Frame (1760 x 780, lifted to translateY(-55px)) */}
      <div
        style={{
          width: 1760,
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

        {/* Dual Split Panels */}
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: "16px 20px",
            gap: 20,
            backgroundColor: "#040711",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {/* Left Panel: Verified Post Card */}
          <div
            style={{
              flex: "0 0 46%",
              height: "100%",
              borderRadius: 14,
              backgroundColor: "#080c18",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.7)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                height: 32,
                backgroundColor: "#0e1526",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                color: glowColor,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.08em",
                fontFamily: "monospace",
              }}
            >
              VERIFIED TWEET DOSSIER • {leftTitle}
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                backgroundColor: "#050812",
              }}
            >
              <Img
                src={safeStatic(leftMediaSrc)}
                style={{
                  maxWidth: "100%",
                  maxHeight: "640px",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: 8,
                }}
              />
            </div>
          </div>

          {/* Right Panel: Direct High-Res Graphic / Chart */}
          <div
            style={{
              flex: "1 1 54%",
              height: "100%",
              borderRadius: 14,
              backgroundColor: "#080c18",
              border: `1px solid ${glowColor}40`,
              boxShadow: `0 15px 40px rgba(0,0,0,0.8), 0 0 25px ${glowColor}15`,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                height: 32,
                backgroundColor: "#0e1526",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 14px",
              }}
            >
              <span
                style={{
                  color: "#10b981",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  fontFamily: "monospace",
                }}
              >
                HIGH-RESOLUTION EVIDENCE • {rightTitle}
              </span>
              <span
                style={{
                  color: "#94a3b8",
                  fontSize: 10,
                  fontFamily: "monospace",
                }}
              >
                100% UNCOMPRESSED
              </span>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                backgroundColor: "#050812",
              }}
            >
              <Img
                src={safeStatic(rightMediaSrc)}
                style={{
                  maxWidth: "100%",
                  maxHeight: "640px",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: 8,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
