import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ParetoFrontierChart: React.FC<{
  title?: string;
}> = ({ title = "CODE ARENA: PARETO DISRUPTION" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.8 } });
  const pulse = interpolate(Math.sin(frame / 12), [-1, 1], [0.9, 1.1]);

  const models = [
    { name: "DeepSeek-V4.1-Flash", cost: 0.30, score: 1620, rank: "#14", isHero: true, color: "#38BDF8" },
    { name: "Hy4 Preview", cost: 0.83, score: 1623, rank: "#13", isHero: false, color: "#94A3B8" },
    { name: "Muse Spark 1.3", cost: 1.25, score: 1628, rank: "#11", isHero: false, color: "#94A3B8" },
    { name: "Grok-4.6 High", cost: 2.00, score: 1625, rank: "#12", isHero: false, color: "#F87171" },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        perspective: 1100,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          width: 1140,
          background: "rgba(15, 23, 42, 0.95)",
          border: "1.5px solid rgba(56, 189, 248, 0.4)",
          borderRadius: 24,
          padding: "36px 44px",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9), 0 0 50px rgba(56, 189, 248, 0.15)",
          transform: `scale(${entrance}) rotateX(6deg)`,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#38BDF8",
                textTransform: "uppercase",
              }}
            >
              LMSYS CODE ARENA • WEBDEV INDEX
            </div>
            <h1 style={{ margin: "4px 0 0 0", fontSize: 38, fontWeight: 900, color: "#F8FAFC" }}>
              {title}
            </h1>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: 14,
              background: "rgba(56, 189, 248, 0.15)",
              border: "1px solid rgba(56, 189, 248, 0.5)",
              color: "#38BDF8",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.08em",
            }}
          >
            10x PRICE ADVANTAGE
          </div>
        </div>

        {/* Model Cards Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 16 }}>
          {models.map((m) => (
            <div
              key={m.name}
              style={{
                background: m.isHero ? "rgba(56, 189, 248, 0.12)" : "rgba(30, 41, 59, 0.5)",
                border: `1.5px solid ${m.isHero ? "#38BDF8" : "rgba(51, 65, 85, 0.6)"}`,
                borderRadius: 18,
                padding: "20px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                boxShadow: m.isHero ? `0 10px 30px rgba(56, 189, 248, 0.25)` : "none",
                transform: m.isHero ? `scale(${pulse})` : "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: m.color }}>{m.rank} OVERALL</span>
                {m.isHero && (
                  <span style={{ fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 6, background: "#38BDF8", color: "#0F172A" }}>
                    BEST VALUE
                  </span>
                )}
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: m.isHero ? "#FFFFFF" : "#E2E8F0" }}>
                {m.name}
              </div>
              <div style={{ height: 1, background: "rgba(255, 255, 255, 0.1)" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 10, color: "#94A3B8" }}>SCORE</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: m.isHero ? "#38BDF8" : "#F8FAFC" }}>
                    {m.score}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "#94A3B8" }}>INPUT COST</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: m.isHero ? "#10B981" : "#F87171" }}>
                    ${m.cost.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Telemetry Footer Callout */}
        <div
          style={{
            background: "rgba(2, 6, 23, 0.8)",
            borderRadius: 16,
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid rgba(51, 65, 85, 0.5)",
          }}
        >
          <span style={{ fontSize: 13, color: "#94A3B8", fontWeight: 600 }}>
            TOKEN EFFICIENCY RATIO:
          </span>
          <span style={{ fontSize: 13, color: "#38BDF8", fontWeight: 700 }}>
            DeepSeek delivers 99.5% of Grok-4.6 performance at 15% of the API cost.
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
