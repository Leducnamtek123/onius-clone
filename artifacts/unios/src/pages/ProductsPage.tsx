import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, Heart, Plus, ChevronDown, ChevronRight, SlidersHorizontal, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Using dummy images
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";

const dummyProducts = [
  { id: "p1", name: "LX Infinity", category: "Linear", specs: ["CRI90+", "DALI"], badge: "NEW", image: product1 },
  { id: "p2", name: "ION R", category: "Downlights", specs: ["IP54", "35° Beam"], image: product2 },
  { id: "p3", name: "ION R Mini", category: "Downlights", specs: ["Compact", "35° Beam"], badge: "NEW", image: product2 },
  { id: "p4", name: "ION S", category: "Surface", specs: ["CRI90+", "IP54"], image: product5 },
  { id: "p5", name: "Kobe", category: "Track", specs: ["360° Rotation", "CRI90+"], image: product3 },
  { id: "p6", name: "Kobe G2", category: "Track", specs: ["<3000cd/m²", "DALI"], image: product3 },
  { id: "p7", name: "Pandia", category: "Pendant", specs: ["Custom Optics", "CRI95+"], badge: "AWARD", image: product1 },
  { id: "p8", name: "Inter", category: "Linear", specs: ["12 Profiles", "Tunable"], image: product4 },
  { id: "p9", name: "Akira G2", category: "Downlights", specs: ["Circadian", "Glare Control"], image: product2 },
  { id: "p10", name: "ION X", category: "Outdoor", specs: ["IP65", "Asymmetric"], image: product6 },
  { id: "p11", name: "Kinetic", category: "Track", specs: ["Adjustable", "High Output"], image: product3 },
  { id: "p12", name: "Amika", category: "Decorative", specs: ["Glass Shade", "E27"], image: product1 },
  { id: "p13", name: "LX Infinity G2", category: "Linear", specs: ["High Efficacy", "DALI"], image: product4 },
  { id: "p14", name: "Titan", category: "Outdoor", specs: ["IP66", "IK08"], image: product6 },
  { id: "p15", name: "Vela", category: "Pendant", specs: ["Acoustic", "UGR<19"], image: product1 },
  { id: "p16", name: "Nova", category: "Surface", specs: ["Ultra Thin", "Phase Cut"], image: product5 },
  { id: "p17", name: "Apex", category: "Track", specs: ["Zoom Lens", "CRI97+"], image: product3 },
  { id: "p18", name: "Stella", category: "Downlights", specs: ["Wall Washer", "Asymmetric"], image: product2 },
];

const categories = ["Downlights", "Track", "Linear", "Pendant", "Surface", "Outdoor", "Decorative"];

function ProductCard({ product, index }: { product: any; index: number }) {
  const [wishlisted, setWishlisted] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col bg-white border border-gray-100 hover:border-gray-300 transition-all duration-300"
      data-testid={`product-card-${product.id}`}
    >
      <div className="relative aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest px-2 py-1 bg-[#1139F5] text-white">
            {product.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setWishlisted(!wishlisted)}
            className="p-2 bg-white shadow-sm hover:bg-gray-50 transition-colors rounded-full"
            data-testid={`wishlist-${product.id}`}
          >
            <Heart className={`w-4 h-4 transition-colors ${wishlisted ? "fill-[#1139F5] text-[#1139F5]" : "text-gray-500"}`} />
          </button>
          <button className="p-2 bg-white shadow-sm hover:bg-gray-50 transition-colors rounded-full" data-testid={`add-compare-${product.id}`}>
            <Plus className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.map((spec: string) => (
            <span key={spec} className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 bg-gray-100 text-gray-600">
              {spec}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <button className="text-xs font-semibold text-[#1139F5] hover:text-[#0d2fd4] transition-colors" data-testid={`configure-${product.id}`}>
            Configure
          </button>
          <button className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" data-testid={`details-${product.id}`}>
            Details <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = dummyProducts.filter(p => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero */}
      <div className="pt-32 pb-16 bg-[#0e0e0e] text-white px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Products</h1>
          <p className="text-lg text-white/70 max-w-2xl mb-10">
            Explore our complete range of architectural lighting solutions, designed for precision and engineered to perform.
          </p>
          <div className="relative max-w-xl">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              placeholder="Search products, collections, or specifications..."
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-12 py-4 focus:outline-none focus:border-white transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="products-search"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-[1400px] w-full mx-auto px-6 md:px-12 py-8 flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="flex items-center justify-between lg:hidden mb-6">
            <button 
              className="flex items-center gap-2 text-sm font-semibold border px-4 py-2"
              onClick={() => setShowFilters(!showFilters)}
              data-testid="toggle-filters"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <span className="text-sm text-gray-500">{filteredProducts.length} results</span>
          </div>

          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:sticky lg:top-24 space-y-8`}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-400">Category</h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setActiveCategory("All")}
                  className={`text-left text-sm py-1 transition-colors ${activeCategory === "All" ? "font-semibold text-[#1139F5]" : "text-gray-600 hover:text-gray-900"}`}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left text-sm py-1 transition-colors ${activeCategory === cat ? "font-semibold text-[#1139F5]" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-gray-400">Application</h3>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-sm px-4 py-3 pr-10 focus:outline-none focus:border-gray-400">
                  <option>All Applications</option>
                  <option>Retail</option>
                  <option>Hospitality</option>
                  <option>Office</option>
                  <option>Residential</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="border-t pt-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded-sm text-[#1139F5] focus:ring-[#1139F5]" />
                <span className="text-sm font-medium text-gray-900">Brand New Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              {activeCategory !== "All" && (
                <span className="flex items-center gap-1 text-xs font-medium bg-gray-100 px-3 py-1.5 rounded-full">
                  {activeCategory}
                  <button onClick={() => setActiveCategory("All")} className="hover:text-red-500 ml-1">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{filteredProducts.length} results</span>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Sort by:</span>
                <select className="bg-transparent font-medium text-gray-900 outline-none cursor-pointer">
                  <option>Featured</option>
                  <option>Newest</option>
                  <option>Name A-Z</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </AnimatePresence>
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button 
                  onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                  className="mt-4 text-[#1139F5] font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
