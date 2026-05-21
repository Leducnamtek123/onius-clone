import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";
import hero6 from "@/assets/hero-6.png";

const slides = [
  {
    category: "Linear Pendant",
    title: "LX Infinity",
    desc: "Discover the latest evolution of our LX Collection, now enhanced with CRI90+ and expanded mounting options.",
    image: hero1,
  },
  {
    category: "Compact Downlight",
    title: "ION R Mini",
    desc: "The update that completes the Unios signature range. Compact in form, uncompromising in potential.",
    image: hero2,
  },
  {
    category: "Track Spotlight",
    title: "Kobe G2",
    desc: "Half the bulk, all the power. Better optical control and comfort.",
    image: hero3,
  },
  {
    category: "Decorative Pendant",
    title: "Pandia",
    desc: "Crafted with Chris Connell to balance beauty and purpose. Winner of the Red Dot Award.",
    image: hero4,
  },
  {
    category: "Profile Light",
    title: "Inter Linear",
    desc: "Combining remarkable colour accuracy, consistency, and shorter lead times.",
    image: hero5,
  },
  {
    category: "Indirect Luminaire",
    title: "Akira G2",
    desc: "Akira G2 brings wellness into general illumination with indirect light and exceptional glare control.",
    image: hero6,
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black" data-testid="hero-slider">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col md:flex-row"
        >
          {/* LEFT PANEL */}
          <div 
            className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-20 relative"
            style={{
              background: "radial-gradient(circle at 30% 50%, #e5e5e5 0%, #a3a3a3 100%)",
            }}
          >
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-600 mb-4 ml-2">
                {slides[current].category}
              </p>
              <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-bold text-white tracking-tighter mix-blend-difference">
                {slides[current].title}
              </h1>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#1A1A1A] flex flex-col justify-center items-center px-8 md:px-20 relative">
            <div className="w-full max-w-[500px] aspect-square relative mb-12">
              <img 
                src={slides[current].image} 
                alt={slides[current].title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="w-full max-w-[500px] text-white">
              <p className="text-lg md:text-xl font-light leading-relaxed mb-6 opacity-80">
                {slides[current].desc}
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide uppercase hover:opacity-70 transition-opacity"
              >
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            data-testid={`hero-slide-dot-${i}`}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              i === current ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}