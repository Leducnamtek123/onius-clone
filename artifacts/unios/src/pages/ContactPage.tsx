import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// We'll use a single placeholder for offices to save on generation, but in a real app these would be distinct
import officeImg from "@/assets/hero-3.png"; 

const offices = [
  {
    city: "Sydney HQ",
    address: "123 Architecture Way, Surry Hills NSW 2010",
    phone: "+61 2 9876 5432",
    hours: "Mon - Fri, 8:30am - 5:30pm",
    image: officeImg,
  },
  {
    city: "Melbourne",
    address: "45 Design St, Collingwood VIC 3066",
    phone: "+61 3 9876 5432",
    hours: "Mon - Fri, 8:30am - 5:30pm",
    image: officeImg,
  },
  {
    city: "Brisbane",
    address: "78 Light Ave, Fortitude Valley QLD 4006",
    phone: "+61 7 9876 5432",
    hours: "Mon - Fri, 8:30am - 5:30pm",
    image: officeImg,
  },
  {
    city: "Perth",
    address: "90 Lumen Blvd, Osborne Park WA 6017",
    phone: "+61 8 9876 5432",
    hours: "Mon - Fri, 8:30am - 5:30pm",
    image: officeImg,
  },
  {
    city: "Singapore",
    address: "10 Marina Blvd, Marina Bay Financial Centre",
    phone: "+65 6789 0123",
    hours: "Mon - Fri, 9:00am - 6:00pm",
    image: officeImg,
  },
  {
    city: "Hong Kong",
    address: "100 Queen's Road Central, Central",
    phone: "+852 3456 7890",
    hours: "Mon - Fri, 9:00am - 6:00pm",
    image: officeImg,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24" data-testid="page-contact">
      <Header />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-16">Contact</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-8">Get in touch</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" data-testid="input-name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Email</label>
                  <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" data-testid="input-email" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Company</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" data-testid="input-company" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Role</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors bg-transparent" data-testid="select-role">
                    <option value="">Select a role</option>
                    <option value="architect">Architect</option>
                    <option value="designer">Designer</option>
                    <option value="developer">Developer</option>
                    <option value="builder">Builder</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Subject</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" data-testid="input-subject" />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Message</label>
                <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors resize-none" data-testid="input-message"></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Attachment</label>
                <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100" data-testid="input-file" />
              </div>

              <button type="submit" className="bg-black text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors" data-testid="button-submit-contact">
                Submit Message
              </button>
            </form>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12"
          >
            <h2 className="text-2xl font-semibold mb-8">Our Offices</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {offices.map((office, idx) => (
                <div key={idx} className="group" data-testid={`office-${idx}`}>
                  <div className="aspect-[4/3] overflow-hidden mb-4 bg-gray-100">
                    <img src={office.image} alt={office.city} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{office.city}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <p>{office.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <p>{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mt-2">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-12 border-t border-gray-200">
              <h3 className="text-lg font-bold mb-4">Connect with us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors" data-testid="social-linkedin">IN</a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors" data-testid="social-instagram">IG</a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors" data-testid="social-pinterest">PI</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}