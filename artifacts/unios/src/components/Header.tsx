import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Globe, Search, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

const brandSubnav = [
  { label: "About Unios", href: "/brand/about" },
  { label: "Our Culture", href: "/brand/our-culture" },
  { label: "Sustainability", href: "/brand/sustainability" },
  { label: "Why Unios", href: "/brand/why-unios" },
];

const applicationTypes = [
  "retail", "hospitality", "hotels", "office", "residential",
  "education", "public-spaces", "art-and-culture",
  "multi-residential", "industrial", "sports-and-recreation", "aged-care",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();
  const brandRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const isDarkHero = location === "/" || location === "/2026" || location === "/new" ||
    location === "/toolbox" || location.startsWith("/brand") || location.startsWith("/applications");

  useEffect(() => {
    setScrolled(false);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (brandRef.current && !brandRef.current.contains(e.target as Node)) {
        setBrandOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const textColor = scrolled || !isDarkHero ? "text-gray-900" : "text-white";
  const topBarBg = scrolled || !isDarkHero ? "bg-[#f5f5f5] text-gray-500 border-gray-200" : "bg-black/20 text-white/80 border-white/10";
  const headerBg = scrolled || !isDarkHero ? "bg-white shadow-sm" : "bg-transparent";

  return (
    <header
      className={cn("fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300", headerBg)}
      data-testid="header"
    >
      {/* Top utility bar */}
      <div className={cn("h-8 flex items-center justify-between px-6 md:px-12 text-[10px] uppercase tracking-wider font-semibold border-b", topBarBg)}>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
          <Globe className="w-3 h-3" />
          <span>EN</span>
          <ChevronDown className="w-2.5 h-2.5" />
        </div>
        <div className="flex items-center gap-4">
          <Link href="/images" className="hover:opacity-70 transition-opacity" data-testid="nav-image-library">Image Library</Link>
          <span className="opacity-30">|</span>
          <Link href="/where-to-buy" className="hover:opacity-70 transition-opacity" data-testid="nav-where-to-buy">Where to buy</Link>
          <span className="opacity-30">|</span>
          <Link href="/contact" className="hover:opacity-70 transition-opacity" data-testid="nav-contact">Contact</Link>
          <span className="opacity-30">|</span>
          <Link href="/toolbox" className="hover:opacity-70 transition-opacity" data-testid="nav-login">Login/Signup</Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="h-[60px] flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center" data-testid="nav-logo">
            <span className={cn("text-2xl font-bold tracking-tight transition-colors", textColor)}>
              unios.
            </span>
          </Link>
          <Link href="/2026" className="flex items-center gap-1.5" data-testid="nav-2026">
            <span className="text-[9px] font-bold tracking-widest bg-[#1139F5] text-white px-1.5 py-0.5 leading-none">NEW</span>
            <span className={cn("text-sm font-semibold transition-colors hover:opacity-70", textColor)}>2026</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/products"
            className={cn("transition-colors hover:opacity-70", textColor)}
            data-testid="nav-products"
          >
            Products
          </Link>
          <Link
            href="/projects"
            className={cn("transition-colors hover:opacity-70", textColor)}
            data-testid="nav-projects"
          >
            Projects
          </Link>
          <Link
            href="/stories"
            className={cn("transition-colors hover:opacity-70", textColor)}
            data-testid="nav-stories"
          >
            Stories
          </Link>
          <Link
            href="/resources"
            className={cn("transition-colors hover:opacity-70", textColor)}
            data-testid="nav-resources"
          >
            Resources
          </Link>

          {/* Brand dropdown */}
          <div ref={brandRef} className="relative">
            <button
              onClick={() => setBrandOpen((v) => !v)}
              className={cn("flex items-center gap-1 transition-colors hover:opacity-70", textColor)}
              data-testid="nav-brand"
            >
              Brand
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", brandOpen && "rotate-180")} />
            </button>
            {brandOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 py-1 z-50">
                {brandSubnav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    onClick={() => setBrandOpen(false)}
                    data-testid={`nav-brand-${item.href.split("/").pop()}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/toolbox"
            className={cn(
              "hidden md:flex text-xs font-semibold px-4 py-2 border transition-colors",
              scrolled || !isDarkHero
                ? "border-gray-300 text-gray-900 hover:bg-gray-50"
                : "border-white/30 text-white hover:bg-white/10"
            )}
            data-testid="nav-toolbox"
          >
            My Toolbox
          </Link>

          {/* Search toggle */}
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className={cn("p-2 transition-colors rounded-full", scrolled || !isDarkHero ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10")}
            data-testid="nav-search-toggle"
          >
            {searchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expandable search bar */}
      {searchOpen && (
        <div className={cn("border-t px-6 md:px-12 py-3 flex items-center gap-3", scrolled || !isDarkHero ? "bg-white border-gray-200" : "bg-black/40 border-white/10")}>
          <Search className={cn("w-4 h-4 flex-shrink-0", scrolled || !isDarkHero ? "text-gray-400" : "text-white/50")} />
          <input
            ref={searchRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchQuery.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
              }
              if (e.key === "Escape") setSearchOpen(false);
            }}
            placeholder="Search products, projects, stories..."
            className={cn(
              "flex-1 bg-transparent border-none outline-none text-sm",
              scrolled || !isDarkHero ? "text-gray-900 placeholder:text-gray-400" : "text-white placeholder:text-white/40"
            )}
            data-testid="header-search-input"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="opacity-50 hover:opacity-100">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}
    </header>
  );
}
