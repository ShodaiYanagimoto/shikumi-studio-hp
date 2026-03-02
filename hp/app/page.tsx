import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ApproachSection from "@/components/sections/ApproachSection";
import ProfileSection from "@/components/sections/ProfileSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <ProfileSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
