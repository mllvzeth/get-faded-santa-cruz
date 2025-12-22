import { MapPin, Phone, Clock, Instagram, Facebook, Menu, X, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import heroImage from "@/assets/hero-barbershop.jpg";
import styleFade from "@/assets/style-fade.jpg";
import styleBeard from "@/assets/style-beard.jpg";
import styleClassic from "@/assets/style-classic.jpg";
import barberRed from "@/assets/barber-red.jpg";
import barberPinks from "@/assets/barber-pinks.jpg";
import barberAnthony from "@/assets/barber-anthony.jpg";
import barberDevin from "@/assets/barber-devin.jpg";
import barberAndreas from "@/assets/barber-andreas.jpg";
import barberOscar from "@/assets/barber-oscar.jpg";
import barberRicky from "@/assets/barber-ricky.jpg";
import barberJose from "@/assets/barber-jose.jpg";
import getfadedLogo from "@/assets/getfaded-logo.png";
const services = [
  {
    name: "Haircuts",
    price: "$33 – $300",
    description: "Standard cuts ($33–$78), Get Faded Special & house calls",
    duration: "30 min – 3 hrs",
  },
  {
    name: "Beard, Shaves & Eyebrows",
    price: "$18 – $48",
    description: "Eyebrow shaping, beard trims & straight razor shaves",
    duration: "15 – 30 min",
  },
  {
    name: "Locs",
    price: "~$153",
    description: "Loc retwist services for maintenance & styling",
    duration: "3 – 4 hrs",
  },
  {
    name: "Add-Ons",
    price: "$10 – $13",
    description: "Shampoo, head wash & design add-ons",
    duration: "15 min",
  },
];

const barbers = [
  { name: "Red Vasquez", image: barberRed, bookingUrl: "https://getsquire.com/booking/book/get-faded-barbershop-santa-cruz/barber/red-vasquez/services" },
  { name: "Pinks", image: barberPinks, bookingUrl: "https://getsquire.com/booking/book/get-faded-barbershop-santa-cruz/barber/pinks-cash-preferred/services" },
  { name: "Anthony Negrete", image: barberAnthony, bookingUrl: "https://getsquire.com/booking/book/get-faded-barbershop-santa-cruz/barber/anthony-negrete/services" },
  { name: "Devin Herrera", image: barberDevin, bookingUrl: "https://getsquire.com/booking/book/get-faded-barbershop-santa-cruz/barber/devin-herrera/services" },
  { name: "Andreas Olmedo", image: barberAndreas, bookingUrl: "https://getsquire.com/booking/book/get-faded-barbershop-santa-cruz/barber/andreas-olmedo/services" },
  { name: "Oscar Rameno", image: barberOscar, bookingUrl: "https://getsquire.com/booking/book/get-faded-barbershop-santa-cruz/barber/oscar-rameno/services" },
  { name: "Ricky Cutz", image: barberRicky, bookingUrl: "https://getsquire.com/booking/book/get-faded-barbershop-santa-cruz/barber/ricky-cutz/services" },
  { name: "Jose Moya", image: barberJose, bookingUrl: "https://getsquire.com/booking/book/get-faded-barbershop-santa-cruz/barber/jose-moya/services" },
];

const galleryImages = [
  { src: styleFade, alt: "Classic Fade", label: "Fade" },
  { src: styleBeard, alt: "Beard Grooming", label: "Beard" },
  { src: styleClassic, alt: "Classic Style", label: "Classic" },
  { src: heroImage, alt: "Premium Cut", label: "Premium" },
  { src: styleFade, alt: "Signature Look", label: "Signature" },
  { src: styleBeard, alt: "Clean Shave", label: "Clean" },
];

const reviews = [
  { name: "Michael T.", text: "Best barbershop in town! Been coming here for 2 years.", rating: 5 },
  { name: "David R.", text: "Marcus always hooks me up with the perfect fade.", rating: 5 },
  { name: "Chris L.", text: "Professional service, great atmosphere. Highly recommend!", rating: 5 },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img src={getfadedLogo} alt="Get Faded Barbershop" className="h-12 md:h-14 w-auto" />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">Barbers</a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">Services</a>
            <a href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">Gallery</a>
            <a href="#reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">Reviews</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">Contact</a>
          </div>

          <Button variant="hero" size="sm" className="hidden md:flex uppercase tracking-wider">
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
              <a href="#team" className="text-foreground py-2 uppercase tracking-wider" onClick={() => setMenuOpen(false)}>Barbers</a>
              <a href="#services" className="text-foreground py-2 uppercase tracking-wider" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#gallery" className="text-foreground py-2 uppercase tracking-wider" onClick={() => setMenuOpen(false)}>Gallery</a>
              <a href="#reviews" className="text-foreground py-2 uppercase tracking-wider" onClick={() => setMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="text-foreground py-2 uppercase tracking-wider" onClick={() => setMenuOpen(false)}>Contact</a>
              <Button variant="hero" className="w-full uppercase tracking-wider">Book Now</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Premium barbershop experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </div>

        <div className="container relative z-10 text-center py-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-up opacity-0">
              ELITE BARBERSHOP <span className="text-gradient">EXPERIENCE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-up opacity-0 delay-100 uppercase tracking-widest">
              In South Carolina
            </p>

            <p className="text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto animate-fade-up opacity-0 delay-200">
              Where traditional barbering meets contemporary style. Premium cuts for the modern gentleman.
            </p>

            <Button variant="hero" size="lg" className="animate-fade-up opacity-0 delay-300 uppercase tracking-wider text-lg px-10 py-6">
              Book Now
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Barbers Section */}
      <section id="team" className="py-20 md:py-28 bg-charcoal-light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Our Team</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 uppercase tracking-wide">
              Meet Our <span className="text-gradient">Barbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {barbers.map((barber, index) => (
              <a 
                key={barber.name}
                href={barber.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary group-hover:shadow-gold transition-all duration-300" />
                  <img 
                    src={barber.image} 
                    alt={barber.name}
                    className="w-full h-full object-cover rounded-full p-1"
                  />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{barber.name}</h3>
                <p className="text-xs text-primary uppercase tracking-wider mt-1">Book Now</p>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" className="uppercase tracking-wider">
              Meet The Team
            </Button>
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

      {/* Video/Gallery Section */}
      <section id="gallery" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Our Work</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 uppercase tracking-wide">
              <span className="text-gradient">Videos</span>
            </h2>
          </div>

          {/* Featured Video */}
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden mb-8 group cursor-pointer">
            <img 
              src={heroImage} 
              alt="Watch our work"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-10 h-10 text-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 md:py-28 bg-charcoal-light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Testimonials</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 uppercase tracking-wide">
              Client <span className="text-gradient">Reviews</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-12">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-foreground">{review.name}</p>
              </div>
            ))}
          </div>

          {/* Review Platform Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <span className="text-2xl">G</span>
              <span className="text-sm font-semibold">Google</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <span className="text-2xl">Y</span>
              <span className="text-sm font-semibold">Yelp</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <Facebook className="w-6 h-6" />
              <span className="text-sm font-semibold">Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={styleClassic} 
            alt="Get your cut today"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
              Get <span className="text-gradient">Faded</span> Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your appointment and experience the difference.
            </p>
            <Button variant="hero" size="lg" className="uppercase tracking-wider px-10">
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact/Location Section */}
      <section id="contact" className="py-20 md:py-28 bg-charcoal-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Visit Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-8 uppercase">
                Our <span className="text-gradient">Location</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>123 Main Street, Columbia, SC 29201</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>(803) 555-1234</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p>Mon - Fri: 9AM - 7PM</p>
                    <p>Sat: 8AM - 6PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
              <Button variant="hero" size="lg" className="mt-8 uppercase tracking-wider">
                Get Directions
              </Button>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <MapPin className="w-16 h-16 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <img src={getfadedLogo} alt="Get Faded Barbershop" className="h-16 w-auto" />

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Bottom */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Blade Barbershop. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/50 mt-2">
                Columbia, South Carolina
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
