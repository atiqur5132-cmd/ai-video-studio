import React from "react";
import {
  AbsoluteFill,
  Img,
  OffthreadVideo,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BongoCatMascot } from "../components/BongoCatMascot";
import {
  OpenAILogo,
  AnthropicLogo,
  DeepSeekLogo,
  GoogleOfficialLogo,
  XAiLogo,
  XLogo,
} from "../components/RealLogos";

// Verified Blue Badge for Twitter / X
const VerifiedBadge: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M10.5 2.5a2.5 2.5 0 0 1 3 0l1.2 1a2.5 2.5 0 0 0 1.9.6l1.6-.1a2.5 2.5 0 0 1 2.4 1.8l.5 1.5a2.5 2.5 0 0 0 1.2 1.5l1.4.8a2.5 2.5 0 0 1 1 2.8l-.4 1.5a2.5 2.5 0 0 0 0 2l.4 1.5a2.5 2.5 0 0 1-1 2.8l-1.4.8a2.5 2.5 0 0 0-1.2 1.5l-.5 1.5a2.5 2.5 0 0 1-2.4 1.8l-1.6-.1a2.5 2.5 0 0 0-1.9.6l-1.2 1a2.5 2.5 0 0 1-3 0l-1.2-1a2.5 2.5 0 0 0-1.9-.6l-1.6.1a2.5 2.5 0 0 1-2.4-1.8l-.5-1.5a2.5 2.5 0 0 0-1.2-1.5l-1.4-.8a2.5 2.5 0 0 1-1-2.8l.4-1.5a2.5 2.5 0 0 0 0-2l-.4-1.5a2.5 2.5 0 0 1 1-2.8l1.4-.8a2.5 2.5 0 0 0 1.2-1.5l.5-1.5a2.5 2.5 0 0 1 2.4-1.8l1.6.1a2.5 2.5 0 0 0 1.9-.6l1.2-1z"
      fill="#1D9BF0"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 1. Hook Beat: Split-Screen Comparison (0s - 12.4s / 372 frames)
