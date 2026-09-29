import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img, staticFile } from 'remotion';

interface Isometric3DPlayBlockProps {
  label?: string;
  sublabel?: string;
  badgeText?: string;
  isGlitching?: boolean;
}

export const Isometric3DPlayBlock: React.FC<Isometric3DPlayBlockProps> = ({
  badgeText = "ALTERED / SYNTHETIC",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth cinematic entrance
  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.8, stiffness: 90 },
  });

  // Butter-smooth camera push & organic 3D floating (Magnates Media / ColdFusion style)
  const cameraZoom = interpolate(frame, [0, 240], [1.0, 1.06], {
    extrapolateRight: 'clamp',
  });
  const floatY = Math.sin(frame / 32) * 10;
  const rotY = Math.sin(frame / 42) * 12;
  const rotX = 7 + Math.cos(frame / 50) * 4;

  // Specular diagonal light sheen sweep across glossy badge (runs every ~120 frames)
  const sheenProgress = ((frame % 130) / 130) * 260 - 80;

  // Floor shadow scale & opacity breathes with floating height
  const shadowScale = interpolate(floatY, [-10, 10], [0.92, 1.06]);
  const shadowOpacity = interpolate(floatY, [-10, 10], [0.35, 0.6]);

  return (
    <div
      style={{
        width: 1840,
        height: 1000,
        backgroundColor: '#030712',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        perspective: 1200,
        transform: `scale(${cameraZoom})`,
      }}
    >
      {/* Cinematic Studio Spotlight (Moody Dark Aesthetic) */}
      <div
        style={{
          position: 'absolute',
          width: 1100,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.16) 0%, rgba(220, 38, 38, 0.05) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Studio Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 40%, rgba(3, 7, 18, 0.85) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Sleek Minimal Status Badge (Clean & High-End, Zero HUD Clutter) */}
      {badgeText && (
        <div
          style={{
            position: 'absolute',
            top: 48,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 22px',
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            borderRadius: 100,
            backdropFilter: 'blur(10px)',
            opacity: entrance,
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#EF4444',
              boxShadow: '0 0 12px #EF4444',
            }}
          />
          <span
            style={{
              fontFamily: 'Montserrat, Inter, sans-serif',
              fontSize: 13,
              fontWeight: 800,
              color: '#FCA5A5',
              letterSpacing: 2.5,
              textTransform: 'uppercase',
            }}
          >
            {badgeText}
          </span>
        </div>
      )}

      {/* Main 3D Stage */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `translateY(${floatY}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${entrance})`,
          transformStyle: 'preserve-3d',
          zIndex: 15,
        }}
      >
        {/* Soft Ambient Shadow Beneath Plaque */}
        <div
          style={{
            position: 'absolute',
            bottom: -110,
            width: 520,
            height: 90,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.85) 0%, rgba(239, 68, 68, 0.2) 40%, transparent 75%)',
            transform: `scale(${shadowScale}) rotateX(75deg)`,
            opacity: shadowOpacity,
            filter: 'blur(16px)',
            pointerEvents: 'none',
          }}
        />

        {/* Premium 3D Glossy Plaque Container */}
        <div
          style={{
            width: 580,
            height: 380,
            borderRadius: 56,
            background: 'linear-gradient(145deg, #FF1E1E 0%, #D90429 45%, #990000 100%)',
            boxShadow: `
              0 30px 70px rgba(0, 0, 0, 0.85),
              0 15px 35px rgba(220, 38, 38, 0.4),
              inset 0 2px 6px rgba(255, 255, 255, 0.5),
              inset 0 -4px 12px rgba(0, 0, 0, 0.6)
            `,
            border: '2px solid rgba(255, 255, 255, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Moving Specular Sheen Sweep */}
          <div
            style={{
              position: 'absolute',
              top: -150,
              bottom: -150,
              left: `${sheenProgress}%`,
              width: 140,
              background: 'linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.4) 50%, transparent 80%)',
              transform: 'skewX(-25deg)',
              pointerEvents: 'none',
              filter: 'blur(4px)',
            }}
          />

          {/* Authentic Transparent YouTube Play Logo */}
          <div
            style={{
              width: 320,
              height: 220,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.75))',
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
        </div>
      </div>
    </div>
  );
};
