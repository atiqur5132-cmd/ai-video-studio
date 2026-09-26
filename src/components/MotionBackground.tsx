import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

interface MotionBackgroundProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export const MotionBackground: React.FC<MotionBackgroundProps> = ({
  primaryColor = "rgba(30, 41, 59, 0.4)",
  secondaryColor = "rgba(15, 23, 42, 0.5)",
}) => {
  const frame = useCurrentFrame();

  const driftX1 = Math.sin(frame / 65) * 90;
  const driftY1 = Math.cos(frame / 80) * 60;
  const driftX2 = Math.cos(frame / 55) * 80;
  const driftY2 = Math.sin(frame / 70) * 70;

  const pulse = interpolate(Math.sin(frame / 45), [-1, 1], [0.9, 1.1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07090E",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Primary Drifting Light Orb */}
      <div
        style={{
          position: "absolute",
          top: `calc(25% + ${driftY1}px)`,
          left: `calc(28% + ${driftX1}px)`,
          width: 850 * pulse,
          height: 850 * pulse,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryColor} 0%, rgba(7, 9, 14, 0) 70%)`,
          filter: "blur(100px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Secondary Counter-drift Orb */}
      <div
        style={{
          position: "absolute",
          bottom: `calc(20% - ${driftY2}px)`,
          right: `calc(25% - ${driftX2}px)`,
          width: 750 * pulse,
          height: 750 * pulse,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryColor} 0%, rgba(7, 9, 14, 0) 70%)`,
          filter: "blur(110px)",
          transform: "translate(50%, 50%)",
        }}
      />

      {/* Micro-dot Matrix Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          opacity: 0.8,
        }}
      />

      {/* Dark Vignette Frame */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 60%, rgba(3, 4, 7, 0.9) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