export const SceneColdOpenHook: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const leftSlide = interpolate(frame, [0, 25], [-80, 0], {
    extrapolateRight: "clamp",
  });
  const rightOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05070D",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px 60px",
        gap: 40,
        overflow: "hidden",
      }}
    >
      {/* Left Column: Authentic X Post Evidence */}
      <div
        style={{
          flex: 1,
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transform: `translateX(${leftSlide}px)`,
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: 3,
            color: "#F59E0B",
            fontWeight: 800,
            textTransform: "uppercase",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <XLogo size={20} color="#F59E0B" />
          <span>VIRAL FRONTIER PARADOX</span>
        </div>
        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
            border: "1px solid rgba(255,255,255,0.12)",
            width: "100%",
            maxWidth: 780,
          }}
        >
          <Img
            src={staticFile("evidence/rajath_clean_card.png")}
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </div>

      {/* Right Column: Live Model Pipeline Telemetry */}
      <div
        style={{
          flex: 1,
          height: "90%",
          backgroundColor: "rgba(15, 23, 42, 0.75)",
          borderRadius: 24,
          border: "1px solid rgba(56, 189, 248, 0.3)",
          padding: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: rightOpacity,
          position: "relative",
          boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 14,
              color: "#38BDF8",
              fontWeight: 700,
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            ACTIVE PIPELINE DISPATCH // 2026
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            THE FRONTIER RACE NEVER PAUSED
          </div>
        </div>

        {/* Live Status Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              backgroundColor: "rgba(2, 6, 23, 0.8)",
              borderRadius: 14,
              border: "1px solid rgba(217, 119, 6, 0.4)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <AnthropicLogo size={32} />
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#FFF" }}>
                  Claude Opus 5.2
                </div>
                <div style={{ fontSize: 13, color: "#94A3B8" }}>
                  Autonomous Feedback Loops
                </div>
              </div>
            </div>
            <div
              style={{
                color: "#10B981",
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "monospace",
              }}
            >
              [ACTIVE STAGING]
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              backgroundColor: "rgba(2, 6, 23, 0.8)",
              borderRadius: 14,
              border: "1px solid rgba(16, 185, 129, 0.4)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <OpenAILogo size={32} color="#10B981" />
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#FFF" }}>
                  GPT-6 Sol / Astra
                </div>
                <div style={{ fontSize: 13, color: "#94A3B8" }}>
                  72k Reasoning Token Clusters
                </div>
              </div>
            </div>
            <div
              style={{
                color: "#10B981",
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "monospace",
              }}
            >
              [SYNTHESIS LIVE]
            </div>
          </div>
        </div>

        {/* Bottom Mascot Overlay */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 13, color: "#64748B", fontFamily: "monospace" }}>
            LIVE TERMINAL LOGS
          </span>
          <BongoCatMascot size={90} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 2. Three-Column Reaction Board: Dario, Sam, Elon (12.4s - 32.4s / 600 frames)
export const SceneThreeColumnTruce: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const hlDario = interpolate(frame, [30, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const hlSam = interpolate(frame, [150, 210], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const hlElon = interpolate(frame, [260, 320], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070A12",
        padding: "60px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: 14,
            color: "#38BDF8",
            letterSpacing: 3,
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          THE PUBLIC TRUCE AGREEMENT
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: "#FFFFFF",
            marginTop: 8,
          }}
        >
          Silicon Valley's Coordinated Rhetoric
        </div>
      </div>

      {/* 3 Authentic Native Dark Tweet Cards */}
      <div style={{ display: "flex", gap: 36, width: "100%", height: 560 }}>
        {/* Column 1: Dario Amodei */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#000000",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 20,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 20px 45px rgba(0,0,0,0.7)",
            position: "relative",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  backgroundColor: "#D97706",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 22,
                  color: "#FFF",
                }}
              >
                D
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#FFF" }}>
                    Dario Amodei
                  </span>
                  <VerifiedBadge size={18} />
                </div>
                <div style={{ fontSize: 14, color: "#71767B" }}>@DarioAmodei</div>
              </div>
            </div>

            <div style={{ fontSize: 20, color: "#E7E9EA", lineHeight: 1.5 }}>
              We must pace the frontier. The industry should agree on common safety
              benchmarks and pause releases if catastrophic risk thresholds are
              approached.
            </div>
          </div>

          {/* Yellow Highlighter Sweep */}
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 135,
              width: 280 * hlDario,
              height: 32,
              backgroundColor: "rgba(245, 166, 35, 0.45)",
              border: "1px solid rgba(245, 166, 35, 0.8)",
              borderRadius: 4,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 14,
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
              color: "#71767B",
            }}
          >
            <span>Anthropic CEO</span>
            <span style={{ color: "#D97706", fontWeight: 700 }}>ESSAY PROPOSAL</span>
          </div>
        </div>

        {/* Column 2: Sam Altman */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#000000",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 20,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 20px 45px rgba(0,0,0,0.7)",
            position: "relative",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  backgroundColor: "#10A37F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 22,
                  color: "#FFF",
                }}
              >
                S
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#FFF" }}>
                    Sam Altman
                  </span>
                  <VerifiedBadge size={18} />
                </div>
                <div style={{ fontSize: 14, color: "#71767B" }}>@sama</div>
              </div>
            </div>

            <div style={{ fontSize: 20, color: "#E7E9EA", lineHeight: 1.5 }}>
              I agree with Dario's sentiment. We are willing to match reasonable
              pacing rules, provided they are applied equally across all major labs.
            </div>
          </div>

          {/* Yellow Highlighter Sweep */}
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 135,
              width: 250 * hlSam,
              height: 32,
              backgroundColor: "rgba(245, 166, 35, 0.45)",
              border: "1px solid rgba(245, 166, 35, 0.8)",
              borderRadius: 4,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 14,
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
              color: "#71767B",
            }}
          >
            <span>OpenAI CEO</span>
            <span style={{ color: "#10B981", fontWeight: 700 }}>CONDITIONAL BACKING</span>
          </div>
        </div>

        {/* Column 3: Elon Musk */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#000000",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 20,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 20px 45px rgba(0,0,0,0.7)",
            position: "relative",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  backgroundColor: "#1E293B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 22,
                  color: "#FFF",
                }}
              >
                X
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#FFF" }}>
                    Elon Musk
                  </span>
                  <VerifiedBadge size={18} />
                </div>
                <div style={{ fontSize: 14, color: "#71767B" }}>@elonmusk</div>
              </div>
            </div>

            <div style={{ fontSize: 20, color: "#E7E9EA", lineHeight: 1.5 }}>
              Dario is right on the dangers. AI safety must be taken seriously before
              we cross the point of no return. But enforcement remains the unsolved
              question.
            </div>
          </div>

          {/* Yellow Highlighter Sweep */}
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 135,
              width: 220 * hlElon,
              height: 32,
              backgroundColor: "rgba(245, 166, 35, 0.45)",
              border: "1px solid rgba(245, 166, 35, 0.8)",
              borderRadius: 4,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 14,
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
              color: "#71767B",
            }}
          >
            <span>xAI Founder</span>
            <span style={{ color: "#E2E8F0", fontWeight: 700 }}>SAFETY WARNING</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 3. Leaked Pipelines: Terminal Inspection & Evidence (32.4s - 49.9s / 525 frames)
