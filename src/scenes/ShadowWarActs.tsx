import React from "react";
import { AbsoluteFill, Series, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { VideoPlayerView } from "../components/VideoPlayerView";
import { DocumentaryCardView } from "../components/DocumentaryCardView";
import { SplitScreenDossier } from "../components/SplitScreenDossier";
import { RsiFeedbackLoop } from "../components/RsiFeedbackLoop";
import { ParetoFrontierChart } from "../components/ParetoFrontierChart";
import { AnthropicLogo, OpenAILogo, GoogleOfficialLogo } from "../components/RealLogos";

// ==========================================
// ACT 1: COLD OPEN HOOK (1494 frames / 49.8s)
// ==========================================
export const Act1_ColdOpenDuel: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: High-Intensity Title Hook (163 frames / 5.43s) -> "Something broke in Frontier AI this week..." */}
      <Series.Sequence durationInFrames={163}>
        <AbsoluteFill
          style={{
            backgroundColor: "#02040A",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.3) 0%, rgba(2, 4, 10, 0.95) 75%), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "100% 100%, 50px 50px, 50px 50px",
            }}
          />

          <div
            style={{
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              padding: "0 60px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                padding: "8px 24px",
                borderRadius: 30,
              }}
            >
              <span style={{ color: "#EF4444", fontSize: 13 }}>●</span>
              <span style={{ color: "#38BDF8", fontSize: 13, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                FRONTIER AI INTELLIGENCE LEAKS
              </span>
            </div>

            <div
              style={{
                color: "#FFFFFF",
                fontSize: 64,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                maxWidth: 1400,
                lineHeight: 1.1,
                textShadow: "0 10px 40px rgba(0,0,0,0.8)",
              }}
            >
              THE AUTONOMOUS GAME ENGINE DUEL
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#FBBF24", fontSize: 20, fontWeight: 700 }}>
                <AnthropicLogo size={24} />
                <span>ANTHROPIC FABLE 5.2</span>
              </div>
              <span style={{ color: "#64748B", fontSize: 22, fontWeight: 900 }}>VS</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#10B981", fontSize: 20, fontWeight: 700 }}>
                <OpenAILogo size={24} />
                <span>OPENAI GPT-6 ASTRA</span>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 2: Pleading to Slow Down (274 frames / 9.13s) -> "While tech leaders went on stage pleading with governments..." */}
      <Series.Sequence durationInFrames={274}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_slowdown_debate_card.png"
          sourceHandle="@buildwithrajath"
          titleBadge="THE SLOWDOWN PARADOX"
          authorName="Rajath Gowda"
          metrics={{ reposts: "89", likes: "812", views: "64K", date: "Sep 16, 2026" }}
          rightContent={{
            type: "video",
            src: "evidence/openai_sam_altman_thousands_agents.mp4",
            title: "TECH LEADERS ON DEVELOPMENT & ECONOMIC TENSION",
          }}
        />
      </Series.Sequence>

      {/* Beat 3: Reality Engines & The Leaks (336 frames / 11.2s) -> "Behind closed doors, Anthropic and OpenAI just escalated..." */}
      <Series.Sequence durationInFrames={336}>
        <SplitScreenDossier
          leftVideo="evidence/anthropic_fable52_brawlstars.mp4"
          rightVideo="evidence/openai_astra_waverunner.mp4"
          leftTitle="Fable 5.2 • 3D Brawler Engine"
          rightTitle="Astra • Fluid Water Physics"
          leftBrand="ANTHROPIC"
          rightBrand="OPENAI"
        />
      </Series.Sequence>

      {/* Beat 4: Anthropic 3D Action Game (346 frames / 11.53s) -> "On one side, Anthropic's stealth model generated a fully playable 3D action game..." */}
      <Series.Sequence durationInFrames={346}>
        <VideoPlayerView
          videoSrc="evidence/anthropic_fable52_brawlstars.mp4"
          title="ANTHROPIC FABLE 5.2 • THREE.JS MULTIPLAYER BRAWLER"
          durationInFrames={346}
          badge="STEALTH CHECKPOINT"
        />
      </Series.Sequence>

      {/* Beat 5: OpenAI Browser Fluid Physics (169 frames / 5.63s) -> "On the other side, OpenAI's Astra produced fluid water physics..." */}
      <Series.Sequence durationInFrames={169}>
        <VideoPlayerView
          videoSrc="evidence/openai_astra_waverunner.mp4"
          title="OPENAI ASTRA • NATIVE BROWSER FLUID & COLLISION SIMULATION"
          durationInFrames={169}
          badge="PHYSICAL SIMULATION"
        />
      </Series.Sequence>

      {/* Beat 6: Autonomous Synthesis Era (206 frames / 6.87s) -> "This isn't software development as we know it..." */}
      <Series.Sequence durationInFrames={206}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_fable52_brawlstars_card.png"
          sourceHandle="@notjazii"
          titleBadge="AUTONOMOUS DIGITAL SYNTHESIS"
          authorName="Jazii"
          metrics={{ reposts: "215", likes: "1.9K", views: "142K", date: "Sep 17, 2026" }}
          rightContent={{
            type: "telemetry",
            title: "2026 SYNTHESIS ARCHITECTURE BREAKDOWN",
            stats: [
              { label: "PROCEDURAL GAME COMPILATION", value: "60 MINUTES", color: "#FBBF24" },
              { label: "NATIVE FLUID SHADERS", value: "ZERO EXTERNAL ENGINES", color: "#38BDF8" },
              { label: "HUMAN INTERVENTION REQUIRED", value: "0% (PURE PROMPT)", color: "#10B981" },
            ],
          }}
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 2: ANTHROPIC'S STEALTH OFFENSIVE (1692 frames / 56.4s)
// ==========================================
export const Act2_AnthropicFable: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Leaked Routing & Fable 5.2 (475 frames / 15.8s) -> "The first tremor hit late last night when developers noticed unusual routing..." */}
      <Series.Sequence durationInFrames={475}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_fable52_brawlstars_card.png"
          sourceHandle="@notjazii"
          titleBadge="STEALTH CHECKPOINT DISCOVERY"
          authorName="Jazii"
          metrics={{ reposts: "310", likes: "2.4K", views: "185K", date: "Sep 17, 2026" }}
          rightContent={{
            type: "telemetry",
            title: "CLAUDE ROUTING TELEMETRY ANALYSIS",
            stats: [
              { label: "DETECTED CHECKPOINT", value: "FABLE 5.2", color: "#FBBF24" },
              { label: "TARGET WORKLOAD", value: "HIGH-REASONING CODE", color: "#38BDF8" },
              { label: "DEPLOYMENT STATUS", value: "SHADOW EXPERIMENT", color: "#EF4444" },
            ],
          }}
        />
      </Series.Sequence>

      {/* Beat 2: Rebuilding Brawl Stars from Scratch (462 frames / 15.4s) -> "A developer named Jazii decided to give it what should have been an impossible task..." */}
      <Series.Sequence durationInFrames={462}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_fable52_brawlstars_card.png"
          sourceHandle="@notjazii"
          titleBadge="SUNDOWN SHOWDOWN EXECUTION"
          authorName="Jazii"
          metrics={{ reposts: "420", likes: "3.1K", views: "240K", date: "Sep 17, 2026" }}
          rightContent={{
            type: "video",
            src: "evidence/anthropic_fable52_brawlstars.mp4",
            title: "SUNDOWN SHOWDOWN • FULL GAMEPLAY LAUNCH",
          }}
        />
      </Series.Sequence>

      {/* Beat 3: 4 Character Classes, Scatter & Shaders (534 frames / 17.8s) -> "We aren't looking at simple canvas shapes here. It wrote four distinct character classes..." */}
      <Series.Sequence durationInFrames={534}>
        <VideoPlayerView
          videoSrc="evidence/anthropic_fable52_brawlstars.mp4"
          title="SUNDOWN SHOWDOWN • 4 CLASSES, BULLET SCATTER & THREE.JS SHADERS"
          durationInFrames={534}
          badge="100% CODE GENERATED"
        />
      </Series.Sequence>

      {/* Beat 4: Traditional Studios Disruption (221 frames / 7.4s) -> "If an unannounced model can assemble game physics and UI architecture in an hour..." */}
      <Series.Sequence durationInFrames={221}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_claude52_day_card.png"
          sourceHandle="@AdamHoltererer"
          titleBadge="COMMUNITY BENCHMARK AUDIT"
          authorName="Adam Holter"
          metrics={{ reposts: "148", likes: "1.5K", views: "92K", date: "Sep 18, 2026" }}
          rightContent={{
            type: "telemetry",
            title: "GAME DEV TIME DISRUPTION MATRIX",
            stats: [
              { label: "TRADITIONAL STUDIO SPRINT", value: "3 - 6 MONTHS", color: "#EF4444" },
              { label: "CLAUDE FABLE 5.2 RUNTIME", value: "60 MINUTES", color: "#10B981" },
              { label: "CODEBASE EFFICIENCY", value: "ZERO EXTERNAL ENGINE", color: "#38BDF8" },
            ],
          }}
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 3: THE 4D CHESS MOVE OPUS 5.2 (1239 frames / 41.3s)
// ==========================================
export const Act3_AnthropicOpus: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Vidhi Tweet & Benchmark Anomaly (647 frames / 21.6s) -> "But Fable was only half the story. Hours later, reports surfaced that Anthropic secretly deployed Opus 5.2..." */}
      <Series.Sequence durationInFrames={647}>
        <DocumentaryCardView
          cardImage="evidence/anthropic_opus52_chessmove_card.png"
          sourceHandle="@vidhiparmarr"
          titleBadge="THE 4D CHESS MOVE"
          authorName="Vidhi Parmar"
          metrics={{ reposts: "280", likes: "2.1K", views: "160K", date: "Sep 18, 2026" }}
          rightContent={{
            type: "telemetry",
            title: "SPATIAL & STRUCTURAL REASONING BENCHMARKS",
            stats: [
              { label: "CLAUDE OPUS 5.2", value: "94.8% ACCURACY", color: "#FBBF24" },
              { label: "OPENAI GPT-6 ASTRA", value: "89.2% ACCURACY", color: "#10B981" },
              { label: "CLAUDE FABLE 5.2", value: "86.7% ACCURACY", color: "#38BDF8" },
            ],
          }}
        />
      </Series.Sequence>

      {/* Beat 2: 26% Recursive Self-Improvement Loop (592 frames / 19.7s) -> "Anthropic confirmed that Claude models autonomously execute 26% of internal R&D..." */}
      <Series.Sequence durationInFrames={592}>
        <RsiFeedbackLoop />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 4: OPENAI'S REALITY ENGINE (1755 frames / 58.5s)
