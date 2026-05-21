import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

import collage1 from "@/assets/collage-1.png";
import collage2 from "@/assets/collage-2.png";
import collage3 from "@/assets/collage-3.png";
import collage4 from "@/assets/collage-4.png";
import collage5 from "@/assets/collage-5.png";

export default function CollageSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white" data-testid="collage-section">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 max-w-[800px] leading-tight">
            Changing how the world views lighting
          </h2>
          <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:opacity-70 transition-opacity pb-2 border-b-2 border-black">
            View Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 md:row-span-2 overflow-hidden group cursor-pointer"
          >
            <img src={collage1} alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 md:row-span-1 overflow-hidden group cursor-pointer"
          >
            <img src={collage2} alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 md:row-span-2 overflow-hidden group cursor-pointer"
          >
            <img src={collage3} alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 md:row-span-1 overflow-hidden group cursor-pointer"
          >
            <img src={collage4} alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-4 md:row-span-1 overflow-hidden group cursor-pointer"
          >
            <img src={collage5} alt="Project 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}