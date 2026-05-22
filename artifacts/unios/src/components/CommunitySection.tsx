import { motion } from "framer-motion";
import { Link } from "wouter";
import comm1 from "@/assets/community-1.png";
import comm2 from "@/assets/community-2.png";
import comm3 from "@/assets/community-3.png";

export default function CommunitySection() {
  const cards = [
    {
      image: comm1,
      title: "Join Toolbox",
      desc: "Unlock access to product selection, configuration and scheduling workflows.",
    },
    {
      image: comm2,
      title: "Find an office",
      desc: "Visit a showroom and meet the Cosmos team across the APAC region.",
    },
    {
      image: comm3,
      title: "Find a distributor",
      desc: "Connect with a trusted partner in our global network.",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] px-6 py-24 md:px-12 md:py-32" data-testid="community-section">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-gray-400">Join our community</p>
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Join our community
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="overflow-hidden bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-gray-400">Entry point</p>
                <h3 className="text-2xl font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{card.desc}</p>
                <Link
                  href="/toolbox"
                  className="mt-6 inline-flex items-center gap-2 border-b border-black pb-1 text-xs font-semibold uppercase tracking-[0.22em] hover:opacity-70 transition-opacity"
                >
                  Learn more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
