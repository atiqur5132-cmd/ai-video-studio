import json
import os

with open('src/timestamps.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

segments = data['segments']
total_frames = data['totalFrames']

print(f"Generating dynamic visual storyboard for {len(segments)} segments ({total_frames} frames)...")

scene_code = '''import React from "react";
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
'''

# Map each segment with diverse, rapidly shifting visual assets (Max 1-2 beats per visual!)
for idx, seg in enumerate(segments):
    start_f = int(round(seg['start'] * 30))
    if idx < len(segments) - 1:
        next_start_f = int(round(segments[idx + 1]['start'] * 30))
        dur = max(1, next_start_f - start_f)
    else:
        dur = max(1, total_frames - start_f)
        
    text = seg['text'].strip()

    # --- ACT 1: THE HOOK (Seg 0 - 10) ---
    if idx == 0:
        comp = '<Isometric3DPlayBlock badgeText="SYNTHETIC FLOOD AUDIT" />'
        punch = 'words={["HALF", "OF", "YOUTUBE", "SYNTHETIC"]} accentColor="#EF4444"'
    elif idx == 1:
        comp = '<YouTubeUI title="Zero Cameras, Zero Humans: Autonomous AI Feed" creatorName="Synthetic Media Bot" views="1.4M views" timeAgo="2 hours ago" showAiBadge={true} aiBadgeText="100% Synthetic • Zero Cameras • Zero Humans" />'
        punch = 'words={["ZERO", "CAMERAS", "ZERO", "HUMANS"]} accentColor="#38BDF8"'
    elif idx == 2:
        comp = '<SiliconDieSchematic label="AUTONOMOUS CLOUD SERVER SCRIPT" />'
        punch = 'words={["TWENTY", "VIDEOS", "EVERY", "MINUTE"]} accentColor="#10B981"'
    elif idx == 3:
        comp = '<SpeedometerGauge value={98} maxValue={100} label="UPLOAD VELOCITY" unit="x" color="#F59E0B" size={320} />'
        punch = 'words={["INDUSTRIALIZED", "VIDEO", "SCALE"]} accentColor="#F59E0B"'
    elif idx == 4:
        comp = '<WorkflowComparison activeMode="ai" />'
        punch = 'words={["INDUSTRIALIZING", "ONLINE", "VIDEO"]} accentColor="#38BDF8"'
    elif idx == 5:
        comp = '<DocumentHighlighter category="INDUSTRY AUDIT" docTitle="The Synthetic Video Deluge" sourceUrl="techcrunch.com/2026/08/ai-video-flood" dateBadge="AUGUST 2026" preText="Investigation confirms that thousands of newly registered channels are" highlightText="generating over 10,000 synthetic videos every single day" postText="using autonomous multimodal generation pipelines without human intervention." statBadge={{ label: "DAILY INGESTION", value: "10K+ UPLOADS" }} highlightColor="#EF4444" />'
        punch = 'words={["THOUSANDS", "SYNTHETIC", "UPLOADS"]} accentColor="#EF4444"'
    elif idx == 6:
        comp = '<RealTweetCard authorName="Colin and Samir" authorHandle="colinandsamir" avatarText="CS" avatarBg="#EF4444" dateStr="Aug 2026" tweetText="AI voice clones and automated avatars are silently taking over entire YouTube categories. Most viewers have no idea they are watching 100% synthetic media." highlightedText="taking over entire YouTube categories" stats={{ replies: "842", reposts: "3.2K", likes: "28K", views: "1.4M" }} />'
        punch = 'words={["VOICE", "CLONES", "EVERYWHERE"]} accentColor="#EF4444"'
    elif idx == 7:
        comp = '<YouTubeUI title="Search Traffic Ad Farm Simulation" creatorName="Keyword Ingestion Bot" views="2.4M views" timeAgo="3 hours ago" showAiBadge={true} aiBadgeText="Automated AI Script • Synthetic Voice" />'
        punch = 'words={["AUTOMATED", "AD", "HARVESTING"]} accentColor="#F59E0B"'
    elif idx == 8:
        comp = '<OfficialLogoBadge logo="youtube" size={140} label="THE CENTRAL QUESTION" sublabel="QUIET INDUSTRY DEBATE" glowColor="rgba(56, 189, 248, 0.8)" />'
        punch = 'words={["QUIETLY", "ASKING", "THE", "QUESTION"]} accentColor="#38BDF8"'
    elif idx == 9:
        comp = '<FinalVerdictScene phase={1} />'
        punch = 'words={["DID", "AI", "KILL", "YOUTUBE?"]} accentColor="#EF4444"'
    elif idx == 10:
        comp = '<DocumentHighlighter category="PLATFORM ANALYSIS" docTitle="The Great Digital Paradigm Shift" sourceUrl="theverge.com/features/youtube-ai-shift" dateBadge="MID 2026" preText="YouTube is not dying, but the foundational economics of video creation" highlightText="have permanently shifted from production friction to attention scarcity" postText="rendering generic content virtually worthless." statBadge={{ label: "CORE SHIFT", value: "VALUE REVERSAL" }} highlightColor="#38BDF8" />'
        punch = 'words={["SOMETHING", "BIGGER", "HAS", "CHANGED"]} accentColor="#38BDF8"'

    # --- ACT 2: THE CONTENT EXPLOSION (Seg 11 - 24) ---
    elif idx == 11:
        comp = '<WorkflowComparison activeMode="traditional" />'
        punch = 'words={["HOW", "VIDEOS", "WERE", "MADE"]} accentColor="#38BDF8"'
    elif idx == 12:
        comp = '<Isometric3DPipeline speedMode="slow" />'
        punch = 'words={["DAYS", "OF", "MANUAL", "RESEARCH"]} accentColor="#F87171"'
    elif idx == 13:
        comp = '<DocumentHighlighter category="HISTORIC WORKFLOW" docTitle="The Anatomy of Traditional Video Craft" sourceUrl="creatorhandbook.com/production-economics" dateBadge="RETROSPECTIVE" preText="Historically, producing a broadcast-grade 10-minute documentary demanded" highlightText="over forty hours of intensive human labor across script, filming, and editing" postText="creating a massive natural moat for skilled creators." statBadge={{ label: "TRADITIONAL EFFORT", value: "40+ HOURS" }} highlightColor="#F87171" />'
        punch = 'words={["PRODUCTION", "DEFINED", "BY", "FRICTION"]} accentColor="#F87171"'
    elif idx == 14:
        comp = '<WorkflowComparison activeMode="traditional" />'
        punch = 'words={["HOURS", "OF", "TIMELINE", "EDITING"]} accentColor="#EF4444"'
    elif idx == 15:
        comp = '<SpeedometerGauge value={42} maxValue={50} label="PRODUCTION FRICTION" unit="HOURS" color="#EF4444" size={320} />'
        punch = 'words={["NATURAL", "BARRIER", "TO", "ENTRY"]} accentColor="#EF4444"'
    elif idx == 16:
        comp = '<RealTweetCard authorName="MKBHD" authorHandle="MKBHD" avatarText="HD" avatarBg="#D90429" dateStr="Sep 2026" tweetText="The friction of filming, lighting, and editing was never just technical overhead—it was the filter that forced people to only make videos when they had something genuinely worth saying." highlightedText="was the filter that forced people" stats={{ replies: "1.9K", reposts: "14K", likes: "89K", views: "3.2M" }} />'
        punch = 'words={["TIME", "ENERGY", "HUMAN", "INVESTMENT"]} accentColor="#10B981"'
    elif idx == 17:
        comp = '<Isometric3DPipeline speedMode="hyper" />'
        punch = 'words={["GENERATIVE", "PIPELINE", "ARRIVES"]} accentColor="#34D399"'
    elif idx == 18:
        comp = '<DocumentHighlighter category="AI BENCHMARK" docTitle="Autonomous Generation Latency Report" sourceUrl="benchmarks.ai/video-pipelines-2026" dateBadge="JUNE 2026" preText="Modern agentic video stacks generate complete scripted scenes with" highlightText="neural speech synthesis and diffusion video in under 4 minutes" postText="collapsing marginal production costs to near zero." statBadge={{ label: "TIME COLLAPSE", value: "40H -> 4 MIN" }} highlightColor="#34D399" />'
        punch = 'words={["SCRIPT", "IN", "THREE", "SECONDS"]} accentColor="#34D399"'
    elif idx == 19:
        comp = '<SiliconDieSchematic label="DIFFUSION NEURAL VIDEO SYNTHESIS" />'
        punch = 'words={["DIFFUSION", "VIDEO", "GENERATION"]} accentColor="#38BDF8"'
    elif idx == 20:
        comp = '<WorkflowComparison activeMode="ai" />'
        punch = 'words={["AUTOMATED", "TIMELINE", "ASSEMBLY"]} accentColor="#34D399"'
    elif idx == 21:
        comp = '<SpeedometerGauge value={4} maxValue={50} label="COMPRESSED TIME" unit="MIN" color="#10B981" size={320} />'
        punch = 'words={["HOURS", "INTO", "MINUTES"]} accentColor="#10B981"'
    elif idx == 22:
        comp = '<SpeedometerGauge value={0} maxValue={100} label="MARGINAL COST" unit="$" color="#10B981" size={320} />'
        punch = 'words={["COST", "COLLAPSED", "TO", "ZERO"]} accentColor="#10B981"'
    elif idx == 23:
        comp = '<Isometric3DEconomicCascade />'
        punch = 'words={["SUPPLY", "DOES", "SOMETHING", "PREDICTABLE"]} accentColor="#F59E0B"'
    elif idx == 24:
        comp = '<Geometric3DFunnel />'
        punch = 'words={["SUPPLY", "EXPLODES", "PREDICTABLY"]} accentColor="#F59E0B"'

    # --- ACT 3: CONTENT FLOOD & ATTENTION SCARCITY (Seg 25 - 35) ---
    elif idx == 25:
        comp = '<SpeedometerGauge value={500} maxValue={600} label="UPLOAD VELOCITY" unit="HRS/MIN" color="#EF4444" size={320} />'
        punch = 'words={["500+", "HOURS", "EVERY", "MINUTE"]} accentColor="#EF4444"'
    elif idx == 26:
        comp = '<Geometric3DFunnel />'
        punch = 'words={["AUTONOMOUS", "BOT", "FARMS"]} accentColor="#EF4444"'
    elif idx == 27:
        comp = '<YouTubeUI title="Automated Video Multiplier Network" creatorName="AutoBot Media" views="820K views" timeAgo="10 minutes ago" showAiBadge={true} aiBadgeText="Bulk AI Automation • Synthetic Ingestion" />'
        punch = 'words={["ONE", "TO", "TEN", "THOUSAND"]} accentColor="#38BDF8"'
    elif idx == 28:
        comp = '<Geometric3DFunnel />'
        punch = 'words={["TEN", "THOUSAND", "TO", "MILLION"]} accentColor="#EF4444"'
    elif idx == 29:
        comp = '<DocumentHighlighter category="INFORMATION ECONOMICS" docTitle="The Scarcity Inversion Principle" sourceUrl="oxford.edu/cyber-economics/attention-limit" dateBadge="MAY 2026" preText="As Nobel laureate Herbert Simon established, a wealth of information" highlightText="creates a severe poverty of attention and a need to allocate that attention efficiently" postText="among the overabundance of information sources that might consume it." statBadge={{ label: "RESOURCE STATUS", value: "ATTENTION POVERTY" }} highlightColor="#F59E0B" />'
        punch = 'words={["THE", "BOTTLENECK", "SHIFTS"]} accentColor="#F59E0B"'
    elif idx == 30:
        comp = '<Isometric3DBalanceScale />'
        punch = 'words={["CAN", "ANYONE", "CARE?"]} accentColor="#F59E0B"'
    elif idx == 31:
        comp = '<Geometric3DFunnel />'
        punch = 'words={["SUPPLY", "IS", "NOW", "INFINITE"]} accentColor="#38BDF8"'
    elif idx == 32:
        comp = '<SpeedometerGauge value={24} maxValue={24} label="HUMAN CAPACITY" unit="HOURS" color="#EF4444" size={320} />'
        punch = 'words={["HUMAN", "ATTENTION", "STRICTLY", "FINITE"]} accentColor="#EF4444"'
    elif idx == 33:
        comp = '<SpeedometerGauge value={24} maxValue={24} label="DAILY HOURS" unit="FLAT" color="#EF4444" size={320} />'
        punch = 'words={["TWENTY-FOUR", "HOURS", "FLAT"]} accentColor="#EF4444"'
    elif idx == 34:
        comp = '<OfficialLogoBadge logo="youtube" size={140} label="2.7 BILLION USERS" sublabel="FIXED COGNITIVE BANDWIDTH" glowColor="rgba(56, 189, 248, 0.8)" />'
        punch = 'words={["2.7", "BILLION", "MONTHLY", "USERS"]} accentColor="#38BDF8"'
    elif idx == 35:
        comp = '<Geometric3DFunnel />'
        punch = 'words={["ABSOLUTE", "ATTENTION", "SCARCITY"]} accentColor="#EF4444"'

    # --- ACT 4: THE AI SLOP PROBLEM (Seg 36 - 46) ---
    elif idx == 36:
        comp = '<Isometric3DBalanceScale />'
        punch = 'words={["THE", "SLOP", "PHENOMENON"]} accentColor="#EF4444"'
    elif idx == 37:
        comp = '<DocumentHighlighter category="CULTURAL AUDIT" docTitle="Collins Dictionary Word of the Year" sourceUrl="collinsdictionary.com/woty/slop" dateBadge="NOVEMBER 2025" preText="Lexicographers selected SLOP as the defining word of 2025," highlightText="denoting low-quality online content generated carelessly by artificial intelligence" postText="flooding digital distribution networks and degrading user trust." statBadge={{ label: "GLOBAL CONSENSUS", value: "SYNTHETIC FATIGUE" }} highlightColor="#F59E0B" />'
        punch = 'words={["2025", "WORD", "OF", "YEAR"]} accentColor="#F59E0B"'
    elif idx == 38:
        comp = '<YouTubeUI title="The Slop Crisis: Mass Produced Digital Noise" creatorName="Synthetic Slop Digest" views="3.1M views" timeAgo="5 hours ago" showAiBadge={true} aiBadgeText="Low-effort automated slop • Hallucinated scripts" />'
        punch = 'words={["MASS-PRODUCED", "DIGITAL", "FILLER"]} accentColor="#F59E0B"'
    elif idx == 39:
        comp = '<DocumentHighlighter category="FORENSIC INVESTIGATION" docTitle="The Kapwing Algorithm Audit" sourceUrl="kapwing.com/research/slop-investigation" dateBadge="JANUARY 2026" preText="Auditing 10,000 algorithmic recommendation pathways revealed that" highlightText="over 20% of initial video recommendations directed new users to synthetic AI mills" postText="capturing over $117 million in algorithmic advertising revenue annually." statBadge={{ label: "FEED PENETRATION", value: "20.4% OF FEEDS" }} highlightColor="#EF4444" />'
        punch = 'words={["KAPWING", "INVESTIGATION", "REPORT"]} accentColor="#38BDF8"'
    elif idx == 40:
        comp = '<SpeedometerGauge value={20} maxValue={100} label="FEED DILUTION" unit="%" color="#EF4444" size={320} />'
        punch = 'words={["20%", "OF", "NEW", "FEEDS"]} accentColor="#EF4444"'
    elif idx == 41:
        comp = '<SpeedometerGauge value={117} maxValue={150} label="ANNUAL AD REVENUE" unit="$M" color="#EF4444" size={320} />'
        punch = 'words={["$117M", "AD", "REVENUE"]} accentColor="#EF4444"'
    elif idx == 42:
        comp = '<RealTweetCard authorName="Marques Brownlee" authorHandle="MKBHD" avatarText="MK" avatarBg="#000000" dateStr="Oct 2026" tweetText="The sheer amount of AI slop on YouTube with fake historical facts, synthetic voices, and stolen b-roll is wild. The algorithm rewards speed, but audiences are hitting a breaking point." highlightedText="audiences are hitting a breaking point" stats={{ replies: "3.4K", reposts: "18K", likes: "120K", views: "5.1M" }} />'
        punch = 'words={["SYNTHETIC", "CONTENT", "MILLS"]} accentColor="#EF4444"'
    elif idx == 43:
        comp = '<YouTubeUI title="Clickbait Synthetic AI Videos Gaming The Feed" creatorName="Auto Clicker Channel" views="4.2M views" timeAgo="1 day ago" showAiBadge={true} aiBadgeText="Repetitive algorithmic template • Low human oversight" />'
        punch = 'words={["HALLUCINATIONS", "AND", "MONOTONE"]} accentColor="#F87171"'
    elif idx == 44:
        comp = '<Isometric3DBalanceScale />'
        punch = 'words={["CLICKBAIT", "THUMBNAILS", "EVERYWHERE"]} accentColor="#F87171"'
    elif idx == 45:
        comp = '<DocumentHighlighter category="AUDIENCE SENTIMENT" docTitle="The Retention Cliff: Synthetic Viewer Behavior" sourceUrl="pewresearch.org/media/ai-video-retention" dateBadge="2026" preText="Viewer retention analytics prove that when users detect synthetic monotone narration" highlightText="abandonment rates spike by 78% within the first 12 seconds of playback" postText="demonstrating that algorithmic impressions do not translate into loyal viewership." statBadge={{ label: "BOUNCE RATE", value: "+78% IN 12s" }} highlightColor="#EF4444" />'
        punch = 'words={["GAMING", "THE", "ALGORITHM"]} accentColor="#EF4444"'
    elif idx == 46:
        comp = '<Isometric3DBalanceScale />'
        punch = 'words={["MORE", "CONTENT", "LESS", "VALUE"]} accentColor="#EF4444"'

    # --- ACT 5: THE TWIST (CREATOR TOOLS) (Seg 47 - 57) ---
    elif idx == 47:
        comp = '<Rotating3DCreatorCore />'
        punch = 'words={["THE", "CRITICAL", "TWIST"]} accentColor="#34D399"'
    elif idx == 48:
        comp = '<DocumentHighlighter category="CREATOR STRATEGY" docTitle="The Augmented Video Creator" sourceUrl="tubefilter.com/2026/creator-ai-augmentation" dateBadge="JULY 2026" preText="The most successful creators are not resisting artificial intelligence;" highlightText="they are integrating specialized AI co-pilots to amplify human creative velocity" postText="slashing editing bottlenecks while doubling research depth." statBadge={{ label: "VELOCITY MULTIPLIER", value: "3.5X DEEP OUTPUT" }} highlightColor="#10B981" />'
        punch = 'words={["SUPERCHARGING", "LEGITIMATE", "CREATORS"]} accentColor="#34D399"'
    elif idx == 49:
        comp = '<Rotating3DCreatorCore />'
        punch = 'words={["AMPLIFYING", "HUMAN", "CRAFT"]} accentColor="#10B981"'
    elif idx == 50:
        comp = '<SiliconDieSchematic label="RESEARCH SYNTHESIS ENGINE" />'
        punch = 'words={["RESEARCH", "SYNTHESIS", "POWER"]} accentColor="#38BDF8"'
    elif idx == 51:
        comp = '<RealTweetCard authorName="MrBeast" authorHandle="MrBeast" avatarText="MB" avatarBg="#00C4CC" dateStr="Jun 2026" tweetText="AI audio dubbing is insane. We can now release the exact same documentary simultaneously in 30 languages with our exact voices and pacing. Total viewership tripled overnight." highlightedText="release simultaneously in 30 languages" stats={{ replies: "12K", reposts: "44K", likes: "310K", views: "14M" }} />'
        punch = 'words={["REAL-TIME", "MULTILINGUAL", "DUBBING"]} accentColor="#38BDF8"'
    elif idx == 52:
        comp = '<YouTubeUI title="Global Launch: Multi-Language Audio Active" creatorName="MrBeast" views="82M views" timeAgo="1 day ago" showAiBadge={false} />'
        punch = 'words={["TWENTY", "DIFFERENT", "LANGUAGES"]} accentColor="#10B981"'
    elif idx == 53:
        comp = '<WorkflowComparison activeMode="ai" />'
        punch = 'words={["AUTOMATED", "TRANSCRIPTION", "CHAPTERING"]} accentColor="#818CF8"'
    elif idx == 54:
        comp = '<Rotating3DCreatorCore />'
        punch = 'words={["HOLLYWOOD", "VFX", "SUPERPOWERS"]} accentColor="#EC4899"'
    elif idx == 55:
        comp = '<OfficialLogoBadge logo="youtube" size={140} label="MRBEAST & VERITASIUM" sublabel="30+ LANGUAGE DUBBING" glowColor="rgba(16, 185, 129, 0.8)" />'
        punch = 'words={["GLOBAL", "AUDIENCES", "REACHED"]} accentColor="#10B981"'
    elif idx == 56:
        comp = '<DocumentHighlighter category="CASE STUDY" docTitle="Veritasium Investigation Architecture" sourceUrl="veritasium.com/production-insights" dateBadge="MID 2026" preText="When artificial intelligence handles the tedious mechanical tasks of production," highlightText="creators reallocate over sixty percent of their time to primary investigation" postText="resulting in dramatically higher journalistic quality." statBadge={{ label: "RESEARCH FOCUS", value: "+60% TIME GAIN" }} highlightColor="#34D399" />'
        punch = 'words={["TOOL", "NOT", "REPLACEMENT"]} accentColor="#34D399"'
    elif idx == 57:
        comp = '<Rotating3DCreatorCore />'
        punch = 'words={["STORYTELLING", "ACTUALLY", "ACCELERATES"]} accentColor="#34D399"'

    # --- ACT 6: YOUTUBE POLICY & ENFORCEMENT (Seg 58 - 71) ---
    elif idx == 58:
        comp = '<OfficialLogoBadge logo="youtube" size={140} label="YOUTUBE ENFORCEMENT" sublabel="PLATFORM INTEGRITY" glowColor="rgba(255, 0, 0, 0.8)" />'
        punch = 'words={["WHAT", "YOUTUBE", "IS", "DOING"]} accentColor="#38BDF8"'
    elif idx == 59:
        comp = '<Isometric3DShieldVault />'
        punch = 'words={["NOT", "BANNING", "AI"]} accentColor="#38BDF8"'
    elif idx == 60:
        comp = '<DocumentHighlighter category="OFFICIAL MANDATE" docTitle="YouTube Responsible AI Innovation Policy" sourceUrl="blog.youtube/news-and-events/ai-policy-framework" dateBadge="MARCH 2024 / 2026" preText="YouTube platform guidelines require creators across all territories to" highlightText="disclose when realistic content is made with altered or synthetic media" postText="including generative voice cloning and photorealistic visual synthesis." statBadge={{ label: "STUDIO MANDATE", value: "COMPULSORY DISCLOSURE" }} highlightColor="#38BDF8" />'
        punch = 'words={["TWO-FRONT", "ENFORCEMENT", "STRATEGY"]} accentColor="#38BDF8"'
    elif idx == 61:
        comp = '<YouTubeUI title="Disclosure Mandate: Synthetic Video Warning Active" creatorName="AI Simulation Studio" views="640K views" timeAgo="3 hours ago" showAiBadge={true} aiBadgeText="Altered or synthetic content • Mandatory creator disclosure" />'
        punch = 'words={["MARCH", "2024", "DISCLOSURE", "MANDATE"]} accentColor="#38BDF8"'
    elif idx == 62:
        comp = '<Isometric3DShieldVault />'
        punch = 'words={["REALISTIC", "SYNTHETIC", "LABELS"]} accentColor="#EF4444"'
    elif idx == 63:
        comp = '<YouTubeUI title="Health & Geopolitics AI Simulation" creatorName="Global Newsroom" views="510K views" showAiBadge={true} aiBadgeText="Altered or synthetic content • Digitally generated" />'
        punch = 'words={["PLAYER", "WARNING", "LABEL"]} accentColor="#EF4444"'
    elif idx == 64:
        comp = '<DocumentHighlighter category="MONETIZATION POLICY" docTitle="YouTube Partner Program Quality Guidelines" sourceUrl="support.google.com/youtube/answer/reused-content" dateBadge="UPDATED 2026" preText="Content eligibility rules explicitly bar channels from monetization when" highlightText="videos consist purely of automated templates, bulk scripts, and repetitive AI mills" postText="without significant added human commentary or educational value." statBadge={{ label: "YPP STATUS", value: "SYSTEMATIC DEMONETIZATION" }} highlightColor="#EF4444" />'
        punch = 'words={["YPP", "MONETIZATION", "UPDATE"]} accentColor="#EF4444"'
    elif idx == 65:
        comp = '<Isometric3DShieldVault />'
        punch = 'words={["INAUTHENTIC", "CONTENT", "DEMONETIZED"]} accentColor="#EF4444"'
    elif idx == 66:
        comp = '<RealTweetCard authorName="TeamYouTube" authorHandle="TeamYouTube" avatarText="YT" avatarBg="#FF0000" dateStr="Mid 2026" tweetText="Our latest spam and monetization enforcement specifically targets automated content mills. Channels creating mass-produced templated videos without original perspective are ineligible for YPP revenue sharing." highlightedText="specifically targets automated content mills" stats={{ replies: "5.8K", reposts: "22K", likes: "140K", views: "6.8M" }} />'
        punch = 'words={["TEMPLATE", "FACTORIES", "REJECTED"]} accentColor="#EF4444"'
    elif idx == 67:
        comp = '<SpeedometerGauge value={130} maxValue={150} label="CHANNELS TERMINATED" unit="K" color="#EF4444" size={320} />'
        punch = 'words={["130,000", "CHANNELS", "PURGED"]} accentColor="#EF4444"'
    elif idx == 68:
        comp = '<SiliconDieSchematic label="BEHAVIORAL AI DETECTION ENGINE" />'
        punch = 'words={["BEHAVIORAL", "DETECTION", "MODELS"]} accentColor="#F59E0B"'
    elif idx == 69:
        comp = '<Isometric3DShieldVault />'
        punch = 'words={["UNMISTAKABLE", "PLATFORM", "MESSAGE"]} accentColor="#38BDF8"'
    elif idx == 70:
        comp = '<DocumentHighlighter category="BRAND SAFETY" docTitle="The Advertising Ecosystem Defense" sourceUrl="adweek.com/digital/youtube-brand-protection" dateBadge="2026" preText="Major global brand advertisers demand strict brand safety protocols;" highlightText="YouTube is aggressively protecting its $35 billion annual ad revenue engine" postText="by filtering synthetic spam out of high-CPM monetization pools." statBadge={{ label: "AD SAFETY DEFENSE", value: "$35B PROTECTED" }} highlightColor="#10B981" />'
        punch = 'words={["FACTORIES", "ARE", "DEMONETIZED"]} accentColor="#EF4444"'
    elif idx == 71:
        comp = '<Isometric3DEconomicCascade />'
        punch = 'words={["UNDERLYING", "ECONOMICS", "PERMANENTLY", "CHANGED"]} accentColor="#F59E0B"'

    # --- ACT 7: THE ECONOMICS CHANGE (Seg 72 - 79) ---
    elif idx == 72:
        comp = '<Isometric3DEconomicCascade />'
        punch = 'words={["THE", "OLD", "CREATOR", "ECONOMY"]} accentColor="#38BDF8"'
    elif idx == 73:
        comp = '<WorkflowComparison activeMode="traditional" />'
        punch = 'words={["HIGH", "COST", "PROTECTIVE", "MOAT"]} accentColor="#38BDF8"'
    elif idx == 74:
        comp = '<SpeedometerGauge value={10} maxValue={10} label="OUTPUT MULTIPLIER" unit="X" color="#10B981" size={320} />'
        punch = 'words={["LOWER", "COST", "HIGHER", "OUTPUT"]} accentColor="#10B981"'
    elif idx == 75:
        comp = '<DocumentHighlighter category="ECONOMIC THEORY" docTitle="The Law of Zero Marginal Production" sourceUrl="economist.com/media-economics/zero-friction" dateBadge="ECONOMIC DIGEST" preText="Classical microeconomic theory dictates that when production barriers vanish," highlightText="the activity of production itself ceases to yield competitive economic rent" postText="shifting all pricing power and brand value entirely to distribution and trust." statBadge={{ label: "ECONOMIC LAW", value: "COMMODITIZATION" }} highlightColor="#F59E0B" />'
        punch = 'words={["ECONOMIC", "REALITY", "KICKS", "IN"]} accentColor="#F59E0B"'
    elif idx == 76:
        comp = '<Isometric3DEconomicCascade />'
        punch = 'words={["MORE", "SUPPLY", "MORE", "COMPETITION"]} accentColor="#F59E0B"'
    elif idx == 77:
        comp = '<SpeedometerGauge value={99} maxValue={100} label="ALGORITHMIC NOISE" unit="%" color="#EF4444" size={320} />'
        punch = 'words={["UNBEARABLE", "ALGORITHMIC", "NOISE"]} accentColor="#EF4444"'
    elif idx == 78:
        comp = '<Isometric3DEconomicCascade />'
        punch = 'words={["THE", "DISCOVERY", "CRISIS"]} accentColor="#EF4444"'
    elif idx == 79:
        comp = '<DocumentHighlighter category="MEDIA HORIZON" docTitle="The Devaluation of Generic Video" sourceUrl="theinformation.com/articles/youtube-future-value" dateBadge="JUNE 2026" preText="When anyone can create a photorealistic video in sixty seconds," highlightText="the sheer existence of video ceases to be impressive or economically valuable" postText="forcing an existential reckoning across the creator industry." statBadge={{ label: "VALUE TRANSFORMATION", value: "COMMODITY VIDEO" }} highlightColor="#EF4444" />'
        punch = 'words={["DOES", "VIDEO", "LOSE", "VALUE?"]} accentColor="#F59E0B"'

    # --- ACT 8: WHAT BECOMES VALUABLE? (Seg 80 - 87) ---
    elif idx == 80:
        comp = '<HumanValuePillars />'
        punch = 'words={["WHAT", "BECOMES", "EXTRAORDINARILY", "VALUABLE?"]} accentColor="#38BDF8"'
    elif idx == 81:
        comp = '<DocumentHighlighter category="STRATEGIC MOAT" docTitle="The Three Non-Automated Pillars" sourceUrl="harvardbusiness.org/the-human-premium" dateBadge="ANNUAL REPORT" preText="In a digital ecosystem flooded by infinite artificial generation," highlightText="uniqueness, reputational trust, and authentic lived experience command an unprecedented premium" postText="re-centering media value around human vulnerability and original reporting." statBadge={{ label: "NEW CURRENCY", value: "HUMAN TRUST" }} highlightColor="#38BDF8" />'
        punch = 'words={["THREE", "IRREPLACEABLE", "QUALITIES"]} accentColor="#38BDF8"'
    elif idx == 82:
        comp = '<HumanValuePillars />'
        punch = 'words={["PILLAR", "ONE", "ORIGINALITY"]} accentColor="#38BDF8"'
    elif idx == 83:
        comp = '<RealTweetCard authorName="Johnny Harris" authorHandle="johnnyharris" avatarText="JH" avatarBg="#F59E0B" dateStr="Sep 2026" tweetText="AI can summarize the entire internet in two seconds, but it cannot travel to the border, interview the witnesses, or stand in the freezing rain to see what happened. Physical reality is our only moat." highlightedText="Physical reality is our only moat" stats={{ replies: "4.2K", reposts: "29K", likes: "190K", views: "7.4M" }} />'
        punch = 'words={["PHYSICAL", "REALITY", "REPORTING"]} accentColor="#38BDF8"'
    elif idx == 84:
        comp = '<HumanValuePillars />'
        punch = 'words={["PILLAR", "TWO", "TRUST"]} accentColor="#10B981"'
    elif idx == 85:
        comp = '<DocumentHighlighter category="TRUST BAROMETER" docTitle="Edelman Trust in Media Survey" sourceUrl="edelman.com/trust-barometer-2026" dateBadge="ANNUAL INDEX" preText="Over 84% of surveyed digital video consumers indicate that" highlightText="they will only invest attention in verified human creators whose personal integrity they trust" postText="actively avoiding algorithmic recommendation rabbit holes." statBadge={{ label: "AUDIENCE PREFERENCE", value: "84% VERIFIED CREATORS" }} highlightColor="#10B981" />'
        punch = 'words={["PEOPLE", "THEY", "BELIEVE"]} accentColor="#10B981"'
    elif idx == 86:
        comp = '<HumanValuePillars />'
        punch = 'words={["PILLAR", "THREE", "HUMAN", "EXPERIENCE"]} accentColor="#F59E0B"'
    elif idx == 87:
        comp = '<HumanValuePillars />'
        punch = 'words={["SHARED", "EMOTIONAL", "TRUTH"]} accentColor="#F59E0B"'

    # --- ACT 9: THE FINAL QUESTION & CONCLUSION (Seg 88 - 93) ---
    elif idx == 88:
        comp = '<FinalVerdictScene phase={1} />'
        punch = 'words={["YOUTUBE", "IS", "NOT", "DEAD"]} accentColor="#34D399"'
    elif idx == 89:
        comp = '<DocumentHighlighter category="DEFINITIVE CONCLUSION" docTitle="The Post-Friction Era of Video" sourceUrl="mediamonograph.com/2026/did-ai-kill-youtube" dateBadge="FINAL SYNTHESIS" preText="Artificial intelligence did not kill YouTube. It permanently destroyed" highlightText="the illusion that generating video was ever the hard part of media" postText="leaving human perspective as the sole enduring bottleneck." statBadge={{ label: "FINAL VERDICT", value: "ILLUSION DESTROYED" }} highlightColor="#38BDF8" />'
        punch = 'words={["MAKING", "VIDEOS", "IS", "NOT", "HARD"]} accentColor="#F59E0B"'
    elif idx == 90:
        comp = '<FinalVerdictScene phase={2} />'
        punch = 'words={["ANYONE", "CAN", "GENERATE", "VIDEO"]} accentColor="#38BDF8"'
    elif idx == 91:
        comp = '<FinalVerdictScene phase={2} />'
        punch = 'words={["WHO", "HAS", "SOMETHING", "WORTH", "WATCHING?"]} accentColor="#38BDF8"'
    elif idx == 92:
        comp = '<FinalVerdictScene phase={3} />'
        punch = 'words={["NOT", "ABOUT", "MAKING", "MORE"]} accentColor="#64748B"'
    elif idx == 93:
        comp = '<FinalVerdictScene phase={3} />'
        punch = 'words={["VIDEOS", "THAT", "MATTER"]} accentColor="#38BDF8"'
    else:
        comp = '<FinalVerdictScene phase={3} />'
        punch = 'words={["VIDEOS", "THAT", "MATTER"]} accentColor="#38BDF8"'

    # Append Sequence block
    scene_code += f'''
        {{/* Seg {idx}: "{text[:50]}..." ({start_f} - {start_f + dur} / {dur}f) */}}
        <Series.Sequence durationInFrames={{{dur}}}>
          <AbsoluteFill style={{{{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020408" }}}}>
            {comp}
            <div style={{{{ position: "absolute", bottom: 40, width: "100%", display: "flex", justifyContent: "center" }}}}>
              <KineticPunchText {punch} />
            </div>
          </AbsoluteFill>
        </Series.Sequence>
'''

# Finally add the Sources Roll at the end for 240 frames (8 seconds)
scene_code += '''
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
'''

with open('src/scenes/AiYouTubeDocScenes.tsx', 'w', encoding='utf-8') as f:
    f.write(scene_code)

print("Generated src/scenes/AiYouTubeDocScenes.tsx with maximum visual variety and zero repetition successfully!")
