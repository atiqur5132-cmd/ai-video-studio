import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";
import {
  AnthropicOfficialLogo,
  ClaudeSparkLogo,
  GoogleOfficialLogo,
  OpenAILogo,
  XAIOfficialLogo,
} from "../components/RealLogos";

// =========================================================================
// HELPER: Reusable Flat macOS Documentary Window (Zero Tilt, High Canvas)
// =========================================================================
interface MacDossierWindowProps {
  title: string;
  url: string;
  badgeText?: string;
  badgeColor?: string;
  children: React.ReactNode;
}

const MacDossierWindow: React.FC<MacDossierWindowProps> = ({
  title,
  url,
  badgeText,
  badgeColor = "#38BDF8",
  children,
}) => {
  return (
    <div
      style={{
        width: 1760,
        height: 960,
        background: "rgba(9, 14, 26, 0.98)",
        border: `1.5px solid ${badgeColor}33`,
        borderRadius: 16,
        boxShadow: `0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px ${badgeColor}15`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Chrome Top Bar */}
      <div
        style={{
          height: 54,
          background: "rgba(15, 23, 42, 0.98)",
          borderBottom: "1px solid rgba(51, 65, 85, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
          </div>
          <span style={{ fontSize: 13, color: "#94A3B8", fontFamily: "monospace", letterSpacing: "0.04em" }}>
            {title}
          </span>
        </div>

        {/* Verified URL Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(2, 6, 23, 0.8)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            borderRadius: 20,
            padding: "5px 20px",
            fontSize: 13,
            color: "#94A3B8",
          }}
        >
          <span style={{ color: "#10B981" }}>🔒</span>
          <span style={{ color: "#38BDF8", fontWeight: 600 }}>{url}</span>
        </div>

        {/* Badge */}
        {badgeText && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 10,
              background: `${badgeColor}22`,
              border: `1px solid ${badgeColor}66`,
              color: badgeColor,
            }}
          >
            {badgeText}
          </span>
        )}
      </div>

      {/* Content Canvas */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden", display: "flex" }}>
        {children}
      </div>
    </div>
  );
};

// =========================================================================
// ACT 1: THE MIDNIGHT DROP & ELON'S CANDID ASSESSMENT
// Duration: 1901 frames (00:00 -> 01:03.37)
// =========================================================================
export const Act1SurpriseDrop: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: 0 -> 401 (Midnight Ambush & Pricing Shock)
  // Beat 2: 401 -> 1329 (Elon's Candid Tweet on Everyday Workhorse)
  // Beat 3: 1329 -> 1901 (Honest Weakness: Multimodal Gap & Opus Parity)
  const isBeat1 = frame < 401;
  const isBeat2 = frame >= 401 && frame < 1329;
  const beatFrame = isBeat1 ? frame : isBeat2 ? frame - 401 : frame - 1329;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", justifyContent: "center", alignItems: "center" }}>
      {/* Background Ambient Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 25%, rgba(14, 165, 233, 0.12) 0%, transparent 65%)",
        }}
      />

      {isBeat1 && (
        // BEAT 1: 3-Way Frontier Comparison Cards & Midnight Ambush
        <MacDossierWindow
          title="FRONTIER INTELLIGENCE INTELLIGENCE DISPATCH"
          url="x.ai/grok-4-7/announcement"
          badgeText="MIDNIGHT AMBUSH"
          badgeColor="#38BDF8"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "40px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Header Telemetry */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <XAIOfficialLogo size={32} color="#FFFFFF" />
                </div>
                <div>
                  <h1 style={{ margin: 0, fontSize: 38, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                    GROK 4.7 UNANNOUNCED DROP
                  </h1>
                  <p style={{ margin: 0, fontSize: 16, color: "#94A3B8" }}>
                    Zero Keynote • Zero Press Embargo • Immediate API Availability
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid #10B981",
                  borderRadius: 10,
                  padding: "8px 20px",
                  color: "#10B981",
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "0.06em",
                }}
              >
                STATUS: LIVE IN PRODUCTION
              </div>
            </div>

            {/* 3-Way Frontier Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30, flex: 1, margin: "30px 0" }}>
              {/* Card 1: OpenAI GPT-6 Sol */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(51, 65, 85, 0.6)",
                  borderRadius: 14,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <OpenAILogo size={28} color="#10A37F" />
                    <span style={{ fontSize: 18, fontWeight: 800, color: "#E2E8F0" }}>GPT-6 Astra / Sol</span>
                  </div>
                  <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.6 }}>
                    Status: <strong style={{ color: "#F59E0B" }}>Unreleased / Internal</strong>
                    <br />
                    Projected Pricing: <strong style={{ color: "#EF4444" }}>$20 - $50 / M</strong>
                    <br />
                    Focus: Heavy Frontier Compute
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.12)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    borderRadius: 8,
                    padding: "8px 12px",
                    color: "#F87171",
                    fontSize: 12,
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  HIGH COST EMBARGO
                </div>
              </div>

              {/* Card 2: Anthropic Claude Opus 5.5 */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(51, 65, 85, 0.6)",
                  borderRadius: 14,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <ClaudeSparkLogo size={28} color="#F97316" />
                    <span style={{ fontSize: 18, fontWeight: 800, color: "#E2E8F0" }}>Claude Opus 5.5</span>
                  </div>
                  <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.6 }}>
                    Status: <strong style={{ color: "#F59E0B" }}>Rumored / Pending</strong>
                    <br />
                    Pricing Tier: <strong style={{ color: "#EF4444" }}>$15 - $75 / M</strong>
                    <br />
                    Focus: Deep Mathematical Reasoning
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(245, 158, 11, 0.12)",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                    borderRadius: 8,
                    padding: "8px 12px",
                    color: "#FBBF24",
                    fontSize: 12,
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  ENTERPRISE PREMIUM
                </div>
              </div>

              {/* Card 3: xAI Grok 4.7 (The Disruptor) */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(2, 6, 23, 0.9) 100%)",
                  border: "2px solid #38BDF8",
                  borderRadius: 14,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 0 35px rgba(56, 189, 248, 0.25)",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <XAIOfficialLogo size={28} color="#FFFFFF" />
                    <span style={{ fontSize: 18, fontWeight: 900, color: "#FFFFFF" }}>xAI Grok 4.7</span>
                  </div>
                  <div style={{ fontSize: 14, color: "#E2E8F0", lineHeight: 1.6 }}>
                    Status: <strong style={{ color: "#10B981" }}>LIVE WORLDWIDE</strong>
                    <br />
                    Pricing: <strong style={{ color: "#38BDF8", fontSize: 18 }}>$2 / $6 per M</strong>
                    <br />
                    Context: <strong style={{ color: "#F1F5F9" }}>500,000 Tokens</strong>
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(56, 189, 248, 0.2)",
                    border: "1px solid #38BDF8",
                    borderRadius: 8,
                    padding: "8px 12px",
                    color: "#38BDF8",
                    fontSize: 12,
                    fontWeight: 800,
                    textAlign: "center",
                    letterSpacing: "0.06em",
                  }}
                >
                  PRICING DISRUPTION: 5X - 8X CHEAPER
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Ticker */}
            <div
              style={{
                background: "rgba(2, 6, 23, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                borderRadius: 10,
                padding: "12px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#94A3B8", fontSize: 14 }}>
                KEYNOTE SKIPPED • DIRECT PRODUCTION DEPLOYMENT TO CURSOR, GROK BUILD & OPENROUTER
              </span>
              <span style={{ color: "#38BDF8", fontSize: 14, fontWeight: 700, fontFamily: "monospace" }}>
                BENCHMARK DATA: RANK #2 VERIFIED
              </span>
            </div>
          </div>
        </MacDossierWindow>
      )}

      {isBeat2 && (
        // BEAT 2: 100% Flat Native View of Elon Musk's Tweet (NO SCROLL CUTOFF, STATIC FRAMING)
        <MacDossierWindow
          title="X (TWITTER) VERIFIED DISPATCH • @elonmusk"
          url="x.com/elonmusk/status/2102082268730945829"
          badgeText="FOUNDER VERDICT"
          badgeColor="#F59E0B"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background: "#000000",
            }}
          >
            {/* Native Flat Tweet Image - Scaled cleanly to fit without cutoffs */}
            <div
              style={{
                transform: `scale(${interpolate(beatFrame, [0, 928], [1.0, 1.02])})`,
                transition: "transform 0.1s ease-out",
                maxHeight: 890,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Img
                src={staticFile("evidence/elon_ranking_clean.png")}
                style={{
                  maxHeight: 880,
                  width: "auto",
                  borderRadius: 12,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.9)",
                }}
              />

              {/* Digital Golden Highlighter Sweep across Elon's Key Statement */}
              <div
                style={{
                  position: "absolute",
                  top: 70,
                  left: 35,
                  right: 35,
                  height: 60,
                  background: "rgba(245, 158, 11, 0.22)",
                  border: "1.5px solid #F59E0B",
                  borderRadius: 6,
                  pointerEvents: "none",
                  opacity: interpolate(beatFrame, [40, 70], [0, 1], { extrapolateRight: "clamp" }),
                }}
              />
            </div>

            {/* Sub-Card Floating Badge for Context */}
            <div
              style={{
                position: "absolute",
                bottom: 30,
                right: 40,
                background: "rgba(15, 23, 42, 0.94)",
                border: "1.5px solid #F59E0B",
                borderRadius: 12,
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                boxShadow: "0 15px 40px rgba(0,0,0,0.8)",
              }}
            >
              <XAIOfficialLogo size={28} color="#F59E0B" />
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#94A3B8", textTransform: "uppercase" }}>
                  ELON MUSK CANDID CONCESSION
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#FFFFFF" }}>
                  "3rd for Agentic Coding — but 1st for Everyday Engineering Workhorse"
                </div>
              </div>
            </div>
          </div>
        </MacDossierWindow>
      )}

      {!isBeat1 && !isBeat2 && (
        // BEAT 3: Honest Weakness & Opus 5.0 Parity
        <MacDossierWindow
          title="TECHNICAL AUDIT • PARITY & WEAKNESSES"
          url="x.ai/audit/grok-4-7-vs-opus-5-0"
          badgeText="FOUNDER TRANSPARENCY"
          badgeColor="#8B5CF6"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "40px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#8B5CF6", letterSpacing: "0.08em" }}>
                HONEST FRONTIER POSITIONING
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: "8px 0 24px" }}>
                ON PAR WITH OPUS 5.0 — NOT 5.1
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, flex: 1 }}>
              {/* Left: What Grok 4.7 Achieved */}
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1.5px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: 14,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#10B981", marginBottom: 16 }}>
                    <span style={{ fontSize: 22 }}>✓</span>
                    <strong style={{ fontSize: 20 }}>STRENGTHS VERIFIED</strong>
                  </div>
                  <ul style={{ color: "#E2E8F0", fontSize: 16, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                    <li>Matches Claude Opus 5.0 on deep coding & agent logic</li>
                    <li>Beats Claude Fable 5.1 on EEBench Electrical Engineering (64%)</li>
                    <li>1/5th to 1/8th inference pricing ($2 / $6 per M)</li>
                    <li>High-throughput multi-hour agent execution workhorse</li>
                  </ul>
                </div>
                <div style={{ color: "#10B981", fontSize: 13, fontWeight: 700 }}>
                  VALIDATED BY ARTIFICIAL ANALYSIS INTELLIGENCE INDEX (SCORE: 46)
                </div>
              </div>

              {/* Right: Where Grok 4.7 Falls Short (Musk's Admission) */}
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.08)",
                  border: "1.5px solid rgba(239, 68, 68, 0.3)",
                  borderRadius: 14,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#EF4444", marginBottom: 16 }}>
                    <span style={{ fontSize: 22 }}>✕</span>
                    <strong style={{ fontSize: 20 }}>KNOWN DEFICITS (MUSK CONCESSION)</strong>
                  </div>
                  <ul style={{ color: "#E2E8F0", fontSize: 16, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                    <li>Multimodal Computer Vision lags OpenAI GPT-6 & Gemini 3.8</li>
                    <li>Trails Claude Fable 5.1 max on TerminalBench 4.0 (38% vs 57.9%)</li>
                    <li>RL coding specialization caused 5-point conversational regression</li>
                    <li>To be overhauled in upcoming 2.5T Grok 4.8 release</li>
                  </ul>
                </div>
                <div style={{ color: "#F87171", fontSize: 13, fontWeight: 700 }}>
                  NEXT TARGET: GROK 4.8 MULTIMODAL OVERHAUL
                </div>
              </div>
            </div>

            {/* Lower Summary Chip */}
            <div
              style={{
                marginTop: 20,
                background: "rgba(15, 23, 42, 0.8)",
                borderRadius: 10,
                padding: "14px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid rgba(139, 92, 246, 0.3)",
              }}
            >
              <span style={{ color: "#C4B5FD", fontSize: 14, fontWeight: 600 }}>
                Rare transparency: Musk publicly admitted multimodal deficit instead of hyping marketing numbers
              </span>
              <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 800, fontFamily: "monospace" }}>
                PHASE 1 AUDIT COMPLETE
              </span>
            </div>
          </div>
        </MacDossierWindow>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// ACT 2: THE MULTI-MODEL BENCHMARK SHOOTOUT (EEBENCH, CURSORBENCH, DEEPSWE)
// Duration: 2498 frames (01:03.37 -> 02:26.63)
// =========================================================================
export const Act2EEBenchUpset: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: 0 -> 885 (EEBench Verified Tweet & Ranking)
  // Beat 2: 885 -> 1686 (4-Way Leaderboard Shootout: Opus 5 & Fable 5.1 Toppled)
  // Beat 3: 1686 -> 2498 (SpaceXAI Matrix: CursorBench & DeepSWE)
  const isBeat1 = frame < 885;
  const isBeat2 = frame >= 885 && frame < 1686;
  const beatFrame = isBeat1 ? frame : isBeat2 ? frame - 885 : frame - 1686;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
        }}
      />

      {isBeat1 && (
        // BEAT 1: EEBench Tweet - Flat Native View (Static, Clean Framing, NO Scroll Cutoff)
        <MacDossierWindow
          title="EEBENCH OFFICIAL VERIFICATION • ELECTRICAL ENGINEERING AGENTS"
          url="x.com/eebench/status/2102083984712398472"
          badgeText="LEADERBOARD UPSET"
          badgeColor="#10B981"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background: "#000000",
            }}
          >
            <div
              style={{
                transform: `scale(${interpolate(beatFrame, [0, 885], [1.0, 1.02])})`,
                maxHeight: 890,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img
                src={staticFile("evidence/grok47_eebench.png")}
                style={{
                  maxHeight: 880,
                  width: "auto",
                  borderRadius: 12,
                  boxShadow: "0 25px 70px rgba(0,0,0,0.9)",
                }}
              />
            </div>

            {/* Highlight Callout Pill */}
            <div
              style={{
                position: "absolute",
                top: 40,
                right: 40,
                background: "rgba(16, 185, 129, 0.95)",
                color: "#022C22",
                borderRadius: 12,
                padding: "14px 26px",
                fontWeight: 900,
                fontSize: 18,
                boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
              }}
            >
              RANK #2 WORLDWIDE: 64.0%
            </div>
          </div>
        </MacDossierWindow>
      )}

      {isBeat2 && (
        // BEAT 2: 4-Way Frontier Shootout Leaderboard (Animated Bars)
        <MacDossierWindow
          title="EEBENCH GLOBAL LEADERBOARD • REAL-WORLD HARDWARE ENGINEERING AGENTS"
          url="eebench.ai/leaderboard/hard-engineering"
          badgeText="OPUS 5 TOPPLED"
          badgeColor="#EF4444"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "40px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#EF4444", letterSpacing: "0.08em" }}>
                    OFFICIAL EEBENCH SCORECARD
                  </span>
                  <h2 style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF", margin: "6px 0 0" }}>
                    HARD ENGINEERING AGENT BENCHMARK
                  </h2>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: 14, color: "#94A3B8" }}>Autonomous Circuit Design & Multi-Hour Loops</span>
                  <div style={{ color: "#38BDF8", fontSize: 16, fontWeight: 700 }}>Pass@1 Verified</div>
                </div>
              </div>
            </div>

            {/* 4 Models Ranked */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24, margin: "24px 0", flex: 1, justifyContent: "space-around" }}>
              {/* Rank 1: GPT-6 Astra */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.85)",
                  border: "1px solid rgba(51, 65, 85, 0.8)",
                  borderRadius: 14,
                  padding: "22px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20, width: 360 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "#94A3B8", fontFamily: "monospace" }}>#1</span>
                  <OpenAILogo size={36} color="#10A37F" />
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>GPT-6 Astra</div>
                    <div style={{ fontSize: 13, color: "#94A3B8" }}>OpenAI Codex CLI (Dev Checkpoint) • 1m 46s</div>
                  </div>
                </div>
                {/* Bar */}
                <div style={{ flex: 1, margin: "0 36px", height: 36, background: "rgba(2, 6, 23, 0.85)", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${interpolate(beatFrame, [0, 45], [0, 69.3], { extrapolateRight: "clamp" })}%`,
                      background: "linear-gradient(90deg, #059669, #10B981)",
                      borderRadius: 18,
                    }}
                  />
                </div>
                <div style={{ width: 140, textAlign: "right" }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "#10B981" }}>69.3%</span>
                  <div style={{ fontSize: 13, color: "#94A3B8" }}>$0.83 / task • 6.0k Tok</div>
                </div>
              </div>

              {/* Rank 2: Grok 4.7 (The Disrupter) */}
              <div
                style={{
                  background: "linear-gradient(90deg, rgba(14, 165, 233, 0.25) 0%, rgba(15, 23, 42, 0.98) 100%)",
                  border: "2px solid #38BDF8",
                  borderRadius: 14,
                  padding: "22px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 0 35px rgba(56, 189, 248, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20, width: 360 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "#38BDF8", fontFamily: "monospace" }}>#2</span>
                  <XAIOfficialLogo size={36} color="#FFFFFF" />
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF" }}>xAI Grok 4.7 🏆</div>
                    <div style={{ fontSize: 13, color: "#38BDF8", fontWeight: 700 }}>xAI Grok CLI (Live Production) • 20m 34s</div>
                  </div>
                </div>
                {/* Bar */}
                <div style={{ flex: 1, margin: "0 36px", height: 36, background: "rgba(2, 6, 23, 0.85)", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${interpolate(beatFrame, [10, 60], [0, 64.0], { extrapolateRight: "clamp" })}%`,
                      background: "linear-gradient(90deg, #0284C7, #38BDF8)",
                      borderRadius: 18,
                    }}
                  />
                </div>
                <div style={{ width: 140, textAlign: "right" }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "#38BDF8" }}>64.0%</span>
                  <div style={{ fontSize: 13, color: "#38BDF8", fontWeight: 700 }}>$3.55 / task • 81.2k Tok</div>
                </div>
              </div>

              {/* Rank 3: Claude Opus 5 */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.85)",
                  border: "1px solid rgba(51, 65, 85, 0.8)",
                  borderRadius: 14,
                  padding: "22px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20, width: 360 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "#94A3B8", fontFamily: "monospace" }}>#3</span>
                  <AnthropicOfficialLogo size={34} color="#D97706" />
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>Claude Opus 5</div>
                    <div style={{ fontSize: 13, color: "#94A3B8" }}>Anthropic Claude Code • 13m 01s</div>
                  </div>
                </div>
                {/* Bar */}
                <div style={{ flex: 1, margin: "0 36px", height: 36, background: "rgba(2, 6, 23, 0.85)", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${interpolate(beatFrame, [20, 70], [0, 61.6], { extrapolateRight: "clamp" })}%`,
                      background: "linear-gradient(90deg, #B45309, #F59E0B)",
                      borderRadius: 18,
                    }}
                  />
                </div>
                <div style={{ width: 140, textAlign: "right" }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "#F59E0B" }}>61.6%</span>
                  <div style={{ fontSize: 13, color: "#94A3B8" }}>$2.38 / task • 49.0k Tok</div>
                </div>
              </div>

              {/* Rank 4: Claude Fable 5.1 */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.85)",
                  border: "1px solid rgba(51, 65, 85, 0.8)",
                  borderRadius: 14,
                  padding: "22px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20, width: 360 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "#94A3B8", fontFamily: "monospace" }}>#4</span>
                  <ClaudeSparkLogo size={34} color="#EA580C" />
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>Claude Fable 5.1</div>
                    <div style={{ fontSize: 13, color: "#94A3B8" }}>Anthropic Claude Code • 10m 52s</div>
                  </div>
                </div>
                {/* Bar */}
                <div style={{ flex: 1, margin: "0 36px", height: 36, background: "rgba(2, 6, 23, 0.85)", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${interpolate(beatFrame, [30, 80], [0, 56.4], { extrapolateRight: "clamp" })}%`,
                      background: "linear-gradient(90deg, #C2410C, #FB923C)",
                      borderRadius: 18,
                    }}
                  />
                </div>
                <div style={{ width: 140, textAlign: "right" }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "#FB923C" }}>56.4%</span>
                  <div style={{ fontSize: 13, color: "#94A3B8" }}>$2.92 / task • 40.5k Tok</div>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div
              style={{
                background: "rgba(239, 68, 68, 0.12)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                borderRadius: 10,
                padding: "14px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#FCA5A5", fontSize: 15, fontWeight: 700 }}>
                GROK 4.7 DEFEATS BOTH CLAUDE OPUS 5 (+2.4%) AND FABLE 5.1 (+7.6%) IN HARD CIRCUITS
              </span>
              <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 800, fontFamily: "monospace" }}>
                VERIFIED SHAKEUP
              </span>
            </div>
          </div>
        </MacDossierWindow>
      )}

      {!isBeat1 && !isBeat2 && (
        // BEAT 3: SpaceXAI Matrix - CursorBench & DeepSWE (Flat Native Image View)
        <MacDossierWindow
          title="SPACEXAI COMPARATIVE MATRIX • 8 DEVELOPER BENCHMARKS"
          url="x.com/SpaceXAI/status/2102082268730945829"
          badgeText="OFFICIAL MATRIX"
          badgeColor="#38BDF8"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background: "#000000",
            }}
          >
            <div
              style={{
                transform: `scale(${interpolate(beatFrame, [0, 812], [1.0, 1.02])})`,
                maxHeight: 890,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img
                src={staticFile("evidence/grok47_specs.png")}
                style={{
                  maxHeight: 880,
                  width: "auto",
                  borderRadius: 12,
                  boxShadow: "0 25px 70px rgba(0,0,0,0.9)",
                }}
              />
            </div>

            {/* Telemetry Highlight Box */}
            <div
              style={{
                position: "absolute",
                bottom: 30,
                left: 40,
                background: "rgba(15, 23, 42, 0.95)",
                border: "1.5px solid #38BDF8",
                borderRadius: 12,
                padding: "16px 28px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              }}
            >
              <div style={{ color: "#38BDF8", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>
                CORE HIGHLIGHTS
              </div>
              <div style={{ color: "#FFFFFF", fontSize: 17, fontWeight: 800, marginTop: 4 }}>
                CursorBench 4.0: <strong>40.4% → 46.3%</strong> • DeepSWE 1.1: <strong>71.0%</strong> (Tied with GPT-5.6 Sol)
              </div>
            </div>
          </div>
        </MacDossierWindow>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// ACT 3: THREE.JS 3D & AUTONOMOUS TERMINAL LOOPS SHOOTOUT
// Duration: 1225 frames (02:26.63 -> 03:07.47)
// =========================================================================
export const Act3ThreeJsAndTerminal: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: 0 -> 687 (Three.js Space Scene Challenge Video)
  // Beat 2: 687 -> 1225 (10x Pricing Delta: 20¢ vs $2.50 & Terminal Execution)
  const isBeat1 = frame < 687;
  const beatFrame = isBeat1 ? frame : frame - 687;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
        }}
      />

      {isBeat1 && (
        // BEAT 1: Three.js Real 3D Space Scene Execution (Muted Real Video Embed)
        <MacDossierWindow
          title="GENERATIVE BENCHMARK: COMPLEX THREE.JS 3D SPACE SIMULATION"
          url="aimlapi.com/benchmarks/grok47-vs-opus5-3d-physics"
          badgeText="REAL EVIDENCE DEMO"
          badgeColor="#6366F1"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              padding: "30px 40px",
              gap: 30,
              alignItems: "center",
            }}
          >
            {/* Left Pane: Real Video Evidence Box */}
            <div
              style={{
                flex: 1.2,
                height: 840,
                background: "#000000",
                borderRadius: 14,
                overflow: "hidden",
                border: "1.5px solid rgba(99, 102, 241, 0.4)",
                position: "relative",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              }}
            >
              <Video
                src={staticFile("evidence/openai_astra_blender_threejs.mp4")}
                muted={true}
                volume={0}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "rgba(15, 23, 42, 0.85)",
                  border: "1px solid #6366F1",
                  borderRadius: 8,
                  padding: "6px 14px",
                  color: "#A5B4FC",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                LIVE THREE.JS RENDER PIPELINE
              </div>
            </div>

            {/* Right Pane: Challenge Specifications */}
            <div
              style={{
                flex: 0.8,
                height: 840,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#6366F1", letterSpacing: "0.08em" }}>
                  STRESS TEST PARAMETERS
                </span>
                <h3 style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF", margin: "6px 0 20px" }}>
                  4 SELF-CONTAINED 3D WORLDS
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ background: "rgba(15, 23, 42, 0.8)", padding: "14px 18px", borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.6)" }}>
                    <strong style={{ color: "#38BDF8", fontSize: 15 }}>1. Rocket Launch</strong>
                    <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 4 }}>Volumetric smoke & progressive stage ignition</div>
                  </div>
                  <div style={{ background: "rgba(15, 23, 42, 0.8)", padding: "14px 18px", borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.6)" }}>
                    <strong style={{ color: "#F59E0B", fontSize: 15 }}>2. Mothership Laser Defense</strong>
                    <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 4 }}>Particle lasers targeting incoming meteors</div>
                  </div>
                  <div style={{ background: "rgba(15, 23, 42, 0.8)", padding: "14px 18px", borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.6)" }}>
                    <strong style={{ color: "#10B981", fontSize: 15 }}>3. Spiral Galaxy</strong>
                    <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 4 }}>Multi-arm gravitational particle rotation</div>
                  </div>
                  <div style={{ background: "rgba(15, 23, 42, 0.8)", padding: "14px 18px", borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.6)" }}>
                    <strong style={{ color: "#EC4899", fontSize: 15 }}>4. Interactive Black Hole</strong>
                    <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 4 }}>Relativistic accretion disk orbital physics</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(99, 102, 241, 0.15)",
                  border: "1.5px solid #6366F1",
                  borderRadius: 12,
                  padding: "16px 20px",
                }}
              >
                <div style={{ color: "#A5B4FC", fontSize: 13, fontWeight: 700 }}>VERDICT</div>
                <div style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 800, marginTop: 4 }}>
                  Grok 4.7 delivered clean, fully working physics in ~60s vs Opus 5 requiring 180s
                </div>
              </div>
            </div>
          </div>
        </MacDossierWindow>
      )}

      {!isBeat1 && (
        // BEAT 2: 10x Cost Delta Board (20¢ vs $2.50) + Autonomous Terminal Execution
        <MacDossierWindow
          title="GENERATION COST & AUTONOMOUS EXECUTION AUDIT"
          url="aimlapi.com/benchmarks/cost-analysis"
          badgeText="10X PRICE DELTA"
          badgeColor="#10B981"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              padding: "30px 40px",
              gap: 30,
              alignItems: "center",
            }}
          >
            {/* Left: 10x Cost Comparison Cards */}
            <div
              style={{
                flex: 1,
                height: 840,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#10B981", letterSpacing: "0.08em" }}>
                  FINANCIAL DISRUPTION
                </span>
                <h3 style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF", margin: "6px 0 24px" }}>
                  10X PRICING DELTA AT PARITY OUTPUT
                </h3>
              </div>

              {/* Side-by-side Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {/* Grok 4.7 */}
                <div
                  style={{
                    background: "rgba(14, 165, 233, 0.15)",
                    border: "2px solid #38BDF8",
                    borderRadius: 14,
                    padding: 24,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <XAIOfficialLogo size={26} color="#FFFFFF" />
                    <strong style={{ fontSize: 18, color: "#FFFFFF" }}>Grok 4.7</strong>
                  </div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#38BDF8", margin: "16px 0 8px" }}>
                    $0.20
                  </div>
                  <div style={{ fontSize: 14, color: "#94A3B8" }}>Cost per 3D Scene</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#10B981", marginTop: 12 }}>
                    ⏱ 60s Generation Time
                  </div>
                </div>

                {/* Claude Opus 5 */}
                <div
                  style={{
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(51, 65, 85, 0.8)",
                    borderRadius: 14,
                    padding: 24,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <AnthropicOfficialLogo size={24} color="#D97706" />
                    <strong style={{ fontSize: 18, color: "#E2E8F0" }}>Claude Opus 5</strong>
                  </div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#EF4444", margin: "16px 0 8px" }}>
                    $2.50
                  </div>
                  <div style={{ fontSize: 14, color: "#94A3B8" }}>Cost per 3D Scene</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#F59E0B", marginTop: 12 }}>
                    ⏱ 180s Generation Time
                  </div>
                </div>
              </div>

              {/* Banner */}
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1.5px solid #10B981",
                  borderRadius: 12,
                  padding: "16px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#A7F3D0", fontSize: 16, fontWeight: 800 }}>
                  10-FOLD COST SAVINGS WITH NEARLY IDENTICAL THREE.JS FIDELITY
                </span>
                <span style={{ color: "#10B981", fontSize: 18, fontWeight: 900 }}>92% CHEAPER</span>
              </div>
            </div>

            {/* Right: Terminal Screencast Embed */}
            <div
              style={{
                flex: 1,
                height: 840,
                background: "#000000",
                borderRadius: 14,
                overflow: "hidden",
                border: "1.5px solid rgba(56, 189, 248, 0.4)",
                position: "relative",
              }}
            >
              <Video
                src={staticFile("evidence/agent_terminal_demo.mp4")}
                muted={true}
                volume={0}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "rgba(15, 23, 42, 0.85)",
                  border: "1px solid #38BDF8",
                  borderRadius: 8,
                  padding: "6px 14px",
                  color: "#38BDF8",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                AUTONOMOUS AGENT EXECUTION LOOP
              </div>
            </div>
          </div>
        </MacDossierWindow>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// ACT 4: THE ECONOMIC DISRUPTION & CODING AGENT INDEX
// Duration: 1378 frames (03:07.47 -> 03:53.40)
// =========================================================================
export const Act4EconomicDisruption: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: 0 -> 722 (Artificial Analysis Coding Agent Index: $2,700 vs $3,800)
  // Beat 2: 722 -> 1378 (Token Pricing Board: $2/$6 vs $10/$50 & Ecosystem Integration)
  const isBeat1 = frame < 722;
  const beatFrame = isBeat1 ? frame : frame - 722;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 25%, rgba(16, 185, 129, 0.12) 0%, transparent 65%)",
        }}
      />

      {isBeat1 && (
        // BEAT 1: Artificial Analysis Coding Agent Index Project Costs
        <MacDossierWindow
          title="ARTIFICIAL ANALYSIS • CODING AGENT INDEX & TOTAL PROJECT ECONOMICS"
          url="artificialanalysis.ai/indexes/coding-agents"
          badgeText="29% EXPENSE CUT"
          badgeColor="#10B981"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "40px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#10B981", letterSpacing: "0.08em" }}>
                END-TO-END SOFTWARE DEVELOPMENT BENCHMARK
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: "6px 0 0" }}>
                AVERAGE REPO BUILD COST COMPARISON
              </h2>
            </div>

            {/* Comparison Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, margin: "20px 0" }}>
              {/* Grok Build */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(14, 165, 233, 0.18) 0%, rgba(2, 6, 23, 0.95) 100%)",
                  border: "2px solid #38BDF8",
                  borderRadius: 16,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 20px 60px rgba(56, 189, 248, 0.2)",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <XAIOfficialLogo size={32} color="#FFFFFF" />
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: "#FFFFFF" }}>xAI Grok Build</div>
                      <div style={{ fontSize: 13, color: "#38BDF8" }}>Powered by Grok 4.7 xHigh</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 60, fontWeight: 900, color: "#38BDF8", margin: "24px 0 10px" }}>
                    $2,700
                  </div>
                  <div style={{ fontSize: 16, color: "#94A3B8" }}>Average Total Project Build Cost</div>
                </div>

                <div
                  style={{
                    background: "rgba(16, 185, 129, 0.2)",
                    border: "1px solid #10B981",
                    borderRadius: 10,
                    padding: "12px 18px",
                    color: "#10B981",
                    fontSize: 15,
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  SAVINGS: $1,100 PER COMPLETE PROJECT (-29%)
                </div>
              </div>

              {/* Claude Code */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "1.5px solid rgba(51, 65, 85, 0.8)",
                  borderRadius: 16,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <ClaudeSparkLogo size={32} color="#EA580C" />
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: "#FFFFFF" }}>Claude Code</div>
                      <div style={{ fontSize: 13, color: "#EA580C" }}>Powered by Claude Fable 5.1</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 60, fontWeight: 900, color: "#F87171", margin: "24px 0 10px" }}>
                    $3,800
                  </div>
                  <div style={{ fontSize: 16, color: "#94A3B8" }}>Average Total Project Build Cost</div>
                </div>

                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.4)",
                    borderRadius: 10,
                    padding: "12px 18px",
                    color: "#FCA5A5",
                    fontSize: 15,
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  HIGH FRONTIER INFERENCE OVERHEAD
                </div>
              </div>
            </div>

            {/* Bottom Insight */}
            <div
              style={{
                background: "rgba(2, 6, 23, 0.8)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                borderRadius: 12,
                padding: "14px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#E2E8F0", fontSize: 15 }}>
                For enterprise software engineering organizations running continuous autonomous agent loops, Grok 4.7 slashes monthly bills immediately.
              </span>
              <span style={{ color: "#10B981", fontSize: 15, fontWeight: 800 }}>
                29% HARD SAVINGS
              </span>
            </div>
          </div>
        </MacDossierWindow>
      )}

      {!isBeat1 && (
        // BEAT 2: Token Pricing Matrix & Ecosystem Integrations
        <MacDossierWindow
          title="TOKEN PRICING COLLAPSE • 500K CONTEXT & MULTI-PLATFORM DISTRIBUTION"
          url="x.ai/api/pricing-table"
          badgeText="MARKET SHOCK"
          badgeColor="#38BDF8"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "40px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#38BDF8", letterSpacing: "0.08em" }}>
                API TOKEN ECONOMICS
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: "6px 0 0" }}>
                GROK 4.7 UNDERMINES FRONTIER LABS BY 5X TO 8X
              </h2>
            </div>

            {/* Pricing Comparison Table */}
            <div
              style={{
                background: "rgba(15, 23, 42, 0.85)",
                borderRadius: 14,
                border: "1px solid rgba(51, 65, 85, 0.8)",
                overflow: "hidden",
                margin: "20px 0",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                  background: "rgba(2, 6, 23, 0.9)",
                  padding: "16px 24px",
                  borderBottom: "1px solid rgba(51, 65, 85, 0.8)",
                  fontWeight: 800,
                  fontSize: 14,
                  color: "#94A3B8",
                }}
              >
                <div>MODEL</div>
                <div>INPUT (PER M)</div>
                <div>OUTPUT (PER M)</div>
                <div>CONTEXT WINDOW</div>
              </div>

              {/* Grok 4.7 Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                  padding: "18px 24px",
                  alignItems: "center",
                  background: "rgba(14, 165, 233, 0.12)",
                  borderBottom: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <XAIOfficialLogo size={24} color="#FFFFFF" />
                  <strong style={{ color: "#FFFFFF", fontSize: 17 }}>Grok 4.7 xHigh</strong>
                </div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#38BDF8" }}>$2.00</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#38BDF8" }}>$6.00</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>500,000 Tokens</div>
              </div>

              {/* GPT-5.6 Sol Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                  padding: "16px 24px",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <OpenAILogo size={22} color="#10A37F" />
                  <strong style={{ color: "#E2E8F0", fontSize: 16 }}>GPT-5.6 Sol Max</strong>
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0" }}>$4.00</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#E2E8F0" }}>$20.00</div>
                <div style={{ fontSize: 15, color: "#94A3B8" }}>256,000 Tokens</div>
              </div>

              {/* Claude Fable 5.1 Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                  padding: "16px 24px",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <ClaudeSparkLogo size={22} color="#EA580C" />
                  <strong style={{ color: "#E2E8F0", fontSize: 16 }}>Claude Fable 5.1 Max</strong>
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#F87171" }}>$10.00</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#F87171" }}>$50.00</div>
                <div style={{ fontSize: 15, color: "#94A3B8" }}>200,000 Tokens</div>
              </div>
            </div>

            {/* Ecosystem Chips */}
            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.8)", padding: "14px 20px", borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.6)" }}>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>KNOWLEDGE CUTOFF</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#10B981", marginTop: 4 }}>May 2026 (Fresh)</div>
              </div>
              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.8)", padding: "14px 20px", borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.6)" }}>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>DEV PLATFORMS</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#38BDF8", marginTop: 4 }}>Cursor, Grok Build, OpenRouter</div>
              </div>
              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.8)", padding: "14px 20px", borderRadius: 10, border: "1px solid rgba(51, 65, 85, 0.6)" }}>
                <div style={{ fontSize: 12, color: "#94A3B8" }}>ENTERPRISE APIS</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#F59E0B", marginTop: 4 }}>Cloudflare & Vercel Native</div>
              </div>
            </div>
          </div>
        </MacDossierWindow>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// ACT 5: TECHNICAL AUDIT - WHERE GROK FAILS VS DOMINATES
