import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface BenchmarkItem {
  name: string;
  score: string;
  numericVal: number;
  maxVal: number;
  color: string;
  badge?: string;
  detail?: string;
  isHero?: boolean;
}

interface ModernBenchmarkArenaProps {
  title?: string;
  category?: string;
  badgeStatus?: string;
  items: BenchmarkItem[];
  sourceLabel?: string;
}

export const ModernBenchmarkArena: React.FC<ModernBenchmarkArenaProps> = ({
  title = "ARTIFICIAL ANALYSIS INTELLIGENCE INDEX",
  category = "OVERALL FRONTIER REASONING & CODING",
  badgeStatus = "OFFICIAL EVALUATION",
  items,
  sourceLabel = "DATA SOURCE: ARTIFICIAL ANALYSIS & SWE-BENCH VERIFIED",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 15, stiffness: 90 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02050c",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', -apple-system, BlinkMacSystemFont, monospace",
      }}
    >
      {/* Ambient Volumetric Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1400,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.14) 0%, rgba(2, 5, 12, 0.98) 75%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Dossier Container */}
      <div
        style={{
          width: 1740,
          height: 780,
          transform: `scale(${entrance * scale}) translateY(-55px)`,
          borderRadius: 22,
          border: "1.5px solid rgba(255, 255, 255, 0.12)",
          backgroundColor: "#070b14",
          boxShadow: "0 30px 100px rgba(0, 0, 0, 0.98), 0 0 60px rgba(249, 115, 22, 0.12)",
          display: "flex",
          flexDirection: "column",
          padding: "32px 48px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#f97316",
                boxShadow: "0 0 12px #f97316",
              }}
            />
            <div>
              <span style={{ color: "#f97316", fontSize: 13, fontWeight: 900, letterSpacing: "0.2em" }}>
                {category}
              </span>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#ffffff", margin: "2px 0 0 0" }}>
                {title}
              </h2>
            </div>
          </div>

          <div
            style={{
              padding: "6px 16px",
              borderRadius: 8,
              backgroundColor: "rgba(249, 115, 22, 0.15)",
              border: "1px solid rgba(249, 115, 22, 0.4)",
              color: "#f97316",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.1em",
            }}
          >
            {badgeStatus}
          </div>
        </div>

        {/* Benchmark Items List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 22, flex: 1, justifyContent: "center" }}>
          {items.map((item, idx) => {
            const pct = Math.min(100, (item.numericVal / item.maxVal) * 100);
            const fillWidth = interpolate(frame, [8 + idx * 8, 40 + idx * 8], [0, pct], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={item.name}
                style={{
                  backgroundColor: item.isHero ? "rgba(30, 41, 59, 0.85)" : "rgba(15, 23, 42, 0.7)",
                  border: `1.5px solid ${item.isHero ? item.color : "rgba(255, 255, 255, 0.1)"}`,
                  borderRadius: 16,
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  boxShadow: item.isHero ? `0 0 40px ${item.color}25` : "none",
                }}
              >
                {/* Model Info */}
                <div style={{ width: 340 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: item.color }} />
                    <span style={{ color: "#ffffff", fontSize: 22, fontWeight: 900 }}>
                      {item.name}
                    </span>
                  </div>
                  {item.detail && (
                    <div style={{ color: "#94a3b8", fontSize: 13, marginTop: 4, fontFamily: "sans-serif" }}>
                      {item.detail}
                    </div>
                  )}
                </div>

                {/* Progress Bar & Score */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>EVALUATION SCORE</span>
                    <span style={{ color: item.color, fontSize: 18, fontWeight: 900 }}>
                      {item.score}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 14,
                      width: "100%",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      borderRadius: 7,
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${fillWidth}%`,
                        backgroundColor: item.color,
                        boxShadow: `0 0 14px ${item.color}`,
                        borderRadius: 7,
                      }}
                    />
                  </div>
                </div>

                {/* Badge Column */}
                {item.badge && (
                  <div style={{ width: 220, textAlign: "right" }}>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                        border: `1px solid ${item.color}50`,
                        padding: "6px 14px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 900,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Sub-strip */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: 14,
            marginTop: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "#64748b",
          }}
        >
          <span>EVALUATION PROTOCOL: HUMAN-EVAL • SWE-BENCH • CODE REFACTORING</span>
          <span style={{ color: "#f97316", fontWeight: 700 }}>
            VERDICT: CLAUDE OPUS 5.5 LEADS IN SURGICAL ZERO-REGRESSION ACCURACY
          </span>
          <span>{sourceLabel}</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