export const SceneLeakedPipelines: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const typingChars = Math.min(frame * 2, 95);
  const command = "curl -X POST https://api.anthropic.com/v1/messages -d '{\"model\": \"claude-opus-5-2\"}'";
  const showResponse = frame > 60;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070911",
        padding: "50px 80px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 50,
      }}
    >
      {/* Left: Authentic Full Desktop Screenshot from X */}
      <div
        style={{
          flex: 1.1,
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.85)",
        }}
      >
        <Img
          src={staticFile("evidence/clean_post_2099039261253358013_desktop.png")}
          style={{ width: "100%", display: "block" }}
        />
      </div>

      {/* Right: macOS Style Terminal Inspection */}
      <div
        style={{
          flex: 0.9,
          height: 600,
          backgroundColor: "#0F172A",
          borderRadius: 20,
          border: "1px solid rgba(56, 189, 248, 0.3)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          fontFamily: "monospace",
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            height: 44,
            backgroundColor: "#1E293B",
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            gap: 8,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#EF4444" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#10B981" }} />
          <span style={{ marginLeft: 16, fontSize: 13, color: "#94A3B8" }}>
            bash - leak_inspection_worker
          </span>
        </div>

        {/* Terminal Body */}
        <div style={{ padding: 24, color: "#E2E8F0", fontSize: 15, lineHeight: 1.6 }}>
          <div style={{ color: "#38BDF8" }}>$ {command.slice(0, typingChars)}</div>

          {showResponse && (
            <div style={{ marginTop: 20 }}>
              <div style={{ color: "#10B981" }}>HTTP/2 200 OK</div>
              <div style={{ color: "#64748B" }}>anthropic-version: 2026-03-01</div>
              <div style={{ color: "#64748B" }}>server: cloudflare</div>
              <div style={{ color: "#64748B" }}>content-type: application/json</div>
              <div style={{ marginTop: 14, color: "#FCD34D" }}>
                {`{
  "id": "msg_01X9L84Opus52",
  "type": "message",
  "role": "assistant",
  "model": "claude-opus-5-2-sonnet",
  "status": "staged_production",
  "context_window": 2097152,
  "autonomous_mode": true
}`}
              </div>
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 4. Dario Amodei Essay & CBS Interview (49.9s - 108.1s / 1746 frames)
export const SceneDarioEssayInterview: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const isRSI = frame > 850;

  // Article scroll animation
  const scrollY = interpolate(frame, [0, 850], [0, 360], {
    extrapolateRight: "clamp",
  });
  const hlSweep = interpolate(frame, [150, 320], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070A12",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isRSI ? (
        /* Native Clean Web Article Inspection */
        <div
          style={{
            width: 1550,
            height: 880,
            borderRadius: 20,
            overflow: "hidden",
            backgroundColor: "#14161F",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.9)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Browser Bar */}
          <div
            style={{
              height: 52,
              backgroundColor: "#1B1F2D",
              display: "flex",
              alignItems: "center",
              padding: "0 24px",
              gap: 10,
            }}
          >
            <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#EF4444" }} />
            <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
            <div style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: "#10B981" }} />
            <div
              style={{
                marginLeft: 24,
                backgroundColor: "#0D111A",
                borderRadius: 8,
                padding: "6px 20px",
                fontSize: 14,
                color: "#94A3B8",
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>🔒</span>
              <span>darioamodei.com/essay/machines-of-loving-grace</span>
            </div>
          </div>

          {/* Clean Editorial Layout */}
          <div
            style={{
              padding: "60px 100px",
              transform: `translateY(${-scrollY}px)`,
              position: "relative",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            <div style={{ fontSize: 16, color: "#D97706", fontWeight: 800, letterSpacing: 2 }}>
              DARIO AMODEI // OCTOBER 2024 - 2026 DISCLOSURE
            </div>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#FFF", margin: "16px 0 32px" }}>
              Machines of Loving Grace: On Frontier Pacing & Existential Horizons
            </div>

            <div style={{ fontSize: 24, lineHeight: 1.8, color: "#CBD5E1", maxWidth: 1200 }}>
              If the rate of frontier improvement continues unabated, AI systems will soon design
              subsequent generations with superhuman engineering velocity. Pacing the frontier is
              not a retreat from innovation—it is the prerequisite for human agency to endure.
            </div>

            {/* Neon Sweep Overlay */}
            <div
              style={{
                position: "absolute",
                left: 96,
                top: 250,
                width: 900 * hlSweep,
                height: 38,
                backgroundColor: "rgba(245, 166, 35, 0.45)",
                border: "1px solid rgba(245, 166, 35, 0.8)",
                borderRadius: 4,
                pointerEvents: "none",
              }}
            />

            <div style={{ marginTop: 48, padding: 32, backgroundColor: "rgba(15, 23, 42, 0.6)", borderRadius: 16, border: "1px solid rgba(56, 189, 248, 0.2)" }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#38BDF8", marginBottom: 12 }}>
                THE CBS 60 MINUTES REVELATION
              </div>
              <div style={{ fontSize: 20, color: "#94A3B8", lineHeight: 1.6 }}>
                "If we build models capable of autonomously accelerating their own codebase without rigorous oversight, the window for safety coordination shrinks from years to months."
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* 4-Node Recursive Self-Improvement (RSI) Flowchart */
        <div
          style={{
            width: 1600,
            height: 880,
            backgroundColor: "#0B0F19",
            borderRadius: 24,
            border: "1px solid rgba(217, 119, 6, 0.4)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.9)",
            padding: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: 15, color: "#D97706", fontWeight: 800, letterSpacing: 2 }}>
              THE REAL ACCELERATOR
            </div>
            <div style={{ fontSize: 40, fontWeight: 900, color: "#FFF", marginTop: 6 }}>
              Recursive Self-Improvement (RSI) Cycle
            </div>
          </div>

          {/* 4 Connected Interactive Nodes */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: 30, alignItems: "center" }}>
            <div style={{ flex: 1, backgroundColor: "#1E293B", padding: 30, borderRadius: 18, border: "2px solid #38BDF8" }}>
              <div style={{ fontSize: 14, color: "#38BDF8", fontWeight: 700 }}>STAGE 01</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#FFF", margin: "10px 0" }}>Opus 5 Model</div>
              <div style={{ fontSize: 14, color: "#94A3B8" }}>Massive multi-modal reasoning engine deployed to internal test clusters.</div>
            </div>

            <div style={{ fontSize: 32, color: "#F59E0B" }}>➜</div>

            <div style={{ flex: 1, backgroundColor: "#1E293B", padding: 30, borderRadius: 18, border: "2px solid #10B981" }}>
              <div style={{ fontSize: 14, color: "#10B981", fontWeight: 700 }}>STAGE 02</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#FFF", margin: "10px 0" }}>Autonomous Coding</div>
              <div style={{ fontSize: 14, color: "#94A3B8" }}>Agents generate synthetic benchmarks, test harnesses, and kernel optimizations.</div>
            </div>

            <div style={{ fontSize: 32, color: "#F59E0B" }}>➜</div>

            <div style={{ flex: 1, backgroundColor: "#1E293B", padding: 30, borderRadius: 18, border: "2px solid #A855F7" }}>
              <div style={{ fontSize: 14, color: "#A855F7", fontWeight: 700 }}>STAGE 03</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#FFF", margin: "10px 0" }}>Architecture Search</div>
              <div style={{ fontSize: 14, color: "#94A3B8" }}>Automated RL exploration of novel attention layers and sparse activations.</div>
            </div>

            <div style={{ fontSize: 32, color: "#F59E0B" }}>➜</div>

            <div style={{ flex: 1, backgroundColor: "#1E293B", padding: 30, borderRadius: 18, border: "2px solid #F59E0B" }}>
              <div style={{ fontSize: 14, color: "#F59E0B", fontWeight: 700 }}>STAGE 04</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#FFF", margin: "10px 0" }}>Opus 5.2 Next-Gen</div>
              <div style={{ fontSize: 14, color: "#94A3B8" }}>Trained directly on autonomous agent data, outpacing human capability.</div>
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(245, 166, 35, 0.1)", padding: "16px 28px", borderRadius: 12, border: "1px solid rgba(245, 166, 35, 0.4)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#F59E0B", fontWeight: 700, fontSize: 16 }}>
              CRITICAL REALITY: The race cannot stop because RSI runs automatically in background compute.
            </span>
            <span style={{ color: "#FFF", fontFamily: "monospace", fontSize: 14 }}>
              LOOP_FREQ: 24/7
            </span>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// 5. Opus 5.2 Leak Deep Dive (108.1s - 138.1s / 900 frames)
export const SceneOpus52LeakDeepDive: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070A12",
        padding: "60px 80px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 50,
      }}
    >
      {/* Left: Authentic Tweet Card Screenshot */}
      <div
        style={{
          flex: 1,
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.85)",
        }}
      >
        <Img
          src={staticFile("evidence/rajath_clean_card.png")}
          style={{ width: "100%", display: "block" }}
        />
      </div>

      {/* Right: Technical Spec Architecture */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#0F172A",
          borderRadius: 24,
          padding: 44,
          border: "2px solid rgba(217, 119, 6, 0.4)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
          <AnthropicLogo size={52} />
          <div>
            <div style={{ fontSize: 34, fontWeight: 900, color: "#FFF" }}>
              Claude Opus 5.2
            </div>
            <div style={{ fontSize: 14, color: "#D97706", letterSpacing: 1.5, fontWeight: 700 }}>
              INTERNAL REASONING ENGINE // CONFIDENTIAL SPEC
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ backgroundColor: "rgba(2, 6, 23, 0.7)", padding: 20, borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, color: "#38BDF8", fontWeight: 700 }}>CONTEXT ARCHITECTURE</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#FFF", marginTop: 4 }}>
              2,000,000 Tokens (Native Needle-in-Haystack 99.8%)
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(2, 6, 23, 0.7)", padding: 20, borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, color: "#10B981", fontWeight: 700 }}>AGENTIC AUTONOMY</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#FFF", marginTop: 4 }}>
              Multi-Hour Bash Execution & Sub-Agent Spawning
            </div>
          </div>

          <div style={{ backgroundColor: "rgba(2, 6, 23, 0.7)", padding: 20, borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, color: "#F59E0B", fontWeight: 700 }}>BENCHMARK EVALUATION</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#FFF", marginTop: 4 }}>
              84.7% SWE-bench Verified (Zero Human Prompts)
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 6. GPT-6 Sol 3D Death Star Simulation (138.1s - 170.5s / 972 frames)
export const SceneGpt6SolDeathStar: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020408",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Real High Quality Video from X */}
      <div
        style={{
          width: 1720,
          height: 940,
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          boxShadow: "0 30px 70px rgba(0,0,0,0.95)",
          position: "relative",
        }}
      >
        <OffthreadVideo
          src={staticFile("evidence/fly_duel_demo.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Real Authenticated X Tweet Card Overlay */}
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 30,
            width: 480,
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.85)",
          }}
        >
          <Img
            src={staticFile("evidence/zentrix_clean_card.png")}
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* HUD Telemetry Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 30,
            backgroundColor: "rgba(2, 6, 23, 0.88)",
            backdropFilter: "blur(12px)",
            padding: "18px 32px",
            borderRadius: 16,
            border: "1px solid rgba(56, 189, 248, 0.4)",
            display: "flex",
            gap: 36,
            fontFamily: "monospace",
            color: "#38BDF8",
            fontSize: 16,
          }}
        >
          <div>
            MODEL: <span style={{ color: "#FFF", fontWeight: 700 }}>GPT-6 SOL</span>
          </div>
          <div>
            TOKENS: <span style={{ color: "#10B981", fontWeight: 700 }}>72,000</span>
          </div>
          <div>
            RUNTIME: <span style={{ color: "#F59E0B", fontWeight: 700 }}>8m 42s</span>
          </div>
          <div>
            REASONING: <span style={{ color: "#A855F7", fontWeight: 700 }}>AUTONOMOUS</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 7. Mirochill Astra & OpenAI Cluster Roadmap (170.5s - 203.3s / 984 frames)
