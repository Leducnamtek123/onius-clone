import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, X, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";

const comparedProducts = [
  {
    id: "p1",
    name: "LX Infinity",
    category: "Linear Pendant",
    image: product1,
    wattage: "15W/m - 30W/m",
    cct: "2700K, 3000K, 4000K",
    cri: "CRI90+",
    beam: "100°",
    ip: "IP20",
    dimming: "Non-Dim, Phase, DALI",
    mounting: "Surface, Suspended",
    dimensions: "W: 42mm H: 75mm L: Custom"
  },
  {
    id: "p2",
    name: "ION R",
    category: "Recessed Downlight",
    image: product2,
    wattage: "9W, 15W",
    cct: "2700K, 3000K, 4000K",
    cri: "CRI90+",
    beam: "15°, 35°, 55°",
    ip: "IP54",
    dimming: "Phase, DALI",
    mounting: "Recessed",
    dimensions: "Ø: 85mm H: 65mm"
  }
];

const attributes = [
  { key: "category", label: "Category" },
  { key: "wattage", label: "System Power" },
  { key: "cct", label: "Colour Temperature" },
  { key: "cri", label: "CRI" },
  { key: "beam", label: "Beam Angle" },
  { key: "ip", label: "IP Rating" },
  { key: "dimming", label: "Dimming Options" },
  { key: "mounting", label: "Mounting" },
  { key: "dimensions", label: "Dimensions" }
];

export default function ComparePage() {
  const [products, setProducts] = useState(comparedProducts);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Compare Products</h1>
            <p className="text-gray-500">Compare technical specifications across our range.</p>
          </div>
          <div className="flex gap-4">
            <button 
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              onClick={() => setProducts([])}
            >
              Clear all
            </button>
            <button className="bg-[#1139F5] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#0d2fd4] transition-colors">
              Add to Toolbox
            </button>
          </div>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px]">
            {/* Header Row (Images & Names) */}
            <div className="flex border-b-2 border-gray-900 pb-8">
              <div className="w-48 flex-shrink-0" /> {/* Empty corner */}
              <div className="flex-1 flex gap-8">
                {products.map(p => (
                  <div key={p.id} className="flex-1 relative bg-gray-50 p-6 border border-gray-100 flex flex-col items-center text-center group">
                    <button 
                      onClick={() => setProducts(products.filter(x => x.id !== p.id))}
                      className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors rounded"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="h-32 mb-4 w-full flex items-center justify-center">
                      <img src={p.image} alt={p.name} className="h-full object-contain mix-blend-multiply" />
                    </div>
                    <h3 className="font-semibold text-lg">{p.name}</h3>
                    <p className="text-xs text-[#1139F5] mt-2 font-medium cursor-pointer hover:underline">Configure</p>
                  </div>
                ))}
                
                {/* Empty Slot */}
                {products.length < 3 && (
                  <div className="flex-1 border-2 border-dashed border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center p-6 text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors cursor-pointer min-h-[250px]">
                    <Plus className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium">Add Product</span>
                  </div>
                )}
                {products.length < 2 && (
                  <div className="flex-1 hidden md:block border-2 border-dashed border-gray-100 bg-gray-50/20" />
                )}
              </div>
            </div>

            {/* Spec Rows */}
            {attributes.map(attr => (
              <div key={attr.key} className="flex border-b border-gray-100 py-4 hover:bg-gray-50 transition-colors">
                <div className="w-48 flex-shrink-0 text-sm font-semibold text-gray-900 flex items-center">
                  {attr.label}
                </div>
                <div className="flex-1 flex gap-8">
                  {products.map(p => (
                    <div key={p.id} className="flex-1 text-sm text-gray-600 flex items-center justify-center text-center px-4">
                      {(p as any)[attr.key]}
                    </div>
                  ))}
                  {products.length < 3 && <div className="flex-1" />}
                  {products.length < 2 && <div className="flex-1 hidden md:block" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {products.length === 0 && (
          <div className="text-center py-20 bg-gray-50 border border-gray-100 mt-8">
            <p className="text-gray-500 mb-6">Your comparison list is empty.</p>
            <a href="/products" className="inline-flex items-center gap-2 text-[#1139F5] font-semibold hover:underline">
              Browse products <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
