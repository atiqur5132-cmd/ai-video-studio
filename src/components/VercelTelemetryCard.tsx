import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VercelLogo } from "./RealLogos";

export const VercelTelemetryCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const openBar = interpolate(frame, [10, 50], [0, 78.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const closedBar = interpolate(frame, [10, 50], [0, 21.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardScale = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at center, #0B0F19 0%, #03050B 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
      }}
    >
      <div
        style={{
          width: 1760,
          background: "#080A10",
          border: "1px solid #1E293B",
          borderRadius: 28,
          boxShadow: "0 35px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(56, 189, 248, 0.15)",
          padding: "40px 52px",
          transform: `scale(${cardScale})`,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* Header with Vercel Logo */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <VercelLogo size={46} color="#FFFFFF" />
            <div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#FFFFFF" }}>
                Vercel AI Gateway Telemetry
              </div>
              <div style={{ fontSize: 18, color: "#94A3B8", fontWeight: 600 }}>
                Global Developer Token Volume & Spend Distribution
              </div>
            </div>
          </div>
          <div
            style={{
              background: "rgba(34, 197, 94, 0.15)",
              border: "1px solid rgba(34, 197, 94, 0.4)",
              borderRadius: 999,
              padding: "8px 20px",
              color: "#4ADE80",
              fontSize: 16,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
            LIVE TELEMETRY
          </div>
        </div>

        {/* Big Dual Token Volume Metric */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: 32 }}>
          {/* Open Models (78.4%) */}
          <div
            style={{
              background: "#0F172A",
              border: "1px solid #38BDF8",
              borderRadius: 20,
              padding: 28,
              boxShadow: "0 0 30px rgba(56, 189, 248, 0.2)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: "#38BDF8" }}>
                Open-Weight Frontier Models
              </span>
              <span style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF" }}>
                {openBar.toFixed(1)}%
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: 24,
                background: "#1E293B",
                borderRadius: 12,
                overflow: "hidden",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: `${openBar}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #38BDF8, #818CF8)",
                  borderRadius: 12,
                  boxShadow: "0 0 20px #38BDF8",
                }}
              />
            </div>
            <div style={{ fontSize: 16, color: "#94A3B8" }}>
              Led by Moonshot AI (Kimi K3) & DeepSeek · Surpassing proprietary closed APIs
            </div>
          </div>

          {/* Closed Models (21.6%) */}
          <div
            style={{
              background: "#0F172A",
              border: "1px solid #334155",
              borderRadius: 20,
              padding: 28,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: "#94A3B8" }}>
                Closed APIs
              </span>
              <span style={{ fontSize: 34, fontWeight: 900, color: "#64748B" }}>
                {closedBar.toFixed(1)}%
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: 24,
                background: "#1E293B",
                borderRadius: 12,
                overflow: "hidden",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: `${closedBar}%`,
                  height: "100%",
                  background: "#64748B",
                  borderRadius: 12,
                }}
              />
            </div>
            <div style={{ fontSize: 16, color: "#64748B" }}>
              Trailing in total token consumption volume
            </div>
          </div>
        </div>

        {/* Developer Spend Leaderboard */}
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#E2E8F0",
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Gateway Developer Spend Rankings
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 18 }}>
            {[
              { rank: "#1", name: "Anthropic", share: "Frontier Coding", color: "#F97316" },
              { rank: "#2", name: "OpenAI", share: "Overtaken by Open", color: "#10A37F" },
              { rank: "#3", name: "Moonshot AI (Kimi)", share: "Fastest Growing", color: "#00D2FF" },
              { rank: "#4", name: "DeepSeek", share: "High Volume", color: "#4D6BFE" },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#0D1322",
                  border: `1px solid ${item.color}44`,
                  borderRadius: 16,
                  padding: 18,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 800, color: item.color }}>{item.rank}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF", margin: "6px 0" }}>
                  {item.name}
                </div>
                <div style={{ fontSize: 14, color: "#94A3B8" }}>{item.share}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
