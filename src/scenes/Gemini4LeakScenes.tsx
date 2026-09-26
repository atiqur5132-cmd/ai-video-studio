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
} from "lucide-react";
import { GoogleOfficialLogo, OpenAILogo, AnthropicLogo } from "../components/RealLogos";

// ==========================================
// SCENE 1: COLD OPEN HOOK & ARGON REVEAL
// Duration: 740 frames (0.00s -> 24.58s)
// ==========================================
export const Scene1_ColdOpenHook: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: 0 - 240f (Gemini 4 Leak & Codename Argon)
  // Beat 2: 240 - 480f (256,000 Token Output Limit)
  // Beat 3: 480 - 740f (Hierarchy Flips: vs Astra & Fable)
  const isBeat1 = frame < 240;
  const isBeat2 = frame >= 240 && frame < 480;
  const isBeat3 = frame >= 480;

  // Spring animations
  const beat1Progress = spring({ frame, fps, config: { damping: 14 } });
  const beat2Progress = spring({ frame: frame - 240, fps, config: { damping: 14 } });
  const beat3Progress = spring({ frame: frame - 480, fps, config: { damping: 14 } });

  // Flame / energy shockwave at frame 20-50
  const shockwave = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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

      {/* BEAT 1: Cold Open Split Screen & Argon Codenamed Leak */}
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
              position: "relative",
              transform: `scale(${beat1Progress})`,
            }}
          >
            {/* Authentic Google Logo */}
            <div style={{ marginBottom: 24 }}>
              <GoogleOfficialLogo size={96} />
            </div>

            {/* Kinetic 3-Word Title */}
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

            {/* Sub Status Pill */}
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
                First Internal Checkpoint Active
              </span>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* BEAT 2: 256,000 Token Output Limit (4x Expansion) */}
      {isBeat2 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              position: "absolute",
              top: 80,
              fontFamily: "Inter, sans-serif",
              fontSize: 22,
              fontWeight: 800,
              color: "#38BDF8",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            ARCHITECTURAL LEAP
          </div>

          <div
            style={{
              width: 1400,
              display: "flex",
              justifyContent: "space-between",
              gap: 40,
              transform: `scale(${beat2Progress})`,
            }}
          >
            {/* Previous Generation Box */}
            <div
              style={{
                flex: 1,
                height: 520,
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(148, 163, 184, 0.2)",
                borderRadius: 20,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ color: "#94A3B8", fontSize: 22, fontWeight: 700, letterSpacing: 2 }}>
                  PREVIOUS GEMINI LIMIT
                </div>
                <div style={{ color: "#64748B", fontSize: 72, fontWeight: 900, marginTop: 20 }}>
                  64,000
                </div>
                <div style={{ color: "#94A3B8", fontSize: 20, marginTop: 4 }}>
                  Maximum Output Tokens
                </div>
              </div>
              <div
                style={{
                  height: 24,
                  background: "#1E293B",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <div style={{ width: "25%", height: "100%", background: "#64748B" }} />
              </div>
            </div>

            {/* Argon Next-Gen Box (4X Highlight) */}
            <div
              style={{
                flex: 1,
                height: 520,
                background: "rgba(13, 27, 62, 0.9)",
                border: "2px solid #38BDF8",
                borderRadius: 20,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 0 50px rgba(56, 189, 248, 0.3)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: "#38BDF8", fontSize: 22, fontWeight: 800, letterSpacing: 2 }}>
                    GEMINI 4 PRO (ARGON)
                  </div>
                  <div
                    style={{
                      background: "#38BDF8",
                      color: "#050814",
                      padding: "4px 14px",
                      borderRadius: 12,
                      fontWeight: 800,
                      fontSize: 16,
                    }}
                  >
                    4X INCREASE
                  </div>
                </div>

                <div style={{ color: "#FFFFFF", fontSize: 84, fontWeight: 900, marginTop: 20 }}>
                  256,000
                </div>
                <div style={{ color: "#BAE6FD", fontSize: 22, marginTop: 4 }}>
                  Native Output Ceiling
                </div>
              </div>

              <div>
                <div
                  style={{
                    height: 28,
                    background: "#0F172A",
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid rgba(56, 189, 248, 0.4)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, #2563EB 0%, #38BDF8 100%)",
                      boxShadow: "0 0 20px #38BDF8",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: 16,
                    color: "#93C5FD",
                    fontSize: 18,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Zap size={20} color="#38BDF8" />
                  Supports Full Multi-File Agentic Refactors
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* BEAT 3: Flipping The AI Hierarchy (Google vs OpenAI vs Anthropic) */}
      {isBeat3 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              position: "absolute",
              top: 70,
              fontFamily: "Inter, sans-serif",
              fontSize: 26,
              fontWeight: 900,
              color: "#EF4444",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            THE FRONTIER COLLAPSE
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
                Beaten on Terminal-Bench
              </div>
            </div>

            {/* VS Energy Center */}
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
                  Reasoning Heavyweight
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
                Parity on Automation
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// ==========================================
// SCENE 2: THE X EVIDENCE LEAK (LENTILS & RAY)
// Duration: 560 frames (24.58s -> 43.26s)
// ==========================================
export const Scene2_ArgonLeakTweet: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Progress for card entry
  const cardProgress = spring({ frame, fps, config: { damping: 14 } });

  // Highlighter sweep over "codenamed argon" at frame 90 -> 160
  const highlight1 = interpolate(frame, [80, 160], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Highlighter sweep over "256k token output limit" at frame 180 -> 260
  const highlight2 = interpolate(frame, [180, 260], [0, 1], {
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
          top: 60,
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
          VERIFIED LEAK // X.COM
        </span>
      </div>

      {/* Pure Flat Documentary Tweet Card (STRICT NO 2.5D, NO PERSPECTIVE TILT) */}
      <div
        style={{
          width: 1320,
          background: "#000000",
          border: "1px solid #2F3336",
          borderRadius: 20,
          padding: 48,
          boxShadow: "0 25px 50px rgba(0,0,0,0.85)",
          transform: `scale(${cardProgress})`,
        }}
      >
        {/* Tweet Author Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Avatar */}
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              L
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#E7E9EA", fontSize: 24, fontWeight: 700 }}>Lentils</span>
                <CheckCircle2 size={20} color="#1D9BF0" fill="#1D9BF0" />
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

        {/* Tweet Body Text with Kinetic Highlighters */}
        <div
          style={{
            marginTop: 32,
            color: "#E7E9EA",
            fontSize: 30,
            lineHeight: 1.5,
            fontFamily: "system-ui, -apple-system, sans-serif",
            position: "relative",
          }}
        >
          <div>
            Gemini 4 Pro checkpoints have finally started appearing internally a few days ago.
          </div>

          <div style={{ marginTop: 16, position: "relative", display: "inline-block" }}>
            This is the first ever output from the model, internally{" "}
            <span
              style={{
                fontWeight: 700,
                color: "#FDE047",
                background: `rgba(245, 166, 35, ${0.45 * highlight1})`,
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
                background: `rgba(56, 189, 248, ${0.45 * highlight2})`,
                padding: "2px 8px",
                borderRadius: 4,
              }}
            >
              256k token output limit
            </span>
            , compared to 64k in previous Gemini.
          </div>
        </div>

        {/* Verified Telemetry Bottom Bar */}
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
    </AbsoluteFill>
  );
};

// ==========================================
// SCENE 3: BENCHMARK MATRIX & TERMINAL-BENCH
// Duration: 420 frames (43.26s -> 56.66s)
// ==========================================
export const Scene3_ArgonBenchmark: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Progress
  const anim = spring({ frame, fps, config: { damping: 14 } });

  // Bar growth animations
  const barArgon = interpolate(frame, [20, 90], [0, 72.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barAstra = interpolate(frame, [30, 90], [0, 67.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barFable = interpolate(frame, [40, 90], [0, 64.2], {
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
      <div
        style={{
          position: "absolute",
          top: 60,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#38BDF8",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          LEAKED EVALUATION DATA
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 44,
            fontWeight: 900,
            marginTop: 6,
          }}
        >
          TERMINAL-BENCH SCIENCE 0.1
        </div>
      </div>

      {/* Main Comparative Benchmark Container */}
      <div
        style={{
          width: 1400,
          height: 540,
          background: "rgba(15, 23, 42, 0.8)",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          borderRadius: 24,
          padding: 48,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          transform: `scale(${anim})`,
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

        {/* GPT-6 Astra Bar */}
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

        {/* Claude Fable 5.1 Bar */}
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

        {/* AutomationBench Sub Metric */}
        <div
          style={{
            marginTop: 12,
            padding: "16px 28px",
            background: "rgba(2, 6, 23, 0.7)",
            borderRadius: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Terminal size={24} color="#38BDF8" />
            <span style={{ color: "#E2E8F0", fontSize: 20, fontWeight: 700 }}>
              AutomationBench Multi-Agent Score:
            </span>
          </div>
          <div style={{ color: "#38BDF8", fontSize: 24, fontWeight: 900 }}>48.7% (Industry High)</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// SCENE 4: GOOGLE CLOUD QUOTAS DISCOVERY (TODAY)
// Duration: 740 frames (56.66s -> 82.00s)
// ==========================================
export const Scene4_GcpQuotaLeak: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const anim = spring({ frame, fps, config: { damping: 14 } });

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

      {/* Browser Card for GCP Quotas */}
      <div
        style={{
          width: 1400,
          height: 640,
          background: "#0F172A",
          border: "1px solid rgba(51, 65, 85, 0.8)",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(0,0,0,0.9)",
          transform: `scale(${anim})`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Browser Top Chrome */}
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

        {/* Quotas Content Table */}
        <div style={{ padding: 40, flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ color: "#E2E8F0", fontSize: 26, fontWeight: 800 }}>
            Model Quotas & System Limits
          </div>

          {/* Model Row 1: gemini-3.8-live */}
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
              STATUS: PROVISIONED
            </div>
          </div>

          {/* Model Row 2: gemini-3.8-live-extended-thinking */}
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

          {/* Footnote quote from X */}
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
    </AbsoluteFill>
  );
};

// ==========================================
// SCENE 5: ANTIGRAVITY SPIKE & PREVIEWS
// Duration: 680 frames (82.00s -> 104.36s)
// ==========================================
export const Scene5_AntigravitySpike: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const anim = spring({ frame, fps, config: { damping: 14 } });

  // Needle animation from 8s to 45s
  const latencyVal = interpolate(frame, [30, 120], [8, 45], {
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
      {/* Title Header */}
      <div style={{ position: "absolute", top: 60, textAlign: "center" }}>
        <div style={{ color: "#EF4444", fontSize: 18, fontWeight: 800, letterSpacing: 4 }}>
          SERVER LOAD SURGE
        </div>
        <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, marginTop: 6 }}>
          GOOGLE ANTIGRAVITY (AGY) MELTDOWN
        </div>
      </div>

      <div
        style={{
          width: 1420,
          display: "flex",
          justifyContent: "space-between",
          gap: 40,
          transform: `scale(${anim})`,
        }}
      >
        {/* Left Card: Latency Spike Dial */}
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
              Normal: 8s ➔ Peak Surge: 45s
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

        {/* Right Card: Companion Preview Models */}
        <div
          style={{
            flex: 1,
            height: 520,
            background: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: 24,
            padding: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>
            QUEUED FOR PUBLIC DROP
          </div>

          {/* Model 1 */}
          <div
            style={{
              padding: 24,
              background: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              borderRadius: 16,
            }}
          >
            <div style={{ color: "#38BDF8", fontSize: 24, fontWeight: 800, fontFamily: "monospace" }}>
              antigravity-preview-09-2026
            </div>
            <div style={{ color: "#94A3B8", fontSize: 16, marginTop: 6 }}>
              Autonomous Full-Stack Coding Agent Inside IDE
            </div>
          </div>

          {/* Model 2 */}
          <div
            style={{
              padding: 24,
              background: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              borderRadius: 16,
            }}
          >
            <div style={{ color: "#FDE047", fontSize: 24, fontWeight: 800, fontFamily: "monospace" }}>
              gemini-4-flash-preview
            </div>
            <div style={{ color: "#94A3B8", fontSize: 16, marginTop: 6 }}>
              Sub-Second Execution for Multi-Agent Task Routing
            </div>
          </div>

          <div
            style={{
              color: "#64748B",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Sparkles size={18} color="#38BDF8" />
            Reported by @Mr_Salio on X Developer Timeline
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// SCENE 6: DEEPMIND FINALE & OCTOBER DEBUT
// Duration: 542 frames (104.36s -> 122.72s)
// ==========================================
export const Scene6_DeepMindFinale: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const anim = spring({ frame, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050711",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Glow pulse */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(66, 133, 244, 0.15) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transform: `scale(${anim})`,
        }}
      >
        {/* DeepMind & Google Logos */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 24 }}>
          <GoogleOfficialLogo size={72} />
        </div>

        {/* Big Impact Headline */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 64,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: 2,
            lineHeight: 1.15,
          }}
        >
          OCTOBER 2026 DEBUT
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
          AUTONOMOUS CODING SUPREMACY
        </div>

        {/* Safety Team Restructuring Note */}
        <div
          style={{
            marginTop: 36,
            width: 900,
            padding: "20px 36px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: 20,
            color: "#CBD5E1",
            fontSize: 20,
            lineHeight: 1.5,
          }}
        >
          DeepMind restructured its internal safety unit to remove deployment friction.
          Google is betting billions to seize the coding frontier.
        </div>

        {/* Call to Action Badge */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "14px 40px",
            background: "linear-gradient(90deg, #2563EB 0%, #38BDF8 100%)",
            borderRadius: 40,
            color: "#FFFFFF",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 2,
            boxShadow: "0 10px 30px rgba(56, 189, 248, 0.4)",
          }}
        >
          <span>WILL GEMINI 4 WIN? DROP YOUR TAKE</span>
          <ArrowRight size={24} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
