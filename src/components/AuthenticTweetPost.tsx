import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { XLogo } from "./RealLogos";

interface AuthenticTweetPostProps {
  brandLogo: React.ReactNode;
  brandName: string;
  brandColor?: string;
  authorName: string;
  authorHandle: string;
  authorAvatarText?: string;
  authorAvatarColor?: string;
  dateStr?: string;
  tweetText: string;
  highlightPhrase?: string;
  mediaSrc?: string;
  sourceUrl: string;
  durationInFrames: number;
}

export const AuthenticTweetPost: React.FC<AuthenticTweetPostProps> = ({
  brandLogo,
  brandName,
  brandColor = "#38BDF8",
  authorName,
  authorHandle,
  authorAvatarText,
  authorAvatarColor = "#3B82F6",
  dateStr = "Sep 2026",
  tweetText,
  highlightPhrase,
  mediaSrc,
  sourceUrl,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy entrance
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  // Subtle ambient floating sway
  const swayX = Math.sin(frame / 40) * 4;
  const swayY = Math.cos(frame / 45) * 3;

  // Neon highlight sweep
  const highlightWidth = interpolate(frame, [15, 50], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          width: 1480,
          maxHeight: 960,
          opacity,
          transform: `scale(${interpolate(entrance, [0, 1], [0.94, 1])}) translate3d(${swayX}px, ${swayY}px, 0px)`,
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(9, 14, 26, 0.99) 100%)",
          border: `1.5px solid ${brandColor}55`,
          borderRadius: 24,
          padding: "34px 46px",
          boxShadow: `0 35px 100px rgba(0, 0, 0, 0.95), 0 0 60px ${brandColor}25`,
          display: "flex",
          flexDirection: "column",
          gap: 22,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top Header: Authentic Brand Identity + X Logo */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Brand Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(2, 6, 23, 0.8)",
              border: `1px solid ${brandColor}44`,
              borderRadius: 14,
              padding: "8px 18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>{brandLogo}</div>
            <span style={{ fontSize: 13, fontWeight: 800, color: brandColor, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {brandName}
            </span>
          </div>

          {/* Source URL Pill + Official X Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(2, 6, 23, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 20,
                padding: "6px 18px",
                fontSize: 13,
                color: "#94A3B8",
              }}
            >
              <span style={{ color: "#10B981", fontSize: 12 }}>🔒</span>
              <span style={{ color: "#E2E8F0", fontWeight: 600 }}>{sourceUrl}</span>
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#000000",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <XLogo size={18} color="#FFFFFF" />
            </div>
          </div>
        </div>

        {/* Author Details */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: authorAvatarColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              color: "#FFFFFF",
              boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
            }}
          >
            {authorAvatarText || authorName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>{authorName}</span>
              {/* Verified Blue Check */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#38BDF8">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
            <div style={{ fontSize: 14, color: "#94A3B8", marginTop: 2 }}>
              @{authorHandle} • {dateStr}
            </div>
          </div>
        </div>

        {/* Full Tweet Text (Clean, Readable, Zero Words Cut Off) */}
        <div style={{ fontSize: 25, lineHeight: 1.5, color: "#F1F5F9", whiteSpace: "pre-line", fontWeight: 500 }}>
          {tweetText}
        </div>

        {/* Optional Animated Highlighter Quote */}
        {highlightPhrase && (
          <div
            style={{
              position: "relative",
              padding: "16px 24px",
              borderRadius: 14,
              background: "rgba(2, 6, 23, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: `${highlightWidth}%`,
                background: `linear-gradient(90deg, ${brandColor}33, ${brandColor}55)`,
                boxShadow: `0 0 25px ${brandColor}44`,
                transition: "width 0.1s linear",
              }}
            />
            <span style={{ position: "relative", zIndex: 2, fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>
              "{highlightPhrase}"
            </span>
          </div>
        )}

        {/* Media Attachment: 100% UNCLIPPED, Natural Aspect Ratio */}
        {mediaSrc && (
          <div
            style={{
              width: "100%",
              maxHeight: 460,
              background: "#020617",
              border: "1px solid rgba(51, 65, 85, 0.6)",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 12,
            }}
          >
            <Img
              src={staticFile(mediaSrc)}
              style={{
                maxWidth: "100%",
                maxHeight: 436,
                objectFit: "contain",
                borderRadius: 10,
              }}
            />
          </div>
        )}

        {/* Footer Metrics */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 14 }}>
          <div style={{ display: "flex", gap: 24, fontSize: 13, color: "#94A3B8", fontWeight: 600 }}>
            <span>🔁 Retweets</span>
            <span>❤️ Likes</span>
            <span>🔖 Bookmarks</span>
          </div>
          <span style={{ fontSize: 12, color: brandColor, fontWeight: 700 }}>
            VERIFIED POST TELEMETRY
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
