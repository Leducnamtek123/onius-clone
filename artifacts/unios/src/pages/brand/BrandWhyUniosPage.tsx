import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hero1 from "@/assets/hero-1.png";

const reasons = [
  {
    num: "01",
    title: "Precision Engineering",
    text: "Every component is meticulously crafted. We use advanced thermal management and high-grade optics to ensure that every fixture performs flawlessly over its intended lifespan. Quality isn't an afterthought; it's the foundation of everything we build.",
    img: hero1,
  },
  {
    num: "02",
    title: "Award-Winning Design",
    text: "Our design language speaks for itself. Recognized by Red Dot and Good Design Awards, our luminaires blend seamlessly into architecture while standing out as objects of beauty when noticed.",
    img: hero1,
  },
  {
    num: "03",
    title: "Trusted by Architects",
    text: "Some of the world's most demanding design practices rely on Unios. We provide the tools, the data, and the support necessary to execute complex lighting strategies effortlessly.",
    img: hero1,
  },
  {
    num: "04",
    title: "Local Support",
    text: "Global reach with local understanding. Our regional teams ensure fast lead times, immediate technical support, and an understanding of local compliance and standards.",
    img: hero1,
  },
  {
    num: "05",
    title: "Sustainable Future",
    text: "We are actively reducing our carbon footprint, eliminating waste, and designing for the circular economy. Choosing Unios means specifying a product built for tomorrow.",
    img: hero1,
  }
];

export default function BrandWhyUniosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-24 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-semibold tracking-tight"
          >
            Why Unios?
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center mb-32 last:mb-0`}
            >
              <div className="w-full md:w-1/2">
                <div className="text-8xl font-bold text-gray-100 mb-6">{reason.num}</div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">{reason.title}</h2>
                <p className="text-lg text-gray-500 leading-relaxed">{reason.text}</p>
              </div>
              <div className="w-full md:w-1/2">
                <img src={reason.img} alt={reason.title} className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-12">Trusted by</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            <span className="text-2xl font-bold">Woods Bagot</span>
            <span className="text-2xl font-bold">Hassell</span>
            <span className="text-2xl font-bold">Bates Smart</span>
            <span className="text-2xl font-bold">Cox Architecture</span>
            <span className="text-2xl font-bold">Gensler</span>
          </div>
        </div>
      </section>

      <section className="py-32 text-center">
        <h2 className="text-4xl font-semibold mb-8">Ready to specify?</h2>
        <Link href="/where-to-buy" className="inline-block bg-[#1139F5] text-white px-8 py-4 font-semibold text-sm hover:bg-[#0d2fd4] transition-colors" data-testid="find-distributor-cta">
          Find a Distributor
        </Link>
      </section>

      <Footer />
    </div>
  );
}
