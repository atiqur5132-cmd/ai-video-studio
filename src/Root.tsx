import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";

export const Root: React.FC = () => {
  return (
    <>
      {/* Canonical 16:9 4K-Grade Tech Documentary (1920x1080 @ 30fps | 446.32s = 7m 26s) */}
      <Composition
        id="MainVideo"
        component={MainVideo}
        durationInFrames={13390}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
