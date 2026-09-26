import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";

export const KineticHeadline: React.FC<{
  title: string;
  subtitle?: string;
  category?: string;
  align?: "left" | "center" | "right";
  color?: string;
}> = ({
  title,
  subtitle,
  category,
  align = "center",
  color = "#FFFFFF",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = title.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : align === "left" ? "flex-start" : "flex-end",
        textAlign: align,
        zIndex: 10,
      }}
    >
      {category && (
        <div
          style={{
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#10B981",
            marginBottom: 10,
            opacity: spring({ frame, fps, config: { damping: 14, stiffness: 120 } }),
          }}
        >
          {category}
        </div>
      )}

      {/* Kinetic Staggered Words */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: 12,
        }}
      >
        {words.map((w, i) => {
          const wordSpring = spring({
            frame: frame - i * 3,
            fps,
            config: { damping: 14, stiffness: 120, mass: 0.8 },
          });

          return (
            <span
              key={i}
              style={{
                fontSize: 54,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color,
                opacity: wordSpring,
                transform: `translateY(${(1 - wordSpring) * 24}px)`,
                display: "inline-block",
                textShadow: "0 10px 30px rgba(0,0,0,0.8)",
              }}
            >
              {w}
            </span>
          );
        })}
      </div>

      {subtitle && (
        <div
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: "#9CA3AF",
            marginTop: 12,
            opacity: spring({
              frame: frame - 15,
              fps,
              config: { damping: 14, stiffness: 120 },
            }),
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};
