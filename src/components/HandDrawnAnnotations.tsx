import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface HandDrawnCircleProps {
  color?: string; // e.g. '#ef4444'
  width?: number;
  height?: number;
  strokeWidth?: number;
  delay?: number;
}

export const HandDrawnCircle: React.FC<HandDrawnCircleProps> = ({
  color = "#ef4444",
  width = 90,
  height = 55,
  strokeWidth = 4,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const perimeter = 300;
  const strokeDashoffset = perimeter * (1 - progress);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 60"
      style={{ overflow: "visible" }}
    >
      <path
        d="M 15 30 C 12 12, 45 6, 80 12 C 95 18, 98 42, 80 50 C 50 58, 15 52, 10 32 C 8 20, 25 10, 45 8"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={perimeter}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

export interface HandDrawnUnderlineProps {
  color?: string; // e.g. '#ef4444'
  width?: number;
  strokeWidth?: number;
  delay?: number;
}

export const HandDrawnUnderline: React.FC<HandDrawnUnderlineProps> = ({
  color = "#ef4444",
  width = 280,
  strokeWidth = 5,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const pathLength = 300;
  const strokeDashoffset = pathLength * (1 - progress);

  return (
    <svg
      width={width}
      height={24}
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
    >
      <path
        d="M 5 12 Q 75 18, 150 10 T 295 14"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={pathLength}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

export interface HandDrawnCrossProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  delay?: number;
}

export const HandDrawnCross: React.FC<HandDrawnCrossProps> = ({
  color = "#ef4444",
  size = 50,
  strokeWidth = 6,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const prog1 = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const prog2 = spring({
    frame: Math.max(0, frame - delay - 6),
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  const l1 = 80;
  const l2 = 80;

  return (
    <svg width={size} height={size} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
      {/* Stroke 1: Top-Left to Bottom-Right */}
      <line
        x1="10"
        y1="10"
        x2="50"
        y2="50"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={l1}
        strokeDashoffset={l1 * (1 - prog1)}
      />
      {/* Stroke 2: Bottom-Left to Top-Right */}
      <line
        x1="10"
        y1="50"
        x2="50"
        y2="10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={l2}
        strokeDashoffset={l2 * (1 - prog2)}
      />
    </svg>
  );
};

export interface HandDrawnArrowProps {
  color?: string;
  width?: number;
  height?: number;
  delay?: number;
}

export const HandDrawnArrow: React.FC<HandDrawnArrowProps> = ({
  color = "#ef4444",
  width = 160,
  height = 60,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const length = 200;
  return (
    <svg width={width} height={height} viewBox="0 0 200 60" style={{ overflow: "visible" }}>
      <path
        d="M 10 40 Q 100 10, 185 35"
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="4 6"
        strokeDashoffset={length * (1 - progress)}
      />
      <path
        d="M 170 25 L 188 36 L 175 48"
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={progress > 0.8 ? (progress - 0.8) * 5 : 0}
      />
    </svg>
  );
};
