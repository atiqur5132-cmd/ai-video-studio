import React from "react";
import { AbsoluteFill, Series, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig, Img, Video } from "remotion";
import { VideoPlayerView } from "../components/VideoPlayerView";
import { DocumentaryCardView } from "../components/DocumentaryCardView";
import { AnthropicLogo, ClaudeSparkLogo, OpenAILogo, GoogleOfficialLogo } from "../components/RealLogos";
import { BongoCatMascot } from "../components/BongoCatMascot";
import { MotionBackground } from "../components/MotionBackground";
import { Zap, Shield, Flame, AlertTriangle, Cpu, TrendingUp, CheckCircle2, XCircle, ArrowRight, Activity, Sparkles, Terminal, Code2 } from "lucide-react";

// =========================================================================
// ACT 1: COLD-OPEN PARADOX & THE DEATH OF POINT RELEASES (F0 -> F1586 | 52.9s)
// =========================================================================
export const Act1_ColdOpenHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <Series>
      {/* Beat 1: Seg 0 (0.0s -> 4.38s | F0 -> F131, 131f): Cold Open Punch-In: OPUS 5.2 IS DEAD */}
      <Series.Sequence durationInFrames={131}>
        <AbsoluteFill style={{ backgroundColor: "#020409", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(220, 38, 38, 0.45)" secondaryColor="rgba(217, 119, 6, 0.35)" />

          {/* Shockwave expanding ring */}
          <div
            style={{
              position: "absolute",
              width: 500,
              height: 500,
              borderRadius: "50%",
              border: "3px solid #EF4444",
              boxShadow: "0 0 50px #EF4444",
              transform: `scale(${interpolate(frame, [10, 70], [0.5, 3.5], { extrapolateRight: "clamp" })})`,
              opacity: interpolate(frame, [10, 50, 70], [0, 0.8, 0], { extrapolateRight: "clamp" }),
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              transform: `scale(${spring({ frame, fps, config: { damping: 12, mass: 0.5 } })})`,
            }}
          >
            {/* Brand Pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(245, 158, 11, 0.5)",
                borderRadius: 24,
                padding: "8px 24px",
                boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)",
              }}
            >
              <AnthropicLogo size={32} color="#F59E0B" />
              <span style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 900, letterSpacing: "0.15em" }}>
                ANTHROPIC TELEMETRY LEAK
              </span>
            </div>

            {/* Giant Kinetic Headline */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <div
                style={{
                  fontSize: 100,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  textShadow: "0 0 50px rgba(255,255,255,0.8), 0 0 100px rgba(220, 38, 38, 0.6)",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                OPUS 5.2 IS DEAD
              </div>

              {/* Red Neon Laser Slash */}
              <div
                style={{
                  position: "absolute",
                  top: "52%",
                  left: "-5%",
                  width: `${interpolate(frame, [15, 40], [0, 110], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}%`,
                  height: 10,
                  backgroundColor: "#EF4444",
                  borderRadius: 6,
                  boxShadow: "0 0 25px #EF4444, 0 0 50px #DC2626",
                  transform: "rotate(-4deg)",
                }}
              />
            </div>

            {/* Sub-Pill */}
            <div
              style={{
                background: "rgba(220, 38, 38, 0.2)",
                border: "1px solid #EF4444",
                borderRadius: 16,
                padding: "10px 28px",
                color: "#FCA5A5",
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "0.1em",
                boxShadow: "0 0 25px rgba(239, 68, 68, 0.3)",
                opacity: interpolate(frame, [25, 45], [0, 1], { extrapolateLeft: "clamp" }),
              }}
            >
              SKIPPED 5.1 • ABANDONED 5.2 • LEAPFROGGING TO 5.5
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 2: Seg 1 (4.38s -> 16.24s | F131 -> F487, 356f): Animated Leapfrog Lineage Track + Bongo Cat */}
      <Series.Sequence durationInFrames={356}>
        <AbsoluteFill style={{ backgroundColor: "#02040B", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(245, 158, 11, 0.35)" secondaryColor="rgba(30, 58, 138, 0.35)" />

          {/* Header */}
          <div style={{ position: "absolute", top: 60, zIndex: 10, textAlign: "center" }}>
            <div style={{ color: "#F59E0B", fontSize: 16, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              LEAKED MODEL LINEAGE PIPELINE
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 52, fontWeight: 950, marginTop: 8 }}>
              THE UNPRECEDENTED LEAPFROG
            </div>
          </div>

          {/* Animated Circuit Lineage Track */}
          <div
            style={{
              width: 1720,
              height: 480,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 60px",
              position: "relative",
            }}
          >
            {/* Background Circuit Track */}
            <div
              style={{
                position: "absolute",
                left: 120,
                right: 120,
                height: 6,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${interpolate(frame, [0, 180], [0, 100], { extrapolateRight: "clamp" })}%`,
                  background: "linear-gradient(90deg, #64748B, #EF4444 50%, #F59E0B 100%)",
                  boxShadow: "0 0 20px rgba(245, 158, 11, 0.8)",
                }}
              />
            </div>

            {/* Node 1: Opus 5.0 */}
            <div
              style={{
                zIndex: 2,
                width: 280,
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: 20,
                padding: "24px 20px",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
              }}
            >
              <div style={{ color: "#94A3B8", fontSize: 13, fontWeight: 700 }}>JULY 2026</div>
              <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 900, margin: "8px 0" }}>Opus 5.0</div>
              <div style={{ color: "#64748B", fontSize: 14 }}>Baseline Frontier</div>
            </div>

            {/* Node 2: Opus 5.1 (SKIPPED) */}
            <div
              style={{
                zIndex: 2,
                width: 280,
                background: "rgba(30, 15, 20, 0.9)",
                border: "1px dashed rgba(239, 68, 68, 0.5)",
                borderRadius: 20,
                padding: "24px 20px",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
                opacity: interpolate(frame, [30, 60], [0.3, 1], { extrapolateLeft: "clamp" }),
              }}
            >
              <div style={{ background: "rgba(239, 68, 68, 0.2)", color: "#EF4444", padding: "4px 12px", borderRadius: 8, fontSize: 12, fontWeight: 800, width: "fit-content", margin: "0 auto" }}>
                SKIPPED
              </div>
              <div style={{ color: "#EF4444", fontSize: 34, fontWeight: 900, textDecoration: "line-through", margin: "8px 0" }}>Opus 5.1</div>
              <div style={{ color: "#94A3B8", fontSize: 14 }}>Bypassed entirely</div>
            </div>

            {/* Node 3: Opus 5.2 (ABANDONED) */}
            <div
              style={{
                zIndex: 2,
                width: 280,
                background: "rgba(30, 15, 20, 0.9)",
                border: "1px dashed rgba(239, 68, 68, 0.6)",
                borderRadius: 20,
                padding: "24px 20px",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
                opacity: interpolate(frame, [70, 100], [0.3, 1], { extrapolateLeft: "clamp" }),
              }}
            >
              <div style={{ background: "rgba(239, 68, 68, 0.25)", color: "#F87171", padding: "4px 12px", borderRadius: 8, fontSize: 12, fontWeight: 800, width: "fit-content", margin: "0 auto" }}>
                ABANDONED
              </div>
              <div style={{ color: "#F87171", fontSize: 34, fontWeight: 900, textDecoration: "line-through", margin: "8px 0" }}>Opus 5.2</div>
              <div style={{ color: "#94A3B8", fontSize: 14 }}>Scrapped in pre-train</div>
            </div>

            {/* Node 4: ⚡ OPUS 5.5 HERO */}
            <div
              style={{
                zIndex: 2,
                width: 420,
                background: "linear-gradient(135deg, rgba(217, 119, 6, 0.35) 0%, rgba(15, 23, 42, 0.95) 100%)",
                border: "3px solid #F59E0B",
                borderRadius: 28,
                padding: "32px 30px",
                textAlign: "center",
                boxShadow: "0 0 60px rgba(245, 158, 11, 0.5), 0 30px 80px rgba(0,0,0,0.9)",
                transform: `scale(${spring({ frame: frame - 110, fps, config: { damping: 10, mass: 0.6 } })})`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
                <Sparkles size={18} color="#FDE68A" />
                <span style={{ color: "#FDE68A", fontSize: 14, fontWeight: 900, letterSpacing: "0.15em" }}>TARGET CHECKPOINT</span>
              </div>
              <div style={{ color: "#FFFFFF", fontSize: 56, fontWeight: 950, margin: "10px 0 6px 0", letterSpacing: "-0.02em" }}>
                OPUS 5.5
              </div>
              <div style={{ color: "#38BDF8", fontSize: 18, fontFamily: "monospace", fontWeight: 700 }}>
                codename: claude-wafer-eap
              </div>
            </div>
          </div>

          {/* Bongo Cat Mascot in Bottom Corner */}
          <BongoCatMascot size={150} style={{ position: "absolute", bottom: 40, right: 60, zIndex: 20 }} />
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 3: Seg 2-3 (16.24s -> 26.68s | F487 -> F800, 313f): 3-Way Frontier Showdown Arena */}
      <Series.Sequence durationInFrames={313}>
        <AbsoluteFill style={{ backgroundColor: "#02040A", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(16, 185, 129, 0.3)" secondaryColor="rgba(217, 119, 6, 0.35)" />

          {/* Title */}
          <div style={{ position: "absolute", top: 60, textAlign: "center", zIndex: 10 }}>
            <div style={{ color: "#EF4444", fontSize: 15, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              EMERGENCY TACTICAL COUNTER-MEASURE
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 50, fontWeight: 950, marginTop: 8 }}>
              FRONT-RUNNING OPENAI & GOOGLE
            </div>
          </div>

          {/* 3-Way Frontier Arena */}
          <div style={{ width: 1720, height: 600, zIndex: 10, display: "flex", gap: 36, alignItems: "center", justifyContent: "center", marginTop: 60 }}>
            {/* Google DeepMind */}
            <div
              style={{
                flex: 1,
                background: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                borderRadius: 24,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
              }}
            >
              <GoogleOfficialLogo size={56} />
              <div style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 900 }}>Gemini Next Wave</div>
              <div style={{ color: "#38BDF8", fontSize: 14, fontFamily: "monospace" }}>Gemini 4 Deep Thinking</div>
              <div style={{ width: "100%", background: "rgba(0,0,0,0.4)", borderRadius: 12, padding: "12px 16px", textAlign: "center" }}>
                <div style={{ color: "#94A3B8", fontSize: 12 }}>STATUS</div>
                <div style={{ color: "#38BDF8", fontSize: 16, fontWeight: 800 }}>Imminent Deployment</div>
              </div>
            </div>

            {/* Anthropic Opus 5.5 (Hero) */}
            <div
              style={{
                flex: 1.2,
                background: "linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(15, 23, 42, 0.95) 100%)",
                border: "3px solid #F59E0B",
                borderRadius: 28,
                padding: "44px 36px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 18,
                boxShadow: "0 0 60px rgba(245, 158, 11, 0.4), 0 30px 80px rgba(0,0,0,0.9)",
                transform: `scale(${1 + 0.02 * Math.sin(frame / 15)})`,
              }}
            >
              <AnthropicLogo size={68} color="#F59E0B" />
              <div style={{ color: "#FFFFFF", fontSize: 38, fontWeight: 950 }}>Opus 5.5 Wafer</div>
              <div style={{ background: "rgba(245, 158, 11, 0.2)", border: "1px solid #F59E0B", padding: "6px 20px", borderRadius: 20, color: "#FDE68A", fontSize: 15, fontWeight: 900 }}>
                APEX TACTICAL JUMP
              </div>
              <div style={{ width: "100%", background: "rgba(0,0,0,0.5)", borderRadius: 16, padding: "16px 20px", textAlign: "center" }}>
                <div style={{ color: "#FDE68A", fontSize: 13, fontWeight: 700 }}>BENCHMARK DOMINANCE</div>
                <div style={{ color: "#34D399", fontSize: 22, fontWeight: 950, marginTop: 4 }}>+200% REASONING SPEED</div>
              </div>
            </div>

            {/* OpenAI GPT-6 Sol */}
            <div
              style={{
                flex: 1,
                background: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                borderRadius: 24,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
              }}
            >
              <OpenAILogo size={56} color="#10A37F" />
              <div style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 900 }}>GPT-6 Sol</div>
              <div style={{ color: "#10B981", fontSize: 14, fontFamily: "monospace" }}>Nvidia Leaked Commits</div>
              <div style={{ width: "100%", background: "rgba(0,0,0,0.4)", borderRadius: 12, padding: "12px 16px", textAlign: "center" }}>
                <div style={{ color: "#94A3B8", fontSize: 12 }}>TARGET LAUNCH</div>
                <div style={{ color: "#10B981", fontSize: 16, fontWeight: 800 }}>Tuesday Collision</div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 4: Seg 4-5 (26.68s -> 44.16s | F800 -> F1325, 525f): The Frontier Duality (Zero Text Walls) */}
      <Series.Sequence durationInFrames={525}>
        <AbsoluteFill style={{ backgroundColor: "#02040A", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(56, 189, 248, 0.3)" secondaryColor="rgba(217, 119, 6, 0.3)" />

          {/* Title */}
          <div style={{ position: "absolute", top: 60, textAlign: "center", zIndex: 10 }}>
            <div style={{ color: "#38BDF8", fontSize: 15, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              THE FRONTIER PARADOX
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 50, fontWeight: 950, marginTop: 8 }}>
              PUBLIC SAFETY ESSAYS VS SECRET LAB ACCELERATION
            </div>
          </div>

          {/* Duality Visual Cards (Clean Minimalist) */}
          <div style={{ width: 1720, height: 560, zIndex: 10, display: "flex", gap: 50, alignItems: "center", justifyContent: "center", marginTop: 70 }}>
            {/* Left: Public Narrative */}
            <div
              style={{
                flex: 1,
                height: "100%",
                background: "rgba(10, 20, 40, 0.9)",
                border: "2px solid rgba(56, 189, 248, 0.4)",
                borderRadius: 28,
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 30px 80px rgba(0,0,0,0.85)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Shield size={36} color="#38BDF8" />
                  <span style={{ color: "#38BDF8", fontSize: 16, fontWeight: 900, letterSpacing: "0.15em" }}>PUBLIC NARRATIVE</span>
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 950, margin: "20px 0 10px 0" }}>
                  RESPONSIBLE PACING
                </div>
                <div style={{ color: "#94A3B8", fontSize: 20, lineHeight: 1.5 }}>
                  Dario Amodei warned world leaders that recursive AI improvement was outpacing safety frameworks, advocating a global deceleration pause.
                </div>
              </div>

              <div style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.3)", borderRadius: 16, padding: "16px 24px", color: "#BAE6FD", fontSize: 16, fontWeight: 800 }}>
                POLICY BRIEFINGS • SENATE HEARINGS • SLOW FRONTIER
              </div>
            </div>

            {/* Glowing Divider */}
            <div style={{ width: 3, height: "80%", background: "linear-gradient(180deg, transparent, #F59E0B, transparent)" }} />

            {/* Right: Secret Private Reality */}
            <div
              style={{
                flex: 1,
                height: "100%",
                background: "linear-gradient(135deg, rgba(40, 20, 10, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
                border: "2px solid rgba(245, 158, 11, 0.5)",
                borderRadius: 28,
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 30px 80px rgba(0,0,0,0.85)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Flame size={36} color="#F59E0B" />
                  <span style={{ color: "#F59E0B", fontSize: 16, fontWeight: 900, letterSpacing: "0.15em" }}>PRIVATE LAB REALITY</span>
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 950, margin: "20px 0 10px 0" }}>
                  APEX WARP DRIVE
                </div>
                <div style={{ color: "#FDE68A", fontSize: 20, lineHeight: 1.5 }}>
                  Behind closed doors, Anthropic was training a leapfrog model so powerful it made their own upcoming 5.1 and 5.2 roadmap obsolete.
                </div>
              </div>

              <div style={{ background: "rgba(245, 158, 11, 0.15)", border: "1px solid rgba(245, 158, 11, 0.4)", borderRadius: 16, padding: "16px 24px", color: "#FDE68A", fontSize: 16, fontWeight: 800 }}>
                SCRAPPED 5.2 • DIRECT 5.5 LEAP • WAFER-EAP DEPLOYMENT
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 5: Seg 6 (44.16s -> 52.88s | F1325 -> F1586, 261f): Sneak Peek Teaser of Waymo 3D Output */}
      <Series.Sequence durationInFrames={261}>
        <AbsoluteFill style={{ backgroundColor: "#02040A", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <div style={{ width: 1760, height: 960, position: "relative", borderRadius: 28, overflow: "hidden", border: "2px solid rgba(245, 158, 11, 0.5)", boxShadow: "0 30px 90px rgba(0,0,0,0.95)" }}>
            <Video
              src={staticFile("evidence/waymo_3d.mp4")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              muted={true}
              volume={0}
            />

            {/* Futuristic Tech Scanner HUD */}
            <div
              style={{
                position: "absolute",
                top: 30,
                left: 30,
                background: "rgba(10, 15, 30, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(245, 158, 11, 0.5)",
                borderRadius: 16,
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 10px #10B981" }} />
              <span style={{ color: "#FDE68A", fontSize: 15, fontWeight: 900, letterSpacing: "0.1em" }}>
                EVIDENCE UNLOCKED // CLAUDE CODE 3D SYNTHESIS
              </span>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 30,
                right: 30,
                background: "rgba(10, 15, 30, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                borderRadius: 16,
                padding: "12px 24px",
                color: "#38BDF8",
                fontSize: 14,
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              4,000+ LINES PROCEDURAL THREE.JS • ZERO HALLUCINATION
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 2: THE PAPER TRAIL & CODENAME WAFER-EAP (F1586 -> F3876 | 76.3s)
// =========================================================================
export const Act2_SkipMystery: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Series>
      {/* Beat 1: Seg 12-15 (F1586 -> F2261, 675f): Developers tracking internal Foundry slugs expecting 0.2 */}
      <Series.Sequence durationInFrames={675}>
        <DocumentaryCardView
          cardImage="evidence/token_gremlin_card.png"
          sourceHandle="@TokenGremlin"
          titleBadge="TELEMETRY SCAN: MICROSOFT FOUNDRY"
        />
      </Series.Sequence>

      {/* Beat 2: Seg 16-19 (F2261 -> F3046, 785f): Lyra leak dossier: claude-opus-5-5 & claude-wafer-eap */}
      <Series.Sequence durationInFrames={785}>
        <DocumentaryCardView
          cardImage="evidence/lyra_leak_card.png"
          sourceHandle="@lyraxana"
          titleBadge="CONFIRMED CHECKPOINT LEAK"
        />
      </Series.Sequence>

      {/* Beat 3: Seg 20-24 (F3046 -> F3876, 830f): 26% Autonomous R&D and Recursive Self-Improvement */}
      <Series.Sequence durationInFrames={830}>
        <AbsoluteFill style={{ backgroundColor: "#020511", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(30, 58, 138, 0.35)" secondaryColor="rgba(16, 185, 129, 0.25)" />

          <div style={{ width: 1760, height: 960, zIndex: 2, background: "rgba(9, 14, 26, 0.94)", border: "1px solid rgba(56, 189, 248, 0.35)", borderRadius: 28, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}>
            <div>
              <div style={{ color: "#38BDF8", fontSize: 15, fontWeight: 800, letterSpacing: "0.15em" }}>RECURSIVE SELF-IMPROVEMENT ACTIVE</div>
              <div style={{ color: "#FFFFFF", fontSize: 48, fontWeight: 900, marginTop: 8 }}>CLAUDE AUTONOMOUSLY WRITES 26% OF ANTHROPIC R&D</div>
            </div>

            {/* Dynamic Interactive Pipeline Architecture */}
            <div style={{ display: "flex", gap: 30 }}>
              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.85)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 20, padding: 36 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Cpu size={24} color="#F59E0B" />
                  <span style={{ color: "#F59E0B", fontSize: 14, fontWeight: 800 }}>AUTONOMOUS CYCLES</span>
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 36, fontWeight: 900, margin: "14px 0 8px 0" }}>30,000+ Runs</div>
                <div style={{ color: "#94A3B8", fontSize: 17, lineHeight: 1.5 }}>
                  Claude Code agents executing end-to-end multi-hour compiler loops, debugging tests and training pipelines.
                </div>
              </div>

              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.85)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 20, padding: 36 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Activity size={24} color="#38BDF8" />
                  <span style={{ color: "#38BDF8", fontSize: 14, fontWeight: 800 }}>MODEL DISQUALIFICATION</span>
                </div>
                <div style={{ color: "#FFFFFF", fontSize: 36, fontWeight: 900, margin: "14px 0 8px 0" }}>+0.2 Discarded</div>
                <div style={{ color: "#94A3B8", fontSize: 17, lineHeight: 1.5 }}>
                  The jump in spatial mathematics was so radical that marketing it as an incremental 5.2 update was discarded.
                </div>
              </div>

              <div style={{ flex: 1, background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(15, 23, 42, 0.9) 100%)", border: "1px solid #10B981", borderRadius: 20, padding: 36 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={24} color="#10B981" />
                  <span style={{ color: "#10B981", fontSize: 14, fontWeight: 800 }}>VERIFIED METRIC</span>
                </div>
                <div style={{ color: "#10B981", fontSize: 36, fontWeight: 950, margin: "14px 0 8px 0" }}>26% Auto-Code</div>
                <div style={{ color: "#A7F3D0", fontSize: 17, lineHeight: 1.5 }}>
                  Officially confirmed by Anthropic leadership: over a quarter of new codebase commits generated without human typing.
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.3)", borderRadius: 16, padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: "#BAE6FD", fontSize: 17, fontWeight: 600 }}>ANTHROPIC OFFICIAL STAT: 26% OF AI R&D COMPLETED FULLY END-TO-END BY AGENTS</div>
              <div style={{ color: "#38BDF8", fontSize: 16, fontWeight: 800 }}>AL4 AUTONOMY ENGAGED</div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 3: REAL EVIDENCE — WAYMO 3D AUTONOMOUS CAR (F3876 -> F6097 | 74.0s)
// =========================================================================
export const Act3_WaymoTeardown: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Series>
      {/* Beat 1: Seg 25-28 (F3876 -> F4594, 718f): Live 3D Waymo Jaguar I-PACE Video Embed */}
      <Series.Sequence durationInFrames={718}>
        <VideoPlayerView
          videoSrc="evidence/waymo_3d.mp4"
          title="CLAUDE OPUS 5.5 MAX — 3D WAYMO AUTONOMOUS VEHICLE (HARSHITH)"
          durationInFrames={718}
          badge="LIVE CLAUDE CODE OUTPUT"
          aspectRatio="contain"
        />
      </Series.Sequence>

      {/* Beat 2: Seg 29-33 (F4594 -> F5441, 847f): Harshith Tweet Proof + Geometric Inspection */}
      <Series.Sequence durationInFrames={847}>
        <AbsoluteFill style={{ backgroundColor: "#02040A", display: "flex", flexDirection: "row", padding: 30, gap: 30, justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 880, height: 960, borderRadius: 24, overflow: "hidden", border: "1px solid rgba(56, 189, 248, 0.35)", position: "relative", background: "#050811", boxShadow: "0 30px 80px rgba(0,0,0,0.8)" }}>
            <Video
              src={staticFile("evidence/waymo_3d.mp4")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              muted={true}
              volume={0}
            />
            <div style={{ position: "absolute", top: 24, left: 24, background: "rgba(0,0,0,0.8)", border: "1px solid rgba(56, 189, 248, 0.4)", padding: "8px 18px", borderRadius: 12, color: "#38BDF8", fontSize: 14, fontWeight: 800 }}>
              FLAWLESS 3D SPATIAL COHERENCE
            </div>
          </div>

          <div style={{ width: 850, height: 960, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Img
              src={staticFile("evidence/harshith_waymo_card.png")}
              style={{ width: "100%", height: "auto", borderRadius: 24, boxShadow: "0 30px 80px rgba(0,0,0,0.85)" }}
            />
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 3: Seg 34-36 (F5441 -> F6097, 656f): Financial Teardown: $50.56 vs $27.39 (-45.8%) */}
      <Series.Sequence durationInFrames={656}>
        <AbsoluteFill style={{ backgroundColor: "#02040B", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(16, 185, 129, 0.3)" secondaryColor="rgba(30, 58, 138, 0.3)" />

          <div style={{ width: 1760, height: 960, zIndex: 2, background: "rgba(9, 14, 26, 0.94)", border: "1px solid rgba(16, 185, 129, 0.4)", borderRadius: 28, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}>
            <div>
              <div style={{ color: "#10B981", fontSize: 16, fontWeight: 800, letterSpacing: "0.15em" }}>REAL-WORLD PRODUCTION ECONOMICS</div>
              <div style={{ color: "#FFFFFF", fontSize: 48, fontWeight: 900, marginTop: 8 }}>3D WAYMO CODE GENERATION COST</div>
            </div>

            <div style={{ display: "flex", gap: 40 }}>
              {/* Previous Opus 5.0 */}
              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.85)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 24, padding: 40 }}>
                <div style={{ color: "#94A3B8", fontSize: 16, fontWeight: 600 }}>CLAUDE OPUS 5.0 (PREVIOUS)</div>
                <div style={{ color: "#EF4444", fontSize: 72, fontWeight: 950, margin: "16px 0" }}>$50.56</div>
                <div style={{ color: "#64748B", fontSize: 16, lineHeight: 1.6 }}>
                  Tokens: 1.4K Input | 532K Output<br />
                  Prompt Cache Read: 41.2M tokens @ $0.50/M<br />
                  Multi-agent state cycles: High token burn
                </div>
              </div>

              {/* Leaked Opus 5.5 */}
              <div style={{ flex: 1, background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 8, 20, 0.9) 100%)", border: "2px solid #10B981", borderRadius: 24, padding: 40, boxShadow: "0 0 50px rgba(16, 185, 129, 0.2)" }}>
                <div style={{ color: "#34D399", fontSize: 16, fontWeight: 700 }}>CLAUDE OPUS 5.5 (NEW LEAK)</div>
                <div style={{ color: "#10B981", fontSize: 72, fontWeight: 950, margin: "16px 0" }}>$27.39</div>
                <div style={{ color: "#A7F3D0", fontSize: 16, lineHeight: 1.6 }}>
                  Same exact multi-thousand line 3D geometry<br />
                  Prompt Cache Read: 41.2M tokens @ $0.20/M (-60%)<br />
                  Direct developer savings: $23.17 per run
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(16, 185, 129, 0.18)", border: "1px solid rgba(16, 185, 129, 0.5)", borderRadius: 16, padding: "16px 36px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: "#A7F3D0", fontSize: 20, fontWeight: 700 }}>★ NET REDUCTION: 45.8% CHEAPER PER MAJOR REFACTOR</div>
              <div style={{ color: "#10B981", fontSize: 20, fontWeight: 900 }}>DEVELOPER ARBITRAGE ACTIVE</div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 4: ARCHITECTURAL 3D WORLDS & PROCEDURAL SIMULATION (F6097 -> F6878 | 26.0s)
// =========================================================================
export const Act4_VillaShowcase: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Seg 37-38 (F6097 -> F6484, 387f): Srikanth's 3D Villa Video Embed */}
      <Series.Sequence durationInFrames={387}>
        <VideoPlayerView
          videoSrc="evidence/villa_3d.mp4"
          title="CLAUDE OPUS 5.5 MAX — 3D MODERN VILLA (SRIKANTH VALLURI)"
          durationInFrames={387}
          badge="PURE THREE.JS GLASS SHADERS"
          aspectRatio="contain"
        />
      </Series.Sequence>

      {/* Beat 2: Seg 39-40 (F6484 -> F6878, 394f): Isometric Town & Zero-Crash State Management */}
      <Series.Sequence durationInFrames={394}>
        <AbsoluteFill style={{ backgroundColor: "#030712", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(217, 119, 6, 0.25)" secondaryColor="rgba(56, 189, 248, 0.2)" />

          <div style={{ width: 1760, height: 960, zIndex: 2, background: "rgba(9, 14, 26, 0.92)", border: "1px solid rgba(245, 158, 11, 0.35)", borderRadius: 28, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}>
            <div>
              <div style={{ color: "#F59E0B", fontSize: 15, fontWeight: 800, letterSpacing: "0.15em" }}>SPATIAL REASONING HARNESS</div>
              <div style={{ color: "#FFFFFF", fontSize: 46, fontWeight: 900, marginTop: 8 }}>MULTI-OBJECT SPATIAL SYNTHESIS</div>
            </div>

            <div style={{ display: "flex", gap: 30 }}>
              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 20, padding: 36 }}>
                <div style={{ color: "#38BDF8", fontSize: 14, fontWeight: 700 }}>PROCEDURAL RENDERING</div>
                <div style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 800, margin: "12px 0" }}>Architectural Glass Shaders</div>
                <div style={{ color: "#94A3B8", fontSize: 17, lineHeight: 1.5 }}>
                  Real-time light transmission, metallic reflections, and volumetric room interiors generated entirely from prompt instruction.
                </div>
              </div>

              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 20, padding: 36 }}>
                <div style={{ color: "#10B981", fontSize: 14, fontWeight: 700 }}>STATE MANAGEMENT</div>
                <div style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 800, margin: "12px 0" }}>Zero-Crash Hierarchy</div>
                <div style={{ color: "#94A3B8", fontSize: 17, lineHeight: 1.5 }}>
                  Maintains thousands of active scene nodes in Three.js without dropping memory or triggering browser context loss.
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(245, 158, 11, 0.12)", border: "1px solid rgba(245, 158, 11, 0.3)", borderRadius: 16, padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: "#FDE68A", fontSize: 18, fontWeight: 700 }}>AI MODELS ARE NOW ACTING AS LEAD THREE.JS GRAPHICS ENGINEERS</div>
              <div style={{ color: "#F59E0B", fontSize: 16, fontWeight: 800 }}>BROWSER ENGINE ACCELERATION</div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 5: THE FAKE OUTPUT SCANDAL & FORENSIC AUDIT (F6878 -> F8113 | 41.2s)
// =========================================================================
export const Act5_DebunkControversy: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Series>
      {/* Beat 1: Seg 41-43 (F6878 -> F7400, 522f): Harshith Debunk Tweet Expose */}
      <Series.Sequence durationInFrames={522}>
        <DocumentaryCardView
          cardImage="evidence/debunk_expose_card.png"
          sourceHandle="@HarshithLucky3"
          titleBadge="COMMUNITY FRAUD DETECTION"
        />
      </Series.Sequence>

      {/* Beat 2: Seg 44-47 (F7400 -> F8113, 713f): Stolen Asset Audit Split Screen */}
      <Series.Sequence durationInFrames={713}>
        <AbsoluteFill style={{ backgroundColor: "#02040A", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(220, 38, 38, 0.3)" secondaryColor="rgba(30, 58, 138, 0.25)" />

          <div style={{ width: 1760, height: 960, zIndex: 2, background: "rgba(9, 14, 26, 0.92)", border: "1px solid rgba(239, 68, 68, 0.4)", borderRadius: 28, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}>
            <div>
              <div style={{ color: "#EF4444", fontSize: 15, fontWeight: 800, letterSpacing: "0.15em" }}>FORENSIC PIXEL-BY-PIXEL AUDIT</div>
              <div style={{ color: "#FFFFFF", fontSize: 46, fontWeight: 900, marginTop: 8 }}>EVERY CLAIM SCRUTINIZED DOWN TO THE FRAME</div>
            </div>

            <div style={{ display: "flex", gap: 40, flex: 1, margin: "32px 0" }}>
              {/* Exposed Claim with Animated Stamp */}
              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.85)", border: "1px solid rgba(239, 68, 68, 0.35)", borderRadius: 24, padding: 44, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    background: "rgba(220, 38, 38, 0.9)",
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: 950,
                    letterSpacing: "0.15em",
                    padding: "8px 24px",
                    borderRadius: 12,
                    boxShadow: "0 0 30px rgba(220, 38, 38, 0.6)",
                  }}
                >
                  STOLEN DEMO EXPOSED
                </div>

                <div>
                  <div style={{ color: "#EF4444", fontSize: 15, fontWeight: 800, letterSpacing: "0.1em" }}>VIRAL X CLAIM</div>
                  <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 900, margin: "16px 0" }}>"Opus 5.5 Driving Engine"</div>
                  <div style={{ color: "#94A3B8", fontSize: 18, lineHeight: 1.6 }}>
                    Viral post claimed Claude Opus 5.5 single-handedly generated an entire real-time 3D autonomous vehicle driving simulator inside a browser tab.
                  </div>
                </div>
                <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ color: "#64748B", fontSize: 13, fontFamily: "monospace" }}>METRIC TRACKER</div>
                  <div style={{ color: "#EF4444", fontSize: 16, fontWeight: 700, marginTop: 4 }}>500+ Reposts before forensic community intervention</div>
                </div>
              </div>

              {/* Community Forensic Match */}
              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.85)", border: "1px solid rgba(56, 189, 248, 0.45)", borderRadius: 24, padding: 44, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ color: "#38BDF8", fontSize: 15, fontWeight: 800, letterSpacing: "0.1em" }}>COMMUNITY FORENSIC MATCH</div>
                    <div style={{ background: "rgba(56, 189, 248, 0.2)", color: "#38BDF8", fontSize: 12, fontWeight: 800, padding: "4px 12px", borderRadius: 8 }}>CONFIRMED MATCH</div>
                  </div>
                  <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 900, margin: "16px 0" }}>Pre-Existing YouTube Asset</div>
                  <div style={{ color: "#94A3B8", fontSize: 18, lineHeight: 1.6 }}>
                    Exact 1:1 frame match uncovered from pre-existing open-source project (<code style={{ color: "#38BDF8" }}>youtu.be/AlMLFkN79dA</code>). Debunked within 4 hours by researcher Harshith.
                  </div>
                </div>
                <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 12, padding: "16px 20px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ color: "#64748B", fontSize: 13, fontFamily: "monospace" }}>VERDICT</div>
                  <div style={{ color: "#38BDF8", fontSize: 16, fontWeight: 700, marginTop: 4 }}>Community proof: Only genuine Three.js code withstands audit</div>
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.5)", borderRadius: 16, padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: "#FCA5A5", fontSize: 18, fontWeight: 700 }}>COMMUNITY RESULT: FAKE BENCHMARKS WILL BE EXPOSED IMMEDIATELY</div>
              <div style={{ color: "#EF4444", fontSize: 16, fontWeight: 900 }}>RIGOROUS AUDIT CULTURE</div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};

// =========================================================================
// ACT 6: ECONOMIC WEAPON & TUESDAY FRONTIER WAR (F8113 -> F9626 | 50.4s)
// =========================================================================
export const Act6_PricingAndWar: React.FC = () => {
  return (
    <Series>
      {/* Beat 1: Seg 48-50 (F8113 -> F8623, 510f): Leaked Pricing Board - 60% Cache Drop */}
      <Series.Sequence durationInFrames={510}>
        <AbsoluteFill style={{ backgroundColor: "#020409", display: "flex", flexDirection: "row", padding: 30, gap: 30, justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: 850, height: 960, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Img
              src={staticFile("evidence/pricing_leak_card.png")}
              style={{ width: "100%", height: "auto", borderRadius: 24, boxShadow: "0 30px 80px rgba(0,0,0,0.85)" }}
            />
          </div>

          <div style={{ width: 880, height: 960, background: "rgba(9, 14, 26, 0.92)", border: "1px solid rgba(16, 185, 129, 0.35)", borderRadius: 28, padding: 40, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 30px 80px rgba(0,0,0,0.85)" }}>
            <div>
              <div style={{ color: "#10B981", fontSize: 15, fontWeight: 800, letterSpacing: "0.15em" }}>
                API PRICE COLLAPSE COMPARISON
              </div>
              <div style={{ color: "#FFFFFF", fontSize: 40, fontWeight: 900, marginTop: 6 }}>
                OPUS 5 vs OPUS 5.5 LEAKED
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 16, padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "#94A3B8", fontSize: 14 }}>Input (1M Tokens)</div>
                  <div style={{ color: "#F8FAFC", fontSize: 24, fontWeight: 800 }}>$5.00 → $4.00</div>
                </div>
                <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid #10B981", padding: "6px 16px", borderRadius: 10, color: "#34D399", fontSize: 18, fontWeight: 800 }}>-20%</div>
              </div>

              <div style={{ background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 16, padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "#94A3B8", fontSize: 14 }}>Output (1M Tokens)</div>
                  <div style={{ color: "#F8FAFC", fontSize: 24, fontWeight: 800 }}>$25.00 → $20.00</div>
                </div>
                <div style={{ background: "rgba(16, 185, 129, 0.15)", border: "1px solid #10B981", padding: "6px 16px", borderRadius: 10, color: "#34D399", fontSize: 18, fontWeight: 800 }}>-20%</div>
              </div>

              <div style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%)", border: "2px solid #10B981", borderRadius: 16, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 0 35px rgba(16, 185, 129, 0.25)" }}>
                <div>
                  <div style={{ color: "#A7F3D0", fontSize: 14, fontWeight: 700 }}>Prompt Cache Read (1M Tokens)</div>
                  <div style={{ color: "#FFFFFF", fontSize: 30, fontWeight: 950 }}>$0.50 → $0.20</div>
                </div>
                <div style={{ background: "#10B981", padding: "8px 22px", borderRadius: 12, color: "#02040A", fontSize: 22, fontWeight: 950 }}>-60% CUT</div>
              </div>
            </div>

            <div style={{ color: "#64748B", fontSize: 14 }}>
              * Data sourced from developer leak reports on X as of September 20, 2026.
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 2: Seg 51-53 (F8623 -> F9182, 559f): Tuesday Collision with OpenAI GPT-6 Sol */}
      <Series.Sequence durationInFrames={559}>
        <AbsoluteFill style={{ backgroundColor: "#02040A", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(217, 119, 6, 0.35)" secondaryColor="rgba(16, 163, 127, 0.3)" />

          <div style={{ width: 1760, height: 960, zIndex: 2, background: "rgba(9, 14, 26, 0.94)", border: "1px solid rgba(217, 119, 6, 0.4)", borderRadius: 28, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}>
            <div>
              <div style={{ color: "#F59E0B", fontSize: 16, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                TUESDAY FRONTIER COLLISION
              </div>
              <div style={{ color: "#FFFFFF", fontSize: 52, fontWeight: 900, marginTop: 8 }}>
                OPUS 5.5 vs GPT-6 SOL
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 50, justifyContent: "center" }}>
              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.9)", border: "2px solid #D97706", borderRadius: 24, padding: "36px 44px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                <AnthropicLogo size={64} color="#D97706" />
                <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 900 }}>Opus 5.5</div>
                <div style={{ color: "#FDE68A", fontSize: 15, fontWeight: 600 }}>Codenamed claude-wafer-eap</div>
                <div style={{ background: "rgba(217, 119, 6, 0.2)", padding: "6px 18px", borderRadius: 20, color: "#FBBF24", fontSize: 14, fontWeight: 700 }}>
                  Apex Spatial & Coding
                </div>
              </div>

              <div style={{ width: 90, height: 90, borderRadius: "50%", background: "#050811", border: "2px solid rgba(255,255,255,0.3)", display: "flex", justifyContent: "center", alignItems: "center", color: "#F8FAFC", fontSize: 30, fontWeight: 950, boxShadow: "0 0 35px rgba(255,255,255,0.2)" }}>
                VS
              </div>

              <div style={{ flex: 1, background: "rgba(15, 23, 42, 0.9)", border: "2px solid #10A37F", borderRadius: 24, padding: "36px 44px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                <OpenAILogo size={64} color="#10A37F" />
                <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 900 }}>GPT-6 Sol</div>
                <div style={{ color: "#A7F3D0", fontSize: 15, fontWeight: 600 }}>Nvidia Code Leaked</div>
                <div style={{ background: "rgba(16, 163, 127, 0.2)", padding: "6px 18px", borderRadius: 20, color: "#34D399", fontSize: 14, fontWeight: 700 }}>
                  High-Speed Reasoning
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "16px 36px", textAlign: "center", color: "#E2E8F0", fontSize: 24, fontWeight: 700 }}>
              OPENAI LEAK CONFIRMED VIA NVIDIA COMMITS • TUESDAY COLLISION IMMINENT
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>

      {/* Beat 3: Seg 54-56 (F9182 -> F9626, 444f): The Two-Generation Strike - Warp Speed Outro */}
      <Series.Sequence durationInFrames={444}>
        <AbsoluteFill style={{ backgroundColor: "#02040A", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <MotionBackground primaryColor="rgba(56, 189, 248, 0.35)" secondaryColor="rgba(217, 119, 6, 0.3)" />

          <div style={{ width: 1760, height: 960, zIndex: 2, background: "rgba(9, 14, 26, 0.94)", border: "1px solid rgba(56, 189, 248, 0.4)", borderRadius: 28, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", textAlign: "center", boxShadow: "0 40px 100px rgba(0,0,0,0.9)" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <AnthropicLogo size={40} color="#D97706" />
              <div style={{ color: "#38BDF8", fontSize: 16, fontWeight: 800, letterSpacing: "0.2em" }}>A TWO-GENERATION DIRECT STRIKE</div>
              <OpenAILogo size={40} color="#10A37F" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ color: "#FFFFFF", fontSize: 64, fontWeight: 950, letterSpacing: "-0.02em" }}>
                THE AI RACE DIDN'T SLOW DOWN
              </div>
              <div style={{ color: "#38BDF8", fontSize: 44, fontWeight: 900, textTransform: "uppercase", textShadow: "0 0 40px rgba(56, 189, 248, 0.8)" }}>
                IT JUST MOVED TO WARP SPEED
              </div>
            </div>

            <div style={{ display: "flex", gap: 40, width: "100%", justifyContent: "center" }}>
              <div style={{ background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 18, padding: "20px 40px" }}>
                <div style={{ color: "#94A3B8", fontSize: 14 }}>NEXT EVENT</div>
                <div style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 800 }}>Tuesday Drop Window</div>
              </div>
              <div style={{ background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: 18, padding: "20px 40px" }}>
                <div style={{ color: "#94A3B8", fontSize: 14 }}>COMMUNITY VERIFICATION</div>
                <div style={{ color: "#34D399", fontSize: 26, fontWeight: 800 }}>Full 100% Audit Complete</div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};
