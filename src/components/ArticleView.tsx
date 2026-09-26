import React from "react";

interface ArticleViewProps {
  publication: string;
  publicationColor?: string;
  headline: string;
  subheadline?: string;
  dateStr?: string;
  author?: string;
  bodyParagraphs: string[];
  highlightSentence?: string;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  publication,
  publicationColor = "#EF4444",
  headline,
  subheadline,
  dateStr = "September 12, 2026",
  author = "By Tech Desk",
  bodyParagraphs,
  highlightSentence,
}) => {
  return (
    <div
      style={{
        flex: 1,
        padding: "40px 60px",
        backgroundColor: "#07090E",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1420,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Publication Flag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid #1E293B", paddingBottom: 16, marginBottom: 20 }}>
          <span style={{ fontSize: 26, fontWeight: 900, color: publicationColor, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            {publication}
          </span>
          <span style={{ fontSize: 15, color: "#64748B", fontFamily: "sans-serif", fontWeight: 600 }}>{dateStr}</span>
        </div>

        {/* Article Headline */}
        <h1 style={{ fontSize: 44, lineHeight: 1.25, fontWeight: 900, color: "#FFFFFF", marginBottom: 14, fontFamily: "'Georgia', serif" }}>
          {headline}
        </h1>

        {subheadline && (
          <p style={{ fontSize: 22, color: "#94A3B8", lineHeight: 1.45, marginBottom: 18, fontFamily: "sans-serif" }}>
            {subheadline}
          </p>
        )}

        <div style={{ fontSize: 14, color: "#64748B", fontFamily: "sans-serif", marginBottom: 28, fontWeight: 600 }}>
          {author} · 4 MIN READ
        </div>

        {/* Body Paragraphs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 24, lineHeight: 1.6, color: "#CBD5E1", fontFamily: "'Georgia', serif" }}>
          {bodyParagraphs.slice(0, 3).map((para, i) => {
            if (highlightSentence && para.includes(highlightSentence)) {
              const parts = para.split(highlightSentence);
              return (
                <p key={i} style={{ margin: 0 }}>
                  {parts[0]}
                  <mark
                    style={{
                      backgroundColor: "rgba(250, 204, 21, 0.35)",
                      color: "#FFFFFF",
                      padding: "2px 8px",
                      borderRadius: 4,
                      borderBottom: "3px solid #EAB308",
                      fontWeight: 700,
                    }}
                  >
                    {highlightSentence}
                  </mark>
                  {parts[1]}
                </p>
              );
            }
            return <p key={i} style={{ margin: 0 }}>{para}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
