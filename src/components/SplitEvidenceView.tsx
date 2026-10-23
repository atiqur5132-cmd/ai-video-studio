import React from "react";
import {
  AbsoluteFill,
  Img,
  Video,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const safeStatic = (path?: string) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/static") || path.startsWith("data:")) {
    return path;
  }
  return staticFile(path);
};

interface SplitEvidenceViewProps {
  screenshotSrc: string;
  videoSrc: string;
  screenshotScrollY?: [number, number];
  videoAspectRatio?: "16:9" | "9:16" | "auto";
  badgeText?: string;
  badgeColor?: string;
}

export const SplitEvidenceView: React.FC<SplitEvidenceViewProps> = ({
  screenshotSrc,
  videoSrc,
  screenshotScrollY = [0, 0],
  videoAspectRatio = "16:9",
  badgeText,
  badgeColor = "#38BDF8",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.8 },
  });

  const pushIn = interpolate(frame, [0, durationInFrames], [0.98, 1.03], {
    extrapolateRight: "clamp",
  });

  const scrollY = interpolate(frame, [0, durationInFrames], [screenshotScrollY[0], screenshotScrollY[1]], {
    extrapolateRight: "clamp",
  });

  const scale = entrance * pushIn;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020408",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Radial Atmosphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.9) 0%, #000000 85%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main Split Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 1780,
          height: 940,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {/* Left: Real Desktop Tweet Screenshot Window */}
        <div
          style={{
            flex: 1,
            height: "100%",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            backgroundColor: "#000000",
            boxShadow: "0 35px 100px rgba(0, 0, 0, 0.95)",
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              transform: `translate3d(0, ${scrollY}px, 0)`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Img
              src={safeStatic(screenshotSrc)}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Right: Real Evidence Video Window */}
        <div
          style={{
            flex: 1.15,
            height: "100%",
            borderRadius: 20,
            overflow: "hidden",
            border: `1px solid ${badgeColor}40`,
            backgroundColor: "#000000",
            boxShadow: `0 35px 100px rgba(0, 0, 0, 0.95), 0 0 35px ${badgeColor}15`,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Video
            src={safeStatic(videoSrc)}
            loop
            muted
            volume={0}
            style={{
              width: "100%",
              height: "100%",
              objectFit: videoAspectRatio === "9:16" ? "cover" : "contain",
              backgroundColor: "#000000",
              display: "block",
            }}
          />

          {badgeText && (
            <div
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                backgroundColor: "rgba(3, 7, 18, 0.85)",
                border: `1px solid ${badgeColor}80`,
                borderRadius: 8,
                padding: "6px 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                backdropFilter: "blur(8px)",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: badgeColor,
                  boxShadow: `0 0 8px ${badgeColor}`,
                }}
              />
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                {badgeText}
              </span>
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
