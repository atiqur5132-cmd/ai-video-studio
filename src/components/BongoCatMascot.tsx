import React from "react";
import { useCurrentFrame } from "remotion";

export const BongoCatMascot: React.FC<{ size?: number; style?: React.CSSProperties }> = ({
  size = 120,
  style = {},
}) => {
  const frame = useCurrentFrame();
  // Alternate paws typing every 6 frames
  const isLeftDown = Math.floor(frame / 6) % 2 === 0;
  const isRightDown = !isLeftDown;

  return (
    <div
      style={{
        width: size,
        height: size * 0.75,
        position: "relative",
        filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.6))",
        ...style,
      }}
    >
      <svg
        viewBox="0 0 160 120"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Desk / Keyboard Mat */}
        <path d="M 10 100 L 150 100 L 140 118 L 0 118 Z" fill="#E2E8F0" stroke="#1E293B" strokeWidth="3" />
        {/* Mini Keyboard Keys */}
        <rect x="25" y="104" width="12" height="8" rx="2" fill="#94A3B8" />
        <rect x="42" y="104" width="12" height="8" rx="2" fill="#94A3B8" />
        <rect x="59" y="104" width="12" height="8" rx="2" fill="#94A3B8" />
        <rect x="76" y="104" width="12" height="8" rx="2" fill="#94A3B8" />
        <rect x="93" y="104" width="12" height="8" rx="2" fill="#94A3B8" />
        <rect x="110" y="104" width="18" height="8" rx="2" fill="#64748B" />

        {/* Cat Body */}
        <path
          d="M 30 95 C 20 60, 40 25, 80 25 C 120 25, 140 60, 130 95 Z"
          fill="#FFFFFF"
          stroke="#0F172A"
          strokeWidth="3.5"
        />

        {/* Ears */}
        <polygon points="40,35 30,10 60,25" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3.5" strokeLinejoin="round" />
        <polygon points="43,30 36,15 56,25" fill="#FDA4AF" />
        <polygon points="120,35 130,10 100,25" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3.5" strokeLinejoin="round" />
        <polygon points="117,30 124,15 104,25" fill="#FDA4AF" />

        {/* Happy Closed Eyes */}
        <path d="M 52 50 Q 60 44 68 50" fill="none" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 92 50 Q 100 44 108 50" fill="none" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />

        {/* Mouth */}
        <path d="M 74 58 Q 80 63 86 58" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

        {/* Left Paw */}
        {isLeftDown ? (
          <ellipse cx="48" cy="98" rx="14" ry="9" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
        ) : (
          <ellipse cx="48" cy="85" rx="14" ry="9" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
        )}

        {/* Right Paw */}
        {isRightDown ? (
          <ellipse cx="112" cy="98" rx="14" ry="9" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
        ) : (
          <ellipse cx="112" cy="85" rx="14" ry="9" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
        )}
      </svg>
    </div>
  );
};
