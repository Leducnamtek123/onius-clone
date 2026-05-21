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

  const isVi = location === "/vi" || location.startsWith("/vi/");
  const currentPath = isVi ? location.replace(/^\/vi/, "") || "/" : location;
  const isProductDetail = currentPath.startsWith("/products/");
  const isDarkHero =
    currentPath === "/" ||
    currentPath === "/2026" ||
    currentPath === "/new" ||
    currentPath === "/toolbox" ||
    isProductDetail ||
    currentPath.startsWith("/brand") ||
    currentPath.startsWith("/applications");

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
  const mutedTextColor = scrolled || !isDarkHero ? "text-gray-500" : "text-white/80";
  const borderColor = scrolled || !isDarkHero ? "border-gray-200" : "border-white/10";
  const headerBg = scrolled || !isDarkHero ? "bg-white" : "bg-transparent";
  const isProducts = currentPath.startsWith("/products");

  const t = isVi
    ? {
        language: "Ngôn ngữ:",
        imageLibrary: "Image Library",
        whereToBuy: "Vị trí cửa hàng",
        contact: "Liên hệ",
        login: "Đăng nhập/Đăng ký",
        products: "Sản phẩm",
        projects: "Dự án",
        stories: "Câu chuyện",
        resources: "Tài nguyên",
        brand: "Thương hiệu",
        toolbox: "Toolbox của tôi",
        searchPlaceholder: "Tìm sản phẩm, dự án, câu chuyện...",
        localeLabel: "Tiếng Việt",
      }
    : {
        language: "Language:",
        imageLibrary: "Image Library",
        whereToBuy: "Where to buy",
        contact: "Contact",
        login: "Login/Signup",
        products: "Products",
        projects: "Projects",
        stories: "Stories",
        resources: "Resources",
        brand: "Brand",
        toolbox: "My Toolbox",
        searchPlaceholder: "Search products, projects, stories...",
        localeLabel: "English",
      };

  const withLocale = (path: string) => {
    if (!isVi) return path;
    return path === "/" ? "/vi" : `/vi${path}`;
  };

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 w-full", headerBg)} data-testid="header">
      <div className={cn("border-b", borderColor)}>
        <div className="grid h-8 w-full grid-cols-[auto_minmax(0,1fr)] items-center px-6 md:px-12 text-[10px] font-medium tracking-[0.02em]">
          <div className="flex items-center gap-2">
            <span className={mutedTextColor}>{t.language}</span>
            <button
              className={cn("flex items-center gap-1 font-semibold transition-opacity hover:opacity-70", textColor)}
              type="button"
            >
              <svg viewBox="0 0 24 16" className="h-3 w-4" aria-hidden="true">
                <rect width="24" height="16" rx="1.5" fill="#da251d" />
                <path d="M12 3.4l1.4 2.9 3.2.5-2.3 2.2.5 3.1-2.8-1.5-2.8 1.5.5-3.1-2.3-2.2 3.2-.5L12 3.4z" fill="#ffdf00" />
              </svg>
              <span>{t.localeLabel}</span>
              <ChevronDown className="h-2.5 w-2.5" />
            </button>
          </div>

          <div className="flex items-center justify-end gap-4">
            <Link href={withLocale("/images")} className={cn("hover:opacity-70 transition-opacity", mutedTextColor)} data-testid="nav-image-library">
              {t.imageLibrary}
            </Link>
            <span className={cn("opacity-30", mutedTextColor)}>|</span>
            <Link href={withLocale("/where-to-buy")} className={cn("hover:opacity-70 transition-opacity", mutedTextColor)} data-testid="nav-where-to-buy">
              {t.whereToBuy}
            </Link>
            <span className={cn("opacity-30", mutedTextColor)}>|</span>
            <Link href={withLocale("/contact")} className={cn("hover:opacity-70 transition-opacity", mutedTextColor)} data-testid="nav-contact">
              {t.contact}
            </Link>
            <span className={cn("opacity-30", mutedTextColor)}>|</span>
            <Link href={withLocale("/toolbox")} className={cn("hover:opacity-70 transition-opacity", mutedTextColor)} data-testid="nav-login">
              {t.login}
            </Link>
          </div>
        </div>
      </div>

      <div className="grid h-[60px] w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-8 px-6 md:px-12">
        <div className="flex items-center gap-3">
          <Link href={withLocale("/")} className="flex items-center" data-testid="nav-logo">
            <span className={cn("text-[2.15rem] font-bold tracking-[-0.06em] leading-none transition-colors", textColor)}>
              unios.
            </span>
          </Link>

          <Link href={withLocale("/2026")} className="flex items-center gap-1.5" data-testid="nav-2026">
            <span className="text-[9px] font-bold tracking-widest bg-white text-[#222] px-3 py-1 rounded-full leading-none">
              NEW
            </span>
            <span className={cn("text-sm font-semibold transition-colors hover:opacity-70", textColor)}>2026</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href={withLocale("/products")}
            className={cn("relative inline-flex items-center transition-colors hover:opacity-70", textColor, isProducts && "text-[#1139F5]")}
            data-testid="nav-products"
          >
            {t.products}
            {isProducts && <span className="absolute left-0 -bottom-3 h-0.5 w-full bg-[#1139F5]" />}
          </Link>
          <Link href={withLocale("/projects")} className={cn("transition-colors hover:opacity-70", textColor)} data-testid="nav-projects">
            {t.projects}
          </Link>
          <Link href={withLocale("/stories")} className={cn("transition-colors hover:opacity-70", textColor)} data-testid="nav-stories">
            {t.stories}
          </Link>
          <Link href={withLocale("/resources")} className={cn("transition-colors hover:opacity-70", textColor)} data-testid="nav-resources">
            {t.resources}
          </Link>

          <div ref={brandRef} className="relative">
            <button
              onClick={() => setBrandOpen((v) => !v)}
              className={cn("flex items-center gap-1 transition-colors hover:opacity-70", textColor)}
              data-testid="nav-brand"
            >
              {t.brand}
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", brandOpen && "rotate-180")} />
            </button>

            {brandOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl border border-gray-100 py-1 z-50">
                {brandSubnav.map((item) => (
                  <Link
                    key={item.href}
                    href={withLocale(item.href)}
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

        <div className="flex items-center justify-self-end gap-3">
          <Link
            href={withLocale("/toolbox")}
            className={cn("hidden md:flex text-sm font-medium transition-colors hover:opacity-70", textColor)}
            data-testid="nav-toolbox"
          >
            {t.toolbox}
          </Link>

          <button
            onClick={() => setSearchOpen((v) => !v)}
            className={cn(
              "rounded-full p-2 transition-colors",
              scrolled || !isDarkHero ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10",
            )}
            data-testid="nav-search-toggle"
          >
            {searchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className={cn("border-t", borderColor, scrolled || !isDarkHero ? "bg-white" : "bg-black/40")}>
          <div className="flex items-center gap-3 px-6 py-3 md:px-12">
            <Search className={cn("w-4 h-4 flex-shrink-0", scrolled || !isDarkHero ? "text-gray-400" : "text-white/50")} />
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchQuery.trim()) {
                  window.location.href = `${withLocale("/search")}?q=${encodeURIComponent(searchQuery.trim())}`;
                }
                if (e.key === "Escape") setSearchOpen(false);
              }}
              placeholder={t.searchPlaceholder}
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
        </div>
      )}
    </header>
  );
}
