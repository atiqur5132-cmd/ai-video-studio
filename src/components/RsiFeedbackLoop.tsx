import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const RsiFeedbackLoop: React.FC<{
  title?: string;
  cycleMultiplier?: string;
}> = ({
  title = "RECURSIVE SELF-IMPROVEMENT",
  cycleMultiplier = "4.8x",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });
  const rotation = (frame * 1.2) % 360;
  const pulse = interpolate(Math.sin(frame / 15), [-1, 1], [0.92, 1.08]);

  const nodes = [
    { label: "MODEL N", color: "#38BDF8", sub: "BASELINE CORE" },
    { label: "SYNTHETIC DATA", color: "#818CF8", sub: "REASONING ENGINE" },
    { label: "FORMAL LOGIC", color: "#34D399", sub: "LEAN VERIFIER" },
    { label: "MODEL N+1", color: "#F472B6", sub: "FRONTIER WEIGHTS" },
  ];

  const radius = 230;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        perspective: 1000,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          transform: `scale(${entrance}) translateY(-25px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Kinetic Header */}
        <div
          style={{
            marginBottom: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              padding: "6px 22px",
              borderRadius: 999,
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              color: "#38BDF8",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            ● AUTONOMOUS SINGULARITY LOOP
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 46,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              background: "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Orbit Ring Canvas */}
        <div
          style={{
            width: radius * 2 + 180,
            height: radius * 2 + 180,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Outer Rotating Track */}
          <div
            style={{
              position: "absolute",
              width: radius * 2,
              height: radius * 2,
              borderRadius: "50%",
              border: "2px dashed rgba(56, 189, 248, 0.35)",
              boxShadow: "0 0 60px rgba(56, 189, 248, 0.15)",
              transform: `rotate(${rotation}deg)`,
            }}
          />

          {/* Central Singularity Core */}
          <div
            style={{
              width: 210,
              height: 210,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(8, 14, 26, 0.95) 75%)",
              border: "2px solid rgba(56, 189, 248, 0.7)",
              boxShadow: `0 0 60px rgba(56, 189, 248, ${0.45 * pulse}), inset 0 0 30px rgba(56, 189, 248, 0.25)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transform: `scale(${pulse})`,
              zIndex: 10,
              padding: "14px 18px",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "#94A3B8",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              ACCELERATION
            </span>

            <div
              style={{
                fontSize: 42,
                fontWeight: 900,
                color: "#00F0FF",
                lineHeight: 1.1,
                margin: "4px 0",
                textShadow: "0 0 25px rgba(0, 240, 255, 0.7)",
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              26.0x
            </div>

            <span
              style={{
                fontSize: 12,
                fontWeight: 900,
                color: "#38BDF8",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              VELOCITY
            </span>

            <div
              style={{
                marginTop: 6,
                display: "flex",
                alignItems: "center",
                gap: 5,
                background: "rgba(52, 211, 153, 0.12)",
                padding: "3px 8px",
                borderRadius: 6,
                border: "1px solid rgba(52, 211, 153, 0.3)",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#34D399",
                  boxShadow: "0 0 6px #34D399",
                }}
              />
              <span
                style={{
                  fontSize: 9,
                  color: "#34D399",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  fontFamily: "monospace",
                }}
              >
                SINGULARITY
              </span>
            </div>
          </div>

          {/* Orbiting 4 Nodes */}
          {nodes.map((node, i) => {
            const angle = (i * 90 + rotation) * (Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={node.label}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  width: 150,
                  height: 90,
                  borderRadius: 16,
                  background: "rgba(15, 23, 42, 0.95)",
                  border: `1.5px solid ${node.color}`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.8), 0 0 25px ${node.color}44`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "8px 12px",
                  zIndex: 20,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 800, color: node.color, letterSpacing: "0.05em" }}>
                  {node.label}
                </span>
                <span style={{ fontSize: 9, color: "#94A3B8", marginTop: 4, letterSpacing: "0.08em" }}>
                  {node.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
