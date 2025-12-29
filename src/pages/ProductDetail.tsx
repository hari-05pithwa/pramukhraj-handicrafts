import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Check, Ruler, TreeDeciduous, Sparkles } from "lucide-react";

import productMandirSmall from "@/assets/product-mandir-small.jpg";
import productMandirLarge from "@/assets/product-mandir-large.jpg";
import productConsole from "@/assets/product-console.jpg";
import productPanel from "@/assets/product-panel.jpg";
import heroMandir from "@/assets/hero-mandir.jpg";
import furniturePiece from "@/assets/furniture-piece.jpg";
import carvingDetail from "@/assets/carving-detail.jpg";

const productsData: Record<string, {
  name: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
  status: string;
  price: string;
  details: {
    material: string;
    dimensions: string;
    finish: string;
    leadTime: string;
  };
  features: string[];
}> = {
  "1": {
    name: "Rajmahal Grand Mandir",
    category: "Temple Collection",
    description: "An opulent temple piece featuring multiple domes and intricate Nakshi work. This grand mandir stands as a centerpiece of devotion, with hand-carved pillars, ornate finials, and traditional brass fittings.",
    image: productMandirLarge,
    gallery: [productMandirLarge, carvingDetail, heroMandir],
    status: "Available",
    price: "On Request",
    details: {
      material: "Premium Sheesham (Indian Rosewood)",
      dimensions: "6ft H × 4ft W × 2.5ft D (Customizable)",
      finish: "Natural polish with brass accents",
      leadTime: "8-12 weeks",
    },
    features: [
      "Hand-carved by master artisans",
      "Traditional Nakshi patterns throughout",
      "Genuine brass fittings and finials",
      "Multiple storage drawers",
      "LED lighting provision",
      "Export-grade packaging available",
    ],
  },
  "2": {
    name: "Compact Pooja Mandir",
    category: "Temple Collection",
    description: "Perfect for modern homes and apartments, this compact mandir brings traditional aesthetics to smaller spaces without compromising on the intricate craftsmanship.",
    image: productMandirSmall,
    gallery: [productMandirSmall, carvingDetail],
    status: "Available",
    price: "₹45,000+",
    details: {
      material: "Teak Wood",
      dimensions: "2.5ft H × 1.5ft W × 1ft D",
      finish: "Walnut polish",
      leadTime: "4-6 weeks",
    },
    features: [
      "Space-efficient design",
      "Hand-carved details",
      "Easy assembly",
      "Brass deity pedestal included",
    ],
  },
  "3": {
    name: "Heritage Carved Mandir",
    category: "Temple Collection",
    description: "A classic temple design featuring elaborate brass embellishments and centuries-old carving patterns passed down through generations.",
    image: heroMandir,
    gallery: [heroMandir, carvingDetail],
    status: "Made to Order",
    price: "On Request",
    details: {
      material: "Premium Sheesham",
      dimensions: "Custom sizes available",
      finish: "Traditional natural polish",
      leadTime: "10-14 weeks",
    },
    features: [
      "Fully customizable dimensions",
      "Antique brass work",
      "Traditional lamp holders",
      "Intricate jali work",
    ],
  },
  "4": {
    name: "Heritage Console Table",
    category: "Furniture Collection",
    description: "An elegant console table featuring beautifully turned legs and a carved border panel, perfect for entryways and living spaces.",
    image: productConsole,
    gallery: [productConsole, carvingDetail],
    status: "Available",
    price: "₹32,000+",
    details: {
      material: "Sheesham Wood",
      dimensions: "3ft H × 3.5ft W × 1.5ft D",
      finish: "Rich mahogany polish",
      leadTime: "3-4 weeks",
    },
    features: [
      "Sturdy turned legs",
      "Carved front panel",
      "Protective top finish",
      "Matching pieces available",
    ],
  },
  "5": {
    name: "Nakshi Carved Swing",
    category: "Furniture Collection",
    description: "A traditional jhula (swing) featuring intricate floral patterns and a sturdy frame, designed for both indoor and covered outdoor spaces.",
    image: furniturePiece,
    gallery: [furniturePiece, carvingDetail],
    status: "Made to Order",
    price: "On Request",
    details: {
      material: "Premium Teak",
      dimensions: "7ft H × 5ft W (seat 4ft)",
      finish: "Natural teak polish",
      leadTime: "12-16 weeks",
    },
    features: [
      "Load capacity 400kg",
      "Chain or wooden hangers",
      "Weather-resistant finish option",
      "Matching cushions available",
    ],
  },
  "6": {
    name: "Nakshi Wall Medallion",
    category: "Decorative Arts",
    description: "A stunning statement wall piece featuring symmetrical floral carving, designed to be the focal point of any room.",
    image: productPanel,
    gallery: [productPanel, carvingDetail],
    status: "Available",
    price: "₹18,000+",
    details: {
      material: "Sheesham Wood",
      dimensions: "24 inches diameter",
      finish: "Dual-tone polish",
      leadTime: "2-3 weeks",
    },
    features: [
      "Hand-carved symmetrical design",
      "Ready-to-hang mounting",
      "Multiple size options",
      "Custom designs available",
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = id ? productsData[id] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-heading text-foreground mb-4">
            Product not found
          </h1>
          <Link to="/collections">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Back Navigation */}
      <section className="pt-28 lg:pt-32 pb-4">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </Link>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-medium">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-sm overflow-hidden shadow-soft cursor-pointer image-zoom"
                  >
                    <img
                      src={img}
                      alt={`${product.name} detail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="lg:py-8">
              <span className="text-caption uppercase tracking-widest text-muted-foreground mb-3 block">
                {product.category}
              </span>
              <h1 className="font-serif text-display font-semibold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-heading font-serif text-foreground">
                  {product.price}
                </span>
                <span
                  className={`px-3 py-1 rounded-sm text-caption uppercase tracking-wide ${
                    product.status === "Available"
                      ? "bg-green-100 text-green-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {product.status}
                </span>
              </div>
              
              <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-secondary rounded-sm">
                <div className="flex items-start gap-3">
                  <TreeDeciduous className="w-5 h-5 text-brass mt-0.5" />
                  <div>
                    <p className="text-caption uppercase tracking-wide text-muted-foreground mb-1">
                      Material
                    </p>
                    <p className="text-body font-medium text-foreground">
                      {product.details.material}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-brass mt-0.5" />
                  <div>
                    <p className="text-caption uppercase tracking-wide text-muted-foreground mb-1">
                      Dimensions
                    </p>
                    <p className="text-body font-medium text-foreground">
                      {product.details.dimensions}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-brass mt-0.5" />
                  <div>
                    <p className="text-caption uppercase tracking-wide text-muted-foreground mb-1">
                      Finish
                    </p>
                    <p className="text-body font-medium text-foreground">
                      {product.details.finish}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-brass text-lg">⏱</span>
                  </div>
                  <div>
                    <p className="text-caption uppercase tracking-wide text-muted-foreground mb-1">
                      Lead Time
                    </p>
                    <p className="text-body font-medium text-foreground">
                      {product.details.leadTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-10">
                <h3 className="font-serif text-heading-sm font-semibold text-foreground mb-4">
                  Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-body text-muted-foreground">
                      <Check className="w-4 h-4 text-brass flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919876543210" className="flex-1 min-w-[200px]">
                  <Button variant="hero" size="xl" className="w-full">
                    <Phone className="w-5 h-5" />
                    Enquire Now
                  </Button>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px]"
                >
                  <Button variant="outline" size="xl" className="w-full">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
