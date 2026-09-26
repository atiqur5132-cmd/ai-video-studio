import React from "react";
import { AbsoluteFill, Video, staticFile, useCurrentFrame, interpolate } from "remotion";
import { AnthropicLogo, OpenAILogo } from "./RealLogos";
import { BongoCatMascot } from "./BongoCatMascot";

interface SplitScreenDossierProps {
  leftVideo: string;
  rightVideo: string;
  leftTitle: string;
  rightTitle: string;
  leftBrand?: string;
  rightBrand?: string;
}

export const SplitScreenDossier: React.FC<SplitScreenDossierProps> = ({
  leftVideo,
  rightVideo,
  leftTitle,
  rightTitle,
  leftBrand = "ANTHROPIC",
  rightBrand = "OPENAI",
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#02040A", display: "flex", flexDirection: "row", overflow: "hidden" }}>
      {/* LEFT STREAM */}
      <div style={{ flex: 1, position: "relative", borderRight: "2px solid rgba(56, 189, 248, 0.3)", overflow: "hidden" }}>
        <Video
          src={staticFile(leftVideo)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          muted
          volume={0}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,6,23,0.85) 0%, transparent 40%, rgba(2,6,23,0.6) 100%)" }} />

        {/* Top Brand Tag */}
        <div style={{ position: "absolute", top: 30, left: 30, display: "flex", alignItems: "center", gap: 12, backgroundColor: "rgba(15, 23, 42, 0.85)", padding: "8px 18px", borderRadius: 30, border: "1px solid rgba(217, 119, 6, 0.4)" }}>
          <AnthropicLogo size={20} />
          <span style={{ color: "#FBBF24", fontSize: 13, fontWeight: 800, letterSpacing: "0.06em" }}>{leftBrand}</span>
        </div>

        {/* Bottom Headline Badge */}
        <div style={{ position: "absolute", bottom: 40, left: 40, right: 140 }}>
          <div style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", textShadow: "0 4px 12px rgba(0,0,0,0.9)" }}>
            {leftTitle}
          </div>
        </div>

        {/* Bongo Cat Mascot */}
        <div style={{ position: "absolute", bottom: 20, right: 20 }}>
          <BongoCatMascot size={110} />
        </div>
      </div>

      {/* RIGHT STREAM */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <Video
          src={staticFile(rightVideo)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          muted
          volume={0}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,6,23,0.85) 0%, transparent 40%, rgba(2,6,23,0.6) 100%)" }} />

        {/* Top Brand Tag */}
        <div style={{ position: "absolute", top: 30, left: 30, display: "flex", alignItems: "center", gap: 12, backgroundColor: "rgba(15, 23, 42, 0.85)", padding: "8px 18px", borderRadius: 30, border: "1px solid rgba(16, 185, 129, 0.4)" }}>
          <OpenAILogo size={20} />
          <span style={{ color: "#10B981", fontSize: 13, fontWeight: 800, letterSpacing: "0.06em" }}>{rightBrand}</span>
        </div>

        {/* Bottom Headline Badge */}
        <div style={{ position: "absolute", bottom: 40, left: 40, right: 140 }}>
          <div style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.04em", textShadow: "0 4px 12px rgba(0,0,0,0.9)" }}>
            {rightTitle}
          </div>
        </div>

        {/* Bongo Cat Mascot */}
        <div style={{ position: "absolute", bottom: 20, right: 20 }}>
          <BongoCatMascot size={110} />
        </div>
      </div>

      {/* CENTER MEDALLION "VS" */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 68,
          height: 68,
          borderRadius: "50%",
          backgroundColor: "#0F172A",
          border: "3px solid #38BDF8",
          boxShadow: "0 0 25px rgba(56, 189, 248, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: 20, letterSpacing: "0.05em" }}>VS</span>
      </div>
    </AbsoluteFill>
  );
};
