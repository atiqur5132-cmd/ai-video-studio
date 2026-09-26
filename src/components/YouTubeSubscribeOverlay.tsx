import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface YouTubeSubscribeOverlayProps {
  startFrame: number;
  durationInFrames?: number;
  position?: "bottom-right" | "bottom-center" | "bottom-left";
}

export const YouTubeSubscribeOverlay: React.FC<YouTubeSubscribeOverlayProps> = ({
  startFrame,
  durationInFrames = 135, // ~4.5s @ 30fps
  position = "bottom-right",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relFrame = frame - startFrame;

  // Don't render outside the active window
  if (relFrame < 0 || relFrame > durationInFrames) {
    return null;
  }

  // Entrance spring (0 to 20 frames)
  const enterSpring = spring({
    frame: relFrame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  // Exit transition (last 18 frames)
  const exitProgress = interpolate(
    relFrame,
    [durationInFrames - 18, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const translateY = (1 - enterSpring) * 50 + exitProgress * 50;
  const opacity = Math.min(1, enterSpring) * (1 - exitProgress);

  // Like click at frame 30
  const isLiked = relFrame >= 30;
  const likeSpring = spring({
    frame: relFrame - 30,
    fps,
    config: { damping: 10, stiffness: 200 },
  });

  // Subscribe click at frame 60
  const isSubscribed = relFrame >= 60;
  const subClickScale =
    relFrame >= 60 && relFrame <= 70
      ? interpolate(relFrame, [60, 65, 70], [1, 0.88, 1])
      : 1;

  // Bell ring at frame 80
  const isBellRinging = relFrame >= 80;
  const bellRotation =
    relFrame >= 80 && relFrame <= 115
      ? Math.sin((relFrame - 80) * 0.9) * Math.exp(-(relFrame - 80) * 0.08) * 20
      : 0;

  // Virtual cursor positions (slides from outside -> like -> subscribe -> bell)
  const cursorX = interpolate(
    relFrame,
    [15, 30, 45, 60, 75, 80, 95],
    [-20, 50, 70, 160, 180, 245, 290],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const cursorY = interpolate(
    relFrame,
    [15, 30, 45, 60, 75, 80, 95],
    [50, 22, 30, 22, 30, 22, 60],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const cursorOpacity = interpolate(relFrame, [12, 22, 90, 100], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Position coordinates
  const positionStyles: React.CSSProperties = {
    position: "absolute",
    bottom: 45,
    zIndex: 9999,
    ...(position === "bottom-right" && { right: 55 }),
    ...(position === "bottom-left" && { left: 55 }),
    ...(position === "bottom-center" && {
      left: "50%",
      transform: `translateX(-50%) translateY(${translateY}px)`,
    }),
  };

  const transformStyle =
    position === "bottom-center"
      ? positionStyles.transform
      : `translateY(${translateY}px)`;

  return (
    <div
      style={{
        ...positionStyles,
        transform: transformStyle,
        opacity,
        pointerEvents: "none",
        fontFamily: "'YouTube Sans', Roboto, Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "rgba(15, 15, 18, 0.94)",
          border: "1.5px solid rgba(255, 255, 255, 0.14)",
          borderRadius: 999,
          padding: "8px 14px",
          boxShadow: "0 20px 45px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 0, 0, 0.15)",
          backdropFilter: "blur(20px)",
          position: "relative",
        }}
      >
        {/* Animated Virtual Cursor */}
        <div
          style={{
            position: "absolute",
            left: cursorX,
            top: cursorY,
            width: 20,
            height: 20,
            opacity: cursorOpacity,
            zIndex: 100,
            filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.8))",
            pointerEvents: "none",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
            <path
              d="M3 3l7 18 3-7 7-3L3 3z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Like Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            background: isLiked ? "rgba(14, 165, 233, 0.2)" : "rgba(255, 255, 255, 0.08)",
            border: isLiked ? "1px solid #38BDF8" : "1px solid rgba(255, 255, 255, 0.12)",
            padding: "8px 16px",
            borderRadius: 999,
            transform: isLiked ? `scale(${Math.min(1.08, 1 + likeSpring * 0.08)})` : "scale(1)",
            transition: "all 0.2s ease",
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={isLiked ? "#38BDF8" : "#FFFFFF"}
            style={{
              filter: isLiked ? "drop-shadow(0 0 8px #38BDF8)" : "none",
            }}
          >
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
          </svg>
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: isLiked ? "#38BDF8" : "#FFFFFF",
              letterSpacing: "0.04em",
            }}
          >
            LIKE
          </span>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 26, background: "rgba(255, 255, 255, 0.12)" }} />

        {/* Subscribe Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            background: isSubscribed ? "#272727" : "#FF0000",
            color: isSubscribed ? "#CCCCCC" : "#FFFFFF",
            padding: "8px 18px",
            borderRadius: 999,
            transform: `scale(${subClickScale})`,
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: "0.04em",
            boxShadow: isSubscribed ? "none" : "0 0 18px rgba(255, 0, 0, 0.6)",
            transition: "background 0.25s ease, color 0.25s ease",
          }}
        >
          {isSubscribed ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#34D399">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
              </svg>
              <span>SUBSCRIBED</span>
            </>
          ) : (
            <span>SUBSCRIBE</span>
          )}
        </div>

        {/* Notification Bell */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: isBellRinging ? "rgba(245, 158, 11, 0.2)" : "rgba(255, 255, 255, 0.08)",
            border: isBellRinging ? "1px solid #F59E0B" : "1px solid rgba(255, 255, 255, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `rotate(${bellRotation}deg)`,
            transition: "all 0.2s ease",
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={isBellRinging ? "#F59E0B" : "#FFFFFF"}
            style={{
              filter: isBellRinging ? "drop-shadow(0 0 10px #F59E0B)" : "none",
            }}
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
