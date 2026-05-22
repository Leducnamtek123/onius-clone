import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Download, Heart, Plus } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";
import hero6 from "@/assets/hero-6.png";
import collage1 from "@/assets/collage-1.png";
import collage2 from "@/assets/collage-2.png";

const newProducts = [
  {
    id: "lx-infinity-2026",
    name: "LX Infinity",
    subtitle: "Enhanced CRI90+ Edition",
    category: "LINEAR PENDANT",
    image: hero1,
    badge: "NEW",
    description: "The latest evolution of our LX Collection, now enhanced with CRI90+ and expanded mounting options for greater design flexibility.",
    specs: ["CRI90+", "DALI Dimmable", "Multiple Mounting"],
    isNew: true,
  },
  {
    id: "ion-r-mini-2026",
    name: "ION R Mini",
    subtitle: "Compact Precision Series",
    category: "RECESSED DOWNLIGHT",
    image: hero2,
    badge: "NEW",
    description: "Compact in form, uncompromising in potential. The ION R Mini completes the Cosmos signature range with precision optics.",
    specs: ["90mm Aperture", "35° Beam", "IP54 Rated"],
    isNew: true,
  },
  {
    id: "kobe-g2-2026",
    name: "Kobe G2",
    subtitle: "Second Generation",
    category: "ADJUSTABLE DOWNLIGHT",
    image: hero3,
    badge: "UPDATED",
    description: "Half the bulk, all the power. Better optical control and comfort in a refined second-generation body.",
    specs: ["<3000cd/m²", "360° Rotation", "±30° Tilt"],
    isNew: false,
  },
  {
    id: "pandia-2026",
    name: "Pandia",
    subtitle: "Red Dot Award Winner",
    category: "DECORATIVE PENDANT",
    image: hero4,
    badge: "AWARD",
    description: "Crafted with Chris Connell to balance beauty and purpose. Red Dot Award and Gold Good Design Award winner.",
    specs: ["CRI95+", "Custom Optics", "Bespoke Finish"],
    isNew: false,
  },
  {
    id: "inter-2026",
    name: "Inter Linear",
    subtitle: "12-Profile Collection",
    category: "LINEAR TRACK",
    image: hero5,
    badge: "NEW",
    description: "Remarkable colour accuracy, consistency, and shorter lead times with 12 profiles for a wide range of applications.",
    specs: ["12 Profiles", "CRI90+", "Tunable White"],
    isNew: true,
  },
  {
    id: "akira-g2-2026",
    name: "Akira G2",
    subtitle: "Wellness Illumination",
    category: "RECESSED PANEL",
    image: hero6,
    badge: "UPDATED",
    description: "Bringing wellness into general illumination with indirect light, truer colour, and exceptional glare control at <3000cd/m².",
    specs: ["<3000cd/m²", "Indirect/Direct", "Circadian Ready"],
    isNew: false,
  },
];

const badgeColors: Record<string, string> = {
  NEW: "bg-[#1139F5] text-white",
  UPDATED: "bg-gray-900 text-white",
  AWARD: "bg-amber-500 text-white",
};

function ProductCard({ product, index }: { product: typeof newProducts[0]; index: number }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="group flex flex-col bg-white border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
      data-testid={`product-card-${product.id}`}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest px-2 py-1 ${badgeColors[product.badge]}`}
          data-testid={`product-badge-${product.id}`}
        >
          {product.badge}
        </span>
        <button
          onClick={() => setWishlisted((v) => !v)}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white transition-colors"
          data-testid={`wishlist-${product.id}`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${wishlisted ? "fill-[#1139F5] text-[#1139F5]" : "text-gray-500"}`}
          />
        </button>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-xl font-semibold text-gray-900 mb-0.5">{product.name}</h3>
        <p className="text-sm text-[#1139F5] font-medium mb-3">{product.subtitle}</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{product.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-gray-50 text-gray-600 border border-gray-200"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
          <button
            className="flex-1 flex items-center justify-center gap-2 bg-[#1139F5] text-white text-xs font-semibold py-2.5 hover:bg-[#0d2fd4] transition-colors"
            data-testid={`configure-${product.id}`}
          >
            Configure
          </button>
          <button
            className="p-2.5 border border-gray-200 hover:border-gray-400 transition-colors"
            data-testid={`add-${product.id}`}
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
          <a
            href="#"
            className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors ml-auto"
            data-testid={`details-${product.id}`}
          >
            Details <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function New2026() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "New", "Updated", "Award Winners"];

  const filtered = newProducts.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "New") return p.badge === "NEW";
    if (activeFilter === "Updated") return p.badge === "UPDATED";
    if (activeFilter === "Award Winners") return p.badge === "AWARD";
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div>
        <div className="relative overflow-hidden bg-[#0e0e0e] text-white">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${collage1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%)",
            }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-[140px] pb-24 md:pb-36">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#1139F5] px-2.5 py-1">NEW</span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest">Cosmos Collection</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none mb-6">
                2026
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-8">
                The most significant lighting collection of the decade. Designed for precision, built for architecture, engineered for the way we live now.
              </p>
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider border-b-2 border-white/40 pb-1 hover:border-white transition-colors"
                data-testid="hero-explore-link"
              >
                Explore the collection <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {[
              { num: "6", label: "New Products" },
              { num: "12", label: "New Profiles" },
              { num: "CRI90+", label: "Colour Accuracy" },
              { num: "2", label: "Award Winners" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="px-8 py-8 border-r border-white/10 last:border-r-0"
                data-testid={`stat-${i}`}
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.num}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-1 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    activeFilter === f
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 hover:text-gray-900 border border-transparent hover:border-gray-200"
                  }`}
                  data-testid={`filter-${f.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {f}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-400">{filtered.length} products</p>
          </div>
        </div>

        <section id="products" className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>

        <section className="bg-[#f8f8f8] py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">2026 Philosophy</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
                  Precision that<br />doesn't compromise.
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                  Every product in the 2026 collection has been engineered to the tightest tolerances in our history. Because when light is right, everything else follows.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "CRI90+ across the entire new range",
                    "Shorter lead times with local distribution",
                    "DALI-2 and Casambi ready out of the box",
                    "Expanded mounting and finish options",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1139F5] flex-shrink-0" />
                      <p className="text-sm text-gray-600">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <img src={collage2} alt="2026 collection" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#1139F5] text-white py-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Ready to specify?</h3>
              <p className="text-white/70 text-sm">Add any 2026 product to your Toolbox and start configuring.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/"
                className="px-6 py-3 bg-white text-[#1139F5] text-sm font-semibold hover:bg-white/90 transition-colors"
                data-testid="cta-toolbox"
              >
                Open My Toolbox
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border border-white/30 text-white text-sm font-semibold hover:border-white transition-colors"
                data-testid="cta-distributor"
              >
                Find a Distributor
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
