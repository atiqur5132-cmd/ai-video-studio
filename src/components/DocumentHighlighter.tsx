import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface DocumentHighlighterProps {
  category?: string;
  docTitle?: string;
  sourceUrl?: string;
  dateBadge?: string;
  preText?: string;
  highlightText: string;
  postText?: string;
  statBadge?: { label: string; value: string };
  highlightColor?: string;
}

export const DocumentHighlighter: React.FC<DocumentHighlighterProps> = ({
  category = "OFFICIAL AUDIT",
  docTitle = "Platform Automation Report",
  sourceUrl = "techcrunch.com/2026/08/ai-video-flood",
  dateBadge = "AUGUST 2026",
  preText = "Investigation confirms that thousands of newly registered channels are",
  highlightText = "generating over 10,000 synthetic videos every single day",
  postText = "using autonomous multimodal generation pipelines without human intervention.",
  statBadge = { label: "DAILY INGESTION", value: "10K+ UPLOADS" },
  highlightColor = "#EF4444",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cinematic 3D camera push-in
  const cameraZoom = interpolate(frame, [0, 150], [1.0, 1.05], {
    extrapolateRight: "clamp",
  });

  // Highlighter sweep progress
  const highlightProgress = interpolate(frame, [15, 55], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardEntrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        perspective: 1200,
        backgroundColor: "#020408",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* Volumetric Studio Glow behind card */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 700,
          top: "15%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${highlightColor === "#EF4444" ? "rgba(239, 68, 68, 0.14)" : "rgba(56, 189, 248, 0.14)"} 0%, transparent 70%)`,
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Document Dossier */}
      <div
        style={{
          width: 1640,
          maxHeight: 640,
          transform: `scale(${cardEntrance * cameraZoom}) translateY(-55px) rotateX(2deg)`,
          transformOrigin: "center center",
          background: "#070B14",
          border: "1.5px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 24,
          padding: "40px 54px",
          boxShadow: `0 35px 90px rgba(0, 0, 0, 0.95), 0 0 50px ${highlightColor === "#EF4444" ? "rgba(239, 68, 68, 0.15)" : "rgba(56, 189, 248, 0.15)"}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top Header / URL Pill Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: 20,
            marginBottom: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 8,
                padding: "6px 16px",
                fontSize: 14,
                fontFamily: "monospace",
                color: "#94A3B8",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "#10B981" }}>🔒</span>
              https://{sourceUrl}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                background: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                padding: "5px 14px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 800,
                color: "#38BDF8",
                letterSpacing: 2,
              }}
            >
              {category}
            </span>
            <span style={{ fontSize: 13, color: "#64748B", fontWeight: 700, letterSpacing: 1 }}>
              {dateBadge}
            </span>
          </div>
        </div>

        {/* Document Headline */}
        <h2
          style={{
            fontSize: 34,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: -0.5,
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ color: highlightColor }}>■</span>
          {docTitle}
        </h2>

        {/* Highlighted Quote Body (Vox Style) */}
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.6,
            color: "#CBD5E1",
            fontWeight: 500,
            marginBottom: 28,
            letterSpacing: 0.2,
          }}
        >
          {preText}{" "}
          <span
            style={{
              position: "relative",
              display: "inline",
              color: "#FFFFFF",
              fontWeight: 800,
              padding: "4px 8px",
              borderRadius: 6,
              background: `linear-gradient(90deg, ${highlightColor === "#EF4444" ? "rgba(239, 68, 68, 0.45)" : "rgba(56, 189, 248, 0.45)"} ${highlightProgress}%, transparent ${highlightProgress}%)`,
              boxShadow: highlightProgress > 10 ? `0 0 25px ${highlightColor === "#EF4444" ? "rgba(239, 68, 68, 0.35)" : "rgba(56, 189, 248, 0.35)"}` : "none",
            }}
          >
            {highlightText}
          </span>{" "}
          {postText}
        </div>

        {/* Bottom Key Metric Stamp */}
        {statBadge && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 20px",
              borderRadius: 12,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, color: "#94A3B8", letterSpacing: 1.5 }}>
              {statBadge.label}:
            </span>
            <span style={{ fontSize: 16, fontWeight: 900, color: highlightColor, letterSpacing: 1 }}>
              {statBadge.value}
            </span>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
