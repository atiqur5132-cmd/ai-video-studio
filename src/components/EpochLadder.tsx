import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const EpochLadder: React.FC<{
  activeLevel?: number; // 0 to 5
}> = ({ activeLevel = 4 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 110 } });

  const levels = [
    { lvl: "AL0", name: "HUMAN ONLY", desc: "100% Manual Software Engineering", metric: "PAST" },
    { lvl: "AL1", name: "ASSISTIVE", desc: "Autocomplete & Inline Syntax Suggestions", metric: "STANDARD" },
    { lvl: "AL2", name: "CO-PILOT", desc: "Refactoring & Sub-Function Generation", metric: "STANDARD" },
    { lvl: "AL3", name: "COLLABORATES", desc: "AI Completes Major Architecture Chunks", metric: ">90% AT ANTHROPIC" },
    { lvl: "AL4", name: "LEADS", desc: "AI Drives End-to-End Research From Prompt", metric: "26% EXPLOSION" },
    { lvl: "AL5", name: "FULL AUTONOMY", desc: "Recursive Self-Improvement (Zero Human Oversight)", metric: "SINGULARITY" },
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
          width: 1420,
          transform: `scale(${entrance}) rotateX(6deg)`,
          background: "rgba(8, 14, 26, 0.95)",
          border: "1px solid rgba(56, 189, 248, 0.25)",
          borderRadius: 24,
          padding: "36px 48px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.9), 0 0 40px rgba(56, 189, 248, 0.1)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 16 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 900, color: "#38BDF8", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              RESEARCH TAXONOMY
            </span>
            <h3 style={{ fontSize: 28, fontWeight: 900, color: "#F8FAFC", margin: "4px 0 0" }}>
              Epoch AI Automation Scale (AL0 → AL5)
            </h3>
          </div>
          <div style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.3)", borderRadius: 12, padding: "8px 18px", color: "#38BDF8", fontWeight: 800, fontSize: 13, fontFamily: "monospace" }}>
            LEVEL 4 TIPPING POINT
          </div>
        </div>

        {/* The 6 Levels Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {levels.map((item, index) => {
            const isHighlight = index === activeLevel;
            const isCollaborate = index === 3;
            const itemEntrance = spring({
              frame: frame - index * 6,
              fps,
              config: { damping: 14, stiffness: 140 },
            });

            const bg = isHighlight
              ? "linear-gradient(90deg, rgba(14, 165, 233, 0.25) 0%, rgba(8, 14, 26, 0.8) 100%)"
              : isCollaborate
              ? "linear-gradient(90deg, rgba(99, 102, 241, 0.15) 0%, rgba(8, 14, 26, 0.6) 100%)"
              : "rgba(15, 23, 42, 0.4)";

            const border = isHighlight
              ? "2px solid #00F0FF"
              : isCollaborate
              ? "1px solid rgba(129, 140, 248, 0.4)"
              : "1px solid rgba(255, 255, 255, 0.06)";

            return (
              <div
                key={item.lvl}
                style={{
                  transform: `scale(${Math.max(0, itemEntrance)}) translateX(${isHighlight ? 12 : 0}px)`,
                  background: bg,
                  border,
                  borderRadius: 14,
                  padding: "12px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: isHighlight ? "0 0 30px rgba(0, 240, 255, 0.25)" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontWeight: 900,
                      fontSize: 18,
                      color: isHighlight ? "#00F0FF" : isCollaborate ? "#818CF8" : "#64748B",
                      width: 50,
                    }}
                  >
                    {item.lvl}
                  </span>
                  <div>
                    <span style={{ fontSize: 16, fontWeight: 800, color: isHighlight ? "#FFFFFF" : "#E2E8F0" }}>
                      {item.name}
                    </span>
                    <p style={{ margin: "2px 0 0", fontSize: 13, color: isHighlight ? "#BAE6FD" : "#94A3B8" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    background: isHighlight
                      ? "rgba(0, 240, 255, 0.2)"
                      : isCollaborate
                      ? "rgba(129, 140, 248, 0.15)"
                      : "rgba(255, 255, 255, 0.04)",
                    border: isHighlight
                      ? "1px solid #00F0FF"
                      : isCollaborate
                      ? "1px solid rgba(129, 140, 248, 0.3)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 800,
                    fontFamily: "monospace",
                    color: isHighlight ? "#00F0FF" : isCollaborate ? "#A5B4FC" : "#64748B",
                  }}
                >
                  {item.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
