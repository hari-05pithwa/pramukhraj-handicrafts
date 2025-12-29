import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Heart, Globe } from "lucide-react";

import craftsmanWork from "@/assets/craftsman-work.jpg";
import carvingDetail from "@/assets/carving-detail.jpg";
import heroMandir from "@/assets/hero-mandir.jpg";
import furniturePiece from "@/assets/furniture-piece.jpg";

const milestones = [
  { year: "1982", event: "Founded by Shri Pramukhraj in Saharanpur" },
  { year: "1995", event: "First international export to USA" },
  { year: "2005", event: "Expanded workshop with 25+ artisans" },
  { year: "2015", event: "Recognized by Handicraft Export Council" },
  { year: "2024", event: "Serving clients across 40+ countries" },
];

const values = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "We use only premium-grade wood and materials, with multiple quality checks at every stage of creation.",
  },
  {
    icon: Users,
    title: "Master Craftsmanship",
    description: "Our artisans train for years under experienced masters, ensuring traditional techniques are preserved and perfected.",
  },
  {
    icon: Heart,
    title: "Passion for Heritage",
    description: "Every piece carries the soul of centuries-old Nakshi traditions, kept alive through our dedication.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "From Saharanpur to the world, we deliver our heritage with care, proper documentation, and export expertise.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block opacity-0 animate-fade-up">
                Our Story
              </span>
              <h1 className="font-serif text-display-lg font-light text-foreground mb-6 opacity-0 animate-fade-up delay-100">
                Four Decades of <br />
                <span className="font-semibold">Timeless Craft</span>
              </h1>
              <p className="text-body-lg text-muted-foreground opacity-0 animate-fade-up delay-200">
                In 1982, Shri Pramukhraj began carving wood in a small workshop in 
                Saharanpur, the historic heartland of Indian wood craftsmanship. 
                What started as a humble pursuit of excellence has grown into a 
                legacy that spans generations and continents.
              </p>
            </div>
            <div className="opacity-0 animate-slide-right delay-300">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-elevated">
                <img
                  src={craftsmanWork}
                  alt="Master craftsman carving Nakshi patterns"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-display font-light text-foreground mb-8 text-center">
              The <span className="font-semibold">Nakshi</span> Tradition
            </h2>
            <div className="space-y-6 text-body-lg text-muted-foreground text-center">
              <p>
                Nakshi carving is an ancient Indian art form that transforms raw wood 
                into intricate tapestries of floral motifs, geometric patterns, and 
                sacred symbols. The word "Nakshi" itself means "embroidered" or 
                "engraved" — reflecting the delicate, thread-like precision required.
              </p>
              <p>
                Saharanpur, our home, has been the epicenter of this craft for over 
                400 years. Here, the art is not taught in schools but passed from 
                father to son, from master to apprentice, through years of patient 
                practice and observation.
              </p>
              <p>
                At Pramukhraj Handicrafts, we are proud custodians of this living 
                heritage. Our workshop brings together artisans from families that 
                have practiced Nakshi carving for generations, united by a shared 
                commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
              Our Journey
            </span>
            <h2 className="font-serif text-display font-light text-foreground">
              Milestones in <span className="font-semibold">Excellence</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-8 mb-8 last:mb-0 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-serif text-heading font-semibold text-brass">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-brass" />
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-grow pb-8">
                  <p className="text-body-lg text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {[heroMandir, carvingDetail, furniturePiece, craftsmanWork].map((img, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img
                src={img}
                alt="Pramukhraj Handicrafts work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
              What Guides Us
            </span>
            <h2 className="font-serif text-display font-light text-foreground">
              Our <span className="font-semibold">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 bg-secondary rounded-sm opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <value.icon className="w-10 h-10 mx-auto mb-6 text-brass" />
                <h3 className="font-serif text-heading-sm font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-display font-light mb-6">
              Experience Our <span className="font-semibold">Craftsmanship</span>
            </h2>
            <p className="text-body-lg opacity-80 mb-10">
              Whether you seek a sacred mandir, a statement furniture piece, or a 
              custom creation, we invite you to be part of our continuing story.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/collections">
                <Button variant="ivory" size="xl">
                  View Collections
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
