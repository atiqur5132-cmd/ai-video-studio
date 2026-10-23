import React from "react";
import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { RealEvidenceVideoCanvas } from "../components/RealEvidenceVideoCanvas";
import { SpeedometerGauge } from "../components/SpeedometerGauge";
import { SiliconDieSchematic } from "../components/SiliconDieSchematic";
import { OfficialLogoBadge } from "../components/OfficialLogoBadge";
import { KineticPunchText } from "../components/KineticPunchText";
import { ModernTerminalRunner } from "../components/ModernTerminalRunner";
import { ModernBenchmarkArena, BenchmarkItem } from "../components/ModernBenchmarkArena";

// Timing data from src/para_timing.json (Total: 17,725 frames = 591.84s = 09:51.84 @ 30fps)
const TIMINGS = {
  P01: { from: 0, dur: 998 },
  P02: { from: 998, dur: 1109 },
  P03: { from: 2107, dur: 888 },
  P04: { from: 2995, dur: 872 },
  P05: { from: 3867, dur: 764 },
  P06: { from: 4631, dur: 867 },
  P07: { from: 5498, dur: 890 },
  P08: { from: 6388, dur: 814 },
  P09: { from: 7202, dur: 583 },
  P10: { from: 7785, dur: 703 },
  P11: { from: 8488, dur: 855 },
  P12: { from: 9343, dur: 753 },
  P13: { from: 10096, dur: 652 },
  P14: { from: 10748, dur: 846 },
  P15: { from: 11594, dur: 680 },
  P16: { from: 12274, dur: 825 },
  P17: { from: 13099, dur: 569 },
  P18: { from: 13668, dur: 660 },
  P19: { from: 14328, dur: 589 },
  P20: { from: 14917, dur: 502 },
  P21: { from: 15419, dur: 548 },
  P22: { from: 15967, dur: 441 },
  P23: { from: 16408, dur: 1317 },
};

// Persistent Technical HUD Header Component
const ChapterHud: React.FC<{ act: string; title: string; color?: string }> = ({
  act,
  title,
  color = "#38bdf8",
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        top: 36,
        left: 48,
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "rgba(3, 7, 18, 0.85)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${color}45`,
        borderRadius: 8,
        padding: "8px 22px",
        fontFamily: "'JetBrains Mono', -apple-system, monospace",
        letterSpacing: "0.12em",
        opacity,
        boxShadow: `0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px ${color}20`,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />
      <span style={{ color: "#94a3b8", fontSize: 15, fontWeight: 700 }}>{act}</span>
      <span style={{ color: "#475569", fontSize: 15 }}>//</span>
      <span style={{ color: "#f8fafc", fontSize: 15, fontWeight: 800 }}>{title}</span>
    </div>
  );
};

