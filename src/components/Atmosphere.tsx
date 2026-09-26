import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const Atmosphere: React.FC<{
  primaryGlow?: string;
  secondaryGlow?: string;
}> = ({
  primaryGlow = "rgba(16, 163, 127, 0.15)", // OpenAI Emerald
  secondaryGlow = "rgba(217, 119, 6, 0.12)", // Anthropic Amber
}) => {
  const frame = useCurrentFrame();

  const glowShiftX = Math.sin(frame / 60) * 80;
  const glowShiftY = Math.cos(frame / 75) * 50;
  const pulse = interpolate(Math.sin(frame / 45), [-1, 1], [0.85, 1.15]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#08090D",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Primary Glowing Radial Orb */}
      <div
        style={{
          position: "absolute",
          top: `calc(20% + ${glowShiftY}px)`,
          left: `calc(25% + ${glowShiftX}px)`,
          width: 850 * pulse,
          height: 850 * pulse,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryGlow} 0%, rgba(8, 9, 13, 0) 70%)`,
          filter: "blur(90px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Secondary Glowing Radial Orb */}
      <div
        style={{
          position: "absolute",
          bottom: `calc(15% - ${glowShiftY}px)`,
          right: `calc(20% - ${glowShiftX}px)`,
          width: 750 * pulse,
          height: 750 * pulse,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryGlow} 0%, rgba(8, 9, 13, 0) 70%)`,
          filter: "blur(100px)",
          transform: "translate(50%, 50%)",
        }}
      />

      {/* Tech Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%)",
        }}
      />

      {/* Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 40%, rgba(4, 5, 8, 0.85) 100%)",
        }}
      />
    </div>
  );
};
