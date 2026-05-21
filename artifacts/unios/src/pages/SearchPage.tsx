import { useState } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Using dummy images
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";

const dummyProducts = [
  { id: "p1", name: "LX Infinity", category: "Linear", image: product1 },
  { id: "p2", name: "ION R", category: "Downlights", image: product2 },
  { id: "p5", name: "Kobe", category: "Track", image: product3 },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Products");
  
  const hasSearched = query.length > 2;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="pt-32 pb-8 bg-gray-50 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full bg-white text-2xl font-light text-gray-900 border-none shadow-sm px-16 py-6 focus:outline-none focus:ring-2 focus:ring-[#1139F5] transition-shadow"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              data-testid="global-search"
              autoFocus
            />
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-[1400px] w-full mx-auto px-6 md:px-12 py-12">
        {!hasSearched ? (
          <div className="max-w-[1000px] mx-auto text-center py-20">
            <h2 className="text-lg font-semibold text-gray-900 mb-8">Popular Searches</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Linear", "Track lighting", "IP65 Outdoor", "CRI90+", "DALI Dimmable", "Pandia"].map(term => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-full transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-8 border-b border-gray-200 mb-10 overflow-x-auto whitespace-nowrap pb-1">
              {["Products", "Projects", "Stories"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-semibold tracking-wide transition-colors relative ${activeTab === tab ? "text-[#1139F5]" : "text-gray-500 hover:text-gray-900"}`}
                >
                  {tab} <span className="ml-2 text-xs font-normal text-gray-400">({tab === "Products" ? 3 : 0})</span>
                  {activeTab === tab && (
                    <motion.div layoutId="searchTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1139F5]" />
                  )}
                </button>
              ))}
            </div>

            {activeTab === "Products" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {dummyProducts.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group border border-gray-100 hover:border-gray-300 transition-colors"
                  >
                    <div className="aspect-[4/3] bg-gray-50 p-6">
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] uppercase text-gray-400 mb-1">{p.category}</p>
                      <h3 className="font-semibold">{p.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-gray-500 text-lg">No {activeTab.toLowerCase()} found for "{query}".</p>
                <button onClick={() => setActiveTab("Products")} className="mt-4 text-[#1139F5] font-medium hover:underline">
                  View product results instead
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
