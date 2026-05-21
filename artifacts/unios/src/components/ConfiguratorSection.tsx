import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check } from "lucide-react";
import configuratorImg from "@/assets/configurator.png";

export default function ConfiguratorSection() {
  const points = [
    "Progressively specify technical specifications",
    "Product finishes",
    "Save as a favourite or add to a Toolbox project",
    "Conveniently access product resources, 3D assets and more"
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#111] text-white" data-testid="configurator-section">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-8 border border-white/20 rounded-full text-xs font-semibold tracking-widest uppercase">
            My Toolbox
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
            Configure. Specify. Save.
          </h2>
          
          <ul className="space-y-6 mb-12">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg text-white/70 font-light">{point}</span>
              </li>
            ))}
          </ul>

          <Link href="#" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors">
            Start configuring now
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl bg-white/5 p-8 border border-white/10"
        >
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="p-8 flex flex-col items-center border-b border-gray-100">
              <img src={configuratorImg} alt="Product Configurator" className="h-64 object-contain mb-8" />
              <div className="w-full">
                <h3 className="text-gray-900 text-xl font-bold mb-2">Titanium Series</h3>
                <p className="text-gray-500 text-sm mb-6">Pendant Luminaire</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">Finish</p>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-black border-2 border-white ring-2 ring-transparent cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 ring-2 ring-primary cursor-pointer"></div>
                      <div className="w-8 h-8 rounded-full bg-[#B87333] border-2 border-white ring-2 ring-transparent cursor-pointer"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">Beam Angle</p>
                    <div className="flex gap-2">
                      <div className="px-4 py-2 border border-gray-200 rounded text-sm text-gray-900 font-medium cursor-pointer">15°</div>
                      <div className="px-4 py-2 border-2 border-primary rounded text-sm text-primary font-medium cursor-pointer">30°</div>
                      <div className="px-4 py-2 border border-gray-200 rounded text-sm text-gray-900 font-medium cursor-pointer">45°</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 flex justify-between items-center text-sm text-gray-600">
              <span>Code: T10-W-30</span>
              <span className="font-semibold text-gray-900">Added to project</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}