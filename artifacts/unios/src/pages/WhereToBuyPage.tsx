import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Placeholder map
import mapImg from "@/assets/collage-4.png";

const regions = ["Australia", "New Zealand", "Asia Pacific", "Europe", "Middle East", "Americas"];

const distributors = [
  { name: "Lumen Lighting", address: "123 Supply Rd, Sydney NSW 2000", phone: "+61 2 1111 2222", email: "sales@lumen.com.au", web: "lumen.com.au", region: "Australia", featured: true },
  { name: "Architectural Lights", address: "45 Design Blvd, Melbourne VIC 3000", phone: "+61 3 3333 4444", email: "info@archlights.com.au", web: "archlights.com.au", region: "Australia", featured: false },
  { name: "Kiwi Glow", address: "10 Auckland Way, Auckland 1010", phone: "+64 9 5555 6666", email: "hello@kiwiglow.co.nz", web: "kiwiglow.co.nz", region: "New Zealand", featured: true },
  { name: "Euro Light", address: "Berliner Str 1, Berlin 10115", phone: "+49 30 7777 8888", email: "kontakt@eurolight.de", web: "eurolight.de", region: "Europe", featured: false },
];

export default function WhereToBuyPage() {
  const [activeRegion, setActiveRegion] = useState("Australia");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDistributors = distributors.filter(d => 
    d.region === activeRegion && 
    (d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.address.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-24" data-testid="page-where-to-buy">
      <Header />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Find a Distributor</h1>
          
          <div className="relative max-w-xl mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by location or country..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 pl-12 pr-4 py-4 rounded-full outline-none focus:border-black transition-colors shadow-sm"
              data-testid="input-search-location"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                  activeRegion === region 
                    ? "bg-black text-white" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
                data-testid={`tab-${region.replace(/\s/g, '-')}`}
              >
                {region}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 h-[600px]">
          {/* List */}
          <div className="lg:col-span-2 flex flex-col gap-4 overflow-y-auto pr-4 custom-scrollbar">
            {filteredDistributors.length === 0 ? (
              <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500">
                No distributors found in this area. Try another search.
              </div>
            ) : (
              filteredDistributors.map((dist, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-xl border ${dist.featured ? 'border-black' : 'border-gray-200'} transition-all hover:shadow-md`}
                  data-testid={`distributor-${idx}`}
                >
                  {dist.featured && (
                    <span className="inline-block px-2 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wider mb-4 rounded">Featured Partner</span>
                  )}
                  <h3 className="text-lg font-bold mb-2">{dist.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{dist.address}</p>
                  
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-400 w-16 inline-block">Phone:</span> {dist.phone}</p>
                    <p><span className="text-gray-400 w-16 inline-block">Email:</span> <a href={`mailto:${dist.email}`} className="hover:underline">{dist.email}</a></p>
                    <p><span className="text-gray-400 w-16 inline-block">Web:</span> <a href={`https://${dist.web}`} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1">{dist.web} <ExternalLink className="w-3 h-3" /></a></p>
                  </div>
                  
                  <button className="mt-6 w-full py-3 border border-gray-200 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors" data-testid={`view-map-${idx}`}>
                    <MapPin className="w-4 h-4" /> View on Map
                  </button>
                </motion.div>
              ))
            )}
          </div>
          
          {/* Map Placeholder */}
          <div className="lg:col-span-3 bg-gray-200 rounded-xl overflow-hidden relative border border-gray-300 hidden lg:block">
            <img src={mapImg} alt="Map" className="w-full h-full object-cover opacity-50 grayscale" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <MapPin className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-500 font-medium">Interactive Map View</p>
            </div>
            
            {/* Fake pins */}
            {filteredDistributors.map((_, i) => (
              <div 
                key={i} 
                className="absolute w-4 h-4 bg-black rounded-full shadow-lg"
                style={{
                  top: `${30 + (i * 15)}%`,
                  left: `${40 + (i * 10)}%`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}