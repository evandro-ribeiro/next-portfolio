"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CertificationCard from "./certificationCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/data/portfolioData";

const themes: Record<string, { cardBg: string; iconBg: string; iconColor: string; accent: string }> = {
  "2022": {
    cardBg: "linear-gradient(135deg, #0a1628 0%, #0b1e4a 50%, #0d2878 100%)",
    iconBg: "#0b397d",
    iconColor: "#7dd3fc",
    accent: "#4C00FF",
  },
  "2023": {
    cardBg: "linear-gradient(135deg, #0a1a0a 0%, #0d3320 50%, #0a4a1a 100%)",
    iconBg: "#14532d",
    iconColor: "#86efac",
    accent: "#22c55e",
  },
  "2024": {
    cardBg: "linear-gradient(135deg, #1a0a1e 0%, #3b0764 50%, #4c0070 100%)",
    iconBg: "#581c87",
    iconColor: "#d8b4fe",
    accent: "#a855f7",
  },
  "2025": {
    cardBg: "linear-gradient(135deg, #1a100a 0%, #431407 50%, #7c2d12 100%)",
    iconBg: "#9a3412",
    iconColor: "#fdba74",
    accent: "#ff8300",
  },
  "2024 - 2025": {
    cardBg: "linear-gradient(135deg, #1a100a 0%, #431407 50%, #7c2d12 100%)",
    iconBg: "#9a3412",
    iconColor: "#fdba74",
    accent: "#ff8300",
  },
};

function getTheme(date: string) {
  return themes[date] || themes["2022"];
}

export default function CertificationSection() {
  return (
    <section className="relative py-20 overflow-hidden" id="certificacoes">
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid-bg-sm opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,131,0,0.06),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(76,0,255,0.06),transparent)] pointer-events-none" />

      <div className="relative z-10">
        <SectionHeading
          overline="Formação"
          title="Certificações"
          subtitle="Uma jornada contínua de aprendizado e especialização em tecnologia"
        />

        <VerticalTimeline
          lineColor="transparent"
          layout="2-columns"
          animate={true}
          className="h-full"
        >
          {CERTIFICATIONS.map((cert) => {
            const theme = getTheme(cert.date);
            return (
              <CertificationCard
                key={cert.id}
                title={cert.title}
                subtitle={cert.subtitle}
                icon={cert.icon}
                date={cert.date}
                cardBackground={theme.cardBg}
                iconBg={theme.iconBg}
                iconColor={theme.iconColor}
                accent={theme.accent}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}
