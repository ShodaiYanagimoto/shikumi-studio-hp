import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import ProfileSection from "@/components/sections/ProfileSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ServiceFlowSection from "@/components/sections/ServiceFlowSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ProfileSection />
        <ServicesSection />
        <ServiceFlowSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
