import { motion } from "framer-motion";
import { Link } from "wouter";
import { Crosshair, Users, Leaf, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import culture1 from "@/assets/culture-1.png";
import culture2 from "@/assets/culture-2.png";
import culture3 from "@/assets/culture-3.png";

const values = [
  { icon: Crosshair, title: "Precision", text: "We measure twice and cut once. Every detail matters, from optical design to the final finish." },
  { icon: Users, title: "Collaboration", text: "Great lighting is a team effort. We work closely with architects, designers, and engineers." },
  { icon: Leaf, title: "Sustainability", text: "Designing for the future means responsible materials and energy-efficient technologies." },
  { icon: Lightbulb, title: "Innovation", text: "We constantly push the boundaries of what's possible with modern lighting." },
];

export default function BrandCulturePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight"
          >
            Our Culture
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto"
          >
            A team of passionate creators, engineers, and problem solvers illuminating the built environment.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-gray-50 border border-gray-100 hover:border-gray-300 transition-colors"
                >
                  <Icon className="w-10 h-10 mb-6 text-[#1139F5]" />
                  <h3 className="text-xl font-semibold mb-4">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-12 text-center">Life at Unios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src={culture1} alt="Office culture" className="w-full h-[400px] object-cover" />
            <img src={culture2} alt="Team collaboration" className="w-full h-[400px] object-cover md:mt-8" />
            <img src={culture3} alt="Design session" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-light italic mb-8">
              "The best part about working at Unios is the relentless pursuit of perfection. Everyone here cares deeply about the end result."
            </p>
            <p className="font-semibold uppercase tracking-wider text-sm text-gray-500">
              — Mark Davies, Lead Engineer
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-semibold mb-6">Join our team</h2>
          <p className="text-white/70 mb-10 max-w-lg mx-auto">
            We're always looking for talented individuals who share our passion for design and technology.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 font-semibold text-sm hover:bg-gray-200 transition-colors" data-testid="careers-cta">
            View Open Roles
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
