import { motion } from "framer-motion";

export default function BrandPillars() {
  const pillars = [
    {
      title: "Saving you time",
      desc: "Our digital-first approach is designed to win you back the most important currency - time.",
    },
    {
      title: "Design, performance and value",
      desc: "Our formula is simple and unwavering - design, performance and value without compromise.",
    },
    {
      title: "Sharing the good word of lighting",
      desc: "We seek to change how society understands lighting by being an industry thought-leader.",
    },
    {
      title: "Shaping a sustainable future for the built environment",
      desc: "We are committed to improving our sustainable credentials while continuing to innovate and finesse our craft.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-28" data-testid="brand-pillars">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-gray-400">Changing how the world views lighting</p>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            The brand pillars behind the homepage story.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="border-t border-gray-200 pt-6"
            >
              <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-gray-400">0{i + 1}</p>
              <h3 className="max-w-[12ch] text-2xl font-semibold leading-tight text-gray-900">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
