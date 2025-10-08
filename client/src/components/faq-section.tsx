import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSections = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is BeyondxIT and what services do you offer?",
          answer: "BeyondxIT is a leading technology solutions provider offering comprehensive services including mobile platforms, digital services, identity verification, session booking, and messaging integration. We help businesses transform their operations through innovative technology solutions."
        },
        {
          question: "How secure are your solutions?",
          answer: "Security is our top priority. We implement enterprise-grade encryption, multi-factor authentication, and comply with international security standards including ISO 27001 and GDPR. Our systems undergo regular security audits and penetration testing to ensure the highest level of protection."
        },
        {
          question: "Which industries do you serve?",
          answer: "We serve a wide range of industries including telecommunications, retail and e-commerce, healthcare, and enterprise businesses. Our flexible solutions can be customized to meet the specific needs of any sector requiring technology services."
        }
      ]
    },
    {
      title: "Product & Implementation",
      items: [
        {
          question: "How long does implementation typically take?",
          answer: "Implementation timelines vary based on the complexity and scope of the project. Typically, basic integrations can be completed in 4-6 weeks, while comprehensive enterprise solutions may take 3-6 months. We provide detailed project timelines during the consultation phase and work closely with your team to ensure smooth deployment."
        },
        {
          question: "Do you provide API documentation and developer support?",
          answer: "Yes, we provide comprehensive API documentation, SDKs for multiple programming languages, and dedicated developer support. Our technical team is available 24/7 to assist with integration questions, troubleshooting, and optimization. We also offer sandbox environments for testing before production deployment."
        },
        {
          question: "Can your solutions integrate with existing systems?",
          answer: "Absolutely. Our solutions are designed with flexibility in mind and can integrate seamlessly with most existing enterprise systems, ERP platforms, CRM tools, and third-party services. We support REST APIs, webhooks, and various integration protocols to ensure compatibility with your current infrastructure."
        }
      ]
    },
    {
      title: "Support & Pricing",
      items: [
        {
          question: "What support options are available?",
          answer: "We offer multiple support tiers including 24/7 technical support, dedicated account management, on-site assistance for enterprise clients, regular system updates, and proactive monitoring. All clients receive access to our knowledge base, video tutorials, and community forums. Premium support packages include priority response times and direct access to senior engineers."
        },
        {
          question: "How is pricing structured?",
          answer: "Our pricing is flexible and based on your specific requirements, usage volumes, and features needed. We offer both subscription-based and usage-based pricing models. Contact our sales team for a customized quote tailored to your business needs. We also provide volume discounts for enterprise clients and special pricing for startups."
        },
        {
          question: "Do you offer training for our team?",
          answer: "Yes, we provide comprehensive training programs for your team including onboarding sessions, technical workshops, user training, and ongoing educational resources. Training can be conducted on-site, remotely, or through self-paced online modules. We also offer certification programs for advanced users and administrators."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-secondary mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services, implementation, and support.
          </p>
        </div>
        
        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-2xl font-bold font-display text-secondary mb-6" data-testid={`faq-section-title-${sectionIndex}`}>
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const globalIndex = sectionIndex * 10 + itemIndex; // Create unique index
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div 
                      key={itemIndex}
                      className="bg-card rounded-lg border border-border overflow-hidden"
                      data-testid={`faq-item-${globalIndex}`}
                    >
                      <button
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted transition-colors"
                        onClick={() => toggleAccordion(globalIndex)}
                        data-testid={`button-faq-toggle-${globalIndex}`}
                      >
                        <span className="font-semibold text-foreground pr-4" data-testid={`faq-question-${globalIndex}`}>
                          {item.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div 
                        className={`accordion-content ${isOpen ? 'open' : ''} px-6 pb-0`}
                      >
                        <p className="text-muted-foreground pb-5" data-testid={`faq-answer-${globalIndex}`}>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">Still have questions?</p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="shadow-lg"
            data-testid="button-contact-team"
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
