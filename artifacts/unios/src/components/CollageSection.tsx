import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, X, Heart, Plus, ChevronRight } from "lucide-react";
import { Link } from "wouter";

import collage1 from "@/assets/collage-1.png";
import collage2 from "@/assets/collage-2.png";
import collage3 from "@/assets/collage-3.png";
import collage4 from "@/assets/collage-4.png";
import collage5 from "@/assets/collage-5.png";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  stock: string;
  downloads: { label: string; icon: string }[];
  top: string;
  left: string;
}

interface Hotspot {
  products: Product[];
  top: string;
  left: string;
  imageIndex: number;
}

const products: Product[] = [
  {
    id: "lx-infinity",
    name: "LX Infinity Linear Pendant",
    category: "LINEAR PENDANT",
    image: hero1,
    stock: "This item is generally stocked, please check with your Unios distributor",
    downloads: [
      { label: "Product images", icon: "img" },
      { label: "Installation instructions", icon: "pdf" },
      { label: "Sketchup objects", icon: "3d" },
      { label: "Revit family", icon: "3d" },
      { label: "2D CAD", icon: "cad" },
      { label: "All IES files", icon: "ies" },
    ],
    top: "35%",
    left: "20%",
  },
  {
    id: "ion-r-mini",
    name: "ION R Mini Recessed Downlight",
    category: "RECESSED DOWNLIGHT",
    image: hero2,
    stock: "This item is generally stocked, please check with your Unios distributor",
    downloads: [
      { label: "Product images", icon: "img" },
      { label: "Installation instructions", icon: "pdf" },
      { label: "Sketchup objects", icon: "3d" },
      { label: "Revit family", icon: "3d" },
      { label: "2D CAD", icon: "cad" },
      { label: "All IES files", icon: "ies" },
    ],
    top: "55%",
    left: "70%",
  },
  {
    id: "kobe-g2",
    name: "Kobe G2 Surface Downlight",
    category: "SURFACE DOWNLIGHT",
    image: hero3,
    stock: "This item is generally stocked, please check with your Unios distributor",
    downloads: [
      { label: "Product images", icon: "img" },
      { label: "Installation instructions", icon: "pdf" },
      { label: "Sketchup objects", icon: "3d" },
      { label: "Revit family", icon: "3d" },
      { label: "2D CAD", icon: "cad" },
      { label: "All IES files", icon: "ies" },
    ],
    top: "40%",
    left: "60%",
  },
  {
    id: "pandia",
    name: "Pandia Decorative Pendant",
    category: "DECORATIVE PENDANT",
    image: hero4,
    stock: "This item is generally stocked, please check with your Unios distributor",
    downloads: [
      { label: "Product images", icon: "img" },
      { label: "Installation instructions", icon: "pdf" },
      { label: "Sketchup objects", icon: "3d" },
      { label: "Revit family", icon: "3d" },
      { label: "All IES files", icon: "ies" },
    ],
    top: "30%",
    left: "45%",
  },
  {
    id: "inter",
    name: "Inter Linear Track System",
    category: "LINEAR TRACK",
    image: hero5,
    stock: "This item is generally stocked, please check with your Unios distributor",
    downloads: [
      { label: "Product images", icon: "img" },
      { label: "Installation instructions", icon: "pdf" },
      { label: "Sketchup objects", icon: "3d" },
      { label: "Revit family", icon: "3d" },
      { label: "2D CAD", icon: "cad" },
      { label: "All IES files", icon: "ies" },
    ],
    top: "50%",
    left: "30%",
  },
];

const hotspots: Hotspot[] = [
  { products: [products[0]], top: "35%", left: "20%", imageIndex: 0 },
  { products: [products[1]], top: "55%", left: "68%", imageIndex: 1 },
  { products: [products[2]], top: "40%", left: "62%", imageIndex: 2 },
  { products: [products[3]], top: "32%", left: "44%", imageIndex: 3 },
  { products: [products[4]], top: "52%", left: "28%", imageIndex: 4 },
];

const collageImages = [collage1, collage2, collage3, collage4, collage5];

function DownloadIcon({ type }: { type: string }) {
  if (type === "img") return <span className="text-[#1139F5] mr-1">&#9632;</span>;
  if (type === "3d") return <span className="text-[#1139F5] mr-1">&#11041;</span>;
  return <span className="text-[#1139F5] mr-1">&#8659;</span>;
}

interface ProductPopupProps {
  product: Product;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLDivElement | null>;
}

