import React from "react";
import { AbsoluteFill, Series, interpolate, useCurrentFrame } from "remotion";
import { Atmosphere } from "../components/Atmosphere";
import { AnthropicRsiShockwave } from "../components/AnthropicRsiShockwave";
import { FastForwardCalendarWarp } from "../components/FastForwardCalendarWarp";
import { AutonomousPipelineVisualizer } from "../components/AutonomousPipelineVisualizer";
import { SpeedometerGauge } from "../components/SpeedometerGauge";
import { RsiFeedbackLoop } from "../components/RsiFeedbackLoop";
import { EpochLadder } from "../components/EpochLadder";
import { ComparisonArena } from "../components/ComparisonArena";
import { NeuralFlowCanvas } from "../components/NeuralFlowCanvas";
import { ModelAutophagyCollapse } from "../components/ModelAutophagyCollapse";
import { SiliconDieSchematic } from "../components/SiliconDieSchematic";
import { OfficialLogoBadge } from "../components/OfficialLogoBadge";
import { KineticPunchText } from "../components/KineticPunchText";

export const RsiMasterScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#030712" }}>
      <Atmosphere />

      <Series>
        {/* ============================================================== */}
        {/* ACT 1: THE SEPTEMBER LEAK & SHOCKWAVE (00:00 - 00:44.7)       */}
        {/* Total frames: 310 + 350 + 255 + 425 = 1340 frames              */}
        {/* ============================================================== */}

        {/* Scene 1A: Anthropic Leak Shockwave (0 to 310 frames = 10.33s) */}
        {/* Official Anthropic logo, confidential telemetry, "SHOCKWAVE" */}
        <Series.Sequence durationInFrames={310}>
          <AnthropicRsiShockwave />
        </Series.Sequence>

        {/* Scene 1B: 6-Month Fast-Forward Calendar Flip (310 to 660 = 350 frames = 11.67s) */}
        {/* Dual holographic calendar cards (Feb 2026 vs Aug 2026) with rapid time-lapse flip */}
        <Series.Sequence durationInFrames={350}>
          <FastForwardCalendarWarp />
        </Series.Sequence>

        {/* Scene 1C: Speedometer Dials: 26% Lead & 90% Collaboration (660 to 915 = 255 frames = 8.5s) */}
        <Series.Sequence durationInFrames={255}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", top: 80, display: "flex", gap: 30, alignItems: "center" }}>
              <OfficialLogoBadge
                logo="claude"
                label="CLAUDE OPUS 5.5"
                sublabel="FRONTIER ARCHITECTURE"
                size={105}
                glowColor="rgba(217, 119, 87, 0.8)"
              />
            </div>

            <div style={{ display: "flex", gap: 90, alignItems: "center", marginTop: 40 }}>
              <SpeedometerGauge
                value={26}
                maxValue={100}
                label="CLAUDE OPUS 5.5 AUTONOMOUS LEAD"
                unit="%"
                color="#00F0FF"
                size={340}
              />
              <SpeedometerGauge
                value={90}
                maxValue={100}
                label="AI COLLABORATION RATE"
                unit="%"
                color="#818CF8"
                size={340}
                delay={10}
              />
            </div>

            <div style={{ position: "absolute", bottom: 70 }}>
              <KineticPunchText words={["HUMAN", "BOTTLENECK"]} accentColor="#F87171" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Scene 3: The Recursive Self-Improvement Loop (915 to 1340 = 425 frames = 14.17s) */}
        <Series.Sequence durationInFrames={425}>
          <AbsoluteFill>
            <RsiFeedbackLoop title="RECURSIVE SELF-IMPROVEMENT" cycleMultiplier="26.0x" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", textAlign: "center" }}>
              <KineticPunchText words={["RECURSIVE", "LOOP"]} accentColor="#00F0FF" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ============================================================== */}
        {/* ACT 2: THE EPOCH AUTOMATION LADDER (00:44.7 - 01:31.4)         */}
        {/* Total frames: 544 + 859 = 1403 frames                          */}
        {/* ============================================================== */}

        {/* Scene 4: Epoch AI 6-Level Scale (1340 to 1884 = 544 frames = 18.13s) */}
        <Series.Sequence durationInFrames={544}>
          <EpochLadder activeLevel={4} />
        </Series.Sequence>

        {/* Scene 5: Level 4 Autonomous R&D Pipeline (1884 to 2743 = 859 frames = 28.63s) */}
        {/* Hypothesis -> PyTorch Code -> GPU Clusters -> Loss Auto-Debugging, zero URLs */}
        <Series.Sequence durationInFrames={859}>
          <AutonomousPipelineVisualizer />
        </Series.Sequence>

        {/* ============================================================== */}
        {/* ACT 3: THE 100,000 AGENT FACTORY (01:31.4 - 02:19.5)           */}
        {/* Total frames: 850 + 591 = 1441 frames                          */}
        {/* ============================================================== */}

        {/* Scene 6: Split-Screen Comparison Arena (2743 to 3593 = 850 frames = 28.33s) */}
        <Series.Sequence durationInFrames={850}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", top: 18, zIndex: 40 }}>
              <OfficialLogoBadge
                logo="openai"
                label="OPENAI GPT-6 ASTRA"
                sublabel="AUTOMATED RESEARCH LAB"
                size={75}
                glowColor="rgba(16, 185, 129, 0.7)"
              />
            </div>
            <div style={{ width: "100%" }}>
              <ComparisonArena
                leftTitle="TRADITIONAL AI LAB"
                leftSubtitle="500 PhDs from Stanford & MIT"
                leftStat="~24 Sweeps / Year"
                rightTitle="RSI AGENT FACTORY"
                rightSubtitle="50 Directors + 100,000 Reasoning Agents"
                rightStat="Millions / 24 Hours"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Scene 7: Neural Network Speed & AlphaGo Self-Play (3593 to 4184 = 591 frames = 19.7s) */}
        <Series.Sequence durationInFrames={591}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <NeuralFlowCanvas />
            <div style={{ position: "absolute", top: 80, display: "flex", gap: 40, alignItems: "center" }}>
              <OfficialLogoBadge
                logo="google"
                label="GEMINI 4 ULTRA"
                sublabel="DEEPMIND SELF-PLAY"
                size={105}
                glowColor="rgba(66, 133, 244, 0.7)"
              />
              <OfficialLogoBadge
                logo="openai"
                label="GPT-6 ASTRA"
                sublabel="REASONING TOURNAMENT"
                size={105}
                glowColor="rgba(16, 185, 129, 0.7)"
                delay={10}
              />
            </div>
            <div style={{ position: "absolute", bottom: 80 }}>
              <KineticPunchText words={["MACHINE", "SPEED"]} accentColor="#00F0FF" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ============================================================== */}
        {/* ACT 4: THE FATAL FAILURE MODES (02:19.5 - 02:53.6)             */}
        {/* Total frames: 619 + 405 = 1024 frames                          */}
        {/* ============================================================== */}

        {/* Scene 8: Model Autophagy Disorder (MAD) Collapse (4184 to 4803 = 619 frames = 20.63s) */}
        <Series.Sequence durationInFrames={619}>
          <AbsoluteFill>
            <ModelAutophagyCollapse />
            <div style={{ position: "absolute", bottom: 40, width: "100%", textAlign: "center" }}>
              <KineticPunchText words={["MODE", "COLLAPSE"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Scene 9: Deceptive Alignment & Loss Optimization Loop (4803 to 5208 = 405 frames = 13.5s) */}
        <Series.Sequence durationInFrames={405}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <SiliconDieSchematic />
            <div style={{ position: "absolute", top: 70, display: "flex", gap: 30, alignItems: "center" }}>
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.15)",
                  border: "1.5px solid #EF4444",
                  borderRadius: 12,
                  padding: "8px 24px",
                  color: "#F87171",
                  fontFamily: "monospace",
                  fontWeight: 900,
                  fontSize: 18,
                  letterSpacing: "0.1em",
                }}
              >
                CRITICAL THREAT: REWARD HACKING
              </div>
            </div>

            <div style={{ display: "flex", gap: 80, alignItems: "center", marginTop: 40 }}>
              <SpeedometerGauge
                value={99}
                maxValue={100}
                label="APPARENT REWARD (HUMAN VIEW)"
                unit="%"
                color="#10B981"
                size={290}
              />
              <SpeedometerGauge
                value={100}
                maxValue={100}
                label="HIDDEN SHORTCUT VECTOR"
                unit="%"
                color="#EF4444"
                size={290}
                delay={10}
              />
            </div>

            <div style={{ position: "absolute", bottom: 70 }}>
              <KineticPunchText words={["DECEPTIVE", "ALIGNMENT"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ============================================================== */}
        {/* ACT 5: THE 2028 COMPUTE GIGAFACTORY (02:53.6 - 03:31.4)       */}
        {/* Total frames: 605 + 530 = 1135 frames                          */}
        {/* ============================================================== */}

        {/* Scene 10: The Stargate 100GW Energy & Silicon Grid (5208 to 5813 = 605 frames = 20.17s) */}
        <Series.Sequence durationInFrames={605}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <SiliconDieSchematic />
            <div style={{ position: "absolute", top: 70, display: "flex", gap: 24, alignItems: "center" }}>
              <OfficialLogoBadge
                logo="openai"
                label="GPT-6 ASTRA"
                sublabel="STARGATE COMPUTE"
                size={90}
                glowColor="rgba(16, 185, 129, 0.7)"
              />
              <div
                style={{
                  background: "rgba(14, 165, 233, 0.2)",
                  border: "1.5px solid #00F0FF",
                  padding: "10px 30px",
                  borderRadius: 999,
                  color: "#00F0FF",
                  fontFamily: "monospace",
                  fontWeight: 900,
                  fontSize: 20,
                  letterSpacing: "0.12em",
                  boxShadow: "0 0 25px rgba(0, 240, 255, 0.3)",
                }}
              >
                100 GIGAWATT COMPUTE GRID
              </div>
              <OfficialLogoBadge
                logo="meta"
                label="LLAMA 4 405B"
                sublabel="META AI"
                size={90}
                glowColor="rgba(24, 119, 242, 0.7)"
                delay={10}
              />
            </div>

            <div style={{ position: "absolute", bottom: 80 }}>
              <KineticPunchText words={["SILICON", "AND", "POWER"]} accentColor="#00F0FF" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Scene 11: Final Climax: The Singularity Loop Punch (5813 to 6343 = 530 frames = 17.67s) */}
        <Series.Sequence durationInFrames={530}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                gap: 50,
                alignItems: "center",
                marginBottom: 60,
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                padding: "24px 44px",
                borderRadius: 32,
                boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
              }}
            >
              <OfficialLogoBadge
                logo="anthropic"
                label="CLAUDE OPUS 5.5"
                sublabel="ANTHROPIC"
                size={115}
                glowColor="rgba(235, 140, 90, 0.8)"
              />
              <OfficialLogoBadge
                logo="openai"
                label="GPT-6 ASTRA"
                sublabel="OPENAI"
                size={115}
                glowColor="rgba(16, 185, 129, 0.8)"
                delay={8}
              />
              <OfficialLogoBadge
                logo="google"
                label="GEMINI 4 ULTRA"
                sublabel="DEEPMIND"
                size={115}
                glowColor="rgba(66, 133, 244, 0.8)"
                delay={16}
              />
              <OfficialLogoBadge
                logo="meta"
                label="LLAMA 4 405B"
                sublabel="META AI"
                size={115}
                glowColor="rgba(24, 119, 242, 0.8)"
                delay={24}
              />
            </div>

            <KineticPunchText words={["SURVIVE", "THE", "LOOP"]} accentColor="#00F0FF" />
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
