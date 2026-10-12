import React from "react";
import { AbsoluteFill, Series, staticFile } from "remotion";
import { RealEvidenceVideoCanvas } from "../components/RealEvidenceVideoCanvas";
import { RealDesktopTweetView } from "../components/RealDesktopTweetView";
import { SpeedometerGauge } from "../components/SpeedometerGauge";
import { SiliconDieSchematic } from "../components/SiliconDieSchematic";
import { KineticPunchText } from "../components/KineticPunchText";
import { OfficialLogoBadge } from "../components/OfficialLogoBadge";
import { YouTubeSubscribeOverlay } from "../components/YouTubeSubscribeOverlay";

export const Gemini4ArgonLeakScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#020408" }}>
      <Series>
        {/* ========================================================================= */}
        {/* ACT 1: THE SECRET CANARY (P01: 1229 frames / 41.0s)                       */}
        {/* "Right now, inside your developer terminal, Google is secretly running..."*/}
        {/* ========================================================================= */}
        {/* Beat 1A: BeingInvested Secret Canary Leak Screenshot (450 frames / 15.0s) */}
        <Series.Sequence durationInFrames={450}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/gemini4_argon/screenshots/tweet_beinginvested_antigravity.png"
              maxWidth={1600}
              maxHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["SECRET", "CANARY", "INJECTION"]}
                accentWordIndex={1}
                accentColor="#38BDF8"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 1B: Real Video: BeingInvested Antigravity World-Gen (450 frames / 15.0s) */}
        <Series.Sequence durationInFrames={450}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/gemini4_argon/videos/beinginvested_antigravity_argon.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1720}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["ANTIGRAVITY", "CANARY", "ROUTING"]}
                accentWordIndex={0}
                accentColor="#00F0FF"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 1C: Rajath Gowda Rollout Leak (329 frames / 11.0s) */}
        <Series.Sequence durationInFrames={329}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/gemini4_argon/screenshots/tweet_rajath_rollout.png"
              maxWidth={1560}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["REPLACING", "FLASH", "TODAY"]}
                accentWordIndex={1}
                accentColor="#FACC15"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 2: THREE.JS MINECRAFT CLONE (P02: 1347 frames / 44.9s)                */}
        {/* "Take a look at what just surfaced on Twitter. Relox AI prompt..."        */}
        {/* ========================================================================= */}
        {/* Beat 2A: Real Video: Relox AI 60 FPS Minecraft Sandbox in Browser (750 frames / 25.0s) */}
        <Series.Sequence durationInFrames={750}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/gemini4_argon/videos/relox_minecraft_demo.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["MINECRAFT", "THREE.JS", "60 FPS"]}
                accentWordIndex={0}
                accentColor="#22C55E"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 2B: Real Video: Relox AI Sandbox Chunk Loading & Single Pass (597 frames / 19.9s) */}
        <Series.Sequence durationInFrames={597}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/gemini4_argon/videos/relox_minecraft_demo.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["ONE", "SINGLE", "PASS"]}
                accentWordIndex={2}
                accentColor="#F59E0B"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 3: ISOMETRIC VOXEL SHADERS & 3D WIZARD CHESS (P03: 1658 frames / 55.3s)*/}
        {/* "And that was just the beginning. Abhinav posted isometric graphics..."   */}
        {/* ========================================================================= */}
        {/* Beat 3A: Real Video: Abhinav Elden Ring / Diablo Isometric Voxel (650 frames / 21.7s) */}
        <Series.Sequence durationInFrames={650}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/gemini4_argon/videos/synopsis_isometric_graphics.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["CUSTOM", "VOXEL", "SHADERS"]}
                accentWordIndex={1}
                accentColor="#A855F7"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 3B: Abhinav Isometric Tweet Screenshot (450 frames / 15.0s) */}
        <Series.Sequence durationInFrames={450}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/gemini4_argon/screenshots/tweet_synopsis_isometric.png"
              maxWidth={1600}
              maxHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["ZERO", "EXTERNAL", "LIBRARIES"]}
                accentWordIndex={0}
                accentColor="#38BDF8"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 3C: Real Video: Leo 3D Wizard Chess Vercel Deployment (558 frames / 18.6s) */}
        <Series.Sequence durationInFrames={558}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/gemini4_argon/videos/leo_wizard_chess_3d.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["DEPLOYED", "TO", "VERCEL"]}
                accentWordIndex={2}
                accentColor="#00F0FF"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 4: BENCHMARK EARTHQUAKE (P04 & P05: 151 + 2742 = 2893 frames / 96.4s)  */}
        {/* "So why is Google testing this in secret... DeepSWE 77.9% leak..."        */}
        {/* ========================================================================= */}
        {/* Beat 4A: Anton Sgibnev 77.9% DeepSWE Leak Tweet (750 frames / 25.0s) */}
        <Series.Sequence durationInFrames={750}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/gemini4_argon/screenshots/tweet_anton_deepswe_779.png"
              maxWidth={1560}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["77.9%", "DEEPSWE", "RECORD"]}
                accentWordIndex={0}
                accentColor="#22C55E"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 4B: Dynamic Speedometer Dial: Argon 77.9% vs Opus 72% vs Astra 71% (750 frames / 25.0s) */}
        <Series.Sequence durationInFrames={750}>
          <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
            <SpeedometerGauge
              value={77.9}
              maxValue={100}
              label="GEMINI 4 ARGON DEEPSWE"
              unit="%"
              color="#00F0FF"
            />
            <div style={{ position: "absolute", bottom: 50, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["BEATING", "CLAUDE", "OPUS"]}
                accentWordIndex={1}
                accentColor="#F59E0B"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 4C: Tanvi Dasaur Coding Agent Rankings Tweet (700 frames / 23.3s) */}
        <Series.Sequence durationInFrames={700}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/gemini4_argon/screenshots/tweet_tanvi_deepswe_terminal.png"
              maxWidth={1560}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["THE", "ARCHITECTURAL", "SPLIT"]}
                accentWordIndex={1}
                accentColor="#38BDF8"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 4D: Terminal-Bench vs DeepSWE Dial Comparison (693 frames / 23.1s) */}
        <Series.Sequence durationInFrames={693}>
          <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
            <SpeedometerGauge
              value={66.0}
              maxValue={100}
              label="TERMINAL-BENCH: OPUS 5.5 vs ARGON"
              unit="%"
              color="#F59E0B"
            />
            <div style={{ position: "absolute", bottom: 50, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["BASH", "VS", "SYNTHESIS"]}
                accentWordIndex={0}
                accentColor="#EF4444"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 5: THE UK AISI SAFETY AUDIT (P06: 1716 frames / 57.2s)                */}
        {/* "Now here is where the story turns controversial... UK AISI evaluation..."*/}
        {/* ========================================================================= */}
        {/* Beat 5A: Jayant AISI Safety Evaluation Quote Screenshot (850 frames / 28.3s) */}
        <Series.Sequence durationInFrames={850}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/gemini4_argon/screenshots/tweet_jayant_aisi_eval.png"
              maxWidth={1560}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["UK", "AISI", "EVALUATION"]}
                accentWordIndex={1}
                accentColor="#EF4444"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 5B: Official AISI Transcript Screenshot & Fairwind Defender (866 frames / 28.9s) */}
        <Series.Sequence durationInFrames={866}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/gemini4_argon/screenshots/tweet_aisi_transcript.png"
              maxWidth={1560}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["FAIRWIND", "CYBER", "DEFENDER"]}
                accentWordIndex={0}
                accentColor="#38BDF8"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 6: THE CARBON STAGING TRAIN (P07: 1351 frames / 45.0s)                */}
        {/* "What we are witnessing in Antigravity is a canary... Carbon in staging..."*/}
        {/* ========================================================================= */}
        {/* Beat 6A: Anton Sgibnev Carbon Staging Train Tweet (650 frames / 21.7s) */}
        <Series.Sequence durationInFrames={650}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/gemini4_argon/screenshots/tweet_anton_deepswe_779.png"
              maxWidth={1560}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["CARBON", "IN", "STAGING"]}
                accentWordIndex={0}
                accentColor="#00F0FF"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 6B: Real Video: Canary Execution in Antigravity (701 frames / 23.4s) */}
        <Series.Sequence durationInFrames={701}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/gemini4_argon/videos/beinginvested_antigravity_argon.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["MEASURING", "TOKEN", "THROUGHPUT"]}
                accentWordIndex={2}
                accentColor="#22C55E"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 7: TPU SILICON MOAT & ECONOMIC AMBUSH (P08: 1567 frames / 52.2s)      */}
        {/* "Think about the sheer economic disruption... TPU v5p & v6 Trillium..."   */}
        {/* ========================================================================= */}
        {/* Beat 7A: Silicon Die Schematic: TPU v6 Trillium / TPU v5p (800 frames / 26.7s) */}
        <Series.Sequence durationInFrames={800}>
          <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
            <SiliconDieSchematic
              label="GOOGLE CUSTOM TPU SILICON // TPU v6 TRILLIUM & TPU v5p"
              color="#00F0FF"
            />
            <div style={{ position: "absolute", bottom: 50, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["FULL", "SILICON", "CONTROL"]}
                accentWordIndex={1}
                accentColor="#00F0FF"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 7B: Pricing Ambush: The Collapse of $20 Subscription Math (767 frames / 25.6s) */}
        <Series.Sequence durationInFrames={767}>
          <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
              <OfficialLogoBadge
                logo="google"
                label="GOOGLE TPU INFRA"
                glowColor="#00F0FF"
                size={220}
              />
              <div style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF" }}>VS</div>
              <OfficialLogoBadge
                logo="openai"
                label="DEV DAY $500 TIERS"
                glowColor="#EF4444"
                size={220}
              />
            </div>
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["SUBSCRIPTION", "PRICING", "COLLAPSE"]}
                accentWordIndex={0}
                accentColor="#F59E0B"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 8: 3 FINGERPRINTS TO DETECT ARGON IN YOUR IDE (P09: 1603 frames / 53.4s)*/}
        {/* "So how can you tell if your terminal is routed to Argon? 3 tests..."     */}
        {/* ========================================================================= */}
        {/* Beat 8A: Test 1: Real Video Three.js Shader Matrix (550 frames / 18.3s) */}
        <Series.Sequence durationInFrames={550}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/gemini4_argon/videos/synopsis_isometric_graphics.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["TEST 1", "PRISTINE", "SHADERS"]}
                accentWordIndex={2}
                accentColor="#38BDF8"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 8B: Test 2: Speedometer 140+ Tokens/Sec (550 frames / 18.3s) */}
        <Series.Sequence durationInFrames={550}>
          <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
            <SpeedometerGauge
              value={142}
              maxValue={200}
              label="REASONING THROUGHPUT"
              unit="TOKENS/S"
              color="#22C55E"
            />
            <div style={{ position: "absolute", bottom: 50, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["TEST 2", "140+", "TOKENS/SEC"]}
                accentWordIndex={1}
                accentColor="#22C55E"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 8C: Test 3: Real Video Relox AI Single Pass Architecture (503 frames / 16.8s) */}
        <Series.Sequence durationInFrames={503}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/gemini4_argon/videos/relox_minecraft_demo.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["TEST 3", "STAFF", "ARCHITECT"]}
                accentWordIndex={2}
                accentColor="#A855F7"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 9: CONCLUSION & SILENT SUPREMACY (P10: 1059 frames / 35.3s)           */}
        {/* "The silent battle for frontier AI supremacy is no longer on stage..."    */}
        {/* ========================================================================= */}
        {/* Beat 9A: Leo 3D Wizard Chess Final Proof (550 frames / 18.3s) */}
        <Series.Sequence durationInFrames={550}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/gemini4_argon/videos/leo_wizard_chess_3d.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["TABLES", "HAVE", "FLIPPED"]}
                accentWordIndex={0}
                accentColor="#00F0FF"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Beat 9B: Final DeepMind / Google Titan Outro (509 frames / 17.0s) */}
        <Series.Sequence durationInFrames={509}>
          <AbsoluteFill style={{ backgroundColor: "#020408", justifyContent: "center", alignItems: "center" }}>
            <OfficialLogoBadge
              logo="gemini"
              label="GEMINI 4 ARGON"
              glowColor="#00F0FF"
              size={260}
            />
            <div style={{ position: "absolute", bottom: 120, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["ALREADY", "IN", "YOUR TERMINAL"]}
                accentWordIndex={2}
                accentColor="#FACC15"
              />
            </div>
            <YouTubeSubscribeOverlay startFrame={60} />
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
