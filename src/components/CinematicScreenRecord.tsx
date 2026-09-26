import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

interface CinematicScreenRecordProps {
  mediaSrc: string;
  sourceUrl: string;
  durationInFrames: number;
  brandLogo?: React.ReactNode;
  brandName?: string;
  badgeColor?: string;
  headlineBadge?: string;
  startScrollY?: number;
  endScrollY?: number;
  zoomScale?: number;
  isCard?: boolean;
}

export const CinematicScreenRecord: React.FC<CinematicScreenRecordProps> = ({
  mediaSrc,
  sourceUrl,
  durationInFrames,
  brandLogo,
  brandName,
  badgeColor = "#38BDF8",
  headlineBadge,
  startScrollY = 0,
  endScrollY = 0,
  zoomScale = 1.0,
  isCard = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  // Smooth cinematic documentary web scroll (strictly 1:1 flat, NO 2.5D tilt)
  const scrollY = interpolate(frame, [0, durationInFrames], [startScrollY, endScrollY], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Auto-detect if media is a narrow vertical card
  const isVerticalCard = isCard || mediaSrc.includes("_card.png");

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          width: 1760,
          height: 960,
          opacity,
          transform: `scale(${interpolate(entrance, [0, 1], [0.96, 1])})`,
          background: "rgba(9, 14, 26, 0.98)",
          border: `1.5px solid ${badgeColor}44`,
          borderRadius: 16,
          boxShadow: `0 36px 90px -18px rgba(0, 0, 0, 0.95), 0 0 45px ${badgeColor}18`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Browser Chrome Header with Mac dots + Verified URL + Brand */}
        <div
          style={{
            height: 56,
            background: "rgba(15, 23, 42, 0.98)",
            borderBottom: "1px solid rgba(51, 65, 85, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            zIndex: 10,
          }}
        >
          {/* Mac window dots + Brand Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
            </div>

            {brandLogo && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 12, borderLeft: "1px solid rgba(255,255,255,0.15)" }}>
                {brandLogo}
                {brandName && (
                  <span style={{ fontSize: 13, fontWeight: 800, color: badgeColor, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {brandName}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Centered Secure URL Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(2, 6, 23, 0.85)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: 20,
              padding: "6px 24px",
              fontSize: 14,
              color: "#94A3B8",
              maxWidth: 820,
            }}
          >
            <span style={{ color: "#10B981", fontSize: 13 }}>🔒</span>
            <span style={{ color: "#38BDF8", fontWeight: 600 }}>{sourceUrl}</span>
          </div>

          {/* Headline Badge */}
          <div style={{ display: "flex", justifyContent: "flex-end", minWidth: 160 }}>
            {headlineBadge && (
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 12,
                  background: `${badgeColor}22`,
                  border: `1px solid ${badgeColor}66`,
                  color: badgeColor,
                }}
              >
                {headlineBadge}
              </span>
            )}
          </div>
        </div>

        {/* Viewport: 92%+ High Canvas Utilization */}
        <div
          style={{
            flex: 1,
            position: "relative",
            background: "#020617",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: isVerticalCard ? "center" : "flex-start",
          }}
        >
          {/* If it's a vertical card, render an ambient blurred version in the background to eliminate all dead black void */}
          {isVerticalCard ? (
            <>
              <div
                style={{
                  position: "absolute",
                  inset: -20,
                  backgroundImage: `url(${staticFile(mediaSrc)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(35px) brightness(0.25) saturate(1.4)",
                  transform: "scale(1.1)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxHeight: "92%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: `scale(${zoomScale}) translateY(${-scrollY * 0.4}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Img
                  src={staticFile(mediaSrc)}
                  style={{
                    maxHeight: 820,
                    width: "auto",
                    borderRadius: 16,
                    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(56, 189, 248, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>
            </>
          ) : (
            /* If it's a 16:9 desktop view, fill 100% width with smooth animated scroll */
            <div
              style={{
                width: "100%",
                transform: `translateY(${-scrollY}px)`,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Img
                src={staticFile(mediaSrc)}
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: "100%",
                  objectFit: "cover",
                  transform: `scale(${zoomScale})`,
                  transformOrigin: "top center",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