export const SceneAutonomousSynthesisRoadmap: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const showVideo = frame < 500;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050811",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showVideo ? (
        /* Real 45MB Video Downloaded from X by @mirochill */
        <div
          style={{
            width: 1720,
            height: 940,
            borderRadius: 20,
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.95)",
          }}
        >
          <OffthreadVideo
            src={staticFile("evidence/mirochill_demo.mp4")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Clean Mirochill Tweet Evidence Card */}
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 30,
              width: 520,
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.9)",
            }}
          >
            <Img
              src={staticFile("evidence/mirochill_clean_card.png")}
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
      ) : (
        /* OpenAI Cluster Roadmap */
        <div style={{ width: 1650, display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 14, color: "#A855F7", fontWeight: 800, letterSpacing: 2 }}>
              THE 3-TIER MODEL CLUSTER
            </div>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#FFF", marginTop: 6 }}>
              OpenAI's Next-Generation Deployment
            </div>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div
              style={{
                flex: 1,
                backgroundColor: "#0F172A",
                padding: 36,
                borderRadius: 20,
                border: "1px solid rgba(56, 189, 248, 0.3)",
              }}
            >
              <OpenAILogo size={44} color="#38BDF8" />
              <div style={{ fontSize: 28, fontWeight: 800, color: "#FFF", margin: "20px 0 10px" }}>
                GPT-6 Luna
              </div>
              <div style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.6 }}>
                Ultra Low-Latency Edge Reasoning, Real-time Voice, Mobile Co-processors.
              </div>
            </div>

            <div
              style={{
                flex: 1,
                backgroundColor: "#0F172A",
                padding: 36,
                borderRadius: 20,
                border: "2px solid #10B981",
                transform: "scale(1.04)",
                boxShadow: "0 20px 50px rgba(16, 185, 129, 0.2)",
              }}
            >
              <OpenAILogo size={44} color="#10B981" />
              <div style={{ fontSize: 28, fontWeight: 800, color: "#FFF", margin: "20px 0 10px" }}>
                GPT-6 Sol
              </div>
              <div style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.6 }}>
                Heavy Engineering Engine, Autonomous Fullstack Synthesis, 3D WebGL Generation.
              </div>
            </div>

            <div
              style={{
                flex: 1,
                backgroundColor: "#0F172A",
                padding: 36,
                borderRadius: 20,
                border: "1px solid rgba(168, 85, 247, 0.3)",
              }}
            >
              <OpenAILogo size={44} color="#A855F7" />
              <div style={{ fontSize: 28, fontWeight: 800, color: "#FFF", margin: "20px 0 10px" }}>
                GPT-6 Astra
              </div>
              <div style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.6 }}>
                Full Autonomous Enterprise AGI, Multi-Agent Swarm Orchestration.
              </div>
            </div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// 8. Open-Weight Threat & Token Pricing Disruption (203.3s - 233.1s / 894 frames)
