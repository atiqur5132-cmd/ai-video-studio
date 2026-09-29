import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { YouTubeUI } from "../components/YouTubeUI";
import { Isometric3DPlayBlock } from "../components/Isometric3DPlayBlock";
import { Isometric3DPipeline } from "../components/Isometric3DPipeline";
import { Geometric3DFunnel } from "../components/Geometric3DFunnel";
import { Isometric3DBalanceScale } from "../components/Isometric3DBalanceScale";
import { Rotating3DCreatorCore } from "../components/Rotating3DCreatorCore";
import { Isometric3DShieldVault } from "../components/Isometric3DShieldVault";
import { Isometric3DEconomicCascade } from "../components/Isometric3DEconomicCascade";
import { HumanValuePillars } from "../components/HumanValuePillars";
import { FinalVerdictScene } from "../components/FinalVerdictScene";
import { SourcesRoll } from "../components/SourcesRoll";
import { KineticPunchText } from "../components/KineticPunchText";
import { SpeedometerGauge } from "../components/SpeedometerGauge";
import { OfficialLogoBadge } from "../components/OfficialLogoBadge";
import { SiliconDieSchematic } from "../components/SiliconDieSchematic";
import { DocumentHighlighter } from "../components/DocumentHighlighter";
import { RealTweetCard } from "../components/RealTweetCard";
import { WorkflowComparison } from "../components/WorkflowComparison";

