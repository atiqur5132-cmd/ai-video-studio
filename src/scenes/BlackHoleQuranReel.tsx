import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from 'remotion';
import { Scene1_HookBlackHole } from './reel/Scene1_HookBlackHole';
import { Scene2_EarthDisruption } from './reel/Scene2_EarthDisruption';
import { Scene3_SurahMursalat } from './reel/Scene3_SurahMursalat';
import { Scene4_StellarCollapse } from './reel/Scene4_StellarCollapse';
import { Scene5_SurahAnbiya } from './reel/Scene5_SurahAnbiya';
import { Scene6_ScrollFolding } from './reel/Scene6_ScrollFolding';
import { Scene7_GrandMiracle } from './reel/Scene7_GrandMiracle';
import { ReelKineticCaptions, CaptionCue } from '../components/ReelKineticCaptions';

const CUES: CaptionCue[] = [
  {
    startFrame: 0,
    endFrame: 58,
    words: [
      { text: 'KYA' },
      { text: 'AAPKO' },
      { text: 'PATA' },
      { text: 'HAI?', isHighlight: true, highlightColor: '#38BDF8' },
    ],
  },
  {
    startFrame: 58,
    endFrame: 105,
    words: [
      { text: 'BLACK', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'HOLE', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'SAB' },
      { text: 'NIGAL' },
      { text: 'LETA' },
      { text: 'HAI' },
    ],
  },
  {
    startFrame: 105,
    endFrame: 150,
    words: [
      { text: 'ROSHNI', isHighlight: true, highlightColor: '#FEF08A' },
      { text: 'TAK' },
      { text: 'BHI!' },
    ],
  },
  {
    startFrame: 150,
    endFrame: 190,
    words: [
      { text: 'AAP' },
      { text: 'SOCHEIN...', isHighlight: true, highlightColor: '#38BDF8' },
    ],
  },
  {
    startFrame: 190,
    endFrame: 230,
    words: [
      { text: 'AGAR' },
      { text: 'EK' },
      { text: 'BLACK', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'HOLE', isHighlight: true, highlightColor: '#F59E0B' },
    ],
  },
  {
    startFrame: 230,
    endFrame: 265,
    words: [
      { text: 'POORI' },
      { text: 'DUNIYA', isHighlight: true, highlightColor: '#38BDF8' },
      { text: 'KO' },
      { text: 'NIGAL' },
      { text: 'LE...' },
    ],
  },
  {
    startFrame: 265,
    endFrame: 295,
    words: [
      { text: 'TOH' },
      { text: 'KYA' },
      { text: 'HOGA?', isHighlight: true, highlightColor: '#EF4444' },
    ],
  },
  {
    startFrame: 295,
    endFrame: 360,
    words: [
      { text: 'QURAN', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'ME' },
      { text: 'ALLAH' },
      { text: 'TAALA' },
      { text: 'FIRMATE' },
      { text: 'HAIN:' },
    ],
  },
  {
    startFrame: 360,
    endFrame: 415,
    words: [
      { text: '"FA-IZA' },
      { text: 'AN-NUJOOMU' },
      { text: 'TUMISAT"', isHighlight: true, highlightColor: '#F59E0B' },
    ],
  },
  {
    startFrame: 415,
    endFrame: 475,
    words: [
      { text: 'QIYAMAT', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'KE' },
      { text: 'DIN' },
    ],
  },
  {
    startFrame: 475,
    endFrame: 515,
    words: [
      { text: 'SITARE', isHighlight: true, highlightColor: '#38BDF8' },
      { text: 'BUJH' },
      { text: 'JAYENGE!' },
    ],
  },
  {
    startFrame: 515,
    endFrame: 570,
    words: [
      { text: 'AUR' },
      { text: 'AAJ' },
      { text: 'SCIENCE', isHighlight: true, highlightColor: '#38BDF8' },
      { text: 'BATATI' },
      { text: 'HAI...' },
    ],
  },
  {
    startFrame: 570,
    endFrame: 635,
    words: [
      { text: 'BLACK', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'HOLES', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'EXACTLY', isHighlight: true, highlightColor: '#38BDF8' },
      { text: 'YAHI' },
      { text: 'KARTE' },
      { text: 'HAIN!' },
    ],
  },
  {
    startFrame: 635,
    endFrame: 710,
    words: [
      { text: 'AUR' },
      { text: 'SIRF' },
      { text: 'ITNA' },
      { text: 'HI' },
      { text: 'NAHI...', isHighlight: true, highlightColor: '#38BDF8' },
    ],
  },
  {
    startFrame: 710,
    endFrame: 770,
    words: [
      { text: 'POORA', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'AASMAAN' },
      { text: 'LAPET', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'DIYA' },
      { text: 'JAYEGA!' },
    ],
  },
  {
    startFrame: 770,
    endFrame: 860,
    words: [
      { text: '"YAWMA' },
      { text: 'NATWIS-SAMAA\'A' },
      { text: 'KA-TAYYIS-SIJILL"', isHighlight: true, highlightColor: '#38BDF8' },
    ],
  },
  {
    startFrame: 860,
    endFrame: 945,
    words: [
      { text: 'AASMAAN' },
      { text: 'KO' },
      { text: 'IS' },
      { text: 'TARAH' },
      { text: 'LAPET', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'DENGE...' },
    ],
  },
  {
    startFrame: 945,
    endFrame: 1020,
    words: [
      { text: 'JAISE' },
      { text: 'KITAAB', isHighlight: true, highlightColor: '#FEF08A' },
      { text: 'KA' },
      { text: 'SAFHA', isHighlight: true, highlightColor: '#FEF08A' },
      { text: 'LAPETA' },
      { text: 'JATA' },
      { text: 'HAI!' },
    ],
  },
  {
    startFrame: 1020,
    endFrame: 1100,
    words: [
      { text: 'SCIENCE' },
      { text: 'KO' },
      { text: 'HAZARON', isHighlight: true, highlightColor: '#EF4444' },
      { text: 'SAAL' },
      { text: 'LAGE...' },
    ],
  },
  {
    startFrame: 1100,
    endFrame: 1165,
    words: [
      { text: 'PAR' },
      { text: 'QURAN', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'NE' },
      { text: 'PEHLE' },
      { text: 'HI' },
      { text: 'BATA', isHighlight: true, highlightColor: '#38BDF8' },
      { text: 'DIYA!' },
    ],
  },
  {
    startFrame: 1165,
    endFrame: 1242,
    words: [
      { text: 'SOCHO', isHighlight: true, highlightColor: '#F59E0B' },
      { text: 'AUR' },
      { text: 'SHARE', isHighlight: true, highlightColor: '#38BDF8' },
      { text: 'KARO!' },
    ],
  },
];

