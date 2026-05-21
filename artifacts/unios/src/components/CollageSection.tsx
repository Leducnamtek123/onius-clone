import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Download, Heart, Plus, X } from "lucide-react";

import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";
import hero6 from "@/assets/hero-6.png";

type Hotspot = {
  id: string;
  image: string;
  artWidth: string;
  artTop: string;
  artLeft: string;
  artTransform: string;
  pinTop: string;
  pinLeft: string;
  popupTop: string;
  popupLeft: string;
  popupTransform: string;
  title: string;
  downloads: string[];
  stock: string;
};

const hotspots: Hotspot[] = [
  {
    id: "pendant",
    image: hero4,
    artWidth: "24rem",
    artTop: "8%",
    artLeft: "7%",
    artTransform: "translate(-50%, -8%) rotate(7deg)",
    pinTop: "13%",
    pinLeft: "13%",
    popupTop: "17%",
    popupLeft: "15%",
    popupTransform: "translate(0, 0)",
    title: "Pandia Glass Collection",
    downloads: ["Hình sản phẩm", "Hướng dẫn lắp đặt", "Đối tượng Sketchup", "Thư viện Revit", "2D CAD", "Tất cả tệp IES"],
    stock:
      "Tự hào giới thiệu Bộ sưu tập Pandia Glass - tuyệt tác mới nhất, thể hiện hành trình của Unios và Chris Connell trong việc khám phá sự tối giản trong thủy tinh, ánh sáng và thiết kế đậm chất Úc.",
  },
  {
    id: "downlight",
    image: hero2,
    artWidth: "19rem",
    artTop: "8%",
    artLeft: "32%",
    artTransform: "translate(-50%, -4%)",
    pinTop: "14%",
    pinLeft: "36%",
    popupTop: "18%",
    popupLeft: "37%",
    popupTransform: "translate(-42%, 0)",
    title: "Titanium G2 Downlight",
    downloads: ["Hình sản phẩm", "Hướng dẫn lắp đặt", "Đối tượng Sketchup", "Thư viện Revit", "2D CAD", "Tất cả tệp IES"],
    stock: "This item is generally stocked, please check with your Unios distributor.",
  },
  {
    id: "blade",
    image: hero5,
    artWidth: "17rem",
    artTop: "8%",
    artLeft: "58%",
    artTransform: "translate(-50%, -6%) rotate(-4deg)",
    pinTop: "14%",
    pinLeft: "59%",
    popupTop: "18%",
    popupLeft: "61%",
    popupTransform: "translate(-50%, 0)",
    title: "ION R Blade",
    downloads: ["Hình sản phẩm", "Hướng dẫn lắp đặt", "Đối tượng Sketchup", "Thư viện Revit", "2D CAD", "Tất cả tệp IES"],
    stock: "A slim architectural profile for precise linear illumination across hospitality, residential, and workplace settings.",
  },
  {
    id: "curve",
    image: hero6,
    artWidth: "18rem",
    artTop: "7%",
    artLeft: "84%",
    artTransform: "translate(-16%, -10%) rotate(9deg)",
    pinTop: "16%",
    pinLeft: "87%",
    popupTop: "18%",
    popupLeft: "82%",
    popupTransform: "translate(-100%, 0)",
    title: "Inter Linear Collection",
    downloads: ["Hình sản phẩm", "Hướng dẫn lắp đặt", "Đối tượng Sketchup", "Thư viện Revit", "2D CAD", "Tất cả tệp IES"],
    stock: "Combining remarkable colour accuracy, consistency, and shorter lead times, the Inter offers 12 profiles for a wide range of applications.",
  },
  {
    id: "track",
    image: hero1,
    artWidth: "25rem",
    artTop: "61%",
    artLeft: "11%",
    artTransform: "translate(-50%, 0%) rotate(-1deg)",
    pinTop: "64%",
    pinLeft: "13%",
    popupTop: "59%",
    popupLeft: "15%",
    popupTransform: "translate(0, -100%)",
    title: "LX Infinity",
    downloads: ["Hình sản phẩm", "Hướng dẫn lắp đặt", "Đối tượng Sketchup", "Thư viện Revit", "2D CAD", "Tất cả tệp IES"],
    stock: "Discover the latest evolution of our LX Collection, now enhanced with CRI90+ and expanded mounting options.",
  },
  {
    id: "spot",
    image: hero3,
    artWidth: "18rem",
    artTop: "67%",
    artLeft: "38%",
    artTransform: "translate(-50%, 0%) rotate(4deg)",
    pinTop: "78%",
    pinLeft: "38%",
    popupTop: "70%",
    popupLeft: "39%",
    popupTransform: "translate(-50%, -100%)",
    title: "Kobe G2",
    downloads: ["Hình sản phẩm", "Hướng dẫn lắp đặt", "Đối tượng Sketchup", "Thư viện Revit", "2D CAD", "Tất cả tệp IES"],
    stock: "Half the bulk, all the power - explore the new version of Kobe that provides better optical control and comfort.",
  },
  {
    id: "mini",
    image: hero5,
    artWidth: "16rem",
    artTop: "62%",
    artLeft: "61%",
    artTransform: "translate(-46%, 0%) rotate(-2deg)",
    pinTop: "70%",
    pinLeft: "60%",
    popupTop: "69%",
    popupLeft: "60%",
    popupTransform: "translate(-50%, -100%)",
    title: "ION R Mini",
    downloads: ["Hình sản phẩm", "Hướng dẫn lắp đặt", "Đối tượng Sketchup", "Thư viện Revit", "2D CAD", "Tất cả tệp IES"],
    stock: "The update that completes the Unios signature range. Compact in form, uncompromising in potential.",
  },
  {
    id: "grid",
    image: hero6,
    artWidth: "19rem",
    artTop: "66%",
    artLeft: "85%",
    artTransform: "translate(-50%, 0%)",
    pinTop: "79%",
    pinLeft: "85%",
    popupTop: "69%",
    popupLeft: "81%",
    popupTransform: "translate(-100%, -100%)",
    title: "Akira G2",
    downloads: ["Hình sản phẩm", "Hướng dẫn lắp đặt", "Đối tượng Sketchup", "Thư viện Revit", "2D CAD", "Tất cả tệp IES"],
    stock: "Akira G2 brings wellness into general illumination with indirect light, truer colour, and exceptional glare control.",
  },
];

