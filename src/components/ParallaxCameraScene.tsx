import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const ParallaxCameraScene: React.FC<{
  children: React.ReactNode;
  sceneDurationInFrames?: number;
  zoomIntensity?: number;
  enableSway?: boolean;
}> = ({
  children,
  sceneDurationInFrames = 300,
  zoomIntensity = 0.08, // 1.0 -> 1.08
  enableSway = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Snappy scene entrance scale
  const enterProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120, mass: 0.8 },
  });

  // Continuous subtle cinematic dolly zoom
  const dollyZoom = interpolate(
    frame,
    [0, sceneDurationInFrames],
    [1.0, 1.0 + zoomIntensity],
    { extrapolateRight: "clamp" }
  );

  // Organic micro-drift sway
  const swayX = enableSway ? Math.sin(frame / 35) * 6 : 0;
  const swayY = enableSway ? Math.cos(frame / 45) * 4 : 0;
  const subtleTilt = enableSway ? Math.sin(frame / 50) * 0.4 : 0;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        transform: `scale(${enterProgress * dollyZoom}) translate3d(${swayX}px, ${swayY}px, 0px) rotate(${subtleTilt}deg)`,
        transformOrigin: "center center",
      }}
    >
      {children}
    </div>
  );
};
