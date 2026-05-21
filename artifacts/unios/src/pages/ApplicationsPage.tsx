import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import defaultBg from "@/assets/hero-1.png";
import prod1 from "@/assets/hero-2.png";
import prod2 from "@/assets/hero-3.png";
import prod3 from "@/assets/hero-4.png";
import prod4 from "@/assets/hero-5.png";

const types = [
  "retail", "hospitality", "public-spaces", "multi-residential", 
  "industrial", "hotels", "art-and-culture", "education", 
  "sports-and-recreation", "residential", "office", "aged-care"
];

const formatType = (str: string) => {
  return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

export default function ApplicationsPage() {
  const { type } = useParams();
  
  const currentType = type || "retail";
  const isValid = types.includes(currentType);
  const title = formatType(currentType);

  if (!isValid) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-4xl font-bold">Application Not Found</h1>
        <Link href="/" className="text-blue-600 underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" data-testid={`page-application-${currentType}`}>
      <Header />
      
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0 bg-black">
          <img 
            src={defaultBg} 
            alt={title} 
            className="w-full h-full object-cover opacity-60" 
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-widest uppercase text-white/70 mb-4 block">Applications</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{title}</h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Designing for {title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Lighting in {currentType.replace("-", " ")} environments requires a delicate balance of functionality, aesthetics, and compliance. 
                Our solutions are engineered to enhance the occupant experience while meeting the rigorous demands of these spaces. 
                From glare control to high colour rendering, we provide the tools to bring your architectural vision to life.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-16">
                <h3 className="text-xl font-bold mb-4">Common Challenges & Solutions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge: Visual Comfort</h4>
                    <p className="text-gray-600 text-sm">Prolonged exposure requires exceptional glare control to prevent fatigue.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Unios Solution: Darklight Optics</h4>
                    <p className="text-gray-600 text-sm">Products engineered with &lt;19 UGR and deep recessed sources for ultimate visual comfort.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-8">Recommended Products</h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-16">
                {[
                  { img: prod1, name: "LX Infinity", cat: "Linear" },
                  { img: prod2, name: "Kobe G2", cat: "Downlight" },
                  { img: prod3, name: "ION R", cat: "Downlight" },
                  { img: prod4, name: "Inter", cat: "Track" }
                ].map((prod, idx) => (
                  <Link href="#" key={idx} className="group block" data-testid={`rec-product-${idx}`}>
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
                      <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{prod.cat}</p>
                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">{prod.name}</h3>
                  </Link>
                ))}
              </div>

            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-black text-white p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Need project support?</h3>
                <p className="text-white/70 text-sm mb-6">Our lighting designers are ready to assist with calculations, layouts and product selection for your {title.toLowerCase()} project.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider border-b-2 border-white/40 pb-1 hover:border-white transition-colors" data-testid="link-support">
                  Contact Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Other Applications</h3>
                <ul className="space-y-3">
                  {types.filter(t => t !== currentType).slice(0, 6).map(t => (
                    <li key={t}>
                      <Link href={`/applications/${t}`} className="text-gray-900 hover:text-blue-600 font-medium transition-colors" data-testid={`link-app-${t}`}>
                        {formatType(t)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}