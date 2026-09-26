import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";
import {
  AppleLogo,
  AwsBedrockLogo,
  CerebrasLogo,
  DeepSeekLogo,
  MoonshotKimiLogo,
  OpenAILogo,
  QwenLogo,
  XLogo,
} from "../components/RealLogos";
import { YouTubeAnalyticsCTA } from "../components/YouTubeAnalyticsCTA";
import { MoENetworkVisualizer } from "../components/MoENetworkVisualizer";
import { VercelTelemetryCard } from "../components/VercelTelemetryCard";
import { BongoCatMascot } from "../components/BongoCatMascot";

// 1. Full-Width 1720px Native Documentary Tweet Card
export const TweetInspectCard: React.FC<{
  imageName: string;
  headline?: string;
}> = ({ imageName, headline }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at center, #0B0F1A 0%, #03050A 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 60px",
      }}
    >
      {headline && (
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 24,
            fontWeight: 800,
            color: "#38BDF8",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 20,
            background: "rgba(56, 189, 248, 0.12)",
            border: "1px solid rgba(56, 189, 248, 0.35)",
            padding: "8px 28px",
            borderRadius: 999,
          }}
        >
          {headline}
        </div>
      )}
      <div
        style={{
          width: 1720,
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 35px 80px rgba(0,0,0,0.95)",
          transform: `scale(${scale})`,
        }}
      >
        <Img src={staticFile(`evidence/${imageName}`)} style={{ width: "100%", display: "block" }} />
      </div>
    </AbsoluteFill>
  );
};

// 2. Real Video Evidence Dossier (1760x960 macOS Window)
export const RealVideoDossier: React.FC<{
  videoName: string;
  title: string;
  subtitle: string;
  sourceUrl: string;
  tag: string;
}> = ({ videoName, title, subtitle, sourceUrl, tag }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at center, #0B1124 0%, #030611 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      <div
        style={{
          width: 1760,
          height: 960,
          background: "#080A10",
          border: "1px solid #1E293B",
          borderRadius: 28,
          boxShadow: "0 40px 90px rgba(0,0,0,0.95)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transform: `scale(${scale})`,
        }}
      >
        {/* macOS Window Header */}
        <div
          style={{
            background: "#0E131F",
            borderBottom: "1px solid #1E293B",
            padding: "16px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FF5F56" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FFBD2E" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#27C93F" }} />
          </div>
          <div
            style={{
              background: "#161D2E",
              border: "1px solid #29354F",
              borderRadius: 999,
              padding: "6px 28px",
              fontSize: 16,
              color: "#38BDF8",
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span>🔒</span>
            <span>{sourceUrl}</span>
          </div>
          <div
            style={{
              background: "rgba(56, 189, 248, 0.15)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              color: "#38BDF8",
              borderRadius: 8,
              padding: "6px 16px",
              fontSize: 14,
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            {tag}
          </div>
        </div>

        {/* Dossier Body: Left Video Hero + Right Telemetry */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* Left: Real Video Stream */}
          <div
            style={{
              flex: 1.25,
              background: "#000000",
              position: "relative",
              borderRight: "1px solid #1E293B",
              overflow: "hidden",
            }}
          >
            <Video
              src={staticFile(`evidence/${videoName}`)}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              muted={true}
              volume={0}
            />
          </div>

          {/* Right: Analytical Inspection Panel */}
          <div
            style={{
              flex: 0.75,
              padding: 44,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "linear-gradient(180deg, #0A0E1A 0%, #04060C 100%)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 16,
                  color: "#38BDF8",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginBottom: 12,
                }}
              >
                Benchmark Verification
              </div>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                  marginBottom: 20,
                }}
              >
                {title}
              </div>
              <div style={{ fontSize: 20, color: "#94A3B8", lineHeight: 1.5 }}>
                {subtitle}
              </div>
            </div>

            <div
              style={{
                background: "#0F172A",
                border: "1px solid #334155",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <div style={{ fontSize: 14, color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>
                Execution Profile
              </div>
              <div style={{ fontSize: 22, color: "#38BDF8", fontWeight: 800, marginTop: 4 }}>
                100% Zero-Shot Execution
              </div>
              <div style={{ fontSize: 15, color: "#94A3B8", marginTop: 4 }}>
                Direct browser synthesis without pre-rendered video assets.
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 3. Cold Open 50/50 Split Screen with 100% Official Vector Logos
export const ColdOpenSplit: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const leftSlide = spring({ frame, fps, config: { damping: 15, stiffness: 100 } });
  const flameFlash = interpolate(frame, [25, 35, 45], [0, 0.7, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "row", background: "#050711" }}>
      {/* Left Pane: Alibaba Qwen */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #160D2D 0%, #0A0718 100%)",
          borderRight: "2px solid #6336E7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          transform: `translateX(${(1 - leftSlide) * -100}px)`,
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 35,
            background: "#201242",
            border: "2px solid #6F69F7",
            boxShadow: "0 0 50px rgba(111, 105, 247, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <QwenLogo size={90} />
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 48,
            fontWeight: 900,
            color: "#FFFFFF",
            marginTop: 28,
            letterSpacing: 1,
          }}
        >
          ALIBABA QWEN 3.8
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#A5B4FC",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginTop: 10,
          }}
        >
          2.4T Parameters · 95B Active MoE
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            background: "rgba(99, 102, 241, 0.2)",
            border: "1px solid #818CF8",
            borderRadius: 999,
            padding: "10px 32px",
            fontSize: 20,
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          APACHE 2.0 LOCAL KING
        </div>
      </div>

      {/* Right Pane: Moonshot Kimi */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #051A33 0%, #020914 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 35,
            background: "#08264A",
            border: "2px solid #1783FF",
            boxShadow: "0 0 50px rgba(23, 131, 255, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MoonshotKimiLogo size={90} />
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 48,
            fontWeight: 900,
            color: "#FFFFFF",
            marginTop: 28,
            letterSpacing: 1,
          }}
        >
          MOONSHOT KIMI K3
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#38BDF8",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginTop: 10,
          }}
        >
          2.8T Scale · 896 Experts · #1 Arena
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            background: "rgba(56, 189, 248, 0.2)",
            border: "1px solid #38BDF8",
            borderRadius: 999,
            padding: "10px 32px",
            fontSize: 20,
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          LIVE ON AWS BEDROCK
        </div>

        {/* Bongo Cat Typing Mascot */}
        <div style={{ position: "absolute", bottom: 20, right: 30 }}>
          <BongoCatMascot size={160} />
        </div>
      </div>

      {/* Central VS Medallion */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 96,
          height: 96,
          borderRadius: "50%",
          background: "#0F172A",
          border: "3px solid #38BDF8",
          boxShadow: "0 0 40px #38BDF8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 34,
          fontWeight: 900,
          color: "#FFFFFF",
          zIndex: 20,
        }}
      >
        VS
      </div>

      {/* Anime Flame Flash Overlay */}
      {flameFlash > 0 && (
        <AbsoluteFill
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.6) 0%, rgba(239, 68, 68, 0) 70%)",
            opacity: flameFlash,
            pointerEvents: "none",
          }}
        />
      )}
    </AbsoluteFill>
  );
};

