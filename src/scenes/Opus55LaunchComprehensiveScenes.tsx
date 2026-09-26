import React from "react";
import {
  AbsoluteFill,
  Series,
  staticFile,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Img,
  Video,
} from "remotion";
import { VideoPlayerView } from "../components/VideoPlayerView";
import {
  AnthropicLogo,
  ClaudeSparkLogo,
  OpenAILogo,
  GoogleOfficialLogo,
} from "../components/RealLogos";
import { MotionBackground } from "../components/MotionBackground";
import { YouTubeAnalyticsCTA } from "../components/YouTubeAnalyticsCTA";
import {
  Zap,
  Shield,
  Cpu,
  TrendingUp,
  CheckCircle2,
  Terminal,
  Code2,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  Database,
  Gauge,
  Award,
  BarChart3,
  Server,
  Activity,
} from "lucide-react";

// =========================================================================
// ACT 1: COLD-OPEN HOOK & DISRUPTIVE LEAPFROG (1346 frames | 0.0s -> 44.86s)
// =========================================================================
export const Act1_ColdOpenHook: React.FC<{ durationInFrames: number }> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <Series>
      {/* Beat 1.1: Cold-Open Launch Video Split Screen (450 frames | 0s -> 15s) */}
      <Series.Sequence durationInFrames={450}>
        <AbsoluteFill style={{ backgroundColor: "#030712", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(245, 158, 11, 0.4)" secondaryColor="rgba(217, 119, 6, 0.25)" />

          {/* Ambient blurred backdrop video */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.35, filter: "blur(50px)" }}>
            <Video
              src={staticFile("evidence/claude_opus55_official_launch.mp4")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              muted={true}
              volume={0}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: 50,
              left: 80,
              right: 80,
              bottom: 50,
              display: "flex",
              gap: 40,
              alignItems: "center",
              zIndex: 10,
            }}
          >
            {/* Left Column: Official Launch Video Player (1.1fr) */}
            <div
              style={{
                flex: 1.1,
                height: "100%",
                background: "#090E1A",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(0,0,0,0.85)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: 48,
                  background: "#050811",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 20px",
                }}
              >
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
                </div>
                <div
                  style={{
                    background: "rgba(15,23,42,0.8)",
                    border: "1px solid rgba(245,158,11,0.3)",
                    borderRadius: 16,
                    padding: "4px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    color: "#94A3B8",
                  }}
                >
                  <Lock size={12} color="#10B981" />
                  <span style={{ color: "#F59E0B", fontWeight: 600 }}>anthropic.com/claude-opus-5-5</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", letterSpacing: 1.2 }}>
                  OFFICIAL REVEAL
                </div>
              </div>
              <div style={{ flex: 1, position: "relative", background: "#000" }}>
                <Video
                  src={staticFile("evidence/claude_opus55_official_launch.mp4")}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  muted={true}
                  volume={0}
                />
              </div>
            </div>

            {/* Right Column: Disruptive Telemetry & Kinetic Hook (0.9fr) */}
            <div
              style={{
                flex: 0.9,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px 0",
              }}
            >
              {/* Header Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(245, 158, 11, 0.15)",
                  border: "1px solid rgba(245, 158, 11, 0.5)",
                  borderRadius: 30,
                  padding: "8px 24px",
                  alignSelf: "flex-start",
                }}
              >
                <ClaudeSparkLogo size={24} color="#F59E0B" />
                <span style={{ color: "#F59E0B", fontWeight: 800, fontSize: 14, letterSpacing: 1.5 }}>
                  NEW FRONTIER BASELINE · SEPTEMBER 2026
                </span>
              </div>

              {/* Kinetic Headlines */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div
                  style={{
                    fontSize: 64,
                    fontWeight: 900,
                    color: "#FFFFFF",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                  }}
                >
                  CLAUDE OPUS <span style={{ color: "#F59E0B" }}>5.5</span>
                </div>
                <div style={{ fontSize: 24, color: "#94A3B8", fontWeight: 500 }}>
                  ROADMAP LEAPFROG · FIRST OF CLAUDE 5.5 FAMILY
                </div>
              </div>

              {/* 3 Metric Chips */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div
                  style={{
                    background: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                    borderRadius: 16,
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <Zap size={28} color="#F59E0B" />
                    <div>
                      <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 18 }}>OPERATING COST</div>
                      <div style={{ color: "#94A3B8", fontSize: 13 }}>vs Claude Opus 5 Baseline</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "#10B981" }}>-40%</div>
                </div>

                <div
                  style={{
                    background: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    borderRadius: 16,
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <Terminal size={28} color="#38BDF8" />
                    <div>
                      <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 18 }}>TERMINAL-BENCH 4.0</div>
                      <div style={{ color: "#94A3B8", fontSize: 13 }}>Crushes GPT-6 Astra (57.9%)</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "#38BDF8" }}>66.4%</div>
                </div>

                <div
                  style={{
                    background: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    borderRadius: 16,
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <Cpu size={28} color="#A855F7" />
                    <div>
                      <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 18 }}>REASONING PARITY</div>
                      <div style={{ color: "#94A3B8", fontSize: 13 }}>At 40% Lower Compute</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#A855F7" }}>FABLE 5.1</div>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 1.2: 16:9 Website Screen Recording (450 frames | 15s -> 30s) */}
      <Series.Sequence durationInFrames={450}>
        <VideoPlayerView
          videoSrc="evidence/anthropic_website_scroll.mp4"
          title="ANTHROPIC OFFICIAL REVEAL · CLAUDE OPUS 5.5"
          durationInFrames={450}
          badge="LIVE DOCUMENTARY PROOF"
          aspectRatio="cover"
        />
      </Series.Sequence>

      {/* Beat 1.3: Tweet 1 Clean Evidence Card (446 frames | 30s -> 44.86s) */}
      <Series.Sequence durationInFrames={446}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(245, 158, 11, 0.35)" secondaryColor="rgba(56, 189, 248, 0.25)" />
          <div
            style={{
              width: 1760,
              height: 960,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <Img
              src={staticFile("evidence/tweet_01_claude_launch.png")}
              style={{ width: "100%", height: "auto", borderRadius: 24, boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}
            />
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 2: ETHAN MOLLICK TEST & 680K CODE MIGRATION (1674 frames | 44.86s -> 100.66s)
// =========================================================================
export const Act2_EarlyAccessShock: React.FC<{ durationInFrames: number }> = () => {
  return (
    <Series>
      {/* Beat 2.1: Ethan Mollick Tweet Card (550 frames | 44.86s -> 63.2s) */}
      <Series.Sequence durationInFrames={550}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(56, 189, 248, 0.35)" secondaryColor="rgba(168, 85, 247, 0.25)" />
          <div
            style={{
              width: 1760,
              height: 960,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <Img
              src={staticFile("evidence/tweet_02_emollick_test.png")}
              style={{ width: "100%", height: "auto", borderRadius: 24, boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}
            />
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 2.2: Ethan Mollick Live WebGL Shader Video (550 frames | 63.2s -> 81.5s) */}
      <Series.Sequence durationInFrames={550}>
        <VideoPlayerView
          videoSrc="evidence/emollick_twigl_shader.mp4"
          title="ETHAN MOLLICK HANDS-ON · 3D PROCEDURAL SHADER IN CLAUDE"
          durationInFrames={550}
          badge="REAL WEBGL CODE GENERATION"
          aspectRatio="contain"
        />
      </Series.Sequence>

      {/* Beat 2.3: 680k-Line Code Migration Dossier (574 frames | 81.5s -> 100.66s) */}
      <Series.Sequence durationInFrames={574}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(16, 185, 129, 0.35)" secondaryColor="rgba(56, 189, 248, 0.25)" />

          <div
            style={{
              width: 1760,
              height: 960,
              background: "#090E1A",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              zIndex: 10,
            }}
          >
            {/* Window Header */}
            <div
              style={{
                height: 52,
                background: "#050811",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 28px",
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#EF4444" }} />
                <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#FFBD2E" }} />
                <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#10B981" }} />
              </div>
              <div
                style={{
                  background: "rgba(15,23,42,0.8)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: 18,
                  padding: "5px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 14,
                  color: "#94A3B8",
                }}
              >
                <Lock size={13} color="#10B981" />
                <span style={{ color: "#10B981", fontWeight: 600 }}>audit.anthropic.internal/code-migration</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#10B981", letterSpacing: 1.5 }}>
                ENTERPRISE STRESS TEST
              </div>
            </div>

            {/* Content Body */}
            <div style={{ flex: 1, padding: 48, display: "flex", gap: 48 }}>
              {/* Left Pane: Terminal Simulation */}
              <div
                style={{
                  flex: 1.2,
                  background: "#02040A",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: 28,
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontSize: 18,
                  color: "#E2E8F0",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ color: "#64748B", fontSize: 14 }}>$ claude-code migrate --target rust --strict</div>
                <div style={{ color: "#10B981" }}>✓ Ingesting AST: 680,000 LOC across 412 modules</div>
                <div style={{ color: "#38BDF8" }}>✓ Resolving circular dependencies: 1,842 nodes resolved</div>
                <div style={{ color: "#F59E0B" }}>→ Optimization pass: Cutting multi-page load latency...</div>
                <div style={{ color: "#10B981", fontWeight: 700 }}>✓ Result: 39 of 40 test suites passed (97.5%)</div>
                <div style={{ color: "#A855F7" }}>✓ Zero behavioral regressions introduced</div>
                <div style={{ color: "#94A3B8", fontSize: 14, marginTop: "auto" }}>
                  Completed in: 23 hours 42 mins (vs Weeks of human team hours)
                </div>
              </div>

              {/* Right Pane: Key Metric Highlights */}
              <div style={{ flex: 0.8, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div
                  style={{
                    background: "rgba(15,23,42,0.8)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div style={{ fontSize: 14, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1 }}>
                    Legacy Code Migration
                  </div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>
                    680,000 <span style={{ fontSize: 22, color: "#10B981" }}>LOC</span>
                  </div>
                  <div style={{ fontSize: 15, color: "#64748B", marginTop: 4 }}>Completed in under 24 hours</div>
                </div>

                <div
                  style={{
                    background: "rgba(15,23,42,0.8)",
                    border: "1px solid rgba(56,189,248,0.3)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div style={{ fontSize: 14, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1 }}>
                    Web Performance Audits
                  </div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#38BDF8", marginTop: 8 }}>
                    39 / 40 <span style={{ fontSize: 20, color: "#FFFFFF" }}>FIXES</span>
                  </div>
                  <div style={{ fontSize: 15, color: "#64748B", marginTop: 4 }}>Opus 5 altered app behaviors</div>
                </div>

                <div
                  style={{
                    background: "rgba(15,23,42,0.8)",
                    border: "1px solid rgba(245,158,11,0.3)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div style={{ fontSize: 14, color: "#94A3B8", textTransform: "uppercase", letterSpacing: 1 }}>
                    200k LOC Audit
                  </div>
                  <div style={{ fontSize: 44, fontWeight: 900, color: "#F59E0B", marginTop: 8 }}>
                    &lt;3 HOURS <span style={{ fontSize: 18, color: "#FFFFFF" }}>(vs 20h)</span>
                  </div>
                  <div style={{ fontSize: 15, color: "#64748B", marginTop: 4 }}>60% token efficiency gain</div>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 3: BENCHMARK FORENSICS (1697 frames | 100.66s -> 157.24s)
// =========================================================================
export const Act3_BenchmarkForensics: React.FC<{ durationInFrames: number }> = () => {
  return (
    <Series>
      {/* Beat 3.1: Tweet 3 Card Full Screen (270 frames | 100.66s -> 109.66s) */}
      <Series.Sequence durationInFrames={270}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(245, 158, 11, 0.35)" secondaryColor="rgba(56, 189, 248, 0.25)" />
          <div style={{ width: 1760, height: 960, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10 }}>
            <Img
              src={staticFile("evidence/tweet_03_claude_benchmarks.png")}
              style={{ width: "100%", height: "auto", borderRadius: 24, boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}
            />
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 3.1b: Full-Size Official Benchmark Overview Chart (280 frames | 109.66s -> 119.0s) */}
      <Series.Sequence durationInFrames={280}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(245, 158, 11, 0.35)" secondaryColor="rgba(56, 189, 248, 0.25)" />
          <div
            style={{
              width: 1760,
              height: 960,
              background: "#090E1A",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              zIndex: 10,
            }}
          >
            <div
              style={{
                height: 52,
                background: "#050811",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 28px",
              }}
            >
              <span style={{ color: "#F59E0B", fontWeight: 800, fontSize: 14, letterSpacing: 1 }}>
                OFFICIAL ANTHROPIC BENCHMARK MATRIX
              </span>
              <span style={{ color: "#94A3B8", fontSize: 13 }}>Tested by METR & Frontier Design</span>
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", background: "#050810", padding: 16 }}>
              <Img
                src={staticFile("evidence/claude_benchmarks_overview.png")}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 3.2: Terminal-Bench 4.0 Shootout Bar Chart (600 frames | 119.0s -> 139.0s) */}
      <Series.Sequence durationInFrames={600}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(56, 189, 248, 0.35)" secondaryColor="rgba(245, 158, 11, 0.3)" />

          <div
            style={{
              width: 1760,
              height: 960,
              background: "#090E1A",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              padding: 48,
              zIndex: 10,
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
              <div>
                <div style={{ fontSize: 14, color: "#38BDF8", fontWeight: 800, letterSpacing: 2 }}>
                  AGENTIC CODING FRONTIER
                </div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: 4 }}>
                  Terminal-Bench 4.0 Shootout
                </div>
              </div>
              <div
                style={{
                  background: "rgba(56,189,248,0.15)",
                  border: "1px solid rgba(56,189,248,0.4)",
                  borderRadius: 20,
                  padding: "8px 20px",
                  fontSize: 14,
                  color: "#38BDF8",
                  fontWeight: 700,
                }}
              >
                AUTONOMOUS BASH ENVIRONMENT
              </div>
            </div>

            {/* 4 Comparative Horizontal Bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32, flex: 1, justifyContent: "center" }}>
              {/* Bar 1: Claude Opus 5.5 (Gold Winner) */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <ClaudeSparkLogo size={28} color="#F59E0B" />
                    <span style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF" }}>Claude Opus 5.5</span>
                    <span style={{ fontSize: 13, color: "#F59E0B", background: "rgba(245,158,11,0.2)", padding: "4px 10px", borderRadius: 6, fontWeight: 800 }}>
                      +8.5% WIN MARGIN
                    </span>
                  </div>
                  <span style={{ fontSize: 36, fontWeight: 900, color: "#F59E0B" }}>66.4%</span>
                </div>
                <div style={{ height: 36, background: "rgba(255,255,255,0.06)", borderRadius: 10, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: "66.4%",
                      background: "linear-gradient(90deg, #D97706 0%, #F59E0B 100%)",
                      borderRadius: 10,
                      boxShadow: "0 0 30px rgba(245,158,11,0.6)",
                    }}
                  />
                </div>
              </div>

              {/* Bar 2: GPT-6 Astra */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <OpenAILogo size={26} color="#10A37F" />
                    <span style={{ fontSize: 22, fontWeight: 700, color: "#E2E8F0" }}>OpenAI GPT-6 Astra</span>
                  </div>
                  <span style={{ fontSize: 32, fontWeight: 800, color: "#10A37F" }}>57.9%</span>
                </div>
                <div style={{ height: 30, background: "rgba(255,255,255,0.06)", borderRadius: 8, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: "57.9%",
                      background: "linear-gradient(90deg, #059669 0%, #10A37F 100%)",
                      borderRadius: 8,
                    }}
                  />
                </div>
              </div>

              {/* Bar 3: Claude Fable 5.1 */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <AnthropicLogo size={24} color="#A855F7" />
                    <span style={{ fontSize: 22, fontWeight: 700, color: "#CBD5E1" }}>Claude Fable 5.1</span>
                  </div>
                  <span style={{ fontSize: 32, fontWeight: 800, color: "#A855F7" }}>55.8%</span>
                </div>
                <div style={{ height: 28, background: "rgba(255,255,255,0.06)", borderRadius: 8, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: "55.8%",
                      background: "linear-gradient(90deg, #7E22CE 0%, #A855F7 100%)",
                      borderRadius: 8,
                    }}
                  />
                </div>
              </div>

              {/* Bar 4: Claude Opus 5 Baseline */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <AnthropicLogo size={24} color="#64748B" />
                    <span style={{ fontSize: 22, fontWeight: 600, color: "#94A3B8" }}>Claude Opus 5 (Prior Gen)</span>
                  </div>
                  <span style={{ fontSize: 30, fontWeight: 700, color: "#64748B" }}>52.3%</span>
                </div>
                <div style={{ height: 26, background: "rgba(255,255,255,0.06)", borderRadius: 8, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: "52.3%",
                      background: "#475569",
                      borderRadius: 8,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 3.3: Multidisciplinary & Computer Use Grid (547 frames | 139.0s -> 157.24s) */}
      <Series.Sequence durationInFrames={547}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(168, 85, 247, 0.35)" secondaryColor="rgba(56, 189, 248, 0.3)" />

          <div
            style={{
              width: 1760,
              height: 960,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              zIndex: 10,
            }}
          >
            {/* Card 1: CursorBench 4.0 */}
            <div
              style={{
                background: "#090E1A",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                borderRadius: 20,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              }}
            >
              <div>
                <div style={{ color: "#38BDF8", fontSize: 14, fontWeight: 800, letterSpacing: 1.5 }}>
                  IDE CODE REFACTORING
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", marginTop: 6 }}>
                  CursorBench 4.0
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontSize: 68, fontWeight: 900, color: "#38BDF8" }}>57.8%</span>
                <span style={{ fontSize: 20, color: "#10B981", fontWeight: 700 }}>+11 pts vs GPT-5.6 Sol</span>
              </div>
              <div style={{ color: "#94A3B8", fontSize: 16 }}>
                Delivers top score at one-third the token cost of frontier competitors.
              </div>
            </div>

            {/* Card 2: FrontierCode v1.1 */}
            <div
              style={{
                background: "#090E1A",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                borderRadius: 20,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              }}
            >
              <div>
                <div style={{ color: "#F59E0B", fontSize: 14, fontWeight: 800, letterSpacing: 1.5 }}>
                  COMPLEX REPOSITORY AUDIT
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", marginTop: 6 }}>
                  FrontierCode v1.1
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontSize: 68, fontWeight: 900, color: "#F59E0B" }}>54.4%</span>
                <span style={{ fontSize: 20, color: "#F59E0B", fontWeight: 700 }}>Beats Astra at 20% Cost</span>
              </div>
              <div style={{ color: "#94A3B8", fontSize: 16 }}>
                Default effort setting outperforms higher effort modes in rival models.
              </div>
            </div>

            {/* Card 3: OSWorld 2.0 (Computer Use) */}
            <div
              style={{
                background: "#090E1A",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                borderRadius: 20,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              }}
            >
              <div>
                <div style={{ color: "#10B981", fontSize: 14, fontWeight: 800, letterSpacing: 1.5 }}>
                  AUTONOMOUS GUI CONTROL
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", marginTop: 6 }}>
                  OSWorld 2.0
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontSize: 68, fontWeight: 900, color: "#10B981" }}>81.8%</span>
                <span style={{ fontSize: 20, color: "#10B981", fontWeight: 700 }}>Industry Leading</span>
              </div>
              <div style={{ color: "#94A3B8", fontSize: 16 }}>
                Seamless operating system navigation, terminal tools, and browser automation.
              </div>
            </div>

            {/* Card 4: Humanity's Last Exam */}
            <div
              style={{
                background: "#090E1A",
                border: "1px solid rgba(168, 85, 247, 0.35)",
                borderRadius: 20,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              }}
            >
              <div>
                <div style={{ color: "#A855F7", fontSize: 14, fontWeight: 800, letterSpacing: 1.5 }}>
                  ADVANCED REASONING
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", marginTop: 6 }}>
                  Humanity's Last Exam
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontSize: 68, fontWeight: 900, color: "#A855F7" }}>67.7%</span>
                <span style={{ fontSize: 20, color: "#A855F7", fontWeight: 700 }}>With Integrated Tools</span>
              </div>
              <div style={{ color: "#94A3B8", fontSize: 16 }}>
                GDPval-AA v2.1 score of 1846—the highest reasoning metric ever recorded.
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 4: THE 40% ECONOMIC COLLAPSE (2103 frames | 157.24s -> 227.34s)
// =========================================================================
export const Act4_EconomicCollapse: React.FC<{ durationInFrames: number }> = () => {
  return (
    <Series>
      {/* Beat 4.1a: Tweet 4 Pricing Card Full View (300 frames | 157.24s -> 167.24s) */}
      <Series.Sequence durationInFrames={300}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(16, 185, 129, 0.4)" secondaryColor="rgba(245, 158, 11, 0.3)" />
          <div style={{ width: 1760, height: 960, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10 }}>
            <Img
              src={staticFile("evidence/tweet_04_claude_pricing.png")}
              style={{ width: "100%", height: "auto", borderRadius: 24, boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}
            />
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 4.1b: Full-Size Pricing Breakdown Table Card (350 frames | 167.24s -> 178.9s) */}
      <Series.Sequence durationInFrames={350}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(16, 185, 129, 0.4)" secondaryColor="rgba(245, 158, 11, 0.3)" />

          <div
            style={{
              width: 1760,
              height: 960,
              background: "#090E1A",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              padding: 48,
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
              <div>
                <div style={{ fontSize: 14, color: "#10B981", fontWeight: 800, letterSpacing: 2 }}>
                  OFFICIAL TOKEN PRICING SCHEDULE
                </div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: 4 }}>
                  The 40% Workload Cost Collapse
                </div>
              </div>
              <div
                style={{
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.4)",
                  borderRadius: 20,
                  padding: "8px 20px",
                  fontSize: 14,
                  color: "#10B981",
                  fontWeight: 700,
                }}
              >
                PER 1 MILLION TOKENS
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, flex: 1 }}>
              {/* Row 1: Cache Reads (-60%) */}
              <div
                style={{
                  background: "rgba(16,185,129,0.12)",
                  border: "2px solid rgba(16,185,129,0.5)",
                  borderRadius: 18,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF" }}>Prompt Cache Reads</span>
                    <span style={{ fontSize: 14, color: "#10B981", background: "rgba(16,185,129,0.2)", padding: "4px 10px", borderRadius: 6, fontWeight: 800 }}>
                      -60% DISCOUNT
                    </span>
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: 15, marginTop: 6 }}>
                    Dominates 80%+ of agentic and coding token budgets
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                  <span style={{ fontSize: 56, fontWeight: 900, color: "#10B981" }}>$0.20</span>
                  <span style={{ fontSize: 22, color: "#64748B", textDecoration: "line-through" }}>$0.50</span>
                </div>
              </div>

              {/* Row 2: Input Tokens (-20%) */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 18,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF" }}>Input Tokens</span>
                    <span style={{ fontSize: 14, color: "#38BDF8", background: "rgba(56,189,248,0.2)", padding: "4px 10px", borderRadius: 6, fontWeight: 800 }}>
                      -20% DROP
                    </span>
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: 15, marginTop: 6 }}>
                    Standard multi-turn prompts and instructions
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                  <span style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF" }}>$4.00</span>
                  <span style={{ fontSize: 22, color: "#64748B", textDecoration: "line-through" }}>$5.00</span>
                </div>
              </div>

              {/* Row 3: Output Tokens (-20%) */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 18,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF" }}>Output Tokens</span>
                    <span style={{ fontSize: 14, color: "#38BDF8", background: "rgba(56,189,248,0.2)", padding: "4px 10px", borderRadius: 6, fontWeight: 800 }}>
                      -20% DROP
                    </span>
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: 15, marginTop: 6 }}>
                    Autonomous generation, code synthesis, and diffs
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                  <span style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF" }}>$20.00</span>
                  <span style={{ fontSize: 22, color: "#64748B", textDecoration: "line-through" }}>$25.00</span>
                </div>
              </div>

              {/* Row 4: Cache Writes (-20%) */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 18,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF" }}>Cache Writes</span>
                    <span style={{ fontSize: 14, color: "#38BDF8", background: "rgba(56,189,248,0.2)", padding: "4px 10px", borderRadius: 6, fontWeight: 800 }}>
                      -20% DROP
                    </span>
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: 15, marginTop: 6 }}>
                    Session context initialization and checkpointing
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                  <span style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF" }}>$5.00</span>
                  <span style={{ fontSize: 22, color: "#64748B", textDecoration: "line-through" }}>$6.25</span>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 4.2: 16:9 Website Recording - Pricing & HAProxy Case Study (800 frames | 178.9s -> 205.6s) */}
      <Series.Sequence durationInFrames={800}>
        <VideoPlayerView
          videoSrc="evidence/anthropic_website_scroll.mp4"
          title="ANTHROPIC SYSTEM REPORT · HAPROXY REWRITE & TOKEN ECONOMICS"
          durationInFrames={800}
          badge="HAPROXY C TO RUST · 51% CHEAPER"
          aspectRatio="cover"
        />
      </Series.Sequence>

      {/* Beat 4.3: Tweet 5 Speed & Cost Card + Fast Mode (653 frames | 205.6s -> 227.34s) */}
      <Series.Sequence durationInFrames={653}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(245, 158, 11, 0.35)" secondaryColor="rgba(56, 189, 248, 0.25)" />

          <div
            style={{
              width: 1760,
              height: 960,
              background: "#090E1A",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              padding: 48,
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
              <div>
                <div style={{ fontSize: 14, color: "#F59E0B", fontWeight: 800, letterSpacing: 2 }}>
                  HIGH-THROUGHPUT EXECUTION
                </div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: 4 }}>
                  Fast Mode & 30% Native Speed Gain
                </div>
              </div>
              <div
                style={{
                  background: "rgba(245,158,11,0.15)",
                  border: "1px solid rgba(245,158,11,0.4)",
                  borderRadius: 20,
                  padding: "8px 20px",
                  fontSize: 14,
                  color: "#F59E0B",
                  fontWeight: 700,
                }}
              >
                CLAUDE CODE & API PLATFORM
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 36, flex: 1 }}>
              {/* Left Column: Cost-Efficiency Frontier Chart */}
              <div
                style={{
                  background: "#050810",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 16,
                }}
              >
                <Img
                  src={staticFile("evidence/cost_efficiency_frontier.png")}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>

              {/* Right Column: Speed & Limit Features */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div
                  style={{
                    background: "rgba(245,158,11,0.08)",
                    border: "1px solid rgba(245,158,11,0.3)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div style={{ color: "#F59E0B", fontSize: 14, fontWeight: 700 }}>2.5X FAST MODE OUTPUT</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>
                    Ultra-Low Latency
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: 15, marginTop: 6 }}>
                    $8 input / $40 output per 1M tokens for real-time agent responses.
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(56,189,248,0.08)",
                    border: "1px solid rgba(56,189,248,0.3)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div style={{ color: "#38BDF8", fontSize: 14, fontWeight: 700 }}>NATIVE GENERATION</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>
                    +30% Faster Output
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: 15, marginTop: 6 }}>
                    Generates tokens 30% faster than Opus 5 at default effort settings.
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div style={{ color: "#10B981", fontSize: 14, fontWeight: 700 }}>SUBSCRIPTION LIMIT RESET</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF", marginTop: 6 }}>
                    Saveable Rate Limit Resets
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: 14, marginTop: 4 }}>
                    Pro, Max, Team, and Enterprise users can store on-demand resets.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 5: NATURAL COMMUNICATION & ALIGNMENT RIGOR (1405 frames | 227.34s -> 274.18s)
// =========================================================================
export const Act5_NaturalCommunication: React.FC<{ durationInFrames: number }> = () => {
  return (
    <Series>
      {/* Beat 5.1a: Tweet 6 Natural Communication Card Full View (300 frames | 227.34s -> 237.34s) */}
      <Series.Sequence durationInFrames={300}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(56, 189, 248, 0.35)" secondaryColor="rgba(245, 158, 11, 0.25)" />
          <div style={{ width: 1760, height: 960, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10 }}>
            <Img
              src={staticFile("evidence/tweet_06_claude_communication.png")}
              style={{ width: "100%", height: "auto", borderRadius: 24, boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}
            />
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 5.1b: Full-Size Natural Style Comparison Chart (350 frames | 237.34s -> 249.0s) */}
      <Series.Sequence durationInFrames={350}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(56, 189, 248, 0.35)" secondaryColor="rgba(245, 158, 11, 0.25)" />
          <div
            style={{
              width: 1760,
              height: 960,
              background: "#090E1A",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              zIndex: 10,
            }}
          >
            <div
              style={{
                height: 52,
                background: "#050811",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 28px",
              }}
            >
              <span style={{ color: "#38BDF8", fontWeight: 800, fontSize: 14, letterSpacing: 1 }}>
                WRITING & REASONING CADENCE AUDIT
              </span>
              <span style={{ color: "#10B981", fontSize: 13 }}>Fixing Dense Academic Phrasing</span>
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", background: "#050810", padding: 16 }}>
              <Img
                src={staticFile("evidence/natural_communication_style.png")}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 5.2: METR & Frontier Design Safety Verification Dossier (755 frames | 249.0s -> 274.18s) */}
      <Series.Sequence durationInFrames={755}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(168, 85, 247, 0.35)" secondaryColor="rgba(16, 185, 129, 0.3)" />

          <div
            style={{
              width: 1760,
              height: 960,
              background: "#090E1A",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              padding: 48,
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
              <div>
                <div style={{ fontSize: 14, color: "#A855F7", fontWeight: 800, letterSpacing: 2 }}>
                  FRONTIER PACING & ALIGNMENT
                </div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: 4 }}>
                  Automated Behavioral Audit Leadership
                </div>
              </div>
              <div
                style={{
                  background: "rgba(168,85,247,0.15)",
                  border: "1px solid rgba(168,85,247,0.4)",
                  borderRadius: 20,
                  padding: "8px 20px",
                  fontSize: 14,
                  color: "#A855F7",
                  fontWeight: 700,
                }}
              >
                METR & FRONTIER DESIGN VERIFIED
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, flex: 1 }}>
              <div
                style={{
                  background: "rgba(15,23,42,0.8)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  borderRadius: 16,
                  padding: 36,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Shield size={44} color="#A855F7" />
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF", marginTop: 18 }}>
                    Behavioral Audit Benchmark
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: 17, marginTop: 12, lineHeight: 1.6 }}>
                    Strongest performance ever recorded across thousands of simulated edge cases, preventing hard-to-reverse autonomous actions and unauthorized boundary traversal.
                  </div>
                </div>
                <div style={{ color: "#10B981", fontWeight: 700, fontSize: 17 }}>
                  ✓ Highly resistant to prompt injection and out-of-boundary tool execution.
                </div>
              </div>

              <div
                style={{
                  background: "rgba(15,23,42,0.8)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: 16,
                  padding: 36,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Award size={44} color="#10B981" />
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#FFFFFF", marginTop: 18 }}>
                    Specialized Verification Programs
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: 17, marginTop: 12, lineHeight: 1.6 }}>
                    Vetted scientific institutions and security practitioners can access frontier capabilities via the Life Sciences and Cyber Verification programs.
                  </div>
                </div>
                <div style={{ color: "#38BDF8", fontWeight: 700, fontSize: 17 }}>
                  ✓ Comparable to Claude Mythos 5.1 in biology and security domain depth.
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 6: THE FRONTIER WAR & ROADMAP RECKONING (874 frames | 274.18s -> 303.29s)
// =========================================================================
export const Act6_FrontierWarRoadmap: React.FC<{ durationInFrames: number }> = () => {
  return (
    <Series>
      {/* Beat 6.1: Sonnet/Haiku Roadmap & 3-Way Frontier Battlefield (450 frames | 274.18s -> 289.2s) */}
      <Series.Sequence durationInFrames={450}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(245, 158, 11, 0.4)" secondaryColor="rgba(56, 189, 248, 0.3)" />

          <div
            style={{
              width: 1760,
              height: 960,
              background: "#090E1A",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              padding: 48,
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
              <div>
                <div style={{ fontSize: 14, color: "#F59E0B", fontWeight: 800, letterSpacing: 2 }}>
                  CLAUDE 5.5 FAMILY ROADMAP
                </div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: 4 }}>
                  The 3-Way Frontier Battlefield
                </div>
              </div>
              <div
                style={{
                  background: "rgba(245,158,11,0.15)",
                  border: "1px solid rgba(245,158,11,0.4)",
                  borderRadius: 20,
                  padding: "8px 20px",
                  fontSize: 14,
                  color: "#F59E0B",
                  fontWeight: 700,
                }}
              >
                AUTUMN 2026 RECKONING
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28, flex: 1 }}>
              {/* Anthropic Column */}
              <div
                style={{
                  background: "rgba(245,158,11,0.06)",
                  border: "2px solid rgba(245,158,11,0.6)",
                  borderRadius: 18,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <ClaudeSparkLogo size={48} color="#F59E0B" />
                    <span style={{ fontSize: 13, color: "#F59E0B", background: "rgba(245,158,11,0.2)", padding: "4px 10px", borderRadius: 6, fontWeight: 800 }}>
                      RELEASED TODAY
                    </span>
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF", marginTop: 16 }}>
                    ANTHROPIC
                  </div>
                  <div style={{ fontSize: 16, color: "#F59E0B", fontWeight: 700, marginTop: 4 }}>
                    Opus 5.5 Flagship
                  </div>
                  <div style={{ fontSize: 15, color: "#94A3B8", marginTop: 14, lineHeight: 1.5 }}>
                    Sonnet 5.5 and Haiku 5.5 launching next, bringing the same 40% operating cost collapse to mid-tier models.
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ background: "rgba(245,158,11,0.12)", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between", fontSize: 14, color: "#FFFFFF" }}>
                    <span>Terminal-Bench</span>
                    <span style={{ color: "#F59E0B", fontWeight: 800 }}>66.4%</span>
                  </div>
                  <div style={{ background: "rgba(245,158,11,0.12)", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between", fontSize: 14, color: "#FFFFFF" }}>
                    <span>Cache Reads</span>
                    <span style={{ color: "#10B981", fontWeight: 800 }}>$0.20 / 1M</span>
                  </div>
                </div>
              </div>

              {/* OpenAI Column */}
              <div
                style={{
                  background: "rgba(16,163,127,0.06)",
                  border: "1px solid rgba(16,163,127,0.3)",
                  borderRadius: 18,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <OpenAILogo size={48} color="#10A37F" />
                    <span style={{ fontSize: 13, color: "#10A37F", background: "rgba(16,163,127,0.2)", padding: "4px 10px", borderRadius: 6, fontWeight: 800 }}>
                      PRESSURE ESCALATING
                    </span>
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF", marginTop: 16 }}>
                    OPENAI
                  </div>
                  <div style={{ fontSize: 16, color: "#10A37F", fontWeight: 700, marginTop: 4 }}>
                    GPT-6 Astra / Sol
                  </div>
                  <div style={{ fontSize: 15, color: "#94A3B8", marginTop: 14, lineHeight: 1.5 }}>
                    Faces immediate enterprise margin squeeze from Anthropic's 60% prompt caching discount.
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ background: "rgba(16,163,127,0.12)", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between", fontSize: 14, color: "#FFFFFF" }}>
                    <span>Terminal-Bench</span>
                    <span style={{ color: "#10A37F", fontWeight: 800 }}>57.9%</span>
                  </div>
                  <div style={{ background: "rgba(16,163,127,0.12)", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between", fontSize: 14, color: "#FFFFFF" }}>
                    <span>Cache Reads</span>
                    <span style={{ color: "#E2E8F0", fontWeight: 700 }}>$0.50 / 1M</span>
                  </div>
                </div>
              </div>

              {/* Google DeepMind Column */}
              <div
                style={{
                  background: "rgba(66,133,244,0.06)",
                  border: "1px solid rgba(66,133,244,0.3)",
                  borderRadius: 18,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <GoogleOfficialLogo size={48} />
                    <span style={{ fontSize: 13, color: "#4285F4", background: "rgba(66,133,244,0.2)", padding: "4px 10px", borderRadius: 6, fontWeight: 800 }}>
                      TPU V6 SCALE
                    </span>
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF", marginTop: 16 }}>
                    GOOGLE DEEPMIND
                  </div>
                  <div style={{ fontSize: 16, color: "#4285F4", fontWeight: 700, marginTop: 4 }}>
                    Gemini 4 Pro / Flash
                  </div>
                  <div style={{ fontSize: 15, color: "#94A3B8", marginTop: 14, lineHeight: 1.5 }}>
                    Massive multi-million token context windows expanding into recursive agentic loops.
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ background: "rgba(66,133,244,0.12)", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between", fontSize: 14, color: "#FFFFFF" }}>
                    <span>Context Window</span>
                    <span style={{ color: "#4285F4", fontWeight: 800 }}>2M Tokens</span>
                  </div>
                  <div style={{ background: "rgba(66,133,244,0.12)", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between", fontSize: 14, color: "#FFFFFF" }}>
                    <span>Inference Architecture</span>
                    <span style={{ color: "#E2E8F0", fontWeight: 700 }}>TPU Ironwood</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 6.2: Final Availability View & YouTube Analytics CTA (424 frames | 289.2s -> 303.29s) */}
      <Series.Sequence durationInFrames={424}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center" }}>
          <MotionBackground primaryColor="rgba(245, 158, 11, 0.45)" secondaryColor="rgba(220, 38, 38, 0.3)" />
          <div
            style={{
              width: 1760,
              height: 960,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <YouTubeAnalyticsCTA />
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};
