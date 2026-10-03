import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { EvidenceDossierView } from "../components/EvidenceDossierView";
import { SplitEvidenceDossier } from "../components/SplitEvidenceDossier";
import { RealEvidenceVideoCanvas } from "../components/RealEvidenceVideoCanvas";
import { KineticPunchText } from "../components/KineticPunchText";
import { SpeedometerGauge } from "../components/SpeedometerGauge";
import { OfficialLogoBadge } from "../components/OfficialLogoBadge";
import { YouTubeSubscribeOverlay } from "../components/YouTubeSubscribeOverlay";

export const ThreeWayWarScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Series>
        {/* ========================================================================= */}
        {/* ACT 1: COLD-OPEN HOOK & 3-WAY SIZZLE REEL (0 - 1,600 frames / 0:00 - 0:53) */}
        {/* ========================================================================= */}

        {/* Sizzle 1: Gemini 4 Argon 3D V8 Engine Simulator Demo Video (200f) */}
        <Series.Sequence durationInFrames={200}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon/gemini4_v8_simulator_demo.mp4"
            aspectRatio="16:9"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["72 HOURS", "3 MODELS", "TESTED"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Sizzle 2: GPT-6.1 Sol 3D Voxel Minecraft Engine Demo Video (200f) */}
        <Series.Sequence durationInFrames={200}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/sol/gpt6_sol_3d_voxel_demo.mp4"
            aspectRatio="16:9"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["REAL DEVELOPER", "STRESS", "TEST"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Sizzle 3: Claude Sonnet 5.5 Terminal-Bench 70.6% Live Video (200f) */}
        <Series.Sequence durationInFrames={200}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/sonnet55/sonnet55_terminal_bench_vladic.mp4"
            aspectRatio="16:9"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SONNET 5.5", "BEATS", "OPUS 5.5"]} accentColor="#f97316" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Sizzle 4: 3 Brand Logos Convergence (200f) */}
        <Series.Sequence durationInFrames={200}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 110, alignItems: "center" }}>
              <OfficialLogoBadge logo="gemini" size={120} label="GOOGLE" sublabel="GEMINI 4 ARGON" glowColor="#00f0ff" />
              <OfficialLogoBadge logo="claude" size={120} label="ANTHROPIC" sublabel="SONNET 5.5" glowColor="#f97316" />
              <OfficialLogoBadge logo="openai" size={120} label="OPENAI" sublabel="GPT-6.1 SOL" glowColor="#10b981" />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THE NEW", "CODING", "HIERARCHY"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Act 1 Overview: 4 Testing Rounds Setup (800f) */}
        <Series.Sequence durationInFrames={800}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 40, alignItems: "center", justifyContent: "center", width: "100%", transform: "translateY(-40px)" }}>
              <SpeedometerGauge fullCanvas={false} width={520} height={520} value={77.9} maxValue={100} label="DEEPSWE 1.1" unit="%" color="#00f0ff" size={260} />
              <SpeedometerGauge fullCanvas={false} width={520} height={520} value={70.6} maxValue={100} label="TERMINAL-BENCH" unit="%" color="#f97316" size={260} />
              <SpeedometerGauge fullCanvas={false} width={520} height={520} value={80} maxValue={100} label="COST REDUCTION" unit="%" color="#10b981" size={260} />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["4 TESTING", "ROUNDS", "COMPARED"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 2: TEST 1 - FULL AUTOPILOT 3D APP (1,600 - 4,600 / 0:53 - 2:33)        */}
        {/* ========================================================================= */}

        {/* Gemini 4 Argon: 3D V8 Engine Simulator Demo Video (1,200f) */}
        <Series.Sequence durationInFrames={1200}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon/gemini4_v8_simulator_demo.mp4"
            aspectRatio="16:9"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["GEMINI 4", "V8 ENGINE", "SIMULATOR"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* GPT-6.1 Sol: 3D Voxel Minecraft Engine Demo Video (1,000f) */}
        <Series.Sequence durationInFrames={1000}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/sol/gpt6_sol_3d_voxel_demo.mp4"
            aspectRatio="16:9"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["GPT-6 SOL", "1.7 MINUTES", "11K TOKENS"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Round 1 Verdict: Gemini Argon Wins Single-Pass 3D (800f) */}
        <Series.Sequence durationInFrames={800}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="gemini" size={220} label="ROUND 1 WINNER" sublabel="GOOGLE GEMINI 4 ARGON (3D PHYSICS & ZERO SYNTAX ERRORS)" glowColor="#00f0ff" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ROUND 1", "GEMINI ARGON", "WINS"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 3: TEST 2 - TERMINAL & BUG FIXING (4,600 - 7,550 / 2:33 - 4:11)        */}
        {/* ========================================================================= */}

        {/* Sonnet 5.5: Terminal-Bench 4.0 70.6% Live Demo Video (1,000f) */}
        <Series.Sequence durationInFrames={1000}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/sonnet55/sonnet55_terminal_bench_vladic.mp4"
            aspectRatio="16:9"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SONNET 5.5", "70.6% TERMINAL", "RECORD"]} accentColor="#f97316" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Sonnet 5.5: Claude Code CLI Agent Precision Demo Video (950f) */}
        <Series.Sequence durationInFrames={950}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/sonnet55/sonnet55_claudecode_agent_dan.mp4"
            aspectRatio="16:9"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SURGICAL", "CLAUDE CODE", "EXECUTION"]} accentColor="#f97316" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Round 2 Hard Telemetry Dials: Sonnet vs Opus vs Astra (1,000f) */}
        <Series.Sequence durationInFrames={1000}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 50, alignItems: "center", justifyContent: "center", width: "100%", transform: "translateY(-40px)" }}>
              <SpeedometerGauge fullCanvas={false} width={500} height={500} value={70.6} maxValue={100} label="SONNET 5.5" unit="%" color="#f97316" size={260} />
              <SpeedometerGauge fullCanvas={false} width={500} height={500} value={68.2} maxValue={100} label="GPT-6 ASTRA" unit="%" color="#10b981" size={260} />
              <SpeedometerGauge fullCanvas={false} width={500} height={500} value={66.4} maxValue={100} label="OPUS 5.5" unit="%" color="#94a3b8" size={260} />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ROUND 2", "SONNET 5.5", "LANDSLIDE"]} accentColor="#f97316" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 4: TEST 3 - MONOLITHS & REFACTORING (7,550 - 9,300 / 4:11 - 5:10)       */}
        {/* ========================================================================= */}

        {/* Gemini Argon: 1 Million Token Output Window (950f) */}
        <Series.Sequence durationInFrames={950}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/deepmind_reasoning_1m.jpg"
            glowColor="#00f0ff"
            badgeLabel="GOOGLE DEEPMIND • CONTEXT BREAKTHROUGH"
            badgeStatus="1 MILLION OUTPUT TOKENS"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["1 MILLION", "OUTPUT", "TOKENS"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* GPT-6.1 Sol: Dots Background Agent Swarms (800f) */}
        <Series.Sequence durationInFrames={800}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="openai" size={220} label="DOTS AGENT RUNTIME" sublabel="ASYNCHRONOUS BACKGROUND SWARMS INSIDE GITHUB REPOSITORIES" glowColor="#10b981" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["DOTS AGENTS", "IN YOUR", "REPOSITORY"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 5: TEST 4 - TOKEN ECONOMICS & COST PER PR (9,300 - 10,800 / 5:10 - 6:00)*/}
        {/* ========================================================================= */}

        {/* Sonnet 5.5 $2/$10 Pricing on $20 Claude Pro Plan (750f) */}
        <Series.Sequence durationInFrames={750}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/12_mohamed_pricing.png"
            glowColor="#f97316"
            badgeLabel="ANTHROPIC OFFICIAL PRICING"
            badgeStatus="$2 INPUT / $10 OUTPUT • $0.20 CACHE"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["$20 CLAUDE PRO", "UNLIMITED", "UTILITY"]} accentColor="#f97316" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Sol Cost per Merged PR Dials: Sol 18¢ vs Sonnet 42¢ (750f) */}
        <Series.Sequence durationInFrames={750}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 70, alignItems: "center", justifyContent: "center", width: "100%", transform: "translateY(-40px)" }}>
              <SpeedometerGauge fullCanvas={false} width={550} height={550} value={18} maxValue={100} label="SOL COST PER PR" unit="¢" color="#10b981" size={300} />
              <SpeedometerGauge fullCanvas={false} width={550} height={550} value={42} maxValue={100} label="SONNET COST PER PR" unit="¢" color="#f97316" size={300} />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["18 CENTS", "PER MERGED", "PR"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 6: FINAL VERDICT & DECISION MATRIX (10,800 - 12,742 / 6:00 - 7:04)     */}
        {/* ========================================================================= */}

        {/* Decision 1: Google Gemini 4 Argon -> Enterprise Security & 1M Monolith (600f) */}
        <Series.Sequence durationInFrames={600}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="gemini" size={220} label="GOOGLE GEMINI 4 ARGON" sublabel="ENTERPRISE SECURITY & 1M TOKEN MONOLITH REFACTORS" glowColor="#00f0ff" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ENTERPRISE", "CYBER", "WHITELIST"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Decision 2: Anthropic Claude Sonnet 5.5 -> Daily Dev & Claude Code (600f) */}
        <Series.Sequence durationInFrames={600}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="claude" size={220} label="ANTHROPIC CLAUDE SONNET 5.5" sublabel="DAILY CODING & TERMINAL AGENTS (BEST ROI)" glowColor="#f97316" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["UNDISPUTED", "DAILY CODING", "KING"]} accentColor="#f97316" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Decision 3: OpenAI GPT-6.1 Sol -> Massive Batch CI & 80% Savings (450f) */}
        <Series.Sequence durationInFrames={450}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="openai" size={220} label="OPENAI GPT-6.1 SOL" sublabel="HIGH-VOLUME BATCH CI & 80% TOKEN COST SAVINGS" glowColor="#10b981" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MAXIMUM", "BUDGET", "LEVERAGE"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Final Conclusion & Subscribe (292f) */}
        <Series.Sequence durationInFrames={292}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 110, alignItems: "center", transform: "translateY(-40px)" }}>
              <OfficialLogoBadge logo="gemini" size={120} label="GOOGLE" sublabel="CYBER & 1M MONOLITH" glowColor="#00f0ff" />
              <OfficialLogoBadge logo="claude" size={120} label="ANTHROPIC" sublabel="DAILY AGENT KING" glowColor="#f97316" />
              <OfficialLogoBadge logo="openai" size={120} label="OPENAI" sublabel="MASSIVE BATCH CI" glowColor="#10b981" />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["CHOOSE YOUR", "CODING", "STACK"]} accentColor="#38bdf8" fontSize={66} />
            </div>
            <YouTubeSubscribeOverlay startFrame={30} durationInFrames={250} position="bottom-right" />
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
