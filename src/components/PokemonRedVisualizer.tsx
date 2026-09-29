import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const PokemonRedVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const pulse = interpolate(Math.sin(frame / 6), [-1, 1], [0.85, 1.0]);

  // Scanline sweep across the visual matrix
  const scanY = (frame * 5) % 460;

  // Active neural perception tokens
  const tokens = [
    { label: "PIXEL_MATRIX", status: "160x144 RGBA", active: true },
    { label: "SPATIAL_MEMORY", status: "VIRIDIAN_CITY", active: true },
    { label: "HP_GAUGE_OCR", status: "CHARMANDER (22/22)", active: true },
    { label: "MAP_TOPOLOGY", status: "ROUTE_1 -> GYM_1", active: true },
    { label: "ACTION_BUFFER", status: "PRESS [A] -> TALK", active: true },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          width: 1760,
          height: 890,
          transform: `scale(${entrance}) translateY(-10px)`,
          borderRadius: 24,
          border: "1.5px solid rgba(16, 185, 129, 0.4)",
          backgroundColor: "#090d16",
          boxShadow: "0 35px 120px rgba(0,0,0,0.98), 0 0 60px rgba(16, 185, 129, 0.25)",
          display: "flex",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Left Side: Neural Game Boy Visual Frame */}
        <div
          style={{
            flex: 1.2,
            borderRight: "1px solid rgba(255, 255, 255, 0.08)",
            padding: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            background: "linear-gradient(135deg, rgba(6, 15, 18, 0.9) 0%, rgba(9, 13, 22, 0.95) 100%)",
          }}
        >
          {/* Game Boy Viewport Container */}
          <div
            style={{
              width: 520,
              height: 460,
              borderRadius: 16,
              border: "2px solid #10b981",
              backgroundColor: "#8bac0f",
              position: "relative",
              boxShadow: "0 0 40px rgba(16, 185, 129, 0.35), inset 0 0 30px rgba(15, 56, 15, 0.6)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            {/* Moving Laser Scanline */}
            <div
              style={{
                position: "absolute",
                top: scanY,
                left: 0,
                right: 0,
                height: 3,
                backgroundColor: "#0f380f",
                boxShadow: "0 0 10px #0f380f",
                opacity: 0.7,
                zIndex: 10,
              }}
            />

            {/* Neural Bounding Boxes overlaying the game scene */}
            <div
              style={{
                position: "absolute",
                top: 80,
                left: 60,
                width: 140,
                height: 120,
                border: "2px dashed #0f380f",
                borderRadius: 8,
                display: "flex",
                alignItems: "flex-start",
                padding: 4,
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 900, color: "#0f380f", fontFamily: "monospace" }}>
                [ENEMY: PIDGEY]
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 90,
                right: 60,
                width: 160,
                height: 130,
                border: "2px solid #0f380f",
                borderRadius: 8,
                display: "flex",
                alignItems: "flex-end",
                padding: 4,
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 900, color: "#0f380f", fontFamily: "monospace" }}>
                [PLAYER: CHARMANDER]
              </span>
            </div>

            {/* Retro Pixel Battle Text */}
            <div
              style={{
                width: "100%",
                height: 80,
                backgroundColor: "#9bbc0f",
                border: "2px solid #0f380f",
                borderRadius: 6,
                padding: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: "monospace",
                color: "#0f380f",
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: "0.05em",
                lineHeight: 1.4,
              }}
            >
              <div>SONNET 5.5 COMMAND:</div>
              <div style={{ color: "#306230" }}>&gt; EMBER (EFFECTIVE)</div>
            </div>

            {/* Watermark Tag */}
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 16,
                backgroundColor: "rgba(15, 56, 15, 0.85)",
                color: "#9bbc0f",
                fontSize: 10,
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: 4,
                fontFamily: "monospace",
              }}
            >
              RAW SCREENSHOTS ONLY • NO MEMORY HACKS
            </div>
          </div>

          {/* Subtitle pill */}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              gap: 16,
            }}
          >
            <span
              style={{
                color: "#10b981",
                fontSize: 13,
                fontWeight: 800,
                fontFamily: "monospace",
                letterSpacing: "0.1em",
              }}
            >
              ● 100% AUTONOMOUS PLAYTHROUGH
            </span>
          </div>
        </div>

        {/* Right Side: Neural Perception Telemetry */}
        <div
          style={{
            flex: 1,
            padding: "40px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#060913",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 12px #10b981",
                }}
              />
              <span
                style={{
                  color: "#10b981",
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  fontFamily: "monospace",
                }}
              >
                VISION-ONLY REASONING MATRIX
              </span>
            </div>

            <h3
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: "#FFFFFF",
                margin: "0 0 12px 0",
                letterSpacing: "-0.02em",
              }}
            >
              POKÉMON RED BEATEN
            </h3>
            <p style={{ fontSize: 16, color: "#94a3b8", margin: 0, lineHeight: 1.5 }}>
              Zero symbolic memory or text state injection. Sonnet 5.5 navigates the entire game via raw visual frames, spatial mapping, and long-horizon planning.
            </p>
          </div>

          {/* Telemetry rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {tokens.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 20px",
                  borderRadius: 12,
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span
                  style={{
                    color: "#94a3b8",
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    color: "#10b981",
                    fontSize: 14,
                    fontWeight: 900,
                    fontFamily: "monospace",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div
            style={{
              padding: "12px 18px",
              borderRadius: 10,
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 800, color: "#10b981", letterSpacing: "0.08em" }}>
              FIRST MODEL IN SONNET FAMILY TO CLEAR POKÉMON RED
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
