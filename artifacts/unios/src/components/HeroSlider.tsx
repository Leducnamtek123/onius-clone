import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";
import hero6 from "@/assets/hero-6.png";
import hero1Loop from "@/assets/hero-1-loop.mp4";
import hero2Loop from "@/assets/hero-2-loop.mp4";
import hero3Loop from "@/assets/hero-3-loop.mp4";
import hero4Loop from "@/assets/hero-4-loop.mp4";
import hero5Loop from "@/assets/hero-5-loop.mp4";
import hero6Loop from "@/assets/hero-6-loop.mp4";

const slides = [
  {
    eyebrow: "Recently viewed",
    title: "Unios Toolbox",
    description:
      "With Unios Toolbox, you can create, collaborate and manage your luminaire schedules in no time.",
    image: hero1,
    bullets: [
      "Generate and manage luminaire schedules",
      "Export as Excel or PDF",
      "Bookmark favourite luminaires",
      "Share with clients and colleagues",
      "Customise data sheets with types and details",
    ],
    cta: "Register or Login",
    secondary: "Find out about Toolbox+ to get access to price and availability information.",
    leftBg: "linear-gradient(180deg, #3b3b3b 0%, #d3d3d3 100%)",
    rightBg: "#3a2723",
    accent: "rgba(255,255,255,0.18)",
    video: hero1Loop,
  },
  {
    eyebrow: "Featured",
    title: "LX Infinity",
    description:
      "Discover the latest evolution of our LX Collection, now enhanced with CRI90+ and expanded mounting options.",
    image: hero2,
    leftBg: "linear-gradient(180deg, #0a1716 0%, #0c1f21 100%)",
    rightBg: "#173033",
    accent: "rgba(128,255,247,0.14)",
    video: hero2Loop,
  },
  {
    eyebrow: "Featured",
    title: "ION R Mini",
    description:
      "The update that completes the Unios signature range. Compact in form, uncompromising in potential - explore all that the ION R has to offer.",
    image: hero3,
    leftBg: "linear-gradient(180deg, #0b1414 0%, #091212 100%)",
    rightBg: "#103337",
    accent: "rgba(109,255,169,0.14)",
    video: hero3Loop,
  },
  {
    eyebrow: "Featured",
    title: "Kobe G2",
    description:
      "Half the bulk, all the power - Explore the new version of Kobe that provides better optical control and comfort.",
    image: hero4,
    leftBg: "linear-gradient(180deg, #2c2c2c 0%, #9b9b9b 100%)",
    rightBg: "#332523",
    accent: "rgba(255,255,255,0.12)",
    video: hero4Loop,
  },
  {
    eyebrow: "Featured",
    title: "Design for Better",
    description:
      "Pandia, crafted with Chris Connell to balance beauty and purpose. Winner of the Red Dot Award and Gold Good Design Award, Top Five in its category.",
    image: hero5,
    leftBg: "linear-gradient(180deg, #1d1d1d 0%, #e0dedb 100%)",
    rightBg: "#2b1d1a",
    accent: "rgba(255,255,255,0.14)",
    video: hero5Loop,
  },
  {
    eyebrow: "Featured",
    title: "Inter Linear Collection",
    description:
      "Combining remarkable colour accuracy, consistency, and shorter lead times, the Inter offers 12 profiles for a wide range of applications.",
    image: hero6,
    leftBg: "linear-gradient(180deg, #0a252b 0%, #0d3940 100%)",
    rightBg: "#16353a",
    accent: "rgba(120,239,255,0.16)",
    video: hero6Loop,
  },
  {
    eyebrow: "Featured",
    title: "Akira G2",
    description:
      "Akira G2 brings wellness into general illumination with indirect light, truer colour, and exceptional glare control at <3000cd/m².",
    image: hero6,
    leftBg: "linear-gradient(180deg, #373737 0%, #f1f1f1 100%)",
    rightBg: "#2f201d",
    accent: "rgba(255,255,255,0.14)",
    video: hero6Loop,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  function goNext() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  function goPrev() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  return (
    <section className="relative bg-black text-white pt-[92px]" data-testid="hero-slider">
      <div className="relative h-[calc(100vh-92px)] min-h-[760px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ background: slide.leftBg }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute inset-0 left-1/2"
          style={{ background: slide.rightBg }}
          aria-hidden="true"
        />

        <div
          className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-2"
          onPointerDown={(e) => {
            dragStartX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (dragStartX.current === null) return;
            const delta = e.clientX - dragStartX.current;
            dragStartX.current = null;
            if (Math.abs(delta) < 60) return;
            if (delta < 0) goNext();
            else goPrev();
          }}
          onPointerLeave={() => {
            dragStartX.current = null;
          }}
        >
          <motion.h1
            key={slide.title + "-title"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[min(90vw,64rem)] -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(2.25rem,5.2vw,5rem)] leading-[0.92] font-semibold tracking-tight"
          >
            {slide.title}
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title + "-left"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative h-full overflow-hidden"
            >
              <video
                key={slide.video}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={slide.image}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title + "-copy"}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex h-full items-center justify-center"
            >
              <div className="relative z-10 mx-auto flex w-full max-w-[40rem] flex-col items-center px-6 py-10 text-center md:px-0 md:py-0 lg:items-center lg:text-left">
                <div className="w-full max-w-[39rem]">
                  <div className="mb-8 flex justify-center lg:justify-start">
                    <div className="aspect-[1.28/1] w-[min(100%,39rem)] overflow-hidden bg-black/10 shadow-[0_16px_32px_rgba(0,0,0,0.12)]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="mb-5 text-[9px] uppercase tracking-[0.3em] text-white/50">
                    {slide.eyebrow}
                  </div>

                  <p className="mb-6 max-w-[32rem] text-[0.92rem] leading-relaxed text-white/72 md:text-[1rem]">
                    {slide.description}
                  </p>

                  {Array.isArray(slide.bullets) && (
                    <div className="mb-7 grid gap-2.5 max-w-[34rem]">
                      {slide.bullets.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-[0.9rem] text-white/78">
                          <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/20">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                    <Link
                      href="/toolbox"
                      className="inline-flex items-center gap-3 border-b border-white/35 pb-1 text-xs font-semibold uppercase tracking-[0.22em] hover:border-white transition-colors"
                    >
                      {slide.cta ?? "Explore"} <ArrowRight className="h-4 w-4" />
                    </Link>
                    {typeof slide.secondary === "string" && (
                      <Link
                        href="/toolbox"
                        className="max-w-[28rem] text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {slide.secondary}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            data-testid={`hero-slide-dot-${i}`}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all duration-300",
              i === current ? "bg-white scale-110" : "bg-white/30 hover:bg-white/60",
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
