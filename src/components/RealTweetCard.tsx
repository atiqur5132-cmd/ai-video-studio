import React from "react";
import { Img, staticFile } from "remotion";

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
  highlightColor = "rgba(250, 204, 21, 0.35)",
}) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1380,
          backgroundColor: "#000000",
          border: "1.5px solid #2F3336",
          borderRadius: 20,
          padding: "32px 40px",
          color: "#E7E9EA",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Tweet Author Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {/* Avatar */}
            {avatarImg ? (
              <Img
                src={avatarImg.startsWith('http') ? avatarImg : staticFile(avatarImg)}
                style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: avatarBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#FFFFFF",
                }}
              >
                {avatarText}
              </div>
            )}

            {/* Name & Handle */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: "#F7F9F9" }}>{authorName}</span>
                {isVerified && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1D9BF0">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.63 9.33 1.75 10.57 1.75 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.79 5.21l-4.24-4.24 1.41-1.41 2.83 2.83 6.36-6.36 1.41 1.41-7.77 7.77z" />
                  </svg>
                )}
              </div>
              <div style={{ fontSize: 16, color: "#71767B" }}>@{authorHandle}</div>
            </div>
          </div>

          {/* X Logo */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#71767B">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        {/* Tweet Body Text */}
        <div
          style={{
            fontSize: 26,
            lineHeight: 1.55,
            color: "#E7E9EA",
            whiteSpace: "pre-wrap",
            marginBottom: 24,
            fontWeight: 400,
          }}
        >
          {highlightedText && tweetText.includes(highlightedText) ? (
            <>
              {tweetText.split(highlightedText)[0]}
              <span
                style={{
                  backgroundColor: highlightColor,
                  color: "#FFFFFF",
                  padding: "2px 8px",
                  borderRadius: 6,
                  borderBottom: "3px solid #FACC15",
                  fontWeight: 600,
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

        {/* Embedded Media if available */}
        {mediaSrc && (
          <div
            style={{
              marginBottom: 20,
              borderRadius: 16,
              overflow: "hidden",
              border: "1.5px solid #2F3336",
              maxHeight: 460,
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#08090C",
            }}
          >
            <Img
              src={mediaSrc.startsWith('http') ? mediaSrc : staticFile(mediaSrc)}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        )}

        {/* Date & Source */}
        <div style={{ fontSize: 16, color: "#71767B", paddingBottom: 16, borderBottom: "1px solid #2F3336" }}>
          <span>10:42 AM · {dateStr}</span> · <span style={{ color: "#1D9BF0" }}>X for Mac</span>
        </div>

        {/* Engagement Stats Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 16,
            fontSize: 16,
            color: "#71767B",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span>💬</span> <span>{stats.replies}</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span>🔁</span> <span>{stats.reposts}</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span>❤️</span> <span>{stats.likes}</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span>📊</span> <span>{stats.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
