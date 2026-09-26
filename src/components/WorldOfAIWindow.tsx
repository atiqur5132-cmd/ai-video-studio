import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

interface WorldOfAIWindowProps {
  sourceUrl: string;
  sourceDomain?: string;
  scrollY?: number;
  zoomScale?: number;
  zoomOrigin?: string;
  children: React.ReactNode;
  maxHeight?: number;
}

export const WorldOfAIWindow: React.FC<WorldOfAIWindowProps> = ({
  sourceUrl,
  sourceDomain = "x.com",
  scrollY = 0,
  zoomScale = 1.0,
  zoomOrigin = "center center",
  children,
  maxHeight = 960,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy spring entrance
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });
  const opacity = interpolate(frame, [0, 8], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* The 2D Elevated Modern Window Frame (World of AI standard: 92% screen canvas, ZERO 3D tilt) */}
      <div
        style={{
          width: 1760,
          height: maxHeight,
          opacity,
          transform: `scale(${interpolate(entrance, [0, 1], [0.97, 1])})`,
          backgroundColor: "#000000",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 20,
          boxShadow: "0 35px 90px rgba(0, 0, 0, 0.9), 0 0 1px rgba(255, 255, 255, 0.2)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* macOS Desktop Chrome Bar */}
        <div
          style={{
            height: 52,
            backgroundColor: "#11141A",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            flexShrink: 0,
          }}
        >
          {/* Traffic Light Window Dots */}
          <div style={{ display: "flex", alignItems: "center", gap: 9, width: 80 }}>
            <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
            <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
            <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#27C93F" }} />
          </div>

          {/* Secure URL Address Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 20,
              padding: "6px 26px",
              fontSize: 14,
              color: "#8B949E",
              maxWidth: 800,
            }}
          >
            <span style={{ fontSize: 13, color: "#3FB950" }}>🔒</span>
            <span style={{ color: "#58A6FF", fontWeight: 700 }}>{sourceDomain}</span>
            <span style={{ color: "#6E7681" }}>/</span>
            <span style={{ color: "#E6EDF3", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {sourceUrl}
            </span>
          </div>

          {/* Subtle Live Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, width: 80, justifyContent: "flex-end" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#3FB950" }} />
            <span style={{ fontSize: 12, fontWeight: 800, color: "#8B949E", letterSpacing: "0.08em" }}>LIVE</span>
          </div>
        </div>

        {/* In-Window Content Area with Smooth Dynamic Scroll & Targeted Punch Zoom */}
        <div
          style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#05070A",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transform: `translateY(-${scrollY}px) scale(${zoomScale})`,
              transformOrigin: zoomOrigin,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
