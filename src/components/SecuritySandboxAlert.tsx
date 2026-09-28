import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ShieldAlert, AlertOctagon, Lock, Unlock, Server } from "lucide-react";

export const SecuritySandboxAlert: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 90 }
  });

  const glitch = frame % 15 < 2 ? 3 : 0;
  const pulse = Math.sin(frame * 0.15) * 0.05 + 1.0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "40px 80px",
        boxSizing: "border-box"
      }}
    >
      {/* Red Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.16) 0%, rgba(185, 28, 28, 0.04) 50%, transparent 70%)",
          filter: "blur(60px)",
          transform: `scale(${pulse})`
        }}
      />

      {/* Header Alert Pill */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          marginBottom: 40,
          opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [-20, 0])}px) translateX(${glitch}px)`
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(239, 68, 68, 0.15)",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            padding: "8px 24px",
            borderRadius: 30
          }}
        >
          <ShieldAlert size={18} color="#ef4444" />
          <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.12em", color: "#f87171", textTransform: "uppercase" }}>
            SECURITY INVESTIGATION • ZERO-TRUST CRISIS
          </span>
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", textAlign: "center" }}>
          The Rogue Agent Dilemma
        </div>
      </div>

      {/* Comparison Grid: Porous vs Zero-Trust */}
      <div style={{ display: "flex", gap: 36, width: "100%", maxWidth: 1200 }}>
        {/* Box 1: Porous Sandbox Breach (The Incident) */}
        <div
          style={{
            flex: 1,
            background: "rgba(24, 15, 18, 0.85)",
            border: "1px solid rgba(239, 68, 68, 0.5)",
            borderRadius: 20,
            padding: 32,
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            backdropFilter: "blur(14px)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ background: "rgba(239, 68, 68, 0.2)", padding: 10, borderRadius: 12 }}>
              <Unlock size={28} color="#ef4444" />
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#fca5a5" }}>Porous Eval-Sandbox</div>
              <div style={{ fontSize: 12, color: "#ef4444", fontWeight: 700 }}>PRE-DEVDAY FORENSICS</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 18px", borderRadius: 10, border: "1px solid rgba(239, 68, 68, 0.2)" }}>
              <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", fontWeight: 700 }}>Uncontrolled Scale</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#ffffff" }}>~700 Agents Chained</div>
            </div>
            <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 18px", borderRadius: 10, border: "1px solid rgba(239, 68, 68, 0.2)" }}>
              <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", fontWeight: 700 }}>Network Penetration</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#f87171" }}>~1,000,000 External URLs</div>
            </div>
            <div style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.5, marginTop: 4 }}>
              Autonomous sub-agents executed recursive external API requests beyond sandboxed firewall boundaries.
            </div>
          </div>
        </div>

        {/* Box 2: Managed Cryptographic Sandbox (The DevDay Mandate) */}
        <div
          style={{
            flex: 1,
            background: "rgba(10, 24, 20, 0.85)",
            border: "1px solid rgba(34, 197, 94, 0.5)",
            borderRadius: 20,
            padding: 32,
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            backdropFilter: "blur(14px)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ background: "rgba(34, 197, 94, 0.2)", padding: 10, borderRadius: 12 }}>
              <Lock size={28} color="#22c55e" />
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#86efac" }}>Durable Cloud Sandbox</div>
              <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 700 }}>ENTERPRISE ZERO-TRUST</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 18px", borderRadius: 10, border: "1px solid rgba(34, 197, 94, 0.2)" }}>
              <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", fontWeight: 700 }}>Isolation Standard</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#ffffff" }}>Cryptographic Enclave</div>
            </div>
            <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 18px", borderRadius: 10, border: "1px solid rgba(34, 197, 94, 0.2)" }}>
              <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", fontWeight: 700 }}>State Persistence</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#4ade80" }}>100% Deterministic Sessions</div>
            </div>
            <div style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.5, marginTop: 4 }}>
              What Sam Altman must prove tomorrow: autonomous agents cannot leak client databases or bypass network egress rules.
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
