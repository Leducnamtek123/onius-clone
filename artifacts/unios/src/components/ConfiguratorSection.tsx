import { motion } from "framer-motion";

import collage3 from "@/assets/collage-3.png";

export default function ConfiguratorSection() {
  return (
    <section
      className="relative min-h-[92vh] overflow-hidden bg-black text-white"
      data-testid="configurator-section"
    >
      <img
        src={collage3}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/48" aria-hidden="true" />
      <div
        className="absolute inset-y-8 left-6 hidden w-px bg-white/20 md:block lg:left-10"
        aria-hidden="true"
      >
        <motion.span
          initial={{ height: "3rem" }}
          whileInView={{ height: "8.5rem" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute left-0 top-0 w-px bg-white/70"
        />
      </div>

      <div className="relative z-10 flex min-h-[92vh] items-center px-6 py-24 md:px-20 lg:px-28">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-140px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-[25ch] text-[2.15rem] font-semibold leading-[1.08] tracking-normal md:text-[3rem] lg:ml-[18vw] lg:text-[3.35rem]"
        >
          Định cấu hình và quản lý dự án chiếu sáng chưa bao giờ dễ dàng đến thế.
        </motion.h2>
      </div>
    </section>
  );
}
