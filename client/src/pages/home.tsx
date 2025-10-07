import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import ProductsSection from "@/components/products-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