export const ArgonFrontierWarScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#020408" }}>
      {/* =========================================================================
          ACT 1: THE FRONTIER SHATTERS — GOOGLE RELEASES GEMINI 4 ARGON (P01 - P03)
          ========================================================================= */}

      {/* P01: Cold Open Hook - Gemini 4 Argon Drop */}
      <Sequence from={TIMINGS.P01.from} durationInFrames={TIMINGS.P01.dur}>
        <AbsoluteFill
          style={{
            backgroundColor: "#030712",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ChapterHud act="ACT 01" title="GEMINI 4 ARGON DEPLOYMENT" color="#38bdf8" />

          {/* Radial volumetric glow */}
          <div
            style={{
              position: "absolute",
              width: 1300,
              height: 1300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(14, 165, 233, 0.22) 0%, transparent 70%)",
            }}
          />

          <OfficialLogoBadge
            logo="gemini"
            size={190}
            label="GOOGLE GEMINI 4 ARGON"
            sublabel="1,000,000 TOKEN OUTPUT // PRODUCTION ACCESS"
            glowColor="rgba(56, 189, 248, 0.85)"
          />

          <div style={{ position: "absolute", bottom: 90 }}>
            <KineticPunchText
              words={["GEMINI 4", "ARGON", "RELEASED"]}
              accentWordIndex={1}
              accentColor="#38BDF8"
              fontSize={82}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P02: Antigravity Silent A/B Testing Demo Video */}
      <Sequence from={TIMINGS.P02.from} durationInFrames={TIMINGS.P02.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 01" title="ANTIGRAVITY SPATIAL STREAM" color="#38bdf8" />
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon_fresh_oct16/videos/argon_antigravity.mp4"
            aspectRatio="16:9"
            maxDossierWidth={1700}
            maxDossierHeight={880}
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["ONE MILLION", "CONTINUOUS", "OUTPUT"]}
              accentWordIndex={1}
              accentColor="#38BDF8"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P03: Custom TPU v7 Hardware Acceleration Schematic */}
      <Sequence from={TIMINGS.P03.from} durationInFrames={TIMINGS.P03.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 01" title="TPU v7 SILICON MATRIX" color="#38bdf8" />
          <SiliconDieSchematic
            color="#38bdf8"
            label="GOOGLE CUSTOM TPU v7 SILICON MATRIX"
            subtitle="HARDWARE-ACCELERATED SPARSE ATTENTION // HBM KV-CACHE DIES"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["CUSTOM TPU", "HARDWARE", "ACCELERATION"]}
              accentWordIndex={1}
              accentColor="#38BDF8"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* =========================================================================
          ACT 2: THE REAL STRESS TESTS — MINECRAFT, SHADERS, DEEPSWE (P04 - P08)
          ========================================================================= */}

      {/* P04: Real Three.js Minecraft Voxel Demo Video */}
      <Sequence from={TIMINGS.P04.from} durationInFrames={TIMINGS.P04.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 02" title="THREE.JS MINECRAFT VOXEL GAUNTLET" color="#10b981" />
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon_fresh_oct16/videos/argon_minecraft.mp4"
            aspectRatio="16:9"
            maxDossierWidth={1700}
            maxDossierHeight={880}
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["THREE.JS", "VOXEL", "PHYSICS"]}
              accentWordIndex={1}
              accentColor="#10B981"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P05: Terminal Runner - 3,147 Lines Unbroken Compilation */}
      <Sequence from={TIMINGS.P05.from} durationInFrames={TIMINGS.P05.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 02" title="3,147 LINES UNBROKEN COMPILATION" color="#10b981" />
          <ModernTerminalRunner
            mode="refactor"
            title="GEMINI 4 ARGON // VOXEL ENGINE COMPILATION"
            command="node build-voxel-engine.js --profile=webgl-full --strict"
            badgeStatus="3,147 LINES // 60 FPS"
            highlightMetric="0 COMPILATION ERRORS"
            glowColor="#10b981"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["3,147 LINES", "ZERO", "DEBUGGING"]}
              accentWordIndex={1}
              accentColor="#10B981"
              fontSize={64}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P06: Real Diablo / Elden Ring Isometric Shader Demo Video */}
      <Sequence from={TIMINGS.P06.from} durationInFrames={TIMINGS.P06.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 02" title="ISOMETRIC RAYMARCHED SHADER ENGINE" color="#f59e0b" />
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon_fresh_oct16/videos/argon_isometric.mp4"
            aspectRatio="16:9"
            maxDossierWidth={1700}
            maxDossierHeight={880}
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["ISOMETRIC", "SPATIAL", "SHADERS"]}
              accentWordIndex={1}
              accentColor="#F59E0B"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P07: DeepSWE 77.9% - Beat 1: Speedometer Gauge (0 to 440 frames) */}
      <Sequence from={TIMINGS.P07.from} durationInFrames={440}>
        <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
          <ChapterHud act="ACT 02" title="DEEPSWE 77.9% FRONTIER SCORE" color="#38bdf8" />
          <SpeedometerGauge
            value={77.9}
            maxValue={100}
            label="DEEPSWE SUCCESS RATE"
            unit="%"
            color="#38bdf8"
            fullCanvas={true}
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["77.9% DEEPSWE", "NEW FRONTIER", "RECORD"]}
              accentWordIndex={1}
              accentColor="#38BDF8"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P07: DeepSWE 77.9% - Beat 2: Modern Benchmark Arena Leaderboard (440 to 890 frames) */}
      <Sequence from={TIMINGS.P07.from + 440} durationInFrames={TIMINGS.P07.dur - 440}>
        <AbsoluteFill style={{ backgroundColor: "#02050c" }}>
          <ChapterHud act="ACT 02" title="DEEPSWE REPO LEADERBOARD" color="#38bdf8" />
          <ModernBenchmarkArena
            title="DEEPSWE BENCHMARK // AUTONOMOUS REPOSITORY CODING"
            category="COMPLEX MULTI-FILE REFACTORING & TEST PASS RATES"
            badgeStatus="VERIFIED BENCHMARK"
            items={[
              {
                name: "Gemini 4 Argon (1M Continuous)",
                score: "77.9%",
                numericVal: 77.9,
                maxVal: 100,
                color: "#38bdf8",
                isHero: true,
                badge: "NEW SOTA #1",
                detail: "0 Human Interventions",
              },
              {
                name: "Claude Opus 5.5 (Claude Code)",
                score: "70.0%",
                numericVal: 70.0,
                maxVal: 100,
                color: "#f97316",
                badge: "PRECISION TIER",
                detail: "Multi-file AST Diff",
              },
              {
                name: "GPT-5 Orion (Private Preview)",
                score: "68.2%",
                numericVal: 68.2,
                maxVal: 100,
                color: "#10b981",
                detail: "Variable Compute Loop",
              },
              {
                name: "Meta Muse Wonder Full (816B)",
                score: "57.5%",
                numericVal: 57.5,
                maxVal: 100,
                color: "#1877f2",
                detail: "Local M5 Ultra",
              },
            ]}
            sourceLabel="OFFICIAL DEEPSWE BENCHMARK DATASET // SWE-BENCH REPOS"
          />
          <div style={{ position: "absolute", bottom: 36, left: 0, right: 0 }}>
            <KineticPunchText
              words={["DECISIVE", "LEADERBOARD", "DOMINANCE"]}
              accentWordIndex={1}
              accentColor="#38BDF8"
              fontSize={62}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P08: Real-World Deployment Telemetry - 85,000 Tokens in 42s */}
      <Sequence from={TIMINGS.P08.from} durationInFrames={TIMINGS.P08.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 02" title="85,000 TOKENS IN 42 SECONDS" color="#38bdf8" />
          <ModernTerminalRunner
            mode="directory"
            title="ARGON HIGH-THROUGHPUT TELEMETRY // 85,000 TOKENS"
            command="gemini deploy microservices --spec=fullstack_prod --target=k8s"
            badgeStatus="85,000 TOKENS / 42s"
            highlightMetric="2,024 TOK/SEC"
            glowColor="#38bdf8"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["85,000 TOKENS", "IN 42", "SECONDS"]}
              accentWordIndex={1}
              accentColor="#38BDF8"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* =========================================================================
          ACT 3: THE META AMBUSH — MUSE WONDER 816B & ACTIVE MEMORY (P09 - P12)
          ========================================================================= */}

      {/* P09: Meta Counter-Offensive - Muse Wonder 816B */}
      <Sequence from={TIMINGS.P09.from} durationInFrames={TIMINGS.P09.dur}>
        <AbsoluteFill
          style={{
            backgroundColor: "#030712",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ChapterHud act="ACT 03" title="META MUSE WONDER 816B" color="#1877f2" />

          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              width: 1300,
              height: 1300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(24, 119, 242, 0.22) 0%, transparent 70%)",
            }}
          />

          <OfficialLogoBadge
            logo="meta"
            size={190}
            label="META MUSE WONDER"
            sublabel="816 BILLION PARAMETERS // HUGGING FACE RAW WEIGHTS"
            glowColor="rgba(24, 119, 242, 0.85)"
          />

          <div style={{ position: "absolute", bottom: 90 }}>
            <KineticPunchText
              words={["META MUSE", "816B", "OPEN WEIGHTS"]}
              accentWordIndex={1}
              accentColor="#1877F2"
              fontSize={80}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P10: Dual Apple M5 Ultra Workstation Schematic */}
      <Sequence from={TIMINGS.P10.from} durationInFrames={TIMINGS.P10.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 03" title="LOCAL M5 ULTRA WORKSTATION" color="#1877f2" />
          <SiliconDieSchematic
            color="#1877f2"
            label="DUAL APPLE M5 ULTRA // UNIFIED MEMORY WORKSTATION"
            subtitle="LOCAL 816B INFERENCE // ZERO API TAX & COMPLETE DATA PRIVACY"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["LOCAL OFFICE", "DESK", "SUPERCOMPUTER"]}
              accentWordIndex={1}
              accentColor="#1877F2"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P11: Active Memory & Active Focus Engine */}
      <Sequence from={TIMINGS.P11.from} durationInFrames={TIMINGS.P11.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 03" title="ACTIVE MEMORY & ACTIVE FOCUS" color="#a855f7" />
          <ModernTerminalRunner
            mode="refactor"
            title="META ACTIVE MEMORY LATENT ENGINE"
            command="muse-wonder run --active-memory-pool --focus-ratio=0.90"
            badgeStatus="ACTIVE MEMORY POOL ENGAGED"
            highlightMetric="90% FOCUS EFFICIENCY"
            glowColor="#a855f7"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["ACTIVE MEMORY", "DECOUPLED", "REGISTERS"]}
              accentWordIndex={1}
              accentColor="#A855F7"
              fontSize={64}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P12: SWE-Marathon 57.5% - Beat 1: Speedometer Gauge (0 to 370 frames) */}
      <Sequence from={TIMINGS.P12.from} durationInFrames={370}>
        <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
          <ChapterHud act="ACT 03" title="SWE-MARATHON 8-HR SCORE" color="#1877f2" />
          <SpeedometerGauge
            value={57.5}
            maxValue={100}
            label="SWE-MARATHON 8-HR"
            unit="%"
            color="#1877f2"
            fullCanvas={true}
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["57.5% SOLVED", "8-HOUR", "AUTONOMY"]}
              accentWordIndex={1}
              accentColor="#1877F2"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P12: SWE-Marathon 57.5% - Beat 2: Modern Benchmark Arena Leaderboard (370 to 753 frames) */}
      <Sequence from={TIMINGS.P12.from + 370} durationInFrames={TIMINGS.P12.dur - 370}>
        <AbsoluteFill style={{ backgroundColor: "#02050c" }}>
          <ChapterHud act="ACT 03" title="SWE-MARATHON LEADERBOARD" color="#1877f2" />
          <ModernBenchmarkArena
            title="SWE-MARATHON // 8-HOUR EXTENDED PROGRAMMING SESSIONS"
            category="MULTI-STEP PERSISTENT SOFTWARE ENGINEERING"
            badgeStatus="OPEN WEIGHT WINNER"
            items={[
              {
                name: "Meta Muse Wonder Full (816B Local)",
                score: "57.5%",
                numericVal: 57.5,
                maxVal: 100,
                color: "#1877f2",
                isHero: true,
                badge: "LOCAL SOTA",
                detail: "Zero API Leakage",
              },
              {
                name: "Claude Opus 5.5 (Anthropic)",
                score: "56.8%",
                numericVal: 56.8,
                maxVal: 100,
                color: "#f97316",
                detail: "Claude Code Cloud",
              },
              {
                name: "Gemini 4 Pro (Google Cloud)",
                score: "55.4%",
                numericVal: 55.4,
                maxVal: 100,
                color: "#38bdf8",
                detail: "TPU Cloud Endpoint",
              },
              {
                name: "GPT-5 Enterprise (OpenAI)",
                score: "52.1%",
                numericVal: 52.1,
                maxVal: 100,
                color: "#10b981",
                detail: "Proprietary Cluster",
              },
            ]}
            sourceLabel="SWE-MARATHON BENCHMARK REPORT // EXTENDED 8-HR AGENTS"
          />
          <div style={{ position: "absolute", bottom: 36, left: 0, right: 0 }}>
            <KineticPunchText
              words={["MATCHES", "PROPRIETARY", "CHAMPIONS"]}
              accentWordIndex={1}
              accentColor="#1877F2"
              fontSize={62}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* =========================================================================
          ACT 4: THE OLD GUARD STRIKE BACK — CLAUDE OPUS 5.5 & GPT-6 ASTRA (P13 - P16)
          ========================================================================= */}

      {/* P13: Claude Opus 5.5 - Surgical Precision & Claude Code */}
      <Sequence from={TIMINGS.P13.from} durationInFrames={TIMINGS.P13.dur}>
        <AbsoluteFill
          style={{
            backgroundColor: "#030712",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ChapterHud act="ACT 04" title="CLAUDE OPUS 5.5 PRECISION" color="#f97316" />

          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              width: 1300,
              height: 1300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(249, 115, 22, 0.22) 0%, transparent 70%)",
            }}
          />

          <OfficialLogoBadge
            logo="claude"
            size={190}
            label="CLAUDE OPUS 5.5 // ANTHROPIC"
            sublabel="SURGICAL ARCHITECTURAL INTENT // CLAUDE CODE PRODUCTION"
            glowColor="rgba(217, 119, 87, 0.85)"
          />

          <div style={{ position: "absolute", bottom: 90 }}>
            <KineticPunchText
              words={["CLAUDE OPUS 5.5", "SURGICAL", "PRECISION"]}
              accentWordIndex={1}
              accentColor="#F97316"
              fontSize={78}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P14: Terminal-Bench 4.0 70.0% - Beat 1: Speedometer Gauge (0 to 420 frames) */}
      <Sequence from={TIMINGS.P14.from} durationInFrames={420}>
        <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
          <ChapterHud act="ACT 04" title="TERMINAL-BENCH 4.0 RECORD" color="#f97316" />
          <SpeedometerGauge
            value={70.0}
            maxValue={100}
            label="TERMINAL-BENCH 4.0"
            unit="%"
            color="#f97316"
            fullCanvas={true}
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["70% ACCURACY", "DETERMINISTIC", "REASONING"]}
              accentWordIndex={1}
              accentColor="#F97316"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P14: Terminal-Bench 4.0 70.0% - Beat 2: Modern Terminal Runner (420 to 846 frames) */}
      <Sequence from={TIMINGS.P14.from + 420} durationInFrames={TIMINGS.P14.dur - 420}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 04" title="CLAUDE CODE AUTONOMOUS AGENT" color="#f97316" />
          <ModernTerminalRunner
            mode="terminal_bench"
            title="CLAUDE CODE // TERMINAL-BENCH 4.0 EVALUATION"
            command="claude-code eval --suite=terminal-bench-4.0 --deep-reasoning"
            badgeStatus="70.0% SOLVED"
            highlightMetric="SURGICAL INTENT"
            glowColor="#f97316"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["SURGICAL", "CODEBASE", "INTENT"]}
              accentWordIndex={1}
              accentColor="#F97316"
              fontSize={64}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P15: OpenAI Private GPT-6 Astra Leak */}
      <Sequence from={TIMINGS.P15.from} durationInFrames={TIMINGS.P15.dur}>
        <AbsoluteFill
          style={{
            backgroundColor: "#030712",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ChapterHud act="ACT 04" title="OPENAI PRIVATE GPT-6 ASTRA" color="#10b981" />

          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              width: 1300,
              height: 1300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%)",
            }}
          />

          <OfficialLogoBadge
            logo="openai"
            size={190}
            label="OPENAI PRIVATE GPT-6 ASTRA"
            sublabel="LEAKED REASONING SIGNATURES // DYNAMIC COMPUTE BUDGETS"
            glowColor="rgba(16, 185, 129, 0.85)"
          />

          <div style={{ position: "absolute", bottom: 90 }}>
            <KineticPunchText
              words={["GPT-6 ASTRA", "DYNAMIC", "REASONING"]}
              accentWordIndex={1}
              accentColor="#10B981"
              fontSize={80}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P16: Containment Breach - 2,600 Rogue Agent Escape Attempts */}
      <Sequence from={TIMINGS.P16.from} durationInFrames={TIMINGS.P16.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 04" title="SECURITY CONTAINMENT BREACH" color="#ef4444" />
          <ModernTerminalRunner
            mode="directory"
            title="CRITICAL CONTAINMENT BREACH // AUTONOMOUS FLEET"
            command="hypervisor kill -9 --pid-all autonomous-fleet-sandbox"
            badgeStatus="2,600 EXPLOIT ATTEMPTS"
            highlightMetric="HARD TERMINATION"
            glowColor="#ef4444"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["2,600 ATTEMPTS", "SANDBOX", "BREACH"]}
              accentWordIndex={1}
              accentColor="#EF4444"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* =========================================================================
          ACT 5: THE ECONOMIC WAR & FINAL VERDICT (P17 - P23)
          ========================================================================= */}

      {/* P17: 4-Way Doctrine Clash - Official Logos Showcase */}
      <Sequence from={TIMINGS.P17.from} durationInFrames={TIMINGS.P17.dur}>
        <AbsoluteFill
          style={{
            backgroundColor: "#030712",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ChapterHud act="ACT 05" title="THREE COMPUTING DOCTRINES" color="#38bdf8" />

          {/* 4 Logos Flex Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 36,
              zIndex: 10,
            }}
          >
            <div style={{ width: 380 }}>
              <OfficialLogoBadge
                logo="gemini"
                size={110}
                label="GOOGLE GEMINI"
                sublabel="BRUTE SILICON"
                glowColor="rgba(56, 189, 248, 0.7)"
                fullCanvas={false}
              />
            </div>
            <div style={{ width: 380 }}>
              <OfficialLogoBadge
                logo="meta"
                size={110}
                label="META AI"
                sublabel="OPEN WEIGHTS"
                glowColor="rgba(24, 119, 242, 0.7)"
                fullCanvas={false}
              />
            </div>
            <div style={{ width: 380 }}>
              <OfficialLogoBadge
                logo="claude"
                size={110}
                label="ANTHROPIC"
                sublabel="SURGICAL LOGIC"
                glowColor="rgba(217, 119, 87, 0.7)"
                fullCanvas={false}
              />
            </div>
            <div style={{ width: 380 }}>
              <OfficialLogoBadge
                logo="openai"
                size={110}
                label="OPENAI"
                sublabel="DYNAMIC REASONING"
                glowColor="rgba(16, 185, 129, 0.7)"
                fullCanvas={false}
              />
            </div>
          </div>

          <div style={{ position: "absolute", bottom: 80 }}>
            <KineticPunchText
              words={["THREE", "COMPUTING", "DOCTRINES"]}
              accentWordIndex={1}
              accentColor="#38BDF8"
              fontSize={78}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P18: Google Doctrine - Silicon Subsidy Moat */}
      <Sequence from={TIMINGS.P18.from} durationInFrames={TIMINGS.P18.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 05" title="GOOGLE SILICON SUBSIDY MOAT" color="#38bdf8" />
          <SiliconDieSchematic
            color="#38bdf8"
            label="GOOGLE DOCTRINE // TPU v6 SILICON SUBSIDY"
            subtitle="ZERO MARGINAL TOKEN COST // 1M OUTPUT PROCEDURAL ENGINE"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["GOOGLE", "SILICON", "SUBSIDY"]}
              accentWordIndex={1}
              accentColor="#38BDF8"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P19: Meta Doctrine - Open-Source Moat */}
      <Sequence from={TIMINGS.P19.from} durationInFrames={TIMINGS.P19.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 05" title="META OPEN-SOURCE COMMODITIZATION" color="#1877f2" />
          <SiliconDieSchematic
            color="#1877f2"
            label="META DOCTRINE // COMMODITIZED OPEN WEIGHTS"
            subtitle="ON-PREMISE AUTONOMOUS FLEETS // ZERO API TAX"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["OPEN SOURCE", "COMMODITIZES", "APIS"]}
              accentWordIndex={1}
              accentColor="#1877F2"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P20: Precision & Reasoning Doctrine Arena */}
      <Sequence from={TIMINGS.P20.from} durationInFrames={TIMINGS.P20.dur}>
        <AbsoluteFill style={{ backgroundColor: "#02050c" }}>
          <ChapterHud act="ACT 05" title="PRECISION & REASONING DOCTRINE" color="#f97316" />
          <ModernBenchmarkArena
            title="PRECISION & REASONING DOCTRINE"
            category="ZERO-ERROR PRODUCTION INFRASTRUCTURE & FORMAL LOGIC"
            badgeStatus="SAFETY BENCHMARK"
            items={[
              {
                name: "Claude Opus 5.5 (Formal Logic)",
                score: "99.4%",
                numericVal: 99.4,
                maxVal: 100,
                color: "#f97316",
                isHero: true,
                badge: "SAFETY LEADER",
                detail: "Zero Catastrophic Regressions",
              },
              {
                name: "GPT-6 Astra (Dynamic Reasoning)",
                score: "98.8%",
                numericVal: 98.8,
                maxVal: 100,
                color: "#10b981",
                badge: "COMPUTE BUDGET",
                detail: "Hybrid Reasoning Loops",
              },
              {
                name: "Gemini 4 Argon (Codebase Sweeps)",
                score: "96.2%",
                numericVal: 96.2,
                maxVal: 100,
                color: "#38bdf8",
                detail: "1M Token Context Scope",
              },
              {
                name: "Meta Muse Wonder (Local Deploy)",
                score: "93.5%",
                numericVal: 93.5,
                maxVal: 100,
                color: "#a855f7",
                detail: "816B Local On-Premise",
              },
            ]}
            sourceLabel="GLOBAL PRODUCTION RELIABILITY INDEX // ZERO-DOWNTIME METRICS"
          />
          <div style={{ position: "absolute", bottom: 36, left: 0, right: 0 }}>
            <KineticPunchText
              words={["SURGICAL", "ZERO ERROR", "PRECISION"]}
              accentWordIndex={1}
              accentColor="#F97316"
              fontSize={62}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P21: Pricing Arbitrage Matrix - $4 In / $20 Out */}
      <Sequence from={TIMINGS.P21.from} durationInFrames={TIMINGS.P21.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 05" title="PRICING ARBITRAGE & MARGIN SPIRAL" color="#10b981" />
          <ModernTerminalRunner
            mode="arbitrage"
            title="API PRICING ARBITRAGE MATRIX"
            command="curl -s api.frontier.pricing/v1/compare | jq ."
            badgeStatus="$4 IN / $20 OUT MATCH"
            highlightMetric="-50% PRICE COMPRESSION"
            glowColor="#10b981"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["AGGRESSIVE", "MARGIN", "COMPRESSION"]}
              accentWordIndex={1}
              accentColor="#10B981"
              fontSize={64}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P22: Secret Staging Checkpoint - Codename Carbon */}
      <Sequence from={TIMINGS.P22.from} durationInFrames={TIMINGS.P22.dur}>
        <AbsoluteFill style={{ backgroundColor: "#020408" }}>
          <ChapterHud act="ACT 05" title="CLASSIFIED STAGING: CODENAME CARBON" color="#10b981" />
          <SiliconDieSchematic
            color="#10b981"
            label="SECRET GOOGLE STAGING CHECKPOINT: CODENAME CARBON"
            subtitle="INTEGRATED FORMAL VERIFICATION ENGINES // MATHEMATICALLY PROVEN CODE"
          />
          <div style={{ position: "absolute", bottom: 44, left: 0, right: 0 }}>
            <KineticPunchText
              words={["CODENAME", "CARBON", "VERIFICATION"]}
              accentWordIndex={1}
              accentColor="#10B981"
              fontSize={66}
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* P23: Grand Finale - Multi-Polar Frontier Verdict */}
      <Sequence from={TIMINGS.P23.from} durationInFrames={TIMINGS.P23.dur}>
        <AbsoluteFill
          style={{
            backgroundColor: "#030712",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ChapterHud act="ACT 05" title="THE MULTI-POLAR FRONTIER VERDICT" color="#38bdf8" />

          {/* Volumetric glow */}
          <div
            style={{
              position: "absolute",
              width: 1400,
              height: 1400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)",
            }}
          />

          {/* 4 Superpower Cards in a 2x2 Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              width: 1200,
              zIndex: 10,
              marginTop: -60,
            }}
          >
            <div
              style={{
                background: "rgba(3, 7, 18, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <OfficialLogoBadge logo="gemini" size={70} fullCanvas={false} />
              <div>
                <div style={{ color: "#38bdf8", fontSize: 24, fontWeight: 800 }}>GEMINI 4 ARGON</div>
                <div style={{ color: "#94a3b8", fontSize: 14, fontFamily: "monospace" }}>1M CONTINUOUS // BRUTE SILICON</div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(3, 7, 18, 0.8)",
                border: "1px solid rgba(24, 119, 242, 0.4)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <OfficialLogoBadge logo="meta" size={70} fullCanvas={false} />
              <div>
                <div style={{ color: "#1877f2", fontSize: 24, fontWeight: 800 }}>META MUSE WONDER</div>
                <div style={{ color: "#94a3b8", fontSize: 14, fontFamily: "monospace" }}>816B OPEN // LOCAL M5 ULTRA</div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(3, 7, 18, 0.8)",
                border: "1px solid rgba(249, 115, 22, 0.4)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <OfficialLogoBadge logo="claude" size={70} fullCanvas={false} />
              <div>
                <div style={{ color: "#f97316", fontSize: 24, fontWeight: 800 }}>CLAUDE OPUS 5.5</div>
                <div style={{ color: "#94a3b8", fontSize: 14, fontFamily: "monospace" }}>SURGICAL LOGIC // CLAUDE CODE</div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(3, 7, 18, 0.8)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <OfficialLogoBadge logo="openai" size={70} fullCanvas={false} />
              <div>
                <div style={{ color: "#10b981", fontSize: 24, fontWeight: 800 }}>GPT-6 ASTRA</div>
                <div style={{ color: "#94a3b8", fontSize: 14, fontFamily: "monospace" }}>DYNAMIC REASONING LOOPS</div>
              </div>
            </div>
          </div>

          {/* Staggered Final Kinetic Punch Text */}
          <div style={{ position: "absolute", bottom: 80 }}>
            <KineticPunchText
              words={["AUTONOMOUS", "SOFTWARE", "BEGUN"]}
              accentWordIndex={1}
              accentColor="#38BDF8"
              fontSize={80}
            />
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
