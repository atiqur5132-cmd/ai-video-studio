import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  Video,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { RealDesktopTweetView } from "../components/RealDesktopTweetView";
import { RealEvidenceVideoCanvas } from "../components/RealEvidenceVideoCanvas";
import { SplitEvidenceView } from "../components/SplitEvidenceView";
import { KineticPunchText } from "../components/KineticPunchText";

// Timing data from src/para_timing.json (Total: 13,390 frames = 446.32s @ 30fps)
const T = {
  P01: { from: 0, dur: 199 },
  P02: { from: 199, dur: 479 },
  P03: { from: 678, dur: 344 },
  P04: { from: 1022, dur: 103 },
  P05: { from: 1125, dur: 829 },
  P06: { from: 1954, dur: 634 },
  P07: { from: 2588, dur: 839 },
  P08: { from: 3427, dur: 538 },
  P09: { from: 3965, dur: 651 },
  P10: { from: 4616, dur: 536 },
  P11: { from: 5152, dur: 199 },
  P12: { from: 5351, dur: 689 },
  P13: { from: 6040, dur: 442 },
  P14: { from: 6482, dur: 419 },
  P15: { from: 6901, dur: 164 },
  P16: { from: 7065, dur: 466 },
  P17: { from: 7531, dur: 1525 },
  P18: { from: 9056, dur: 558 },
  P19: { from: 9614, dur: 152 },
  P20: { from: 9766, dur: 791 },
  P21: { from: 10557, dur: 334 },
  P22: { from: 10891, dur: 586 },
  P23: { from: 11477, dur: 789 },
  P24: { from: 12266, dur: 645 },
  P25: { from: 12911, dur: 320 },
  P26: { from: 13231, dur: 159 },
};

