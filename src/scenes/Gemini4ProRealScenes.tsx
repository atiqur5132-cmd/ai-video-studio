import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { FullScreenVideoView } from "../components/FullScreenVideoView";
import { FullScreenMediaView } from "../components/FullScreenMediaView";
import { TpuClusterSchematic } from "../components/TpuClusterSchematic";
import { MoERoutingEngine } from "../components/MoERoutingEngine";
import { FormalMathVerificationTree } from "../components/FormalMathVerificationTree";
import { ReasoningJumpGauge } from "../components/ReasoningJumpGauge";

export const Gemini4ProRealScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Series>
        {/* ========================================================================= */}
        {/* ACT 1: THE STEALTH INFILTRATION & ARENA DISGUISE (0 - 2150 frames) */}
        {/* ========================================================================= */}

        {/* Scene 1: Initial Arena Disguise - Pelican in Arena (0 - 660 / 0.0s - 22.0s) */}
        <Series.Sequence durationInFrames={660}>
          <FullScreenVideoView videoSrc="evidence/arena_checkpoint_lumina.mp4" />
        </Series.Sequence>

        {/* Scene 2: Placeholder Tags & Illusion Collapse - Xbox Controller Arena Demo (660 - 1320 / 22.0s - 44.0s) */}
        <Series.Sequence durationInFrames={660}>
          <FullScreenVideoView videoSrc="evidence/xbox_controller_lumina.mp4" />
        </Series.Sequence>

        {/* Scene 3: Solving Spatial Math & Three.js Physics - 3D Mechanical Butterfly Demo (1320 - 2150 / 44.0s - 71.7s) */}
        <Series.Sequence durationInFrames={830}>
          <FullScreenVideoView videoSrc="evidence/mechanical_butterfly_thtbee.mp4" />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 2: THE 3D FLOATPLANE PHYSICS BREAKDOWN (2150 - 5200 frames) */}
        {/* ========================================================================= */}

        {/* Scene 4: Pranav Reddy Floatplane Physics Comparison (2150 - 3370 / 71.7s - 112.3s) */}
        <Series.Sequence durationInFrames={1220}>
          <FullScreenVideoView videoSrc="evidence/floatplane_physics_opus55.mp4" />
        </Series.Sequence>

        {/* Scene 5: Developer Bee Mechanical Butterfly & Airbus CAD 3D WebGL (3370 - 4500 / 112.3s - 150.0s) */}
        <Series.Sequence durationInFrames={1130}>
          <FullScreenVideoView videoSrc="evidence/airship_threejs_harshith.mp4" />
        </Series.Sequence>

        {/* Scene 6A: Giga Forecast / GenAISpot Leak Report Desktop Screenshot (4500 - 4750 / 150.0s - 158.3s) */}
        <Series.Sequence durationInFrames={250}>
          <FullScreenMediaView mediaSrc="evidence/screenshots/deepmind_accelerated_roadmap_desktop.png" />
        </Series.Sequence>

        {/* Scene 6B: Gemini 4 Accelerated 2026 Target Artwork (4750 - 4950 / 158.3s - 165.0s) */}
        <Series.Sequence durationInFrames={200}>
          <FullScreenMediaView mediaSrc="evidence/deepmind_accelerated_roadmap_media_1.jpg" />
        </Series.Sequence>

        {/* Scene 6C: Leaked Architectural Dossiers Desktop Screenshot (4950 - 5200 / 165.0s - 173.3s) */}
        <Series.Sequence durationInFrames={250}>
          <FullScreenMediaView mediaSrc="evidence/screenshots/leaked_specs_ravikiran_desktop.png" />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 3: LEAKED 2M ARCHITECTURE & HARDWARE/SOFTWARE B-ROLLS (5200 - 7030 frames) */}
        {/* ========================================================================= */}

        {/* Scene 7A: Ray Leaked Specification Sheets & Architecture Table (5200 - 5554 / 173.3s - 185.1s) */}
        <Series.Sequence durationInFrames={354}>
          <FullScreenMediaView mediaSrc="evidence/leaked_specs_ravikiran_media_1.jpg" />
        </Series.Sequence>

        {/* Scene 7B: Project Ironwood TPU v6e Matrix Accelerator Cluster B-Roll (5554 - 5880 / 185.1s - 196.0s) */}
        <Series.Sequence durationInFrames={326}>
          <TpuClusterSchematic />
        </Series.Sequence>

        {/* Scene 7C: Dynamic Multi-Head MoE Routing Engine & 2M Context Telemetry (5880 - 6447 / 196.0s - 214.9s) */}
        <Series.Sequence durationInFrames={567}>
          <MoERoutingEngine />
        </Series.Sequence>

        {/* Scene 7D: DeepMind Pre-Training Pipeline Specification Row (6447 - 6768 / 214.9s - 225.6s) */}
        <Series.Sequence durationInFrames={321}>
          <FullScreenMediaView mediaSrc="evidence/leaked_specs_ravikiran_media_1.jpg" />
        </Series.Sequence>

        {/* Scene 7E: Recursive Self-Correction Tree & Formal Lean 4 Math Solver (6768 - 7030 / 225.6s - 234.3s) */}
        <Series.Sequence durationInFrames={262}>
          <FormalMathVerificationTree />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 4: TITAN WAR — F1 SIMULATION & ARC-AGI-2 77.1% (7030 - 8600 frames) */}
        {/* ========================================================================= */}

        {/* Scene 8: Cedric Chee F1 Car Automotive Aerodynamics Duel (7030 - 7720 / 234.3s - 257.3s) */}
        <Series.Sequence durationInFrames={690}>
          <FullScreenVideoView videoSrc="evidence/f1_astra_cedric.mp4" />
        </Series.Sequence>

        {/* Scene 9A: Rudra Satani Leaked ARC-AGI-2 Benchmark Result Sheet (7720 - 8100 / 257.3s - 270.0s) */}
        <Series.Sequence durationInFrames={380}>
          <FullScreenMediaView mediaSrc="evidence/arc_agi_score_rudra_media_1.jpg" />
        </Series.Sequence>

        {/* Scene 9B: ARC-AGI-2 Reasoning Benchmark Comparison Dial (8100 - 8600 / 270.0s - 286.7s) */}
        <Series.Sequence durationInFrames={500}>
          <ReasoningJumpGauge />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 5: STRATEGIC CROWDSOURCING & POLYMARKET ROADMAP (8600 - 12275 frames) */}
        {/* ========================================================================= */}

        {/* Scene 10: LMSYS Arena Leaderboard Climbing & Coding Matchups (8600 - 9380 / 286.7s - 312.7s) */}
        <Series.Sequence durationInFrames={780}>
          <FullScreenVideoView videoSrc="evidence/arena_checkpoint_lumina.mp4" />
        </Series.Sequence>

        {/* Scene 11A: Strategic Crowd-Sourced Red-Teaming (9380 - 10125 / 312.7s - 337.5s) */}
        <Series.Sequence durationInFrames={745}>
          <FullScreenVideoView videoSrc="evidence/floatplane_physics_opus55.mp4" />
        </Series.Sequence>

        {/* Scene 11B: Automated Evaluation Physics & Graphics Harness (10125 - 10870 / 337.5s - 362.3s) */}
        <Series.Sequence durationInFrames={745}>
          <FullScreenVideoView videoSrc="evidence/airship_threejs_harshith.mp4" />
        </Series.Sequence>

        {/* Scene 12: Polymarket 74% October 2026 Odds Surge (10870 - 11380 / 362.3s - 379.3s) */}
        <Series.Sequence durationInFrames={510}>
          <FullScreenVideoView videoSrc="evidence/polymarket_october_goodworse.mp4" />
        </Series.Sequence>

        {/* Scene 13: Grand Finale Documentary Montage (11380 - 12275 / 379.3s - 409.2s) */}
        {/* 13A: Silently Deploying Gemini 4 Pro in the wild (11380 - 11580 / 379.3s - 386.0s) */}
        <Series.Sequence durationInFrames={200}>
          <FullScreenVideoView videoSrc="evidence/arena_checkpoint_lumina.mp4" />
        </Series.Sequence>

        {/* 13B: Frontier AI no longer dictated by press conferences (11580 - 11750 / 386.0s - 391.7s) */}
        <Series.Sequence durationInFrames={170}>
          <FullScreenVideoView videoSrc="evidence/floatplane_physics_opus55.mp4" />
        </Series.Sequence>

        {/* 13C: Model running in shadows & outperforming best systems (11750 - 11920 / 391.7s - 397.3s) */}
        <Series.Sequence durationInFrames={170}>
          <FullScreenVideoView videoSrc="evidence/f1_astra_cedric.mp4" />
        </Series.Sequence>

        {/* 13D: Mathematical frontier supremacy (11920 - 12080 / 397.3s - 402.7s) */}
        <Series.Sequence durationInFrames={160}>
          <ReasoningJumpGauge />
        </Series.Sequence>

        {/* 13E: Hidden giant fully unleashed (12080 - 12275 / 402.7s - 409.2s) */}
        <Series.Sequence durationInFrames={195}>
          <FullScreenVideoView videoSrc="evidence/mechanical_butterfly_thtbee.mp4" />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