export const BlackHoleQuranReel: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#020408',
        overflow: 'hidden',
        width: 1080,
        height: 1920,
      }}
    >
      {/* 1. SEPARATE SCENE SEQUENCES (Scene changes on each voiceover beat) */}

      {/* Scene 1: Gargantua Black Hole Introduction (0s - 5.0s | 0 - 150 frames) */}
      <Sequence from={0} durationInFrames={150}>
        <Scene1_HookBlackHole />
      </Sequence>

      {/* Scene 2: Earth Tidal Disruption & Spaghettification (5.0s - 9.8s | 150 - 295 frames) */}
      <Sequence from={150} durationInFrames={145}>
        <Scene2_EarthDisruption />
      </Sequence>

      {/* Scene 3: Sacred Surah Al-Mursalat [77:8] Revelation (9.8s - 13.8s | 295 - 415 frames) */}
      <Sequence from={295} durationInFrames={120}>
        <Scene3_SurahMursalat />
      </Sequence>

      {/* Scene 4: Stellar Death, Supernova & Gravitational Singularity (13.8s - 21.2s | 415 - 635 frames) */}
      <Sequence from={415} durationInFrames={220}>
        <Scene4_StellarCollapse />
      </Sequence>

      {/* Scene 5: Sacred Surah Al-Anbiya [21:104] Revelation (21.2s - 28.7s | 635 - 860 frames) */}
      <Sequence from={635} durationInFrames={225}>
        <Scene5_SurahAnbiya />
      </Sequence>

      {/* Scene 6: Cosmic Sheet & Spacetime Grid Folding (28.7s - 34.0s | 860 - 1020 frames) */}
      <Sequence from={860} durationInFrames={160}>
        <Scene6_ScrollFolding />
      </Sequence>

      {/* Scene 7: 1400-Year Miracle Scientific Speedometer & Outro (34.0s - 41.4s | 1020 - 1242 frames) */}
      <Sequence from={1020} durationInFrames={222}>
        <Scene7_GrandMiracle />
      </Sequence>

      {/* 2. DYNAMIC KINETIC SUBTITLES ENGINE (Active on all scenes) */}
      <ReelKineticCaptions cues={CUES} />
    </AbsoluteFill>
  );
};
