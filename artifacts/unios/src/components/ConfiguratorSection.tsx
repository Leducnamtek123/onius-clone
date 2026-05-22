import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import configuratorProduct from "@/assets/configurator.png";
import collage3 from "@/assets/collage-3.png";

const storyLineKeys = [
  "home.configurator.line1",
  "home.configurator.line2",
  "home.configurator.line3",
  "home.configurator.line4",
  "home.configurator.line5",
  "home.configurator.line6",
] as const;

function FallingLine({
  text,
  index,
  progress,
}: {
  text: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.11 + 0.06;
  const middle = start + 0.12;
  const end = start + 0.24;
  const x = useTransform(progress, [start, middle, end], [-40, 0, 0]);
  const y = useTransform(progress, [start, middle, end], [10, 0, 0]);
  const opacity = useTransform(progress, [start, middle, end], [0, 1, 1]);
  const scale = useTransform(progress, [start, middle, end], [0.985, 1, 1]);

  return (
    <motion.h2
      style={{ x, y, opacity, scale }}
      className="max-w-[20ch] text-balance text-[1.7rem] font-semibold leading-[0.96] tracking-[-0.02em] text-white md:max-w-[22ch] md:text-[2.55rem] lg:text-[3.1rem]"
    >
      {text}
    </motion.h2>
  );
}

function ProductBadge({
  text,
  progress,
  start,
  direction = "left",
  className,
}: {
  text: string;
  progress: MotionValue<number>;
  start: number;
  direction?: "left" | "right";
  className: string;
}) {
  const x = useTransform(progress, [start, start + 0.12, start + 0.28], direction === "left" ? [-44, 0, 0] : [44, 0, 0]);
  const y = useTransform(progress, [start, start + 0.12, start + 0.28], [20, 0, 0]);
  const opacity = useTransform(progress, [start, start + 0.12, start + 0.28], [0, 1, 1]);

  return (
    <motion.div
      style={{ x, y, opacity }}
      className={`pointer-events-none absolute rounded-[6px] border border-black/10 bg-white px-4 py-3 text-sm font-medium text-[#4a4a4a] shadow-[0_10px_28px_rgba(0,0,0,0.16)] ${className}`}
    >
      {text}
    </motion.div>
  );
}

function ConfiguratorMock({ progress }: { progress: MotionValue<number> }) {
  const shellY = useTransform(progress, [0, 0.45, 1], [-18, 0, 26]);
  const cardY = useTransform(progress, [0.08, 0.35, 0.72], [-52, 0, 14]);
  const cardOpacity = useTransform(progress, [0.05, 0.2, 0.82], [0, 1, 1]);
  const glowOpacity = useTransform(progress, [0.08, 0.22, 0.75], [0, 0.95, 0.82]);
  const buttonY = useTransform(progress, [0.38, 0.58, 0.95], [18, 0, 0]);
  const buttonOpacity = useTransform(progress, [0.38, 0.58, 0.95], [0, 1, 1]);
  const asideOpacity = useTransform(progress, [0.5, 0.68, 0.95], [0, 1, 1]);
  const asideX = useTransform(progress, [0.5, 0.68, 0.95], [36, 0, 0]);

  return (
    <motion.div style={{ y: shellY }} className="relative mx-auto w-full max-w-[32rem]">
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-x-6 top-8 h-[88%] rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.88),rgba(255,255,255,0.2)_52%,rgba(255,255,255,0)_72%)] blur-xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: cardY, opacity: cardOpacity }}
        className="relative rounded-[18px] border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] md:p-8"
      >
        <div className="relative overflow-hidden rounded-[12px] bg-[#f7f7f7] p-4 md:p-6">
          <img
            src={configuratorProduct}
            alt="Configurator product"
            className="mx-auto h-auto w-full max-w-[20rem] select-none object-contain"
            draggable={false}
          />
        </div>

        <motion.div
          style={{ x: asideX, opacity: asideOpacity }}
          className="mt-6 flex items-center justify-between gap-4"
        >
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-black/45">
              Product
            </p>
            <h3 className="mt-1 text-[1.35rem] font-semibold leading-none text-black">
              ION S Track Light
            </h3>
          </div>
          <div className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-black/50">
            Preview
          </div>
        </motion.div>

        <motion.button
          style={{ y: buttonY, opacity: buttonOpacity }}
          type="button"
          className="mt-6 inline-flex w-full items-center justify-center rounded-[10px] bg-[#2142f3] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(33,66,243,0.35)]"
        >
          Configure now
        </motion.button>
      </motion.div>

      <ProductBadge
        text="2700K - 6500K"
        progress={progress}
        start={0.26}
        direction="left"
        className="hidden left-[-1.25rem] top-[4.4rem] md:block md:left-[-2.75rem]"
      />
      <ProductBadge
        text="3000K"
        progress={progress}
        start={0.34}
        direction="left"
        className="hidden left-[-0.5rem] top-[8.2rem] md:block md:left-[-2rem]"
      />
      <ProductBadge
        text="Textured White / White"
        progress={progress}
        start={0.42}
        direction="right"
        className="hidden right-[-0.5rem] top-[1.4rem] max-w-[9rem] text-center md:block"
      />
      <ProductBadge
        text="Textured Black / Black"
        progress={progress}
        start={0.48}
        direction="right"
        className="hidden right-[-1rem] top-[4.2rem] max-w-[9rem] text-center md:block"
      />
      <motion.div
        style={{ x: buttonX, opacity: buttonOpacity }}
        className="absolute -left-1 bottom-6 hidden gap-3 md:-left-12 md:flex"
      >
        <div className="grid h-11 w-11 place-items-center rounded-sm bg-white text-[#2459e8] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          <Plus className="h-4 w-4" />
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-sm bg-white text-[#2459e8] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          <Heart className="h-4 w-4" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ConfiguratorSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.44, 0.58, 0.66]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[240vh] select-none bg-black text-white"
      data-testid="configurator-section"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src={collage3}
          alt=""
          style={{ y: imageY }}
          className="absolute inset-0 h-[108%] w-full object-cover object-center"
          draggable={false}
          aria-hidden="true"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black"
          aria-hidden="true"
        />

        <div className="pointer-events-none relative z-10 flex h-full items-center px-6 md:px-10 lg:px-16">
          <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-16">
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
              {storyLineKeys.map((key, index) => (
                <FallingLine
                  key={key}
                  text={t(key)}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>

            <div className="relative min-h-[32rem] md:min-h-[36rem]">
              <ConfiguratorMock progress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
