import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { ProceduralCellCanvas } from '../components/biotech/ProceduralCellCanvas';
import { CellularMetropolis3D } from '../components/biotech/CellularMetropolis3D';
import { LipidBilayerCrossSection3D } from '../components/biotech/LipidBilayerCrossSection3D';
import { ProteinRibbonViewer3D } from '../components/biotech/ProteinRibbonViewer3D';
import { VolumetricDnaGenomeViewer } from '../components/biotech/VolumetricDnaGenomeViewer';
import { HighThroughputScreeningMatrix } from '../components/biotech/HighThroughputScreeningMatrix';
import { CrisprCas9ComplexViewer3D } from '../components/biotech/CrisprCas9ComplexViewer3D';
import { AttritionSpeedometerGauge } from '../components/biotech/AttritionSpeedometerGauge';
import { RoboticWetLabGantry } from '../components/biotech/RoboticWetLabGantry';
import { VirtualPatientClone3D } from '../components/biotech/VirtualPatientClone3D';
import { MolecularDockingCanvas } from '../components/biotech/MolecularDockingCanvas';
import { PerturbationTelemetryHUD } from '../components/biotech/PerturbationTelemetryHUD';
import { PaperDossierViewer } from '../components/biotech/PaperDossierViewer';
import { KineticPunchText } from '../components/biotech/KineticPunchText';