// ==========================================
export const Act4_OpenAIAstraPhysics: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Tak Tweet & WaveRunner Water Physics (957 frames / 31.9s) -> "OpenAI isn't backing down. Directed GPT-6 Astra toward pure physical simulation..." */}
      <Series.Sequence durationInFrames={360}>
        <DocumentaryCardView
          cardImage="evidence/openai_astra_waverunner_card.png"
          sourceHandle="@cherry_mx_reds"
          titleBadge="NATIVE FLUID SYNTHESIS"
          authorName="Tak"
          metrics={{ reposts: "195", likes: "1.8K", views: "115K", date: "Sep 17, 2026" }}
          rightContent={{
            type: "video",
            src: "evidence/openai_astra_waverunner.mp4",
            title: "WAVERUNNER • 1738x1080 FLUID WAKE SIMULATION",
          }}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={597}>
        <VideoPlayerView
          videoSrc="evidence/openai_astra_waverunner.mp4"
          title="OPENAI ASTRA • NATIVE BROWSER WATER WAKE & COLLISION ENGINE"
          durationInFrames={597}
          badge="PHYSICAL SIMULATION"
        />
      </Series.Sequence>

      {/* Beat 2: Steam Fishing Game Rebuild (618 frames / 20.6s) -> "Over on Steam, developer noclipepe fed Astra a single gameplay video..." */}
      <Series.Sequence durationInFrames={618}>
        <VideoPlayerView
          videoSrc="evidence/openai_astra_steam_game.mp4"
          title="ASTRA • REVERSE-ENGINEERING COMMERCIAL STEAM FISHING GAME"
          durationInFrames={618}
          badge="VIDEO-TO-CODE PIPELINE"
        />
      </Series.Sequence>

      {/* Beat 3: Blender 3D Physics Pipeline (180 frames / 6.0s) -> "Astra isn't just reading documents. It is learning the physical laws..." */}
      <Series.Sequence durationInFrames={180}>
        <VideoPlayerView
          videoSrc="evidence/openai_astra_blender_threejs.mp4"
          title="ASTRA • BLENDER 3D MESH & REAL-TIME THREE.JS WORLD"
          durationInFrames={180}
          badge="SPATIAL INTELLIGENCE"
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 5: THE "GPT-6 SOL" LEAK & THE SWARM (1455 frames / 48.5s)
// ==========================================
export const Act5_OpenAISolLeak: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Cost Problem & GPT-6 Sol Leaks (883 frames / 29.4s) -> "Running these 100-minute tasks costs real money, $8 to $30... biggest leak: GPT-6 Sol..." */}
      <Series.Sequence durationInFrames={883}>
        <DocumentaryCardView
          cardImage="evidence/openai_gpt6_sol_leak_card.png"
          sourceHandle="@ravikiran_dev7"
          titleBadge="OPENAI API STEALTH LEAK"
          authorName="Ray"
          metrics={{ reposts: "133", likes: "426", views: "48.5K", date: "Sep 14, 2026" }}
          rightContent={{
            type: "image",
            src: "evidence/openai_gpt6_sol_leak_photo.jpg",
            title: "VERIFIED CHECKPOINT // GPT-6 SOL",
          }}
        />
      </Series.Sequence>

      {/* Beat 2: Sam Altman Thousands of Agents Quote (572 frames / 19.1s) -> "During a recent talk, Sam Altman admitted that every single night he runs a few thousand agents..." */}
      <Series.Sequence durationInFrames={572}>
        <DocumentaryCardView
          cardImage="evidence/openai_sam_altman_thousands_agents_card.png"
          sourceHandle="@Grow_withAI"
          titleBadge="AUTONOMOUS OVERNIGHT SWARM"
          authorName="Ryan Carter"
          metrics={{ reposts: "114", likes: "345", views: "87.8K", date: "Sep 14, 2026" }}
          rightContent={{
            type: "telemetry",
            title: "SAM ALTMAN OVERNIGHT SWARM ARCHITECTURE",
            stats: [
              { label: "NIGHTLY PARALLEL AGENTS", value: "3,000+ INSTANCES", color: "#38BDF8" },
              { label: "MONITORING CADENCE", value: "SMARTPHONE TELEMETRY", color: "#10B981" },
              { label: "DEPLOYMENT PARADIGM", value: "AUTONOMOUS PROTOTYPING", color: "#F59E0B" },
            ],
          }}
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 6: AUTONOMOUS VOICE AGENTS & MICRO ECONOMICS (1500 frames / 50.0s)
// ==========================================
export const Act6_VoiceAgents: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Jev Real-Time Voice Browser Control (809 frames / 27.0s) -> "Developer Moritz Kremb showcased Jev, a voice-controlled browser agent..." */}
      <Series.Sequence durationInFrames={809}>
        <VideoPlayerView
          videoSrc="evidence/jev_voice_browser_agent.mp4"
          title="JEV • 300MS REAL-TIME VOICE BROWSER AUTOMATION ($0.0002/CLICK)"
          durationInFrames={809}
          badge="MICRO-TOKEN ECONOMICS"
          aspectRatio="contain"
        />
      </Series.Sequence>

      {/* Beat 2: DeepSeek-Harness Open-Source Agent (343 frames / 11.4s) -> "Pair that with DeepSeek's open-source release of DeepSeek-Harness..." */}
      <Series.Sequence durationInFrames={343}>
        <DocumentaryCardView
          cardImage="evidence/deepseek_harness_framework_card.png"
          sourceHandle="@DeepSeekAI"
          titleBadge="OPEN SOURCE CODING AGENT"
          authorName="DeepSeek"
          metrics={{ reposts: "840", likes: "6.2K", views: "380K", date: "Sep 16, 2026" }}
          rightContent={{
            type: "video",
            src: "evidence/deepseek_harness_framework.mp4",
            title: "DEEPSEEK-HARNESS • MODULAR CODING AGENT FRAMEWORK",
          }}
        />
      </Series.Sequence>

      {/* Beat 3: DeepSeek 4K Blender Truck Demo (348 frames / 11.6s) -> "Independent developers are proving you don't need a corporate API key..." */}
      <Series.Sequence durationInFrames={348}>
        <VideoPlayerView
          videoSrc="evidence/deepseek_v41_blender_truck.mp4"
          title="DEEPSEEK V4.1 FLASH • 4K MECHANICALLY ACCURATE BLENDER TRUCK"
          durationInFrames={348}
          badge="LOCAL OPEN SOURCE INFERENCE"
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 7: GOOGLE'S SHADOW STRIKE [THE GRAND FINALE] (1890 frames / 63.0s)
// ==========================================
export const Act7_GoogleFinale: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Leaked Gemini 4 Pro Specs Card (925 frames / 30.8s) -> "And that brings us to Google... LMSYS mystery model... 2M context, 256k output..." */}
      <Series.Sequence durationInFrames={925}>
        <DocumentaryCardView
          cardImage="evidence/google_gemini4_specs_leaked_card.png"
          sourceHandle="@ravikiran_dev7"
          titleBadge="GOOGLE ARENA SHADOW STRIKE"
          authorName="Ray"
          metrics={{ reposts: "412", likes: "2.8K", views: "210K", date: "Sep 18, 2026" }}
          rightContent={{
            type: "telemetry",
            title: "GEMINI 4 PRO LEAKED BENCHMARKS",
            stats: [
              { label: "CONTEXT WINDOW", value: "2,000,000 TOKENS", color: "#38BDF8" },
              { label: "OUTPUT CEILING", value: "256,000 TOKENS", color: "#10B981" },
              { label: "OUTPUT PRICING", value: "$11.00 / 1M TOKENS", color: "#F59E0B" },
            ],
          }}
        />
      </Series.Sequence>

      {/* Beat 2: Pure SVG Shelby GT500 Vector Video (327 frames / 10.9s) -> "Priyesh prompted it for a classic Shelby GT500, and it generated pure SVG vector paths..." */}
      <Series.Sequence durationInFrames={327}>
        <VideoPlayerView
          videoSrc="evidence/google_gemini4_shelby_gt500.mp4"
          title="GEMINI 4 PRO • PURE VECTOR SVG 1967 SHELBY GT500 (ZERO BITMAPS)"
          durationInFrames={327}
          badge="PURE VECTOR SYNTHESIS"
        />
      </Series.Sequence>

      {/* Beat 3: Interactive PS5 CAD Controller Video (228 frames / 7.6s) -> "Another developer extracted a fully interactive PS5 controller with exploded CAD view..." */}
      <Series.Sequence durationInFrames={228}>
        <VideoPlayerView
          videoSrc="evidence/google_gemini4_ps5_cad.mp4"
          title="GEMINI 4 PRO • EXPLODED CAD VIEW & X-RAY PCB STUDIO"
          durationInFrames={228}
          badge="HARDWARE CAD LOGIC"
        />
      </Series.Sequence>

      {/* Beat 4: The V8 Skeptic Reality Check (410 frames / 13.7s) -> "While skeptics like The Bugged Dev argue earlier benchmarks suffer under mechanical simulations..." */}
      <Series.Sequence durationInFrames={410}>
        <VideoPlayerView
          videoSrc="evidence/google_gemini4_v8_skeptic.mp4"
          title="THE REALITY CHECK • V8 MECHANICAL SIMULATION TEST"
          durationInFrames={410}
          badge="CRITICAL BENCHMARK AUDIT"
        />
      </Series.Sequence>
    </Series>
  );
};

