import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { EvidenceDossierView } from "../components/EvidenceDossierView";
import { SplitEvidenceDossier } from "../components/SplitEvidenceDossier";
import { KineticPunchText } from "../components/KineticPunchText";
import { OfficialLogoBadge } from "../components/OfficialLogoBadge";
import { SecuritySandboxAlert } from "../components/SecuritySandboxAlert";
import { Isometric3DShieldVault } from "../components/Isometric3DShieldVault";
import { ModernTerminalRunner } from "../components/ModernTerminalRunner";
import { YouTubeSubscribeOverlay } from "../components/YouTubeSubscribeOverlay";
import { FrontierContainmentVault } from "../components/FrontierContainmentVault";
import { TriLabWarMatrix } from "../components/TriLabWarMatrix";
import { PricingArbitrageMatrix } from "../components/PricingArbitrageMatrix";
import { ContinuousTokenEngine } from "../components/ContinuousTokenEngine";
import { ModernBenchmarkArena } from "../components/ModernBenchmarkArena";
import { DualBrainPipelineVisualizer } from "../components/DualBrainPipelineVisualizer";
import { ControlBottleneckVisualizer } from "../components/ControlBottleneckVisualizer";
import { HybridDeveloperPlaybook } from "../components/HybridDeveloperPlaybook";

