import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

import comm1 from "@/assets/community-1.png";
import comm2 from "@/assets/community-2.png";
import comm3 from "@/assets/community-3.png";

export default function CommunitySection() {
  const cards = [
    {
      image: comm1,
      title: "Join Toolbox",
      desc: "Create an account to access resources, specify products, and manage your lighting projects."
    },
    {
      image: comm2,
      title: "Find an office",
      desc: "Visit one of our 6 showrooms across the APAC region to experience Unios lighting firsthand."
    },
    {
      image: comm3,
      title: "Find a distributor",
      desc: "Locate a trusted partner in our global network of architectural lighting distributors."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50" data-testid="community-section">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-16 text-center"
        >
          Join our community
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-gray-600 font-light mb-8">{card.desc}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-900 group-hover:text-primary transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}