// ==========================================
// ACT 8: THE DEVELOPER VERDICT & OUTRO (1218 frames / 40.6s)
// ==========================================
export const Act8_OutroVerdict: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Series>
      {/* Beat 1: 3-Way Frontier Showdown Board (882 frames / 29.4s) -> "We have entered an era where raw text is table stakes..." */}
      <Series.Sequence durationInFrames={882}>
        <AbsoluteFill
          style={{
            backgroundColor: "#02040A",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "48px 60px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span style={{ color: "#38BDF8", fontSize: 13, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>
              2026 DEVELOPER DECISION MATRIX
            </span>
            <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, textTransform: "uppercase", marginTop: 8 }}>
              WHERE TO DEPLOY YOUR AGENTS
            </div>
          </div>

          {/* 3 High-Impact Tier Columns */}
          <div style={{ display: "flex", gap: 32, width: "100%", maxWidth: 1740, flex: 1 }}>
            {/* Column 1: Anthropic */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#0B0F19",
                borderRadius: 20,
                border: "2px solid rgba(245, 158, 11, 0.4)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <AnthropicLogo size={32} />
                  <span style={{ color: "#FBBF24", fontSize: 22, fontWeight: 900 }}>ANTHROPIC 5.2</span>
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
                  GAME ENGINES & RECURSIVE R&D
                </div>
                <ul style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.7, paddingLeft: 18, marginBottom: 20 }}>
                  <li>Sundown Showdown 3D generation</li>
                  <li>Opus 5.2 structural reasoning</li>
                  <li>26% autonomous internal R&D execution</li>
                </ul>

                {/* Rich Scorecard Metrics */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ backgroundColor: "#060913", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}>PROCEDURAL CODE</span>
                    <span style={{ color: "#FBBF24", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>98.4% TIER 1</span>
                  </div>
                  <div style={{ backgroundColor: "#060913", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}>AUTONOMOUS R&D</span>
                    <span style={{ color: "#FBBF24", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>26% EXECUTION</span>
                  </div>
                  <div style={{ backgroundColor: "#060913", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}>LATENCY RATING</span>
                    <span style={{ color: "#10B981", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>OPTIMIZED</span>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: "rgba(245, 158, 11, 0.15)", padding: "14px 20px", borderRadius: 12, border: "1px solid rgba(245, 158, 11, 0.3)", marginTop: 16 }}>
                <span style={{ color: "#FBBF24", fontWeight: 800, fontSize: 14 }}>BEST FOR: COMPLEX PROCEDURAL CODE</span>
              </div>
            </div>

            {/* Column 2: OpenAI */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#0B0F19",
                borderRadius: 20,
                border: "2px solid rgba(16, 185, 129, 0.4)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <OpenAILogo size={32} />
                  <span style={{ color: "#10B981", fontSize: 22, fontWeight: 900 }}>OPENAI ASTRA & SOL</span>
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
                  PHYSICS SIMULATION & SWARMS
                </div>
                <ul style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.7, paddingLeft: 18, marginBottom: 20 }}>
                  <li>WaveRunner fluid & collision physics</li>
                  <li>Video-to-code reverse engineering</li>
                  <li>GPT-6 Sol 4x speed & nightly swarms</li>
                </ul>

                {/* Rich Scorecard Metrics */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ backgroundColor: "#060913", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}>PHYSICS SIMULATION</span>
                    <span style={{ color: "#10B981", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>NATIVE FLUID WAKE</span>
                  </div>
                  <div style={{ backgroundColor: "#060913", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}>NIGHTLY SWARMS</span>
                    <span style={{ color: "#10B981", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>3,000+ AGENTS</span>
                  </div>
                  <div style={{ backgroundColor: "#060913", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}>SOL THROUGHPUT</span>
                    <span style={{ color: "#38BDF8", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>4X GENERATION</span>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", padding: "14px 20px", borderRadius: 12, border: "1px solid rgba(16, 185, 129, 0.3)", marginTop: 16 }}>
                <span style={{ color: "#10B981", fontWeight: 800, fontSize: 14 }}>BEST FOR: MULTI-AGENT NIGHTLY SWARMS</span>
              </div>
            </div>

            {/* Column 3: Google */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#0B0F19",
                borderRadius: 20,
                border: "2px solid rgba(56, 189, 248, 0.4)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <GoogleOfficialLogo size={32} />
                  <span style={{ color: "#38BDF8", fontSize: 22, fontWeight: 900 }}>GEMINI 4 PRO</span>
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
                  2M CONTEXT & PURE VECTORS
                </div>
                <ul style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.7, paddingLeft: 18, marginBottom: 20 }}>
                  <li>2,000,000 token context window</li>
                  <li>256,000 token output ceiling</li>
                  <li>Pure SVG vector art & exploded CAD</li>
                </ul>

                {/* Rich Scorecard Metrics */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ backgroundColor: "#060913", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}>CONTEXT DEPTH</span>
                    <span style={{ color: "#38BDF8", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>2M TOKENS</span>
                  </div>
                  <div style={{ backgroundColor: "#060913", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}>OUTPUT CEILING</span>
                    <span style={{ color: "#38BDF8", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>256K TOKENS</span>
                  </div>
                  <div style={{ backgroundColor: "#060913", padding: "10px 14px", borderRadius: 8, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#64748B", fontSize: 12, fontWeight: 700 }}>TOKEN PRICING</span>
                    <span style={{ color: "#10B981", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>$11 / 1M TOKENS</span>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: "rgba(56, 189, 248, 0.15)", padding: "14px 20px", borderRadius: 12, border: "1px solid rgba(56, 189, 248, 0.3)", marginTop: 16 }}>
                <span style={{ color: "#38BDF8", fontWeight: 800, fontSize: 14 }}>BEST FOR: MASSIVE CONTEXT & LOW COST</span>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 2: Subscribe & Community Verdict Outro (336 frames / 11.2s) -> "The models are no longer waiting for our prompts..." */}
      <Series.Sequence durationInFrames={336}>
        <AbsoluteFill
          style={{
            backgroundColor: "#02040A",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.3) 0%, rgba(2, 4, 10, 0.95) 80%)",
            }}
          />

          <div
            style={{
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 28,
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#FFFFFF",
                fontSize: 54,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                maxWidth: 1300,
                lineHeight: 1.15,
              }}
            >
              WHICH MODEL WOULD YOU TRUST TO BUILD YOUR NEXT PROJECT?
            </div>

            <div style={{ color: "#94A3B8", fontSize: 24, fontWeight: 500, maxWidth: 900 }}>
              Drop your verdict in the comments below.
            </div>

            {/* Glowing Subscribe Button */}
            <div
              style={{
                marginTop: 20,
                display: "flex",
                alignItems: "center",
                gap: 16,
                backgroundColor: "#EF4444",
                color: "#FFFFFF",
                padding: "18px 48px",
                borderRadius: 50,
                boxShadow: "0 0 40px rgba(239, 68, 68, 0.6)",
                fontWeight: 900,
                fontSize: 22,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span>SUBSCRIBE FOR FRONTIER AI REVELATIONS</span>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};
