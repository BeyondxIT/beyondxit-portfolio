import { Target, Eye, Gem } from "lucide-react";

export default function AboutSection() {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "BeyondxIT was established with a vision to revolutionize financial services through innovative technology solutions."
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Successfully launched Mobile Financial Services platform, serving over 100,000 users in the first year."
    },
    {
      year: "2022",
      title: "Market Expansion",
      description: "Expanded service offerings to include Digital Financial Services and eKYC solutions, reaching 10+ countries."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as a leading fintech innovator with 500K+ active users and $2B+ in transactions processed annually."
    }
  ];

  const teamMembers = [
    {
      name: "John Anderson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Michael Roberts",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Emma Thompson",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-secondary mb-6">
            About <span className="gradient-text">BeyondxIT</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Leading the financial technology revolution with innovative solutions that bridge traditional finance and digital transformation.
          </p>
        </div>
        
        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card p-8 rounded-xl shadow-md border border-border" data-testid="card-mission">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display text-secondary mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To democratize financial services by providing secure, scalable, and innovative technology solutions that empower businesses and individuals to thrive in the digital economy.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-md border border-border" data-testid="card-vision">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold font-display text-secondary mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become the global leader in fintech innovation, setting new standards for accessibility, security, and user experience in financial technology services worldwide.
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
        
        {/* Company Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-bold font-display text-secondary mb-12 text-center">Our Journey</h3>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-12" data-testid={`timeline-item-${index}`}>
                <div className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
                {index < milestones.length - 1 && (
                  <div className="absolute left-3 top-6 w-0.5 h-12 bg-border" />
                )}
                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full" data-testid={`milestone-year-${index}`}>
                      {milestone.year}
                    </span>
                    <h4 className="text-xl font-bold text-secondary" data-testid={`milestone-title-${index}`}>
                      {milestone.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground" data-testid={`milestone-description-${index}`}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Leadership Team */}
        <div>
          <h3 className="text-3xl font-bold font-display text-secondary mb-12 text-center">Leadership Team</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center" data-testid={`team-member-${index}`}>
                <img 
                  src={member.image} 
                  alt={`${member.name} portrait`} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" 
                  data-testid={`img-team-member-${index}`}
                />
                <h4 className="text-lg font-bold text-secondary" data-testid={`text-member-name-${index}`}>
                  {member.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-2" data-testid={`text-member-role-${index}`}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