// Duration: 1631 frames (03:53.40 -> 04:47.77)
// =========================================================================
export const Act5TechnicalAudit: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: 0 -> 828 (Red Audit: TerminalBench, HealthBench, Conversational Penalty)
  // Beat 2: 828 -> 1108 (Multimodal Computer Vision Gap)
  // Beat 3: 1108 -> 1631 (Green Dominance: Harvey Legal & EEBench)
  const isBeat1 = frame < 828;
  const isBeat2 = frame >= 828 && frame < 1108;
  const beatFrame = isBeat1 ? frame : isBeat2 ? frame - 828 : frame - 1108;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
        }}
      />

      {isBeat1 && (
        // BEAT 1: The Red Audit Board (TerminalBench & HealthBench Deficits)
        <MacDossierWindow
          title="OBJECTIVE AUDIT • WHERE GROK 4.7 LAGS BEHIND"
          url="audit.evals.ai/grok-4-7-red-flags"
          badgeText="TECHNICAL DEFICITS"
          badgeColor="#EF4444"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "40px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#EF4444", letterSpacing: "0.08em" }}>
                STRICT EVALUATION INTEGRITY
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: "6px 0 0" }}>
                THE SPECIALIZATION TRADE-OFF
              </h2>
            </div>

            {/* 3 Red Flag Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30, margin: "20px 0" }}>
              {/* Card 1: TerminalBench */}
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1.5px solid rgba(239, 68, 68, 0.4)",
                  borderRadius: 14,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#F87171" }}>TERMINAL-BENCH 4.0</div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#EF4444", margin: "14px 0 6px" }}>
                    38.0%
                  </div>
                  <div style={{ fontSize: 14, color: "#94A3B8" }}>
                    Trails Claude Fable 5.1 (<strong>57.9%</strong>) by nearly 20 points on deep bash execution.
                  </div>
                </div>
                <div style={{ color: "#EF4444", fontSize: 12, fontWeight: 700, marginTop: 16 }}>
                  -19.9% DEFICIT
                </div>
              </div>

              {/* Card 2: HealthBench Pro */}
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1.5px solid rgba(239, 68, 68, 0.4)",
                  borderRadius: 14,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#F87171" }}>HEALTHBENCH PRO</div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#EF4444", margin: "14px 0 6px" }}>
                    56.7%
                  </div>
                  <div style={{ fontSize: 14, color: "#94A3B8" }}>
                    Trails Claude Fable 5.1 (<strong>62.1%</strong>) and GPT-5.6 Sol (<strong>60.5%</strong>) in clinical reasoning.
                  </div>
                </div>
                <div style={{ color: "#EF4444", fontSize: 12, fontWeight: 700, marginTop: 16 }}>
                  -5.4% DEFICIT
                </div>
              </div>

              {/* Card 3: Vals AI Index */}
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1.5px solid rgba(239, 68, 68, 0.4)",
                  borderRadius: 14,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#F87171" }}>VALS AI INDEX</div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#EF4444", margin: "14px 0 6px" }}>
                    -5 PTS
                  </div>
                  <div style={{ fontSize: 14, color: "#94A3B8" }}>
                    Grok dropped 5 points compared to Grok 4.6 due to aggressive coding RL alignment penalizing general conversation.
                  </div>
                </div>
                <div style={{ color: "#EF4444", fontSize: 12, fontWeight: 700, marginTop: 16 }}>
                  CONVERSATIONAL TAX
                </div>
              </div>
            </div>

            {/* Bottom Caution Bar */}
            <div
              style={{
                background: "rgba(2, 6, 23, 0.8)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: 12,
                padding: "14px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#FCA5A5", fontSize: 14 }}>
                RL optimization for raw coding speed directly eroded broader conversational subtlety.
              </span>
              <span style={{ color: "#EF4444", fontSize: 14, fontWeight: 800 }}>
                CRITICAL TRADE-OFF IDENTIFIED
              </span>
            </div>
          </div>
        </MacDossierWindow>
      )}

      {isBeat2 && (
        // BEAT 2: Multimodal Computer Vision Gap
        <MacDossierWindow
          title="MULTIMODAL AUDIT • COMPUTER VISION ENGINE"
          url="x.ai/audit/multimodal-capabilities"
          badgeText="VISION GAP"
          badgeColor="#F59E0B"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "40px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#F59E0B", letterSpacing: "0.08em" }}>
                ARCHITECTURAL LIMITATION
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: "6px 0 0" }}>
                MULTIMODAL COMPUTER VISION REMAINS BEHIND
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, margin: "30px 0", flex: 1 }}>
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "1.5px solid rgba(51, 65, 85, 0.7)",
                  borderRadius: 14,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <OpenAILogo size={26} color="#10A37F" />
                    <GoogleOfficialLogo size={24} />
                    <strong style={{ fontSize: 18, color: "#FFFFFF" }}>OpenAI & Google Vision</strong>
                  </div>
                  <div style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8 }}>
                    • Flawless OCR and architectural schematic diagram reading
                    <br />
                    • Sub-pixel bounding box localization in complex UI design
                    <br />
                    • Deep multimodal chain-of-thought grounding
                  </div>
                </div>
                <div style={{ color: "#10B981", fontSize: 13, fontWeight: 700 }}>
                  INDUSTRY FRONTIER LEADERS
                </div>
              </div>

              <div
                style={{
                  background: "rgba(245, 158, 11, 0.1)",
                  border: "1.5px solid #F59E0B",
                  borderRadius: 14,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <XAIOfficialLogo size={26} color="#FFFFFF" />
                    <strong style={{ fontSize: 18, color: "#FFFFFF" }}>Grok 4.7 Vision</strong>
                  </div>
                  <div style={{ fontSize: 15, color: "#E2E8F0", lineHeight: 1.8 }}>
                    • Functional on standard image comprehension
                    <br />
                    • Hallucinates on dense technical circuit diagrams
                    <br />
                    • Musk confirmed multimodal rebuild planned for Grok 4.8
                  </div>
                </div>
                <div style={{ color: "#F59E0B", fontSize: 13, fontWeight: 700 }}>
                  SCHEDULED FOR GROK 4.8 COMPLETE OVERHAUL
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(2, 6, 23, 0.8)",
                borderRadius: 10,
                padding: "14px 24px",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                color: "#FDE68A",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Musk: "Grok 4.7 is roughly on par with Opus 5.0, but multimodality needs significant work which will ship in 4.8."
            </div>
          </div>
        </MacDossierWindow>
      )}

      {!isBeat1 && !isBeat2 && (
        // BEAT 3: The Green Dominance Board (Harvey Legal Agent & Electrical Engineering)
        <MacDossierWindow
          title="HIGH-VALUE DOMAINS • WHERE GROK 4.7 CRUSHES THE COMPETITION"
          url="x.ai/benchmarks/harvey-legal-and-eebench"
          badgeText="MASSIVE DOMINANCE"
          badgeColor="#10B981"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "40px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#10B981", letterSpacing: "0.08em" }}>
                SPECIALIZED FRONTIER STRENGTHS
              </span>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", margin: "6px 0 0" }}>
                LEGAL REASONING & HARDWARE DOMINANCE
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, margin: "30px 0" }}>
              {/* Harvey Legal */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(2, 6, 23, 0.9) 100%)",
                  border: "2px solid #10B981",
                  borderRadius: 16,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#10B981" }}>HARVEY LEGAL AGENT</div>
                  <div style={{ fontSize: 56, fontWeight: 900, color: "#10B981", margin: "16px 0 8px" }}>
                    19.6%
                  </div>
                  <div style={{ fontSize: 16, color: "#E2E8F0" }}>
                    Crushes Claude Fable 5.1 (<strong>6.7%</strong>) and GPT-5.6 Sol (<strong>2.5%</strong>) with a 3X advantage.
                  </div>
                </div>
                <div style={{ color: "#34D399", fontSize: 14, fontWeight: 800, marginTop: 20 }}>
                  🏆 3X HIGHER THAN ANTHROPIC FRONTIER
                </div>
              </div>

              {/* EEBench Hard Hardware */}
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(2, 6, 23, 0.9) 100%)",
                  border: "2px solid #38BDF8",
                  borderRadius: 16,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#38BDF8" }}>EEBENCH AGENT WORKLOADS</div>
                  <div style={{ fontSize: 56, fontWeight: 900, color: "#38BDF8", margin: "16px 0 8px" }}>
                    64.0%
                  </div>
                  <div style={{ fontSize: 16, color: "#E2E8F0" }}>
                    Beats Claude Opus 5 (<strong>61.6%</strong>) and Fable 5.1 (<strong>56.4%</strong>) on electrical circuit design.
                  </div>
                </div>
                <div style={{ color: "#38BDF8", fontSize: 14, fontWeight: 800, marginTop: 20 }}>
                  🏆 RANK #2 ON GLOBAL LEADERBOARD
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(2, 6, 23, 0.8)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                borderRadius: 12,
                padding: "14px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#E2E8F0", fontSize: 15 }}>
                For specialized industrial workloads (law, electrical engineering, software pipelines), Grok 4.7 is a definitive winner.
              </span>
              <span style={{ color: "#10B981", fontSize: 15, fontWeight: 800 }}>
                DAILY WORKHORSE VERIFIED
              </span>
            </div>
          </div>
        </MacDossierWindow>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// ACT 6: STRATEGIC HYPOCRISY & THE ROAD TO GROK 4.8
