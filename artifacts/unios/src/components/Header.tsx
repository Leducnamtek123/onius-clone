import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Globe, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex flex-col transition-colors duration-300",
        scrolled ? "bg-white shadow-sm" : "bg-transparent text-white"
      )}
      data-testid="header"
    >
      <div className={cn("h-8 flex items-center justify-between px-6 md:px-12 text-[10px] uppercase tracking-wider font-semibold border-b", scrolled ? "bg-[#f5f5f5] text-gray-500 border-gray-200" : "bg-black/20 text-white/80 border-white/10")}>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
          <Globe className="w-3 h-3" />
          <span>EN</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:opacity-70 transition-opacity">Image Library</Link>
          <span className="opacity-30">|</span>
          <Link href="#" className="hover:opacity-70 transition-opacity">Where to buy</Link>
          <span className="opacity-30">|</span>
          <Link href="#" className="hover:opacity-70 transition-opacity">Contact</Link>
          <span className="opacity-30">|</span>
          <Link href="#" className="hover:opacity-70 transition-opacity">Login/Signup</Link>
        </div>
      </div>
      
      <div className="h-[60px] flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center" data-testid="nav-logo">
            <span className={cn("text-2xl font-bold tracking-tight", scrolled ? "text-black" : "text-white")}>
              unios.
            </span>
          </Link>
          <Link
            href="/2026"
            className="flex items-center gap-1.5 group"
            data-testid="nav-2026"
          >
            <span className="text-[9px] font-bold tracking-widest bg-[#1139F5] text-white px-1.5 py-0.5 leading-none">NEW</span>
            <span className={cn("text-sm font-semibold transition-opacity hover:opacity-70", scrolled ? "text-gray-900" : "text-white")}>2026</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#" className={cn("transition-opacity hover:opacity-70", scrolled ? "text-gray-900" : "text-white")} data-testid="nav-products">Products</Link>
          <Link href="#" className={cn("transition-opacity hover:opacity-70", scrolled ? "text-gray-900" : "text-white")}>Projects</Link>
          <Link href="#" className={cn("transition-opacity hover:opacity-70", scrolled ? "text-gray-900" : "text-white")}>Stories</Link>
          <Link href="#" className={cn("transition-opacity hover:opacity-70", scrolled ? "text-gray-900" : "text-white")}>Resources</Link>
          <Link href="#" className={cn("transition-opacity hover:opacity-70", scrolled ? "text-gray-900" : "text-white")}>Brand</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="#" className={cn("text-xs font-semibold px-4 py-2 border rounded-full transition-colors", scrolled ? "border-gray-300 text-gray-900 hover:bg-gray-50" : "border-white/30 text-white hover:bg-white/10")}>
            My Toolbox
          </Link>
          <button className={cn("p-2 transition-colors", scrolled ? "text-gray-900 hover:bg-gray-100 rounded-full" : "text-white hover:bg-white/10 rounded-full")}>
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}