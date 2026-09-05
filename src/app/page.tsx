import CertificationSection from "@/components/certifications/certificationSection";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import InitialBanner from "@/components/initialBanner";
import ProjectsSection from "@/components/projectSection/projectsSection";
import type { Metadata } from "next";
import PageWrapper from "@/components/pageWrapper";

export const metadata: Metadata = {
  title: "Evandro Machado - Desenvolvedor Full Stack",
  description:
    "Conheça o portfólio de Evandro Machado, um desenvolvedor full stack apaixonado por criar soluções inovadoras.",
  openGraph: {
    title: "Evandro Machado - Desenvolvedor Full Stack",
    description:
      "Conheça o portfólio de Evandro Machado, um desenvolvedor full stack apaixonado por criar soluções inovadoras.",
  },
  keywords: [
    "Desenvolvimento Web",
    "Criação de sites",
    "Criação de landing page",
    "Full Stack",
    "React",
    "Next.js",
  ],
};

export default function Home() {
  return (
    <PageWrapper>
      <InitialBanner />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <CertificationSection />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </PageWrapper>
  );
}
