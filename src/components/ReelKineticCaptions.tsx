import React from 'react';
import { useCurrentFrame, spring, useVideoConfig } from 'remotion';

export interface CaptionWord {
  text: string;
  isHighlight?: boolean;
  highlightColor?: string;
}

export interface CaptionCue {
  startFrame: number;
  endFrame: number;
  words: CaptionWord[];
}

interface ReelKineticCaptionsProps {
  cues: CaptionCue[];
}

export const ReelKineticCaptions: React.FC<ReelKineticCaptionsProps> = ({ cues }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find currently active cue
  const activeCue = cues.find((c) => frame >= c.startFrame && frame < c.endFrame);

  if (!activeCue) return null;

  const cueLocalFrame = frame - activeCue.startFrame;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 220,
        left: 0,
        width: 1080,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        pointerEvents: 'none',
        padding: '0 40px',
      }}
    >
      {/* Pure High-Impact Kinetic Typography (Zero Clutter, Zero Ugly Boxes) */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px 24px',
          textAlign: 'center',
          maxWidth: 980,
        }}
      >
        {activeCue.words.map((item, index) => {
          // Staggered pop-in spring for each word
          const wordFrame = Math.max(0, cueLocalFrame - index * 2);
          const pop = spring({
            frame: wordFrame,
            fps,
            config: { damping: 12, stiffness: 180 },
          });

          const isHighlighted = item.isHighlight;
          const color = isHighlighted ? (item.highlightColor || '#F59E0B') : '#FFFFFF';

          return (
            <span
              key={index}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: 74,
                fontWeight: 900,
                color,
                textTransform: 'uppercase',
                letterSpacing: 2,
                margin: '0 8px',
                lineHeight: 1.15,
                transform: `scale(${pop})`,
                display: 'inline-block',
                textShadow: isHighlighted
                  ? `0 0 45px ${color}, 0 8px 30px rgba(0,0,0,0.95)`
                  : '0 8px 30px rgba(0,0,0,0.95), 0 2px 10px rgba(0,0,0,0.8)',
              }}
            >
              {item.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};