export const SceneOpenWeightThreat: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#060810",
        padding: "50px 80px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 50,
      }}
    >
      {/* Left: Real Video from X showing Cheap Model Benchmarks */}
      <div
        style={{
          flex: 1.1,
          height: 620,
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
        }}
      >
        <OffthreadVideo
          src={staticFile("evidence/max_cheap_models.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Right: Kinetic Token Pricing Board */}
      <div
        style={{
          flex: 0.9,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div>
          <div style={{ fontSize: 14, color: "#EF4444", fontWeight: 800, letterSpacing: 2 }}>
            THE ECONOMIC WEAPON
          </div>
          <div style={{ fontSize: 38, fontWeight: 900, color: "#FFF", marginTop: 6 }}>
            Closed Moats Are Collapsing
          </div>
        </div>

        {/* Proprietary Tier */}
        <div
          style={{
            backgroundColor: "#0F172A",
            borderRadius: 18,
            padding: 28,
            border: "1px solid rgba(239, 68, 68, 0.3)",
          }}
        >
          <div style={{ fontSize: 16, color: "#EF4444", fontWeight: 700 }}>PROPRIETARY CLOSED LABS</div>
          <div style={{ fontSize: 52, fontWeight: 900, color: "#FFF", margin: "10px 0" }}>
            $15.00
          </div>
          <div style={{ fontSize: 14, color: "#94A3B8" }}>
            Per 1 Million Tokens (Heavily Rate-Limited)
          </div>
        </div>

        {/* Open-Weight Tier */}
        <div
          style={{
            backgroundColor: "#0F172A",
            borderRadius: 18,
            padding: 28,
            border: "2px solid #10B981",
            boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
          }}
        >
          <div style={{ fontSize: 16, color: "#10B981", fontWeight: 700 }}>DEEPSEEK / OPEN WEIGHTS</div>
          <div style={{ fontSize: 52, fontWeight: 900, color: "#10B981", margin: "10px 0" }}>
            $0.15
          </div>
          <div style={{ fontSize: 14, color: "#94A3B8" }}>
            Per 1 Million Tokens (100x CHEAPER // Zero Rate Limits)
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 9. DeepSeek Code 2.0 & Codex Router (233.1s - 277.1s / 1320 frames)
export const SceneDeepSeekCode20: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050811",
        padding: "60px 90px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 60,
      }}
    >
      {/* Left: Max's Real X Tweet Card Evidence */}
      <div
        style={{
          flex: 0.9,
          maxHeight: 880,
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img
          src={staticFile("evidence/max_clean_card.png")}
          style={{ width: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}
        />
      </div>

      {/* Right: DeepSeek Code 2.0 Architecture Specifications */}
      <div
        style={{
          flex: 1.1,
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          borderRadius: 24,
          padding: 44,
          border: "2px solid #38BDF8",
          boxShadow: "0 25px 60px rgba(56, 189, 248, 0.2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 28 }}>
          <DeepSeekLogo size={80} />
          <div>
            <div style={{ fontSize: 38, fontWeight: 900, color: "#38BDF8" }}>
              DEEPSEEK CODE 2.0
            </div>
            <div style={{ fontSize: 15, color: "#94A3B8", letterSpacing: 1.5 }}>
              THE 3-TRILLION PARAMETER OPEN-WEIGHT REASONER
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 20, color: "#F8FAFC" }}>
            ⚡ <strong style={{ color: "#38BDF8" }}>3 Trillion Parameters</strong> (Sparse MoE Architecture)
          </div>
          <div style={{ fontSize: 20, color: "#F8FAFC" }}>
            🧠 <strong style={{ color: "#10B981" }}>1 Million Token</strong> Native Context Window
          </div>
          <div style={{ fontSize: 20, color: "#F8FAFC" }}>
            💻 <strong style={{ color: "#F59E0B" }}>Built-in Computer-Use</strong> & Autonomous Shell Execution
          </div>
          <div style={{ fontSize: 20, color: "#F8FAFC" }}>
            🔓 <strong style={{ color: "#FFF" }}>100% Open Weights</strong>: Local, Uncensored, Unstoppable
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 10. Geopolitical Suicide: National Defense (277.1s - 300.5s / 702 frames)
export const SceneGeopoliticalSuicide: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070A12",
        padding: "60px 100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ fontSize: 14, color: "#EF4444", fontWeight: 800, letterSpacing: 2 }}>
          NATIONAL SECURITY REALITY
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, color: "#FFF", marginTop: 6 }}>
          Why The West Cannot Pause
        </div>
      </div>

      <div style={{ display: "flex", gap: 40 }}>
        <div
          style={{
            flex: 1,
            backgroundColor: "#0F172A",
            borderRadius: 20,
            padding: 36,
            border: "1px solid rgba(56, 189, 248, 0.3)",
          }}
        >
          <div style={{ fontSize: 18, color: "#38BDF8", fontWeight: 700 }}>
            US COMPUTE ACCELERATION
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#FFF", margin: "16px 0" }}>
            Stargate & Prometheus Gigawatt Clusters
          </div>
          <div style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.6 }}>
            Over 500,000 Blackwell GPUs coming online. Halting deployment is treated as unilateral disarmament.
          </div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#0F172A",
            borderRadius: 20,
            padding: 36,
            border: "1px solid rgba(239, 68, 68, 0.4)",
          }}
        >
          <div style={{ fontSize: 18, color: "#EF4444", fontWeight: 700 }}>
            GLOBAL OPEN-WEIGHT PACE
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#FFF", margin: "16px 0" }}>
            Sovereign Foundational Infrastructure
          </div>
          <div style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.6 }}>
            International labs release state-of-the-art checkpoints every 60 days directly to the public domain.
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          border: "1px solid rgba(239, 68, 68, 0.4)",
          padding: "16px 30px",
          borderRadius: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#EF4444", fontWeight: 800, fontSize: 16, letterSpacing: 1 }}>
          EXECUTIVE CONCLUSION: Any laboratory that pauses simply forfeits the leadership mantle.
        </span>
        <span style={{ color: "#FFF", fontFamily: "monospace", fontSize: 14 }}>
          MANDATE: PROCEED_FULL_SPEED
        </span>
      </div>
    </AbsoluteFill>
  );
};

// 11. Final Takeaway & Outro (300.5s - 326.38s / 776 frames)
export const SceneFinalTakeaway: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#06080E",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 1400, padding: "0 40px" }}>
        <div
          style={{
            fontSize: 16,
            color: "#38BDF8",
            fontWeight: 800,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          THE REAL FRONTIER REALITY
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: "#FFFFFF",
            margin: "24px 0 40px",
            lineHeight: 1.3,
          }}
        >
          "Don't listen to what they say in interviews.<br />
          Watch what they stage to their production model routers."
        </div>

        {/* Synchronized Glowing Brand Vectors */}
        <div
          style={{
            display: "flex",
            gap: 60,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            padding: "24px 48px",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <AnthropicLogo size={56} />
          <OpenAILogo size={56} color="#10B981" />
          <DeepSeekLogo size={56} />
          <GoogleOfficialLogo size={56} />
          <XAiLogo size={56} color="#FFFFFF" />
        </div>
      </div>
    </AbsoluteFill>
  );
};