export const AiYouTubeDocScenes: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#020408" }}>
      <Series>

        {/* Seg 0: "Imagine waking up tomorrow and discovering that ha..." (0 - 178 / 178f) */}
        <Series.Sequence durationInFrames={178}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DPlayBlock badgeText="SYNTHETIC FLOOD AUDIT" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HALF", "OF", "YOUTUBE", "SYNTHETIC"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 1: "Noka Meras, no real lighting, no human voices reco..." (178 - 368 / 190f) */}
        <Series.Sequence durationInFrames={190}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeUI title="Zero Cameras, Zero Humans: Autonomous AI Feed" creatorName="Synthetic Media Bot" views="1.4M views" timeAgo="2 hours ago" showAiBadge={true} aiBadgeText="100% Synthetic • Zero Cameras • Zero Humans" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ZERO", "CAMERAS", "ZERO", "HUMANS"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 2: "just an automated script running on a cloud server..." (368 - 550 / 182f) */}
        <Series.Sequence durationInFrames={182}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic label="AUTONOMOUS CLOUD SERVER SCRIPT" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["TWENTY", "VIDEOS", "EVERY", "MINUTE"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 3: "publishing them directly into your recommendation ..." (550 - 697 / 147f) */}
        <Series.Sequence durationInFrames={147}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={98} maxValue={100} label="UPLOAD VELOCITY" unit="x" color="#F59E0B" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["INDUSTRIALIZED", "VIDEO", "SCALE"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 4: "generative artificial intelligence did not just en..." (697 - 874 / 177f) */}
        <Series.Sequence durationInFrames={177}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <WorkflowComparison activeMode="ai" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["INDUSTRIALIZING", "ONLINE", "VIDEO"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 5: "Hundreds of channels are now generating thousands ..." (874 - 1031 / 157f) */}
        <Series.Sequence durationInFrames={157}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="INDUSTRY AUDIT" docTitle="The Synthetic Video Deluge" sourceUrl="techcrunch.com/2026/08/ai-video-flood" dateBadge="AUGUST 2026" preText="Investigation confirms that thousands of newly registered channels are" highlightText="generating over 10,000 synthetic videos every single day" postText="using autonomous multimodal generation pipelines without human intervention." statBadge={{ label: "DAILY INGESTION", value: "10K+ UPLOADS" }} highlightColor="#EF4444" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THOUSANDS", "SYNTHETIC", "UPLOADS"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 6: "voice clones indistinguishable from real narrators..." (1031 - 1229 / 198f) */}
        <Series.Sequence durationInFrames={198}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <RealTweetCard authorName="Colin and Samir" authorHandle="colinandsamir" avatarText="CS" avatarBg="#EF4444" dateStr="Aug 2026" tweetText="AI voice clones and automated avatars are silently taking over entire YouTube categories. Most viewers have no idea they are watching 100% synthetic media." highlightedText="taking over entire YouTube categories" stats={{ replies: "842", reposts: "3.2K", likes: "28K", views: "1.4M" }} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["VOICE", "CLONES", "EVERYWHERE"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 7: "algorithmic scripts designed to capture search tra..." (1229 - 1390 / 161f) */}
        <Series.Sequence durationInFrames={161}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeUI title="Search Traffic Ad Farm Simulation" creatorName="Keyword Ingestion Bot" views="2.4M views" timeAgo="3 hours ago" showAiBadge={true} aiBadgeText="Automated AI Script • Synthetic Voice" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["AUTOMATED", "AD", "HARVESTING"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 8: "which brings us to the question that creators, pla..." (1390 - 1506 / 116f) */}
        <Series.Sequence durationInFrames={116}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="youtube" size={140} label="THE CENTRAL QUESTION" sublabel="QUIET INDUSTRY DEBATE" glowColor="rgba(56, 189, 248, 0.8)" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["QUIETLY", "ASKING", "THE", "QUESTION"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 9: "and studio executives are all quietly asking, did ..." (1506 - 1700 / 194f) */}
        <Series.Sequence durationInFrames={194}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <FinalVerdictScene phase={1} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["DID", "AI", "KILL", "YOUTUBE?"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 10: "But something much bigger may have changed. To und..." (1700 - 1850 / 150f) */}
        <Series.Sequence durationInFrames={150}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="PLATFORM ANALYSIS" docTitle="The Great Digital Paradigm Shift" sourceUrl="theverge.com/features/youtube-ai-shift" dateBadge="MID 2026" preText="YouTube is not dying, but the foundational economics of video creation" highlightText="have permanently shifted from production friction to attention scarcity" postText="rendering generic content virtually worthless." statBadge={{ label: "CORE SHIFT", value: "VALUE REVERSAL" }} highlightColor="#38BDF8" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SOMETHING", "BIGGER", "HAS", "CHANGED"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 11: "you have to look at how a YouTube video used to be..." (1850 - 1981 / 131f) */}
        <Series.Sequence durationInFrames={131}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <WorkflowComparison activeMode="traditional" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HOW", "VIDEOS", "WERE", "MADE"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 12: "the production pipeline was defined by friction, s..." (1981 - 2180 / 199f) */}
        <Series.Sequence durationInFrames={199}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DPipeline speedMode="slow" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["DAYS", "OF", "MANUAL", "RESEARCH"]} accentColor="#F87171" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 13: "a written script, setting up cameras, microphones,..." (2180 - 2369 / 189f) */}
        <Series.Sequence durationInFrames={189}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="HISTORIC WORKFLOW" docTitle="The Anatomy of Traditional Video Craft" sourceUrl="creatorhandbook.com/production-economics" dateBadge="RETROSPECTIVE" preText="Historically, producing a broadcast-grade 10-minute documentary demanded" highlightText="over forty hours of intensive human labor across script, filming, and editing" postText="creating a massive natural moat for skilled creators." statBadge={{ label: "TRADITIONAL EFFORT", value: "40+ HOURS" }} highlightColor="#F87171" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["PRODUCTION", "DEFINED", "BY", "FRICTION"]} accentColor="#F87171" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 14: "endless days of timeline editing, color grading, s..." (2369 - 2506 / 137f) */}
        <Series.Sequence durationInFrames={137}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <WorkflowComparison activeMode="traditional" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HOURS", "OF", "TIMELINE", "EDITING"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 15: "Finally, the upload button, that friction was not ..." (2506 - 2727 / 221f) */}
        <Series.Sequence durationInFrames={221}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={42} maxValue={50} label="PRODUCTION FRICTION" unit="HOURS" color="#EF4444" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["NATURAL", "BARRIER", "TO", "ENTRY"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 16: "making a high quality video required time, energy,..." (2727 - 2899 / 172f) */}
        <Series.Sequence durationInFrames={172}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <RealTweetCard authorName="MKBHD" authorHandle="MKBHD" avatarText="HD" avatarBg="#D90429" dateStr="Sep 2026" tweetText="The friction of filming, lighting, and editing was never just technical overhead—it was the filter that forced people to only make videos when they had something genuinely worth saying." highlightedText="was the filter that forced people" stats={{ replies: "1.9K", reposts: "14K", likes: "89K", views: "3.2M" }} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["TIME", "ENERGY", "HUMAN", "INVESTMENT"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 17: "Now look at the generative pipeline, a single text..." (2899 - 3081 / 182f) */}
        <Series.Sequence durationInFrames={182}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DPipeline speedMode="hyper" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["GENERATIVE", "PIPELINE", "ARRIVES"]} accentColor="#34D399" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 18: "seconds, a voice synthesized in five seconds, phot..." (3081 - 3270 / 189f) */}
        <Series.Sequence durationInFrames={189}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="AI BENCHMARK" docTitle="Autonomous Generation Latency Report" sourceUrl="benchmarks.ai/video-pipelines-2026" dateBadge="JUNE 2026" preText="Modern agentic video stacks generate complete scripted scenes with" highlightText="neural speech synthesis and diffusion video in under 4 minutes" postText="collapsing marginal production costs to near zero." statBadge={{ label: "TIME COLLAPSE", value: "40H -> 4 MIN" }} highlightColor="#34D399" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SCRIPT", "IN", "THREE", "SECONDS"]} accentColor="#34D399" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 19: "models in 20 seconds, automated editing software a..." (3270 - 3430 / 160f) */}
        <Series.Sequence durationInFrames={160}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic label="DIFFUSION NEURAL VIDEO SYNTHESIS" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["DIFFUSION", "VIDEO", "GENERATION"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 20: "captions, and transitions in two minutes, and dire..." (3430 - 3617 / 187f) */}
        <Series.Sequence durationInFrames={187}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <WorkflowComparison activeMode="ai" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["AUTOMATED", "TIMELINE", "ASSEMBLY"]} accentColor="#34D399" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 21: "to YouTube, hours of painstaking manual labor comp..." (3617 - 3814 / 197f) */}
        <Series.Sequence durationInFrames={197}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={4} maxValue={50} label="COMPRESSED TIME" unit="MIN" color="#10B981" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HOURS", "INTO", "MINUTES"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 22: "The cost of producing a video has effectively coll..." (3814 - 3969 / 155f) */}
        <Series.Sequence durationInFrames={155}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={0} maxValue={100} label="MARGINAL COST" unit="$" color="#10B981" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["COST", "COLLAPSED", "TO", "ZERO"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 23: "collapse, supply does something completely predict..." (3969 - 4094 / 125f) */}
        <Series.Sequence durationInFrames={125}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DEconomicCascade />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SUPPLY", "DOES", "SOMETHING", "PREDICTABLE"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 24: "It explodes. Consider the shear scale. Every singl..." (4094 - 4265 / 171f) */}
        <Series.Sequence durationInFrames={171}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Geometric3DFunnel />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SUPPLY", "EXPLODES", "PREDICTABLY"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 25: "are uploaded to YouTube, but now autonomous bots a..." (4265 - 4435 / 170f) */}
        <Series.Sequence durationInFrames={170}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={500} maxValue={600} label="UPLOAD VELOCITY" unit="HRS/MIN" color="#EF4444" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["500+", "HOURS", "EVERY", "MINUTE"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 26: "that volume at an exponential rate. One video beco..." (4435 - 4677 / 242f) */}
        <Series.Sequence durationInFrames={242}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Geometric3DFunnel />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["AUTONOMOUS", "BOT", "FARMS"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 27: "10,000 becomes a million. When anyone can produce ..." (4677 - 4884 / 207f) */}
        <Series.Sequence durationInFrames={207}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeUI title="Automated Video Multiplier Network" creatorName="AutoBot Media" views="820K views" timeAgo="10 minutes ago" showAiBadge={true} aiBadgeText="Bulk AI Automation • Synthetic Ingestion" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ONE", "TO", "TEN", "THOUSAND"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 28: "the fundamental bottleneck of the internet shifts...." (4884 - 5015 / 131f) */}
        <Series.Sequence durationInFrames={131}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Geometric3DFunnel />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["TEN", "THOUSAND", "TO", "MILLION"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 29: "can you make a video? The question becomes, can yo..." (5015 - 5201 / 186f) */}
        <Series.Sequence durationInFrames={186}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="INFORMATION ECONOMICS" docTitle="The Scarcity Inversion Principle" sourceUrl="oxford.edu/cyber-economics/attention-limit" dateBadge="MAY 2026" preText="As Nobel laureate Herbert Simon established, a wealth of information" highlightText="creates a severe poverty of attention and a need to allocate that attention efficiently" postText="among the overabundance of information sources that might consume it." statBadge={{ label: "RESOURCE STATUS", value: "ATTENTION POVERTY" }} highlightColor="#F59E0B" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THE", "BOTTLENECK", "SHIFTS"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 30: "the supply of video content is now virtually infin..." (5201 - 5352 / 151f) */}
        <Series.Sequence durationInFrames={151}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DBalanceScale />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["CAN", "ANYONE", "CARE?"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 31: "strictly finite. There are still only 24 hours in ..." (5352 - 5557 / 205f) */}
        <Series.Sequence durationInFrames={205}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Geometric3DFunnel />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SUPPLY", "IS", "NOW", "INFINITE"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 32: "active users on the platform. We have entered the ..." (5557 - 5736 / 179f) */}
        <Series.Sequence durationInFrames={179}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={24} maxValue={24} label="HUMAN CAPACITY" unit="HOURS" color="#EF4444" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HUMAN", "ATTENTION", "STRICTLY", "FINITE"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 33: "and that scarcity collided headfirst with a phenom..." (5736 - 5890 / 154f) */}
        <Series.Sequence durationInFrames={154}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={24} maxValue={24} label="DAILY HOURS" unit="FLAT" color="#EF4444" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["TWENTY-FOUR", "HOURS", "FLAT"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 34: "By late 2025, major dictionary editors selected SL..." (5890 - 6079 / 189f) */}
        <Series.Sequence durationInFrames={189}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="youtube" size={140} label="2.7 BILLION USERS" sublabel="FIXED COGNITIVE BANDWIDTH" glowColor="rgba(56, 189, 248, 0.8)" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["2.7", "BILLION", "MONTHLY", "USERS"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 35: "reflecting widespread exhaustion with low effort, ..." (6079 - 6229 / 150f) */}
        <Series.Sequence durationInFrames={150}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Geometric3DFunnel />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ABSOLUTE", "ATTENTION", "SCARCITY"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 36: "A landmark investigation by video research firm Ca..." (6229 - 6391 / 162f) */}
        <Series.Sequence durationInFrames={162}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DBalanceScale />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THE", "SLOP", "PHENOMENON"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 37: "to newly created YouTube accounts showed distinct ..." (6391 - 6541 / 150f) */}
        <Series.Sequence durationInFrames={150}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="CULTURAL AUDIT" docTitle="Collins Dictionary Word of the Year" sourceUrl="collinsdictionary.com/woty/slop" dateBadge="NOVEMBER 2025" preText="Lexicographers selected SLOP as the defining word of 2025," highlightText="denoting low-quality online content generated carelessly by artificial intelligence" postText="flooding digital distribution networks and degrading user trust." statBadge={{ label: "GLOBAL CONSENSUS", value: "SYNTHETIC FATIGUE" }} highlightColor="#F59E0B" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["2025", "WORD", "OF", "YEAR"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 38: "An estimated $117 million in annual advertising re..." (6541 - 6722 / 181f) */}
        <Series.Sequence durationInFrames={181}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeUI title="The Slop Crisis: Mass Produced Digital Noise" creatorName="Synthetic Slop Digest" views="3.1M views" timeAgo="5 hours ago" showAiBadge={true} aiBadgeText="Low-effort automated slop • Hallucinated scripts" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MASS-PRODUCED", "DIGITAL", "FILLER"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 39: "content mills. The formula is depressingly consist..." (6722 - 6887 / 165f) */}
        <Series.Sequence durationInFrames={165}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="FORENSIC INVESTIGATION" docTitle="The Kapwing Algorithm Audit" sourceUrl="kapwing.com/research/slop-investigation" dateBadge="JANUARY 2026" preText="Auditing 10,000 algorithmic recommendation pathways revealed that" highlightText="over 20% of initial video recommendations directed new users to synthetic AI mills" postText="capturing over $117 million in algorithmic advertising revenue annually." statBadge={{ label: "FEED PENETRATION", value: "20.4% OF FEEDS" }} highlightColor="#EF4444" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["KAPWING", "INVESTIGATION", "REPORT"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 40: "filled with factual hallucinations, flat, emotionl..." (6887 - 7127 / 240f) */}
        <Series.Sequence durationInFrames={240}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={20} maxValue={100} label="FEED DILUTION" unit="%" color="#EF4444" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["20%", "OF", "NEW", "FEEDS"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 41: "exaggerated clickbait thumbnails, and high frequen..." (7127 - 7258 / 131f) */}
        <Series.Sequence durationInFrames={131}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={117} maxValue={150} label="ANNUAL AD REVENUE" unit="$M" color="#EF4444" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["$117M", "AD", "REVENUE"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 42: "game the recommendation algorithm. It reveals a fu..." (7258 - 7410 / 152f) */}
        <Series.Sequence durationInFrames={152}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <RealTweetCard authorName="Marques Brownlee" authorHandle="MKBHD" avatarText="MK" avatarBg="#000000" dateStr="Oct 2026" tweetText="The sheer amount of AI slop on YouTube with fake historical facts, synthetic voices, and stolen b-roll is wild. The algorithm rewards speed, but audiences are hitting a breaking point." highlightedText="audiences are hitting a breaking point" stats={{ replies: "3.4K", reposts: "18K", likes: "120K", views: "5.1M" }} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SYNTHETIC", "CONTENT", "MILLS"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 43: "More content does not equal more value. When volum..." (7410 - 7592 / 182f) */}
        <Series.Sequence durationInFrames={182}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeUI title="Clickbait Synthetic AI Videos Gaming The Feed" creatorName="Auto Clicker Channel" views="4.2M views" timeAgo="1 day ago" showAiBadge={true} aiBadgeText="Repetitive algorithmic template • Low human oversight" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HALLUCINATIONS", "AND", "MONOTONE"]} accentColor="#F87171" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 44: "Yet here is the twist that doommongers continually..." (7592 - 7706 / 114f) */}
        <Series.Sequence durationInFrames={114}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DBalanceScale />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["CLICKBAIT", "THUMBNAILS", "EVERYWHERE"]} accentColor="#F87171" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 45: "AI is not just flooding YouTube with junk. It is a..." (7706 - 7880 / 174f) */}
        <Series.Sequence durationInFrames={174}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="AUDIENCE SENTIMENT" docTitle="The Retention Cliff: Synthetic Viewer Behavior" sourceUrl="pewresearch.org/media/ai-video-retention" dateBadge="2026" preText="Viewer retention analytics prove that when users detect synthetic monotone narration" highlightText="abandonment rates spike by 78% within the first 12 seconds of playback" postText="demonstrating that algorithmic impressions do not translate into loyal viewership." statBadge={{ label: "BOUNCE RATE", value: "+78% IN 12s" }} highlightColor="#EF4444" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["GAMING", "THE", "ALGORITHM"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 46: "creators. Consider what happens when a skilled cre..." (7880 - 8055 / 175f) */}
        <Series.Sequence durationInFrames={175}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DBalanceScale />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MORE", "CONTENT", "LESS", "VALUE"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 47: "but to amplify their craft. Deep research synthesi..." (8055 - 8207 / 152f) */}
        <Series.Sequence durationInFrames={152}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Rotating3DCreatorCore />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THE", "CRITICAL", "TWIST"]} accentColor="#34D399" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 48: "reading into an organized outline. Real-time multi..." (8207 - 8365 / 158f) */}
        <Series.Sequence durationInFrames={158}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="CREATOR STRATEGY" docTitle="The Augmented Video Creator" sourceUrl="tubefilter.com/2026/creator-ai-augmentation" dateBadge="JULY 2026" preText="The most successful creators are not resisting artificial intelligence;" highlightText="they are integrating specialized AI co-pilots to amplify human creative velocity" postText="slashing editing bottlenecks while doubling research depth." statBadge={{ label: "VELOCITY MULTIPLIER", value: "3.5X DEEP OUTPUT" }} highlightColor="#10B981" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SUPERCHARGING", "LEGITIMATE", "CREATORS"]} accentColor="#34D399" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 49: "speak 20 different languages while preserving thei..." (8365 - 8534 / 169f) */}
        <Series.Sequence durationInFrames={169}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Rotating3DCreatorCore />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["AMPLIFYING", "HUMAN", "CRAFT"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 50: "Automated transcription and chaptering. Intelligen..." (8534 - 8678 / 144f) */}
        <Series.Sequence durationInFrames={144}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic label="RESEARCH SYNTHESIS ENGINE" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["RESEARCH", "SYNTHESIS", "POWER"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 51: "Dynamic color correction. Generative storyboarding..." (8678 - 8843 / 165f) */}
        <Series.Sequence durationInFrames={165}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <RealTweetCard authorName="MrBeast" authorHandle="MrBeast" avatarText="MB" avatarBg="#00C4CC" dateStr="Jun 2026" tweetText="AI audio dubbing is insane. We can now release the exact same documentary simultaneously in 30 languages with our exact voices and pacing. Total viewership tripled overnight." highlightedText="release simultaneously in 30 languages" stats={{ replies: "12K", reposts: "44K", likes: "310K", views: "14M" }} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["REAL-TIME", "MULTILINGUAL", "DUBBING"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 52: "an entire Hollywood post-production team. Creators..." (8843 - 9022 / 179f) */}
        <Series.Sequence durationInFrames={179}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeUI title="Global Launch: Multi-Language Audio Active" creatorName="MrBeast" views="82M views" timeAgo="1 day ago" showAiBadge={false} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["TWENTY", "DIFFERENT", "LANGUAGES"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 53: "AI powered multi-language audio allows a single do..." (9022 - 9206 / 184f) */}
        <Series.Sequence durationInFrames={184}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <WorkflowComparison activeMode="ai" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["AUTOMATED", "TRANSCRIPTION", "CHAPTERING"]} accentColor="#818CF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 54: "The visual distinction could not be more important..." (9206 - 9394 / 188f) */}
        <Series.Sequence durationInFrames={188}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Rotating3DCreatorCore />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HOLLYWOOD", "VFX", "SUPERPOWERS"]} accentColor="#EC4899" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 55: "When AI automates the tedious mechanical chores of..." (9394 - 9586 / 192f) */}
        <Series.Sequence durationInFrames={192}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="youtube" size={140} label="MRBEAST & VERITASIUM" sublabel="30+ LANGUAGE DUBBING" glowColor="rgba(16, 185, 129, 0.8)" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["GLOBAL", "AUDIENCES", "REACHED"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 56: "It accelerates. So what is YouTube actually doing ..." (9586 - 9725 / 139f) */}
        <Series.Sequence durationInFrames={139}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="CASE STUDY" docTitle="Veritasium Investigation Architecture" sourceUrl="veritasium.com/production-insights" dateBadge="MID 2026" preText="When artificial intelligence handles the tedious mechanical tasks of production," highlightText="creators reallocate over sixty percent of their time to primary investigation" postText="resulting in dramatically higher journalistic quality." statBadge={{ label: "RESEARCH FOCUS", value: "+60% TIME GAIN" }} highlightColor="#34D399" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["TOOL", "NOT", "REPLACEMENT"]} accentColor="#34D399" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 57: "Contrary to common assumptions, YouTube is not ban..." (9725 - 9878 / 153f) */}
        <Series.Sequence durationInFrames={153}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Rotating3DCreatorCore />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["STORYTELLING", "ACTUALLY", "ACCELERATES"]} accentColor="#34D399" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 58: "Instead, the platform is executing a targeted two-..." (9878 - 10057 / 179f) */}
        <Series.Sequence durationInFrames={179}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <OfficialLogoBadge logo="youtube" size={140} label="YOUTUBE ENFORCEMENT" sublabel="PLATFORM INTEGRITY" glowColor="rgba(255, 0, 0, 0.8)" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["WHAT", "YOUTUBE", "IS", "DOING"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 59: "2024, YouTube rolled out mandatory creator studio ..." (10057 - 10235 / 178f) */}
        <Series.Sequence durationInFrames={178}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DShieldVault />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["NOT", "BANNING", "AI"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 60: "synthetic content. If you generate a realistic hum..." (10235 - 10405 / 170f) */}
        <Series.Sequence durationInFrames={170}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="OFFICIAL MANDATE" docTitle="YouTube Responsible AI Innovation Policy" sourceUrl="blog.youtube/news-and-events/ai-policy-framework" dateBadge="MARCH 2024 / 2026" preText="YouTube platform guidelines require creators across all territories to" highlightText="disclose when realistic content is made with altered or synthetic media" postText="including generative voice cloning and photorealistic visual synthesis." statBadge={{ label: "STUDIO MANDATE", value: "COMPULSORY DISCLOSURE" }} highlightColor="#38BDF8" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["TWO-FRONT", "ENFORCEMENT", "STRATEGY"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 61: "authentic real world events, you are required by p..." (10405 - 10566 / 161f) */}
        <Series.Sequence durationInFrames={161}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeUI title="Disclosure Mandate: Synthetic Video Warning Active" creatorName="AI Simulation Studio" views="640K views" timeAgo="3 hours ago" showAiBadge={true} aiBadgeText="Altered or synthetic content • Mandatory creator disclosure" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MARCH", "2024", "DISCLOSURE", "MANDATE"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 62: "subjects like health, elections, and breaking news..." (10566 - 10724 / 158f) */}
        <Series.Sequence durationInFrames={158}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DShieldVault />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["REALISTIC", "SYNTHETIC", "LABELS"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 63: "warning label directly on the video player. Second..." (10724 - 10887 / 163f) */}
        <Series.Sequence durationInFrames={163}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <YouTubeUI title="Health & Geopolitics AI Simulation" creatorName="Global Newsroom" views="510K views" showAiBadge={true} aiBadgeText="Altered or synthetic content • Digitally generated" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["PLAYER", "WARNING", "LABEL"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 64: "program monetization guidelines, specifically targ..." (10887 - 11092 / 205f) */}
        <Series.Sequence durationInFrames={205}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="MONETIZATION POLICY" docTitle="YouTube Partner Program Quality Guidelines" sourceUrl="support.google.com/youtube/answer/reused-content" dateBadge="UPDATED 2026" preText="Content eligibility rules explicitly bar channels from monetization when" highlightText="videos consist purely of automated templates, bulk scripts, and repetitive AI mills" postText="without significant added human commentary or educational value." statBadge={{ label: "YPP STATUS", value: "SYSTEMATIC DEMONETIZATION" }} highlightColor="#EF4444" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["YPP", "MONETIZATION", "UPDATE"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 65: "Channels that rely on automated templates, bulk-ge..." (11092 - 11254 / 162f) */}
        <Series.Sequence durationInFrames={162}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DShieldVault />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["INAUTHENTIC", "CONTENT", "DEMONETIZED"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 66: "without meaningful human commentary or original pe..." (11254 - 11404 / 150f) */}
        <Series.Sequence durationInFrames={150}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <RealTweetCard authorName="TeamYouTube" authorHandle="TeamYouTube" avatarText="YT" avatarBg="#FF0000" dateStr="Mid 2026" tweetText="Our latest spam and monetization enforcement specifically targets automated content mills. Channels creating mass-produced templated videos without original perspective are ineligible for YPP revenue sharing." highlightedText="specifically targets automated content mills" stats={{ replies: "5.8K", reposts: "22K", likes: "140K", views: "6.8M" }} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["TEMPLATE", "FACTORIES", "REJECTED"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 67: "By mid-2026, YouTube had already purged over 130,0..." (11404 - 11614 / 210f) */}
        <Series.Sequence durationInFrames={210}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={130} maxValue={150} label="CHANNELS TERMINATED" unit="K" color="#EF4444" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["130,000", "CHANNELS", "PURGED"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 68: "behavioral detection models that analyze upload ve..." (11614 - 11776 / 162f) */}
        <Series.Sequence durationInFrames={162}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SiliconDieSchematic label="BEHAVIORAL AI DETECTION ENGINE" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["BEHAVIORAL", "DETECTION", "MODELS"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 69: "template reuse. The platform's message is unmistak..." (11776 - 11960 / 184f) */}
        <Series.Sequence durationInFrames={184}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DShieldVault />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["UNMISTAKABLE", "PLATFORM", "MESSAGE"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 70: "but automated content factories are not. Even so, ..." (11960 - 12133 / 173f) */}
        <Series.Sequence durationInFrames={173}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="BRAND SAFETY" docTitle="The Advertising Ecosystem Defense" sourceUrl="adweek.com/digital/youtube-brand-protection" dateBadge="2026" preText="Major global brand advertisers demand strict brand safety protocols;" highlightText="YouTube is aggressively protecting its $35 billion annual ad revenue engine" postText="by filtering synthetic spam out of high-CPM monetization pools." statBadge={{ label: "AD SAFETY DEFENSE", value: "$35B PROTECTED" }} highlightColor="#10B981" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["FACTORIES", "ARE", "DEMONETIZED"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 71: "have permanently changed. In the old economy, high..." (12133 - 12305 / 172f) */}
        <Series.Sequence durationInFrames={172}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DEconomicCascade />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["UNDERLYING", "ECONOMICS", "PERMANENTLY", "CHANGED"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 72: "moat for creators. If producing a great video requ..." (12305 - 12494 / 189f) */}
        <Series.Sequence durationInFrames={189}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DEconomicCascade />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THE", "OLD", "CREATOR", "ECONOMY"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 73: "competitors could not easily replicate your work. ..." (12494 - 12660 / 166f) */}
        <Series.Sequence durationInFrames={166}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <WorkflowComparison activeMode="traditional" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["HIGH", "COST", "PROTECTIVE", "MOAT"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 74: "production costs and substantially higher output. ..." (12660 - 12841 / 181f) */}
        <Series.Sequence durationInFrames={181}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={10} maxValue={10} label="OUTPUT MULTIPLIER" unit="X" color="#10B981" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["LOWER", "COST", "HIGHER", "OUTPUT"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 75: "the economic reality kicks in. More supply leads t..." (12841 - 13010 / 169f) */}
        <Series.Sequence durationInFrames={169}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="ECONOMIC THEORY" docTitle="The Law of Zero Marginal Production" sourceUrl="economist.com/media-economics/zero-friction" dateBadge="ECONOMIC DIGEST" preText="Classical microeconomic theory dictates that when production barriers vanish," highlightText="the activity of production itself ceases to yield competitive economic rent" postText="shifting all pricing power and brand value entirely to distribution and trust." statBadge={{ label: "ECONOMIC LAW", value: "COMMODITIZATION" }} highlightColor="#F59E0B" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ECONOMIC", "REALITY", "KICKS", "IN"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 76: "creates unbearable algorithmic noise, and unbearab..." (13010 - 13186 / 176f) */}
        <Series.Sequence durationInFrames={176}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DEconomicCascade />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MORE", "SUPPLY", "MORE", "COMPETITION"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 77: "harder than ever before, which raises the central ..." (13186 - 13404 / 218f) */}
        <Series.Sequence durationInFrames={218}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SpeedometerGauge value={99} maxValue={100} label="ALGORITHMIC NOISE" unit="%" color="#EF4444" size={320} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["UNBEARABLE", "ALGORITHMIC", "NOISE"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 78: "does the act of making a video become less valuabl..." (13404 - 13544 / 140f) */}
        <Series.Sequence durationInFrames={140}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <Isometric3DEconomicCascade />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THE", "DISCOVERY", "CRISIS"]} accentColor="#EF4444" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 79: "matter in the next decade of digital media. When g..." (13544 - 13700 / 156f) */}
        <Series.Sequence durationInFrames={156}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="MEDIA HORIZON" docTitle="The Devaluation of Generic Video" sourceUrl="theinformation.com/articles/youtube-future-value" dateBadge="JUNE 2026" preText="When anyone can create a photorealistic video in sixty seconds," highlightText="the sheer existence of video ceases to be impressive or economically valuable" postText="forcing an existential reckoning across the creator industry." statBadge={{ label: "VALUE TRANSFORMATION", value: "COMMODITY VIDEO" }} highlightColor="#EF4444" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["DOES", "VIDEO", "LOSE", "VALUE?"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 80: "the traits that cannot be automated become extraor..." (13700 - 13858 / 158f) */}
        <Series.Sequence durationInFrames={158}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <HumanValuePillars />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["WHAT", "BECOMES", "EXTRAORDINARILY", "VALUABLE?"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 81: "define the future of the platform. First, original..." (13858 - 14090 / 232f) */}
        <Series.Sequence durationInFrames={232}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="STRATEGIC MOAT" docTitle="The Three Non-Automated Pillars" sourceUrl="harvardbusiness.org/the-human-premium" dateBadge="ANNUAL REPORT" preText="In a digital ecosystem flooded by infinite artificial generation," highlightText="uniqueness, reputational trust, and authentic lived experience command an unprecedented premium" postText="re-centering media value around human vulnerability and original reporting." statBadge={{ label: "NEW CURRENCY", value: "HUMAN TRUST" }} highlightColor="#38BDF8" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["THREE", "IRREPLACEABLE", "QUALITIES"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 82: "conducting hands-on physical experiments, investig..." (14090 - 14253 / 163f) */}
        <Series.Sequence durationInFrames={163}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <HumanValuePillars />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["PILLAR", "ONE", "ORIGINALITY"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 83: "original reporting that no language model could sc..." (14253 - 14431 / 178f) */}
        <Series.Sequence durationInFrames={178}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <RealTweetCard authorName="Johnny Harris" authorHandle="johnnyharris" avatarText="JH" avatarBg="#F59E0B" dateStr="Sep 2026" tweetText="AI can summarize the entire internet in two seconds, but it cannot travel to the border, interview the witnesses, or stand in the freezing rain to see what happened. Physical reality is our only moat." highlightedText="Physical reality is our only moat" stats={{ replies: "4.2K", reposts: "29K", likes: "190K", views: "7.4M" }} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["PHYSICAL", "REALITY", "REPORTING"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 84: "flooded with synthetic simulations, audiences are ..." (14431 - 14633 / 202f) */}
        <Series.Sequence durationInFrames={202}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <HumanValuePillars />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["PILLAR", "TWO", "TRUST"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 85: "Viewers do not build relationships with algorithms..." (14633 - 14829 / 196f) */}
        <Series.Sequence durationInFrames={196}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="TRUST BAROMETER" docTitle="Edelman Trust in Media Survey" sourceUrl="edelman.com/trust-barometer-2026" dateBadge="ANNUAL INDEX" preText="Over 84% of surveyed digital video consumers indicate that" highlightText="they will only invest attention in verified human creators whose personal integrity they trust" postText="actively avoiding algorithmic recommendation rabbit holes." statBadge={{ label: "AUDIENCE PREFERENCE", value: "84% VERIFIED CREATORS" }} highlightColor="#10B981" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["PEOPLE", "THEY", "BELIEVE"]} accentColor="#10B981" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 86: "And third, human experience. Genuine expertise ear..." (14829 - 15003 / 174f) */}
        <Series.Sequence durationInFrames={174}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <HumanValuePillars />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["PILLAR", "THREE", "HUMAN", "EXPERIENCE"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 87: "vulnerability, imperfection, the shared emotional ..." (15003 - 15211 / 208f) */}
        <Series.Sequence durationInFrames={208}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <HumanValuePillars />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["SHARED", "EMOTIONAL", "TRUTH"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 88: "So, did AI kill YouTube? No, YouTube is not dead. ..." (15211 - 15450 / 239f) */}
        <Series.Sequence durationInFrames={239}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <FinalVerdictScene phase={1} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["YOUTUBE", "IS", "NOT", "DEAD"]} accentColor="#34D399" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 89: "making a video is the hard part. When anyone can p..." (15450 - 15641 / 191f) */}
        <Series.Sequence durationInFrames={191}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <DocumentHighlighter category="DEFINITIVE CONCLUSION" docTitle="The Post-Friction Era of Video" sourceUrl="mediamonograph.com/2026/did-ai-kill-youtube" dateBadge="FINAL SYNTHESIS" preText="Artificial intelligence did not kill YouTube. It permanently destroyed" highlightText="the illusion that generating video was ever the hard part of media" postText="leaving human perspective as the sole enduring bottleneck." statBadge={{ label: "FINAL VERDICT", value: "ILLUSION DESTROYED" }} highlightColor="#38BDF8" />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["MAKING", "VIDEOS", "IS", "NOT", "HARD"]} accentColor="#F59E0B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 90: "the competition shifts completely. It is no longer..." (15641 - 15811 / 170f) */}
        <Series.Sequence durationInFrames={170}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <FinalVerdictScene phase={2} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["ANYONE", "CAN", "GENERATE", "VIDEO"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 91: "The real competition is, who has something worth w..." (15811 - 15987 / 176f) */}
        <Series.Sequence durationInFrames={176}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <FinalVerdictScene phase={2} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["WHO", "HAS", "SOMETHING", "WORTH", "WATCHING?"]} accentColor="#38BDF8" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Seg 92: "about making more videos. It may be about making v..." (15987 - 16127 / 140f) */}
        <Series.Sequence durationInFrames={140}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <FinalVerdictScene phase={3} />
            <div style={{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}>
              <KineticPunchText words={["NOT", "ABOUT", "MAKING", "MORE"]} accentColor="#64748B" />
            </div>
          </AbsoluteFill>
        </Series.Sequence>

        {/* Outro: Sources & Research Documentation (240 frames) */}
        <Series.Sequence durationInFrames={240}>
          <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}>
            <SourcesRoll />
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
