import React from "react";
import { Img, staticFile, spring, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface RealTweetCardProps {
  authorName: string;
  authorHandle: string;
  avatarText?: string;
  avatarBg?: string;
  avatarImg?: string;
  isVerified?: boolean;
  dateStr?: string;
  tweetText: string;
  highlightedText?: string;
  mediaSrc?: string;
  stats?: { replies: string; reposts: string; likes: string; views: string };
  highlightColor?: string;
}

export const RealTweetCard: React.FC<RealTweetCardProps> = ({
  authorName,
  authorHandle,
  avatarText = "AI",
  avatarBg = "#1D9BF0",
  avatarImg,
  isVerified = true,
  dateStr = "Sep 2026",
  tweetText,
  highlightedText,
  mediaSrc,
  stats = { replies: "1.4K", reposts: "8.9K", likes: "42K", views: "1.8M" },
  highlightColor = "#EF4444",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const cameraZoom = interpolate(frame, [0, 180], [1.0, 1.05], {
    extrapolateRight: "clamp",
  });

  // Staggered highlight sweep
  const highlightProgress = interpolate(frame, [15, 55], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#020408",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        perspective: 1200,
      }}
    >
      {/* Studio Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 700,
          top: "15%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center, ${highlightColor === "#EF4444" ? "rgba(239, 68, 68, 0.16)" : "rgba(29, 155, 240, 0.16)"} 0%, transparent 65%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Tweet Dossier Card */}
      <div
        style={{
          width: 1640,
          backgroundColor: "#070B14",
          border: "1.5px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 24,
          padding: "40px 54px",
          color: "#E7E9EA",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          boxShadow: `0 35px 90px rgba(0, 0, 0, 0.95), 0 0 50px ${highlightColor === "#EF4444" ? "rgba(239, 68, 68, 0.15)" : "rgba(29, 155, 240, 0.15)"}`,
          transform: `scale(${entrance * cameraZoom}) rotateX(2deg) translateY(-55px)`,
          zIndex: 15,
        }}
      >
        {/* Tweet Author Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {/* Avatar */}
            {avatarImg ? (
              <Img
                src={staticFile(avatarImg)}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                }}
              />
            ) : (
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: avatarBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 24,
                  color: "#FFFFFF",
                  boxShadow: `0 0 20px ${avatarBg}66`,
                }}
              >
                {avatarText}
              </div>
            )}

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>{authorName}</span>
                {isVerified && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1D9BF0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                )}
              </div>
              <div style={{ fontSize: 16, color: "#94A3B8", marginTop: 2 }}>
                @{authorHandle} • <span style={{ color: "#64748B" }}>{dateStr}</span>
              </div>
            </div>
          </div>

          {/* X Official Monogram */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#94A3B8">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        {/* Tweet Body Text with Highlighter Sweep */}
        <div
          style={{
            fontSize: 32,
            lineHeight: 1.55,
            color: "#F1F5F9",
            fontWeight: 500,
            marginBottom: 28,
          }}
        >
          {highlightedText ? (
            <>
              {tweetText.split(highlightedText)[0]}
              <span
                style={{
                  position: "relative",
                  display: "inline",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  padding: "4px 8px",
                  borderRadius: 6,
                  background: `linear-gradient(90deg, ${highlightColor === "#EF4444" ? "rgba(239, 68, 68, 0.45)" : "rgba(250, 204, 21, 0.45)"} ${highlightProgress}%, transparent ${highlightProgress}%)`,
                  boxShadow: highlightProgress > 10 ? `0 0 25px ${highlightColor === "#EF4444" ? "rgba(239, 68, 68, 0.4)" : "rgba(250, 204, 21, 0.4)"}` : "none",
                }}
              >
                {highlightedText}
              </span>
              {tweetText.split(highlightedText)[1]}
            </>
          ) : (
            tweetText
          )}
        </div>

        {/* Embedded Media if provided */}
        {mediaSrc && (
          <div
            style={{
              width: "100%",
              height: 280,
              borderRadius: 16,
              overflow: "hidden",
              marginBottom: 24,
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Img src={staticFile(mediaSrc)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}

        {/* Metrics Row */}
        <div
          style={{
            display: "flex",
            gap: 40,
            paddingTop: 18,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            fontSize: 16,
            color: "#94A3B8",
          }}
        >
          <div>
            <strong style={{ color: "#FFFFFF", fontSize: 18, marginRight: 6 }}>{stats.reposts}</strong> Reposts
          </div>
          <div>
            <strong style={{ color: "#FFFFFF", fontSize: 18, marginRight: 6 }}>{stats.likes}</strong> Likes
          </div>
          <div>
            <strong style={{ color: "#FFFFFF", fontSize: 18, marginRight: 6 }}>{stats.views}</strong> Views
          </div>
        </div>
      </div>
    </div>
  );
};
