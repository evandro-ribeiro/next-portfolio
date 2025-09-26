import AdvantagesSection from "@/components/advantageSection/advantagesSection";
import FrequentAskSection from "@/components/askSection/askSection";
import CertificationSection from "@/components/certifications/certificationSection";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import InitialBanner from "@/components/initialBanner";
import ProjectsSection from "@/components/projectSection/projectsSection";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
  ],
};

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${montserrat.className} bg-gray-900 text-gray-200`}>
      <InitialBanner />
      <ProjectsSection />
      <CertificationSection />
      <AdvantagesSection />
      <FrequentAskSection />
      <Contact />
      <Footer />
    </main>
  );
}