// 4. Apple Deal & Infrastructure Scene (1760x960 Full Canvas)
export const AppleQwenDossier: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at center, #0B1220 0%, #03050C 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      <div
        style={{
          width: 1760,
          height: 960,
          background: "#080C16",
          border: "1px solid #1E293B",
          borderRadius: 28,
          boxShadow: "0 35px 80px rgba(0, 0, 0, 0.95)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Left Pane: Apple Deal Graphic */}
        <div
          style={{
            flex: 1,
            padding: 56,
            borderRight: "1px solid #1E293B",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(180deg, #0F172A 0%, #020617 100%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 32, marginBottom: 36 }}>
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: 24,
                background: "#1E293B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AppleLogo size={60} />
            </div>
            <span style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF" }}>+</span>
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: 24,
                background: "#201242",
                border: "1px solid #6F69F7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <QwenLogo size={60} />
            </div>
          </div>
          <div style={{ fontSize: 34, fontWeight: 900, color: "#FFFFFF", textAlign: "center", marginBottom: 16 }}>
            Apple Intelligence Sovereign Partner
          </div>
          <div style={{ fontSize: 20, color: "#94A3B8", textAlign: "center", lineHeight: 1.55, maxWidth: 520 }}>
            Alibaba Qwen 3.8 Omni Flash selected to power on-device & cloud Siri queries across mainland China.
          </div>
          <div
            style={{
              marginTop: 36,
              background: "rgba(34, 197, 94, 0.15)",
              border: "1px solid #22C55E",
              borderRadius: 16,
              padding: "14px 32px",
              color: "#4ADE80",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            Sub-100ms Streaming Voice & Vision
          </div>
        </div>

        {/* Right Pane: 100% Flat Native Tweet Evidence */}
        <div style={{ flex: 1.25, padding: 36, display: "flex", alignItems: "center", background: "#05070E" }}>
          <Img
            src={staticFile("evidence/sambadawi_apple_qwen_card.png")}
            style={{ width: "100%", borderRadius: 20, boxShadow: "0 20px 40px rgba(0,0,0,0.8)" }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 5. AWS Bedrock Dossier Scene (1760x960 Full Canvas)
export const AwsBedrockDossier: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at center, #150F08 0%, #040302 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      <div
        style={{
          width: 1760,
          height: 960,
          background: "#0C0906",
          border: "1px solid #332211",
          borderRadius: 28,
          boxShadow: "0 35px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(255, 153, 0, 0.15)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: 56,
            borderRight: "1px solid #332211",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "linear-gradient(180deg, #1F150A 0%, #0A0704 100%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 28 }}>
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: 24,
                background: "#2A1808",
                border: "1px solid #FF9900",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AwsBedrockLogo size={60} />
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF" }}>AWS Bedrock</div>
              <div style={{ fontSize: 18, color: "#FF9900", fontWeight: 800 }}>MANAGED CLOUD ENDPOINT</div>
            </div>
          </div>
          <div style={{ fontSize: 30, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.3, marginBottom: 18 }}>
            Kimi K3 Deployed for Global Enterprise
          </div>
          <div style={{ fontSize: 20, color: "#D1D5DB", lineHeight: 1.55, marginBottom: 32 }}>
            Amazon onboards Moonshot AI’s 2.8T MoE to prevent enterprise flight to third-party open-weight providers.
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <span style={{ background: "#2B1D0E", border: "1px solid #FF9900", borderRadius: 12, padding: "8px 20px", color: "#FF9900", fontSize: 17, fontWeight: 800 }}>
              1M CONTEXT
            </span>
            <span style={{ background: "#2B1D0E", border: "1px solid #FF9900", borderRadius: 12, padding: "8px 20px", color: "#FF9900", fontSize: 17, fontWeight: 800 }}>
              ALWAYS-ON REASONING
            </span>
          </div>
        </div>

        <div style={{ flex: 1.25, padding: 36, display: "flex", alignItems: "center", background: "#050403" }}>
          <Img
            src={staticFile("evidence/aiandcloud_bedrock_card.png")}
            style={{ width: "100%", borderRadius: 20, boxShadow: "0 20px 40px rgba(0,0,0,0.8)" }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 6. Final Outro Scene
export const CinematicOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bellRing = Math.sin(frame * 0.4) * Math.exp(-frame * 0.03) * 15;

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse at center, #0B1124 0%, #030611 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
      }}
    >
      <div style={{ display: "flex", gap: 36, marginBottom: 36 }}>
        <div style={{ width: 80, height: 80, borderRadius: 20, background: "#160D2D", border: "1px solid #6F69F7", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <QwenLogo size={54} />
        </div>
        <div style={{ width: 80, height: 80, borderRadius: 20, background: "#081528", border: "1px solid #1E3A8A", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <MoonshotKimiLogo size={54} />
        </div>
        <div style={{ width: 80, height: 80, borderRadius: 20, background: "#0D251E", border: "1px solid #10A37F", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <OpenAILogo size={54} />
        </div>
      </div>

      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 50,
          fontWeight: 900,
          color: "#FFFFFF",
          textAlign: "center",
          marginBottom: 18,
          letterSpacing: 1,
        }}
      >
        THE ERA OF CLOSED MONOPOLY IS OVER
      </div>
      <div
        style={{
          fontSize: 24,
          color: "#94A3B8",
          textAlign: "center",
          maxWidth: 900,
          lineHeight: 1.5,
          marginBottom: 48,
        }}
      >
        Drop a comment below with which model powers your stack, and make sure that bell notification is active for our Kimi K3.1 hands-on review.
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          background: "linear-gradient(135deg, #EF4444, #DC2626)",
          padding: "18px 44px",
          borderRadius: 999,
          boxShadow: "0 15px 35px rgba(239, 68, 68, 0.45)",
        }}
      >
        <span style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF", letterSpacing: 1.5 }}>
          SUBSCRIBE FOR ZERO-DAY FRONTIER LEAKS
        </span>
        <div style={{ transform: `rotate(${bellRing}deg)` }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// MASTER SEQUENCE WITH 3-5 SECOND BEAT RULES
// ==========================================
export const QwenKimiActs: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* ACT 1: COLD OPEN (F0 - F1442) */}
      <Sequence from={0} durationInFrames={442}>
        <ColdOpenSplit />
      </Sequence>

      <Sequence from={442} durationInFrames={226}>
        <TweetInspectCard
          imageName="rauchg_vercel_open.png"
          headline="78.4% Open-Weight Volume Surge"
        />
      </Sequence>

      <Sequence from={668} durationInFrames={357}>
        <VercelTelemetryCard />
      </Sequence>

      <Sequence from={1025} durationInFrames={417}>
        <MoENetworkVisualizer
          modelName="Alibaba Qwen 3.8-Max"
          totalParams="2.4 Trillion"
          activeParams="95 Billion"
          expertCount={64}
          activeCount={8}
        />
      </Sequence>

      {/* ACT 2: ALIBABA QWEN 3.8 & 27B COUP (F1442 - F3499) */}
      <Sequence from={1442} durationInFrames={653}>
        <MoENetworkVisualizer
          modelName="Qwen 3.8-Max Architecture"
          totalParams="2.4 Trillion"
          activeParams="95 Billion"
          expertCount={64}
          activeCount={8}
        />
      </Sequence>

      <Sequence from={2095} durationInFrames={538}>
        <TweetInspectCard
          imageName="prismml_bonsai_card.png"
          headline="Ternary Bonsai 2 27B Compression"
        />
      </Sequence>

      <Sequence from={2633} durationInFrames={555}>
        <TweetInspectCard
          imageName="sero_500dollar_gpu.png"
          headline="Frontier Intelligence on $500 GPU"
        />
      </Sequence>

      <Sequence from={3188} durationInFrames={311}>
        <TweetInspectCard
          imageName="analogalok_cerebras_card.png"
          headline="2,000 Tokens/Sec Offline OS"
        />
      </Sequence>

      {/* ACT 3: MOONSHOT KIMI K3 2.8T MONSTER (F3499 - F5354) */}
      <Sequence from={3499} durationInFrames={471}>
        <TweetInspectCard
          imageName="berryxia_yangzhilin_card.png"
          headline="$4.6M Training Miracle · Yang Zhilin"
        />
      </Sequence>

      <Sequence from={3970} durationInFrames={529}>
        <MoENetworkVisualizer
          modelName="Moonshot Kimi K3"
          totalParams="2.8 Trillion"
          activeParams="104 Billion"
          expertCount={896}
          activeCount={16}
          highlightKDA={true}
        />
      </Sequence>

      <Sequence from={4499} durationInFrames={855}>
        <MoENetworkVisualizer
          modelName="Kimi Delta Attention (KDA)"
          totalParams="2.8 Trillion"
          activeParams="Linear State"
          expertCount={896}
          activeCount={16}
          highlightKDA={true}
        />
      </Sequence>

      {/* MID-ROLL RETENTION CTA (F5354 - F6247 | 893 frames / ~30 seconds) */}
      <Sequence from={5354} durationInFrames={893}>
        <YouTubeAnalyticsCTA />
      </Sequence>

      {/* ACT 4: BENCHMARK FORENSICS & REAL VIDEO DEMOS (F6247 - F8057) */}
      <Sequence from={6247} durationInFrames={620}>
        <TweetInspectCard
          imageName="mts_code_arena_card.png"
          headline="#1 Ranked Code Arena (1679 Elo)"
        />
      </Sequence>

      {/* REAL VIDEO EMBED: 3D Blender / Three.js Code Demo */}
      <Sequence from={6867} durationInFrames={581}>
        <RealVideoDossier
          videoName="deepseek_v41_blender_truck.mp4"
          title="Autonomous 3D Voxel Architecture"
          subtitle="K3 & Qwen spatial logic evaluated against Gemini 3.8 Flash, rendering complex geometry with pure browser code."
          sourceUrl="https://x.com/TimJayas/status/2093727811911766112"
          tag="REAL VIDEO EVIDENCE"
        />
      </Sequence>

      {/* REAL VIDEO EMBED: Live Three.js WebGL Engine */}
      <Sequence from={7448} durationInFrames={609}>
        <RealVideoDossier
          videoName="openai_astra_blender_threejs.mp4"
          title="Pure Code Launch Video Synthesis"
          subtitle="Kimi K3 generates an entire dynamic WebGL interactive world in a single raw JavaScript file."
          sourceUrl="https://x.com/notjazii/status/2101277624056082874"
          tag="LIVE THREE.JS RUNTIME"
        />
      </Sequence>

      {/* ACT 5: INFRASTRUCTURE EARTHQUAKE (F8057 - F9750) */}
      <Sequence from={8057} durationInFrames={820}>
        <AwsBedrockDossier />
      </Sequence>

      <Sequence from={8877} durationInFrames={873}>
        <AppleQwenDossier />
      </Sequence>

      {/* ACT 6: WEST VS EAST RECKONING & OUTRO (F9750 - F11228) */}
      <Sequence from={9750} durationInFrames={450}>
        <TweetInspectCard
          imageName="luminabench_k31_teaser_card.png"
          headline="Kimi K3.1 Cryptographic Teaser"
        />
      </Sequence>

      <Sequence from={10200} durationInFrames={504}>
        <MoENetworkVisualizer
          modelName="The Global Compute Commons"
          totalParams="5.2T Combined"
          activeParams="Open Weights"
          expertCount={896}
          activeCount={16}
        />
      </Sequence>

      <Sequence from={10704} durationInFrames={524}>
        <CinematicOutro />
      </Sequence>
    </AbsoluteFill>
  );
};
