import { Target, Eye, Gem } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-secondary mb-6">
            About <span className="gradient-text">Beyondx IT</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Leading the technology revolution with innovative solutions that bridge traditional business and digital transformation.
          </p>
        </div>
        
        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-md border border-border" data-testid="card-mission">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display text-secondary mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To deliver secure, scalable, and innovative technology solutions that empower businesses and individuals to thrive in the digital economy.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-md border border-border" data-testid="card-vision">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold font-display text-secondary mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become a global leader in technology innovation, setting new standards for accessibility, security, and user experience in digital services worldwide.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-md border border-border" data-testid="card-values">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
              <Gem className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold font-display text-secondary mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Innovation, integrity, security, and customer-centricity drive everything we do. We believe in transparent operations and building long-term partnerships based on trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
