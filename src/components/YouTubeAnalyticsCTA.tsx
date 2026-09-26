import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const YouTubeAnalyticsCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animations
  const cardScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const barProgress = interpolate(frame, [15, 60], [0, 0.987], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const numberCount = Math.round(barProgress * 1000) / 10;

  // Subscribe button click animation at frame 90
  const isClicked = frame > 90;
  const btnScale = spring({
    frame: frame - 90,
    fps,
    config: { damping: 10, stiffness: 180 },
  });

  const bellRing =
    frame > 105
      ? Math.sin((frame - 105) * 0.8) * Math.exp(-(frame - 105) * 0.08) * 15
      : 0;

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at center, #111422 0%, #060810 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
      }}
    >
      {/* Top Banner Warning */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "rgba(239, 68, 68, 0.12)",
          border: "1px solid rgba(239, 68, 68, 0.35)",
          borderRadius: 999,
          padding: "10px 28px",
          marginBottom: 36,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#EF4444",
            boxShadow: "0 0 12px #EF4444",
          }}
        />
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#FCA5A5",
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Channel Telemetry Alert: 98.7% Retention Leak
        </span>
      </div>

      {/* Main Analytics Container */}
      <div
        style={{
          width: 1760,
          background: "#0F0F12",
          border: "1px solid #232738",
          borderRadius: 28,
          boxShadow: "0 35px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(99, 102, 241, 0.2)",
          overflow: "hidden",
          transform: `scale(${cardScale})`,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Left Side: Real YouTube Studio Evidence Screenshot */}
        <div
          style={{
            flex: 1.15,
            padding: "40px 48px",
            borderRight: "1px solid #232738",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#05060A",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#94A3B8",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 16,
            }}
          >
            Verified YouTube Studio Metric
          </div>
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid #334155",
              boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
            }}
          >
            <Img
              src={staticFile("evidence/yt_analytics_subscribers.png")}
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 16,
              color: "#64748B",
              fontFamily: "sans-serif",
            }}
          >
            Source: YouTube Studio Analytics (Last 28 Days) · 98.7% Non-Subscribed
          </div>
        </div>

        {/* Right Side: Kinetic Conversion Engine */}
        <div
          style={{
            flex: 0.9,
            padding: 44,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: 34,
                fontWeight: 800,
                color: "#F8FAFC",
                lineHeight: 1.25,
                marginBottom: 20,
              }}
            >
              Only <span style={{ color: "#38BDF8" }}>1.0%</span> of viewers are subscribed.
            </div>
            <div
              style={{
                fontSize: 20,
                color: "#94A3B8",
                lineHeight: 1.5,
                marginBottom: 32,
              }}
            >
              We bring you zero-day model leaks, verified weights, and real hardware tests before
              mainstream tech media.
            </div>

            {/* Dynamic Comparison Bar */}
            <div style={{ marginBottom: 28 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 19,
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                <span style={{ color: "#C084FC" }}>Not Subscribed</span>
                <span style={{ color: "#C084FC" }}>{numberCount}%</span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 18,
                  background: "#1E293B",
                  borderRadius: 999,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${barProgress * 100}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #A855F7, #EC4899)",
                    borderRadius: 999,
                    boxShadow: "0 0 16px rgba(236, 72, 153, 0.6)",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 19,
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                <span style={{ color: "#64748B" }}>Subscribed</span>
                <span style={{ color: "#64748B" }}>1.0%</span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 18,
                  background: "#1E293B",
                  borderRadius: 999,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "1.0%",
                    height: "100%",
                    background: "#38BDF8",
                    borderRadius: 999,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Subscribe Action Pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                flex: 1,
                padding: "18px 24px",
                borderRadius: 16,
                background: isClicked
                  ? "rgba(30, 41, 59, 0.8)"
                  : "linear-gradient(135deg, #EF4444, #DC2626)",
                border: isClicked ? "1px solid #334155" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                cursor: "pointer",
                boxShadow: isClicked ? "none" : "0 8px 24px rgba(239, 68, 68, 0.4)",
                transform: `scale(${isClicked ? 1 : 1 + (1 - btnScale) * 0.05})`,
              }}
            >
              {/* YouTube Play Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="#FFFFFF"
                />
              </svg>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {isClicked ? "Subscribed ✓" : "Subscribe Now"}
              </span>
            </div>

            {/* Notification Bell */}
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 16,
                background: "#1E293B",
                border: "1px solid #334155",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `rotate(${bellRing}deg)`,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                  stroke={isClicked ? "#FACC15" : "#94A3B8"}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21a2 2 0 0 1-3.46 0"
                  stroke={isClicked ? "#FACC15" : "#94A3B8"}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