function HotspotPin({
  item,
  active,
  onClick,
}: {
  item: Hotspot;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group absolute z-20 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      style={{ top: item.pinTop, left: item.pinLeft }}
      aria-label={item.title}
      aria-pressed={active}
      data-testid={`hotspot-${item.id}`}
    >
      <span
        className={[
          "absolute inset-0 rounded-full border-[1.5px] transition-all duration-200 group-hover:scale-110 group-active:scale-95",
          active ? "border-[#2447ff] bg-[#2447ff] shadow-[0_0_0_4px_rgba(36,71,255,0.14)]" : "border-[#2d4cff] bg-white/90",
        ].join(" ")}
      />
      <span className={["relative h-1.5 w-1.5 rounded-full transition-colors duration-200", active ? "bg-white" : "bg-[#2d4cff]"].join(" ")} />
      {active && <span className="absolute inset-0 rounded-full border border-[#2d4cff]/25 animate-ping" />}
    </button>
  );
}

function PopupCard({
  item,
  onClose,
}: {
  item: Hotspot;
  onClose: () => void;
}) {
  return (
    <div
      key={item.id}
      className="absolute z-40 w-[min(86vw,20rem)]"
      style={{ top: item.popupTop, left: item.popupLeft, transform: item.popupTransform }}
      data-testid="hotspot-popup"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.965, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.965, y: 14 }}
        transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.7 }}
        className="rounded-[2px] bg-white px-4 py-4 text-black shadow-[0_20px_48px_rgba(0,0,0,0.14)]"
      >
        <div className="mb-3.5 flex items-start justify-between gap-2.5">
        <div className="flex min-w-0 items-start gap-2.5">
          <div className="h-12 w-12 flex-none overflow-hidden bg-gray-50">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" draggable={false} />
          </div>
          <div className="min-w-0">
            <div className="mb-1.5 flex gap-1">
              <span className="h-2 w-2 rounded-sm bg-gray-800" />
              <span className="h-2 w-2 rounded-sm bg-[#c7a85a]" />
              <span className="h-2 w-2 rounded-sm border border-gray-300 bg-white" />
            </div>
            <h3 className="max-w-[14ch] text-[1.04rem] font-medium leading-[1.15]">{item.title}</h3>
          </div>
        </div>
        <button type="button" onClick={onClose} className="rounded p-0.5 hover:bg-gray-100" aria-label="Đóng">
          <X className="h-3.5 w-3.5 text-gray-500" />
        </button>
      </div>

      <div className="mb-3.5">
        <h4 className="mb-1.5 text-[0.88rem] font-medium text-gray-900">Downloads</h4>
        <div className="space-y-1">
          {item.downloads.map((download) => (
            <div key={download} className="flex items-center gap-1.5 text-[0.8rem] text-[#294cff]">
              <Download className="h-3 w-3" />
              <span>{download}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-3.5 border-t border-gray-100 pt-3">
        <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-emerald-600">Standard</p>
        <p className="text-[0.82rem] leading-relaxed text-gray-500">{item.stock}</p>
      </div>

      <a href="#" className="mb-3.5 inline-flex items-center gap-1.5 text-[0.82rem] text-[#294cff]">
        View product details <ChevronRight className="h-3 w-3" />
      </a>

      <div className="flex items-center gap-2">
        <button className="flex flex-1 items-center justify-center gap-2 bg-[#294cff] px-3.5 py-3 text-[0.82rem] font-semibold text-white">
          <span className="text-xs">⚙</span> Configure
        </button>
        <button className="flex h-10 w-10 items-center justify-center border border-gray-200 text-gray-600">
          <Plus className="h-3.5 w-3.5" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center border border-gray-200 text-gray-600">
          <Heart className="h-3.5 w-3.5" />
        </button>
      </div>
      </motion.div>
    </div>
  );
}

export default function CollageSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const activeItem = hotspots.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!sectionRef.current) return;
      if (!sectionRef.current.contains(event.target as Node)) {
        setActiveId(null);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <section ref={sectionRef} className="relative select-none overflow-hidden bg-white px-0 pb-16 pt-20 md:pt-24" data-testid="collage-section">
      <div className="relative mx-auto max-w-[1600px]">
        <div className="relative min-h-[clamp(980px,102vw,1420px)]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55 }}
            className="pointer-events-none absolute left-1/2 top-[44%] z-10 w-[min(92vw,1320px)] -translate-x-1/2 -translate-y-1/2 md:top-[48%]"
          >
            <h2 className="text-center text-[clamp(2.6rem,5vw,4.6rem)] font-semibold leading-[0.92] tracking-tight text-black">
              <span className="underline decoration-[4px] underline-offset-[12px]">Changing</span> how the world views lighting
            </h2>
          </motion.div>

          {hotspots.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-180px" }}
              transition={{ duration: 0.45 }}
              className="absolute z-0"
              style={{
                top: item.artTop,
                left: item.artLeft,
                width: item.artWidth,
                transform: item.artTransform,
              }}
            >
              <img src={item.image} alt={item.title} className="w-full object-contain" draggable={false} />
            </motion.div>
          ))}

          {hotspots.map((item) => (
            <HotspotPin
              key={item.id}
              item={item}
              active={activeId === item.id}
              onClick={() => setActiveId((prev) => (prev === item.id ? null : item.id))}
            />
          ))}

          <AnimatePresence initial={false} mode="sync">
            {activeItem && <PopupCard item={activeItem} onClose={() => setActiveId(null)} />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
