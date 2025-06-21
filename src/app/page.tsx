import AdvantagesSection from "@/components/advantageSection/advantagesSection";
import FrequentAskSection from "@/components/askSection/askSection";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import InitialBanner from "@/components/initialBanner";
import ProjectsSection from "@/components/projectSection/projectsSection";

export default function Home() {
  return (
    <main className="font-montserrat">
      <InitialBanner />
      <ProjectsSection />
      <AdvantagesSection />
      <FrequentAskSection />
      <Contact />
      <Footer />
    </main>
  );
}
