import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface HatchedProgressBarProps {
  fillPercent?: number; // 0 to 100
  color?: string; // e.g. '#22c55e', '#f97316', '#ef4444', '#38bdf8'
  width?: number; // e.g. 400
  height?: number; // e.g. 36
  labelTop?: string;
  labelBottom?: string;
  delay?: number;
}

export const HatchedProgressBar: React.FC<HatchedProgressBarProps> = ({
  fillPercent = 100,
  color = "#22c55e",
  width = 380,
  height = 36,
  labelTop,
  labelBottom,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 16, stiffness: 80 },
  });

  const animatedPercent = Math.min(fillPercent, progress * fillPercent);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width,
        fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
      }}
    >
      {/* Top Label */}
      {labelTop && (
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          {labelTop}
        </div>
      )}

      {/* Progress Container */}
      <div
        style={{
          width: "100%",
          height,
          border: `2px solid ${color}`,
          borderRadius: 8,
          backgroundColor: "#000000",
          overflow: "hidden",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Hatched Fill */}
        <div
          style={{
            width: `${animatedPercent}%`,
            height: "100%",
            background: `repeating-linear-gradient(45deg, ${color}, ${color} 8px, transparent 8px, transparent 16px)`,
            transition: "width 0.2s ease-out",
          }}
        />
      </div>

      {/* Bottom Label */}
      {labelBottom && (
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: color,
            marginTop: 8,
            textAlign: "center",
          }}
        >
          {labelBottom}
        </div>
      )}
    </div>
  );
};
