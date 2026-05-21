import { useState } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, Download, DownloadCloud } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Using some dummy images from assets
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import collage1 from "@/assets/collage-1.png";
import collage2 from "@/assets/collage-2.png";

const images = [
  { id: 1, src: hero1, name: "LX Infinity Linear Installation", category: "Application" },
  { id: 2, src: hero2, name: "ION R Mini Close Up", category: "Product" },
  { id: 3, src: collage1, name: "Office Lobby View", category: "Application" },
  { id: 4, src: hero3, name: "Kobe Track Detail", category: "Product" },
  { id: 5, src: collage2, name: "Architectural Detail", category: "Application" },
  { id: 6, src: hero1, name: "LX Infinity System", category: "Product" },
  { id: 7, src: hero2, name: "ION R Series", category: "Product" },
  { id: 8, src: collage1, name: "Modern Retail Space", category: "Application" },
];

export default function ImagesPage() {
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [filter, setFilter] = useState("All");

  const toggleSelect = (id: number) => {
    setSelectedImages(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const filtered = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Image Library</h1>
            <p className="text-gray-500 max-w-xl">High-resolution product photography and application imagery for your presentations and mood boards.</p>
          </div>
          {selectedImages.length > 0 && (
            <button className="bg-[#1139F5] text-white px-6 py-3 text-sm font-semibold flex items-center gap-2 hover:bg-[#0d2fd4] transition-colors shadow-lg">
              <DownloadCloud className="w-4 h-4" />
              Download Selected ({selectedImages.length})
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="relative flex-1 max-w-md">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search images..."
              className="w-full bg-gray-50 border border-gray-200 px-10 py-3 text-sm focus:outline-none focus:border-gray-400 focus:bg-white transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["All", "Product", "Application"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors ${
                  filter === f ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 8) * 0.05 }}
              className="relative group break-inside-avoid"
            >
              <div 
                className={`relative overflow-hidden cursor-pointer ${
                  selectedImages.includes(img.id) ? "ring-4 ring-[#1139F5] ring-offset-2" : ""
                }`}
                onClick={() => toggleSelect(img.id)}
              >
                <img src={img.src} alt={img.name} className="w-full h-auto bg-gray-100 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] text-white/70 uppercase tracking-widest font-semibold mb-1">{img.category}</span>
                  <h3 className="text-white font-medium">{img.name}</h3>
                </div>
                
                {/* Select Checkbox/Overlay */}
                <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  selectedImages.includes(img.id) 
                    ? "bg-[#1139F5] border-[#1139F5]" 
                    : "border-white/50 bg-black/20 opacity-0 group-hover:opacity-100"
                }`}>
                  {selectedImages.includes(img.id) && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                </div>

                {/* Quick Download */}
                <button className="absolute top-4 left-4 p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
