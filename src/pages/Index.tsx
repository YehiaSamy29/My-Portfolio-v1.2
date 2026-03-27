import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToolsMarquee from "@/components/ToolsMarquee";
import IdealClientSection from "@/components/IdealClientSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ToolsMarquee />
      <IdealClientSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
