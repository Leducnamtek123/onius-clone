import { motion } from "framer-motion";
import { Clock, Gem, Mic2, Leaf } from "lucide-react";

export default function BrandPillars() {
  const pillars = [
    {
      icon: <Clock className="w-8 h-8 stroke-1" />,
      title: "Saving you time",
      desc: "Streamlined processes and tools designed for efficiency."
    },
    {
      icon: <Gem className="w-8 h-8 stroke-1" />,
      title: "Design, performance and value",
      desc: "Balancing aesthetics with uncompromising engineering."
    },
    {
      icon: <Mic2 className="w-8 h-8 stroke-1" />,
      title: "Sharing the good word of lighting",
      desc: "Educating and inspiring the global design community."
    },
    {
      icon: <Leaf className="w-8 h-8 stroke-1" />,
      title: "Shaping a sustainable future",
      desc: "Committed to circular design and minimizing our footprint."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white" data-testid="brand-pillars">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="mb-6 text-primary p-4 bg-gray-50 rounded-2xl">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}