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

  const radius = 260;

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
          transform: `scale(${entrance}) rotateX(12deg)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Kinetic Header */}
        <div
          style={{
            marginBottom: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              padding: "6px 20px",
              borderRadius: 999,
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              color: "#38BDF8",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            AUTONOMOUS SINGULARITY LOOP
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 48,
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
            width: 680,
            height: 680,
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
              border: "2px dashed rgba(56, 189, 248, 0.3)",
              boxShadow: "0 0 60px rgba(56, 189, 248, 0.15)",
              transform: `rotate(${rotation}deg)`,
            }}
          />

          {/* Central Singularity Core */}
          <div
            style={{
              width: 170,
              height: 170,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(15, 23, 42, 0.9) 70%)",
              border: "2px solid rgba(56, 189, 248, 0.6)",
              boxShadow: `0 0 50px rgba(56, 189, 248, ${0.4 * pulse})`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: `scale(${pulse})`,
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.1em" }}>ACCELERATION</span>
            <span style={{ fontSize: 36, fontWeight: 900, color: "#38BDF8" }}>{cycleMultiplier}</span>
            <span style={{ fontSize: 10, color: "#34D399", fontWeight: 600 }}>COMPUTE CONVERGENCE</span>
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
