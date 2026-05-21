import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import collage3 from "@/assets/collage-3.png";

const storyLines = [
  "Định cấu hình và quản lý dự án chiếu sáng chưa bao giờ dễ dàng đến thế.",
  "Chọn thông số, hoàn thiện và tài nguyên sản phẩm theo đúng tiến trình thiết kế.",
  "Lưu vào Toolbox để cộng tác, xuất dữ liệu và tiếp tục dự án khi cần.",
];

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
  const middle = start + 0.14;
  const end = start + 0.42;
  const y = useTransform(progress, [start, end], [-180, 220]);
  const opacity = useTransform(progress, [start, middle, end - 0.08, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, middle, end], [0.98, 1, 0.98]);

  return (
    <motion.h2
      style={{ y, opacity, scale }}
      className="absolute left-1/2 top-1/2 max-w-[27ch] -translate-x-1/2 -translate-y-1/2 text-[2rem] font-semibold leading-[1.08] tracking-normal text-white md:text-[3rem] lg:text-[3.35rem]"
    >
      {text}
    </motion.h2>
  );
}

export default function ConfiguratorSection() {
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

        <div className="pointer-events-none relative z-10 h-full px-6 text-left md:px-20 lg:px-28">
          {storyLines.map((line, index) => (
            <FallingLine key={line} text={line} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
