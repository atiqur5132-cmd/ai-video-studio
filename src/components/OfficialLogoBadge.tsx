import React from 'react';
import { Img, staticFile, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export type LogoType = 'openai' | 'claude' | 'anthropic' | 'blender' | 'unreal' | 'xai' | 'google' | 'meta' | 'youtube' | 'gemini';

interface OfficialLogoBadgeProps {
  logo: LogoType;
  size?: number; // default 120
  label?: string;
  sublabel?: string;
  glowColor?: string;
  delay?: number;
  staticMode?: boolean;
  fullCanvas?: boolean;
}

const LOGO_MAP: Record<LogoType, { file: string; defaultGlow: string; name: string }> = {
  youtube: {
    file: 'logos/youtube_logo.png',
    defaultGlow: 'rgba(255, 0, 0, 0.7)',
    name: 'YOUTUBE',
  },
  openai: {
    file: 'logos/openai_logo.png',
    defaultGlow: 'rgba(16, 185, 129, 0.6)',
    name: 'OPENAI',
  },
  claude: {
    file: 'logos/claude_logo.png',
    defaultGlow: 'rgba(217, 119, 87, 0.7)',
    name: 'CLAUDE',
  },
  anthropic: {
    file: 'logos/anthropic_logo.png',
    defaultGlow: 'rgba(235, 140, 90, 0.6)',
    name: 'ANTHROPIC',
  },
  google: {
    file: 'logos/google_logo.png',
    defaultGlow: 'rgba(66, 133, 244, 0.7)',
    name: 'GOOGLE',
  },
  gemini: {
    file: 'logos/gemini_logo.png',
    defaultGlow: 'rgba(56, 189, 248, 0.7)',
    name: 'GOOGLE GEMINI',
  },
  meta: {
    file: 'logos/meta_logo.png',
    defaultGlow: 'rgba(24, 119, 242, 0.7)',
    name: 'META AI',
  },
  blender: {
    file: 'logos/blender_logo.png',
    defaultGlow: 'rgba(245, 122, 28, 0.7)',
    name: 'BLENDER 3D',
  },
  unreal: {
    file: 'logos/unreal_logo.png',
    defaultGlow: 'rgba(14, 165, 233, 0.6)',
    name: 'UNREAL ENGINE 5',
  },
  xai: {
    file: 'logos/xai_logo.png',
    defaultGlow: 'rgba(255, 255, 255, 0.6)',
    name: 'xAI GROK',
  },
};

export const OfficialLogoBadge: React.FC<OfficialLogoBadgeProps> = ({
  logo,
  size = 140,
  label,
  sublabel,
  glowColor,
  delay = 0,
  staticMode = false,
  fullCanvas = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = staticMode ? 30 : Math.max(0, frame - delay);
  const scale = staticMode ? 1 : spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const floatY = Math.sin(frame / 20) * 8;
  const currentGlow = glowColor || LOGO_MAP[logo].defaultGlow;
  const displayName = label || LOGO_MAP[logo].name;

  if (fullCanvas) {
    const ringRot1 = frame * 1.5;
    const ringRot2 = -frame * 1.0;
    const actualSize = Math.max(size, 300);

    return (
      <div
        style={{
          width: 1840,
          height: 1000,
          backgroundColor: '#02050c',
          borderRadius: 24,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 40px 120px rgba(0, 0, 0, 0.98)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          perspective: 1400,
          opacity: scale,
        }}
      >
        {/* 3D Perspective Grid Floor */}
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            width: 2400,
            height: 750,
            background: `
              linear-gradient(to bottom, transparent, ${currentGlow} 50%, rgba(2, 5, 12, 0.95)),
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255, 255, 255, 0.08) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255, 255, 255, 0.08) 40px)
            `,
            transform: 'perspective(600px) rotateX(68deg)',
            pointerEvents: 'none',
            opacity: 0.35,
          }}
        />

        {/* Volumetric Radial Glow */}
        <div
          style={{
            position: 'absolute',
            width: 1300,
            height: 900,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${currentGlow} 0%, transparent 65%)`,
            filter: 'blur(80px)',
            opacity: 0.25,
            pointerEvents: 'none',
          }}
        />

        {/* Sleek Minimal Status Badge */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '8px 22px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 100,
            backdropFilter: 'blur(10px)',
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#38BDF8',
              boxShadow: `0 0 12px ${currentGlow}`,
            }}
          />
          <span
            style={{
              fontFamily: 'Montserrat, Inter, sans-serif',
              fontSize: 13,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: 2.5,
              textTransform: 'uppercase',
            }}
          >
            {label}
          </span>
        </div>

        {/* Center Grand 3D Logo Stage */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transform: `translateY(${floatY - 45}px)`,
            zIndex: 15,
          }}
        >
          {/* Orbital Rings Container */}
          <div
            style={{
              width: actualSize + 140,
              height: actualSize + 140,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 70%, transparent 100%)',
              border: '2px solid rgba(255,255,255,0.15)',
              boxShadow: `0 0 60px ${currentGlow}, inset 0 0 40px rgba(255,255,255,0.05)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Outer Orbital Dashed Ring */}
            <div
              style={{
                position: 'absolute',
                width: actualSize + 220,
                height: actualSize + 220,
                borderRadius: '50%',
                border: '1.5px solid rgba(56, 189, 248, 0.35)',
                opacity: 0.6,
                transform: `rotate(${ringRot1}deg)`,
                pointerEvents: 'none',
              }}
            />

            {/* Counter-Rotating Inner Ring */}
            <div
              style={{
                position: 'absolute',
                width: actualSize + 180,
                height: actualSize + 180,
                borderRadius: '50%',
                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                transform: `rotate(${ringRot2}deg)`,
                pointerEvents: 'none',
              }}
            />

            {/* Official Transparent PNG Logo */}
            <Img
              src={staticFile(LOGO_MAP[logo].file)}
              style={{
                width: actualSize,
                height: actualSize,
                objectFit: 'contain',
                filter: `drop-shadow(0 15px 35px ${currentGlow})`,
              }}
            />
          </div>

          {/* Title & Subtitle Badge */}
          <div
            style={{
              marginTop: 28,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: 2,
                textShadow: '0 4px 20px rgba(0,0,0,0.9)',
              }}
            >
              {displayName}
            </div>
            {sublabel && (
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: '#38BDF8',
                  letterSpacing: 2,
                  marginTop: 6,
                }}
              >
                {sublabel}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Fallback Inline Badge
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: `scale(${scale}) translateY(${floatY}px)`,
        transformOrigin: 'center center',
      }}
    >
      <div
        style={{
          width: size + 36,
          height: size + 36,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          border: '1.5px solid rgba(255,255,255,0.18)',
          boxShadow: `0 0 35px ${currentGlow}, inset 0 0 20px rgba(255,255,255,0.05)`,
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Img
          src={staticFile(LOGO_MAP[logo].file)}
          style={{
            width: size,
            height: size,
            objectFit: 'contain',
            filter: `drop-shadow(0 4px 15px ${currentGlow})`,
          }}
        />

        <div
          style={{
            position: 'absolute',
            width: size + 50,
            height: size + 50,
            borderRadius: '50%',
            border: `1px dashed ${currentGlow}`,
            opacity: 0.4,
            transform: `rotate(${frame * 0.8}deg)`,
            pointerEvents: 'none',
          }}
        />
      </div>

      {displayName && (
        <div
          style={{
            marginTop: 14,
            background: 'rgba(0,0,0,0.65)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 20,
            padding: '6px 18px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: '0.12em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            {displayName}
          </span>
          {sublabel && (
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                fontSize: 12,
                color: '#94A3B8',
                letterSpacing: '0.06em',
                marginTop: 2,
              }}
            >
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
