import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export interface BrandSquircleCardProps {
  logoSrc: string;
  brandName: string;
  subText?: string;
  borderColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
  delay?: number;
  strikethrough?: boolean;
}

export const BrandSquircleCard: React.FC<BrandSquircleCardProps> = ({
  logoSrc,
  brandName,
  subText,
  borderColor = "#22c55e",
  accentColor = "#22c55e",
  width = 380,
  height = 300,
  delay = 0,
  strikethrough = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const strikeProgress = spring({
    frame: Math.max(0, frame - delay - 20),
    fps,
    config: { damping: 18, stiffness: 100 },
  });

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 22,
        border: `2px solid ${borderColor}`,
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 28px",
        boxSizing: "border-box",
        position: "relative",
        transform: `scale(${pop})`,
        opacity: pop,
      }}
    >
      {/* Brand Squircle Icon */}
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: 24,
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 8px 24px ${borderColor}22`,
        }}
      >
        <Img
          src={staticFile(logoSrc)}
          style={{
            width: 64,
            height: 64,
            objectFit: "contain",
          }}
        />
      </div>

      {/* Brand Title */}
      <div
        style={{
          fontSize: 32,
          fontWeight: 700,
          color: accentColor,
          fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
          marginTop: 18,
          letterSpacing: "-0.5px",
          textAlign: "center",
        }}
      >
        {brandName}
      </div>

      {/* Subtitle / Metric */}
      {subText && (
        <div
          style={{
            fontSize: 38,
            fontWeight: 600,
            color: "#ffffff",
            fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
            marginTop: 8,
            textAlign: "center",
            position: "relative",
          }}
        >
          {subText}
          {strikethrough && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: -10,
                right: -10,
                height: 4,
                backgroundColor: "#ef4444",
                transform: "rotate(-4deg)",
                transformOrigin: "left center",
                width: `${strikeProgress * 110}%`,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
