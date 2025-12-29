import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

import heroMandir from "@/assets/hero-mandir.jpg";
import carvingDetail from "@/assets/carving-detail.jpg";
import furniturePiece from "@/assets/furniture-piece.jpg";
import craftsmanWork from "@/assets/craftsman-work.jpg";
import productMandirSmall from "@/assets/product-mandir-small.jpg";
import productMandirLarge from "@/assets/product-mandir-large.jpg";
import productConsole from "@/assets/product-console.jpg";
import productPanel from "@/assets/product-panel.jpg";

const galleryImages = [
  { src: heroMandir, alt: "Grand Nakshi carved mandir", category: "Mandirs" },
  { src: carvingDetail, alt: "Intricate carving detail", category: "Details" },
  { src: furniturePiece, alt: "Carved wooden swing", category: "Furniture" },
  { src: craftsmanWork, alt: "Master craftsman at work", category: "Workshop" },
  { src: productMandirLarge, alt: "Rajmahal Grand Mandir", category: "Mandirs" },
  { src: productMandirSmall, alt: "Compact Pooja Mandir", category: "Mandirs" },
  { src: productConsole, alt: "Heritage Console Table", category: "Furniture" },
  { src: productPanel, alt: "Nakshi Wall Medallion", category: "Decorative" },
];

const categories = ["All", "Mandirs", "Furniture", "Details", "Workshop", "Decorative"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block opacity-0 animate-fade-up">
              Our Gallery
            </span>
            <h1 className="font-serif text-display-lg font-light text-foreground mb-6 opacity-0 animate-fade-up delay-100">
              A Visual <span className="font-semibold">Journey</span>
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-xl opacity-0 animate-fade-up delay-200">
              Explore the intricate details, finished masterpieces, and the 
              hands that bring them to life. Each image tells a story of 
              patience, skill, and devotion to craft.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-body-sm font-medium transition-all duration-300 rounded-sm ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid opacity-0 animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="overflow-hidden rounded-sm shadow-soft image-zoom">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-body-sm text-muted-foreground mt-2 text-center">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-background hover:text-muted transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image enlarged"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-display font-light text-foreground mb-6">
              Ready to Own a <span className="font-semibold">Masterpiece?</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10">
              Every piece you see is available for order or can inspire a custom 
              creation tailored to your space and vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/collections">
                <Button variant="hero" size="xl">
                  Browse Collections
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
