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
  category = "OFFICIAL REPORT",
  docTitle = "Anthropic R&D Automation Index",
  sourceUrl = "anthropic.com/research/automation-index",
  dateBadge = "SEPTEMBER 17, 2026",
  preText = "As of August 2026, internal measurements indicate that Claude models now",
  highlightText = "lead 26% of Anthropic's internal AI research and development",
  postText = "representing a twenty-six-fold increase from less than 1% recorded in February 2026.",
  statBadge = { label: "AI-LED WORKLOAD", value: "26% EXPLOSION" },
  highlightColor = "#00F0FF",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cinematic 3D camera push-in
  const cameraZoom = interpolate(frame, [0, 120], [1.0, 1.08], {
    extrapolateRight: "clamp",
  });
  const cameraPanY = interpolate(frame, [0, 120], [0, -15], {
    extrapolateRight: "clamp",
  });

  // Highlighter sweep progress
  const highlightProgress = interpolate(frame, [25, 65], [0, 100], {
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
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          width: 1400,
          transform: `scale(${cardEntrance * cameraZoom}) translateY(${cameraPanY}px) rotateY(-4deg) rotateX(2deg)`,
          transformOrigin: "center center",
          background: "#080E1A",
          border: "1px solid rgba(56, 189, 248, 0.25)",
          borderRadius: 24,
          padding: "44px 56px",
          boxShadow: "0 35px 80px rgba(0, 0, 0, 0.85), 0 0 50px rgba(14, 165, 233, 0.12)",
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
            paddingBottom: 22,
            marginBottom: 32,
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
                fontSize: 13,
                fontFamily: "monospace",
                color: "#94A3B8",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: "#38BDF8" }}>🔒</span> https://{sourceUrl}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.1em",
                color: "#38BDF8",
                background: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                padding: "4px 12px",
                borderRadius: 999,
              }}
            >
              {category}
            </span>
            <span style={{ fontSize: 12, color: "#64748B", fontFamily: "monospace" }}>
              {dateBadge}
            </span>
          </div>
        </div>

        {/* Document Headline */}
        <h2
          style={{
            fontSize: 34,
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: "-0.02em",
            marginBottom: 28,
            lineHeight: 1.25,
          }}
        >
          {docTitle}
        </h2>

        {/* Body Text with Neon Laser Highlighter Sweep */}
        <div
          style={{
            fontSize: 26,
            lineHeight: 1.7,
            color: "#94A3B8",
            fontWeight: 450,
          }}
        >
          <span>{preText} </span>
          <span
            style={{
              position: "relative",
              display: "inline",
              color: "#FFFFFF",
              fontWeight: 800,
              padding: "2px 6px",
              margin: "0 2px",
            }}
          >
            {/* The Highlighter Layer */}
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: `${highlightProgress}%`,
                background: `linear-gradient(90deg, rgba(0, 240, 255, 0.28) 0%, rgba(56, 189, 248, 0.35) 100%)`,
                borderBottom: `3px solid ${highlightColor}`,
                boxShadow: `0 0 20px ${highlightColor}66`,
                borderRadius: 4,
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
            {highlightText}
          </span>
          <span> {postText}</span>
        </div>

        {/* High-Impact Stat Pill Bottom */}
        {statBadge && (
          <div
            style={{
              marginTop: 36,
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              borderRadius: 14,
              padding: "10px 22px",
            }}
          >
            <span style={{ fontSize: 13, color: "#94A3B8", fontWeight: 600, letterSpacing: "0.05em" }}>
              {statBadge.label}:
            </span>
            <span style={{ fontSize: 18, color: "#38BDF8", fontWeight: 900, fontFamily: "monospace" }}>
              {statBadge.value}
            </span>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
