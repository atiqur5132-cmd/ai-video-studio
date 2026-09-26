import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const VoxDocumentCard: React.FC<{
  authorName: string;
  authorHandle: string;
  authorAvatar?: string;
  dateStr?: string;
  content: React.ReactNode;
  highlightText?: string;
  badgeText?: string;
  rotateX?: number;
  rotateY?: number;
  perspective?: number;
  width?: number | string;
  className?: string;
}> = ({
  authorName,
  authorHandle,
  authorAvatar,
  dateStr = "Sep 2026",
  content,
  highlightText,
  badgeText,
  rotateX = 6,
  rotateY = -6,
  perspective = 1200,
  width = 820,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardEnter = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120, mass: 0.8 },
  });

  const neonProgress = interpolate(frame, [15, 45], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        perspective: `${perspective}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width,
          background: "linear-gradient(135deg, rgba(24, 26, 32, 0.92) 0%, rgba(14, 16, 20, 0.96) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 24,
          padding: "32px 36px",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(16, 163, 127, 0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transform: `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(${cardEnter})
          `,
          transformStyle: "preserve-3d",
          color: "#F3F4F6",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle top edge glow border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          }}
        />

        {/* Header with user info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #374151, #1F2937)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 18,
                color: "#E5E7EB",
                overflow: "hidden",
              }}
            >
              {authorAvatar ? (
                <img src={authorAvatar} alt={authorName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                authorName.charAt(0).toUpperCase()
              )}
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 18, color: "#FFFFFF" }}>
                  {authorName}
                </span>
                {/* Verified Blue Check */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#38BDF8">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <div style={{ fontSize: 14, color: "#9CA3AF" }}>
                @{authorHandle} • {dateStr}
              </div>
            </div>
          </div>

          {badgeText && (
            <div
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: "rgba(16, 163, 127, 0.15)",
                border: "1px solid rgba(16, 163, 127, 0.4)",
                color: "#10B981",
              }}
            >
              {badgeText}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ fontSize: 20, lineHeight: 1.5, color: "#E5E7EB" }}>
          {content}
        </div>

        {/* Neon Highlighter Strip */}
        {highlightText && (
          <div
            style={{
              marginTop: 18,
              padding: "10px 16px",
              borderRadius: 10,
              fontSize: 18,
              fontWeight: 600,
              color: "#F9FAFB",
              position: "relative",
              overflow: "hidden",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: `${neonProgress}%`,
                background: "linear-gradient(90deg, rgba(234, 179, 8, 0.35), rgba(245, 158, 11, 0.45))",
                boxShadow: "0 0 25px rgba(245, 158, 11, 0.4)",
                transition: "width 0.1s linear",
              }}
            />
            <span style={{ position: "relative", zIndex: 2 }}>{highlightText}</span>
          </div>
        )}
      </div>
    </div>
  );
};
