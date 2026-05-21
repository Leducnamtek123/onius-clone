import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Image as ImageIcon, Box, FileCheck, Search, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const resourceTypes = [
  {
    id: "technical",
    title: "Technical Documents",
    desc: "IES files, spec sheets, and installation guides.",
    icon: FileText,
    count: 1420,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "bim",
    title: "BIM Objects",
    desc: "Revit and SketchUp files for specification.",
    icon: Box,
    count: 850,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "images",
    title: "Image Library",
    desc: "High-res product photography and application shots.",
    icon: ImageIcon,
    count: 3200,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "certs",
    title: "Certificates",
    desc: "Compliance, warranty, and sustainability documents.",
    icon: FileCheck,
    count: 150,
    color: "bg-emerald-50 text-emerald-600",
  },
];

const featuredDownloads = [
  { id: "1", product: "LX Infinity Series", file: "IES Photometric Data", size: "2.4 MB", type: "ZIP" },
  { id: "2", product: "ION R Mini", file: "Specification Sheet", size: "850 KB", type: "PDF" },
  { id: "3", product: "Kobe G2 Collection", file: "Revit Family (RFA)", size: "15.2 MB", type: "RFA" },
  { id: "4", product: "2026 Full Catalogue", file: "Digital Brochure", size: "45.8 MB", type: "PDF" },
  { id: "5", product: "Pandia Pendant", file: "Installation Guide", size: "1.2 MB", type: "PDF" },
  { id: "6", product: "Akira G2", file: "IES Photometric Data", size: "1.8 MB", type: "ZIP" },
];

const tabs = ["All", "IES Files", "BIM", "Technical", "Images"];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-32 pb-16 px-6 md:px-12 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">Resources.</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-6 max-w-3xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search products, documents, IES files..." 
                  className="w-full bg-gray-100 border-none rounded-none py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#1139F5]"
                />
              </div>
              <button className="px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {resourceTypes.map((type, i) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all group cursor-pointer"
                data-testid={`resource-card-${type.id}`}
              >
                <div className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-500 mb-8">{type.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{type.count} files</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="bg-white p-8 md:p-12 border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-gray-100">
            <h2 className="text-2xl font-semibold">Featured Downloads</h2>
            <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 md:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === tab
                      ? "text-black border-b-2 border-black"
                      : "text-gray-400 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {featuredDownloads.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors group"
                data-testid={`download-${item.id}`}
              >
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                    {item.type}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{item.product}</h4>
                    <p className="text-xs text-gray-500">{item.file}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
                  <span className="text-xs font-medium text-gray-400">{item.size}</span>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1139F5] hover:text-[#0d2fd4]">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <button className="flex items-center justify-center gap-2 mx-auto text-sm font-semibold text-gray-600 hover:text-black transition-colors">
              Load More Results <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