// Subtle Documentary HUD
const DocHud: React.FC<{ act: string; title: string; color?: string }> = ({
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
        top: 40,
        left: 56,
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "rgba(3, 7, 18, 0.9)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${color}45`,
        borderRadius: 8,
        padding: "8px 22px",
        opacity,
        boxShadow: `0 8px 30px rgba(0,0,0,0.85), 0 0 20px ${color}20`,
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
      <span
        style={{
          color,
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}
      >
        {act}
      </span>
      <div style={{ width: 1, height: 16, backgroundColor: "rgba(255,255,255,0.15)" }} />
      <span
        style={{
          color: "#F8FAFC",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {title}
      </span>
    </div>
  );
};

// Advanced Dynamic Real Image Dossier Container (Bigger Canvas, Deep Focal Zooms)
const RealImageDossier: React.FC<{
  src: string;
  baseScale?: number;
  zoomScale?: number;
  focalOrigin?: string;
  panY?: [number, number];
  windowWidth?: number;
  windowHeight?: number;
  highlightBox?: { top: number | string; left: number | string; width: number | string; height: number | string; label?: string };
}> = ({
  src,
  baseScale = 1.15,
  zoomScale = 1.42,
  focalOrigin = "center center",
  panY = [0, 0],
  windowWidth = 1640,
  windowHeight = 900,
  highlightBox,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.8 },
  });

  const pushIn = interpolate(frame, [0, durationInFrames], [baseScale, zoomScale], {
    extrapolateRight: "clamp",
  });

  const currentPanY = interpolate(frame, [0, durationInFrames], [panY[0], panY[1]], {
    extrapolateRight: "clamp",
  });

  const scale = entrance * pushIn;
  const pulse = Math.sin(frame * 0.1) * 0.2 + 0.8;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020408",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Rich Atmospheric Blurred Background */}
      <div
        style={{
          position: "absolute",
          inset: -60,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(65px) brightness(0.52) saturate(1.7)",
            transform: "scale(1.35)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(2, 6, 23, 0.2) 0%, rgba(2, 4, 10, 0.85) 90%)",
          }}
        />
      </div>

      {/* Main Crisp Foreground Window */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: windowWidth,
          height: windowHeight,
          borderRadius: 22,
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          backgroundColor: "#000000",
          boxShadow: "0 40px 120px rgba(0, 0, 0, 0.98), 0 15px 45px rgba(0, 0, 0, 0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: `translate3d(0, ${currentPanY}px, 0) scale(${scale})`,
            transformOrigin: focalOrigin,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Img
            src={staticFile(src)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />

          {highlightBox && (
            <div
              style={{
                position: "absolute",
                top: highlightBox.top,
                left: highlightBox.left,
                width: highlightBox.width,
                height: highlightBox.height,
                border: "3px solid #EF4444",
                borderRadius: 8,
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                boxShadow: "0 0 25px rgba(239, 68, 68, 0.9), inset 0 0 15px rgba(239, 68, 68, 0.4)",
                opacity: pulse,
                zIndex: 10,
              }}
            >
              {highlightBox.label && (
                <div
                  style={{
                    position: "absolute",
                    top: -28,
                    left: 0,
                    backgroundColor: "#EF4444",
                    color: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  {highlightBox.label}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Edge Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.7) 100%)",
          pointerEvents: "none",
          zIndex: 4,
        }}
      />
    </AbsoluteFill>
  );
};

export const KimiK31DocScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#020408" }}>
      {/* =========================================================================
          ACT 1: THE WORDLESS DROP (0:00 - 0:37 | Frames 0 - 1125)
          Starts directly with the 24-second official teaser video!
      ========================================================================= */}
      {/* 1. Official 24-second Video Teaser (Plays First) */}
      <Sequence from={0} durationInFrames={T.P01.dur + T.P02.dur}>
        <DocHud act="Act I" title="Official Teaser Video Drop" color="#38BDF8" />
        <RealEvidenceVideoCanvas
          videoSrc="evidence/official_teaser_faststart.mp4"
          maxDossierWidth={1800}
          maxDossierHeight={960}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["OFFICIAL", "TEASER", "REVEAL"]} accentWordIndex={1} accentColor="#38BDF8" fontSize={70} />
        </div>
      </Sequence>

      {/* 2. Official Tweet Desktop Screenshot with 387K Views & Gold Check */}
      <Sequence from={T.P03.from} durationInFrames={T.P03.dur + T.P04.dur}>
        <DocHud act="Act I" title="X Announcement Radar" color="#FACC15" />
        <RealDesktopTweetView
          screenshotSrc="evidence/screenshots/tweet_01_official_teaser.png"
          windowWidth={860}
          windowHeight={770}
          baseScale={1.0}
          zoomScale={1.12}
          focalZoom={{
            scale: 1.25,
            origin: "center 50%",
            startFrame: 30,
          }}
          highlightBox={{
            top: "16%",
            left: "4%",
            width: "92%",
            height: "65%",
            color: "#38BDF8",
            label: "OFFICIAL 24S TEASER",
          }}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["KIMI", "K3.1", "UNLEASHED"]} accentWordIndex={1} accentColor="#FACC15" fontSize={74} />
        </div>
      </Sequence>

      {/* =========================================================================
          ACT 2: FORENSIC TERMINAL BREAKDOWN (0:37 - 2:12 | Frames 1125 - 3965)
          Kimi Code, Three.js 3D Generation, Blender Scripting, 3D Moon
      ========================================================================= */}
      {/* P05: Retro Monitor Leak with 'Model: Kimi K3.1' and 'context: 0% (0/1M)' */}
      <Sequence from={T.P05.from} durationInFrames={T.P05.dur}>
        <DocHud act="Act II" title="Terminal Forensics" color="#38BDF8" />
        <RealImageDossier
          src="evidence/evidence_askclash_leak_orig.png"
          baseScale={1.2}
          zoomScale={1.65}
          focalOrigin="26% 26%"
          windowWidth={1640}
          windowHeight={910}
          highlightBox={{
            top: "23%",
            left: "21%",
            width: "12%",
            height: "9%",
            label: "MODEL: KIMI K3.1",
          }}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["1M", "TOKEN", "CONTEXT"]} accentWordIndex={2} accentColor="#38BDF8" fontSize={72} />
        </div>
      </Sequence>

      {/* P06: Real Developer 3D Scene Geometry & Physics Video (demo_nexify_3d_comparison) */}
      <Sequence from={T.P06.from} durationInFrames={T.P06.dur}>
        <DocHud act="Act II" title="Three.js Procedural 3D Video" color="#10B981" />
        <RealEvidenceVideoCanvas
          videoSrc="evidence/demo_nexify_3d_comparison_faststart.mp4"
          maxDossierWidth={1760}
          maxDossierHeight={940}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["PROCEDURAL", "3D", "GEOMETRY"]} accentWordIndex={1} accentColor="#10B981" fontSize={72} />
        </div>
      </Sequence>

      {/* P07: Blender Python Scripting (scene.py, facade.py, geometry.py) */}
      <Sequence from={T.P07.from} durationInFrames={T.P07.dur}>
        <DocHud act="Act II" title="Blender Python Automation" color="#F59E0B" />
        <RealImageDossier
          src="evidence/frame_14.jpg"
          baseScale={1.18}
          zoomScale={1.5}
          focalOrigin="28% 25%"
          windowWidth={1680}
          windowHeight={920}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["AUTONOMOUS", "BLENDER", "PIPELINE"]} accentWordIndex={1} accentColor="#F59E0B" fontSize={70} />
        </div>
      </Sequence>

      {/* P08: Photorealistic 3D Moon Celestial Rendering */}
      <Sequence from={T.P08.from} durationInFrames={T.P08.dur}>
        <DocHud act="Act II" title="Celestial Raytracing" color="#A855F7" />
        <RealImageDossier
          src="evidence/frame_20.jpg"
          baseScale={1.1}
          zoomScale={1.38}
          focalOrigin="center center"
          windowWidth={1640}
          windowHeight={920}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["MOONSHOT", "NAMESAKE", "FLEX"]} accentWordIndex={0} accentColor="#A855F7" fontSize={74} />
        </div>
      </Sequence>

      {/* =========================================================================
          ACT 3: THE LEAK TRAIL & TIMELINE (2:12 - 2:58 | Frames 3965 - 5351)
          Carbon-life and AskClash API & Config Spotting (SMOOTH VERTICAL SCROLL)
      ========================================================================= */}
      {/* P09: Carbon-Life Tweet Breakdown (SMOOTH SCROLL DOWN TO RED BOX ON CRT SCREEN) */}
      <Sequence from={T.P09.from} durationInFrames={T.P09.dur}>
        <DocHud act="Act III" title="Community Code Sleuths" color="#38BDF8" />
        <RealDesktopTweetView
          screenshotSrc="evidence/screenshots/tweet_02_jasonz_breakdown.png"
          windowWidth={860}
          windowHeight={880}
          baseScale={1.0}
          zoomScale={1.1}
          panY={[0, -820]}
          highlightBox={{
            top: "27%",
            left: "40%",
            width: "25%",
            height: "7%",
            color: "#EF4444",
            label: "KIMI K3.1 SPOTTED",
          }}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["API", "TAG", "DETECTED"]} accentWordIndex={0} accentColor="#38BDF8" fontSize={72} />
        </div>
      </Sequence>

      {/* P10: AskClash API Leak Tweet Breakdown (SMOOTH SCROLL DOWN TO SCREENSHOT) */}
      <Sequence from={T.P10.from} durationInFrames={T.P10.dur}>
        <DocHud act="Act III" title="Production Config Deployment" color="#EC4899" />
        <RealDesktopTweetView
          screenshotSrc="evidence/screenshots/tweet_03_askclash_api_leak.png"
          windowWidth={860}
          windowHeight={880}
          baseScale={1.0}
          zoomScale={1.1}
          panY={[0, -560]}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["GLOBAL", "INFRASTRUCTURE", "SWITCH"]} accentWordIndex={1} accentColor="#EC4899" fontSize={68} />
        </div>
      </Sequence>

      {/* =========================================================================
          ACT 4: THE 'KIBITZ' LMSYS ARENA MYSTERY (2:58 - 4:11 | Frames 5351 - 7531)
          Real Arena battle video, David Hendrickson, Sree Konark Sun Temple Test, Ahazei GPT-6 Rivalry
      ========================================================================= */}
      {/* P11: Real Arena Battle Video (demo_chenbin_arena) */}
      <Sequence from={T.P11.from} durationInFrames={T.P11.dur}>
        <DocHud act="Act IV" title="LMSYS Arena Battle Video" color="#F59E0B" />
        <RealEvidenceVideoCanvas
          videoSrc="evidence/demo_chenbin_arena_faststart.mp4"
          maxDossierWidth={1760}
          maxDossierHeight={940}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["LMSYS", "ARENA", "MYSTERY"]} accentWordIndex={1} accentColor="#F59E0B" fontSize={74} />
        </div>
      </Sequence>

      {/* P12: Split Evidence: David Hendrickson Tweet + Real Arena Testing Video (demo_ethan_arena) */}
      <Sequence from={T.P12.from} durationInFrames={T.P12.dur}>
        <DocHud act="Act IV" title="Kibitz Identity Revealed" color="#F59E0B" />
        <SplitEvidenceView
          screenshotSrc="evidence/screenshots/tweet_04_teksedge_kibitz.png"
          videoSrc="evidence/demo_ethan_arena_faststart.mp4"
          screenshotScrollY={[0, -960]}
          badgeText="REAL ARENA BATTLE DEMO"
          badgeColor="#F59E0B"
        />
        <div style={{ position: "absolute", bottom: 50, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["CODENAME", "KIBITZ", "FOUND"]} accentWordIndex={1} accentColor="#F59E0B" fontSize={72} />
        </div>
      </Sequence>

      {/* P13: Sree's Konark Sun Temple Test */}
      <Sequence from={T.P13.from} durationInFrames={T.P13.dur}>
        <DocHud act="Act IV" title="Blind Human Evaluation" color="#10B981" />
        <RealDesktopTweetView
          screenshotSrc="evidence/screenshots/tweet_05_sree_konark_arena.png"
          windowWidth={860}
          windowHeight={860}
          baseScale={1.0}
          zoomScale={1.12}
          panY={[0, -180]}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["CLEANEST", "SPATIAL", "DESIGN"]} accentWordIndex={0} accentColor="#10B981" fontSize={72} />
        </div>
      </Sequence>

      {/* P14: Split Evidence: Ahazei GPT-6 Astra Rivalry + Real 44s Kitchen Test Video (demo_yingshao_kitchen) */}
      <Sequence from={T.P14.from} durationInFrames={T.P14.dur}>
        <DocHud act="Act IV" title="Complex Physics & Reasoning Demo" color="#EF4444" />
        <SplitEvidenceView
          screenshotSrc="evidence/screenshots/tweet_06_ahazei_gpt6_rival.png"
          videoSrc="evidence/demo_yingshao_kitchen_faststart.mp4"
          screenshotScrollY={[0, -180]}
          badgeText="REAL KITCHEN TEST DEMO"
          badgeColor="#EF4444"
        />
        <div style={{ position: "absolute", bottom: 50, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["GPT-6", "ASTRA", "RIVAL"]} accentWordIndex={2} accentColor="#EF4444" fontSize={72} />
        </div>
      </Sequence>

      {/* P15 & P16: Tokenizer Forensics & Model Tag Punch */}
      <Sequence from={T.P15.from} durationInFrames={T.P15.dur + T.P16.dur}>
        <DocHud act="Act IV" title="Historical Playbook" color="#A855F7" />
        <RealImageDossier
          src="evidence/evidence_alex_k31_orig.png"
          baseScale={1.35}
          zoomScale={1.8}
          focalOrigin="center center"
          windowWidth={1440}
          windowHeight={840}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["HISTORICAL", "LEAK", "PLAYBOOK"]} accentWordIndex={1} accentColor="#A855F7" fontSize={70} />
        </div>
      </Sequence>

      {/* =========================================================================
          ACT 5: HARDCODED CONFIG & STRATEGY (4:11 - 5:20 | Frames 7531 - 9614)
          Real Config Migration Rule, Deven Baskota Strategy
      ========================================================================= */}
      {/* P17: The Smoking Gun - Hardcoded Migration JSON Rule (DEEP FOCAL ZOOM) */}
      <Sequence from={T.P17.from} durationInFrames={T.P17.dur}>
        <DocHud act="Act V" title="The Smoking Gun Config" color="#10B981" />
        <RealImageDossier
          src="evidence/evidence_teksedge_config_orig.jpg"
          baseScale={1.3}
          zoomScale={1.75}
          focalOrigin="50% 38%"
          windowWidth={1540}
          windowHeight={880}
          highlightBox={{
            top: "23%",
            left: "22%",
            width: "55%",
            height: "45%",
            label: "K3 -> K3.1 MIGRATION TARGET",
          }}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["HARDCODED", "K3.1", "MIGRATION"]} accentWordIndex={1} accentColor="#10B981" fontSize={72} />
        </div>
      </Sequence>

      {/* P18: Deven Baskota - The 24-Second Marketing Genius */}
      <Sequence from={T.P18.from} durationInFrames={T.P18.dur}>
        <DocHud act="Act V" title="Silent Rollout Strategy" color="#F59E0B" />
        <RealDesktopTweetView
          screenshotSrc="evidence/screenshots/tweet_07_paddleurway_strategy.png"
          windowWidth={860}
          windowHeight={860}
          baseScale={1.0}
          zoomScale={1.15}
          panY={[0, -220]}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["SILENT", "LAUNCH", "BRILLIANCE"]} accentWordIndex={1} accentColor="#F59E0B" fontSize={72} />
        </div>
      </Sequence>

      {/* =========================================================================
          ACT 6: ARCHITECTURAL DISRUPTION & OPEN WEIGHTS (5:20 - 7:06 | Frames 9614 - 12911)
          Swarm Agent Workflows, Minecraft 14x Cost Arbitrage, Thinking High Mode
      ========================================================================= */}
      {/* P19 & P20: Split Evidence: Priyesh Tweet + Official Kimi Work Swarm Video (official_kimi_work_swarm) */}
      <Sequence from={T.P19.from} durationInFrames={T.P19.dur + T.P20.dur}>
        <DocHud act="Act VI" title="Swarm Agents & 2.8T MoE Pipeline" color="#38BDF8" />
        <SplitEvidenceView
          screenshotSrc="evidence/screenshots/tweet_08_priyesh_swe2.png"
          videoSrc="evidence/official_kimi_work_swarm_faststart.mp4"
          screenshotScrollY={[0, -520]}
          badgeText="OFFICIAL SWARM AGENT DEMO"
          badgeColor="#38BDF8"
        />
        <div style={{ position: "absolute", bottom: 50, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["2.8T", "OPEN", "WEIGHTS"]} accentWordIndex={1} accentColor="#38BDF8" fontSize={74} />
        </div>
      </Sequence>

      {/* P21 & P22: Split Evidence: xaiwind Tweet + Real Minecraft 14x Cheaper Video (demo_xaiwind_minecraft) */}
      <Sequence from={T.P21.from} durationInFrames={T.P21.dur + T.P22.dur}>
        <DocHud act="Act VI" title="Minecraft 14x Cost Collapse Demo" color="#10B981" />
        <SplitEvidenceView
          screenshotSrc="evidence/screenshots/tweet_10_xaiwind_cost_test.png"
          videoSrc="evidence/demo_xaiwind_minecraft_faststart.mp4"
          screenshotScrollY={[0, -450]}
          badgeText="REAL MINECRAFT TEST DEMO"
          badgeColor="#10B981"
        />
        <div style={{ position: "absolute", bottom: 50, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["14X", "CHEAPER", "INFERENCE"]} accentWordIndex={1} accentColor="#10B981" fontSize={72} />
        </div>
      </Sequence>

      {/* P23: Split Evidence: Abhijit Tweet + Real Coding Video (demo_kedashu_coding) */}
      <Sequence from={T.P23.from} durationInFrames={T.P23.dur}>
        <DocHud act="Act VI" title="Extended Thinking & Code Execution" color="#EC4899" />
        <SplitEvidenceView
          screenshotSrc="evidence/screenshots/tweet_09_abhijit_thinking_high.png"
          videoSrc="evidence/demo_kedashu_coding_faststart.mp4"
          screenshotScrollY={[0, -180]}
          badgeText="REAL CODING BENCHMARK DEMO"
          badgeColor="#EC4899"
        />
        <div style={{ position: "absolute", bottom: 50, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["THINKING", "MODE", "HIGH"]} accentWordIndex={2} accentColor="#EC4899" fontSize={74} />
        </div>
      </Sequence>

      {/* P24: Real Browser Agent Execution Video (official_kimi_browser_agent) */}
      <Sequence from={T.P24.from} durationInFrames={T.P24.dur}>
        <DocHud act="Act VI" title="Autonomous Computer & Browser Use" color="#A855F7" />
        <RealEvidenceVideoCanvas
          videoSrc="evidence/official_kimi_browser_agent_faststart.mp4"
          maxDossierWidth={1760}
          maxDossierHeight={940}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["OPEN", "SOURCE", "DOMINANCE"]} accentWordIndex={2} accentColor="#A855F7" fontSize={72} />
        </div>
      </Sequence>

      {/* =========================================================================
          ACT 7: THE COUNTDOWN & IMMINENT LAUNCH (7:06 - 7:26 | Frames 12911 - 13390)
          The 24-Second Clock & Celestial Moonshot Climax
      ========================================================================= */}
      {/* P25: Countdown to Release */}
      <Sequence from={T.P25.from} durationInFrames={T.P25.dur}>
        <DocHud act="Act VII" title="Launch Countdown" color="#EF4444" />
        <RealDesktopTweetView
          screenshotSrc="evidence/screenshots/tweet_01_official_teaser.png"
          windowWidth={860}
          windowHeight={770}
          baseScale={1.0}
          zoomScale={1.15}
        />
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["RELEASE", "IS", "IMMINENT"]} accentWordIndex={0} accentColor="#EF4444" fontSize={74} />
        </div>
      </Sequence>

      {/* P26: Celestial Outro with Official Kimi Logo */}
      <Sequence from={T.P26.from} durationInFrames={T.P26.dur}>
        <DocHud act="Act VII" title="Dark Side of The Moon" color="#38BDF8" />
        <RealImageDossier
          src="evidence/frame_20.jpg"
          baseScale={1.1}
          zoomScale={1.42}
          focalOrigin="center center"
          windowWidth={1640}
          windowHeight={920}
        />
        {/* Floating Verified Official Kimi Logo */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 70,
            zIndex: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "rgba(3, 7, 18, 0.85)",
            border: "1px solid rgba(56, 189, 248, 0.4)",
            borderRadius: 14,
            padding: "10px 18px",
            backdropFilter: "blur(12px)",
          }}
        >
          <Img
            src={staticFile("logos/kimi_logo.png")}
            style={{ width: 36, height: 36, borderRadius: "50%" }}
          />
          <span style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 800, fontFamily: "monospace" }}>
            MOONSHOT AI // KIMI
          </span>
        </div>
        <div style={{ position: "absolute", bottom: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 60 }}>
          <KineticPunchText words={["MOONSHOT", "HAS", "SPOKEN"]} accentWordIndex={0} accentColor="#38BDF8" fontSize={76} />
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
