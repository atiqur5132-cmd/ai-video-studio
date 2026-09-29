import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const DesktopOsAgentVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.025], {
    extrapolateRight: "clamp",
  });

  // Smooth mouse movement across windows
  const mouseX = interpolate(frame, [0, 40, 70, 100], [450, 950, 1200, 1380], {
    extrapolateRight: "clamp",
  });
  const mouseY = interpolate(frame, [0, 40, 70, 100], [300, 450, 320, 520], {
    extrapolateRight: "clamp",
  });

  const isClicking = frame % 35 > 28;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#02050c",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1000,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(2, 5, 12, 0.98) 75%)",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          width: 1760,
          height: 890,
          transform: `scale(${entrance * scale}) translateY(-12px)`,
          borderRadius: 24,
          border: "1.5px solid rgba(168, 85, 247, 0.6)",
          backgroundColor: "#080c17",
          boxShadow: "0 35px 120px rgba(0, 0, 0, 0.98), 0 0 60px rgba(168, 85, 247, 0.25)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* macOS Desktop Top Menu Bar */}
        <div
          style={{
            height: 48,
            backgroundColor: "rgba(13, 19, 34, 0.95)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            fontSize: 13,
            fontWeight: 700,
            color: "#94a3b8",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: 16 }}></span>
            <span style={{ color: "#FFFFFF", fontWeight: 800 }}>OSWorld 2.1 Agent</span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Environment</span>
            <span>Telemetry</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ color: "#a855f7", fontWeight: 800 }}>● AUTONOMOUS GUI CONTROL</span>
            <span style={{ color: "#10b981", fontWeight: 800 }}>80.1% SUCCESS RATE</span>
          </div>
        </div>

        {/* Desktop Workspace: Multi-Window GUI */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#050813",
            position: "relative",
            padding: 24,
            display: "flex",
            gap: 20,
            overflow: "hidden",
          }}
        >
          {/* Window 1: Web Browser / Enterprise App */}
          <div
            style={{
              flex: 1.2,
              borderRadius: 16,
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backgroundColor: "#0b1120",
              boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: 40,
                backgroundColor: "#0e172a",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ef4444" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10b981" }} />
              </div>
              <div
                style={{
                  flex: 1,
                  height: 24,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 10px",
                  fontSize: 11,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                }}
              >
                https://enterprise.internal/reports/quarterly-financial-audit
              </div>
            </div>

            {/* Browser Content */}
            <div style={{ flex: 1, padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h4 style={{ margin: 0, color: "#FFFFFF", fontSize: 20, fontWeight: 800 }}>Quarterly Financial Audit</h4>
                  <span style={{ color: "#64748b", fontSize: 13 }}>Automated multi-system reconciliation task</span>
                </div>
                <div
                  style={{
                    backgroundColor: isClicking ? "rgba(168, 85, 247, 0.5)" : "rgba(168, 85, 247, 0.2)",
                    border: "1px solid #a855f7",
                    borderRadius: 8,
                    padding: "8px 16px",
                    color: "#FFFFFF",
                    fontWeight: 800,
                    fontSize: 13,
                    boxShadow: isClicking ? "0 0 20px #a855f7" : "none",
                  }}
                >
                  [CLICK TARGET] Execute Audit
                </div>
              </div>

              {/* Data Table */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
                {[
                  { id: "TX-9018", dept: "Engineering", amount: "$428,910.00", status: "VERIFIED" },
                  { id: "TX-9019", dept: "Infrastructure", amount: "$1,120,400.00", status: "VERIFIED" },
                  { id: "TX-9020", dept: "AI Compute", amount: "$3,840,250.00", status: "IN_REVIEW" },
                ].map((row, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 16px",
                      borderRadius: 8,
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      fontSize: 13,
                      fontFamily: "monospace",
                    }}
                  >
                    <span style={{ color: "#a855f7", fontWeight: 700 }}>{row.id}</span>
                    <span style={{ color: "#cbd5e1" }}>{row.dept}</span>
                    <span style={{ color: "#FFFFFF", fontWeight: 800 }}>{row.amount}</span>
                    <span style={{ color: row.status === "VERIFIED" ? "#10b981" : "#f59e0b", fontWeight: 800 }}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Window 2: Agent Telemetry & Action HUD */}
          <div
            style={{
              flex: 0.8,
              borderRadius: 16,
              border: "1px solid rgba(168, 85, 247, 0.3)",
              backgroundColor: "#070c18",
              boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#a855f7", boxShadow: "0 0 10px #a855f7" }} />
                <span style={{ color: "#a855f7", fontSize: 13, fontWeight: 900, fontFamily: "monospace" }}>
                  AGENT INPUT DISPATCHER
                </span>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF", margin: "0 0 8px 0" }}>
                DESKTOP GUI CONTROL
              </h3>
              <p style={{ fontSize: 14, color: "#94a3b8", margin: 0, lineHeight: 1.4 }}>
                Real-time mouse coordinate dispatch, window focus switching, keyboard event simulation, and visual validation.
              </p>
            </div>

            {/* Action Log */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontFamily: "monospace", fontSize: 12 }}>
              <div style={{ padding: "8px 12px", borderRadius: 6, backgroundColor: "rgba(255,255,255,0.03)", color: "#94a3b8" }}>
                1. LOCATE_WINDOW(app: "Chrome", title: "Quarterly Audit")
              </div>
              <div style={{ padding: "8px 12px", borderRadius: 6, backgroundColor: "rgba(255,255,255,0.03)", color: "#94a3b8" }}>
                2. MOVE_MOUSE(x: {Math.round(mouseX)}, y: {Math.round(mouseY)})
              </div>
              <div style={{ padding: "8px 12px", borderRadius: 6, backgroundColor: "rgba(168, 85, 247, 0.15)", color: "#a855f7", border: "1px solid #a855f7" }}>
                3. CLICK(button: "PRIMARY") → EVENT_DISPATCHED
              </div>
              <div style={{ padding: "8px 12px", borderRadius: 6, backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid #10b981" }}>
                4. ASSERTION: OSWorld 2.1 Score: 80.1% (Leap from 57%)
              </div>
            </div>

            {/* Bottom KPI */}
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 10,
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#FFFFFF", fontSize: 13, fontWeight: 800 }}>HUMAN-LIKE REACTION</span>
              <span style={{ color: "#a855f7", fontSize: 15, fontWeight: 900, fontFamily: "monospace" }}>+23.1% HIGHER ACCURACY</span>
            </div>
          </div>

          {/* Animated Mouse Cursor */}
          <div
            style={{
              position: "absolute",
              left: mouseX,
              top: mouseY,
              pointerEvents: "none",
              zIndex: 100,
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.8))",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 3L11 20L13.5 13.5L20 11L4 3Z"
                fill="#a855f7"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            {isClicking && (
              <div
                style={{
                  position: "absolute",
                  left: -8,
                  top: -8,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "2px solid #a855f7",
                  animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
