import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile } from 'remotion';

interface YouTubeUIProps {
  title?: string;
  creatorName?: string;
  subscribers?: string;
  views?: string;
  timeAgo?: string;
  showAiBadge?: boolean;
  aiBadgeText?: string;
  isGlitching?: boolean;
  children?: React.ReactNode;
}

export const YouTubeUI: React.FC<YouTubeUIProps> = ({
  title = "Did AI Just Kill YouTube?",
  creatorName = "The Media Documentary",
  subscribers = "1.42M subscribers",
  views = "842,910 views",
  timeAgo = "14 hours ago",
  showAiBadge = true,
  aiBadgeText = "Altered or synthetic content • Sound or visuals were digitally generated",
  isGlitching = false,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const glitchShift = isGlitching ? Math.sin(frame * 0.8) * 3 : 0;

  return (
    <div
      style={{
        width: 1840,
        height: 1000,
        backgroundColor: '#0a0d14',
        borderRadius: 20,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transform: `scale(${interpolate(entrance, [0, 1], [0.94, 1])}) translateY(${glitchShift}px)`,
        opacity: entrance,
      }}
    >
      {/* Top Navigation Bar */}
      <div
        style={{
          height: 64,
          backgroundColor: '#07090e',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
        }}
      >
        {/* Left: Real Brand Icon + Text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 0 12px rgba(255, 0, 0, 0.6))',
            }}
          >
            <Img
              src={staticFile('logos/youtube_logo.png')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: '#FFFFFF', letterSpacing: -0.5 }}>
            YouTube <span style={{ fontSize: 13, color: '#94a3b8', fontWeight: 600 }}>STUDIO FEED</span>
          </span>
        </div>

        {/* Center: Search Simulation */}
        <div
          style={{
            width: 580,
            height: 38,
            backgroundColor: '#121824',
            borderRadius: 20,
            border: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 18px',
            color: '#64748b',
            fontSize: 14,
          }}
        >
          <span>Search or enter video query...</span>
        </div>

        {/* Right: Creator Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              padding: '6px 14px',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: 16,
              fontSize: 12,
              fontWeight: 700,
              color: '#38BDF8',
            }}
          >
            ● LIVE METRICS
          </div>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            C
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Main Video Viewport (72%) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: 24,
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Video Player Display Container */}
          <div
            style={{
              width: '100%',
              height: 600,
              backgroundColor: '#030508',
              borderRadius: 14,
              border: '1px solid rgba(255, 255, 255, 0.07)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Embedded Visual Slot or Default Generative Video Canvas */}
            {children || (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #090e1a 0%, #03060c 100%)',
                }}
              >
                {/* Subtle moving waveform / diffusion glow */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                      radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 65%),
                      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '100% 100%, 40px 100%',
                    opacity: 0.8,
                  }}
                />
                
                {/* Central Play Badge */}
                <div
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(239, 68, 68, 0.92)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 50px rgba(239, 68, 68, 0.65)',
                    zIndex: 10,
                  }}
                >
                  <span style={{ fontSize: 34, color: '#FFFFFF', marginLeft: 6 }}>▶</span>
                </div>
                <div
                  style={{
                    marginTop: 18,
                    fontFamily: 'Montserrat, Inter, sans-serif',
                    fontSize: 13,
                    fontWeight: 800,
                    color: '#94A3B8',
                    letterSpacing: 2.5,
                    zIndex: 10,
                  }}
                >
                  SYNTHETIC STREAM ACTIVE
                </div>
              </div>
            )}

            {/* Official YouTube Altered or Synthetic Content Disclosure Pill */}
            {showAiBadge && (
              <div
                style={{
                  position: 'absolute',
                  top: 18,
                  left: 20,
                  backgroundColor: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  borderRadius: 8,
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
                  zIndex: 20,
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(56, 189, 248, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  ⓘ
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#f8fafc', letterSpacing: -0.2 }}>
                    Altered or synthetic content
                  </span>
                  <span style={{ fontSize: 11, color: '#94a3b8' }}>
                    Sound or visuals were significantly edited or digitally generated.
                  </span>
                </div>
              </div>
            )}

            {/* Video Controls Bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 48,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ color: '#FFFFFF', fontSize: 16 }}>▶</span>
                <span style={{ color: '#94a3b8', fontSize: 12, fontWeight: 600 }}>04:12 / 12:45</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ color: '#94a3b8', fontSize: 13, fontWeight: 600 }}>1080p HD</span>
                <span style={{ color: '#FFFFFF', fontSize: 15 }}>⛶</span>
              </div>
            </div>
          </div>

          {/* Video Metadata Header */}
          <div style={{ marginTop: 20 }}>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                letterSpacing: -0.5,
              }}
            >
              {title}
            </h1>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 14,
              }}
            >
              {/* Creator Channel Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    fontWeight: 800,
                    fontSize: 18,
                  }}
                >
                  M
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc' }}>
                      {creatorName}
                    </span>
                    <span style={{ color: '#38BDF8', fontSize: 13 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 12, color: '#94a3b8' }}>{subscribers}</span>
                </div>
                <button
                  style={{
                    marginLeft: 16,
                    padding: '8px 20px',
                    borderRadius: 20,
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  Subscribe
                </button>
              </div>

              {/* Engagement Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#1e293b',
                    borderRadius: 18,
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span>👍 48K</span>
                  <span style={{ color: '#475569' }}>|</span>
                  <span>👎</span>
                </div>
                <div
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#1e293b',
                    borderRadius: 18,
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#e2e8f0',
                  }}
                >
                  ↗ Share
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation Feed Sidebar (28%) */}
        <div
          style={{
            width: 440,
            backgroundColor: '#080b12',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            overflow: 'hidden',
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: '#94a3b8', letterSpacing: 0.5 }}>
            RECOMMENDED VIDEOS
          </div>

          {[
            {
              title: "How I Built 100 AI Channels in 24 Hours",
              channel: "AutoTube Mastery",
              views: "1.2M views • 2 days ago",
              badge: "SYNTHETIC",
            },
            {
              title: "The Death of Human Creativity on Video",
              channel: "Future Media",
              views: "430K views • 5 days ago",
              badge: "VERIFIED",
            },
            {
              title: "Sora vs Hollywood: The Full Breakdown",
              channel: "CineTech Lab",
              views: "890K views • 1 week ago",
              badge: "ANALYSIS",
            },
            {
              title: "YouTube's New AI Policy Explained",
              channel: "Creator Insider",
              views: "210K views • 3 days ago",
              badge: "OFFICIAL",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: 12,
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                padding: 10,
                borderRadius: 10,
                border: '1px solid rgba(255, 255, 255, 0.04)',
              }}
            >
              <div
                style={{
                  width: 140,
                  height: 80,
                  backgroundColor: '#151c2c',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: 4,
                    right: 4,
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    padding: '2px 5px',
                    borderRadius: 3,
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  08:24
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#f1f5f9',
                    lineHeight: 1.3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.title}
                </span>
                <span style={{ fontSize: 11, color: '#94a3b8' }}>{item.channel}</span>
                <span style={{ fontSize: 10, color: '#64748b' }}>{item.views}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
