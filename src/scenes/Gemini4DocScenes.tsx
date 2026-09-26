import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  Terminal,
  Zap,
  Cpu,
  ShieldAlert,
  Gauge,
  Code2,
  Layers,
  Bot,
  Sparkles,
  CheckCircle2,
  Radio,
  TrendingUp,
  Activity,
  Server,
  ArrowRight,
  Database,
  Network,
  GitBranch,
} from "lucide-react";
import { GoogleOfficialLogo, OpenAILogo, AnthropicLogo } from "../components/RealLogos";

// =========================================================================
// SCENE 1: COLD OPEN HOOK & AUTONOMOUS SUPREMACY
// Duration: 1400 frames (0.00s -> 46.38s)
// =========================================================================
export const Scene1_DocColdOpen: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sub-beat triggers:
  // Beat 1: 0 - 450f (Argon Leak & 256k Output Limit)
  // Beat 2: 450 - 950f (Mountain View Planetary Compute Cluster)
  // Beat 3: 950 - 1400f (Autonomous Agentic Supremacy vs Astra & Fable)
  const isBeat1 = frame < 450;
  const isBeat2 = frame >= 450 && frame < 950;
  const isBeat3 = frame >= 950;

  const beat1Progress = spring({ frame, fps, config: { damping: 14 } });
  const beat2Progress = spring({ frame: frame - 450, fps, config: { damping: 14 } });
  const beat3Progress = spring({ frame: frame - 950, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#060812", overflow: "hidden" }}>
      {/* Dynamic Cyber Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at 50% 30%, rgba(66, 133, 244, 0.18) 0%, rgba(6, 8, 18, 0.98) 75%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.6,
        }}
      />

      {/* BEAT 1: Cold Open Shockwave & Argon Codenamed Leak */}
      {isBeat1 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          {/* Breaking Leak Top Badge */}
          <div
            style={{
              position: "absolute",
              top: 70,
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 24px",
              background: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.6)",
              borderRadius: 30,
              transform: `scale(${beat1Progress})`,
            }}
          >
            <ShieldAlert size={24} color="#EF4444" />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 3,
                color: "#EF4444",
                textTransform: "uppercase",
              }}
            >
              CRITICAL SILICON VALLEY LEAK
            </span>
          </div>

          {/* Center Card: Gemini 4 Pro / Codename Argon */}
          <div
            style={{
              width: 1300,
              height: 600,
              background: "rgba(13, 19, 36, 0.85)",
              border: "1px solid rgba(66, 133, 244, 0.4)",
              borderRadius: 24,
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 80px rgba(66, 133, 244, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${beat1Progress})`,
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <GoogleOfficialLogo size={96} />
            </div>

            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 68,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: 2,
                textAlign: "center",
                lineHeight: 1.1,
              }}
            >
              GEMINI 4 PRO
            </div>

            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 32,
                fontWeight: 700,
                color: "#38BDF8",
                letterSpacing: 6,
                marginTop: 12,
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Sparkles size={28} color="#38BDF8" />
              CODENAME: ARGON
            </div>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "12px 32px",
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                borderRadius: 40,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
              <span style={{ color: "#E2E8F0", fontSize: 20, fontWeight: 600 }}>
                256,000 Native Output Tokens (4X Leap)
              </span>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* BEAT 2: Planetary Compute Cluster Redirection */}
      {isBeat2 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              position: "absolute",
              top: 70,
              color: "#38BDF8",
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            MOUNTAIN VIEW CLUSTER ALLOCATION
          </div>

          <div
            style={{
              width: 1400,
              height: 560,
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: 24,
              padding: 48,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transform: `scale(${beat2Progress})`,
              boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
            }}
          >
            {/* Cluster Status Nodes */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ color: "#E2E8F0", fontSize: 32, fontWeight: 800 }}>
                Planetary Compute Redirection
              </div>
              <div style={{ color: "#94A3B8", fontSize: 20, lineHeight: 1.5 }}>
                Engineers bypassed incremental Flash checkpoints, pooling custom TPU v5p & v6 clusters
                toward Google's largest pre-training run in company history.
              </div>

              <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
                <div
                  style={{
                    padding: "12px 24px",
                    background: "rgba(37, 99, 235, 0.2)",
                    border: "1px solid rgba(37, 99, 235, 0.5)",
                    borderRadius: 16,
                  }}
                >
                  <div style={{ color: "#38BDF8", fontSize: 24, fontWeight: 900 }}>100,000+</div>
                  <div style={{ color: "#94A3B8", fontSize: 14 }}>TPU Accelerators</div>
                </div>

                <div
                  style={{
                    padding: "12px 24px",
                    background: "rgba(16, 185, 129, 0.2)",
                    border: "1px solid rgba(16, 185, 129, 0.5)",
                    borderRadius: 16,
                  }}
                >
                  <div style={{ color: "#34D399", fontSize: 24, fontWeight: 900 }}>ZERO-LAG</div>
                  <div style={{ color: "#94A3B8", fontSize: 14 }}>Optical Interconnect</div>
                </div>
              </div>
            </div>

            {/* Cluster Visual Graph */}
            <div
              style={{
                width: 460,
                height: 420,
                background: "rgba(2, 6, 23, 0.9)",
                borderRadius: 20,
                border: "1px solid rgba(56, 189, 248, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <Server size={64} color="#38BDF8" />
              <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800 }}>
                TPU V6 POD CLUSTER
              </div>
              <div
                style={{
                  padding: "6px 18px",
                  background: "rgba(56, 189, 248, 0.2)",
                  color: "#38BDF8",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                LIVE PRE-TRAINING RUN
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* BEAT 3: Autonomous Supremacy vs Astra & Fable */}
      {isBeat3 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              position: "absolute",
              top: 70,
              color: "#EF4444",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            THE NEW FRONTIER HIERARCHY
          </div>

          <div
            style={{
              width: 1450,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
              transform: `scale(${beat3Progress})`,
            }}
          >
            {/* Claude Fable 5.1 Card */}
            <div
              style={{
                width: 420,
                height: 480,
                background: "rgba(20, 15, 15, 0.8)",
                border: "1px solid rgba(217, 119, 6, 0.4)",
                borderRadius: 20,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AnthropicLogo size={56} />
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#F59E0B", fontSize: 28, fontWeight: 800 }}>
                  Claude Fable 5.1
                </div>
                <div style={{ color: "#94A3B8", fontSize: 18, marginTop: 8 }}>
                  Previous Coding Leader
                </div>
              </div>
              <div
                style={{
                  padding: "8px 20px",
                  background: "rgba(239, 68, 68, 0.2)",
                  color: "#F87171",
                  borderRadius: 20,
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                Trailing on Terminal-Bench
              </div>
            </div>

            {/* VS Emblem */}
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 48,
                fontWeight: 900,
                color: "#38BDF8",
                textShadow: "0 0 20px rgba(56, 189, 248, 0.8)",
              }}
            >
              VS
            </div>

            {/* GPT-6 Astra Card */}
            <div
              style={{
                width: 420,
                height: 480,
                background: "rgba(10, 25, 20, 0.8)",
                border: "1px solid rgba(16, 163, 127, 0.4)",
                borderRadius: 20,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <OpenAILogo size={56} color="#10A37F" />
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#10B981", fontSize: 28, fontWeight: 800 }}>
                  GPT-6 Astra
                </div>
                <div style={{ color: "#94A3B8", fontSize: 18, marginTop: 8 }}>
                  Reasoning Benchmark
                </div>
              </div>
              <div
                style={{
                  padding: "8px 20px",
                  background: "rgba(234, 179, 8, 0.2)",
                  color: "#FDE047",
                  borderRadius: 20,
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                Challenged on Automation
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 2: INSIDE LEAKS & FORENSIC TIMELINE (LENTILS & RAY)
// Duration: 1320 frames (46.38s -> 90.22s)
// =========================================================================
export const Scene2_DocInsideLeaks: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sub-beats:
  // Beat 1: 0 - 550f (Lentils Tweet Inspection with Highlighter)
  // Beat 2: 550 - 950f (256k Full Codebase Ingestion Architecture)
  // Beat 3: 950 - 1320f (Recursive Self-Improvement Loops)
  const isBeat1 = frame < 550;
  const isBeat2 = frame >= 550 && frame < 950;
  const isBeat3 = frame >= 950;

  const beat1Prog = spring({ frame, fps, config: { damping: 14 } });
  const beat2Prog = spring({ frame: frame - 550, fps, config: { damping: 14 } });
  const beat3Prog = spring({ frame: frame - 950, fps, config: { damping: 14 } });

  // Highlighter sweep for Lentils tweet
  const hl1 = interpolate(frame, [80, 160], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const hl2 = interpolate(frame, [180, 260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070A14",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Evidence Source Pill */}
      <div
        style={{
          position: "absolute",
          top: 50,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 24px",
          background: "rgba(56, 189, 248, 0.1)",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          borderRadius: 24,
        }}
      >
        <Radio size={20} color="#38BDF8" />
        <span style={{ color: "#38BDF8", fontSize: 16, fontWeight: 700, letterSpacing: 2 }}>
          VERIFIED LEAK TIMELINE // X.COM
        </span>
      </div>

      {/* BEAT 1: Lentils Tweet Card */}
      {isBeat1 && (
        <div
          style={{
            width: 1340,
            background: "#000000",
            border: "1px solid #2F3336",
            borderRadius: 20,
            padding: 48,
            boxShadow: "0 25px 50px rgba(0,0,0,0.85)",
            transform: `scale(${beat1Prog})`,
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                L
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#E7E9EA", fontSize: 26, fontWeight: 700 }}>Lentils</span>
                  <CheckCircle2 size={22} color="#1D9BF0" fill="#1D9BF0" />
                </div>
                <div style={{ color: "#71767B", fontSize: 18 }}>@Lentils80</div>
              </div>
            </div>

            <div
              style={{
                padding: "6px 16px",
                background: "rgba(29, 155, 240, 0.15)",
                borderRadius: 16,
                color: "#1D9BF0",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              1.4K LIKES • 80 REPOSTS
            </div>
          </div>

          {/* Tweet Text with Dynamic Highlighters */}
          <div
            style={{
              marginTop: 32,
              color: "#E7E9EA",
              fontSize: 30,
              lineHeight: 1.5,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            <div>
              Gemini 4 Pro checkpoints have finally started appearing internally a few days ago.
            </div>

            <div style={{ marginTop: 16 }}>
              This is the first ever output from the model, internally{" "}
              <span
                style={{
                  fontWeight: 700,
                  color: "#FDE047",
                  background: `rgba(245, 166, 35, ${0.45 * hl1})`,
                  padding: "2px 8px",
                  borderRadius: 4,
                }}
              >
                codenamed "argon"
              </span>
              . It took 2.4 minutes on High thinking effort.
            </div>

            <div style={{ marginTop: 16 }}>
              It has a{" "}
              <span
                style={{
                  fontWeight: 700,
                  color: "#38BDF8",
                  background: `rgba(56, 189, 248, ${0.45 * hl2})`,
                  padding: "2px 8px",
                  borderRadius: 4,
                }}
              >
                256k token output limit
              </span>
              , compared to 64k in previous Gemini.
            </div>
          </div>

          <div
            style={{
              marginTop: 36,
              paddingTop: 24,
              borderTop: "1px solid #2F3336",
              display: "flex",
              justifyContent: "space-between",
              color: "#71767B",
              fontSize: 18,
            }}
          >
            <div>10:48 PM • Sep 14, 2026 • Frontier AI Trackers</div>
            <div style={{ display: "flex", gap: 24, color: "#1D9BF0" }}>
              <span>91 Replies</span>
              <span>80 Reposts</span>
              <span>1.4K Likes</span>
            </div>
          </div>
        </div>
      )}

      {/* BEAT 2: 256k Full Codebase Ingestion Architecture */}
      {isBeat2 && (
        <div
          style={{
            width: 1400,
            height: 560,
            background: "rgba(13, 27, 62, 0.9)",
            border: "2px solid #38BDF8",
            borderRadius: 24,
            padding: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transform: `scale(${beat2Prog})`,
            boxShadow: "0 0 50px rgba(56, 189, 248, 0.25)",
          }}
        >
          <div style={{ flex: 1, paddingRight: 40 }}>
            <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>
              UNBROKEN REASONING LOOP
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 40, fontWeight: 900, marginTop: 8 }}>
              Full Codebase Ingestion
            </div>
            <div style={{ color: "#CBD5E1", fontSize: 20, lineHeight: 1.5, marginTop: 16 }}>
              A 256k output ceiling enables Gemini 4 to ingest, refactor, and generate multi-thousand-line
              architectures in a single pass without truncating logic chains or losing context.
            </div>

            <div style={{ marginTop: 24, display: "flex", gap: 20 }}>
              <div style={{ color: "#34D399", display: "flex", alignItems: "center", gap: 8, fontSize: 18 }}>
                <CheckCircle2 size={22} color="#34D399" />
                Zero Context Fragmentation
              </div>
              <div style={{ color: "#38BDF8", display: "flex", alignItems: "center", gap: 8, fontSize: 18 }}>
                <CheckCircle2 size={22} color="#38BDF8" />
                Atomic Multi-File Commits
              </div>
            </div>
          </div>

          <div
            style={{
              width: 440,
              height: 420,
              background: "#080E1E",
              borderRadius: 20,
              border: "1px solid rgba(56, 189, 248, 0.4)",
              padding: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#94A3B8", fontSize: 16, fontWeight: 700 }}>CAPACITY RATIO</span>
              <span style={{ color: "#38BDF8", fontSize: 16, fontWeight: 800 }}>4X EXPANSION</span>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#38BDF8", fontSize: 72, fontWeight: 900 }}>256,000</div>
              <div style={{ color: "#94A3B8", fontSize: 18 }}>Tokens Per Generation</div>
            </div>

            <div style={{ height: 16, background: "#1E293B", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ width: "100%", height: "100%", background: "#38BDF8" }} />
            </div>
          </div>
        </div>
      )}

      {/* BEAT 3: Recursive Self-Improvement Loops (RSI) */}
      {isBeat3 && (
        <div
          style={{
            width: 1400,
            height: 560,
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(139, 92, 246, 0.4)",
            borderRadius: 24,
            padding: 48,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transform: `scale(${beat3Prog})`,
          }}
        >
          <div>
            <div style={{ color: "#A78BFA", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>
              ALGORITHMIC REFINEMENT
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 40, fontWeight: 900, marginTop: 8 }}>
              Recursive Self-Improvement (RSI) Loops
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 32 }}>
            <div
              style={{
                flex: 1,
                padding: 24,
                background: "rgba(30, 41, 59, 0.6)",
                borderRadius: 16,
                border: "1px solid rgba(139, 92, 246, 0.3)",
              }}
            >
              <GitBranch size={32} color="#A78BFA" />
              <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, marginTop: 12 }}>
                Synthetic Data Generation
              </div>
              <div style={{ color: "#94A3B8", fontSize: 16, marginTop: 6 }}>
                Argon generates millions of automated reasoning proofs and edge-case coding problems.
              </div>
            </div>

            <div
              style={{
                flex: 1,
                padding: 24,
                background: "rgba(30, 41, 59, 0.6)",
                borderRadius: 16,
                border: "1px solid rgba(139, 92, 246, 0.3)",
              }}
            >
              <Cpu size={32} color="#38BDF8" />
              <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, marginTop: 12 }}>
                Autonomous Verification
              </div>
              <div style={{ color: "#94A3B8", fontSize: 16, marginTop: 6 }}>
                Formal theorem verifiers confirm logic trees, eliminating synthetic hallucinations.
              </div>
            </div>

            <div
              style={{
                flex: 1,
                padding: 24,
                background: "rgba(30, 41, 59, 0.6)",
                borderRadius: 16,
                border: "1px solid rgba(139, 92, 246, 0.3)",
              }}
            >
              <Zap size={32} color="#FBBF24" />
              <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800, marginTop: 12 }}>
                Continuous Fine-Tuning
              </div>
              <div style={{ color: "#94A3B8", fontSize: 16, marginTop: 6 }}>
                Next-generation weights are automatically refined on self-generated curriculum.
              </div>
            </div>
          </div>

          <div style={{ color: "#64748B", fontSize: 16 }}>
            Reported by DeepMind insiders and highlighted by @Mr_Salio on X
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 3: BENCHMARK FORENSICS: TERMINAL-BENCH & AUTOMATION
// Duration: 1520 frames (90.22s -> 140.86s)
// =========================================================================
export const Scene3_DocBenchmarks: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sub-beats:
  // Beat 1: 0 - 600f (Terminal-Bench Science 0.1 Bar Chart)
  // Beat 2: 600 - 1050f (AutomationBench 48.7% Deep Dive)
  // Beat 3: 1050 - 1520f (Live Containerized Terminal Execution Simulation)
  const isBeat1 = frame < 600;
  const isBeat2 = frame >= 600 && frame < 1050;
  const isBeat3 = frame >= 1050;

  const beat1Prog = spring({ frame, fps, config: { damping: 14 } });
  const beat2Prog = spring({ frame: frame - 600, fps, config: { damping: 14 } });
  const beat3Prog = spring({ frame: frame - 1050, fps, config: { damping: 14 } });

  // Progress bars for Beat 1
  const barArgon = interpolate(frame, [30, 110], [0, 72.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barAstra = interpolate(frame, [45, 110], [0, 67.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barFable = interpolate(frame, [60, 110], [0, 64.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#080B16",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <div style={{ position: "absolute", top: 50, textAlign: "center" }}>
        <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 800, letterSpacing: 4 }}>
          LEAKED BENCHMARK FORENSICS
        </div>
        <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, marginTop: 4 }}>
          TERMINAL-BENCH SCIENCE 0.1
        </div>
      </div>

      {/* BEAT 1: Terminal-Bench Bar Comparison */}
      {isBeat1 && (
        <div
          style={{
            width: 1400,
            height: 540,
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: 24,
            padding: 48,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            transform: `scale(${beat1Prog})`,
            boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
          }}
        >
          {/* Gemini 4 Argon Bar */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <GoogleOfficialLogo size={28} />
                <span style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800 }}>
                  Gemini 4 Pro (Argon)
                </span>
                <span
                  style={{
                    background: "#38BDF8",
                    color: "#030712",
                    padding: "2px 10px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  LEAKED CHECKPOINT
                </span>
              </div>
              <div style={{ color: "#38BDF8", fontSize: 28, fontWeight: 900 }}>
                {barArgon.toFixed(1)}%
              </div>
            </div>
            <div style={{ height: 28, background: "#0B1120", borderRadius: 14, overflow: "hidden" }}>
              <div
                style={{
                  width: `${barArgon}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #2563EB 0%, #38BDF8 100%)",
                  boxShadow: "0 0 24px #38BDF8",
                }}
              />
            </div>
          </div>

          {/* GPT-6 Astra */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <OpenAILogo size={28} color="#10A37F" />
                <span style={{ color: "#CBD5E1", fontSize: 22, fontWeight: 700 }}>GPT-6 Astra</span>
              </div>
              <div style={{ color: "#10B981", fontSize: 26, fontWeight: 800 }}>
                {barAstra.toFixed(1)}%
              </div>
            </div>
            <div style={{ height: 24, background: "#0B1120", borderRadius: 12, overflow: "hidden" }}>
              <div
                style={{
                  width: `${barAstra}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #059669 0%, #10B981 100%)",
                }}
              />
            </div>
          </div>

          {/* Claude Fable 5.1 */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <AnthropicLogo size={28} />
                <span style={{ color: "#CBD5E1", fontSize: 22, fontWeight: 700 }}>
                  Claude Fable 5.1
                </span>
              </div>
              <div style={{ color: "#F59E0B", fontSize: 26, fontWeight: 800 }}>
                {barFable.toFixed(1)}%
              </div>
            </div>
            <div style={{ height: 24, background: "#0B1120", borderRadius: 12, overflow: "hidden" }}>
              <div
                style={{
                  width: `${barFable}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #D97706 0%, #F59E0B 100%)",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* BEAT 2: AutomationBench Record 48.7% */}
      {isBeat2 && (
        <div
          style={{
            width: 1400,
            height: 540,
            background: "rgba(15, 23, 42, 0.85)",
            border: "2px solid #10B981",
            borderRadius: 24,
            padding: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transform: `scale(${beat2Prog})`,
            boxShadow: "0 0 50px rgba(16, 185, 129, 0.2)",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ color: "#34D399", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>
              AGENTIC EVALUATION BREAKTHROUGH
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, marginTop: 8 }}>
              AutomationBench 48.7%
            </div>
            <div style={{ color: "#CBD5E1", fontSize: 20, lineHeight: 1.5, marginTop: 16 }}>
              Tests autonomous multi-step execution across live terminals: setting up databases, configuring
              Kubernetes clusters, running build scripts, and handling system interrupts.
            </div>

            <div style={{ marginTop: 24, display: "flex", gap: 24 }}>
              <div style={{ padding: "12px 24px", background: "#0F172A", borderRadius: 14 }}>
                <div style={{ color: "#94A3B8", fontSize: 14 }}>PRIOR FRONTIER RECORD</div>
                <div style={{ color: "#E2E8F0", fontSize: 24, fontWeight: 800 }}>39.2%</div>
              </div>
              <div style={{ padding: "12px 24px", background: "rgba(16, 185, 129, 0.2)", borderRadius: 14 }}>
                <div style={{ color: "#34D399", fontSize: 14 }}>GEMINI 4 ARGON</div>
                <div style={{ color: "#34D399", fontSize: 24, fontWeight: 900 }}>48.7% (+9.5% GAIN)</div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 440,
              height: 400,
              background: "#070C18",
              borderRadius: 20,
              border: "1px solid rgba(16, 185, 129, 0.4)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <Bot size={72} color="#10B981" />
            <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800 }}>
              MULTI-STEP AUTONOMY
            </div>
            <div style={{ color: "#94A3B8", fontSize: 16 }}>Live Sandbox Tested</div>
          </div>
        </div>
      )}

      {/* BEAT 3: Live Terminal & Containerized Environment Simulator */}
      {isBeat3 && (
        <div
          style={{
            width: 1400,
            height: 560,
            background: "#0B0F19",
            border: "1px solid #1E293B",
            borderRadius: 20,
            overflow: "hidden",
            transform: `scale(${beat3Prog})`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              height: 48,
              background: "#050811",
              borderBottom: "1px solid #1E293B",
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              gap: 8,
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
            <span style={{ color: "#64748B", fontSize: 14, marginLeft: 16, fontFamily: "monospace" }}>
              bash — gemini-4-argon@cluster-node-04: ~
            </span>
          </div>

          {/* Terminal Body */}
          <div
            style={{
              padding: 32,
              fontFamily: "monospace",
              fontSize: 20,
              color: "#E2E8F0",
              lineHeight: 1.8,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div>
              <span style={{ color: "#38BDF8" }}>$</span> gemini-4-argon run --benchmark automation-bench --env live-docker
            </div>
            <div style={{ color: "#94A3B8" }}>
              [INFO] Initializing multi-container orchestration sandbox (Postgres + Redis + Go API)...
            </div>
            <div style={{ color: "#94A3B8" }}>
              [EXEC] Identifying broken distributed locks across worker pool...
            </div>
            <div style={{ color: "#34D399" }}>
              [PATCH] Applied atomic mutex refactor across 14 service files.
            </div>
            <div style={{ color: "#FDE047" }}>
              [EVAL] Running 450 end-to-end integration tests... 100% Passed.
            </div>
            <div style={{ color: "#38BDF8", fontWeight: 800, marginTop: 12 }}>
              [BENCHMARK COMPLETE] Terminal-Bench Science: 72.8% | AutomationBench: 48.7%
            </div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 4: BREAKING TODAY: GCP QUOTAS LEAKS & LIVE AUDIO
// Duration: 1500 frames (140.86s -> 190.94s)
// =========================================================================
export const Scene4_DocGcpQuota: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sub-beats:
  // Beat 1: 0 - 600f (GCP Quotas Table & Highlight)
  // Beat 2: 600 - 1050f (Project Astra Continuous Multimodal Stream)
  // Beat 3: 1050 - 1500f (Extended Thinking Tree-Search Reasoning)
  const isBeat1 = frame < 600;
  const isBeat2 = frame >= 600 && frame < 1050;
  const isBeat3 = frame >= 1050;

  const beat1Prog = spring({ frame, fps, config: { damping: 14 } });
  const beat2Prog = spring({ frame: frame - 600, fps, config: { damping: 14 } });
  const beat3Prog = spring({ frame: frame - 1050, fps, config: { damping: 14 } });

  // Highlighter sweep over gemini-3.8-live-extended-thinking
  const hl = interpolate(frame, [60, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070913",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 50,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 24px",
          background: "rgba(59, 130, 246, 0.15)",
          border: "1px solid rgba(59, 130, 246, 0.4)",
          borderRadius: 20,
        }}
      >
        <span style={{ color: "#60A5FA", fontSize: 16, fontWeight: 800, letterSpacing: 3 }}>
          LIVE TODAY // GOOGLE CLOUD DISCOVERY
        </span>
      </div>

      {/* BEAT 1: GCP Quotas Table */}
      {isBeat1 && (
        <div
          style={{
            width: 1400,
            height: 640,
            background: "#0F172A",
            border: "1px solid rgba(51, 65, 85, 0.8)",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,0,0,0.9)",
            transform: `scale(${beat1Prog})`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Chrome bar */}
          <div
            style={{
              height: 54,
              background: "#0B0F19",
              borderBottom: "1px solid #1E293B",
              display: "flex",
              alignItems: "center",
              padding: "0 24px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#1E293B",
                padding: "6px 24px",
                borderRadius: 16,
                color: "#94A3B8",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <span>🔒</span>
              <span style={{ color: "#38BDF8" }}>console.cloud.google.com/iam-admin/quotas</span>
            </div>
            <div style={{ width: 50 }} />
          </div>

          {/* Quotas Content */}
          <div style={{ padding: 40, flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ color: "#E2E8F0", fontSize: 26, fontWeight: 800 }}>
              Model Quotas & System Limits
            </div>

            <div
              style={{
                padding: "24px 32px",
                background: "rgba(30, 41, 59, 0.6)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                borderRadius: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ color: "#38BDF8", fontSize: 28, fontWeight: 800, fontFamily: "monospace" }}>
                  gemini-3.8-live
                </div>
                <div style={{ color: "#94A3B8", fontSize: 16, marginTop: 4 }}>
                  Real-Time Bidirectional Voice & Vision Stream
                </div>
              </div>
              <div
                style={{
                  padding: "8px 20px",
                  background: "rgba(16, 185, 129, 0.2)",
                  color: "#34D399",
                  borderRadius: 20,
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                STATUS: ACTIVE
              </div>
            </div>

            <div
              style={{
                padding: "24px 32px",
                background: "rgba(30, 41, 59, 0.9)",
                border: "2px solid #F59E0B",
                borderRadius: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#FDE047",
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: "monospace",
                    background: `rgba(245, 166, 35, ${0.4 * hl})`,
                    padding: "4px 8px",
                    borderRadius: 6,
                  }}
                >
                  gemini-3.8-live-extended-thinking
                </div>
                <div style={{ color: "#E2E8F0", fontSize: 16, marginTop: 4 }}>
                  Real-Time Voice + Deep Tree Reasoning Pipeline
                </div>
              </div>
              <div
                style={{
                  padding: "8px 20px",
                  background: "#F59E0B",
                  color: "#0B0F19",
                  borderRadius: 20,
                  fontSize: 16,
                  fontWeight: 800,
                }}
              >
                NEW CHECKPOINT
              </div>
            </div>

            <div
              style={{
                marginTop: "auto",
                padding: "16px 24px",
                background: "rgba(2, 6, 23, 0.8)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                gap: 16,
                color: "#94A3B8",
                fontSize: 16,
              }}
            >
              <Radio size={20} color="#38BDF8" />
              <span>
                Tracked live by <strong style={{ color: "#E2E8F0" }}>@StatsWire</strong> &{" "}
                <strong style={{ color: "#E2E8F0" }}>@anytanreal</strong>: "Showing up on GCP quotas page
                first is wild."
              </span>
            </div>
          </div>
        </div>
      )}

      {/* BEAT 2: Project Astra Real-Time Multimodal Architecture */}
      {isBeat2 && (
        <div
          style={{
            width: 1400,
            height: 560,
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(56, 189, 248, 0.4)",
            borderRadius: 24,
            padding: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transform: `scale(${beat2Prog})`,
          }}
        >
          <div style={{ flex: 1, paddingRight: 40 }}>
            <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>
              PROJECT ASTRA CONSUMER STACK
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 40, fontWeight: 900, marginTop: 8 }}>
              Continuous Audio-Visual Stream
            </div>
            <div style={{ color: "#CBD5E1", fontSize: 20, lineHeight: 1.5, marginTop: 16 }}>
              Bypasses traditional speech-to-text text-to-speech lag. Audio and camera input are processed
              natively as continuous multimodal tokens with sub-180ms latency.
            </div>

            <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
              <div style={{ padding: "12px 24px", background: "#0F172A", borderRadius: 14 }}>
                <div style={{ color: "#94A3B8", fontSize: 14 }}>LATENCY BUDGET</div>
                <div style={{ color: "#34D399", fontSize: 24, fontWeight: 800 }}>&lt; 180 ms</div>
              </div>
              <div style={{ padding: "12px 24px", background: "#0F172A", borderRadius: 14 }}>
                <div style={{ color: "#94A3B8", fontSize: 14 }}>PIPELINE TYPE</div>
                <div style={{ color: "#38BDF8", fontSize: 24, fontWeight: 800 }}>End-to-End Neural</div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 460,
              height: 420,
              background: "#080E1E",
              borderRadius: 20,
              border: "1px solid rgba(56, 189, 248, 0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <Activity size={72} color="#38BDF8" />
            <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 800 }}>
              BIDIRECTIONAL VOICE STREAM
            </div>
            <div style={{ color: "#64748B", fontSize: 16 }}>Live Video + Audio Parsing</div>
          </div>
        </div>
      )}

      {/* BEAT 3: Extended Thinking Tree Search */}
      {isBeat3 && (
        <div
          style={{
            width: 1400,
            height: 560,
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(245, 158, 11, 0.4)",
            borderRadius: 24,
            padding: 48,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transform: `scale(${beat3Prog})`,
          }}
        >
          <div>
            <div style={{ color: "#FBBF24", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>
              HYBRID REASONING ARCHITECTURE
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 40, fontWeight: 900, marginTop: 8 }}>
              Extended Thinking Deep Tree Search
            </div>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div
              style={{
                flex: 1,
                padding: 28,
                background: "rgba(30, 41, 59, 0.6)",
                borderRadius: 16,
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              <Network size={36} color="#FBBF24" />
              <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800, marginTop: 12 }}>
                Dynamic Tree Expansion
              </div>
              <div style={{ color: "#94A3B8", fontSize: 17, marginTop: 8, lineHeight: 1.5 }}>
                Pairs fast conversational responses with deep background reasoning branches when encountering
                complex system constraints.
              </div>
            </div>

            <div
              style={{
                flex: 1,
                padding: 28,
                background: "rgba(30, 41, 59, 0.6)",
                borderRadius: 16,
                border: "1px solid rgba(56, 189, 248, 0.3)",
              }}
            >
              <Cpu size={36} color="#38BDF8" />
              <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800, marginTop: 12 }}>
                Desktop Agent Orchestration
              </div>
              <div style={{ color: "#94A3B8", fontSize: 17, marginTop: 8, lineHeight: 1.5 }}>
                Engineered for desktop AI tools like Antigravity, letting the model converse while simultaneously
                editing complex software projects.
              </div>
            </div>
          </div>

          <div style={{ color: "#64748B", fontSize: 16 }}>
            Reported in GCP trackers: gemini-3.8-live-extended-thinking
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 5: ANTIGRAVITY TRAFFIC SURGE & COMPANION PREVIEWS
// Duration: 1720 frames (190.94s -> 248.74s)
// =========================================================================
export const Scene5_DocAntigravity: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sub-beats:
  // Beat 1: 0 - 850f (Antigravity Server Surge: 8s -> 45s Latency Gauge)
  // Beat 2: 850 - 1720f (Queued Preview Checkpoints: antigravity-preview-09-2026)
  const isBeat1 = frame < 850;
  const isBeat2 = frame >= 850;

  const beat1Prog = spring({ frame, fps, config: { damping: 14 } });
  const beat2Prog = spring({ frame: frame - 850, fps, config: { damping: 14 } });

  const latencyVal = interpolate(frame, [40, 160], [8, 45], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070914",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div style={{ position: "absolute", top: 50, textAlign: "center" }}>
        <div style={{ color: "#EF4444", fontSize: 18, fontWeight: 800, letterSpacing: 4 }}>
          SERVER INFRASTRUCTURE CONGESTION
        </div>
        <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, marginTop: 4 }}>
          GOOGLE ANTIGRAVITY DEVELOPER RUSH
        </div>
      </div>

      {/* BEAT 1: Latency Spike Dial */}
      {isBeat1 && (
        <div
          style={{
            width: 1420,
            display: "flex",
            justifyContent: "space-between",
            gap: 40,
            transform: `scale(${beat1Prog})`,
          }}
        >
          {/* Dial Card */}
          <div
            style={{
              flex: 1,
              height: 520,
              background: "rgba(15, 23, 42, 0.85)",
              border: "2px solid rgba(239, 68, 68, 0.5)",
              borderRadius: 24,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 0 50px rgba(239, 68, 68, 0.2)",
            }}
          >
            <div style={{ color: "#94A3B8", fontSize: 20, fontWeight: 700, letterSpacing: 2 }}>
              RESPONSE LATENCY MONITOR
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#EF4444", fontSize: 96, fontWeight: 900, lineHeight: 1 }}>
                {latencyVal.toFixed(0)}s
              </div>
              <div style={{ color: "#CBD5E1", fontSize: 22, marginTop: 12 }}>
                Normal: 8s ➔ Peak Congestion: 45s
              </div>
            </div>

            <div
              style={{
                padding: "10px 24px",
                background: "rgba(239, 68, 68, 0.2)",
                color: "#FCA5A5",
                borderRadius: 20,
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Developers Flooding Gemini 3.8 Flash for UI Code
            </div>
          </div>

          {/* Social Proof Quote */}
          <div
            style={{
              flex: 1,
              height: 520,
              background: "#000000",
              border: "1px solid #2F3336",
              borderRadius: 24,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 700 }}>Guy Mograbi</span>
                <span style={{ color: "#71767B", fontSize: 18 }}>@guymograbi</span>
              </div>
              <div style={{ color: "#E7E9EA", fontSize: 24, marginTop: 24, lineHeight: 1.5 }}>
                "Gemini 3.8 Flash is SO SLOW in the last 2 days... thinking 8 seconds vs now thinking for 45
                seconds! Everyone is rushing to generate entire UI systems."
              </div>
            </div>

            <div style={{ color: "#38BDF8", fontSize: 18, fontWeight: 700 }}>
              Cited across developer timeline discussions
            </div>
          </div>
        </div>
      )}

      {/* BEAT 2: Queued Preview Checkpoints */}
      {isBeat2 && (
        <div
          style={{
            width: 1400,
            height: 560,
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: 24,
            padding: 48,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transform: `scale(${beat2Prog})`,
          }}
        >
          <div>
            <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>
              UPCOMING PUBLIC ROADS
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 40, fontWeight: 900, marginTop: 8 }}>
              Queued Companion Preview Models
            </div>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div
              style={{
                flex: 1,
                padding: 32,
                background: "rgba(30, 41, 59, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                borderRadius: 20,
              }}
            >
              <div style={{ color: "#38BDF8", fontSize: 28, fontWeight: 800, fontFamily: "monospace" }}>
                antigravity-preview-09-2026
              </div>
              <div style={{ color: "#CBD5E1", fontSize: 18, marginTop: 12, lineHeight: 1.5 }}>
                Autonomous Full-Stack Coding Agent natively wired to execute file edits, terminal builds, and
                sub-agent tasks.
              </div>
            </div>

            <div
              style={{
                flex: 1,
                padding: 32,
                background: "rgba(30, 41, 59, 0.8)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                borderRadius: 20,
              }}
            >
              <div style={{ color: "#FDE047", fontSize: 28, fontWeight: 800, fontFamily: "monospace" }}>
                gemini-4-flash-preview
              </div>
              <div style={{ color: "#CBD5E1", fontSize: 18, marginTop: 12, lineHeight: 1.5 }}>
                Sub-second task router model designed to triage developer prompts and orchestrate heavy
                reasoning passes.
              </div>
            </div>
          </div>

          <div style={{ color: "#64748B", fontSize: 16 }}>
            Discovered by community tracker @Mr_Salio on X
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 6: DEEPMIND REORGANIZATION & OCTOBER SHOWDOWN
// Duration: 1602 frames (248.74s -> 302.08s)
// =========================================================================
export const Scene6_DocFinale: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sub-beats:
  // Beat 1: 0 - 700f (DeepMind Restructure & Pichai Earnings Quote)
  // Beat 2: 700 - 1200f (Frontier AI Battle Royale: Google vs OpenAI vs Anthropic)
  // Beat 3: 1200 - 1602f (Grand Finale CTA & Channel Subscribe)
  const isBeat1 = frame < 700;
  const isBeat2 = frame >= 700 && frame < 1200;
  const isBeat3 = frame >= 1200;

  const beat1Prog = spring({ frame, fps, config: { damping: 14 } });
  const beat2Prog = spring({ frame: frame - 700, fps, config: { damping: 14 } });
  const beat3Prog = spring({ frame: frame - 1200, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050711",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(66, 133, 244, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* BEAT 1: DeepMind Restructuring & Pichai Quote */}
      {isBeat1 && (
        <div
          style={{
            width: 1400,
            height: 560,
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: 24,
            padding: 48,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transform: `scale(${beat1Prog})`,
          }}
        >
          <div>
            <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>
              EXECUTIVE REALIGNMENT
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, marginTop: 8 }}>
              DeepMind AI Safety Unit Reorganization
            </div>
          </div>

          <div
            style={{
              padding: "24px 36px",
              background: "rgba(2, 6, 23, 0.8)",
              borderLeft: "6px solid #38BDF8",
              borderRadius: 12,
              color: "#CBD5E1",
              fontSize: 24,
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            "Google is executing its most ambitious pre-training run in company history... backed by an
            eye-watering capital expenditure program to lead autonomous systems."
            <div style={{ marginTop: 12, color: "#38BDF8", fontSize: 18, fontStyle: "normal", fontWeight: 700 }}>
              — Sundar Pichai, Google Q2 Earnings Call
            </div>
          </div>

          <div style={{ color: "#94A3B8", fontSize: 18 }}>
            Streamlined safety oversight to eliminate friction ahead of anticipated October 2026 public rollout.
          </div>
        </div>
      )}

      {/* BEAT 2: 3-Way Frontier Battle Royale */}
      {isBeat2 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            transform: `scale(${beat2Prog})`,
          }}
        >
          <div style={{ color: "#EF4444", fontSize: 22, fontWeight: 800, letterSpacing: 4 }}>
            OCTOBER 2026 SHOWDOWN
          </div>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 64,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: 2,
              marginTop: 12,
            }}
          >
            AUTONOMOUS CODING FRONTIER
          </div>

          {/* 3 Logo Cards */}
          <div style={{ display: "flex", gap: 36, marginTop: 40 }}>
            {/* Google DeepMind */}
            <div
              style={{
                width: 380,
                padding: "32px 24px",
                background: "rgba(13, 27, 62, 0.9)",
                border: "2px solid #38BDF8",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <GoogleOfficialLogo size={64} />
              <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800 }}>Gemini 4 Pro</div>
              <div style={{ color: "#38BDF8", fontSize: 16 }}>Codename Argon</div>
            </div>

            {/* OpenAI */}
            <div
              style={{
                width: 380,
                padding: "32px 24px",
                background: "rgba(10, 25, 20, 0.8)",
                border: "1px solid rgba(16, 163, 127, 0.5)",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <OpenAILogo size={64} color="#10A37F" />
              <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800 }}>GPT-6 Sol</div>
              <div style={{ color: "#10B981", fontSize: 16 }}>Astra Successor</div>
            </div>

            {/* Anthropic */}
            <div
              style={{
                width: 380,
                padding: "32px 24px",
                background: "rgba(20, 15, 15, 0.8)",
                border: "1px solid rgba(217, 119, 6, 0.5)",
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <AnthropicLogo size={64} />
              <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800 }}>Claude Opus 5.2</div>
              <div style={{ color: "#F59E0B", fontSize: 16 }}>Refined Reasoning</div>
            </div>
          </div>
        </div>
      )}

      {/* BEAT 3: Grand Finale Call to Action */}
      {isBeat3 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            transform: `scale(${beat3Prog})`,
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <GoogleOfficialLogo size={80} />
          </div>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 68,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: 2,
              lineHeight: 1.15,
            }}
          >
            WILL GEMINI 4 WIN?
          </div>

          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 28,
              fontWeight: 700,
              color: "#38BDF8",
              letterSpacing: 4,
              marginTop: 16,
              textTransform: "uppercase",
            }}
          >
            SHARE YOUR THOUGHTS BELOW
          </div>

          <div
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 44px",
              background: "linear-gradient(90deg, #2563EB 0%, #38BDF8 100%)",
              borderRadius: 40,
              color: "#FFFFFF",
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 2,
              boxShadow: "0 10px 35px rgba(56, 189, 248, 0.4)",
            }}
          >
            <span>SUBSCRIBE FOR FRONTIER AI BREAKDOWNS</span>
            <ArrowRight size={26} />
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
