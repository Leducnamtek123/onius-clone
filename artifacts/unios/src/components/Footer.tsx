import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6 md:px-12" data-testid="footer">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <Link href="/" className="inline-block mb-12">
              <span className="text-4xl font-bold tracking-tight">unios.</span>
            </Link>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 opacity-60">Stay up to date</h4>
              <div className="flex border-b border-white/30 pb-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-transparent border-none outline-none w-full text-white placeholder:text-white/30"
                />
                <button className="text-white hover:text-primary transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-8 opacity-60">Products</h4>
              <ul className="space-y-4 font-light opacity-80">
                <li><Link href="#" className="hover:opacity-100 transition-opacity">All Products</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Indoor</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Outdoor</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Linear</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">New Releases</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-8 opacity-60">Projects</h4>
              <ul className="space-y-4 font-light opacity-80">
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Commercial</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Residential</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Retail</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Hospitality</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Submit a project</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-8 opacity-60">Resources</h4>
              <ul className="space-y-4 font-light opacity-80">
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Downloads</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Warranties</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Image Library</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">IES Files</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Toolbox</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-8 opacity-60">Company</h4>
              <ul className="space-y-4 font-light opacity-80">
                <li><Link href="#" className="hover:opacity-100 transition-opacity">About Us</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Careers</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Sustainability</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Contact</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Where to buy</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm font-light opacity-60">
          <p>&copy; {new Date().getFullYear()} Unios Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Use</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">LinkedIn</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}