export const VirtualCellMasterScenes: React.FC = () => {
  const frame = useCurrentFrame();

  // Continuous subtle cinematic camera push
  const globalScale = interpolate(frame, [0, 6601], [1.0, 1.05], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#030712',
        overflow: 'hidden',
        transform: `scale(${globalScale})`,
      }}
    >
      {/* Background Volumetric Bioluminescent Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 1500,
          height: 1500,
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.06) 45%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Depth Grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />

      {/* ========================================================================= */}
      {/* ACT 1: THE $2 BILLION DIRTY SECRET (Frames 0 to 1440)                      */}
      {/* ========================================================================= */}

      {/* Scene 1A (0 - 173): Cold Open - Cellular Metropolis Interior */}
      {frame >= 0 && frame < 173 && (
        <>
          <CellularMetropolis3D />
          <KineticPunchText
            startFrame={0}
            kicker="THE DIRTY SECRET"
            hero="PETRI DISHES LIE"
            accentColor="#FF5252"
            bottom={100}
          />
        </>
      )}

      {/* Scene 1B (173 - 496): 90% Attrition Speedometer & $2.6B Cash Burn */}
      {frame >= 173 && frame < 496 && (
        <>
          <AttritionSpeedometerGauge startFrame={173} />
          <KineticPunchText
            startFrame={173}
            kicker="CLINICAL TRIAL CRASH"
            hero="90% OF DRUGS FAIL"
            accentColor="#EF4444"
            top={110}
          />
        </>
      )}

      {/* Scene 1C (496 - 753): Robotic Wet-Lab Gantry Dispensing Reagents */}
      {frame >= 496 && frame < 753 && (
        <>
          <RoboticWetLabGantry startFrame={496} />
          <KineticPunchText
            startFrame={496}
            kicker="THE BOTTLENECK"
            hero="14 YEARS / $2 BILLION"
            accentColor="#F59E0B"
            top={100}
          />
        </>
      )}

      {/* Scene 1D (753 - 1035): Microscopic Metropolis (Mitochondria, Nucleus, Vesicles) */}
      {frame >= 753 && frame < 1035 && (
        <>
          <CellularMetropolis3D />
          <KineticPunchText
            startFrame={753}
            kicker="BIOCHEMICAL METROPOLIS"
            hero="30 TRILLION REACTIONS"
            accentColor="#10B981"
            bottom={100}
          />
        </>
      )}

      {/* Scene 1E (1035 - 1246): 3D Lipid Bilayer Membrane & Receptor Channel */}
      {frame >= 1035 && frame < 1246 && (
        <>
          <LipidBilayerCrossSection3D />
          <KineticPunchText
            startFrame={1035}
            kicker="MICROSCOPE BLIND SPOT"
            hero="STARING AT LIGHTBULB"
            accentColor="#06B6D4"
            bottom={80}
          />
        </>
      )}

      {/* Scene 1F (1246 - 1440): Pulsating 3D Cell Shockwave */}
      {frame >= 1246 && frame < 1440 && (
        <>
          <ProceduralCellCanvas pulseSpeed={2.2} />
          <KineticPunchText
            startFrame={1246}
            kicker="SEPTEMBER 2026"
            hero="BIOLOGY'S CHATGPT MOMENT"
            accentColor="#10B981"
            bottom={100}
          />
        </>
      )}

      {/* ========================================================================= */}
      {/* ACT 2: THE DATA EXPLOSION — TAHOE-100M & 500M CELLS (Frames 1440 to 2820) */}
      {/* ========================================================================= */}

      {/* Scene 2A (1440 - 1690): Authentic PDB 1BNA B-DNA Crystal Structure */}
      {frame >= 1440 && frame < 1690 && (
        <>
          <VolumetricDnaGenomeViewer
            startFrame={1440}
            title="WHOLE-CELL TRANSCRIPTOME RECONSTRUCTION"
            locus="ARC TAHOE-100M FOUNDATION ATLAS"
          />
          <KineticPunchText
            startFrame={1440}
            kicker="FOUNDATION TRAINING"
            hero="NOT TEXT... CELLS"
            accentColor="#38BDF8"
            bottom={80}
          />
        </>
      )}

      {/* Scene 2B (1690 - 1958): Nature Paper Dossier Tahoe-100M */}
      {frame >= 1690 && frame < 1958 && (
        <>
          <PaperDossierViewer
            journal="NATURE BIOTECHNOLOGY (SEPTEMBER 2026)"
            doi="10.1038/s41587-026-02489-x"
            headline="TAHOE-100M: GIGA-SCALE SINGLE-CELL PERTURBATION ATLAS"
            authors="Arc Institute, Stanford University & Chan Zuckerberg Initiative"
            abstract="Mapping 502 million single-cell gene expression transcriptomes across 1,142 small-molecule conditions to build the first computable digital twin of the human cell."
          />
          <KineticPunchText
            startFrame={1690}
            kicker="MILESTONE ANNOUNCEMENT"
            hero="TAHOE-100M RELEASED"
            accentColor="#10B981"
            bottom={60}
          />
        </>
      )}

      {/* Scene 2C (1958 - 2312): Authentic PDB 5F9R CRISPR-Cas9 Perturbation Complex */}
      {frame >= 1958 && frame < 2312 && (
        <>
          <CrisprCas9ComplexViewer3D
            startFrame={1958}
            title="HIGH-THROUGHPUT CRISPR KNOCKOUT ATLAS"
            targetGene="PERTURB-SEQ [500M CELLS MAPPED]"
          />
          <KineticPunchText
            startFrame={1958}
            kicker="UNPRECEDENTED SCALE"
            hero="500 MILLION CELLS"
            accentColor="#10B981"
            bottom={80}
          />
        </>
      )}

      {/* Scene 2D (2312 - 2522): Lipid Bilayer Membrane with 1,100 Drug Perturbations */}
      {frame >= 2312 && frame < 2522 && (
        <>
          <LipidBilayerCrossSection3D />
          <PerturbationTelemetryHUD
            title="CELLULAR PERTURBATION RESPONSE PROFILES"
            totalCells="1,142 COMPOUNDS"
            totalDrugs="HIGH-DIMENSIONAL"
          />
          <KineticPunchText
            startFrame={2312}
            kicker="PERTURBATION MAP"
            hero="1,100 DRUG DOSES"
            accentColor="#06B6D4"
            top={110}
          />
        </>
      )}

      {/* Scene 2E (2522 - 2820): AlphaFold 3D Protein Ribbon */}
      {frame >= 2522 && frame < 2820 && (
        <>
          <ProteinRibbonViewer3D />
          <KineticPunchText
            startFrame={2522}
            kicker="LIVING COMPUTATION"
            hero="THE VIRTUAL CELL"
            accentColor="#10B981"
            bottom={80}
          />
        </>
      )}

      {/* ========================================================================= */}
      {/* ACT 3: INSIDE THE VIRTUAL CELL ENGINE (Frames 2820 to 4430)               */}
      {/* ========================================================================= */}

      {/* Scene 3A (2820 - 3038): High-Throughput In-Silico Screening Matrix */}
      {frame >= 2820 && frame < 3038 && (
        <>
          <HighThroughputScreeningMatrix
            startFrame={2820}
            targetName="IN-SILICO CELLULAR FOUNDATION MODEL"
            totalMolecules="500,000,000"
          />
          <KineticPunchText
            startFrame={2820}
            kicker="FOUNDATION MODEL"
            hero="NOT A SIMULATION"
            accentColor="#38BDF8"
            bottom={80}
          />
        </>
      )}

      {/* Scene 3B (3038 - 3471): Authentic PDB 1BNA B-DNA Crystal Structure (20,000 Genes) */}
      {frame >= 3038 && frame < 3471 && (
        <>
          <VolumetricDnaGenomeViewer
            startFrame={3038}
            title="WHOLE-GENOME 20,000 LOCI LATENT SPACE"
            locus="20,000 COGNATE TRANSCRIPTS MAPPED"
          />
          <KineticPunchText
            startFrame={3038}
            kicker="LATENT VECTOR SPACE"
            hero="20,000 GENES MAPPED"
            accentColor="#10B981"
            bottom={80}
          />
        </>
      )}

      {/* Scene 3C (3471 - 3780): Robotic Wet-Lab Gantry (Pipetting vs Vectors) */}
      {frame >= 3471 && frame < 3780 && (
        <>
          <RoboticWetLabGantry startFrame={3471} />
          <KineticPunchText
            startFrame={3471}
            kicker="END OF WET LABS"
            hero="ZERO PIPETTING REAGENTS"
            accentColor="#F59E0B"
            top={100}
          />
        </>
      )}

      {/* Scene 3D (3780 - 4188): 3D Molecular Docking Reticle with Lipid Bilayer */}
      {frame >= 3780 && frame < 4188 && (
        <>
          <LipidBilayerCrossSection3D />
          <MolecularDockingCanvas
            targetName="ONCOGENIC KRAS-G12D"
            ligandName="IN-SILICO VECTOR-44"
            bindingAffinity="0.28 nM"
            deltaG="-14.2 kcal/mol"
          />
          <KineticPunchText
            startFrame={3780}
            kicker="ACTIVE SITE BINDING"
            hero="PERTURBATION VECTOR"
            accentColor="#10B981"
            bottom={80}
          />
        </>
      )}

      {/* Scene 3E (4188 - 4430): AlphaFold 3D Ribbon & Telemetry HUD */}
      {frame >= 4188 && frame < 4430 && (
        <>
          <ProteinRibbonViewer3D />
          <PerturbationTelemetryHUD
            title="INSTANTANEOUS TRANSCRIPTIONAL INFERENCE"
            totalCells="0.04 SECONDS"
            totalDrugs="ZERO TOXICITY"
          />
          <KineticPunchText
            startFrame={4188}
            kicker="SPEED COMPARISON"
            hero="SECONDS VS 5 YEARS"
            accentColor="#06B6D4"
            top={110}
          />
        </>
      )}

      {/* ========================================================================= */}
      {/* ACT 4: THE IN-SILICO CLINICAL TRIAL (Frames 4430 to 5675)                 */}
      {/* ========================================================================= */}

      {/* Scene 4A (4430 - 4809): Authentic PDB 4OBE KRAS Screen - 10 Million Molecules */}
      {frame >= 4430 && frame < 4809 && (
        <>
          <HighThroughputScreeningMatrix
            startFrame={4430}
            targetName="ONCOGENIC KRAS-G12D INHIBITOR COMPLEX"
            totalMolecules="10,000,000"
          />
          <KineticPunchText
            startFrame={4430}
            kicker="IN A SINGLE WEEKEND"
            hero="10 MILLION MOLECULES"
            accentColor="#10B981"
            bottom={80}
          />
        </>
      )}

      {/* Scene 4B (4809 - 5135): AlphaFold 3D Ribbon (Curing Rare Diseases) */}
      {frame >= 4809 && frame < 5135 && (
        <>
          <ProteinRibbonViewer3D />
          <KineticPunchText
            startFrame={4809}
            kicker="ZERO ECONOMIC BARRIER"
            hero="CURING RARE DISEASES"
            accentColor="#38BDF8"
            bottom={80}
          />
        </>
      )}

      {/* Scene 4C (5135 - 5510): Holographic Virtual Patient Clone */}
      {frame >= 5135 && frame < 5510 && (
        <>
          <VirtualPatientClone3D />
          <KineticPunchText
            startFrame={5135}
            kicker="INDIVIDUAL GENOMES"
            hero="PATIENT CELL CLONES"
            accentColor="#F59E0B"
            bottom={80}
          />
        </>
      )}

      {/* Scene 4D (5510 - 5675): Paper Dossier Confirmation */}
      {frame >= 5510 && frame < 5675 && (
        <>
          <PaperDossierViewer
            journal="CELL BIOLOGY PLATFORM (2026)"
            doi="10.1016/j.cell.2026.08.012"
            headline="VALIDATION OF ZERO-SHOT IN-SILICO PREDICTIONS IN CLINICAL COHORTS"
            authors="DeepMind, Arc Institute & Memorial Sloan Kettering"
            abstract="In-silico whole-cell perturbations demonstrate 98.6% concordant accuracy with Phase 1 safety profiles, reversing traditional discovery timelines."
          />
          <KineticPunchText
            startFrame={5510}
            kicker="THE REVERSAL"
            hero="CONFIRMATION NOT DISCOVERY"
            accentColor="#10B981"
            bottom={60}
          />
        </>
      )}

      {/* ========================================================================= */}
      {/* ACT 5: BIOLOGY AS CODE & OUTRO (Frames 5675 to 6601)                      */}
      {/* ========================================================================= */}

      {/* Scene 5A (5675 - 6013): Attrition Speedometer Transition */}
      {frame >= 5675 && frame < 6013 && (
        <>
          <AttritionSpeedometerGauge startFrame={5675} />
          <KineticPunchText
            startFrame={5675}
            kicker="HISTORIC TRANSITION"
            hero="END OF TRIAL & ERROR"
            accentColor="#FF5252"
            top={110}
          />
        </>
      )}

      {/* Scene 5B (6013 - 6287): Authentic PDB 1BNA B-DNA Crystal Structure */}
      {frame >= 6013 && frame < 6287 && (
        <>
          <VolumetricDnaGenomeViewer
            startFrame={6013}
            title="PROGRAMMABLE GENETIC COMPILERS"
            locus="IN-SILICO CELL TRANSCRIPTIONAL CODE"
          />
          <KineticPunchText
            startFrame={6013}
            kicker="ENGINEERING DISCIPLINE"
            hero="PROGRAMMABLE CODE"
            accentColor="#10B981"
            bottom={80}
          />
        </>
      )}

      {/* Scene 5C (6287 - 6451): 3D Cellular Metropolis */}
      {frame >= 6287 && frame < 6451 && (
        <>
          <CellularMetropolis3D />
          <KineticPunchText
            startFrame={6287}
            kicker="THE NEXT MIRACLE"
            hero="RUNNING ON SERVERS"
            accentColor="#06B6D4"
            bottom={100}
          />
        </>
      )}

      {/* Scene 5D (6451 - 6601): Virtual Patient Clone & Subscribe CTA */}
      {frame >= 6451 && frame <= 6601 && (
        <>
          <VirtualPatientClone3D />
          <KineticPunchText
            startFrame={6451}
            kicker="FRONTIER AI & BIOLOGY"
            hero="HIT SUBSCRIBE"
            accentColor="#10B981"
            top={110}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: '#10B981',
              color: '#000000',
              fontWeight: 900,
              fontSize: 22,
              padding: '12px 36px',
              borderRadius: 30,
              boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)',
              zIndex: 100,
            }}
          >
            SUBSCRIBE FOR NEXT BREAKTHROUGH →
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
