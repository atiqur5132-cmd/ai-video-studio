import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Zap, AlertTriangle, ShieldCheck, Flame } from "lucide-react";

export const ProMaxPricingMatrix: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 90 }
  });

  const card1 = spring({ frame: frame - 10, fps, config: { damping: 14 } });
  const card2 = spring({ frame: frame - 20, fps, config: { damping: 14 } });
  const card3 = spring({ frame: frame - 30, fps, config: { damping: 14 } });

  const pulse = Math.sin(frame * 0.1) * 0.04 + 1.0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "40px 80px",
        boxSizing: "border-box"
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(239, 68, 68, 0.05) 50%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          marginBottom: 48,
          opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [-20, 0])}px)`
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(249, 115, 22, 0.12)",
            border: "1px solid rgba(249, 115, 22, 0.3)",
            padding: "6px 20px",
            borderRadius: 30
          }}
        >
          <Flame size={16} color="#f97316" />
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", color: "#f97316", textTransform: "uppercase" }}>
            PRODUCTION SUBSCRIPTION RESTRUCTURING
          </span>
        </div>
        <div style={{ fontSize: 46, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em" }}>
          The $500 Compute Hierarchy
        </div>
      </div>

      {/* 3 Tier Cards */}
      <div style={{ display: "flex", gap: 32, width: "100%", maxWidth: 1300, justifyContent: "center" }}>
        {/* Tier 1: ChatGPT Plus ($20) */}
        <div
          style={{
            flex: 1,
            background: "rgba(15, 23, 42, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 20,
            padding: 28,
            backdropFilter: "blur(12px)",
            opacity: card1,
            transform: `translateY(${interpolate(card1, [0, 1], [30, 0])}px)`
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: "#94a3b8" }}>ChatGPT Plus</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "16px 0 20px" }}>
            <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff" }}>$20</span>
            <span style={{ fontSize: 16, color: "#64748b" }}>/ month</span>
          </div>
          <div style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
            <div>• Standard prompt queue</div>
            <div>• Rate limited GPT-5 & Sol</div>
            <div>• Basic turn-based chat</div>
            <div>• No autonomous sandbox</div>
          </div>
        </div>

        {/* Tier 2: ChatGPT Pro ($200) - PAUSED */}
        <div
          style={{
            flex: 1,
            background: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            borderRadius: 20,
            padding: 28,
            position: "relative",
            backdropFilter: "blur(12px)",
            opacity: card2,
            transform: `translateY(${interpolate(card2, [0, 1], [30, 0])}px)`
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -12,
              right: 20,
              background: "rgba(239, 68, 68, 0.2)",
              border: "1px solid #ef4444",
              color: "#f87171",
              fontSize: 11,
              fontWeight: 800,
              padding: "4px 10px",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              gap: 4
            }}
          >
            <AlertTriangle size={12} />
            SIGNUPS PAUSED
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#cbd5e1" }}>ChatGPT Pro</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "16px 0 20px" }}>
            <span style={{ fontSize: 48, fontWeight: 900, color: "#ffffff" }}>$200</span>
            <span style={{ fontSize: 16, color: "#64748b" }}>/ month</span>
          </div>
          <div style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
            <div>• Unlimited GPT-6 Astra</div>
            <div style={{ color: "#f87171" }}>• Server capacity bottleneck</div>
            <div>• Paused mid-September 2026</div>
            <div>• Single-turn heavy reasoning</div>
          </div>
        </div>

        {/* Tier 3: ChatGPT Pro Max ($500) - LEAKED */}
        <div
          style={{
            flex: 1.15,
            background: "linear-gradient(180deg, rgba(30, 27, 75, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)",
            border: "2px solid #f97316",
            borderRadius: 24,
            padding: 32,
            position: "relative",
            boxShadow: "0 0 40px rgba(249, 115, 22, 0.35)",
            backdropFilter: "blur(16px)",
            opacity: card3,
            transform: `translateY(${interpolate(card3, [0, 1], [30, 0])}px) scale(${pulse})`
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -14,
              right: 24,
              background: "linear-gradient(90deg, #f97316, #ef4444)",
              color: "#ffffff",
              fontSize: 12,
              fontWeight: 900,
              padding: "5px 14px",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              gap: 6,
              boxShadow: "0 4px 12px rgba(249, 115, 22, 0.5)"
            }}
          >
            <Zap size={14} fill="#fff" />
            UNRELEASED LEAK
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#fdba74" }}>ChatGPT Pro Max</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "16px 0 20px" }}>
            <span style={{ fontSize: 56, fontWeight: 900, color: "#ffffff" }}>$500</span>
            <span style={{ fontSize: 18, color: "#94a3b8" }}>/ month</span>
          </div>
          <div style={{ fontSize: 15, color: "#e2e8f0", lineHeight: 1.7, borderTop: "1px solid rgba(249, 115, 22, 0.3)", paddingTop: 18 }}>
            <div style={{ fontWeight: 800, color: "#38bdf8", marginBottom: 6 }}>
              ⚡ "Fastest Work & Codex"
            </div>
            <div>• Zero-Throttle Priority Compute</div>
            <div>• Cerebras Silicon (14x Inference)</div>
            <div>• Project o 24/7 Agent Swarms</div>
            <div>• 100 GB Persistent Cloud Sandboxes</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