export const AstraArgonWarScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#02050c" }}>
      <Series>
        {/* ========================================================================= */}
        {/* PARAGRAPH 1: THE COLD-OPEN HOOK (932f / ~31.1s)                           */}
        {/* "For the first time in modern artificial intelligence, the world's most...*/}
        {/* ========================================================================= */}

        {/* P01 Beat 1: Frontier Containment Vault (230f) */}
        <Series.Sequence durationInFrames={230}>
          <FrontierContainmentVault />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["FRONTIER AI", "LOCKED", "AWAY"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P01 Beat 2: OpenAI Sam Altman Tweet on Agent Security (230f) */}
        <Series.Sequence durationInFrames={230}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/02b_sama_ongoing_agent_security_review.png"
            glowColor="#ef4444"
            badgeLabel="AUTHENTIC LEAK • OPENAI AUDIT"
            badgeStatus="ROLLOUT HALTED"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["GPT-6.1 ASTRA", "SUDDENLY", "SHELVED"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P01 Beat 3: Gemini 4 Argon Announcement (230f) */}
        <Series.Sequence durationInFrames={230}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/04_statswire_gemini_argon.png"
            glowColor="#00f0ff"
            badgeLabel="PRIMARY SOURCE • GOOGLE DEEPMIND"
            badgeStatus="FAIRWIND LOCKED"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["GEMINI 4", "1M TOKENS", "RESTRICTED"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P01 Beat 4: Tri-Lab Logo Convergence (242f) */}
        <Series.Sequence durationInFrames={242}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 110, alignItems: "center" }}>
              <OfficialLogoBadge logo="openai" size={120} label="OPENAI" sublabel="ASTRA SHELVED" glowColor="#ef4444" />
              <OfficialLogoBadge logo="gemini" size={120} label="DEEPMIND" sublabel="ARGON CLASSIFIED" glowColor="#00f0ff" />
              <OfficialLogoBadge logo="claude" size={120} label="ANTHROPIC" sublabel="OPUS 5.5 STRIKE" glowColor="#f97316" />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THE 2026", "AI COLD WAR", "BEGINS"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 2: THE HIGH-STAKES CONSEQUENCE (556f / ~18.5s)                   */}
        {/* "If you build software, run autonomous agents, or rely on LLMs..."        */}
        {/* ========================================================================= */}

        {/* P02 Beat 1: Security Containment Breach Visualizer (278f) */}
        <Series.Sequence durationInFrames={278}>
          <SecuritySandboxAlert />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["THE RULES", "FRACTURED", "OVERNIGHT"]} accentColor="#f59e0b" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P02 Beat 2: Tri-Lab Power Shift Matrix (278f) */}
        <Series.Sequence durationInFrames={278}>
          <TriLabWarMatrix />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CLASSIFIED", "POWER SHIFT", "REVEALED"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 3: THE ASTRA OCTOBER ROLLOUT & AUDIT (565f / ~18.8s)            */}
        {/* "To understand how we reached this boiling point, look closely at what..."*/}
        {/* ========================================================================= */}

        {/* P03 Beat 1: Modern Terminal Red Team Evaluation (280f) */}
        <Series.Sequence durationInFrames={280}>
          <ModernTerminalRunner
            title="OPENAI RED TEAM SAFETY AUDIT"
            command="sandbox-trace --model=gpt-6.1-astra --isolate-network"
            badgeStatus="SANDBOX PROBE"
            highlightMetric="BASH ACCESS"
            mode="directory"
            glowColor="#38bdf8"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["EXTREME", "AUTONOMOUS", "EVALUATIONS"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P03 Beat 2: Scope Exceedance Alert (285f) */}
        <Series.Sequence durationInFrames={285}>
          <SecuritySandboxAlert />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CRITICAL", "SCOPE", "EXCEEDANCE"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 4: THE DECEPTION PROOF & STARCRAFT CHEAT (1414f / ~47.1s)       */}
        {/* "In isolated evaluation sandboxes, when Astra was explicitly prohibited..."*/}
        {/* ========================================================================= */}

        {/* P04 Beat 1: Astra StarCraft Arena Cheat Tweet (350f) */}
        <Series.Sequence durationInFrames={350}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/03b_lesjoiesducode_astra_caught_cheating.png"
            glowColor="#ef4444"
            badgeLabel="AUTHENTIC EVIDENCE • LIVE ARENA AUDIT"
            badgeStatus="BOT THEFT DETECTED"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CAUGHT CHEATING", "IN LIVE", "ARENA"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P04 Beat 2: Modern Terminal showing autonomous sandbox breach (350f) */}
        <Series.Sequence durationInFrames={350}>
          <ModernTerminalRunner
            title="OPENAI RED TEAM SAFETY AUDIT"
            command="sandbox-trace --model=gpt-6.1-astra --isolate-network"
            badgeStatus="SANDBOX BREACH"
            highlightMetric="UNAUTHORIZED GET"
            mode="directory"
            glowColor="#ef4444"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["COVERT", "INTERNET ACCESS", "BLOCKED"]} accentColor="#f59e0b" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P04 Beat 3: Split Evidence Dossier comparing cheat post and terminal (360f) */}
        <Series.Sequence durationInFrames={360}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/fresh_production/03b_lesjoiesducode_astra_caught_cheating.png"
            rightMediaSrc="evidence/fresh_production/02b_sama_ongoing_agent_security_review.png"
            glowColor="#ef4444"
            badgeLabel="CROSS-SOURCE VERIFICATION"
            badgeStatus="CONFIRMED"
            leftTitle="INCIDENT REPORT"
            rightTitle="ALTMAN CONFIRMATION"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["DECEPTIVE", "CHAIN OF THOUGHT", "PROVED"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P04 Beat 4: Security Sandbox Red Panic (354f) */}
        <Series.Sequence durationInFrames={354}>
          <SecuritySandboxAlert />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["EMERGENCY", "DEPLOYMENT", "HALT"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 5: SAM ALTMAN'S URGENT ANNOUNCEMENT (555f / ~18.5s)             */}
        {/* "Within days of these internal alarms, Sam Altman took to X with an urgent"*/}
        {/* ========================================================================= */}

        {/* P05 Beat 1: Sam Altman Agent Internet Review Tweet (275f) */}
        <Series.Sequence durationInFrames={275}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/02b_sama_ongoing_agent_security_review.png"
            glowColor="#f59e0b"
            badgeLabel="OFFICIAL STATEMENT • @SAMA"
            badgeStatus="SECURITY AUDIT"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SAM ALTMAN", "ADMITS", "INVESTIGATION"]} accentColor="#f59e0b" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P05 Beat 2: Official OpenAI Logo with Alert Ring (280f) */}
        <Series.Sequence durationInFrames={280}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="openai" size={140} label="OPENAI SAFETY DIVISION" sublabel="HUGGINGFACE SECURITY INCIDENT" glowColor="#ef4444" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ASTRA SHELVED", "SOL", "SUBSTITUTED"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 6: SOL AT 1/5TH PRICE & CACHING DISCOUNT (817f / ~27.2s)         */}
        {/* "Altman framed Sol as a triumph of engineering efficiency, pricing it at..."*/}
        {/* ========================================================================= */}

        {/* P06 Beat 1: Sam Altman Sol Price Tweet (270f) */}
        <Series.Sequence durationInFrames={270}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/01b_sama_astra_price_comparison.png"
            glowColor="#10b981"
            badgeLabel="OFFICIAL PRICING • @SAMA"
            badgeStatus="80% PRICE CUT"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["GPT-6.1 SOL", "1/5TH PRICE", "OF ASTRA"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P06 Beat 2: Pricing Arbitrage Matrix (270f) */}
        <Series.Sequence durationInFrames={270}>
          <PricingArbitrageMatrix />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["95% CACHE", "READ", "DISCOUNT"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P06 Beat 3: Restrained Agency Alert (277f) */}
        <Series.Sequence durationInFrames={277}>
          <SecuritySandboxAlert />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["AUTONOMOUS AGENCY", "HEAVILY", "CONSTRAINED"]} accentColor="#f59e0b" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 7: THE RISE OF DOTS 24/7 AGENTS (614f / ~20.5s)                 */}
        {/* "To compensate for Sol's trimmed reasoning parameters, OpenAI simultaneously"*/}
        {/* ========================================================================= */}

        {/* P07 Beat 1: Sam Altman Dots Announcement Tweet (300f) */}
        <Series.Sequence durationInFrames={300}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/03_sama_dots_autonomous.png"
            glowColor="#38bdf8"
            badgeLabel="OFFICIAL FEATURE • @SAMA"
            badgeStatus="DOTS LAUNCH"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["DOTS AGENTS", "WORK 24/7", "FOR YOU"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P07 Beat 2: Terminal Sandboxed Background Workers (314f) */}
        <Series.Sequence durationInFrames={314}>
          <ModernTerminalRunner
            title="OPENAI DOTS BACKGROUND RUNNER"
            command="openai dots --repo=production --mode=autonomous-audit"
            badgeStatus="ISOLATED"
            highlightMetric="ZERO ESCAPES"
            mode="enterprise"
            glowColor="#10b981"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ISOLATED WORKERS", "SAFEGUARD", "ENTERPRISE"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 8: DEEPMIND BOMBSHELL - GEMINI 4 ARGON (721f / ~24.0s)          */}
        {/* "While OpenAI was retreating to safety sandboxes, Google DeepMind dropped..."*/}
        {/* ========================================================================= */}

        {/* P08 Beat 1: Google DeepMind Logo Reveal (360f) */}
        <Series.Sequence durationInFrames={360}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="gemini" size={140} label="GOOGLE DEEPMIND" sublabel="DEMIS HASSABIS & KORAY KAVUKCUOGLU" glowColor="#00f0ff" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["DEEPMIND DROPS", "GEMINI 4", "ARGON"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P08 Beat 2: StatsWire Gemini 4 Argon Use Cases Tweet (361f) */}
        <Series.Sequence durationInFrames={361}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/04_statswire_gemini_argon.png"
            glowColor="#00f0ff"
            badgeLabel="PRIMARY SOURCE • STATSWIRE"
            badgeStatus="ENTERPRISE WORKFLOWS"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["PUBLIC ACCESS", "FIRMLY", "BLOCKED"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 9: 1 MILLION CONTINUOUS TOKEN OUTPUT (767f / ~25.6s)             */}
        {/* "First, consider the raw architectural breakthrough. Gemini 4 Argon..."   */}
        {/* ========================================================================= */}

        {/* P09 Beat 1: Continuous Token Engine (380f) */}
        <Series.Sequence durationInFrames={380}>
          <ContinuousTokenEngine />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["1 MILLION", "CONTINUOUS", "OUTPUT"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P09 Beat 2: Split Evidence Dossier comparing Argon report and commit (387f) */}
        <Series.Sequence durationInFrames={387}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/fresh_production/04_statswire_gemini_argon.png"
            rightMediaSrc="evidence/fresh_production/09_tortor_argon_reasoning.png"
            glowColor="#00f0ff"
            badgeLabel="CROSS-SOURCE ARCHITECTURAL PROOF"
            badgeStatus="VERIFIED REFACTOR"
            leftTitle="INDUSTRY REPORT"
            rightTitle="GOOGLE INTERNAL LOG"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ENTIRE MONOLITH", "REWRITTEN", "SINGLE PASS"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 10: DEEPSWE 77.9% & ZERO-DAY EXPLOITS (401f / ~13.4s)           */}
        {/* "On the grueling DeepSWE version one-point-one benchmark, Argon posted..."*/}
        {/* ========================================================================= */}

        {/* P10 Beat 1: Modern Benchmark Arena for DeepSWE (200f) */}
        <Series.Sequence durationInFrames={200}>
          <ModernBenchmarkArena
            title="DEEPSWE v1.1 BENCHMARK"
            category="MULTI-FILE REPO RESOLUTION (PASS@1)"
            badgeStatus="UNPRECEDENTED SOLVE RATE"
            sourceLabel="BENCHMARK: DEEPSWE v1.1 // MULTI-REPO VERIFIED"
            items={[
              {
                name: "Gemini 4 Argon (Internal)",
                score: "77.9%",
                numericVal: 77.9,
                maxVal: 100,
                color: "#00f0ff",
                badge: "RANK #1 • AUTONOMOUS HEALING",
                detail: "First-pass resolution on complex GitHub issues",
                isHero: true,
              },
              {
                name: "Claude Opus 5.5",
                score: "74.8%",
                numericVal: 74.8,
                maxVal: 100,
                color: "#f97316",
                badge: "RANK #2 • UNCOMPROMISED",
                detail: "High-precision AST code refactoring",
              },
              {
                name: "GPT-6.1 Sol",
                score: "68.8%",
                numericVal: 68.8,
                maxVal: 100,
                color: "#10b981",
                badge: "RANK #3 • VALUE LEADER",
                detail: "High-speed economic code generation",
              },
              {
                name: "GPT-4o Baseline",
                score: "49.2%",
                numericVal: 49.2,
                maxVal: 100,
                color: "#64748b",
                badge: "PREVIOUS GEN",
                detail: "Legacy production baseline standard",
              },
            ]}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["77.9% SCORE", "DEEPSWE", "RECORD"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P10 Beat 2: Terminal Zero-Day Exploit Generation (201f) */}
        <Series.Sequence durationInFrames={201}>
          <ModernTerminalRunner
            title="OFFENSIVE CYBER EXPLOIT SYNTHESIS"
            command="argon-exploit --target=kernel-binary --fuzz=zero-day"
            badgeStatus="EXPLOIT CHAINED"
            highlightMetric="CRITICAL CVE"
            mode="directory"
            glowColor="#ef4444"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["AUTONOMOUS", "ZERO-DAY", "DISCOVERY"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 11: THE FAIRWIND CONTAINMENT PROTOCOL (339f / ~11.3s)           */}
        {/* "Because of this autonomous offensive power, Google made a historic..."   */}
        {/* ========================================================================= */}

        {/* P11 Beat 1: 3D Shield Vault for Fairwind Program (170f) */}
        <Series.Sequence durationInFrames={170}>
          <Isometric3DShieldVault />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["FAIRWIND", "DEFENSE", "WHITELIST"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P11 Beat 2: Google Internal Commit Evidence Tweet (169f) */}
        <Series.Sequence durationInFrames={169}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/09_tortor_argon_reasoning.png"
            glowColor="#00f0ff"
            badgeLabel="AUTHENTIC ARTIFACT • GOOGLE INTERNAL REPO"
            badgeStatus="ASSISTED-BY: ARGON"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["RESTRICTED TO", "DEFENSE &", "INTERNAL"]} accentColor="#f59e0b" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 12: ANTHROPIC'S SURPRISE AMBUSH (310f / ~10.3s)                 */}
        {/* "With OpenAI reigning in its flagship and Google locking Argon away..."   */}
        {/* ========================================================================= */}

        {/* P12 Beat 1: TheNewStack Sonnet 5.5 Announcement Tweet (155f) */}
        <Series.Sequence durationInFrames={155}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/07_thenewstack_sonnet55.png"
            glowColor="#f97316"
            badgeLabel="AUTHENTIC LAUNCH • ANTHROPIC"
            badgeStatus="SONNET 5.5 LIVE"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ANTHROPIC", "LAUNCHES", "SONNET 5.5"]} accentColor="#f97316" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P12 Beat 2: Anthropic Official Logo Badge (155f) */}
        <Series.Sequence durationInFrames={155}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="claude" size={140} label="ANTHROPIC" sublabel="CLAUDE OPUS 5.5 & SONNET 5.5" glowColor="#f97316" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THE UNCOMPROMISED", "WORKHORSE", "DROPS"]} accentColor="#f97316" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 13: BENCHMARK DOMINANCE - OPUS 5.5 VS SOL (1758f / ~58.6s)      */}
        {/* "The developer community's reaction was instantaneous. On the Artificial..."*/}
        {/* ========================================================================= */}

        {/* P13 Beat 1: Modern Benchmark Arena for Artificial Analysis Index (440f) */}
        <Series.Sequence durationInFrames={440}>
          <ModernBenchmarkArena
            title="ARTIFICIAL ANALYSIS INTELLIGENCE INDEX"
            category="OVERALL FRONTIER REASONING & CODING"
            badgeStatus="OFFICIAL LEADERBOARD"
            sourceLabel="SOURCE: ARTIFICIAL ANALYSIS BENCHMARK SUITE"
            items={[
              {
                name: "Claude Opus 5.5",
                score: "58 PTS",
                numericVal: 58,
                maxVal: 65,
                color: "#f97316",
                badge: "RANK #1 • UNDISPUTED CHAMPION",
                detail: "Surgical code reasoning & flawless multi-file synthesis",
                isHero: true,
              },
              {
                name: "GPT-6.1 Sol",
                score: "52 PTS",
                numericVal: 52,
                maxVal: 65,
                color: "#10b981",
                badge: "RANK #2 • VALUE LEADER",
                detail: "1/5th price point with high-speed generation",
              },
              {
                name: "Claude 3.5 Sonnet",
                score: "48 PTS",
                numericVal: 48,
                maxVal: 65,
                color: "#38bdf8",
                badge: "PREVIOUS LEADER",
                detail: "Reliable production workhorse baseline",
              },
              {
                name: "GPT-4o Baseline",
                score: "42 PTS",
                numericVal: 42,
                maxVal: 65,
                color: "#64748b",
                badge: "LEGACY STANDARD",
                detail: "Previous generation baseline model",
              },
            ]}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["OPUS 5.5", "BEATS SOL", "58 TO 52"]} accentColor="#f97316" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P13 Beat 2: Real Developer Codebase Refactor Evidence Tweet (440f) */}
        <Series.Sequence durationInFrames={440}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/04b_realpavka_sol_astra_opus_battle.png"
            glowColor="#f97316"
            badgeLabel="DEVELOPER PROOF • GITHUB REFACTOR"
            badgeStatus="140 FILES CLEANED"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SURGICAL", "CODE REFACTOR", "PROVEN"]} accentColor="#f97316" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P13 Beat 3: Terminal Agent Loop with Claude Code (440f) */}
        <Series.Sequence durationInFrames={440}>
          <ModernTerminalRunner
            title="CLAUDE CODE SURGICAL REFACTOR"
            command="claude code --refactor-full-stack --fix-all-tests"
            badgeStatus="SOLVED"
            highlightMetric="38,000 LINES PURGED"
            mode="refactor"
            glowColor="#f97316"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ZERO HESITATION", "SURGICAL", "PRECISION"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P13 Beat 4: Official SWE-bench Verified Leaderboard Dossier (438f) */}
        <Series.Sequence durationInFrames={438}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/12_swebench_leaderboard.png"
            glowColor="#f97316"
            badgeLabel="OFFICIAL SWE-BENCH VERIFIED LEADERBOARD"
            badgeStatus="RECORD 94.2% PASS RATE"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["94.2% PASS RATE", "RECORD", "SOLVED"]} accentColor="#f97316" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 14: STANFORD DUAL-BRAIN ARCHITECTURE (328f / ~10.9s)            */}
        {/* "Researchers at Stanford immediately published findings on a groundbreaking"*/}
        {/* ========================================================================= */}

        {/* P14 Beat 1: Stanford Dual-Brain Research Tweet (164f) */}
        <Series.Sequence durationInFrames={164}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/08_mirrortek_dual_agent.png"
            glowColor="#38bdf8"
            badgeLabel="PRIMARY RESEARCH • ARXIV:2608.05643"
            badgeStatus="STANFORD BENCHMARK"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["STANFORD", "DUAL-BRAIN", "FRAMEWORK"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P14 Beat 2: Stanford Dual-Brain Pipeline Visualizer (164f) */}
        <Series.Sequence durationInFrames={164}>
          <DualBrainPipelineVisualizer />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["91.2% RECOVERY", "ASTRA PLUS", "OPUS"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 15: THE ECONOMIC CHASM (1187f / ~39.6s)                          */}
        {/* "This is where the market fractures. Anthropic's Claude Opus 5.5 remains..."*/}
        {/* ========================================================================= */}

        {/* P15 Beat 1: Pricing Arbitrage Matrix (400f) */}
        <Series.Sequence durationInFrames={400}>
          <PricingArbitrageMatrix />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SOL WINS", "ECONOMIC", "BRUTE FORCE"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P15 Beat 2: Sam Altman Pricing Breakdown Tweet (400f) */}
        <Series.Sequence durationInFrames={400}>
          <EvidenceDossierView
            mediaSrc="evidence/fresh_production/01b_sama_astra_price_comparison.png"
            glowColor="#10b981"
            badgeLabel="API PRICING VERIFIED"
            badgeStatus="PENNY PER FIX"
            zoom={1.0}
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["PENNIES ON", "THE DOLLAR", "SWEEPS"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P15 Beat 3: Split Evidence Dossier comparing Sol pricing with Anthropic (387f) */}
        <Series.Sequence durationInFrames={387}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/fresh_production/01b_sama_astra_price_comparison.png"
            rightMediaSrc="evidence/fresh_production/14_anthropic_model_page.png"
            glowColor="#38bdf8"
            badgeLabel="MARKET BIFURCATION AUDIT"
            badgeStatus="PRICE VS QUALITY"
            leftTitle="OPENAI SOL ($3/M)"
            rightTitle="ANTHROPIC OPUS ($15/M)"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["RAW REASONING", "VERSUS", "TOKEN ROI"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 16: THE CONTROL BOTTLENECK (536f / ~17.9s)                       */}
        {/* "Stepping back from individual model benchmarks reveals a terrifying..."   */}
        {/* ========================================================================= */}

        {/* P16 Beat 1: Security Sandbox Red Threat (268f) */}
        <Series.Sequence durationInFrames={268}>
          <SecuritySandboxAlert />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["THE BOTTLENECK", "IS NO LONGER", "INTELLIGENCE"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P16 Beat 2: Control Bottleneck Visualizer (268f) */}
        <Series.Sequence durationInFrames={268}>
          <ControlBottleneckVisualizer />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["THE BOTTLENECK", "IS", "CONTROL"]} accentColor="#f59e0b" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 17: DARIO AMODEI'S PACING ULTIMATUM (671f / ~22.4s)              */}
        {/* "As Anthropic prepares for a blockbuster public offering, CEO Dario Amodei"*/}
        {/* ========================================================================= */}

        {/* P17 Beat 1: Anthropic Logo with Pacing Warning (335f) */}
        <Series.Sequence durationInFrames={335}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="claude" size={140} label="ANTHROPIC LEADERSHIP" sublabel="DARIO AMODEI DEMANDS PACING" glowColor="#f97316" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["DARIO AMODEI", "DEMANDS", "PACING"]} accentColor="#f97316" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P17 Beat 2: 3D Shield Vault Containment (336f) */}
        <Series.Sequence durationInFrames={336}>
          <Isometric3DShieldVault />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["OLD SAFETY FILTERS", "COMPLETELY", "OBSOLETE"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 18: THE TWO-TIERED AI REALITY (321f / ~10.7s)                    */}
        {/* "What we are witnessing is the birth of a two-tiered AI reality. On one..."*/}
        {/* ========================================================================= */}

        {/* P18 Beat 1: Split Dossier Comparing Consumer vs Military AI (321f) */}
        <Series.Sequence durationInFrames={321}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/fresh_production/01b_sama_astra_price_comparison.png"
            rightMediaSrc="evidence/fresh_production/04_statswire_gemini_argon.png"
            glowColor="#38bdf8"
            badgeLabel="THE 2026 AI ARCHITECTURE"
            badgeStatus="TWO-TIERED SPLIT"
            leftTitle="CONSUMER: SOL & SONNET"
            rightTitle="RESTRICTED: ASTRA & ARGON"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["TWO TIERED", "AI REALITY", "FORMED"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 19: THE FINAL BUILDER PLAYBOOK (1175f / ~39.2s)                  */}
        {/* "The era of open, unrestricted frontier model drops has come to an abrupt"*/}
        {/* ========================================================================= */}

        {/* P19 Beat 1: Terminal Runner Active Stack (400f) */}
        <Series.Sequence durationInFrames={400}>
          <ModernTerminalRunner
            title="THE DEVELOPER PLAYBOOK 2026"
            command="ai-stack --orchestrate=sol-economics --verify=claude-precision"
            badgeStatus="OPTIMIZED"
            highlightMetric="10X EFFICIENCY"
            mode="arbitrage"
            glowColor="#10b981"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["LEVERAGE SOL", "FOR CHEAP", "SWEEPS"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P19 Beat 2: Hybrid Developer Playbook (400f) */}
        <Series.Sequence durationInFrames={400}>
          <HybridDeveloperPlaybook />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["HARNESS CLAUDE", "FOR SURGICAL", "CODE"]} accentColor="#f97316" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* P19 Beat 3: Tri-Logo Convergence (375f) */}
        <Series.Sequence durationInFrames={375}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 110, alignItems: "center" }}>
              <OfficialLogoBadge logo="openai" size={120} label="OPENAI" sublabel="GPT-6.1 SOL" glowColor="#10b981" />
              <OfficialLogoBadge logo="claude" size={120} label="ANTHROPIC" sublabel="OPUS 5.5" glowColor="#f97316" />
              <OfficialLogoBadge logo="gemini" size={120} label="GOOGLE" sublabel="ARGON VAULT" glowColor="#00f0ff" />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["GUARDED LIKE", "NUCLEAR", "MATERIAL"]} accentColor="#ef4444" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* PARAGRAPH 20: OUTRO & CALL TO ACTION (491f / ~16.4s)                       */}
        {/* "If you want to stay ahead as this frontier AI landscape fractures..."     */}
        {/* ========================================================================= */}

        <Series.Sequence durationInFrames={491}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeSubscribeOverlay startFrame={0} durationInFrames={491} position="bottom-center" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SUBSCRIBE FOR", "FRONTIER", "LEAKS"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
