import React from 'react';
import { Img, staticFile, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

export type LogoType = 'openai' | 'claude' | 'anthropic' | 'blender' | 'unreal' | 'xai';

interface OfficialLogoBadgeProps {
  logo: LogoType;
  size?: number; // default 120
  label?: string;
  sublabel?: string;
  glowColor?: string;
  delay?: number;
}

const LOGO_MAP: Record<LogoType, { file: string; defaultGlow: string; name: string }> = {
  openai: {
    file: 'logos/openai_logo.png',
    defaultGlow: 'rgba(16, 185, 129, 0.6)',
    name: 'OPENAI ASTRA / SOL',
  },
  claude: {
    file: 'logos/claude_logo.png',
    defaultGlow: 'rgba(217, 119, 87, 0.7)',
    name: 'CLAUDE OPUS 5.5',
  },
  anthropic: {
    file: 'logos/anthropic_logo.png',
    defaultGlow: 'rgba(235, 140, 90, 0.6)',
    name: 'ANTHROPIC',
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
    name: 'xAI GROK 4.7',
  },
};

export const OfficialLogoBadge: React.FC<OfficialLogoBadgeProps> = ({
  logo,
  size = 110,
  label,
  sublabel,
  glowColor,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);
  const scale = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const floatY = Math.sin(frame / 20) * 6;
  const currentGlow = glowColor || LOGO_MAP[logo].defaultGlow;
  const displayName = label || LOGO_MAP[logo].name;

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
        {/* Real official downloaded transparent PNG */}
        <Img
          src={staticFile(LOGO_MAP[logo].file)}
          style={{
            width: size,
            height: size,
            objectFit: 'contain',
            filter: `drop-shadow(0 4px 15px ${currentGlow})`,
          }}
        />

        {/* Outer orbital ring */}
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
