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
import { CinematicScreenRecord } from "../components/CinematicScreenRecord";
import {
  AnthropicOfficialLogo,
  GoogleOfficialLogo,
  OpenAILogo,
  XAIOfficialLogo,
} from "../components/RealLogos";

// ==========================================
// ACT 1: SURPRISE DROP & ECONOMIC AMBUSH
// (Frames 0 -> 930 | 0.0s -> 31.0s)
// ==========================================
export const Act1SurpriseDrop: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Beat 1: 0 -> 360 (Cold Open Hook: Unexpected Grok 4.7 Drop)
  // Beat 2: 360 -> 930 (Pricing War: $2/$6 vs $10/$50)
  const isBeat2 = frame >= 360;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14" }}>
      {/* Ambient Depth Streamlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 20%, rgba(29, 78, 216, 0.15) 0%, transparent 70%)",
        }}
      />

      {!isBeat2 ? (
        // Beat 1: 100% Flat Native Browser View of Yi's Tweet & Launch Matrix
        <CinematicScreenRecord
          mediaSrc="evidence/grok47_specs.png"
          sourceUrl="https://x.com/imhaoyi/status/2102082268730945829"
          durationInFrames={360}
          brandLogo={<XAIOfficialLogo size={24} color="#FFFFFF" />}
          brandName="xAI Grok 4.7"
          badgeColor="#38BDF8"
          headlineBadge="UNANNOUNCED LAUNCH"
          startScrollY={0}
          endScrollY={260}
          isCard={true}
        />
      ) : (
        // Beat 2: Dual Split - Left: Official Launch Matrix, Right: Pricing Disruption Board
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "40px 60px",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* Left Pane: Authentic Matrix Table */}
          <div
            style={{
              flex: "1.1",
              height: 960,
              background: "rgba(13, 19, 33, 0.95)",
              borderRadius: 16,
              border: "1.5px solid rgba(56, 189, 248, 0.3)",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              position: "relative",
            }}
          >
            <div
              style={{
                height: 52,
                background: "rgba(15, 23, 42, 0.98)",
                borderBottom: "1px solid rgba(51, 65, 85, 0.6)",
                display: "flex",
                alignItems: "center",
                padding: "0 20px",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
              </div>
              <span style={{ fontSize: 13, color: "#94A3B8", fontFamily: "monospace" }}>
                x.ai/news/grok-4-7 • official_specs.png
              </span>
            </div>
            <div style={{ overflow: "hidden", height: 908 }}>
              <Img
                src={staticFile("evidence/grok47_specs.png")}
                style={{
                  width: "100%",
                  transform: `translateY(-${interpolate(frame, [360, durationInFrames], [200, 480], { extrapolateRight: "clamp" })}px)`,
                }}
              />
            </div>
          </div>

          {/* Right Pane: High-Contrast Pricing Reality */}
          <div
            style={{
              flex: "0.9",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                padding: "24px 32px",
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                borderRadius: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <AnthropicOfficialLogo size={28} />
                <span style={{ fontSize: 16, fontWeight: 700, color: "#F87171" }}>
                  CLAUDE FABLE 5.1 (FLAGSHIP)
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", fontFamily: "monospace" }}>
                  $10 / $50
                </span>
                <span style={{ fontSize: 15, color: "#94A3B8" }}>per 1M tokens</span>
              </div>
            </div>

            <div
              style={{
                padding: "28px 32px",
                background: "rgba(16, 26, 46, 0.95)",
                border: "2px solid #38BDF8",
                borderRadius: 16,
                boxShadow: "0 0 40px rgba(56, 189, 248, 0.25)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <XAIOfficialLogo size={28} color="#38BDF8" />
                <span style={{ fontSize: 16, fontWeight: 800, color: "#38BDF8" }}>
                  xAI GROK 4.7 (NEW DROP)
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 52, fontWeight: 900, color: "#38BDF8", fontFamily: "monospace" }}>
                  $2 / $6
                </span>
                <span style={{ fontSize: 15, color: "#94A3B8" }}>per 1M tokens</span>
              </div>
            </div>

            {/* Delta Callout */}
            <div
              style={{
                padding: "20px 24px",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 700, color: "#10B981" }}>
                COST DELTA:
              </span>
              <span style={{ fontSize: 28, fontWeight: 900, color: "#10B981", fontFamily: "monospace" }}>
                -88% DISCOUNT
              </span>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// ==========================================
// ACT 2: THE EEBENCH UPSET (OPUS 5 TOPPLED)
// (Frames 930 -> 2300 | 31.0s -> 76.7s)
// ==========================================
export const Act2EEBenchUpset: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  // Beat 1 (0 -> 515 [local frame relative to 930]): Full Tweet overview
  // Beat 2 (515 -> 1035): Leaderboard focus zoom
  // Beat 3 (1035 -> duration): Rank 2 World Standing
  const isZoom = frame >= 515;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
        }}
      />

      {!isZoom ? (
        // Flat Native Tweet Inspection
        <CinematicScreenRecord
          mediaSrc="evidence/grok47_eebench.png"
          sourceUrl="https://x.com/XEthanai/status/2102082059946594342"
          durationInFrames={515}
          brandLogo={<XAIOfficialLogo size={24} color="#FFFFFF" />}
          brandName="EEBench Leaderboard"
          badgeColor="#F59E0B"
          headlineBadge="AGENT BENCHMARK UPSET"
          startScrollY={100}
          endScrollY={750}
          isCard={true}
        />
      ) : (
        // Detailed Zoom On Leaderboard Rows
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              width: 1760,
              height: 960,
              background: "rgba(11, 17, 30, 0.98)",
              border: "1.5px solid rgba(245, 158, 11, 0.4)",
              borderRadius: 16,
              boxShadow: "0 30px 80px rgba(0,0,0,0.9)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: 56,
                background: "rgba(15, 23, 42, 0.98)",
                borderBottom: "1px solid rgba(51, 65, 85, 0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: "#F59E0B", letterSpacing: "0.08em" }}>
                  EEBENCH: ELECTRICAL ENGINEERING AGENT BENCHMARK
                </span>
              </div>
              <span style={{ fontSize: 13, color: "#94A3B8", fontFamily: "monospace" }}>
                OFFICIAL REAL-WORLD AGENT EVALUATION
              </span>
            </div>

            {/* Leaderboard Rows Breakdown */}
            <div style={{ flex: 1, padding: "40px 60px", display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Rank 1: GPT-6 Astra */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 32px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontSize: 24, fontWeight: 900, color: "#94A3B8", width: 40 }}>#1</span>
                  <OpenAILogo size={32} />
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF" }}>GPT-6 Astra</div>
                    <div style={{ fontSize: 13, color: "#64748B" }}>OpenAI • Unreleased Frontier Checkpoint</div>
                  </div>
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#94A3B8", fontFamily: "monospace" }}>
                  69.3%
                </div>
              </div>

              {/* Rank 2: Grok 4.7 (HERO ROW) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "24px 32px",
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "2px solid #38BDF8",
                  borderRadius: 12,
                  boxShadow: "0 0 35px rgba(56, 189, 248, 0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontSize: 26, fontWeight: 900, color: "#38BDF8", width: 40 }}>#2</span>
                  <XAIOfficialLogo size={36} color="#38BDF8" />
                  <div>
                    <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>
                      Grok 4.7 <span style={{ fontSize: 14, color: "#38BDF8", fontWeight: 700 }}>[NEW ENTRY]</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#38BDF8" }}>xAI • $2/$6 API Rate</div>
                  </div>
                </div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#38BDF8", fontFamily: "monospace" }}>
                  64.0%
                </div>
              </div>

              {/* Rank 3: Claude Opus 5 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 32px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontSize: 24, fontWeight: 900, color: "#64748B", width: 40 }}>#3</span>
                  <AnthropicOfficialLogo size={32} />
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#CBD5E1" }}>Claude Opus 5</div>
                    <div style={{ fontSize: 13, color: "#64748B" }}>Anthropic • High-Tier Reasoning</div>
                  </div>
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#94A3B8", fontFamily: "monospace" }}>
                  61.6%
                </div>
              </div>

              {/* Rank 5: Claude Fable 5.1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 32px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontSize: 24, fontWeight: 900, color: "#64748B", width: 40 }}>#5</span>
                  <AnthropicOfficialLogo size={32} />
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#CBD5E1" }}>Claude Fable 5.1</div>
                    <div style={{ fontSize: 13, color: "#64748B" }}>Anthropic • $50/M Token Tier</div>
                  </div>
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#94A3B8", fontFamily: "monospace" }}>
                  56.4%
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

// ==========================================
// ACT 3: PRICING WAR & TERMINAL WORKHORSE
// (Frames 2300 -> 3450 | 76.7s -> 115.0s)
// ==========================================
export const Act3SpecsAndTerminal: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
        }}
      />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "40px 60px",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left Pane: SpaceXAI Matrix Table */}
        <div
          style={{
            flex: "1",
            height: 960,
            background: "rgba(13, 19, 33, 0.98)",
            borderRadius: 16,
            border: "1.5px solid rgba(56, 189, 248, 0.3)",
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: 52,
              background: "rgba(15, 23, 42, 0.98)",
              borderBottom: "1px solid rgba(51, 65, 85, 0.6)",
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
            </div>
            <span style={{ fontSize: 13, color: "#94A3B8", fontFamily: "monospace" }}>
              SpaceXAI Official Launch Matrix
            </span>
          </div>
          <div style={{ overflow: "hidden", flex: 1 }}>
            <Img
              src={staticFile("evidence/grok47_specs.png")}
              style={{
                width: "100%",
                transform: `translateY(-${interpolate(frame, [0, durationInFrames], [420, 680], { extrapolateRight: "clamp" })}px)`,
              }}
            />
          </div>
        </div>

        {/* Right Pane: Live Terminal Agent Demo Video */}
        <div
          style={{
            flex: "1",
            height: 960,
            background: "rgba(13, 19, 33, 0.98)",
            borderRadius: 16,
            border: "1.5px solid rgba(16, 185, 129, 0.3)",
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: 52,
              background: "rgba(15, 23, 42, 0.98)",
              borderBottom: "1px solid rgba(51, 65, 85, 0.6)",
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
            </div>
            <span style={{ fontSize: 13, color: "#10B981", fontFamily: "monospace" }}>
              Live Agent Execution • Terminal Loop Proof
            </span>
          </div>
          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
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
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ==========================================
// ACT 4: THE STRATEGIC HYPOCRISY
// (Frames 3450 -> 3940 | 115.0s -> 131.3s)
// ==========================================
export const Act4StrategicHypocrisy: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
        }}
      />
      {/* 100% Flat Native View of Rajath Gowda's Viral Tweet */}
      <CinematicScreenRecord
        mediaSrc="evidence/rajath_tweet.png"
        sourceUrl="https://x.com/buildwithrajath/status/2099039261253358013"
        durationInFrames={durationInFrames}
        brandLogo={<XAIOfficialLogo size={24} color="#FFFFFF" />}
        brandName="Frontier Industry Analysis"
        badgeColor="#EF4444"
        headlineBadge="THE FRONTIER HYPOCRISY"
        startScrollY={0}
        endScrollY={180}
        isCard={true}
      />
    </AbsoluteFill>
  );
};

// ==========================================
// ACT 5: FINAL VERDICT & FRONTIER SHIFT
// (Frames 3940 -> 4375 | 131.3s -> 145.8s)
// ==========================================
export const Act5FinalVerdict: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070B14",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.18) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          width: 1760,
          height: 960,
          background: "rgba(11, 17, 30, 0.98)",
          borderRadius: 16,
          border: "1.5px solid rgba(56, 189, 248, 0.4)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          boxShadow: "0 30px 90px rgba(0,0,0,0.95)",
        }}
      >
        <div style={{ display: "flex", gap: 36, marginBottom: 48, alignItems: "center" }}>
          <XAIOfficialLogo size={64} color="#38BDF8" />
          <OpenAILogo size={56} color="#10A37F" />
          <AnthropicOfficialLogo size={56} />
          <GoogleOfficialLogo size={56} />
        </div>

        <h1
          style={{
            fontSize: 54,
            fontWeight: 900,
            color: "#FFFFFF",
            textAlign: "center",
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          THE $50 ILLUSION IS BROKEN
        </h1>

        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: 1100,
            lineHeight: 1.6,
          }}
        >
          Frontier engineering is no longer reserved for $200 subscriptions.
          <br />
          Grok 4.7 proved that elite agentic reliability can run at $2 per million tokens.
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 48,
          }}
        >
          <div
            style={{
              padding: "16px 32px",
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid #38BDF8",
              borderRadius: 30,
              fontSize: 16,
              fontWeight: 800,
              color: "#38BDF8",
            }}
          >
            RANK #2 EEBENCH
          </div>
          <div
            style={{
              padding: "16px 32px",
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid #10B981",
              borderRadius: 30,
              fontSize: 16,
              fontWeight: 800,
              color: "#10B981",
            }}
          >
            $2 / $6 PER MILLION
          </div>
          <div
            style={{
              padding: "16px 32px",
              background: "rgba(245, 158, 11, 0.12)",
              border: "1px solid #F59E0B",
              borderRadius: 30,
              fontSize: 16,
              fontWeight: 800,
              color: "#F59E0B",
            }}
          >
            500K CONTEXT
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
