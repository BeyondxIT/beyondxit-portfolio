import { Button } from "@/components/ui/button";

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
              Transforming Financial Services Through{" "}
              <span className="gradient-text">Innovation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              BeyondxIT delivers cutting-edge fintech solutions that empower businesses and individuals with seamless mobile financial services, digital banking, and intelligent automation.
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
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                data-testid="button-contact-sales"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Financial technology dashboard" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white border-opacity-20">
          <div className="text-center text-white" data-testid="stat-users">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">500K+</div>
            <div className="text-gray-200">Active Users</div>
          </div>
          <div className="text-center text-white" data-testid="stat-transactions">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">$2B+</div>
            <div className="text-gray-200">Transactions Processed</div>
          </div>
          <div className="text-center text-white" data-testid="stat-uptime">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">99.9%</div>
            <div className="text-gray-200">Uptime Guarantee</div>
          </div>
          <div className="text-center text-white" data-testid="stat-clients">
            <div className="text-4xl md:text-5xl font-bold font-display mb-2">150+</div>
            <div className="text-gray-200">Enterprise Clients</div>
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
