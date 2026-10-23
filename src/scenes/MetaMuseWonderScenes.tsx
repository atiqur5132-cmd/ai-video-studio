import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { RealEvidenceVideoCanvas } from "../components/RealEvidenceVideoCanvas";
import { RealDesktopTweetView } from "../components/RealDesktopTweetView";
import { KineticPunchText } from "../components/KineticPunchText";
import { OfficialLogoBadge } from "../components/OfficialLogoBadge";
import { YouTubeSubscribeOverlay } from "../components/YouTubeSubscribeOverlay";
import { SiliconDieSchematic } from "../components/SiliconDieSchematic";
import { SpeedometerGauge } from "../components/SpeedometerGauge";

export const MetaMuseWonderScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#020408" }}>
      <Series>
        {/* ========================================================================= */}
        {/* ACT 1: THE COLD-OPEN TEASER & BOMBSHELL REVELATION (0 - 1968 frames / 65.6s)*/}
        {/* ========================================================================= */}

        {/* P01: Part 1 - Alexandr Wang Official Announcement Video (300 frames / 10.0s) */}
        <Series.Sequence durationInFrames={300}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/meta_muse_wonder/videos/alexandr_wang_announcement.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["META", "MUSE", "WONDER"]}
                accentWordIndex={2}
                accentColor="#00F0FF"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P01: Part 2 - Real Tweet: Alexandr Wang Early Testers Quote (296 frames / 9.8s) */}
        <Series.Sequence durationInFrames={296}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/01_alexandr_wang_announcement.png"
              maxWidth={1580}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["NECK", "AND", "NECK"]}
                accentWordIndex={0}
                accentColor="#38BDF8"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P02: Part 1 - Real Testing Video: Work Agents Demo (390 frames / 13.0s) */}
        <Series.Sequence durationInFrames={390}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/meta_muse_wonder/videos/kyle_reidhead_work_agents.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["PROJECT", "WATERMELON", "TEST"]}
                accentWordIndex={1}
                accentColor="#22C55E"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P02: Part 2 - Real Tweet: Kiplam Street Opus Ranking (395 frames / 13.2s) */}
        <Series.Sequence durationInFrames={395}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/05_kiplam_opus_ranking.png"
              maxWidth={1560}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["CHALLENGING", "OPUS", "5.5"]}
                accentWordIndex={1}
                accentColor="#F59E0B"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P03: Part 1 - Real Tweet: LiveSquawk Zuck Rejects Slowdown (300 frames / 10.0s) */}
        <Series.Sequence durationInFrames={300}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/07_livesquawk_zuck_frontier.png"
              maxWidth={1600}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["NO", "SLOWDOWN", "DECLARED"]}
                accentWordIndex={1}
                accentColor="#EF4444"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P03: Part 2 - Real Video: Meta CTO Andrew Bosworth on Frontier Compute (287 frames / 9.6s) */}
        <Series.Sequence durationInFrames={287}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/meta_muse_wonder/videos/boz_meta_cto_compute_speech.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["MASSIVE", "SCALING", "BET"]}
                accentWordIndex={1}
                accentColor="#00F0FF"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 2: ACTIVE MEMORY & ACTIVE FOCUS: CODING DEMO & ARCHITECTURE (1968 - 4205f)*/}
        {/* ========================================================================= */}

        {/* P04: Real Tweet: Zenny Active Memory & Active Focus Breakdown (451 frames / 15.0s) */}
        <Series.Sequence durationInFrames={451}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/09_zenny_active_memory.png"
              maxWidth={1580}
              maxHeight={930}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["ACTIVE", "MEMORY", "LOOP"]}
                accentWordIndex={1}
                accentColor="#38BDF8"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P05: Real Testing Video: Zenny Active Memory Physical Context Demo (408 frames / 13.6s) */}
        <Series.Sequence durationInFrames={408}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/meta_muse_wonder/videos/zenny_active_memory_focus.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["ZERO", "SESSION", "AMNESIA"]}
                accentWordIndex={0}
                accentColor="#FACC15"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P06: Part 1 - Real Live Coding Screen Recording: Muse Wonder Full Terminal Agent (689 frames / 23.0s) */}
        <Series.Sequence durationInFrames={689}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/meta_muse_wonder/videos/muse_wonder_full_terminal_coding.mp4"
              aspectRatio="auto"
              maxDossierWidth={1180}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["AUTONOMOUS", "TERMINAL", "AGENT"]}
                accentWordIndex={1}
                accentColor="#10B981"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P06: Part 2 - Real Comparative Benchmark Test Video: NYC 3D Procedural Build (689 frames / 23.0s) */}
        <Series.Sequence durationInFrames={689}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/meta_muse_wonder/videos/aipulse_nyc_benchmark_test.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["SELF", "HEALING", "LOOP"]}
                accentWordIndex={1}
                accentColor="#8B5CF6"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 3: BENCHMARKS, VOXEL DEMO & REASONING (4205 - 6702 frames / 83.2s)     */}
        {/* ========================================================================= */}

        {/* P07: Real Benchmark Tweet: Artificial Analysis Full Intelligence Index (322 frames / 10.7s) */}
        <Series.Sequence durationInFrames={322}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/02_artificial_analysis_benchmarks.png"
              maxWidth={1620}
              maxHeight={930}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["56", "INTELLIGENCE", "INDEX"]}
                accentWordIndex={0}
                accentColor="#F59E0B"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P08: Real Benchmark Animated Video: Nathan Cross Artificial Analysis Ranking (243 frames / 8.1s) */}
        <Series.Sequence durationInFrames={243}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/meta_muse_wonder/videos/nathan_cross_ranking.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1740}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["RANKED", "#2", "WORLDWIDE"]}
                accentWordIndex={1}
                accentColor="#00F0FF"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P09: Part 1 - Real Tweet: Tak Japanese Voxel World Benchmark Tweet (300 frames / 10.0s) */}
        <Series.Sequence durationInFrames={300}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/03_tak_voxel_benchmark.png"
              maxWidth={1560}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["68", "CODING", "INDEX"]}
                accentWordIndex={0}
                accentColor="#10B981"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P09: Part 2 - Real Testing Video: Tak Japanese Voxel Island 3D Demo (1017 frames / 33.9s) */}
        <Series.Sequence durationInFrames={1017}>
          <AbsoluteFill>
            <RealEvidenceVideoCanvas
              videoSrc="evidence/meta_muse_wonder/videos/muse_wonder_voxel_3d_demo.mp4"
              aspectRatio="16:9"
              maxDossierWidth={1700}
              maxDossierHeight={940}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["JAPANESE", "VOXEL", "WORLD"]}
                accentWordIndex={1}
                accentColor="#EC4899"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P10: Part 1 - Real Tweet: Haider Token Efficiency Chart (315 frames / 10.5s) */}
        <Series.Sequence durationInFrames={315}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/04_haider_token_efficiency.png"
              maxWidth={1600}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["16%", "FEWER", "TOKENS"]}
                accentWordIndex={0}
                accentColor="#10B981"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P10: Part 2 - Real Tweet: Meta Research Blog Out-Of-Distribution Plot (300 frames / 10.0s) */}
        <Series.Sequence durationInFrames={300}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/06_scaling01_meta_blog.png"
              maxWidth={1600}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["OUT", "OF", "DISTRIBUTION"]}
                accentWordIndex={0}
                accentColor="#38BDF8"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 4: GIGA-CLUSTERS, PROMETHEUS & ZUCKERBERG'S DEFIANCE (6702 - 7856f)    */}
        {/* ========================================================================= */}

        {/* P11: Part 1 - Real Tweet: Prometheus Ohio Campus Leak (440 frames / 14.7s) */}
        <Series.Sequence durationInFrames={440}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/10_thelastmegawatt_ohio_cluster.png"
              maxWidth={1560}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["PROMETHEUS", "OHIO", "CAMPUS"]}
                accentWordIndex={0}
                accentColor="#38BDF8"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P11: Part 2 - 2.5D Semiconductor Die Schematic: Compute Pipeline Routing (438 frames / 14.6s) */}
        <Series.Sequence durationInFrames={438}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <SiliconDieSchematic
              color="#00F0FF"
              label="META PROMETHEUS COMPUTE FABRIC // 100K GPU CLUSTER"
              fullCanvas={true}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center", zIndex: 10 }}>
              <KineticPunchText
                words={["EXPENSIVE", "FRONTIER", "COMPUTE"]}
                accentWordIndex={0}
                accentColor="#FACC15"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P12: Real Tweet: Nimesh Jain Quoting Mark Zuckerberg Official Benchmark Table (276 frames / 9.2s) */}
        <Series.Sequence durationInFrames={276}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/13_nimesh_pricing.png"
              maxWidth={1580}
              maxHeight={930}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["ZUCKERBERG", "FULL", "BENCHMARKS"]}
                accentWordIndex={1}
                accentColor="#EF4444"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 5: PRICING, AVAILABILITY & THE VERDICT (7856 - 9201 frames / 44.8s)    */}
        {/* ========================================================================= */}

        {/* P13: Part 1 - Real Tweet: QuantBuilder / CNBC Pricing Report (270 frames / 9.0s) */}
        <Series.Sequence durationInFrames={270}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/08_quantbuilder_pricing.png"
              maxWidth={1600}
              maxHeight={920}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["$4", "INPUT", "$20 OUTPUT"]}
                accentWordIndex={0}
                accentColor="#10B981"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P13: Part 2 - Real Tweet: Alexandr Wang Quoting $50 Muse Code CLI User (269 frames / 9.0s) */}
        <Series.Sequence durationInFrames={269}>
          <AbsoluteFill>
            <RealDesktopTweetView
              screenshotSrc="evidence/meta_muse_wonder/screenshots/11_alexandr_wang_best_model.png"
              maxWidth={1580}
              maxHeight={930}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["MUSE", "CODE", "CLI"]}
                accentWordIndex={1}
                accentColor="#00F0FF"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P14: Dynamic Telemetry Speedometer Gauge: Frontier AI Intelligence Index (514 frames / 17.1s) */}
        <Series.Sequence durationInFrames={514}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
            <SpeedometerGauge
              value={56}
              maxValue={60}
              label="FRONTIER INTELLIGENCE INDEX"
              unit="PTS"
              color="#00F0FF"
              fullCanvas={true}
            />
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center", zIndex: 10 }}>
              <KineticPunchText
                words={["THE", "FRONTIER", "WAR"]}
                accentWordIndex={1}
                accentColor="#F59E0B"
              />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* P15: Outro with Official Meta Logo Badge & Subscribe Overlay (292 frames / 9.7s) */}
        <Series.Sequence durationInFrames={292}>
          <AbsoluteFill style={{ backgroundColor: "#020408" }}>
            {/* Centered Official Meta Logo Badge with orbital neon ring */}
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 60,
              }}
            >
              <OfficialLogoBadge
                logo="meta"
                size={160}
                glowColor="#0081FB"
              />
            </div>
            <div style={{ position: "absolute", bottom: 65, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText
                words={["LIKE", "AND", "SUBSCRIBE"]}
                accentWordIndex={2}
                accentColor="#EF4444"
              />
            </div>
            <YouTubeSubscribeOverlay startFrame={0} position="bottom-right" />
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
