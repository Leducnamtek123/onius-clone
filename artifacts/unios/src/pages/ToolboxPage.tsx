import { motion } from "framer-motion";
import { CheckCircle2, Download, Search, Settings, Save } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

import toolboxMockup from "@/assets/hero-5.png";

export default function ToolboxPage() {
  return (
    <div className="min-h-screen bg-white" data-testid="page-toolbox">
      <Header />
      
      {/* Split Hero */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="bg-[#0e0e0e] text-white pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl ml-auto lg:mr-0 w-full"
          >
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-gray-400">Workspace</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">My Toolbox</h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-12">
              Your lighting project,<br/>organised.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                "Manage multiple projects simultaneously",
                "Configure specific product variants",
                "Generate comprehensive spec sheets",
                "Download full project packages in one click"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#1139F5]" />
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="bg-[#1139F5] text-white px-8 py-4 text-center font-semibold rounded hover:bg-[#0d2fd4] transition-colors" data-testid="btn-create-account">
                Create Free Account
              </Link>
              <Link href="/" className="bg-transparent border border-white/20 text-white px-8 py-4 text-center font-semibold rounded hover:bg-white/10 transition-colors" data-testid="btn-sign-in">
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="bg-[#f5f5f5] pt-32 pb-20 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full max-w-xl rounded-xl shadow-2xl border border-gray-200 overflow-hidden bg-white"
          >
            {/* Fake App Window */}
            <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <img src={toolboxMockup} alt="Toolbox Interface" className="w-full aspect-[4/3] object-cover" />
          </motion.div>
          
          {/* Decorative background elements */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        </div>
      </div>

      {/* How it works */}
      <div className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A seamless workflow from discovery to specification.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-100 z-0" />
            
            {[
              { icon: Search, title: "1. Discover", desc: "Find the perfect lighting products for your application." },
              { icon: Settings, title: "2. Configure", desc: "Select exact specifications: wattage, CCT, beam angle, and finish." },
              { icon: Save, title: "3. Save", desc: "Organise products into specific projects and spaces." },
              { icon: Download, title: "4. Export", desc: "Download spec sheets, IES files, and BIM models instantly." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <step.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="py-24 bg-[#0e0e0e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-4xl font-serif italic font-light mb-8 leading-relaxed">
            "My Toolbox has completely transformed how our studio specifies lighting. What used to take hours of collating PDFs now takes minutes. It's an indispensable part of our workflow."
          </p>
          <div className="font-bold text-sm tracking-wider uppercase">Sarah Jenkins</div>
          <div className="text-gray-400 text-sm mt-1">Principal Architect, SJ Design</div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}