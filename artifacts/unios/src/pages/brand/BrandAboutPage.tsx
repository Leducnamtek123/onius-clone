import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// We assume these images will be generated or exist
import headshot1 from "@/assets/headshot-1.png";
import headshot2 from "@/assets/headshot-2.png";
import headshot3 from "@/assets/headshot-3.png";
import collage1 from "@/assets/collage-1.png";

const timeline = [
  { year: "2008", text: "Founded Perth WA" },
  { year: "2012", text: "First international distribution" },
  { year: "2015", text: "100+ products" },
  { year: "2018", text: "Expanded APAC" },
  { year: "2022", text: "Award-winning Pandia" },
  { year: "2026", text: "New collection" },
];

const team = [
  { name: "Sarah Jenkins", title: "Chief Executive Officer", image: headshot1 },
  { name: "Marcus Chen", title: "Head of Design", image: headshot2 },
  { name: "Elena Rodriguez", title: "Technical Director", image: headshot3 },
];

export default function BrandAboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-24 bg-[#0e0e0e] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight"
          >
            About Cosmos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/70 font-light"
          >
            Changing how the world views lighting since 2008
          </motion.p>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              We are a technology-led lighting company.
            </h2>
            <p className="text-lg text-gray-500 mb-6">
              Born from a desire to make architectural lighting more accessible without compromising on quality or performance. Our approach blends precision engineering with thoughtful design to create luminaires that shape the way we experience space.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={collage1} alt="Lighting detail" className="w-full h-[300px] object-cover" />
            <img src={collage1} alt="Lighting installation" className="w-full h-[300px] object-cover mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-16 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200" />
            {timeline.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-[-4px] md:left-[calc(50%-4px)] w-2 h-2 rounded-full bg-black" />
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-left md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                    <span className="text-2xl font-bold text-[#1139F5] mb-2">{item.year}</span>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-16 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="overflow-hidden mb-6 aspect-square">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-500">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "15+", label: "Years" },
              { num: "500+", label: "Products" },
              { num: "30+", label: "Countries" },
              { num: "6", label: "Showrooms" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-bold mb-2">{stat.num}</div>
                <div className="text-sm uppercase tracking-wider text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
