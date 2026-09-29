import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface ModernTerminalRunnerProps {
  title?: string;
  command?: string;
  badgeStatus?: string;
  highlightMetric?: string;
  mode?: "terminal_bench" | "directory" | "arbitrage" | "refactor" | "enterprise" | "verdict";
  glowColor?: string;
}

export const ModernTerminalRunner: React.FC<ModernTerminalRunnerProps> = ({
  title = "CLAUDE CODE AUTONOMOUS AGENT",
  command = "claude run 'eval-terminal-bench-4.0 --repo=full_stack'",
  badgeStatus = "70.6% SOLVED",
  highlightMetric = "7X MULTIPLIER",
  mode = "terminal_bench",
  glowColor = "#00f0ff",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], {
    extrapolateRight: "clamp",
  });

  // Animated line reveals
  const linesRevealed = Math.min(8, Math.floor(frame / 6));

  const getTerminalContent = () => {
    switch (mode) {
      case "arbitrage":
        return [
          { tag: "TARGET", text: "Benchmarking Terminal-Bench 4.0 execution cost", color: "#94a3b8" },
          { tag: "CLAUDE OPUS 5.5", text: "Score: 66.4% | Token Rate: $4.00 In / $20.00 Out", color: "#f97316" },
          { tag: "CLAUDE SONNET 5.5", text: "Score: 70.6% | Token Rate: $2.00 In / $10.00 Out", color: "#00f0ff" },
          { tag: "ARBITRAGE", text: "Sonnet 5.5 delivers +4.2% higher accuracy at 50% operational cost", color: "#10b981" },
          { tag: "LATENCY", text: "Average response stream: 412 tokens/sec (30% faster than Opus)", color: "#38bdf8" },
          { tag: "VERDICT", text: "Flagship dethroned inside developer command line", color: "#ef4444" },
        ];
      case "directory":
        return [
          { tag: "INSPECT", text: "Scanning 1,842 files in /workspace/backend/services", color: "#94a3b8" },
          { tag: "LOCATE", text: "Identified concurrency race condition in auth_session.rs:184", color: "#f59e0b" },
          { tag: "EXEC", text: "Chaining shell: cargo check && pytest tests/e2e/test_auth.py", color: "#38bdf8" },
          { tag: "PATCH", text: "Synthesized multi-file AST diff across 4 submodules with zero hallucination", color: "#10b981" },
          { tag: "VERIFY", text: "All 184 test assertions passed in 1.48s (0 human overrides)", color: "#10b981" },
          { tag: "COMPLETE", text: "Git commit: 'fix(auth): resolve async mutex deadlock'", color: "#00f0ff" },
        ];
      case "refactor":
        return [
          { tag: "STREAM", text: "Initializing Claude native multi-file streaming pipeline", color: "#38bdf8" },
          { tag: "CONTEXT", text: "Hydrating 280,000 tokens of codebase architecture into memory", color: "#94a3b8" },
          { tag: "REFACTOR", text: "Rewriting database migration layer to Rust async SQLx", color: "#00f0ff" },
          { tag: "SPEED", text: "Near-instant output: 30% faster streaming than previous Opus 5", color: "#10b981" },
          { tag: "QUALITY", text: "Clean type signatures, exhaustive error enums, 0 compilation warnings", color: "#10b981" },
          { tag: "SAVINGS", text: "Token pruning eliminated 1,260 redundant reasoning iterations", color: "#a855f7" },
        ];
      case "enterprise":
        return [
          { tag: "STUDY", text: "Base44 enterprise evaluation across 118 full application builds", color: "#94a3b8" },
          { tag: "OPUS 5.0", text: "Legacy model average: 7.7 manual retries and debug loops / build", color: "#ef4444" },
          { tag: "SONNET 5.5", text: "Retry count collapsed to all-time record low (< 1.2 retries)", color: "#10b981" },
          { tag: "DEBUG", text: "Developers saved average of 4.2 hours troubleshooting per project", color: "#38bdf8" },
          { tag: "STABILITY", text: "Enterprise production reliability rating: 99.4%", color: "#10b981" },
          { tag: "RESULT", text: "Approved for full continuous deployment pipeline rollout", color: "#00f0ff" },
        ];
      default: // terminal_bench
        return [
          { tag: "TASK", text: "Autonomous Terminal-Bench 4.0 evaluation suite", color: "#94a3b8" },
          { tag: "ENV", text: "Docker sandbox: Ubuntu 24.04 LTS with full bash & python toolchain", color: "#94a3b8" },
          { tag: "EXEC", text: "$ claude-code --autonomous --resolve-issue 'fix memory leak in runtime'", color: "#00f0ff" },
          { tag: "SEARCH", text: "Grep codebase, inspect stack traces, reproduce segfault in tests", color: "#f59e0b" },
          { tag: "APPLY", text: "Generated verified patch across 3 modules with zero human intervention", color: "#10b981" },
          { tag: "BENCHMARK", text: "Terminal-Bench 4.0 Score: 70.6% (Previous Sonnet 5: 10.3%)", color: "#00f0ff" },
        ];
    }
  };

  const lines = getTerminalContent();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02050c",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Volumetric Radial Glow */}
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor}18 0%, rgba(2, 5, 12, 0.98) 75%)`,
          filter: "blur(80px)",
        }}
      />

      {/* Massive 1760 x 890 macOS Developer Terminal Frame */}
      <div
        style={{
          width: 1760,
          height: 890,
          transform: `scale(${entrance * scale}) translateY(-12px)`,
          borderRadius: 24,
          border: `1.5px solid ${glowColor}60`,
          backgroundColor: "#080c17",
          boxShadow: `0 35px 120px rgba(0, 0, 0, 0.98), 0 0 60px ${glowColor}30`,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* macOS Top Header Bar */}
        <div
          style={{
            height: 52,
            backgroundColor: "#0d1322",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            flexShrink: 0,
          }}
        >
          {/* Traffic lights + title */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ef4444" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#10b981" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: glowColor, boxShadow: `0 0 8px ${glowColor}` }} />
              <span style={{ color: "#E2E8F0", fontSize: 14, fontWeight: 900, fontFamily: "monospace", letterSpacing: "0.08em" }}>
                {title}
              </span>
            </div>
          </div>

          {/* Right badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                backgroundColor: "rgba(0, 240, 255, 0.12)",
                border: "1px solid rgba(0, 240, 255, 0.3)",
                color: "#00f0ff",
                fontSize: 12,
                fontWeight: 800,
                fontFamily: "monospace",
                padding: "4px 12px",
                borderRadius: 6,
              }}
            >
              ★ {highlightMetric}
            </span>
            <span style={{ color: "#10b981", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>
              ● {badgeStatus}
            </span>
          </div>
        </div>

        {/* Terminal Body: Split Left Sidebar + Right Monospace Console */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* Left Sidebar: Project Tree & Telemetry (400px) */}
          <div
            style={{
              width: 440,
              backgroundColor: "#060913",
              borderRight: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 900, color: "#64748b", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 12 }}>
                PROJECT HIERARCHY
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "monospace", fontSize: 13 }}>
                <div style={{ color: "#94a3b8", display: "flex", alignItems: "center", gap: 8 }}>
                  <span>📁</span> <span>/workspace/claude-sonnet-5.5/</span>
                </div>
                <div style={{ color: "#cbd5e1", display: "flex", alignItems: "center", gap: 8, paddingLeft: 16 }}>
                  <span>├── 📄</span> <span>benchmark_suite.rs</span>
                </div>
                <div style={{ color: "#38bdf8", display: "flex", alignItems: "center", gap: 8, paddingLeft: 16, backgroundColor: "rgba(56, 189, 248, 0.1)", padding: "4px 8px", borderRadius: 4 }}>
                  <span>├── ⚡</span> <span>terminal_bench_4.py</span>
                </div>
                <div style={{ color: "#cbd5e1", display: "flex", alignItems: "center", gap: 8, paddingLeft: 16 }}>
                  <span>├── 📄</span> <span>adaptive_thinking.rs</span>
                </div>
                <div style={{ color: "#cbd5e1", display: "flex", alignItems: "center", gap: 8, paddingLeft: 16 }}>
                  <span>└── 🔒</span> <span>asl3_safeguards.toml</span>
                </div>
              </div>
            </div>

            {/* Telemetry Metrics on Left Side */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: 12, padding: "12px 16px" }}>
                <div style={{ fontSize: 11, color: "#64748b", fontWeight: 800, fontFamily: "monospace" }}>API STICKER PRICE</div>
                <div style={{ fontSize: 22, color: "#FFFFFF", fontWeight: 900, fontFamily: "monospace", marginTop: 2 }}>$2.00 / M IN</div>
                <div style={{ fontSize: 11, color: "#10b981", fontWeight: 700, marginTop: 2 }}>50% Cheaper than Opus 5.5</div>
              </div>

              <div style={{ backgroundColor: "rgba(0, 240, 255, 0.08)", border: "1px solid rgba(0, 240, 255, 0.3)", borderRadius: 12, padding: "12px 16px" }}>
                <div style={{ fontSize: 11, color: "#00f0ff", fontWeight: 800, fontFamily: "monospace" }}>EXECUTION ACCURACY</div>
                <div style={{ fontSize: 26, color: "#00f0ff", fontWeight: 900, fontFamily: "monospace", marginTop: 2 }}>70.6% SOLVED</div>
                <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, marginTop: 2 }}>Terminal-Bench 4.0 Leader</div>
              </div>
            </div>
          </div>

          {/* Right Main Terminal Console (1320px) */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#030611",
              padding: "28px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
              position: "relative",
            }}
          >
            {/* Moving Laser Scanline */}
            <div
              style={{
                position: "absolute",
                top: (frame * 5) % 650,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: glowColor,
                opacity: 0.15,
                boxShadow: `0 0 15px ${glowColor}`,
                pointerEvents: "none",
              }}
            />

            <div>
              {/* Command Prompt Line */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 18, marginBottom: 20 }}>
                <span style={{ color: "#10b981", fontWeight: 900 }}>anthropic-agent@sonnet-5.5</span>
                <span style={{ color: "#64748b" }}>:</span>
                <span style={{ color: "#38bdf8" }}>~/terminal-bench</span>
                <span style={{ color: "#FFFFFF" }}>$</span>
                <span style={{ color: "#f8fafc", fontWeight: 700 }}>{command}</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 10,
                    height: 20,
                    backgroundColor: glowColor,
                    opacity: (frame % 30 < 15) ? 1 : 0,
                    marginLeft: 4,
                  }}
                />
              </div>

              {/* Streamed Output Lines */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {lines.slice(0, linesRevealed + 1).map((line, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 16,
                      fontSize: 16,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: 4,
                        backgroundColor: `${line.color}18`,
                        border: `1px solid ${line.color}50`,
                        color: line.color,
                        fontWeight: 900,
                        fontSize: 12,
                        letterSpacing: "0.08em",
                        minWidth: 100,
                        textAlign: "center",
                      }}
                    >
                      {line.tag}
                    </span>
                    <span style={{ color: "#E2E8F0", fontWeight: 600 }}>{line.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div
              style={{
                padding: "12px 20px",
                borderRadius: 10,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981" }} />
                <span style={{ color: "#94a3b8", fontSize: 13, fontWeight: 700 }}>
                  Agent State: REASONING VERIFIED • TOKEN PRUNING ACTIVE (30% FEWER STEPS)
                </span>
              </div>
              <span style={{ color: glowColor, fontSize: 13, fontWeight: 900 }}>
                CLAUDE SONNET 5.5 RUNTIME
              </span>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
