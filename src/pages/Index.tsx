import { Scissors, MapPin, Phone, Clock, Instagram, Facebook, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import heroImage from "@/assets/hero-barbershop.jpg";
import styleFade from "@/assets/style-fade.jpg";
import styleBeard from "@/assets/style-beard.jpg";
import styleClassic from "@/assets/style-classic.jpg";

const services = [
  {
    name: "Classic Cut",
    price: "$35",
    description: "Precision haircut with hot towel finish",
    duration: "30 min",
  },
  {
    name: "Fade & Style",
    price: "$45",
    description: "Modern fade with styling and finish",
    duration: "45 min",
  },
  {
    name: "Beard Trim",
    price: "$25",
    description: "Shape, trim, and hot towel treatment",
    duration: "20 min",
  },
  {
    name: "The Works",
    price: "$75",
    description: "Haircut, beard trim, and facial treatment",
    duration: "75 min",
  },
];

const galleryImages = [
  { src: styleFade, alt: "Classic Fade", label: "Fade" },
  { src: styleBeard, alt: "Beard Grooming", label: "Beard" },
  { src: styleClassic, alt: "Classic Style", label: "Classic" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Scissors className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-bold text-gradient">BLADE</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          <Button variant="hero" size="sm" className="hidden md:flex">
            Book Now
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-fade-in">
            <div className="container py-4 flex flex-col gap-4">
              <a href="#services" className="text-foreground py-2" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#gallery" className="text-foreground py-2" onClick={() => setMenuOpen(false)}>Gallery</a>
              <a href="#about" className="text-foreground py-2" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" className="text-foreground py-2" onClick={() => setMenuOpen(false)}>Contact</a>
              <Button variant="hero" className="w-full">Book Now</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end pb-16 pt-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Premium barbershop experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 mb-6 animate-fade-up opacity-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Now accepting appointments</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6 animate-fade-up opacity-0 delay-100">
              Crafted for the <span className="text-gradient">Modern</span> Gentleman
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-md animate-fade-up opacity-0 delay-200">
              Where traditional barbering meets contemporary style. Experience precision cuts and premium grooming in an atmosphere designed for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-300">
              <Button variant="hero" size="lg">
                Book Your Cut
              </Button>
              <Button variant="heroOutline" size="lg">
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/30 animate-fade-up opacity-0 delay-400">
              <div>
                <div className="text-2xl font-display font-bold text-gradient">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-gradient">5K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-gradient">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Premium <span className="text-gradient">Grooming</span>
            </h2>
          </div>

          <div className="grid gap-4 md:gap-6 max-w-2xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gold"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-gradient transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-secondary">
                        {service.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-bold text-primary">{service.price}</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-charcoal-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Work</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Style <span className="text-gradient">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-lg font-display font-semibold text-foreground">{image.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8">
              More Than a <span className="text-gradient">Haircut</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Blade, we believe every man deserves to feel confident and look his best. Our master barbers combine 
              time-honored techniques with modern trends to create looks that are uniquely you. Step into our space 
              and experience the difference of true craftsmanship.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon-Sat: 9AM - 8PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Style Street, NYC</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready for Your <span className="text-gradient">Best Look</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your appointment today and experience the Blade difference.
            </p>
            <Button variant="hero" size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="py-12 border-t border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-bold text-gradient">BLADE</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2024 Blade Barbershop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