function ProductPopup({ product, onClose, anchorRef }: ProductPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose, anchorRef]);

  return (
    <motion.div
      ref={popupRef}
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 8 }}
      transition={{ duration: 0.18 }}
      className="absolute z-50 bg-white shadow-2xl w-[300px] rounded-sm"
      style={{ top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)" }}
      data-testid={`product-popup-${product.id}`}
    >
      <div className="p-4 border-b border-gray-100 flex items-start gap-3">
        <div className="w-14 h-14 flex-shrink-0 bg-gray-50 rounded overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">{product.category}</p>
          <p className="text-sm font-semibold text-gray-900 leading-snug">{product.name}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
          data-testid="popup-close"
        >
          <X className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </div>

      <div className="p-4">
        <p className="text-[11px] font-semibold text-gray-900 uppercase tracking-wider mb-2">Downloads</p>
        <ul className="space-y-1.5 mb-4">
          {product.downloads.map((dl) => (
            <li key={dl.label}>
              <a
                href="#"
                className="flex items-center gap-1.5 text-xs text-[#1139F5] hover:underline"
                data-testid={`download-${dl.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <Download className="w-3 h-3 flex-shrink-0" />
                {dl.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mb-4 pb-4 border-b border-gray-100">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Standard</p>
          <p className="text-[11px] text-gray-500 leading-snug">{product.stock}</p>
        </div>

        <a
          href="#"
          className="flex items-center gap-1 text-xs font-semibold text-gray-900 hover:text-[#1139F5] transition-colors mb-4"
          data-testid="view-product-details"
        >
          View product details <ChevronRight className="w-3.5 h-3.5" />
        </a>

        <div className="flex items-center gap-2">
          <button
            className="flex-1 flex items-center justify-center gap-2 bg-[#1139F5] text-white text-xs font-semibold py-2.5 px-4 hover:bg-[#0d2fd4] transition-colors rounded-sm"
            data-testid="configure-button"
          >
            <span className="text-[10px]">&#9776;</span> Configure
          </button>
          <button
            className="p-2.5 border border-gray-200 hover:border-gray-400 transition-colors rounded-sm"
            data-testid="add-to-toolbox"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
          <button
            className="p-2.5 border border-gray-200 hover:border-gray-400 transition-colors rounded-sm"
            data-testid="add-to-favourites"
          >
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

interface HotspotPinProps {
  hotspot: Hotspot;
  imageRef: React.RefObject<HTMLDivElement | null>;
}

function HotspotPin({ hotspot, imageRef }: HotspotPinProps) {
  const [open, setOpen] = useState(false);
  const pinRef = useRef<HTMLDivElement>(null);
  const product = hotspot.products[0];

  return (
    <div
      ref={pinRef}
      className="absolute z-20"
      style={{ top: hotspot.top, left: hotspot.left, transform: "translate(-50%, -50%)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex items-center justify-center w-7 h-7 group"
        data-testid={`hotspot-pin-${product.id}`}
        aria-label={`View ${product.name}`}
      >
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-60 group-hover:opacity-80" />
        <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-[#1139F5] shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#1139F5]" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <ProductPopup
            product={product}
            onClose={() => setOpen(false)}
            anchorRef={pinRef as React.RefObject<HTMLDivElement>}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const imageHotspots = [
  [hotspots[0]],
  [hotspots[1]],
  [hotspots[2]],
  [hotspots[3]],
  [hotspots[4]],
];

const imageRefs: React.RefObject<HTMLDivElement | null>[] = Array.from({ length: 5 }, () => ({ current: null }));

export default function CollageSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white" data-testid="collage-section">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 max-w-[800px] leading-tight">
            Changing how the world views lighting
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:opacity-70 transition-opacity pb-2 border-b-2 border-black"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
          {[
            { colSpan: "md:col-span-7 md:row-span-2", delay: 0.1, idx: 0 },
            { colSpan: "md:col-span-5 md:row-span-1", delay: 0.2, idx: 1 },
            { colSpan: "md:col-span-5 md:row-span-2", delay: 0.3, idx: 2 },
            { colSpan: "md:col-span-3 md:row-span-1", delay: 0.4, idx: 3 },
            { colSpan: "md:col-span-4 md:row-span-1", delay: 0.5, idx: 4 },
          ].map(({ colSpan, delay, idx }) => (
            <motion.div
              key={idx}
              ref={imageRefs[idx] as React.RefObject<HTMLDivElement>}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay }}
              className={`${colSpan} relative overflow-visible group cursor-pointer`}
              data-testid={`collage-image-${idx}`}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={collageImages[idx]}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {imageHotspots[idx].map((hs, hi) => (
                <HotspotPin key={hi} hotspot={hs} imageRef={imageRefs[idx]} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-xs text-gray-400 flex items-center gap-1.5"
        >
          <span className="w-4 h-4 rounded-full border-2 border-[#1139F5] flex items-center justify-center inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1139F5]" />
          </span>
          Click the hotspot pins to explore products featured in each space
        </motion.p>
      </div>
    </section>
  );
}