// Duration: 1175 frames (04:47.77 -> 05:26.93)
// =========================================================================
export const Act6RoadToGrok48: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: 0 -> 554 (Rajath Gowda Viral Tweet on Slowdown Hypocrisy)
  // Beat 2: 554 -> 1175 (Grok 4.8 2.5T Confirmation & Final Verdict)
  const isBeat1 = frame < 554;
  const beatFrame = isBeat1 ? frame : frame - 554;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",
        }}
      />

      {isBeat1 && (
        // BEAT 1: Rajath Gowda's Viral Tweet (Flat Native View, Golden Highlighter, NO Cutoffs)
        <MacDossierWindow
          title="VIRAL INDUSTRY REACTION • @buildwithrajath"
          url="x.com/buildwithrajath/status/2099039261253358013"
          badgeText="THE SLOWDOWN THEATER"
          badgeColor="#F59E0B"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background: "#000000",
            }}
          >
            <div
              style={{
                transform: `scale(${interpolate(beatFrame, [0, 554], [1.0, 1.02])})`,
                maxHeight: 890,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Img
                src={staticFile("evidence/rajath_tweet.png")}
                style={{
                  maxHeight: 880,
                  width: "auto",
                  borderRadius: 12,
                  boxShadow: "0 25px 70px rgba(0,0,0,0.9)",
                }}
              />

              {/* Digital Golden Highlighter Sweep over the Climax */}
              <div
                style={{
                  position: "absolute",
                  bottom: 110,
                  left: 20,
                  right: 20,
                  height: 90,
                  background: "rgba(245, 158, 11, 0.25)",
                  border: "2px solid #F59E0B",
                  borderRadius: 8,
                  opacity: interpolate(beatFrame, [30, 60], [0, 1], { extrapolateRight: "clamp" }),
                }}
              />
            </div>

            {/* Float Badge */}
            <div
              style={{
                position: "absolute",
                top: 40,
                right: 40,
                background: "rgba(15, 23, 42, 0.95)",
                border: "1.5px solid #F59E0B",
                borderRadius: 12,
                padding: "14px 24px",
                color: "#F59E0B",
                fontWeight: 900,
                fontSize: 16,
              }}
            >
              "THEY ARE FLOORING THE ACCELERATOR!"
            </div>
          </div>
        </MacDossierWindow>
      )}

      {!isBeat1 && (
        // BEAT 2: Grok 4.8 2.5T Architecture Blueprint & Final Climax
        <MacDossierWindow
          title="FUTURE ROADMAP • GROK 4.8 CONFIRMED & FRONTIER PARADIGM SHIFT"
          url="x.ai/roadmap/grok-4-8-architecture"
          badgeText="GROK 4.8 IMMINENT"
          badgeColor="#38BDF8"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "40px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#38BDF8", letterSpacing: "0.08em" }}>
                    NEXT-GENERATION FRONTIER MODEL
                  </span>
                  <h2 style={{ fontSize: 38, fontWeight: 900, color: "#FFFFFF", margin: "6px 0 0" }}>
                    MUSK CONFIRMS GROK 4.8
                  </h2>
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  <XAIOfficialLogo size={36} color="#FFFFFF" />
                  <OpenAILogo size={34} color="#10A37F" />
                  <AnthropicOfficialLogo size={32} color="#D97706" />
                  <GoogleOfficialLogo size={32} />
                </div>
              </div>
            </div>

            {/* 3 Pillar Specs of Grok 4.8 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30, margin: "20px 0" }}>
              <div
                style={{
                  background: "rgba(14, 165, 233, 0.12)",
                  border: "1.5px solid #38BDF8",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 800, color: "#38BDF8" }}>MODEL SCALE</div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", margin: "14px 0 6px" }}>
                  2.5T
                </div>
                <div style={{ fontSize: 14, color: "#94A3B8" }}>
                  2.5 Trillion Parameters trained on a proprietary high-speed custom C++ software stack.
                </div>
              </div>

              <div
                style={{
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1.5px solid #10B981",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 800, color: "#10B981" }}>TRAINING STATUS</div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#10B981", margin: "14px 0 6px" }}>
                  DONE
                </div>
                <div style={{ fontSize: 14, color: "#94A3B8" }}>
                  Pre-training completed. Currently undergoing reinforcement learning & multimodal alignment.
                </div>
              </div>

              <div
                style={{
                  background: "rgba(245, 158, 11, 0.12)",
                  border: "1.5px solid #F59E0B",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 800, color: "#F59E0B" }}>THE FRONTIER MYTH</div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#F59E0B", margin: "14px 0 6px" }}>
                  DEAD
                </div>
                <div style={{ fontSize: 14, color: "#94A3B8" }}>
                  The illusion that frontier reasoning requires $50/M tokens is permanently broken.
                </div>
              </div>
            </div>

            {/* Epic Conclusion Banner */}
            <div
              style={{
                background: "linear-gradient(90deg, rgba(14, 165, 233, 0.25) 0%, rgba(16, 185, 129, 0.25) 100%)",
                border: "2px solid #38BDF8",
                borderRadius: 14,
                padding: "20px 32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 0 40px rgba(56, 189, 248, 0.2)",
              }}
            >
              <div>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#FFFFFF" }}>
                  THE AI RACE HASN'T SLOWED DOWN
                </div>
                <div style={{ fontSize: 14, color: "#94A3B8", marginTop: 4 }}>
                  It just became exponentially cheaper, brutally competitive, and impossible to ignore.
                </div>
              </div>
              <div
                style={{
                  background: "#38BDF8",
                  color: "#020617",
                  padding: "10px 24px",
                  borderRadius: 8,
                  fontWeight: 900,
                  fontSize: 14,
                  letterSpacing: "0.06em",
                }}
              >
                THE NEW FRONTIER REALITY
              </div>
            </div>
          </div>
        </MacDossierWindow>
      )}
    </AbsoluteFill>
  );
};
