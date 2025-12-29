import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";

import productMandirSmall from "@/assets/product-mandir-small.jpg";
import productMandirLarge from "@/assets/product-mandir-large.jpg";
import productConsole from "@/assets/product-console.jpg";
import productPanel from "@/assets/product-panel.jpg";
import heroMandir from "@/assets/hero-mandir.jpg";
import furniturePiece from "@/assets/furniture-piece.jpg";

const categories = ["All", "Mandirs", "Furniture", "Decorative"];

const products = [
  {
    id: 1,
    name: "Rajmahal Grand Mandir",
    category: "Mandirs",
    description: "An opulent temple piece featuring multiple domes and intricate Nakshi work",
    image: productMandirLarge,
    status: "Available",
    price: "On Request",
  },
  {
    id: 2,
    name: "Compact Pooja Mandir",
    category: "Mandirs",
    description: "Perfect for modern homes, with traditional carved details",
    image: productMandirSmall,
    status: "Available",
    price: "₹45,000+",
  },
  {
    id: 3,
    name: "Heritage Carved Mandir",
    category: "Mandirs",
    description: "Classic temple design with brass embellishments",
    image: heroMandir,
    status: "Made to Order",
    price: "On Request",
  },
  {
    id: 4,
    name: "Heritage Console Table",
    category: "Furniture",
    description: "Elegant console with turned legs and carved border",
    image: productConsole,
    status: "Available",
    price: "₹32,000+",
  },
  {
    id: 5,
    name: "Nakshi Carved Swing",
    category: "Furniture",
    description: "Traditional jhula with intricate floral patterns",
    image: furniturePiece,
    status: "Made to Order",
    price: "On Request",
  },
  {
    id: 6,
    name: "Nakshi Wall Medallion",
    category: "Decorative",
    description: "Statement wall piece featuring symmetrical floral carving",
    image: productPanel,
    status: "Available",
    price: "₹18,000+",
  },
];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block opacity-0 animate-fade-up">
              Our Collections
            </span>
            <h1 className="font-serif text-display-lg font-light text-foreground mb-6 opacity-0 animate-fade-up delay-100">
              Handcrafted <br />
              <span className="font-semibold">Masterpieces</span>
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-xl opacity-0 animate-fade-up delay-200">
              Each piece in our collection represents months of dedicated craftsmanship. 
              Browse our mandirs, furniture, and decorative arts, all available for 
              custom sizing and finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-border">
            <Filter className="w-5 h-5 text-muted-foreground" />
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

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredProducts.map((product, index) => (
              <article
                key={product.id}
                className="group opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <Link to={`/collections/${product.id}`}>
                  <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-soft mb-6 image-zoom">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-caption uppercase tracking-widest text-muted-foreground">
                      {product.category}
                    </span>
                    <span
                      className={`text-caption uppercase tracking-wide ${
                        product.status === "Available"
                          ? "text-green-700"
                          : "text-brass-dark"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <h2 className="font-serif text-heading font-medium text-foreground group-hover:text-wood-medium transition-colors">
                    <Link to={`/collections/${product.id}`}>{product.name}</Link>
                  </h2>
                  <p className="text-body-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="text-body font-medium text-foreground pt-2">
                    {product.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-display font-light text-foreground mb-6">
              Looking for Something <span className="font-semibold">Custom?</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10">
              We specialize in bespoke pieces tailored to your exact specifications. 
              Custom dimensions, specific wood types, unique designs — share your vision 
              and we'll bring it to life.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;
