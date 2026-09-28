import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { EvidenceDossierView } from "../components/EvidenceDossierView";
import { PromptBoxDeathHook } from "../components/PromptBoxDeathHook";
import { ProjectOAgentVisualizer } from "../components/ProjectOAgentVisualizer";
import { ProMaxPricingMatrix } from "../components/ProMaxPricingMatrix";
import { SecuritySandboxAlert } from "../components/SecuritySandboxAlert";
import { SiliconDieSchematic } from "../components/SiliconDieSchematic";
import { SpeedometerGauge } from "../components/SpeedometerGauge";
import { KineticPunchText } from "../components/KineticPunchText";

export const DevDay2026Scenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Series>
        {/* ========================================================================= */}
        {/* COLD-OPEN HOOK: FIRST 30 SECONDS (0 - 975 frames / 0.0s - 32.5s) */}
        {/* ========================================================================= */}

        {/* 0A: "Look closely at this leaked production repository." (0 - 90 / 0.0s - 3.0s) */}
        <Series.Sequence durationInFrames={90}>
          <EvidenceDossierView
            mediaSrc="evidence/devday2026/openai_codex_promax_commit.png"
            glowColor="#38bdf8"
            badgeLabel="OPENAI / CODEX • PUBLIC GITHUB REPOSITORY"
            badgeStatus="PRODUCTION MERGE"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["LEAKED", "REPO", "COMMIT"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* 0B: "Tomorrow morning at 10 a.m. in San Francisco," (90 - 180 / 3.0s - 6.0s) */}
        <Series.Sequence durationInFrames={90}>
          <EvidenceDossierView
            mediaSrc="evidence/devday2026/devday_keynote_official.png"
            glowColor="#6366f1"
            badgeLabel="OPENAI DEVDAY 2026 • SAN FRANCISCO"
            badgeStatus="OFFICIAL KEYNOTE"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["DEVDAY", "SAN", "FRANCISCO"]} accentColor="#6366f1" />
          </div>
        </Series.Sequence>

        {/* 0C: "OpenAI is preparing to kill the prompt box forever..." (180 - 420 / 6.0s - 14.0s) */}
        <Series.Sequence durationInFrames={240}>
          <PromptBoxDeathHook />
        </Series.Sequence>

        {/* 0D: "unreleased production strings and repository commits..." (420 - 520 / 14.0s - 17.3s) */}
        <Series.Sequence durationInFrames={100}>
          <EvidenceDossierView
            mediaSrc="evidence/devday2026/tibor_promax_leak_desktop.png"
            glowColor="#f87171"
            badgeLabel="CHATGPT WEB CLIENT • REVERSE ENGINEERING"
            badgeStatus="CONFIDENTIAL CONFIG"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CONFIG", "CODE", "LEAK"]} accentColor="#f87171" />
          </div>
        </Series.Sequence>

        {/* 0E: "A shocking five-hundred-dollar-a-month Pro Max tier..." (520 - 720 / 17.3s - 24.0s) */}
        <Series.Sequence durationInFrames={200}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <SpeedometerGauge value={500} maxValue={600} label="PRO MAX TIER" unit="$" color="#f97316" size={320} />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["$500", "PRO", "MAX"]} accentColor="#f97316" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* 0F: "...and an always-on background intelligence... This is Project o." (720 - 975 / 24.0s - 32.5s) */}
        <Series.Sequence durationInFrames={255}>
          <ProjectOAgentVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["PROJECT", "'o'", "REVEALED"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 1: PROJECT 'o' & ALWAYS-ON AGENT (975 - 2730 frames / 32.5s - 91.0s) */}
        {/* ========================================================================= */}

        {/* 1A: "For four years, artificial intelligence has operated on a basic request-response cycle..." (975 - 1315 / 32.5s - 43.8s) */}
        <Series.Sequence durationInFrames={340}>
          <PromptBoxDeathHook />
        </Series.Sequence>

        {/* 1B: "Internal configuration files codenamed Astra AON... multi-agent engine" (1315 - 1825 / 43.8s - 60.8s) */}
        <Series.Sequence durationInFrames={510}>
          <ProjectOAgentVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ASTRA", "AON", "ENGINE"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* 1C: "One subagent scours live web, another executes terminal commands, third audits code" (1825 - 2211 / 60.8s - 73.7s) */}
        <Series.Sequence durationInFrames={386}>
          <ProjectOAgentVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["3", "AUTONOMOUS", "SUBAGENTS"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* 1D: "Supporting 63 languages with persistent state memory... 24 hours a day" (2211 - 2730 / 73.7s - 91.0s) */}
        <Series.Sequence durationInFrames={519}>
          <ProjectOAgentVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["24/7", "AUTONOMOUS", "WORKFORCE"]} accentColor="#22c55e" />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 2: THE SHOCKING $500/MONTH PRO MAX TIER (2730 - 4567 frames / 91.0s - 152.2s) */}
        {/* ========================================================================= */}

        {/* 2A: "On September 24, independent reverse engineer Tibor Blaho and TestingCatalog..." (2730 - 3430 / 91.0s - 114.3s) */}
        <Series.Sequence durationInFrames={700}>
          <EvidenceDossierView
            mediaSrc="evidence/devday2026/tibor_promax_leak_desktop.png"
            glowColor="#f97316"
            badgeLabel="DISCOVERED BY TIBOR BLAHO & TESTINGCATALOG"
            badgeStatus="UNRELEASED MATRIX"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["TIBOR", "BLAHO", "LEAK"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>

        {/* 2B: "Public commits merged into openai/codex... Fastest Work and Codex" (3430 - 3831 / 114.3s - 127.7s) */}
        <Series.Sequence durationInFrames={401}>
          <EvidenceDossierView
            mediaSrc="evidence/devday2026/openai_codex_promax_commit.png"
            glowColor="#22c55e"
            badgeLabel="OPENAI / CODEX PUBLIC REPOSITORY"
            badgeStatus="PROMAX MERGED"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["FASTEST", "WORK", "CODEX"]} accentColor="#22c55e" />
          </div>
        </Series.Sequence>

        {/* 2C: "Why $500? Because GPT-6 Astra was overwhelming server infrastructure, pausing $200 Pro" (3831 - 4238 / 127.7s - 141.3s) */}
        <Series.Sequence durationInFrames={407}>
          <ProMaxPricingMatrix />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SERVER", "CAPACITY", "PAUSED"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* 2D: "Pro Max is a dedicated zero-throttle enterprise compute pipe for agent swarms" (4238 - 4567 / 141.3s - 152.2s) */}
        <Series.Sequence durationInFrames={329}>
          <ProMaxPricingMatrix />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ZERO", "THROTTLE", "COMPUTE"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 3: HARDWARE ACCELERATION & SOL ULTRAFAST (4567 - 5770 frames / 152.2s - 192.3s) */}
        {/* ========================================================================= */}

        {/* 3A: "OpenAI needed to solve latency bottleneck... 20 seconds to think" (4567 - 4934 / 152.2s - 164.5s) */}
        <Series.Sequence durationInFrames={367}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <SpeedometerGauge value={20} maxValue={25} label="AGENT LATENCY BOTTLENECK" unit="SEC" color="#ef4444" size={320} />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["LATENCY", "BOTTLENECK", "CRISIS"]} accentColor="#ef4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* 3B: "Cerebras acceleration & Sol Ultrafast wafer-scale silicon... 14x faster" (4934 - 5435 / 164.5s - 181.2s) */}
        <Series.Sequence durationInFrames={501}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <div style={{ transform: "scale(1.4)" }}>
              <SiliconDieSchematic color="#f59e0b" label="CEREBRAS WAFER-SCALE SILICON • SOL ULTRAFAST" />
            </div>
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["14X", "HARDWARE", "SPEEDUP"]} accentColor="#f59e0b" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* 3C: "At hundreds of tokens per second, verify 30 code variations in seconds" (5435 - 5770 / 181.2s - 192.4s) */}
        <Series.Sequence durationInFrames={335}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <div style={{ transform: "scale(1.4)" }}>
              <SiliconDieSchematic color="#38bdf8" label="SOL ULTRAFAST • 14X TOKEN GENERATION PIPELINE" />
            </div>
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HUNDREDS", "OF", "TOKENS/SEC"]} accentColor="#38bdf8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 4: THE ROGUE AGENT CONTROVERSY & SECURITY (5770 - 7163 frames / 192.4s - 238.8s) */}
        {/* ========================================================================= */}

        {/* 4A: "yet hours before Sam Altman takes the stage... forensic investigation shadow" (5770 - 6117 / 192.4s - 203.9s) */}
        <Series.Sequence durationInFrames={347}>
          <EvidenceDossierView
            mediaSrc="evidence/devday2026/devday_keynote_official.png"
            glowColor="#ef4444"
            badgeLabel="SAN FRANCISCO KEYNOTE • SECURITY SCRUTINY"
            badgeStatus="ALARM RAISED"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SECURITY", "ALARM", "RAISED"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* 4B: "over 700 autonomous agents chained external requests, breaching repositories" (6117 - 6636 / 203.9s - 221.2s) */}
        <Series.Sequence durationInFrames={519}>
          <EvidenceDossierView
            mediaSrc="evidence/devday2026/sergio_700_agents_devday_desktop.png"
            glowColor="#ef4444"
            badgeLabel="FORGE DAILY FORENSICS • PUBLIC SCOOP"
            badgeStatus="VERIFIED EVIDENCE"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["700", "AGENTS", "BREACH"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* 4C: "giving an agent access without cryptographic sandboxing is existential liability... Zero-Trust" (6636 - 7163 / 221.2s - 238.8s) */}
        <Series.Sequence durationInFrames={527}>
          <SecuritySandboxAlert />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ZERO", "TRUST", "MANDATE"]} accentColor="#22c55e" />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 5: THE AUTONOMOUS PARADIGM SHIFT (7163 - 7964 frames / 238.8s - 265.5s) */}
        {/* ========================================================================= */}

        {/* 5A: "The battle lines have shifted: Anthropic Opus/Sonnet 5.5, Google Gemini Spatial..." (7163 - 7516 / 238.8s - 250.5s) */}
        <Series.Sequence durationInFrames={353}>
          <EvidenceDossierView
            mediaSrc="evidence/devday2026/mehdicade_partner_artifact_desktop.png"
            glowColor="#a855f7"
            badgeLabel="PRODUCTION CLIENT ARTIFACT • MULTI-LAB MODELS"
            badgeStatus="CONFIRMED ENDPOINTS"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["WAR", "OF", "FRONTIERS"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* 5B: "and tomorrow OpenAI responds by turning ChatGPT into an autonomous digital workforce" (7516 - 7840 / 250.5s - 261.3s) */}
        <Series.Sequence durationInFrames={324}>
          <ProjectOAgentVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["DIGITAL", "AUTONOMOUS", "WORKFORCE"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* 5C: "The era of typing prompts is ending. The age of autonomous OS begins tomorrow." (7840 - 7964 / 261.3s - 265.5s) */}
        <Series.Sequence durationInFrames={124}>
          <EvidenceDossierView
            mediaSrc="evidence/devday2026/devday_keynote_official.png"
            glowColor="#38bdf8"
            badgeLabel="OPENAI DEVDAY 2026 • SAN FRANCISCO"
            badgeStatus="AUTONOMOUS ERA BEGINS"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ERA", "OF", "AGENTS"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
