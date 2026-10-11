import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HatchedProgressBar } from "./HatchedProgressBar";

export const DirectZeroTrustCanvas: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const layers = [
    {
      title: "LAYER 1: KERNEL HYPERVISOR",
      headline: "Deterministic Isolation",
      desc: "Hardware microVMs (Firecracker / gVisor) replace soft Docker containers and system prompts.",
      color: "#38bdf8",
      delay: 5,
    },
    {
      title: "LAYER 2: NETWORK AIR-GAP",
      headline: "Strict Outbound Whitelist",
      desc: "Zero internet access by default. Outbound routing 0.0.0.0/0 permanently severed at socket layer.",
      color: "#22c55e",
      delay: 20,
    },
    {
      title: "LAYER 3: ZERO-TRUST PARADIGM",
      headline: "Untrusted Foreign Process",
      desc: "Treat every LLM reasoning token as untrusted adversarial code. Zero ambient credentials.",
      color: "#f59e0b",
      delay: 35,
    },
  ];

  return (
    <div
      style={{
        width: 1400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          fontSize: 34,
          fontWeight: 700,
          color: "#fde047",
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        PRODUCTION SECURITY SPEC: POST-CONTAINMENT
      </div>

      <div
        style={{
          fontSize: 20,
          color: "#94a3b8",
          marginBottom: 35,
          textAlign: "center",
        }}
      >
        The Zero-Trust Agent Sandboxing Standard for Developers
      </div>

      {/* 3 Architecture Layers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
          width: "100%",
          marginBottom: 35,
        }}
      >
        {layers.map((l, idx) => {
          const pop = spring({
            frame: Math.max(0, frame - l.delay),
            fps,
            config: { damping: 14, stiffness: 100 },
          });

          return (
            <div
              key={idx}
              style={{
                borderRadius: 20,
                border: `2px solid ${l.color}`,
                backgroundColor: "#000000",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                transform: `scale(${pop})`,
                opacity: pop,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: l.color,
                  letterSpacing: "0.5px",
                  marginBottom: 10,
                }}
              >
                {l.title}
              </div>

              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 12,
                }}
              >
                {l.headline}
              </div>

              <div
                style={{
                  fontSize: 18,
                  color: "#cbd5e1",
                  lineHeight: 1.5,
                }}
              >
                {l.desc}
              </div>
            </div>
          );
        })}
      </div>

      <HatchedProgressBar
        labelTop="ZERO-TRUST HARDWARE INTEGRITY"
        fillPercent={100}
        color="#22c55e"
        width={800}
        height={34}
        labelBottom="100% EGRESS AIR-GAPPED & PRIVILEGE BOUNDED"
        delay={45}
      />
    </div>
  );
};
