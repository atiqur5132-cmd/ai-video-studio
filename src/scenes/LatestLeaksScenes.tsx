import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { FullScreenVideoView } from "../components/FullScreenVideoView";
import { FullScreenMediaView } from "../components/FullScreenMediaView";
import { SmoothScrollingDocumentView } from "../components/SmoothScrollingDocumentView";
import { TpuClusterSchematic } from "../components/TpuClusterSchematic";
import { MoERoutingEngine } from "../components/MoERoutingEngine";
import { FormalMathVerificationTree } from "../components/FormalMathVerificationTree";
import { SiliconMoatBreakthrough } from "../components/SiliconMoatBreakthrough";
import { DeepSweSolBenchmark } from "../components/DeepSweSolBenchmark";
import { MultiTierReasoningSelector } from "../components/MultiTierReasoningSelector";
import { NeuralFlowCanvas } from "../components/NeuralFlowCanvas";

export const LatestLeaksScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Series>
        {/* ========================================================================= */}
        {/* ACT 1: CLAUDE SONNET 5.5 PRODUCTION REGISTRY AMBUSH (0 - 4800 frames / 0 - 160s) */}
        {/* ========================================================================= */}

        {/* 1A: Look closely at this production registry file (0 - 350 / 0.0s - 11.6s) */}
        <Series.Sequence durationInFrames={350}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/sonnet55_registry_lumina_desktop.png"
            scrollRatio={0.45}
          />
        </Series.Sequence>

        {/* 1B: The identifier is claude-sonnet-5-5 (350 - 720 / 11.6s - 24.0s) */}
        <Series.Sequence durationInFrames={370}>
          <FullScreenMediaView mediaSrc="evidence/sonnet55_registry_lumina_raw_2.png" />
        </Series.Sequence>

        {/* 1C: Droid 0.228.0 Raw Registry Specs (720 - 1100 / 24.0s - 36.6s) */}
        <Series.Sequence durationInFrames={380}>
          <FullScreenMediaView mediaSrc="evidence/sonnet55_registry_lumina_raw_1.png" />
        </Series.Sequence>

        {/* 1D: Xiao Tan / Factory Droid Registry Report (1100 - 1480 / 36.6s - 49.3s) */}
        <Series.Sequence durationInFrames={380}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/sonnet55_factory_droid_tvytlx_desktop.png"
            scrollRatio={0.4}
          />
        </Series.Sequence>

        {/* 1E: Anthropic Multi-Tier Reasoning Engine (1480 - 1970 / 49.3s - 65.6s) */}
        <Series.Sequence durationInFrames={490}>
          <MultiTierReasoningSelector />
        </Series.Sequence>

        {/* 1F: Marcel DevDay Drop Leak (1970 - 2400 / 65.6s - 80.0s) */}
        <Series.Sequence durationInFrames={430}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/sonnet55_devday_marcthecreatorr_desktop.png"
            scrollRatio={0.4}
          />
        </Series.Sequence>

        {/* 1G: Official Introducing Claude Sonnet 5.5 Keynote Artwork (2400 - 2850 / 80.0s - 95.0s) */}
        <Series.Sequence durationInFrames={450}>
          <FullScreenMediaView mediaSrc="evidence/sonnet55_greytest_pranav_raw_1.jpg" />
        </Series.Sequence>

        {/* 1H: Pranav Reddy Grey-Testing in Claude Code (2850 - 3300 / 95.0s - 110.0s) */}
        <Series.Sequence durationInFrames={450}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/sonnet55_greytest_pranav_desktop.png"
            scrollRatio={0.35}
          />
        </Series.Sequence>

        {/* 1I: SuSu Claude Code Gray Testing Verification (3300 - 3800 / 110.0s - 126.6s) */}
        <Series.Sequence durationInFrames={500}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/sonnet55_susu_claudecode_desktop.png"
            scrollRatio={0.35}
          />
        </Series.Sequence>

        {/* 1J: StatsWire Partner Testing Done Report (3800 - 4300 / 126.6s - 143.3s) */}
        <Series.Sequence durationInFrames={500}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/sonnet55_statswire_desktop.png"
            scrollRatio={0.3}
          />
        </Series.Sequence>

        {/* 1K: Frontier Pricing & Cost Disruption Frontier (4300 - 4800 / 143.3s - 160.0s) */}
        <Series.Sequence durationInFrames={500}>
          <FullScreenMediaView mediaSrc="evidence/cost_efficiency_frontier.png" />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 2: DEEPSEEK V5 — 2-TRILLION PARAMETERS ON HUAWEI ASCEND (4800 - 8700 frames) */}
        {/* ========================================================================= */}

        {/* 2A: DeepSeek V5 Official Logo Leak (4800 - 5200 / 160.0s - 173.3s) */}
        <Series.Sequence durationInFrames={400}>
          <FullScreenMediaView mediaSrc="evidence/deepseek_v5_statswire_raw_1.jpg" />
        </Series.Sequence>

        {/* 2B: Wizard of Odds 2T Huawei Ascend Tweet (5200 - 5700 / 173.3s - 190.0s) */}
        <Series.Sequence durationInFrames={500}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/deepseek_v5_wizard_desktop.png"
            scrollRatio={0.35}
          />
        </Series.Sequence>

        {/* 2C: DeepSeek V5 Leak 16:9 Banner (5700 - 6200 / 190.0s - 206.6s) */}
        <Series.Sequence durationInFrames={500}>
          <FullScreenMediaView mediaSrc="evidence/deepseek_v5_wizard_raw_1.jpg" />
        </Series.Sequence>

        {/* 2D: DeepSeek V5 Ascending Whale Artwork (6200 - 6800 / 206.6s - 226.6s) */}
        <Series.Sequence durationInFrames={600}>
          <FullScreenMediaView mediaSrc="evidence/deepseek_v5_sufian_raw_1.jpg" />
        </Series.Sequence>

        {/* 2E: 200,000 Huawei Ascend Matrix Cluster Schematic (6800 - 7400 / 226.6s - 246.6s) */}
        <Series.Sequence durationInFrames={600}>
          <TpuClusterSchematic />
        </Series.Sequence>

        {/* 2F: Multi-Head Latent Attention & DualPipe Scheduling (7400 - 7920 / 246.6s - 264.0s) */}
        <Series.Sequence durationInFrames={520}>
          <MoERoutingEngine />
        </Series.Sequence>

        {/* 2G: Hemran Leak: DeepSeek V5 Outperforming Astra (7920 - 8350 / 264.0s - 278.3s) */}
        <Series.Sequence durationInFrames={430}>
          <FullScreenMediaView mediaSrc="evidence/deepseek_v5_hemran_raw_1.jpg" />
        </Series.Sequence>

        {/* 2H: Open Weights Frontier Comparison (8350 - 8700 / 278.3s - 290.0s) */}
        <Series.Sequence durationInFrames={350}>
          <SiliconMoatBreakthrough />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 3: OPENAI'S DILEMMA — GPT-6 SOL, ASTRA & AGENT CONTAINMENT (8700 - 11500 frames) */}
        {/* ========================================================================= */}

        {/* 3A: DeepSWE v1.1 Benchmarks: GPT-6 Sol 68.8% (8700 - 9200 / 290.0s - 306.6s) */}
        <Series.Sequence durationInFrames={500}>
          <DeepSweSolBenchmark />
        </Series.Sequence>

        {/* 3B: OpenAI Astra Heavy Reinforcement Learning Aerodynamics (9200 - 9750 / 306.6s - 325.0s) */}
        <Series.Sequence durationInFrames={550}>
          <FullScreenVideoView videoSrc="evidence/f1_astra_cedric.mp4" />
        </Series.Sequence>

        {/* 3C: Cedric Chee Astra F1 Tweet Breakdown (9750 - 10300 / 325.0s - 343.3s) */}
        <Series.Sequence durationInFrames={550}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/f1_astra_cedric_desktop.png"
            scrollRatio={0.35}
          />
        </Series.Sequence>

        {/* 3D: Autonomous Agent External Network Disclosures (10300 - 10850 / 343.3s - 361.6s) */}
        <Series.Sequence durationInFrames={550}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/stealth_strategy_sahil_desktop.png"
            scrollRatio={0.35}
          />
        </Series.Sequence>

        {/* 3E: Formal Recursive Math & Closed Ecosystem Moat (10850 - 11500 / 361.6s - 383.3s) */}
        <Series.Sequence durationInFrames={650}>
          <FormalMathVerificationTree />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 4: TEST-TIME COMPUTE & REPEATED SAMPLING BREAKTHROUGH (11500 - 13800 frames) */}
        {/* ========================================================================= */}

        {/* 4A: Stanford Large Language Monkeys & Swarm Japan Research (11500 - 12200 / 383.3s - 406.6s) */}
        <Series.Sequence durationInFrames={700}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/swarm_japan_test_time_desktop.png"
            scrollRatio={0.35}
          />
        </Series.Sequence>

        {/* 4B: Multi-Sample Algorithmic Verification Loop (12200 - 12900 / 406.6s - 430.0s) */}
        <Series.Sequence durationInFrames={700}>
          <NeuralFlowCanvas />
        </Series.Sequence>

        {/* 4C: ARC-AGI-2 & SWE-bench Iterative Scaling Sheet (12900 - 13800 / 430.0s - 460.0s) */}
        <Series.Sequence durationInFrames={900}>
          <SmoothScrollingDocumentView
            mediaSrc="evidence/screenshots/arc_agi_score_rudra_desktop.png"
            scrollRatio={0.3}
          />
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 5: THE LMSYS ARENA PELICAN PREVIEW & THE NEW FRONTIER (13800 - 15688 frames) */}
        {/* ========================================================================= */}

        {/* 5A: Pelican LMSYS Arena Checkpoint Preview (13800 - 14300 / 460.0s - 476.6s) */}
        <Series.Sequence durationInFrames={500}>
          <FullScreenVideoView videoSrc="evidence/arena_checkpoint_lumina.mp4" />
        </Series.Sequence>

        {/* 5B: 3D Spatial Neural World Simulation (14300 - 14800 / 476.6s - 493.3s) */}
        <Series.Sequence durationInFrames={500}>
          <FullScreenVideoView videoSrc="evidence/mechanical_butterfly_thtbee.mp4" />
        </Series.Sequence>

        {/* 5C: The War in Production Registries (14800 - 15300 / 493.3s - 510.0s) */}
        <Series.Sequence durationInFrames={500}>
          <FullScreenMediaView mediaSrc="evidence/sonnet55_registry_lumina_raw_1.png" />
        </Series.Sequence>

        {/* 5D: Grand Finale — Multi-Polar Supercomputing Era (15300 - 15688 / 510.0s - 522.9s) */}
        <Series.Sequence durationInFrames={388}>
          <FullScreenMediaView mediaSrc="evidence/deepseek_v5_sufian_raw_1.jpg" />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
