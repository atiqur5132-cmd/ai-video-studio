import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { Thumbnail } from "./Thumbnail";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="MainVideo"
        component={MainVideo}
        durationInFrames={6601}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Video"
        component={MainVideo}
        durationInFrames={6601}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Thumbnail"
        component={Thumbnail}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
