import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { OfficialLogoBadge } from "./OfficialLogoBadge";

export const AutonomousPipelineVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });

  const stages = [
    {
      step: "01",
      title: "HYPOTHESIS",
      desc: "Architecture & Theory Synthesis",
      accent: "#38BDF8",
      icon: "⚡",
      metric: "HYPOTHESIS v4.2 LOCKED",
      speed: "0.24s",
    },
    {
      step: "02",
      title: "PYTORCH CODE",
      desc: "Distributed Pipeline Scripts",
      accent: "#818CF8",
      icon: "⚙️",
      metric: "PYTORCH 2.6 AUTO-GEN",
      speed: "1.12s",
    },
    {
      step: "03",
      title: "CLUSTER SWEEP",
      desc: "H100 Node Auto-Provisioning",
      accent: "#10B981",
      icon: "🖥️",
      metric: "512x H100 NODES LIVE",
      speed: "AUTO",
    },
    {
      step: "04",
      title: "AUTO-DEBUGGING",
      desc: "Loss Curve & Gradient Healing",
      accent: "#F59E0B",
      icon: "🔄",
      metric: "CONVERGENCE: 0.0018",
      speed: "REALTIME",
    },
  ];

  // Silky smooth continuous cycle: 120 frames per full loop
  const loopDuration = 120;
  const loopProgress = (frame % loopDuration) / loopDuration; // 0 to 1 smoothly
  const currentPos = loopProgress * (stages.length - 1); // 0 to 3 continuously

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        perspective: 1200,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Background Volumetric Glow */}
      <div
        style={{
          position: "absolute",
          width: 1100,
          height: 600,
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          width: 1540,
          height: 660,
          transform: `scale(${entrance}) rotateX(3deg)`,
          background: "rgba(8, 14, 26, 0.96)",
          border: "1.5px solid rgba(56, 189, 248, 0.35)",
          borderRadius: 28,
          padding: "36px 48px",
          boxShadow: "0 35px 95px rgba(0,0,0,0.95), 0 0 50px rgba(56, 189, 248, 0.12)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            paddingBottom: 16,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid #10B981",
                  color: "#10B981",
                  fontSize: 11,
                  fontWeight: 900,
                  padding: "4px 14px",
                  borderRadius: 20,
                  letterSpacing: "0.12em",
                  fontFamily: "monospace",
                }}
              >
                ● LEVEL 4: AUTONOMOUS RESEARCH LEAD
              </span>
              <span style={{ color: "#94A3B8", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em" }}>
                END-TO-END R&amp;D PIPELINE
              </span>
            </div>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#F8FAFC",
                margin: "8px 0 0",
                letterSpacing: "-0.02em",
              }}
            >
              Automated R&amp;D Pipeline Execution
            </h2>
          </div>

          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <OfficialLogoBadge
              logo="claude"
              label="CLAUDE OPUS 5.5"
              sublabel="AUTONOMOUS LEAD"
              size={85}
              glowColor="rgba(217, 119, 87, 0.8)"
            />
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 14,
                padding: "8px 18px",
                textAlign: "right",
              }}
            >
              <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 800, letterSpacing: "0.08em" }}>
                HUMAN INTERVENTION
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#F87171", fontFamily: "monospace" }}>
                0.00%
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Middle Stage: 4 Smoothly Connected Pipeline Cards        */}
        {/* ======================================================== */}
        <div style={{ position: "relative", margin: "14px 0" }}>
          
          {/* Continuous Glowing Wave Flow Line Behind Nodes */}
          <div
            style={{
              position: "absolute",
              top: 52,
              left: 80,
              right: 80,
              height: 4,
              background: "rgba(255, 255, 255, 0.08)",
              borderRadius: 2,
              zIndex: 0,
            }}
          >
            {/* Smooth moving active laser head */}
            <div
              style={{
                position: "absolute",
                left: `${(loopProgress * 100).toFixed(1)}%`,
                top: -6,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#00F0FF",
                boxShadow: "0 0 20px #00F0FF, 0 0 40px #00F0FF",
                transform: "translateX(-50%)",
                transition: "left 0.05s linear",
              }}
            />
            {/* Trail gradient behind laser */}
            <div
              style={{
                position: "absolute",
                left: 0,
                width: `${(loopProgress * 100).toFixed(1)}%`,
                height: "100%",
                background: "linear-gradient(90deg, rgba(56, 189, 248, 0.2) 0%, #00F0FF 100%)",
                borderRadius: 2,
                boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)",
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative", zIndex: 1 }}>
            {stages.map((stage, idx) => {
              // Smooth gaussian-like proximity weight (how close is the pulse to this node)
              const distance = Math.abs(currentPos - idx);
              const proximity = Math.exp(-Math.pow(distance * 1.5, 2)); // Smooth 0 to 1

              const cardSpring = spring({
                frame: frame - idx * 8,
                fps,
                config: { damping: 14, stiffness: 120 },
              });

              // Dynamic glow and border intensity based on proximity
              const glowAlpha = (0.15 + proximity * 0.45).toFixed(2);
              const borderAlpha = (0.2 + proximity * 0.8).toFixed(2);

              return (
                <div
                  key={stage.step}
                  style={{
                    transform: `scale(${Math.max(0, cardSpring) * (1 + proximity * 0.03)}) translateY(${
                      -proximity * 8
                    }px)`,
                    background: `linear-gradient(180deg, ${stage.accent}${Math.round(
                      proximity * 35 + 10
                    ).toString(16).padStart(2, "0")} 0%, rgba(15, 23, 42, 0.85) 100%)`,
                    border: `1.5px solid ${stage.accent}${Math.round(proximity * 200 + 40)
                      .toString(16)
                      .padStart(2, "0")}`,
                    borderRadius: 20,
                    padding: "22px 20px",
                    boxShadow: proximity > 0.3 ? `0 12px 35px ${stage.accent}45` : "0 8px 25px rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out, border 0.15s ease-out",
                  }}
                >
                  <div>
                    {/* Stage Number & Icon */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 900,
                          color: stage.accent,
                          letterSpacing: "0.15em",
                          fontFamily: "monospace",
                        }}
                      >
                        STAGE {stage.step}
                      </span>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          background: `${stage.accent}${Math.round(proximity * 40 + 20)
                            .toString(16)
                            .padStart(2, "0")}`,
                          border: `1px solid ${stage.accent}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 16,
                          boxShadow: proximity > 0.4 ? `0 0 16px ${stage.accent}` : "none",
                        }}
                      >
                        {stage.icon}
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <div
                      style={{
                        fontSize: 19,
                        fontWeight: 900,
                        color: "#FFFFFF",
                        letterSpacing: "0.02em",
                        marginBottom: 6,
                      }}
                    >
                      {stage.title}
                    </div>

                    <div style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.4 }}>
                      {stage.desc}
                    </div>
                  </div>

                  {/* Live Metric Tag at bottom of each card */}
                  <div style={{ marginTop: 18 }}>
                    <div
                      style={{
                        background: "rgba(0,0,0,0.45)",
                        border: `1px solid rgba(255,255,255,0.08)`,
                        borderRadius: 8,
                        padding: "6px 10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          fontFamily: "monospace",
                          color: proximity > 0.5 ? stage.accent : "#64748B",
                          fontWeight: 800,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {stage.metric}
                      </span>
                      <span
                        style={{
                          fontSize: 9,
                          fontFamily: "monospace",
                          color: "#10B981",
                          fontWeight: 700,
                        }}
                      >
                        {stage.speed}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Telemetry Bar */}
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "14px 26px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            <div>
              <span style={{ fontSize: 10, color: "#64748B", fontWeight: 800, letterSpacing: "0.1em" }}>
                SYNTHESIS VELOCITY
              </span>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#00F0FF", fontFamily: "monospace" }}>
                100x Human Speed
              </div>
            </div>

            <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.1)" }} />

            <div>
              <span style={{ fontSize: 10, color: "#64748B", fontWeight: 800, letterSpacing: "0.1em" }}>
                LOSS CURVE OPTIMIZATION
              </span>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#10B981", fontFamily: "monospace" }}>
                Autonomous Self-Healing
              </div>
            </div>

            <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.1)" }} />

            <div>
              <span style={{ fontSize: 10, color: "#64748B", fontWeight: 800, letterSpacing: "0.1em" }}>
                HUMAN ROLE
              </span>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#F59E0B", fontFamily: "monospace" }}>
                High-Level Hypothesis Only
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(0, 240, 255, 0.15)",
              border: "1px solid #00F0FF",
              borderRadius: 10,
              padding: "6px 16px",
              color: "#00F0FF",
              fontSize: 12,
              fontWeight: 900,
              fontFamily: "monospace",
            }}
          >
            ACTIVE PIPELINE: RSI LEVEL 4
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
