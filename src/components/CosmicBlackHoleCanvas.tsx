import React, { useMemo } from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

interface CosmicBlackHoleCanvasProps {
  intensity?: number;
  scale?: number;
  collapseProgress?: number; // 0 to 1 for implosion/folding effects
  glowColor?: string; // default amber '#F59E0B'
}

export const CosmicBlackHoleCanvas: React.FC<CosmicBlackHoleCanvasProps> = ({
  intensity = 1,
  scale = 1,
  collapseProgress = 0,
  glowColor = '#F59E0B',
}) => {
  const frame = useCurrentFrame();

  // Rotation angles for accretion disk
  const diskRotation = frame * 0.8;
  const outerRotation = -frame * 0.4;
  const jetPulse = Math.sin(frame * 0.1) * 0.15 + 0.85;

  // Starfield generation (deterministic)
  const stars = useMemo(() => {
    const list = [];
    for (let i = 0; i < 70; i++) {
      const angle = (i * 137.5 * Math.PI) / 180;
      const radius = 120 + ((i * 37) % 650);
      const size = 1.2 + ((i * 17) % 3.5);
      const speed = 0.2 + ((i * 7) % 0.8);
      list.push({ angle, radius, size, speed });
    }
    return list;
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 1080,
        height: 1920,
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#020408',
      }}
    >
      {/* Background Volumetric Nebula Glow */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900,
          height: 900,
          background: `radial-gradient(circle at center, rgba(245, 158, 11, ${0.15 * intensity}) 0%, rgba(139, 92, 246, ${0.08 * intensity}) 40%, transparent 70%)`,
          filter: 'blur(50px)',
        }}
      />

      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <defs>
          {/* Gravitational Glow Filter */}
          <filter id="bhGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="32" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="bhCoreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Accretion Gradients */}
          <linearGradient id="diskGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="25%" stopColor={glowColor} stopOpacity="0.9" />
            <stop offset="65%" stopColor="#DC2626" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#450A0A" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="jetGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
          </linearGradient>

          {/* Space-time Funnel Curvature Gradient */}
          <radialGradient id="funnelGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="40%" stopColor="#020617" stopOpacity="0.9" />
            <stop offset="85%" stopColor="rgba(56, 189, 248, 0.2)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Orbiting Background Stars being pulled inwards */}
        <g id="starfield">
          {stars.map((star, idx) => {
            const currentRadius = Math.max(
              40,
              (star.radius - (frame * star.speed) % star.radius)
            );
            const currentAngle = star.angle + (frame * 0.005 * (500 / currentRadius));
            const cx = 540 + Math.cos(currentAngle) * currentRadius * (1 - collapseProgress * 0.6);
            const cy = 760 + Math.sin(currentAngle) * (currentRadius * 0.45) * (1 - collapseProgress * 0.6);
            const starOpacity = interpolate(currentRadius, [40, 150, 450], [0, 0.8, 0.4]);

            return (
              <circle
                key={idx}
                cx={cx}
                cy={cy}
                r={star.size}
                fill={idx % 4 === 0 ? '#38BDF8' : idx % 3 === 0 ? '#F59E0B' : '#FFFFFF'}
                opacity={starOpacity * intensity}
              />
            );
          })}
        </g>

        {/* 2. Relativistic Polar Jet Beams */}
        <g opacity={0.65 * jetPulse * intensity}>
          <polygon
            points="536,760 520,100 560,100 544,760"
            fill="url(#jetGrad)"
            filter="url(#bhGlow)"
          />
          <polygon
            points="536,760 520,1420 560,1420 544,760"
            fill="url(#jetGrad)"
            filter="url(#bhGlow)"
          />
        </g>

        {/* Main Black Hole System Group (Centered at 540, 760) */}
        <g
          transform={`translate(540, 760) scale(${scale * (1 + Math.sin(frame * 0.03) * 0.03)})`}
        >
          {/* Gravitational Space-time Distorted Funnel */}
          <ellipse
            cx="0"
            cy="0"
            rx={420 * (1 - collapseProgress * 0.4)}
            ry={210 * (1 - collapseProgress * 0.4)}
            fill="url(#funnelGrad)"
          />

          {/* Outer Accretion Disc Rings */}
          <g transform={`rotate(${outerRotation})`}>
            <ellipse
              cx="0"
              cy="0"
              rx={360 * (1 - collapseProgress * 0.3)}
              ry={140 * (1 - collapseProgress * 0.3)}
              fill="none"
              stroke="url(#diskGradMain)"
              strokeWidth="12"
              strokeDasharray="40 20 80 15 120 30"
              filter="url(#bhGlow)"
              opacity={0.85 * intensity}
            />
            <ellipse
              cx="0"
              cy="0"
              rx={310 * (1 - collapseProgress * 0.25)}
              ry={110 * (1 - collapseProgress * 0.25)}
              fill="none"
              stroke="#EA580C"
              strokeWidth="8"
              strokeDasharray="60 40 100 25"
              filter="url(#bhGlow)"
              opacity={0.7 * intensity}
            />
          </g>

          {/* Inner Swirling Plasma Ring (Relativistic Doppler Beaming) */}
          <g transform={`rotate(${diskRotation})`}>
            <ellipse
              cx="0"
              cy="0"
              rx={240 * (1 - collapseProgress * 0.2)}
              ry={85 * (1 - collapseProgress * 0.2)}
              fill="none"
              stroke="url(#diskGradMain)"
              strokeWidth="24"
              filter="url(#bhGlow)"
              opacity={0.95 * intensity}
            />
            {/* High-speed Doppler plasma hotspot */}
            <ellipse
              cx="-160"
              cy="-25"
              rx="65"
              ry="28"
              fill="#FFFFFF"
              filter="url(#bhCoreGlow)"
              opacity={0.95}
            />
          </g>

          {/* Warped Photon Ring (Lensed Back of the Disk) */}
          <ellipse
            cx="0"
            cy="-30"
            rx={165 * (1 - collapseProgress * 0.15)}
            ry={175 * (1 - collapseProgress * 0.15)}
            fill="none"
            stroke="#FEF08A"
            strokeWidth="7"
            filter="url(#bhCoreGlow)"
            opacity={0.9 * intensity}
          />

          {/* Outer Photon Sphere Edge */}
          <circle
            cx="0"
            cy="0"
            r={135 * (1 - collapseProgress * 0.1)}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4"
            filter="url(#bhCoreGlow)"
            opacity={0.8}
          />

          {/* 3. The Absolute Void: Event Horizon Singularity */}
          <circle
            cx="0"
            cy="0"
            r={128 * (1 - collapseProgress * 0.08)}
            fill="#000000"
          />

          {/* Subtle razor-sharp inner rim */}
          <circle
            cx="0"
            cy="0"
            r={128 * (1 - collapseProgress * 0.08)}
            fill="none"
            stroke="rgba(245, 158, 11, 0.4)"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
};
