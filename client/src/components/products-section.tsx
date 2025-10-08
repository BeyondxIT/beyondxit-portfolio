import { 
  Smartphone, 
  Building, 
  IdCard, 
  CalendarCheck, 
  MessageSquare, 
  Plug,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const products = [
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Platform",
      description: "Empower your customers with seamless mobile experiences and instant digital interactions.",
      features: [
        "Cross-platform compatibility",
        "Real-time synchronization", 
        "Offline mode support",
        "Push notifications"
      ],
      gradient: "from-primary to-primary/70"
    },
    {
      icon: <Building className="w-8 h-8 text-white" />,
      title: "Digital Infrastructure",
      description: "Complete cloud-based infrastructure for modern businesses and service providers.",
      features: [
        "Scalable architecture",
        "Automated workflows",
        "Data analytics dashboard",
        "API integration"
      ],
      gradient: "from-primary to-primary/70"
    },
    {
      icon: <IdCard className="w-8 h-8 text-white" />,
      title: "Identity Verification",
      description: "Streamline user onboarding with AI-powered identity verification solutions.",
      features: [
        "Biometric authentication",
        "Document scanning",
        "Live verification",
        "Secure validation"
      ],
      gradient: "from-primary to-primary/70"
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-white" />,
      title: "Appointment System",
      description: "Enable customers to schedule appointments and consultations seamlessly.",
      features: [
        "Real-time availability",
        "Automated reminders",
        "Video conferencing", 
        "Queue management"
      ],
      gradient: "from-primary to-primary/70"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Messaging Platform",
      description: "Reliable messaging gateway for alerts, verification codes, and customer communications.",
      features: [
        "Multi-channel delivery",
        "Bulk campaigns",
        "Smart notifications",
        "Analytics & reporting"
      ],
      gradient: "from-primary to-primary/70"
    }
  ];

  const useCases = [
    { icon: "🏢", title: "Corporate", description: "Digital transformation solutions" },
    { icon: "🏪", title: "Retail", description: "Customer engagement systems" },
    { icon: "📱", title: "Telecom", description: "Mobile service platforms" },
    { icon: "💼", title: "Enterprise", description: "Business management solutions" }
  ];

  return (
    <section id="products" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-secondary mb-6">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive technology products designed to accelerate digital transformation and drive business growth.
          </p>
        </div>
        
        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-lg overflow-hidden card-hover border border-border"
              data-testid={`product-card-${index}`}
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-lg flex items-center justify-center mb-6`}>
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold font-display text-secondary mb-4" data-testid={`product-title-${index}`}>
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`product-description-${index}`}>
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3" data-testid={`product-feature-${index}-${featureIndex}`}>
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                  data-testid={`button-learn-more-${index}`}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
          
          {/* Platform Integration Card */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg overflow-hidden card-hover border border-border text-white" data-testid="product-card-integration">
            <div className="p-8">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <Plug className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Complete Platform Integration</h3>
              <p className="text-white/90 mb-6">
                Seamlessly integrate all our services into your existing infrastructure with our comprehensive APIs.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
                data-testid="button-get-api-access"
              >
                Get API Access <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Use Cases Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold font-display text-secondary mb-12 text-center">Industry Applications</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border text-center"
                data-testid={`use-case-${index}`}
              >
                <div className="text-4xl mb-4" data-testid={`use-case-icon-${index}`}>
                  {useCase.icon}
                </div>
                <h4 className="font-bold text-secondary mb-2" data-testid={`use-case-title-${index}`}>
                  {useCase.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`use-case-description-${index}`}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
