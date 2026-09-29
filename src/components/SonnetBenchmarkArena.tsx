import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SpeedometerGauge } from "./SpeedometerGauge";

interface SonnetBenchmarkArenaProps {
  mode?: "terminal" | "multimodal" | "arena";
}

export const SonnetBenchmarkArena: React.FC<SonnetBenchmarkArenaProps> = ({ mode = "terminal" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });

  if (mode === "terminal") {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: "#030712",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 1000,
            height: 800,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        <div
          style={{
            width: 1760,
            height: 890,
            transform: `scale(${entrance}) translateY(-10px)`,
            borderRadius: 24,
            border: "1.5px solid rgba(14, 165, 233, 0.4)",
            backgroundColor: "#090d16",
            boxShadow: "0 35px 120px rgba(0,0,0,0.98), 0 0 60px rgba(14, 165, 233, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            padding: "36px 48px",
            justifyContent: "space-between",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <span
                style={{
                  color: "#38bdf8",
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  fontFamily: "monospace",
                }}
              >
                AUTONOMOUS COMMAND LINE BENCHMARK
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: "4px 0 0" }}>
                TERMINAL-BENCH 4.0 LEAP
              </h2>
            </div>
            <div
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                padding: "8px 18px",
                borderRadius: 20,
                color: "#38bdf8",
                fontSize: 13,
                fontWeight: 800,
                fontFamily: "monospace",
              }}
            >
              ● 7X GENERATIONAL MULTIPLIER
            </div>
          </div>

          {/* Triple Dial Grid */}
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "20px 0" }}>
            {/* Claude Sonnet 5 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SpeedometerGauge
                value={10.3}
                maxValue={100}
                label="CLAUDE SONNET 5"
                unit="%"
                color="#64748b"
                size={260}
              />
              <span style={{ marginTop: 12, fontSize: 13, color: "#64748b", fontWeight: 700, fontFamily: "monospace" }}>
                PREVIOUS GEN (OCT 2024)
              </span>
            </div>

            {/* Claude Opus 5.5 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SpeedometerGauge
                value={66.4}
                maxValue={100}
                label="CLAUDE OPUS 5.5"
                unit="%"
                color="#f97316"
                size={280}
              />
              <span style={{ marginTop: 12, fontSize: 13, color: "#f97316", fontWeight: 800, fontFamily: "monospace" }}>
                FLAGSHIP ($4 / $20)
              </span>
            </div>

            {/* Claude Sonnet 5.5 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SpeedometerGauge
                value={70.6}
                maxValue={100}
                label="CLAUDE SONNET 5.5"
                unit="%"
                color="#00f0ff"
                size={310}
              />
              <span style={{ marginTop: 12, fontSize: 14, color: "#00f0ff", fontWeight: 900, fontFamily: "monospace" }}>
                ★ NEW LEADER ($2 / $10)
              </span>
            </div>
          </div>

          {/* Bottom Callout */}
          <div
            style={{
              padding: "14px 24px",
              borderRadius: 12,
              backgroundColor: "rgba(0, 240, 255, 0.08)",
              border: "1px solid rgba(0, 240, 255, 0.3)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#E2E8F0", fontSize: 15, fontWeight: 700 }}>
              Sonnet 5.5 defeats Anthropic's own Opus 5.5 flagship by +4.2% while running at half the API token price.
            </span>
            <span style={{ color: "#00f0ff", fontSize: 14, fontWeight: 900, fontFamily: "monospace" }}>
              VERIFIED OFFICIAL SUITE
            </span>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // Multimodal Mode: OSWorld 2.1 & Chartography
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div
        style={{
          width: 1520,
          height: 760,
          transform: `scale(${entrance}) translateY(-20px)`,
          borderRadius: 24,
          border: "1.5px solid rgba(168, 85, 247, 0.4)",
          backgroundColor: "#090d16",
          boxShadow: "0 30px 90px rgba(0,0,0,0.95), 0 0 50px rgba(168, 85, 247, 0.2)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: "36px 48px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span
              style={{
                color: "#a855f7",
                fontSize: 13,
                fontWeight: 900,
                letterSpacing: "0.15em",
                fontFamily: "monospace",
              }}
            >
              DESKTOP AGENT & VISUAL COMPREHENSION
            </span>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: "4px 0 0" }}>
              MULTIMODAL & AGENTIC EXPLOSION
            </h2>
          </div>
          <div
            style={{
              backgroundColor: "rgba(168, 85, 247, 0.12)",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              padding: "8px 18px",
              borderRadius: 20,
              color: "#a855f7",
              fontSize: 13,
              fontWeight: 800,
              fontFamily: "monospace",
            }}
          >
            ● COMPUTER USE UPGRADE
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "20px 0" }}>
          {/* OSWorld 2.1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SpeedometerGauge
              value={80.1}
              maxValue={100}
              label="OSWORLD 2.1 (DESKTOP GUI)"
              unit="%"
              color="#a855f7"
              size={300}
            />
            <span style={{ marginTop: 12, fontSize: 14, color: "#a855f7", fontWeight: 800, fontFamily: "monospace" }}>
              UP FROM 57.0% (+23.1% GAIN)
            </span>
          </div>

          {/* Chartography */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SpeedometerGauge
              value={61.6}
              maxValue={100}
              label="CHARTOGRAPHY (VISUAL CHARTS)"
              unit="%"
              color="#38bdf8"
              size={300}
            />
            <span style={{ marginTop: 12, fontSize: 14, color: "#38bdf8", fontWeight: 800, fontFamily: "monospace" }}>
              UP FROM 15.6% (4X MULTIPLIER)
            </span>
          </div>

          {/* GDPval AA ELO */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SpeedometerGauge
              value={1844}
              maxValue={2000}
              label="GDPVAL AA (KNOWLEDGE WORK)"
              unit="ELO"
              color="#10b981"
              size={300}
            />
            <span style={{ marginTop: 12, fontSize: 14, color: "#10b981", fontWeight: 800, fontFamily: "monospace" }}>
              JUST 2 POINTS BELOW OPUS (1846)
            </span>
          </div>
        </div>

        <div
          style={{
            padding: "14px 24px",
            borderRadius: 12,
            backgroundColor: "rgba(168, 85, 247, 0.08)",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#E2E8F0", fontSize: 15, fontWeight: 700 }}>
            Operating an entire desktop with mouse clicks, window management, and visual chart analysis.
          </span>
          <span style={{ color: "#a855f7", fontSize: 14, fontWeight: 900, fontFamily: "monospace" }}>
            PRODUCTION MULTIMODAL BENCHMARKS
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
