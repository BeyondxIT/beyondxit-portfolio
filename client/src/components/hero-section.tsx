import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/modern_technology_ab_04a87b81.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              Transforming Business Through{" "}
              <span className="gradient-text">Innovation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              BeyondxIT delivers cutting-edge technology solutions that empower businesses and individuals with seamless digital services, intelligent automation, and innovative platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('products')}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-lg"
                data-testid="button-explore-solutions"
              >
                Explore Solutions
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                data-testid="button-contact-sales"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img 
              src={heroImage}
              alt="Modern technology innovation" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-6 animate-bounce">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
