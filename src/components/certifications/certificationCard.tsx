"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";

type CertificationCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  date?: string;
  cardBackground?: string;
  iconBg?: string;
  iconColor?: string;
  accent?: string;
};

export default function CertificationCard({
  title,
  subtitle,
  icon,
  date,
  cardBackground = "linear-gradient(135deg, #0a1628, #0b1e4a)",
  iconBg = "#0b397d",
  iconColor = "#7dd3fc",
  accent = "#4C00FF",
}: CertificationCardProps) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: cardBackground,
        color: "#fff",
        borderRadius: "16px",
        padding: "0",
        boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)`,
        overflow: "hidden",
      }}
      contentArrowStyle={{
        borderRight: `12px solid ${iconBg}`,
      }}
      iconStyle={{
        background: iconBg,
        color: iconColor,
        fontSize: "1.25rem",
        boxShadow: `0 0 0 4px ${iconBg}, 0 0 20px ${accent}60, inset 0 2px 0 rgba(255,255,255,0.1)`,
      }}
      icon={icon}
      visible={true}
    >
      <div className="p-4 md:p-5 flex flex-col gap-3 relative">
        {/* Gradient top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
        />

        {/* Header with Subtitle tag and Date pill */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: `${accent}40`,
              border: `1px solid ${accent}70`,
              color: "#ffffff",
            }}
          >
            {subtitle}
          </div>

          {date && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#F5DD61]/15 text-[#F5DD61] border border-[#F5DD61]/40 shadow-[0_0_12px_rgba(245,221,97,0.2)]">
              <svg className="w-3.5 h-3.5 text-[#F5DD61]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </span>
          )}
        </div>

        <h3 className="text-sm md:text-base font-bold text-white leading-snug">
          {title}
        </h3>
      </div>
    </VerticalTimelineElement>
  );
}
