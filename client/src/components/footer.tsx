import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertNewsletterSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Github
} from "lucide-react";
import type { InsertNewsletter } from "@shared/schema";

export default function Footer() {
  const { toast } = useToast();
  
  const form = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest('POST', '/api/newsletter', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertNewsletter) => {
    newsletterMutation.mutate(data);
  };

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

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Products", id: "products" },
    { label: "Contact", id: "contact" },
    { label: "FAQ", id: "faq" }
  ];

  const services = [
    { label: "Mobile Financial Services", id: "products" },
    { label: "Digital Financial Services", id: "products" },
    { label: "eKYC Solutions", id: "products" },
    { label: "Session Booking", id: "products" },
    { label: "SMS Integration", id: "products" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div data-testid="footer-company">
            <h3 className="text-2xl font-bold font-display mb-4">Beyondx IT</h3>
            <p className="text-gray-300 mb-6">
              Empowering the future of finance through innovative technology solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                  data-testid={`link-social-${index}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                    data-testid={`link-quick-${index}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div data-testid="footer-services">
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.id)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                    data-testid={`link-service-${index}`}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div data-testid="footer-newsletter">
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                {...form.register("email")}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                className="w-full bg-white text-secondary hover:bg-gray-100"
                disabled={newsletterMutation.isPending}
                data-testid="button-subscribe"
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm" data-testid="text-copyright">
              © 2024 Beyondx IT. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-cookie">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-compliance">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
