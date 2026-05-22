import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BrandSustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-24 bg-[#0a1a14] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-[#4CAF50]"
          >
            Sustainability
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto"
          >
            Illuminating spaces, preserving the planet.
          </motion.p>
        </div>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { value: "40%", label: "Carbon Reduction Target by 2030", progress: 40 },
            { value: "95%", label: "Recyclable Packaging", progress: 95 },
            { value: "A+", label: "LED Efficiency Rating", progress: 100 },
            { value: "60%", label: "Local Manufacturing", progress: 60 }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-gray-50 border border-gray-100"
            >
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">{stat.value}</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">{stat.label}</div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-[#4CAF50] h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Product Longevity", text: "We build fixtures that last decades, not years. Modularity and replaceable components mean you update, not discard." },
            { title: "Responsible Manufacturing", text: "Minimizing waste in our supply chain, prioritizing recycled aluminum, and operating energy-efficient facilities." },
            { title: "Community Impact", text: "Partnering with local organizations and prioritizing ethical labor practices across all our global operations." }
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#e8f5e9] flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#4CAF50] rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-12">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-50 grayscale">
            <div className="text-xl font-bold">ISO 9001</div>
            <div className="text-xl font-bold">ISO 14001</div>
            <div className="text-xl font-bold">Green Star</div>
            <div className="text-xl font-bold">RoHS Compliant</div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 prose prose-lg">
          <h2 className="text-3xl font-semibold text-center mb-8">Our commitments</h2>
          <p>
            The lighting industry has a profound impact on global energy consumption. As a leading manufacturer, we recognize our responsibility to drive change.
          </p>
          <p>
            By 2030, Cosmos aims to become a fully carbon-neutral organization. This involves an end-to-end audit of our supply chain, removing single-use plastics, and shifting all our facilities to renewable energy sources.
          </p>
          <p>
            Furthermore, we are designing our products with the circular economy in mind. End-of-life recycling programs are currently being piloted across Australia, with plans for global rollout by 2027.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
