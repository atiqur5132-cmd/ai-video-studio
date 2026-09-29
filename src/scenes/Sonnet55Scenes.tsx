import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { EvidenceDossierView } from "../components/EvidenceDossierView";
import { KineticPunchText } from "../components/KineticPunchText";
import { SpeedometerGauge } from "../components/SpeedometerGauge";
import { SiliconDieSchematic } from "../components/SiliconDieSchematic";
import { OfficialLogoBadge } from "../components/OfficialLogoBadge";
import { PokemonRedVisualizer } from "../components/PokemonRedVisualizer";
import { AdaptiveThinkingVisualizer } from "../components/AdaptiveThinkingVisualizer";
import { GodStackVisualizer } from "../components/GodStackVisualizer";
import { SonnetBenchmarkArena } from "../components/SonnetBenchmarkArena";
import { YouTubeSubscribeOverlay } from "../components/YouTubeSubscribeOverlay";

export const Sonnet55Scenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Series>
        {/* ========================================================================= */}
        {/* ACT 1: THE FLAGSHIP TAX & SUDDEN DISMANTLING (Frames 0 - 1112)            */}
        {/* ========================================================================= */}

        {/* Seg 0: "In the world of frontier artificial intelligence, there has always been an unwritten rule." (0 - 153 / 153f) */}
        <Series.Sequence durationInFrames={153}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <OfficialLogoBadge logo="anthropic" size={130} label="ANTHROPIC AI" sublabel="FRONTIER REASONING LAB" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["UNWRITTEN", "FRONTIER", "RULE"]} accentColor="#f97316" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 1: "If you want the absolute highest level of autonomous reasoning," (153 - 248 / 95f) */}
        <Series.Sequence durationInFrames={95}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <SpeedometerGauge value={100} maxValue={100} label="AUTONOMOUS REASONING" unit="%" color="#00f0ff" size={320} />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MAXIMUM", "REASONING", "POWER"]} accentColor="#00f0ff" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 2: "you have to pay the flagship tax. Six days ago," (248 - 346 / 98f) */}
        <Series.Sequence durationInFrames={98}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <SpeedometerGauge value={400} maxValue={500} label="FLAGSHIP TAX" unit="$/M" color="#ef4444" size={320} />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THE", "FLAGSHIP", "TAX"]} accentColor="#ef4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 3: "Anthropic Crowned Claude Opus 5.5 as the undisputed king of software engineering," (346 - 491 / 145f) */}
        <Series.Sequence durationInFrames={145}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(217, 119, 87, 0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <OfficialLogoBadge logo="claude" size={140} label="CLAUDE OPUS 5.5" sublabel="KING OF CODE • $4/$20" glowColor="rgba(217, 119, 87, 0.8)" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["OPUS", "5.5", "CROWNED"]} accentColor="#d97757" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 4: "commanding a premium price tag of $4 per million input tokens and $20 per million output." (491 - 653 / 162f) */}
        <Series.Sequence durationInFrames={162}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <div style={{ display: "flex", gap: 60, alignItems: "center" }}>
              <SpeedometerGauge value={4} maxValue={10} label="INPUT TOKENS" unit="$/M" color="#f97316" size={290} />
              <SpeedometerGauge value={20} maxValue={30} label="OUTPUT TOKENS" unit="$/M" color="#ef4444" size={290} />
            </div>
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["$4 / $20", "PREMIUM", "PRICING"]} accentColor="#f97316" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 5: "Developers assumed the hierarchy was set in stone for the rest of the year." (653 - 775 / 122f) */}
        <Series.Sequence durationInFrames={122}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <SiliconDieSchematic color="#6366f1" label="HIERARCHY LOCKED IN STONE" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HIERARCHY", "LOCKED", "IN"]} accentColor="#6366f1" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 6: "Then, without warning, anthropic dropped Claude Sonnet 5.5." (775 - 927 / 152f) */}
        <Series.Sequence durationInFrames={152}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/01_anthropic_launch_page.png"
            glowColor="#00f0ff"
            badgeLabel="ANTHROPIC OFFICIAL • BREAKING ANNOUNCEMENT"
            badgeStatus="SONNET 5.5 DROPPED"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SONNET", "5.5", "DROPPED"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 7: "And in less than 24 hours, this mid-tier workhorse completely dismantled its own flagship." (927 - 1112 / 185f) */}
        <Series.Sequence durationInFrames={185}>
          <SonnetBenchmarkArena mode="terminal" />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["DISMANTLES", "OWN", "FLAGSHIP"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 2: TERMINAL SHOCK & BENCHMARK CARNAGE (Frames 1112 - 4104)            */}
        {/* ========================================================================= */}

        {/* Seg 8: "Look at the benchmark that broke developer Twitter." (1112 - 1210 / 98f) */}
        <Series.Sequence durationInFrames={98}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/02_vladic_terminal_70.png"
            glowColor="#38bdf8"
            badgeLabel="DEVELOPER TWITTER • SHOCKWAVE"
            badgeStatus="TERMINAL-BENCH 4.0"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["TERMINAL-BENCH", "4.0", "SHOCK"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* Seg 9: "Terminal Bench 4.0. Unlike synthetic question answering tests," (1210 - 1331 / 121f) */}
        <Series.Sequence durationInFrames={121}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <SiliconDieSchematic color="#38bdf8" label="TERMINAL BENCH EVALUATOR" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["NOT", "SYNTHETIC", "TESTS"]} accentColor="#38bdf8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 10: "Terminal Bench evaluates whether an AI model can autonomously navigate a live command line" (1331 - 1456 / 125f) */}
        <Series.Sequence durationInFrames={125}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/08_dan_mcateer_claudecode.png"
            glowColor="#00f0ff"
            badgeLabel="LIVE COMMAND LINE INTERFACE"
            badgeStatus="CLAUDE CODE CLI"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["LIVE", "COMMAND", "LINE"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 11: "terminal chain shell commands, inspect directories, and resolve complex software engineering bugs" (1456 - 1611 / 155f) */}
        <Series.Sequence durationInFrames={155}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <SiliconDieSchematic color="#10b981" label="DIRECTORY BUG RESOLUTION" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["CHAIN", "SHELL", "COMMANDS"]} accentColor="#10b981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 12: "across hundreds of lines of code without human intervention." (1611 - 1709 / 98f) */}
        <Series.Sequence durationInFrames={98}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/04_cline_coding_agent.png"
            glowColor="#a855f7"
            badgeLabel="AUTONOMOUS REFACTORING SUITE"
            badgeStatus="ZERO HUMAN OVERRIDE"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ZERO", "HUMAN", "INTERVENTION"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* Seg 13: "On this exact benchmark, the previous generation Claude Sonnet 5 scored a modest 10.3%." (1709 - 1882 / 173f) */}
        <Series.Sequence durationInFrames={173}>
          <SonnetBenchmarkArena mode="terminal" />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SONNET", "5:", "10.3%"]} accentColor="#64748b" />
          </div>
        </Series.Sequence>

        {/* Seg 14: "Claude Sonnet 5.5 just scored 70.6%. That is not an incremental 3% upgrade." (1882 - 2116 / 234f) */}
        <Series.Sequence durationInFrames={234}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/01b_anthropic_benchmark_table.png"
            glowColor="#00f0ff"
            badgeLabel="ANTHROPIC VERIFIED BENCHMARKS"
            badgeStatus="70.6% TERMINAL-BENCH"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["70.6%", "TERMINAL", "SCORE"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 15: "That is a staggering seven-fold leap in autonomous terminal execution." (2116 - 2249 / 133f) */}
        <Series.Sequence durationInFrames={133}>
          <SonnetBenchmarkArena mode="terminal" />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SEVEN-FOLD", "AUTONOMOUS", "LEAP"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 16: "Even more humiliating for the competition, the flagship Claude Opus 5.5," (2249 - 2385 / 136f) */}
        <Series.Sequence durationInFrames={136}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/03_aa_terminal_bench.png"
            glowColor="#f97316"
            badgeLabel="ARTIFICIAL ANALYSIS MATRIX"
            badgeStatus="OPUS 5.5 TRAILING"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["OPUS", "5.5", "TRAILING"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>

        {/* Seg 17: "which costs exactly double, scored 66.4% on the same test." (2385 - 2551 / 166f) */}
        <Series.Sequence durationInFrames={166}>
          <SonnetBenchmarkArena mode="terminal" />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["66.4%", "OPUS", "DEFEATED"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>

        {/* Seg 18: "At $2 per million input tokens, a mid-tier model just humiliated Anthropic's own" (2551 - 2706 / 155f) */}
        <Series.Sequence durationInFrames={155}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/12_mohamed_pricing.png"
            glowColor="#10b981"
            badgeLabel="HALF-PRICE ARBITRAGE"
            badgeStatus="$2 VS $4"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["$2", "BEATS", "$4"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 19: "multi-million-dollar flagship inside the developer terminal." (2706 - 2814 / 108f) */}
        <Series.Sequence durationInFrames={108}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <SiliconDieSchematic color="#00f0ff" label="TERMINAL ARBITRAGE MATRIX" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["FLAGSHIP", "HUMILIATED", "INSIDE"]} accentColor="#00f0ff" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 20: "And the architectural leaps do not stop at code syntax." (2814 - 2919 / 105f) */}
        <Series.Sequence durationInFrames={105}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/05_genelab_all_benchmarks.png"
            glowColor="#a855f7"
            badgeLabel="GENELAB COMPREHENSIVE SUITE"
            badgeStatus="BEYOND CODE SYNTAX"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["BEYOND", "CODE", "SYNTAX"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* Seg 21: "On the OS world 2.1 benchmark, which tests an agent's ability to operate an entire desktop" (2919 - 3088 / 169f) */}
        <Series.Sequence durationInFrames={169}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/05_genelab_all_benchmarks.png"
            glowColor="#a855f7"
            badgeLabel="OSWORLD 2.1 BENCHMARK"
            badgeStatus="DESKTOP AGENT"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["OSWORLD", "2.1", "DESKTOP"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* Seg 22: "operating system using mouse clicks and keyboard events," (3088 - 3194 / 106f) */}
        <Series.Sequence durationInFrames={106}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <SiliconDieSchematic color="#a855f7" label="MOUSE & KEYBOARD EVENTS" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MOUSE", "AND", "KEYBOARD"]} accentColor="#a855f7" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 23: "Sonnet 5.5 leaped from 57% to 80.1%. On chartography, visual chart comprehension" (3194 - 3396 / 202f) */}
        <Series.Sequence durationInFrames={202}>
          <SonnetBenchmarkArena mode="multimodal" />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["80.1%", "DESKTOP", "MASTERY"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* Seg 24: "jumped from 15.6% to 61.6%. And in real-world professional knowledge work," (3396 - 3598 / 202f) */}
        <Series.Sequence durationInFrames={202}>
          <SonnetBenchmarkArena mode="multimodal" />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["61.6%", "CHART", "VISION"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* Seg 25: "evaluated on the GDFALAA benchmark, Sonnet 5.5 reached an ELO rating of 1844, landing just two" (3598 - 3852 / 254f) */}
        <Series.Sequence durationInFrames={254}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/01b_anthropic_benchmark_table.png"
            glowColor="#10b981"
            badgeLabel="GDPVAL KNOWLEDGE WORK BENCHMARK"
            badgeStatus="1844 ELO SCORE"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["1844", "GDPVAL", "ELO"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 26: "points below Opus 5.5. Then came the visual demonstration that caught the entire research" (3852 - 4018 / 166f) */}
        <Series.Sequence durationInFrames={166}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/01b_anthropic_benchmark_table.png"
            glowColor="#f97316"
            badgeLabel="CLOSE PROXIMITY TO OPUS"
            badgeStatus="JUST 2 POINTS BELOW"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["TWO", "POINTS", "BELOW"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>

        {/* Seg 27: "community off-guard, Pokémon Red." (4018 - 4104 / 86f) */}
        <Series.Sequence durationInFrames={86}>
          <PokemonRedVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["POKÉMON", "RED", "SURPRISE"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 3: POKÉMON RED FEAT & INDEPENDENT ARENA (Frames 4104 - 6215)          */}
        {/* ========================================================================= */}

        {/* Seg 28: "Anthropic confirmed that Sonnet 5.5 is the first model in the Sonnet family capable of" (4104 - 4243 / 139f) */}
        <Series.Sequence durationInFrames={139}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/11_kisalay_pokemon_red.png"
            glowColor="#10b981"
            badgeLabel="KISALAY EVIDENCE REPORT"
            badgeStatus="POKEMON RED BEATEN"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["BEATS", "POKÉMON", "RED"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 29: "beating the classic game Pokémon Red from start to finish, using nothing but raw visual screenshots" (4243 - 4396 / 153f) */}
        <Series.Sequence durationInFrames={153}>
          <PokemonRedVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["START", "TO", "FINISH"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 30: "as input, no hard-coded text prompts, no memory injection, and no symbolic game state," (4396 - 4600 / 204f) */}
        <Series.Sequence durationInFrames={204}>
          <PokemonRedVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["NO", "MEMORY", "HACKS"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* Seg 31: "just raw pixel perception, spatial memory, and long horizon planning." (4600 - 4740 / 140f) */}
        <Series.Sequence durationInFrames={140}>
          <PokemonRedVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["RAW", "PIXEL", "PERCEPTION"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 32: "Naturally, the immediate question from developers was whether these corporate numbers hold up" (4740 - 4882 / 142f) */}
        <Series.Sequence durationInFrames={142}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/06_openlm_chatbot_arena.png"
            glowColor="#00f0ff"
            badgeLabel="COMMUNITY SCRUTINY"
            badgeStatus="INDEPENDENT VERIFICATION"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["INDEPENDENT", "DEVELOPER", "VERIFICATION"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 33: "under independent scrutiny. When Chatbot Arena and OpenLM process the first wave of blind" (4882 - 5039 / 157f) */}
        <Series.Sequence durationInFrames={157}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/06_openlm_chatbot_arena.png"
            glowColor="#00f0ff"
            badgeLabel="LMSYS CHATBOT ARENA • OPENLM"
            badgeStatus="BLIND EVALUATION"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["BLIND", "COMMUNITY", "BATTLES"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 34: "community battles, Claude Sonnet 5.5 posted an ELO score of 1521. To put that into perspective," (5039 - 5265 / 226f) */}
        <Series.Sequence durationInFrames={226}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/06_openlm_chatbot_arena.png"
            glowColor="#10b981"
            badgeLabel="ARENA LEADERBOARD VERDICT"
            badgeStatus="1521 ELO OFFICIAL"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["1521", "ARENA", "ELO"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 35: "OpenAI's GPT-6 astrocytes at 1520, while Claude Opus 5.5 leads at 1528," (5265 - 5500 / 235f) */}
        <Series.Sequence durationInFrames={235}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/07_aa_intelligence_index.png"
            glowColor="#f97316"
            badgeLabel="FRONTIER WEIGHT COMPARISON"
            badgeStatus="BEATS GPT-6 (1520)"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["BEATS", "GPT-6", "ASTRA"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>

        {/* Seg 36: "Anthropic has effectively placed a $2 model right next to the most expensive frontier weights on the" (5500 - 5666 / 166f) */}
        <Series.Sequence durationInFrames={166}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/12_mohamed_pricing.png"
            glowColor="#00f0ff"
            badgeLabel="$2 VS MOST EXPENSIVE WEIGHTS"
            badgeStatus="FRONTIER PARITY"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["$2", "FRONTIER", "PARITY"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 37: "planet. On the artificial analysis intelligence index, Sonnet 5.5 scored 56 points, jumping 18" (5666 - 5875 / 209f) */}
        <Series.Sequence durationInFrames={209}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/07_aa_intelligence_index.png"
            glowColor="#a855f7"
            badgeLabel="ARTIFICIAL ANALYSIS INTELLIGENCE INDEX"
            badgeStatus="56 POINTS (+18 JUMP)"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["#2", "GLOBAL", "INDEX"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* Seg 38: "points over Sonnet 5, and securing the number two spot globally, right behind Opus 5.5 max." (5875 - 6073 / 198f) */}
        <Series.Sequence durationInFrames={198}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/03_aa_terminal_bench.png"
            glowColor="#a855f7"
            badgeLabel="GLOBAL INTELLIGENCE RANKING"
            badgeStatus="SECOND ONLY TO OPUS"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SECOND", "ONLY", "OPUS"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* Seg 39: "Beyond leaderboards, the real verdict is being written inside developer terminals." (6073 - 6215 / 142f) */}
        <Series.Sequence durationInFrames={142}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <SiliconDieSchematic color="#00f0ff" label="DEVELOPER TERMINAL VERDICT" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["REAL", "TERMINAL", "VERDICT"]} accentColor="#00f0ff" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 4: DEVELOPER TESTING & ENTERPRISE CASE STUDIES (Frames 6215 - 8604)    */}
        {/* ========================================================================= */}

        {/* Seg 40: "Developer Dan McIntir deployed Sonnet 5.5 inside Claude code, Anthropic's native command line" (6215 - 6403 / 188f) */}
        <Series.Sequence durationInFrames={188}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/08_dan_mcateer_claudecode.png"
            glowColor="#00f0ff"
            badgeLabel="DAN MCATEER • PRODUCTION DEPLOYMENT"
            badgeStatus="CLAUDE CODE CLI"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CLAUDE", "CODE", "CLI"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 41: "agent. His immediate reaction, Claude is officially back. The model executed" (6403 - 6569 / 166f) */}
        <Series.Sequence durationInFrames={166}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/08_dan_mcateer_claudecode.png"
            glowColor="#10b981"
            badgeLabel="FIELD VERDICT"
            badgeStatus="'CLAUDE IS OFFICIALLY BACK'"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CLAUDE", "OFFICIALLY", "BACK"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 42: "multi-file refactors with near-instant streaming, demonstrating reasoning capabilities practically" (6569 - 6731 / 162f) */}
        <Series.Sequence durationInFrames={162}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <SiliconDieSchematic color="#00f0ff" label="MULTI-FILE REFACTORING ENGINE" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["INSTANT", "STREAMING", "REFACTOR"]} accentColor="#00f0ff" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 43: "indistinguishable from Opus at half the operational cost. Autonomous coding platform" (6731 - 6881 / 150f) */}
        <Series.Sequence durationInFrames={150}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <SiliconDieSchematic color="#10b981" label="OPUS REASONING AT HALF COST" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["OPUS", "GRADE", "REASONING"]} accentColor="#10b981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 44: "client immediately rolled out day one support for Sonnet 5.5, noting that the model generates" (6881 - 7045 / 164f) */}
        <Series.Sequence durationInFrames={164}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/04_cline_coding_agent.png"
            glowColor="#38bdf8"
            badgeLabel="CLINE CODING AGENT"
            badgeStatus="DAY ONE PRODUCTION SUPPORT"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["CLINE", "DAY", "ONE"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* Seg 45: "output over 30% faster while drastically cutting down redundant reasoning loops." (7045 - 7185 / 140f) */}
        <Series.Sequence durationInFrames={140}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/04_cline_coding_agent.png"
            glowColor="#10b981"
            badgeLabel="SPEED BENCHMARK"
            badgeStatus="+30% FASTER EXECUTION"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["30%", "FASTER", "OUTPUT"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 46: "And in enterprise production, application builder base 44 ran a rigorous study across" (7185 - 7342 / 157f) */}
        <Series.Sequence durationInFrames={157}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/09_base44_enterprise_study.png"
            glowColor="#f97316"
            badgeLabel="BASE44 ENTERPRISE STUDY"
            badgeStatus="118 APPLICATION BUILDS"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["118", "APP", "BUILDS"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>

        {/* Seg 47: "118 full application builds. On previous generation Opus 5, an autonomous build required an average" (7342 - 7543 / 201f) */}
        <Series.Sequence durationInFrames={201}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/09_base44_enterprise_study.png"
            glowColor="#ef4444"
            badgeLabel="PREVIOUS OPUS 5 FAILURE RATE"
            badgeStatus="7.7 RETRIES AVERAGE"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["7.7", "MANUAL", "RETRIES"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* Seg 48: "of 7.7 manual retries and debugging loops to complete. On Sonnet 5.5, that retry count" (7543 - 7748 / 205f) */}
        <Series.Sequence durationInFrames={205}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/09_base44_enterprise_study.png"
            glowColor="#10b981"
            badgeLabel="SONNET 5.5 BREAKTHROUGH"
            badgeStatus="RECORD LOW RETRIES"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["RECORD", "LOW", "RETRIES"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 49: "collapsed to an all-time record low, saving developers hours of frustrating troubleshooting." (7748 - 7891 / 143f) */}
        <Series.Sequence durationInFrames={143}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <SiliconDieSchematic color="#10b981" label="HOURS SAVED IN DEBUGGING" />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HOURS", "SAVED", "DEBUGGING"]} accentColor="#10b981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 50: "Even in front-end design, developer Miradify pitted Sonnet 5.5 against Opus 5.5 on identical" (7891 - 8093 / 202f) */}
        <Series.Sequence durationInFrames={202}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/10_muratify_ui_comparison.png"
            glowColor="#a855f7"
            badgeLabel="MURATIFY FRONT-END ARENA"
            badgeStatus="SONNET 5.5 VS OPUS 5.5"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["FRONT-END", "UI", "ARENA"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* Seg 51: "prompts to generate complex interactive web applications. Sonnet 5.5 produced modern tailwind" (8093 - 8273 / 180f) */}
        <Series.Sequence durationInFrames={180}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/10_muratify_ui_comparison.png"
            glowColor="#00f0ff"
            badgeLabel="INTERACTIVE WEB APPLICATION"
            badgeStatus="IDENTICAL SYSTEM PROMPT"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["IDENTICAL", "PROMPT", "TEST"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 52: "styling, responsive mobile layouts, and functional state management that went toe-to-toe with the" (8273 - 8438 / 165f) */}
        <Series.Sequence durationInFrames={165}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/10_muratify_ui_comparison.png"
            glowColor="#10b981"
            badgeLabel="DESIGN QUALITY"
            badgeStatus="TAILWIND & RESPONSIVE STATE"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["TAILWIND", "RESPONSIVE", "STATE"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 53: "flagship. This brings us to the most brilliant engineering feat of this release, the economics." (8438 - 8604 / 166f) */}
        <Series.Sequence durationInFrames={166}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/10_muratify_ui_comparison.png"
            glowColor="#00f0ff"
            badgeLabel="TOE-TO-TOE WITH FLAGSHIP"
            badgeStatus="THE ECONOMICS"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["TOE-TO-TOE", "WITH", "FLAGSHIP"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 5: TOKEN ECONOMICS & ADAPTIVE THINKING (Frames 8604 - 10600)          */}
        {/* ========================================================================= */}

        {/* Seg 54: "If you look at Anthropic's pricing sheet, the sticker price appears unchanged, $2 per million" (8604 - 8798 / 194f) */}
        <Series.Sequence durationInFrames={194}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/12_mohamed_pricing.png"
            glowColor="#38bdf8"
            badgeLabel="ANTHROPIC OFFICIAL PRICING"
            badgeStatus="$2 INPUT / $10 OUTPUT"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["$2 / $10", "STICKER", "PRICE"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* Seg 55: "input tokens, $10 per million output, and $0.20 for prompt cache reads, yet Anthropic claims" (8798 - 9007 / 209f) */}
        <Series.Sequence durationInFrames={209}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/12_mohamed_pricing.png"
            glowColor="#10b981"
            badgeLabel="CACHE READ DISCOUNT"
            badgeStatus="$0.20 PROMPT CACHING"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["$0.20", "CACHE", "READS"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 56: "that running Sonnet 5.5 will reduce your actual task bill by up to 30%. How can a model be 30%" (9007 - 9214 / 207f) */}
        <Series.Sequence durationInFrames={207}>
          <AdaptiveThinkingVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["30%", "BILL", "REDUCTION"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* Seg 57: "cheaper without cutting prices? The secret lies in adaptive thinking and token pruning." (9214 - 9368 / 154f) */}
        <Series.Sequence durationInFrames={154}>
          <AdaptiveThinkingVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ADAPTIVE", "THINKING", "PRUNING"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 58: "Previous frontier models often burned thousands of tokens wandering through verbose," (9368 - 9525 / 157f) */}
        <Series.Sequence durationInFrames={157}>
          <AdaptiveThinkingVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["VERBOSE", "RECURSIVE", "WASTE"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* Seg 59: "recursive thinking loops before arriving at a simple solution. With Sonnet 5.5," (9525 - 9694 / 169f) */}
        <Series.Sequence durationInFrames={169}>
          <AdaptiveThinkingVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["THOUSANDS", "TOKENS", "WASTED"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* Seg 60: "Anthropic refined the internal thinking architecture so the model reaches verified conclusions in" (9694 - 9844 / 150f) */}
        <Series.Sequence durationInFrames={150}>
          <AdaptiveThinkingVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["INTERNAL", "THINKING", "REFINED"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* Seg 61: "significantly fewer reasoning steps. Because it uses 30% fewer tokens to accomplish the same task," (9844 - 10027 / 183f) */}
        <Series.Sequence durationInFrames={183}>
          <AdaptiveThinkingVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["FEWER", "REASONING", "STEPS"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 62: "your effective cost per feature drops by 30%, all while streaming answers 30% faster," (10027 - 10203 / 176f) */}
        <Series.Sequence durationInFrames={176}>
          <AdaptiveThinkingVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["EFFECTIVE", "COST", "-30%"]} accentColor="#10b981" />
          </div>
        </Series.Sequence>

        {/* Seg 63: "packaged with a massive 1 million token context window, a 128,000 token maximum output limit," (10203 - 10390 / 187f) */}
        <Series.Sequence durationInFrames={187}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/13_botnews_asl3.png"
            glowColor="#a855f7"
            badgeLabel="CONTEXT ENVELOPE"
            badgeStatus="1,000,000 TOKEN CONTEXT"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["1M", "TOKEN", "CONTEXT"]} accentColor="#a855f7" />
          </div>
        </Series.Sequence>

        {/* Seg 64: "and enterprise-grade ASL 3-cyber safeguards, Sonnet 5.5 represents a ruthless strategic strike." (10390 - 10600 / 210f) */}
        <Series.Sequence durationInFrames={210}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/13_botnews_asl3.png"
            glowColor="#ef4444"
            badgeLabel="ENTERPRISE DEFENSE"
            badgeStatus="ASL-3 CYBER SHIELDS"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["ASL-3", "CYBER", "SAFEGUARDS"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* ========================================================================= */}
        {/* ACT 6: GEOPOLITICS, THE GODSTACK & OUTRO (Frames 10600 - 11792)            */}
        {/* ========================================================================= */}

        {/* Seg 65: "Anthropic CEO Dario Amade often speaks about the necessity of safety and slowing down" (10600 - 10741 / 141f) */}
        <Series.Sequence durationInFrames={141}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/14_milkroad_dario.png"
            glowColor="#f97316"
            badgeLabel="DARIO AMODEI • AI SAFETY PHILOSOPHY"
            badgeStatus="PARADOX OF SPEED"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["DARIO", "AMODEI", "SAFETY"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>

        {/* Seg 66: "uncontrolled AI scaling, yet Anthropic just dropped two industry-defining frontier models" (10741 - 10892 / 151f) */}
        <Series.Sequence durationInFrames={151}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/14_milkroad_dario.png"
            glowColor="#f97316"
            badgeLabel="TWO FRONTIER RELEASES"
            badgeStatus="IN 6 DAYS"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["TWO", "MODELS", "6 DAYS"]} accentColor="#f97316" />
          </div>
        </Series.Sequence>

        {/* Seg 67: "in the span of six days, preemptively stealing the spotlight right before OpenAI takes the stage" (10892 - 11062 / 170f) */}
        <Series.Sequence durationInFrames={170}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/14_milkroad_dario.png"
            glowColor="#ef4444"
            badgeLabel="STRATEGIC AMBUSH"
            badgeStatus="STEALING OPENAI DEVDAY"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["STEALING", "DEVDAY", "SPOTLIGHT"]} accentColor="#ef4444" />
          </div>
        </Series.Sequence>

        {/* Seg 68: "at dev-day. So what is the final verdict for engineers and builders?" (11062 - 11199 / 137f) */}
        <Series.Sequence durationInFrames={137}>
          <GodStackVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["THE", "FINAL", "VERDICT"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 69: "The consensus among elite developers is already solidifying into what many are calling the" (11199 - 11317 / 118f) */}
        <Series.Sequence durationInFrames={118}>
          <EvidenceDossierView
            mediaSrc="evidence/sonnet55/15_navayuvan_godstack.png"
            glowColor="#00f0ff"
            badgeLabel="NAVAYUVAN ANALYSIS"
            badgeStatus="THE GODSTACK"
          />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["THE", "DEVELOPER", "GODSTACK"]} accentColor="#00f0ff" />
          </div>
        </Series.Sequence>

        {/* Seg 70: "Godstack. Use Claude Opus 5.5 as the high-level system architect for complex planning and critical" (11317 - 11473 / 156f) */}
        <Series.Sequence durationInFrames={156}>
          <GodStackVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["OPUS", "SYSTEM", "ARCHITECT"]} accentColor="#d97757" />
          </div>
        </Series.Sequence>

        {/* Seg 71: "audits, but route all daily coding, bug-fixing, terminal execution, and UI workflows through" (11473 - 11637 / 164f) */}
        <Series.Sequence durationInFrames={164}>
          <GodStackVisualizer />
          <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
            <KineticPunchText words={["SONNET", "DAILY", "WORKHORSE"]} accentColor="#38bdf8" />
          </div>
        </Series.Sequence>

        {/* Seg 72: "Sonnet 5.5. Claude Sonnet 5.5 is available right now on Claude.ai..." (11637 - 11792 / 155f) */}
        <Series.Sequence durationInFrames={155}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#030712" }}>
            <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(0, 240, 255, 0.18) 0%, transparent 70%)", filter: "blur(70px)" }} />
            <OfficialLogoBadge logo="claude" size={130} label="CLAUDE SONNET 5.5" sublabel="AVAILABLE NOW • CLAUDE.AI" glowColor="rgba(0, 240, 255, 0.8)" />
            <YouTubeSubscribeOverlay startFrame={0} durationInFrames={155} />
            <div style={{ position: "absolute", bottom: 60, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SONNET", "5.5", "LIVE"]} accentColor="#00f0ff" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
