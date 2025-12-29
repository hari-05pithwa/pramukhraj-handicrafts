import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Award, Truck, Shield, Sparkles } from "lucide-react";

import heroMandir from "@/assets/hero-mandir.jpg";
import carvingDetail from "@/assets/carving-detail.jpg";
import furniturePiece from "@/assets/furniture-piece.jpg";
import craftsmanWork from "@/assets/craftsman-work.jpg";
import productMandirSmall from "@/assets/product-mandir-small.jpg";
import productMandirLarge from "@/assets/product-mandir-large.jpg";
import productConsole from "@/assets/product-console.jpg";
import productPanel from "@/assets/product-panel.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Rajmahal Grand Mandir",
    category: "Temple Collection",
    image: productMandirLarge,
    status: "Available",
  },
  {
    id: 2,
    name: "Compact Pooja Mandir",
    category: "Temple Collection",
    image: productMandirSmall,
    status: "Available",
  },
  {
    id: 3,
    name: "Heritage Console Table",
    category: "Furniture Collection",
    image: productConsole,
    status: "Made to Order",
  },
  {
    id: 4,
    name: "Nakshi Wall Medallion",
    category: "Decorative Arts",
    image: productPanel,
    status: "Available",
  },
];

const trustIndicators = [
  {
    icon: Award,
    title: "40+ Years",
    description: "of master craftsmanship",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description: "Export-grade packaging",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Premium materials only",
  },
  {
    icon: Sparkles,
    title: "Handcrafted",
    description: "Each piece is unique",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1">
              <div className="opacity-0 animate-fade-up">
                <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
                  Established 1982 — Saharanpur, India
                </span>
              </div>
              
              <h1 className="font-serif text-display-lg lg:text-display-xl font-light text-foreground mb-6 opacity-0 animate-fade-up delay-100">
                The Art of <br />
                <span className="font-semibold">Nakshi Carving</span>
              </h1>
              
              <p className="text-body-lg text-muted-foreground mb-10 max-w-lg opacity-0 animate-fade-up delay-200">
                Handcrafted wooden mandirs and heritage furniture, carved by master 
                artisans carrying forward generations of Nakshi tradition. Each piece 
                is a testament to patience, precision, and timeless beauty.
              </p>
              
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up delay-300">
                <Link to="/collections">
                  <Button variant="hero" size="xl">
                    View Collections
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button variant="outline" size="xl">
                    <Phone className="w-5 h-5" />
                    Enquire Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 opacity-0 animate-slide-right delay-200">
              <div className="relative">
                <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-elevated">
                  <img
                    src={heroMandir}
                    alt="Handcrafted Nakshi wooden mandir with intricate carvings"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating accent */}
                <div className="absolute -bottom-6 -left-6 bg-card p-6 shadow-medium rounded-sm hidden lg:block">
                  <p className="font-serif text-heading font-semibold text-foreground">
                    1000+
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    Masterpieces delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {trustIndicators.map((item, index) => (
              <div
                key={item.title}
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <item.icon className="w-8 h-8 mx-auto mb-4 text-brass" />
                <h3 className="font-serif text-heading-sm font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-sm overflow-hidden shadow-soft image-zoom">
                  <img
                    src={carvingDetail}
                    alt="Intricate Nakshi carving detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-soft image-zoom">
                  <img
                    src={furniturePiece}
                    alt="Handcrafted Nakshi swing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-soft image-zoom">
                  <img
                    src={craftsmanWork}
                    alt="Master craftsman at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
                Our Heritage
              </span>
              <h2 className="font-serif text-display font-light text-foreground mb-6">
                Four Generations of <br />
                <span className="font-semibold">Master Craftsmen</span>
              </h2>
              <div className="space-y-6 text-body-lg text-muted-foreground">
                <p>
                  In the heart of Saharanpur, where the art of Nakshi carving has 
                  flourished for centuries, Pramukhraj Handicrafts continues a 
                  legacy that began with our great-grandfather's first chisel strokes.
                </p>
                <p>
                  Each curve, each flourish, each intricate pattern is a conversation 
                  between the wood and the craftsman — a dialogue refined over 
                  generations. We don't just make furniture; we create heirlooms 
                  that will be cherished for generations to come.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Read Our Story
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
              Curated Selection
            </span>
            <h2 className="font-serif text-display font-light text-foreground">
              Featured <span className="font-semibold">Collections</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <Link
                to={`/collections`}
                key={product.id}
                className="group block opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-soft mb-4 image-zoom">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-caption uppercase tracking-widest text-muted-foreground">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-heading-sm font-medium text-foreground group-hover:text-wood-medium transition-colors">
                    {product.name}
                  </h3>
                  <span
                    className={`text-body-sm ${
                      product.status === "Available"
                        ? "text-green-700"
                        : "text-brass-dark"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/collections">
              <Button variant="default" size="lg">
                View All Collections
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-caption uppercase tracking-widest opacity-70 mb-4 block">
              Export Ready
            </span>
            <h2 className="font-serif text-display font-light mb-6">
              Delivering <span className="font-semibold">Heritage Worldwide</span>
            </h2>
            <p className="text-body-lg opacity-80 mb-10">
              Our pieces have found homes across the globe — from devotional spaces in 
              the USA to heritage hotels in Europe. With export-grade packaging, proper 
              documentation, and white-glove delivery, we ensure your treasure arrives 
              in pristine condition, wherever you are.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="ivory" size="xl">
                  Request Export Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-display font-light text-foreground mb-6">
              Let's Create Something <span className="font-semibold">Extraordinary</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you're seeking a sacred mandir for your home, statement furniture 
              for your space, or custom pieces for your project, we're here to bring 
              your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919876543210">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5" />
                  Call +91 98765 43210
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Send Enquiry
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
