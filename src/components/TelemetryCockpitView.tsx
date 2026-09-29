import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SpeedometerGauge } from "./SpeedometerGauge";

interface TelemetryCockpitViewProps {
  title?: string;
  badgeStatus?: string;
  glowColor?: string;
  mode?: "single" | "pricing" | "tax";
  speedometerProps?: {
    value: number;
    maxValue?: number;
    label: string;
    unit?: string;
    color?: string;
    size?: number;
  };
}

export const TelemetryCockpitView: React.FC<TelemetryCockpitViewProps> = ({
  title = "ANTHROPIC FRONTIER LABS • TELEMETRY COCKPIT",
  badgeStatus = "ACTIVE METRICS",
  glowColor = "#00f0ff",
  mode = "single",
  speedometerProps = {
    value: 100,
    maxValue: 100,
    label: "AUTONOMOUS REASONING",
    unit: "%",
    color: "#00f0ff",
    size: 320,
  },
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02050c",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor}18 0%, rgba(2, 5, 12, 0.98) 75%)`,
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          width: 1760,
          height: 890,
          transform: `scale(${entrance * scale}) translateY(-12px)`,
          borderRadius: 24,
          border: `1.5px solid ${glowColor}60`,
          backgroundColor: "#080c17",
          boxShadow: `0 35px 120px rgba(0, 0, 0, 0.98), 0 0 60px ${glowColor}30`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
          zIndex: 5,
          padding: "36px 48px",
          justifyContent: "space-between",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: glowColor, boxShadow: `0 0 10px ${glowColor}` }} />
              <span style={{ color: glowColor, fontSize: 13, fontWeight: 900, letterSpacing: "0.15em", fontFamily: "monospace" }}>
                LAB TELEMETRY COCKPIT
              </span>
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: 0 }}>
              {title}
            </h2>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: 20,
              backgroundColor: `${glowColor}18`,
              border: `1px solid ${glowColor}40`,
              color: glowColor,
              fontSize: 13,
              fontWeight: 800,
              fontFamily: "monospace",
            }}
          >
            ● {badgeStatus}
          </div>
        </div>

        {/* Center Display: Based on Mode */}
        {mode === "pricing" ? (
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flex: 1, margin: "20px 0" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SpeedometerGauge value={4} maxValue={10} label="INPUT TOKENS" unit="$/M" color="#f97316" size={320} />
              <span style={{ marginTop: 16, fontSize: 14, color: "#f97316", fontWeight: 800, fontFamily: "monospace" }}>
                OPUS 5.5 INPUT RATE
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SpeedometerGauge value={20} maxValue={30} label="OUTPUT TOKENS" unit="$/M" color="#ef4444" size={320} />
              <span style={{ marginTop: 16, fontSize: 14, color: "#ef4444", fontWeight: 800, fontFamily: "monospace" }}>
                OPUS 5.5 OUTPUT RATE
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SpeedometerGauge value={2} maxValue={10} label="SONNET 5.5 IN" unit="$/M" color="#00f0ff" size={320} />
              <span style={{ marginTop: 16, fontSize: 14, color: "#00f0ff", fontWeight: 900, fontFamily: "monospace" }}>
                ★ 50% COST ARBITRAGE
              </span>
            </div>
          </div>
        ) : mode === "tax" ? (
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flex: 1, margin: "20px 0" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SpeedometerGauge value={400} maxValue={500} label="FLAGSHIP TAX" unit="$/M" color="#ef4444" size={340} />
              <span style={{ marginTop: 16, fontSize: 15, color: "#ef4444", fontWeight: 900, fontFamily: "monospace" }}>
                EXTREME PREMIUM FOR AUTONOMOUS REASONING
              </span>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flex: 1, margin: "20px 0" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SpeedometerGauge {...speedometerProps} size={350} />
              <span style={{ marginTop: 16, fontSize: 15, color: speedometerProps.color || "#00f0ff", fontWeight: 900, fontFamily: "monospace" }}>
                MAXIMUM AUTONOMOUS PROBLEM-SOLVING CEILING
              </span>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div
          style={{
            padding: "14px 28px",
            borderRadius: 14,
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 14, color: "#94a3b8", fontWeight: 700 }}>
            Frontier Model Reasoning Benchmarks • Calibrated against Human Eval & SWE-bench
          </span>
          <span style={{ fontSize: 14, color: glowColor, fontWeight: 900, fontFamily: "monospace" }}>
            VERIFIED SUITE
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
