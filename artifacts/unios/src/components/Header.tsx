import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const brandSubnav = [
  { label: "Why Unios", href: "/brand/why-unios" },
  { label: "About Unios", href: "/brand/about" },
  { label: "Sustainability", href: "/brand/sustainability" },
  { label: "Our Culture", href: "/brand/our-culture" },
];

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const brandRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const isDarkHero =
    location === "/" ||
    location === "/2026" ||
    location === "/new" ||
    location === "/toolbox" ||
    location.startsWith("/brand") ||
    location.startsWith("/applications");

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
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  const textColor = scrolled || !isDarkHero ? "text-gray-900" : "text-white";
  const topBarBg = scrolled || !isDarkHero ? "bg-white text-gray-500 border-gray-200" : "bg-black/20 text-white/80 border-white/10";
  const headerBg = scrolled || !isDarkHero ? "bg-white" : "bg-transparent";
  const isProducts = location === "/products";

  return (
    <header
      className={cn("fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300", headerBg)}
      data-testid="header"
    >
      <div className={cn("h-8 flex items-center justify-between px-6 md:px-12 text-[10px] font-medium tracking-[0.02em] border-b", topBarBg)}>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
          <span>Ngôn ngữ:</span>
          <span className="flex items-center gap-1 font-semibold text-gray-900">
            <svg viewBox="0 0 24 16" className="h-3 w-4" aria-hidden="true">
              <rect width="24" height="16" rx="1.5" fill="#da251d" />
              <path
                d="M12 3.4l1.4 2.9 3.2.5-2.3 2.2.5 3.1-2.8-1.5-2.8 1.5.5-3.1-2.3-2.2 3.2-.5L12 3.4z"
                fill="#ffdf00"
              />
            </svg>
            <span>Tiếng Việt</span>
          </span>
          <ChevronDown className="w-2.5 h-2.5" />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/images" className="hover:opacity-70 transition-opacity" data-testid="nav-image-library">
            Image Library
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/where-to-buy" className="hover:opacity-70 transition-opacity" data-testid="nav-where-to-buy">
            Vị trí cửa hàng
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/contact" className="hover:opacity-70 transition-opacity" data-testid="nav-contact">
            Liên hệ
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/toolbox" className="hover:opacity-70 transition-opacity" data-testid="nav-login">
            Đăng nhập/Đăng ký
          </Link>
        </div>
      </div>

      <div className="h-[60px] flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center" data-testid="nav-logo">
            <span className={cn("text-[2.15rem] font-bold tracking-[-0.06em] transition-colors leading-none", textColor)}>
              unios.
            </span>
          </Link>

          <Link href="/2026" className="flex items-center gap-1.5" data-testid="nav-2026">
            <span className="text-[9px] font-bold tracking-widest bg-[#1139F5] text-white px-1.5 py-0.5 leading-none">
              NEW
            </span>
            <span className={cn("text-sm font-semibold transition-colors hover:opacity-70", textColor)}>2026</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/products"
            className={cn("relative pb-5 transition-colors hover:opacity-70", textColor, isProducts && "text-[#1139F5]")}
            data-testid="nav-products"
          >
            Products
            {isProducts && <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#1139F5]" />}
          </Link>
          <Link href="/projects" className={cn("transition-colors hover:opacity-70", textColor)} data-testid="nav-projects">
            Projects
          </Link>
          <Link href="/stories" className={cn("transition-colors hover:opacity-70", textColor)} data-testid="nav-stories">
            Stories
          </Link>
          <Link href="/resources" className={cn("transition-colors hover:opacity-70", textColor)} data-testid="nav-resources">
            Resources
          </Link>

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
              <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl border border-gray-100 py-1 z-50">
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
            className={cn("hidden md:flex text-sm font-medium transition-colors hover:opacity-70", textColor)}
            data-testid="nav-toolbox"
          >
            My Toolbox
          </Link>

          <button
            onClick={() => setSearchOpen((v) => !v)}
            className={cn("p-2 transition-colors rounded-full", scrolled || !isDarkHero ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10")}
            data-testid="nav-search-toggle"
          >
            {searchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
          </button>
        </div>
      </div>

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
            placeholder="Tìm sản phẩm, dự án, câu chuyện..."
            className={cn(
              "flex-1 bg-transparent border-none outline-none text-sm",
              scrolled || !isDarkHero ? "text-gray-900 placeholder:text-gray-400" : "text-white placeholder:text-white/40",
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
