import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { EvidenceDossierView } from "../components/EvidenceDossierView";
import { SplitEvidenceDossier } from "../components/SplitEvidenceDossier";
import { RealEvidenceVideoCanvas } from "../components/RealEvidenceVideoCanvas";
import { KineticPunchText } from "../components/KineticPunchText";
import { SpeedometerGauge } from "../components/SpeedometerGauge";
import { SiliconDieSchematic } from "../components/SiliconDieSchematic";
import { OfficialLogoBadge } from "../components/OfficialLogoBadge";
import { YouTubeSubscribeOverlay } from "../components/YouTubeSubscribeOverlay";

export const GeminiArgonScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Series>
        {/* ========================================================================= */}
        {/* COLD OPEN HOOK: THE SILENT DROP THAT SHATTERED THE ASTRA/OPUS REIGN       */}
        {/* ========================================================================= */}

        {/* Seg 0: OpenAI thought GPT-6 Astra had permanently cemented their frontier dominance (0 - 140 / 140f) */}
        <Series.Sequence durationInFrames={70}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <OfficialLogoBadge logo="openai" size={130} label="OPENAI FRONTIER" sublabel="GPT-6 ASTRA REIGN" glowColor="rgba(16, 185, 129, 0.7)" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["GPT-6", "ASTRA", "DOMINANCE"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={70}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ position: "absolute", width: 850, height: 850, borderRadius: "50%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <SpeedometerGauge value={99} maxValue={100} label="FRONTIER DOMINANCE" unit="%" color="#10b981" size={310} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["CEMENTED", "THE", "LEAD"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 1: anthropic believed Opus 5.5 was untouchable (140 - 246 / 106f) */}
        <Series.Sequence durationInFrames={53}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(217, 119, 87, 0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <OfficialLogoBadge logo="claude" size={135} label="CLAUDE OPUS 5.5" sublabel="ANTHROPIC FLAGSHIP" glowColor="rgba(217, 119, 87, 0.8)" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["OPUS", "5.5", "UNTOUCHABLE"]} accentColor="#d97757" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={53}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ position: "absolute", width: 850, height: 850, borderRadius: "50%", background: "radial-gradient(circle, rgba(217, 119, 87, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <SpeedometerGauge value={98} maxValue={100} label="FLAGSHIP BENCHMARK" unit="%" color="#d97757" size={310} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["GLOBAL", "BENCHMARK", "SHIELD"]} accentColor="#d97757" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 2: Then without a single keynote or warning, Google dropped Gemini 4 Argon (246 - 378 / 132f) */}
        <Series.Sequence durationInFrames={66}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/google_official_keyart.png"
            glowColor="#38bdf8"
            badgeLabel="GOOGLE DEEPMIND • OFFICIAL"
            badgeStatus="BREAKING LAUNCH"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ZERO", "KEYNOTE", "WARNING"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={66}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ position: "absolute", width: 950, height: 950, borderRadius: "50%", background: "radial-gradient(circle, rgba(0, 240, 255, 0.18) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <OfficialLogoBadge logo="gemini" size={150} label="GEMINI 4 ARGON" sublabel="NEXT-GEN FRONTIER MODEL" glowColor="#00f0ff" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["GEMINI 4", "ARGON", "DROPS"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 3: and it doesn't just match the competition (378 - 428 / 50f) */}
        <Series.Sequence durationInFrames={50}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#00f0ff" label="ARCHITECTURAL LEAP" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["DOESN'T", "JUST", "MATCH"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 4: It fundamentally shatters the benchmark frontier writing up to 1 million tokens (428 - 562 / 134f) */}
        <Series.Sequence durationInFrames={67}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <SpeedometerGauge value={1000000} maxValue={1000000} label="OUTPUT CONTEXT" unit="TOKENS" color="#00f0ff" size={320} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["1,000,000", "OUTPUT", "TOKENS"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={67}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/04_deepmind_1m_token.png"
            glowColor="#00f0ff"
            badgeLabel="GOOGLE DEEPMIND • OFFICIAL SPEC"
            badgeStatus="1M TOKEN OUTPUT"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CONTINUOUS", "REASONING", "DEPTH"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Seg 5: response (562 - 605 / 43f) */}
        <Series.Sequence durationInFrames={43}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <KineticPunchText words={["IN", "ONE", "GO"]} accentColor="#00f0ff" fontSize={72} />
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 1: THE AMBUSH & INTERNAL PRODUCTION SCALE (Frames 605 - 1752)         */}
        {/* ========================================================================= */}

        {/* Seg 6: Look closely at how this dropped (605 - 661 / 56f) */}
        <Series.Sequence durationInFrames={56}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/00_google_blog_hero.png"
            glowColor="#38bdf8"
            badgeLabel="OFFICIAL RESEARCH BRIEFING"
            badgeStatus="DIRECT DROP"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["LOOK", "CLOSELY", "HERE"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Seg 7: Google didn't host an elaborate Silicon Valley stage show (661 - 749 / 88f) */}
        <Series.Sequence durationInFrames={44}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#6366f1" label="STEALTH DEPLOYMENT" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["NO", "STAGE", "THEATRICS"]} accentColor="#ef4444" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={44}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={0} maxValue={10} label="KEYNOTE SPEECHES" unit="EVENTS" color="#ef4444" size={300} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ZERO", "MARKETING", "HYPE"]} accentColor="#ef4444" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 8: Instead Sundar Pichai published a direct briefing (749 - 898 / 149f) */}
        <Series.Sequence durationInFrames={75}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/argon/screenshots/01_sundarpichai_launch.png"
            rightMediaSrc="evidence/argon/sundar_key_art.png"
            glowColor="#38bdf8"
            badgeLabel="SUNDAR PICHAI • CEO GOOGLE"
            badgeStatus="DIRECT LAUNCH DOSSIER"
            leftTitle="OFFICIAL POST"
            rightTitle="19 BENCHMARK SCORECARD"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SUNDAR", "PICHAI", "BRIEFING"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={74}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/sundar_key_art.png"
            glowColor="#38bdf8"
            badgeLabel="ARGON PRODUCTION ARCHITECTURE"
            badgeStatus="FULL SCORECARD"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ALREADY", "RUNNING", "INTERNALLY"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Seg 9: already running inside Google's own infrastructure (898 - 980 / 82f) */}
        <Series.Sequence durationInFrames={82}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/01_sundarpichai_launch.png"
            glowColor="#38bdf8"
            badgeLabel="RUNNING AT HYPERSCALE"
            badgeStatus="PRISTINE TWEET"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["RUNNING", "INSIDE", "GOOGLE"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Seg 10: For weeks thousands of Google software engineers battle-tested this model (980 - 1119 / 139f) */}
        <Series.Sequence durationInFrames={70}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/06_logank_swe_scale.png"
            glowColor="#38bdf8"
            badgeLabel="LOGAN KILPATRICK • GOOGLE AI"
            badgeStatus="THOUSANDS OF SWES"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["THOUSANDS", "OF", "ENGINEERS"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={69}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon/gemini_argon_coding_demo.mp4"
            aspectRatio="16:9"
          />
        </Series.Sequence>

        {/* Seg 11: code bases before the public even knew it existed (1119 - 1231 / 112f) */}
        <Series.Sequence durationInFrames={56}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon/gemini_argon_coding_demo.mp4"
            aspectRatio="16:9"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={56}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={10000} maxValue={10000} label="ENGINEERS USING IT" unit="SWES" color="#38bdf8" size={310} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["BATTLE", "TESTED", "DAILY"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 12: And the internal numbers are staggering (1231 - 1298 / 67f) */}
        <Series.Sequence durationInFrames={67}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#38bdf8" label="DATA CENTER FLEET EFFICIENCY" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["STAGGERING", "INTERNAL", "METRICS"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 13: In Google's own data centers, autonomous Argon agents resolved memory leaks (1298 - 1479 / 181f) */}
        <Series.Sequence durationInFrames={60}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/10_yahoofinance_memory_300tib.png"
            glowColor="#38bdf8"
            badgeLabel="DATA CENTER INFRASTRUCTURE"
            badgeStatus="AUTONOMOUS AGENTS"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["AUTONOMOUS", "MEMORY", "FIXES"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={61}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#00f0ff" label="AUTONOMOUS RECLAMATION PIPELINE" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["RESOLVED", "MEMORY", "LEAKS"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={300} maxValue={300} label="MEMORY RECOVERED" unit="TERABYTES" color="#00f0ff" size={310} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["300+", "TERABYTES", "RECLAIMED"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 14: that recovered over 300 terabytes of capacity (1479 - 1567 / 88f) */}
        <Series.Sequence durationInFrames={88}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/10_yahoofinance_memory_300tib.png"
            glowColor="#00f0ff"
            badgeLabel="PRODUCTION FLEET RECLAMATION"
            badgeStatus="300 TiB RECOVERED"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["300 TiB", "CAPACITY", "SAVED"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Seg 15: This isn't just an experimental chatbot, it is a foundation engine (1567 - 1703 / 136f) */}
        <Series.Sequence durationInFrames={68}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/01_sundarpichai_launch.png"
            glowColor="#38bdf8"
            badgeLabel="FOUNDATION ENGINE DEPLOYMENT"
            badgeStatus="NOT A TOY CHATBOT"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["NOT", "A CHATBOT", "ENGINE"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={68}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={100} maxValue={100} label="ENTERPRISE SCALE" unit="%" color="#10b981" size={310} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["FOUNDATION", "ENGINE", "ACTIVE"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 16: at hyperscale (1703 - 1752 / 49f) */}
        <Series.Sequence durationInFrames={49}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="gemini" size={140} label="HYPERSCALE ARCHITECTURE" sublabel="GOOGLE DATA FLEET" glowColor="#38bdf8" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["TRUE", "HYPERSCALE"]} accentColor="#38bdf8" fontSize={72} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 2: ARCHITECTURE & THE 1 MILLION TOKEN OUTPUT BREAKTHROUGH (1752-2475) */}
        {/* ========================================================================= */}

        {/* Seg 17: Here's where the architectural breakthrough happens (1752 - 1838 / 86f) */}
        <Series.Sequence durationInFrames={86}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#00f0ff" label="NEURAL REASONING ARCHITECTURE" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ARCHITECTURAL", "BREAKTHROUGH", "UNVEILED"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 18: While previous models capped their output at 64000 or 128000 tokens (1838 - 2042 / 204f) */}
        <Series.Sequence durationInFrames={68}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/04_deepmind_1m_token.png"
            glowColor="#38bdf8"
            badgeLabel="OUTPUT TOKEN LIMIT BREAKTHROUGH"
            badgeStatus="1M TOKEN OUTPUT"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["OLD LIMITS", "SHATTERED"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={68}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#ef4444" label="PREVIOUS 64K / 128K BOTTLENECK" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["64K / 128K", "LIMITS", "CAPPED"]} accentColor="#ef4444" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={68}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={1000000} maxValue={1000000} label="ARGON OUTPUT LIMIT" unit="TOKENS" color="#00f0ff" size={320} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["1 MILLION", "OUTPUT", "CAPACITY"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 19: continuous reasoning up to 1 million output tokens in a single prompt (2042 - 2150 / 108f) */}
        <Series.Sequence durationInFrames={54}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/04_deepmind_1m_token.png"
            glowColor="#00f0ff"
            badgeLabel="DEEPMIND OFFICIAL SPECIFICATION"
            badgeStatus="CONTINUOUS REASONING"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CONTINUOUS", "REASONING", "STREAM"]} accentColor="#00f0ff" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={54}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon/gemini_argon_coding_demo.mp4"
            aspectRatio="16:9"
          />
        </Series.Sequence>

        {/* Seg 20: Demis Hassabis confirmed that this enables multi-hour uninterrupted agentic work (2150 - 2294 / 144f) */}
        <Series.Sequence durationInFrames={72}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/03_demishassabis_frontier.png"
            glowColor="#38bdf8"
            badgeLabel="DEMIS HASSABIS • CEO DEEPMIND"
            badgeStatus="OFFICIAL STATEMENT"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["DEMIS", "HASSABIS", "STATEMENT"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={72}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#38bdf8" label="MULTI-HOUR CONTINUOUS WORKFLOW" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MULTI-HOUR", "AGENTIC", "WORKFLOWS"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 21: where the model can refactor entire legacy repositories in a single run (2294 - 2475 / 181f) */}
        <Series.Sequence durationInFrames={60}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/11_dummerspast_coding_impressions.png"
            glowColor="#38bdf8"
            badgeLabel="DEVELOPER BENCHMARK IMPRESSIONS"
            badgeStatus="REFACTOR TEST"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ENTIRE", "REPOS", "REFACTORED"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={61}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon/gemini_argon_coding_demo.mp4"
            aspectRatio="16:9"
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={100} maxValue={100} label="CODE REFACTOR" unit="%" color="#10b981" size={310} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SINGLE", "RUN", "COMPLETION"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 3: BENCHMARK SLAUGHTER & DEEPSWE CODING SUPREMACY (2475 - 3254)       */}
        {/* ========================================================================= */}

        {/* Seg 22: When you look at the independent benchmarks published today, the evidence is (2475 - 2603 / 128f) */}
        <Series.Sequence durationInFrames={64}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/07_therundown_13of19_benchmarks.png"
            glowColor="#38bdf8"
            badgeLabel="THE RUNDOWN AI • INDEPENDENT REPORT"
            badgeStatus="13 OF 19 FIRST PLACES"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["INDEPENDENT", "BENCHMARKS", "IN"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={64}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={13} maxValue={19} label="FIRST PLACE FINISHES" unit="/ 19 TESTS" color="#38bdf8" size={320} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["13 OF 19", "GLOBAL", "FIRSTS"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 23: undeniable (2603 - 2636 / 33f) */}
        <Series.Sequence durationInFrames={33}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <KineticPunchText words={["UNDENIABLE", "EVIDENCE"]} accentColor="#38bdf8" fontSize={72} />
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 24: Google tested Argon across 19 frontier evaluations and Argon took first place (2636 - 2797 / 161f) */}
        <Series.Sequence durationInFrames={80}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/argon/screenshots/01_sundarpichai_launch.png"
            rightMediaSrc="evidence/argon/sundar_key_art.png"
            glowColor="#38bdf8"
            badgeLabel="SUNDAR PICHAI • VERIFIED SCORECARD"
            badgeStatus="19 FRONTIER EVALS"
            leftTitle="OFFICIAL POST"
            rightTitle="OFFICIAL SCORECARD"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["19", "FRONTIER", "EVALUATIONS"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={81}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/07_therundown_13of19_benchmarks.png"
            glowColor="#38bdf8"
            badgeLabel="THE RUNDOWN AI BREAKDOWN"
            badgeStatus="13 CATEGORIES WON"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["13", "CATEGORIES", "DOMINATED"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Seg 25: On DeepSWE the gold standard for real-world software engineering, Argon scored 77.9% (2797 - 2966 / 169f) */}
        <Series.Sequence durationInFrames={85}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/argon/screenshots/01_sundarpichai_launch.png"
            rightMediaSrc="evidence/argon/sundar_key_art.png"
            glowColor="#38bdf8"
            badgeLabel="DEEPSWE BENCHMARK • 77.9%"
            badgeStatus="WORLD RECORD"
            leftTitle="SUNDAR PICHAI"
            rightTitle="DEEPSWE 77.9% ROW"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["DEEPSWE", "77.9%", "RECORD"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={84}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={77.9} maxValue={100} label="DEEPSWE SCORE" unit="%" color="#38bdf8" size={320} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["77.9%", "SOFTWARE", "ENGINEERING"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 26: outperforming Claude Opus 5.5 at 74.2% and GPT-6 Astra at 72.8% (2966 - 3185 / 219f) */}
        <Series.Sequence durationInFrames={73}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/argon/screenshots/01_sundarpichai_launch.png"
            rightMediaSrc="evidence/argon/sundar_key_art.png"
            glowColor="#38bdf8"
            badgeLabel="DEEPSWE COMPARISON TABLE"
            badgeStatus="ARGON 77.9% vs OPUS 74.2% vs ASTRA 72.8%"
            leftTitle="SUNDAR VERIFIED"
            rightTitle="DEEPSWE COMPARISON"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["BEATS", "EVERY", "MODEL"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={73}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "center" }}>
              <SpeedometerGauge value={74.2} maxValue={100} label="OPUS 5.5" unit="%" color="#d97757" size={240} width={540} height={740} />
              <SpeedometerGauge value={77.9} maxValue={100} label="ARGON (NEW #1)" unit="%" color="#00f0ff" size={260} width={560} height={740} />
              <SpeedometerGauge value={72.8} maxValue={100} label="GPT-6 ASTRA" unit="%" color="#10b981" size={240} width={540} height={740} />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ARGON", "LEAPS", "OPUS & ASTRA"]} accentColor="#00f0ff" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={73}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#38bdf8" label="DEEPSWE BENCHMARK TOPOLOGY" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SOFTWARE", "BENCHMARK", "CROWN"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 4: THE HALLUCINATION PARADOX & 15% ACCURACY RECORD (3185 - 3895)       */}
        {/* ========================================================================= */}

        {/* Seg 27: But here is the most astonishing metric of all (3185 - 3254 / 69f) */}
        <Series.Sequence durationInFrames={69}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#10b981" label="HALLUCINATION REDUCTION CORE" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MOST", "ASTONISHING", "METRIC"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 28: On the artificial analysis hallucination index, Gemini 4 Argon registered (3254 - 3401 / 147f) */}
        <Series.Sequence durationInFrames={74}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/argon/screenshots/08_aipulse_15pct_hallucination.png"
            rightMediaSrc="evidence/argon/aipulse_hallucination_chart.jpg"
            glowColor="#10b981"
            badgeLabel="ARTIFICIAL ANALYSIS HALLUCINATION INDEX"
            badgeStatus="15% RECORD LOW"
            leftTitle="AI PULSE POST"
            rightTitle="HALLUCINATION CHART"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ARTIFICIAL", "ANALYSIS", "INDEX"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={73}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/aipulse_hallucination_chart.jpg"
            glowColor="#10b981"
            badgeLabel="HALLUCINATION INDEX GRAPH"
            badgeStatus="ARGON 15% LOWEST EVER"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["LOWEST", "HALLUCINATION", "RATE"]} accentColor="#10b981" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Seg 29: rate of just 15% (3401 - 3449 / 48f) */}
        <Series.Sequence durationInFrames={48}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={15} maxValue={100} label="HALLUCINATION RATE" unit="%" color="#10b981" size={320} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["JUST", "15%", "HALLUCINATIONS"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 30: To put that into perspective Grok 4.7 sits at 29%, GPT-6 Astra is at 41% (3449 - 3666 / 217f) */}
        <Series.Sequence durationInFrames={72}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/08_aipulse_15pct_hallucination.png"
            glowColor="#10b981"
            badgeLabel="INDUSTRY HALLUCINATION COMPARISON"
            badgeStatus="ARGON 15% vs GROK 29% vs ASTRA 41%"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["GROK 29%", "ASTRA 41%"]} accentColor="#ef4444" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={72}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 24, alignItems: "center", justifyContent: "center" }}>
              <SpeedometerGauge value={29} maxValue={100} label="GROK 4.7" unit="%" color="#f59e0b" size={240} width={540} height={740} />
              <SpeedometerGauge value={15} maxValue={100} label="ARGON (LOWEST)" unit="%" color="#10b981" size={260} width={560} height={740} />
              <SpeedometerGauge value={41} maxValue={100} label="GPT-6 ASTRA" unit="%" color="#ef4444" size={240} width={540} height={740} />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ARGON CRUSHES", "COMPETITION"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={73}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={59} maxValue={100} label="OPUS 5.5 FAILURE" unit="%" color="#ef4444" size={310} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["OPUS 5.5", "SPIKES 59%"]} accentColor="#ef4444" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 31: 5.5 spikes to 59% (3666 - 3741 / 75f) */}
        <Series.Sequence durationInFrames={75}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 36, alignItems: "center", justifyContent: "center" }}>
              <SpeedometerGauge value={59} maxValue={100} label="OPUS 5.5 ERROR" unit="%" color="#ef4444" size={280} width={800} height={740} />
              <SpeedometerGauge value={15} maxValue={100} label="ARGON ACCURACY" unit="%" color="#10b981" size={280} width={800} height={740} />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["59% SPIKE", "FATAL FLAW"]} accentColor="#ef4444" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 32: Argon doesn't hallucinate answers, it verifies them before executing (3741 - 3895 / 154f) */}
        <Series.Sequence durationInFrames={77}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#10b981" label="REAL-TIME VERIFICATION CYCLE" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["VERIFIES", "BEFORE", "EXECUTING"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={77}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon/gemini_argon_coding_demo.mp4"
            aspectRatio="16:9"
          />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 5: THE DEVELOPER ECONOMICS & CYBER FAIRWIND PROGRAM (3895 - 4568)     */}
        {/* ========================================================================= */}

        {/* Seg 33: Google AI lead Logan Kilpatrick revealed the final blow: pricing (3895 - 4026 / 131f) */}
        <Series.Sequence durationInFrames={65}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/argon/screenshots/05_logank_pricing_breakdown.png"
            rightMediaSrc="evidence/argon/logank_pricing.png"
            glowColor="#38bdf8"
            badgeLabel="LOGAN KILPATRICK • PRICING DIRECTIVE"
            badgeStatus="$2 IN / $10 OUT • 95% CACHING"
            leftTitle="LOGAN TWEET"
            rightTitle="AUTOMATIONBENCH & PRICING"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["LOGAN", "KILPATRICK", "PRICING"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={66}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/logank_pricing.png"
            glowColor="#38bdf8"
            badgeLabel="AUTOMATIONBENCH & PRICING SCORECARD"
            badgeStatus="58.2% FIRST PLACE"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["THE", "FINAL", "BLOW"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Seg 34: Argon launches at just $2 per million input tokens and $10 per million output (4026 - 4187 / 161f) */}
        <Series.Sequence durationInFrames={80}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/screenshots/05_logank_pricing_breakdown.png"
            glowColor="#38bdf8"
            badgeLabel="INTRODUCTORY PRICING"
            badgeStatus="$2 IN / $10 OUT"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["$2", "PER", "MILLION"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={81}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <div style={{ display: "flex", gap: 36, alignItems: "center", justifyContent: "center" }}>
              <SpeedometerGauge value={2} maxValue={10} label="INPUT TOKENS" unit="$/M" color="#38bdf8" size={340} width={800} height={740} />
              <SpeedometerGauge value={10} maxValue={30} label="OUTPUT TOKENS" unit="$/M" color="#00f0ff" size={340} width={800} height={740} />
            </div>
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["$2 / $10", "PRICING"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 35: by a massive 95% discount on prompt caching (4187 - 4265 / 78f) */}
        <Series.Sequence durationInFrames={78}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={95} maxValue={100} label="PROMPT CACHING" unit="% OFF" color="#10b981" size={320} />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["95%", "CACHING", "DISCOUNT"]} accentColor="#10b981" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 36: Furthermore through the Fairwind program Google is deploying Argon (4265 - 4408 / 143f) */}
        <Series.Sequence durationInFrames={72}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/argon/screenshots/02_sundarpichai_fairwind.png"
            rightMediaSrc="evidence/argon/logank_cyber_defense.jpg"
            glowColor="#38bdf8"
            badgeLabel="FAIRWIND PROGRAM • US GOV & CYBER"
            badgeStatus="RESPONSIBLE ROLLOUT"
            leftTitle="SUNDAR FAIRWIND"
            rightTitle="CWE-BENCH 68%"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["FAIRWIND", "DEFENSE", "PROGRAM"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={71}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/logank_cyber_defense.jpg"
            glowColor="#38bdf8"
            badgeLabel="CWE-BENCH v1 CYBER DEFENSE"
            badgeStatus="68% TOP SCORE"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CYBER", "DEFENSE", "SHIELD"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>

        {/* Seg 37: government defence teams for autonomous zero-day discovery (4408 - 4568 / 160f) */}
        <Series.Sequence durationInFrames={80}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#38bdf8" label="AUTONOMOUS ZERO-DAY PATCHING" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ZERO-DAY", "PATCH", "SYNTHESIS"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={80}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon/gemini_argon_coding_demo.mp4"
            aspectRatio="16:9"
          />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 6: CONCLUSION & THE WAR REIGNITED (Frames 4568 - 4957)                 */}
        {/* ========================================================================= */}

        {/* Seg 38: The AI frontier has shifted once again (4568 - 4648 / 80f) */}
        <Series.Sequence durationInFrames={80}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic color="#6366f1" label="FRONTIER PARADIGM SHIFT" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["FRONTIER", "SHIFTED", "AGAIN"]} accentColor="#6366f1" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 39: While the industry assumed Google had fallen behind (4648 - 4792 / 144f) */}
        <Series.Sequence durationInFrames={72}>
          <SplitEvidenceDossier
            leftMediaSrc="evidence/argon/screenshots/01_sundarpichai_launch.png"
            rightMediaSrc="evidence/argon/google_official_keyart.png"
            glowColor="#38bdf8"
            badgeLabel="GOOGLE GEMINI 4 ARGON"
            badgeStatus="THE EMPIRE STRIKES"
            leftTitle="LAUNCH BRIEFING"
            rightTitle="GEMINI 4 KEY ART"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["GOOGLE", "STRIKES", "BACK"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={72}>
          <RealEvidenceVideoCanvas
            videoSrc="evidence/argon/gemini_argon_coding_demo.mp4"
            aspectRatio="16:9"
          />
        </Series.Sequence>

        {/* Seg 40: war is only just beginning (4792 - 4832 / 40f) */}
        <Series.Sequence durationInFrames={40}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="gemini" size={140} label="GEMINI 4 ARGON" sublabel="THE WAR IS ON" glowColor="#38bdf8" />
            <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["WAR", "JUST", "BEGINNING"]} accentColor="#38bdf8" fontSize={66} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 41: The race for supreme intelligence is completely wide open (4832 - 4957 / 125f) */}
        <Series.Sequence durationInFrames={65}>
          <EvidenceDossierView
            mediaSrc="evidence/argon/google_official_keyart.png"
            glowColor="#38bdf8"
            badgeLabel="GOOGLE DEEPMIND • GEMINI 4 ARGON"
            badgeStatus="SUPREME INTELLIGENCE"
          />
          <div style={{ position: "absolute", bottom: 35, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["RACE", "IS", "WIDE OPEN"]} accentColor="#38bdf8" fontSize={66} />
          </div>
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeSubscribeOverlay startFrame={0} durationInFrames={60} position="bottom-center" />
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
