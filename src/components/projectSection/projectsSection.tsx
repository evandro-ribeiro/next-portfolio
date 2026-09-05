"use client";

import ProjectCard from "./ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/portfolioData";

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 tech-grid-bg-sm opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(10,46,101,0.15),transparent)] pointer-events-none" />

      <div className="relative z-10">
        <SectionHeading
          overline="Meu trabalho"
          title="Veja alguns dos"
          highlightedTitle="projetos realizados"
        />

        <div className="flex flex-col gap-8 md:pb-16 md:mx-16 lg:mx-32 mx-4">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              alignment={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
