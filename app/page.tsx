import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ServiceFlowSection from "@/components/sections/ServiceFlowSection";
import ProfileSection from "@/components/sections/ProfileSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ServiceFlowSection />
        <ProfileSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
