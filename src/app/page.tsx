import AdvantagesSection from "@/components/advantageSection/advantagesSection";
import FrequentAskSection from "@/components/askSection/askSection";
import CertificationSection from "@/components/certifications/certificationSection";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import InitialBanner from "@/components/initialBanner";
import ProjectsSection from "@/components/projectSection/projectsSection";
import Head from "next/head";

export default function Home() {
  return (
    <main className="font-montserrat bg-gray-900 text-gray-200">
      <Head>
        <title>Evandro Machado - Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Conheça o portfólio de Evandro Machado, um desenvolvedor full stack apaixonado por criar soluções inovadoras."
        />
        <meta
          property="og:title"
          content="Evandro Machado - Desenvolvedor Full Stack"
        />
        <meta
          property="og:description"
          content="Conheça o portfólio de Evandro Machado, um desenvolvedor full stack apaixonado por criar soluções inovadoras."
        />
      </Head>
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
