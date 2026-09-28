import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Send, Terminal, Sparkles, AlertCircle } from "lucide-react";

export const PromptBoxDeathHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animations
  const boxScale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 90 }
  });

  // Glitch shatter triggers at frame 60
  const shatterProgress = interpolate(frame, [50, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  const glitchX = frame > 45 && frame < 85 && frame % 4 < 2 ? (Math.random() - 0.5) * 20 : 0;
  const redFlash = interpolate(frame, [55, 65, 80], [0, 0.8, 0.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      {/* Red Shatter Ambient Glow */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(239, 68, 68, ${redFlash}) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />

      {/* Kinetic Headline */}
      <div
        style={{
          fontSize: 68,
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: frame > 60 ? "#ef4444" : "#ffffff",
          textAlign: "center",
          marginBottom: 36,
          textTransform: "uppercase",
          textShadow: frame > 60 ? "0 0 40px rgba(239, 68, 68, 0.8)" : "0 10px 30px rgba(0,0,0,0.8)",
          transform: `scale(${boxScale}) translateX(${glitchX}px)`
        }}
      >
        {frame > 65 ? "Prompt Box Is Dead" : "The 4-Year Old Paradigm"}
      </div>

      {/* The Classic Chat Input Box */}
      <div
        style={{
          width: 820,
          background: "rgba(30, 41, 59, 0.8)",
          border: `2px solid ${frame > 60 ? "rgba(239, 68, 68, 0.8)" : "rgba(255, 255, 255, 0.15)"}`,
          borderRadius: 24,
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: frame > 60 ? "0 0 50px rgba(239, 68, 68, 0.4)" : "0 20px 50px rgba(0,0,0,0.7)",
          backdropFilter: "blur(16px)",
          position: "relative",
          transform: `scale(${boxScale}) translateX(${glitchX}px)`
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Terminal size={24} color={frame > 60 ? "#f87171" : "#94a3b8"} />
          <span
            style={{
              fontSize: 20,
              color: frame > 60 ? "#fca5a5" : "#64748b",
              fontWeight: 500,
              textDecoration: frame > 65 ? "line-through" : "none"
            }}
          >
            {frame > 65 ? "EXECUTION_TERMINATED: STATIC CHAT OVER" : "Message ChatGPT..."}
          </span>
        </div>

        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: frame > 60 ? "#ef4444" : "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Send size={20} color={frame > 60 ? "#ffffff" : "#000000"} />
        </div>

        {/* Shatter Crack Overlay */}
        {frame > 55 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              border: "2px dashed #ef4444",
              opacity: shatterProgress,
              pointerEvents: "none"
            }}
          />
        )}
      </div>

      {/* Subtitle Punch */}
      <div
        style={{
          marginTop: 36,
          fontSize: 22,
          fontWeight: 700,
          color: frame > 65 ? "#fca5a5" : "#94a3b8",
          letterSpacing: "0.05em",
          textTransform: "uppercase"
        }}
      >
        {frame > 65 ? "AUTONOMOUS AGENTS TAKE OVER TOMORROW" : "REQUEST • RESPONSE • TERMINATE"}
      </div>
    </AbsoluteFill>
  );
};
