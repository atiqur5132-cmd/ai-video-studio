import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Globe, Code2, ShieldCheck, Cpu, Sparkles } from "lucide-react";

export const ProjectOAgentVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance physics
  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 90 }
  });

  const pulse = Math.sin(frame * 0.08) * 0.05 + 1.0;
  const rotation = (frame * 0.4) % 360;

  // Nodes animation
  const nodeSpring1 = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const nodeSpring2 = spring({ frame: frame - 25, fps, config: { damping: 14 } });
  const nodeSpring3 = spring({ frame: frame - 35, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#030712",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)",
          filter: "blur(50px)",
          transform: `scale(${pulse})`
        }}
      />

      {/* Top Header Badge */}
      <div
        style={{
          position: "absolute",
          top: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          opacity: entrance,
          transform: `translateY(${interpolate(entrance, [0, 1], [-20, 0])}px)`,
          zIndex: 10
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(14, 165, 233, 0.12)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            padding: "6px 22px",
            borderRadius: 30,
            backdropFilter: "blur(12px)"
          }}
        >
          <Sparkles size={16} color="#38bdf8" />
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: "#38bdf8", textTransform: "uppercase" }}>
            PROJECT "o" • ASTRA AON ENGINE
          </span>
        </div>
        <div style={{ fontSize: 38, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em" }}>
          Autonomous Multi-Agent Architecture
        </div>
      </div>

      {/* SVG Connecting Splines */}
      <svg
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 2
        }}
      >
        {/* Spline to Left Node */}
        <path
          d="M 960 520 Q 650 520 450 420"
          fill="none"
          stroke="rgba(56, 189, 248, 0.45)"
          strokeWidth="3"
          strokeDasharray="8 6"
          strokeDashoffset={-frame * 2}
        />
        {/* Spline to Center Top Node */}
        <path
          d="M 960 520 Q 960 380 960 300"
          fill="none"
          stroke="rgba(168, 85, 247, 0.45)"
          strokeWidth="3"
          strokeDasharray="8 6"
          strokeDashoffset={-frame * 2}
        />
        {/* Spline to Right Node */}
        <path
          d="M 960 520 Q 1270 520 1470 420"
          fill="none"
          stroke="rgba(34, 197, 94, 0.45)"
          strokeWidth="3"
          strokeDasharray="8 6"
          strokeDashoffset={-frame * 2}
        />
      </svg>

      {/* Center Orchestrator Controller */}
      <div
        style={{
          position: "absolute",
          top: 420,
          left: "50%",
          transform: `translateX(-50%) scale(${entrance * pulse})`,
          width: 200,
          height: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5
        }}
      >
        {/* Orbital rings */}
        <div
          style={{
            position: "absolute",
            width: 210,
            height: 210,
            borderRadius: "50%",
            border: "2px dashed rgba(56, 189, 248, 0.5)",
            transform: `rotate(${rotation}deg)`
          }}
        />
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0284c7 0%, #1e1b4b 100%)",
            border: "2px solid #38bdf8",
            boxShadow: "0 0 50px rgba(56, 189, 248, 0.6)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6
          }}
        >
          <Cpu size={42} color="#ffffff" />
          <span style={{ fontSize: 13, fontWeight: 800, color: "#ffffff", letterSpacing: "0.08em" }}>
            ORCHESTRATOR
          </span>
          <span style={{ fontSize: 10, color: "#bae6fd", fontWeight: 600 }}>Astra AON Core</span>
        </div>
      </div>

      {/* Node 1: Live Web Search Sub-Agent (Left) */}
      <div
        style={{
          position: "absolute",
          top: 350,
          left: 140,
          width: 320,
          background: "rgba(15, 23, 42, 0.9)",
          border: "1px solid rgba(56, 189, 248, 0.35)",
          borderRadius: 16,
          padding: 22,
          boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          backdropFilter: "blur(16px)",
          transform: `scale(${Math.max(0, nodeSpring1)}) translateY(${interpolate(nodeSpring1, [0, 1], [30, 0])}px)`,
          zIndex: 5
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ background: "rgba(56, 189, 248, 0.2)", padding: 8, borderRadius: 10 }}>
            <Globe size={24} color="#38bdf8" />
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#f8fafc" }}>Web Research Agent</div>
            <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 700 }}>Continuous Live Search</div>
          </div>
        </div>
        <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
          Autonomously scans external docs, extracts APIs, and synchronizes memory state.
        </div>
      </div>

      {/* Node 2: Private Sandbox Terminal Coder (Top Center) */}
      <div
        style={{
          position: "absolute",
          top: 150,
          left: "50%",
          transform: `translateX(-50%) scale(${Math.max(0, nodeSpring2)}) translateY(${interpolate(nodeSpring2, [0, 1], [30, 0])}px)`,
          width: 340,
          background: "rgba(15, 23, 42, 0.9)",
          border: "1px solid rgba(168, 85, 247, 0.4)",
          borderRadius: 16,
          padding: 22,
          boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          backdropFilter: "blur(16px)",
          zIndex: 5
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ background: "rgba(168, 85, 247, 0.2)", padding: 8, borderRadius: 10 }}>
            <Code2 size={24} color="#c084fc" />
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#f8fafc" }}>Codex Builder Agent</div>
            <div style={{ fontSize: 11, color: "#c084fc", fontWeight: 700 }}>Durable Cloud Sandbox</div>
          </div>
        </div>
        <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
          Executes recursive bash scripts, refactors codebases, and generates pull requests.
        </div>
      </div>

      {/* Node 3: QA Verification & Security Auditor (Right) */}
      <div
        style={{
          position: "absolute",
          top: 350,
          right: 140,
          width: 320,
          background: "rgba(15, 23, 42, 0.9)",
          border: "1px solid rgba(34, 197, 94, 0.4)",
          borderRadius: 16,
          padding: 22,
          boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          backdropFilter: "blur(16px)",
          transform: `scale(${Math.max(0, nodeSpring3)}) translateY(${interpolate(nodeSpring3, [0, 1], [30, 0])}px)`,
          zIndex: 5
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ background: "rgba(34, 197, 94, 0.2)", padding: 10, borderRadius: 10 }}>
            <ShieldCheck size={24} color="#4ade80" />
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#f8fafc" }}>QA & Security Auditor</div>
            <div style={{ fontSize: 11, color: "#4ade80", fontWeight: 700 }}>Test-Time Verification</div>
          </div>
        </div>
        <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
          Runs unit test suites, audits vulnerabilities, and enforces safety boundaries.
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          display: "flex",
          gap: 40,
          background: "rgba(15, 23, 42, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          padding: "16px 36px",
          borderRadius: 20,
          backdropFilter: "blur(12px)",
          opacity: entrance,
          zIndex: 10
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: "#38bdf8" }}>63</div>
          <div style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>Languages Supported</div>
        </div>
        <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: "#a855f7" }}>100 GB</div>
          <div style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>Sandbox Storage</div>
        </div>
        <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: "#22c55e" }}>24 / 7</div>
          <div style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>Always-On Operation</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
