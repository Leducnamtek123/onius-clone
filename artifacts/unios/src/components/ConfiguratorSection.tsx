import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import collage3 from "@/assets/collage-3.png";

const storyLineKeys = ["home.configurator.line1", "home.configurator.line2", "home.configurator.line3"];

function FallingLine({
  text,
  index,
  progress,
}: {
  text: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.24;
  const middle = start + 0.12;
  const end = start + 0.34;
  const y = useTransform(progress, [start, middle, end], [-64, 0, 0]);
  const opacity = useTransform(progress, [start, middle, end], [0, 1, 1]);
  const scale = useTransform(progress, [start, middle, end], [0.985, 1, 1]);

  return (
    <motion.h2
      style={{ y, opacity, scale }}
      className="max-w-[24ch] text-balance text-[2rem] font-semibold leading-[0.98] tracking-[-0.02em] text-white md:max-w-[28ch] md:text-[3rem] lg:text-[3.35rem]"
    >
      {text}
    </motion.h2>
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
      className="relative h-[250vh] select-none bg-black text-white"
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

        <div
          className="pointer-events-none absolute inset-y-8 left-6 hidden w-px bg-white/18 md:block lg:left-10"
          aria-hidden="true"
        >
          <motion.span
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute left-0 top-0 h-full w-px bg-white/75"
          />
        </div>

        <div className="pointer-events-none relative z-10 flex h-full items-center px-6 md:px-20 lg:px-28">
          <div className="flex max-w-4xl flex-col items-start gap-3 md:gap-4 lg:gap-5">
            {storyLineKeys.map((key, index) => (
              <FallingLine key={key} text={t(key)} index={index} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
