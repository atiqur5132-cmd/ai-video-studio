import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export interface ComparisonTableCell {
  text: string;
  color?: string;
  badge?: string;
}

export interface ComparisonTableProps {
  headers: string[];
  rows: {
    label: string;
    cells: (string | ComparisonTableCell)[];
  }[];
  width?: number;
  highlightColIndex?: number;
  highlightRowIndex?: number;
  highlightColor?: string;
  delay?: number;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  headers,
  rows,
  width = 1100,
  highlightColIndex,
  highlightRowIndex,
  highlightColor = "#22c55e",
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const highlightSpring = spring({
    frame: Math.max(0, frame - delay - 15),
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  return (
    <div
      style={{
        width,
        border: "1px solid #475569",
        backgroundColor: "#000000",
        fontFamily: "'Nunito', 'Inter', -apple-system, sans-serif",
        position: "relative",
        boxSizing: "border-box",
        transform: `scale(${entrance})`,
        opacity: entrance,
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `260px repeat(${headers.length}, 1fr)`,
          borderBottom: "1px solid #475569",
          backgroundColor: "#050505",
        }}
      >
        <div style={{ padding: "18px 20px" }} />
        {headers.map((h, i) => (
          <div
            key={i}
            style={{
              padding: "18px 20px",
              fontSize: 26,
              fontWeight: 700,
              color: "#fde047",
              textAlign: "center",
              borderLeft: "1px solid #475569",
            }}
          >
            {h}
          </div>
        ))}
      </div>

      {/* Rows */}
      {rows.map((row, rIdx) => {
        const isRowHighlighted = highlightRowIndex === rIdx;
        return (
          <div
            key={rIdx}
            style={{
              display: "grid",
              gridTemplateColumns: `260px repeat(${headers.length}, 1fr)`,
              borderBottom: rIdx < rows.length - 1 ? "1px solid #334155" : "none",
              position: "relative",
              backgroundColor: isRowHighlighted ? `${highlightColor}08` : "transparent",
            }}
          >
            {/* Row Label */}
            <div
              style={{
                padding: "20px 24px",
                fontSize: 28,
                fontWeight: 700,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
              }}
            >
              {row.label}
            </div>

            {/* Cells */}
            {row.cells.map((cell, cIdx) => {
              const text = typeof cell === "string" ? cell : cell.text;
              const cellColor = typeof cell === "string" ? "#ffffff" : (cell.color || "#ffffff");
              const isColHighlighted = highlightColIndex === cIdx;

              return (
                <div
                  key={cIdx}
                  style={{
                    padding: "20px 24px",
                    fontSize: 26,
                    fontWeight: 600,
                    color: cellColor,
                    textAlign: "center",
                    borderLeft: "1px solid #334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isColHighlighted ? `${highlightColor}0a` : "transparent",
                  }}
                >
                  {text}
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Highlight Outline Box */}
      {highlightColIndex !== undefined && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `calc(260px + ${highlightColIndex} * ((100% - 260px) / ${headers.length}))`,
            width: `calc((100% - 260px) / ${headers.length})`,
            border: `2px solid ${highlightColor}`,
            boxShadow: `0 0 25px ${highlightColor}44`,
            pointerEvents: "none",
            transform: `scale(${highlightSpring})`,
            opacity: highlightSpring,
          }}
        />
      )}
    </div>
  );
};
