import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "wouter";
import { ChevronDown, Search, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocaleRouting } from "@/hooks/use-locale-routing";
import { cn } from "@/lib/utils";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import projectHero from "@/assets/project-hero.png";
import story1 from "@/assets/story-1.png";
import storyFeatured from "@/assets/story-featured.png";
import culture1 from "@/assets/culture-1.png";
import culture2 from "@/assets/culture-2.png";
import culture3 from "@/assets/culture-3.png";
import headshot1 from "@/assets/headshot-1.png";
import headshot2 from "@/assets/headshot-2.png";
import headshot3 from "@/assets/headshot-3.png";

const brandSubnav = [
  { label: "Why Unios", href: "/brand/why-unios" },
  { label: "About Unios", href: "/brand/about" },
  { label: "Sustainability", href: "/brand/sustainability" },
  { label: "Our Culture", href: "/brand/our-culture" },
];

type MenuKey = "products" | "projects" | "stories" | "resources" | "brand";

function MenuPanelTitle({ children }: { children: string }) {
  return <div className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-black/30">{children}</div>;
}

function MenuLink({
  href,
  label,
  onClick,
  active = false,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block text-[1.02rem] leading-[1.35] text-black/65 transition-colors hover:text-black",
        active && "text-black",
      )}
    >
      {label}
    </Link>
  );
}

function MenuImageCard({
  image,
  title,
  subtitle,
  href,
}: {
  image: string;
  title: string;
  subtitle?: string;
  href?: string;
}) {
  const body = (
    <>
      <div className="overflow-hidden rounded-[6px]">
        <img src={image} alt={title} className="h-[130px] w-full object-cover transition-transform duration-300 hover:scale-[1.02]" />
      </div>
      <div className="mt-4 text-[1rem] leading-snug text-black">{title}</div>
      {subtitle ? <div className="mt-2 text-[0.95rem] text-black/60">{subtitle}</div> : null}
    </>
  );

  if (!href) return body;

  return (
    <Link href={href} className="block">
      {body}
    </Link>
  );
}

function MegaMenuPanel({
  menu,
  isVi,
  withLocale,
  onClose,
}: {
  menu: MenuKey;
  isVi: boolean;
  withLocale: (path: string) => string;
  onClose: () => void;
}) {
  if (menu === "products") {
    const labels = isVi
      ? {
          recent: "Recently viewed",
          viewAll: "View all",
          categories: "Category",
          collections: "Collections",
          applications: "Applications",
          explore: "Explore",
          exploreLink: "All products",
        }
      : {
          recent: "Recently viewed",
          viewAll: "View all",
          categories: "Category",
          collections: "Collections",
          applications: "Applications",
          explore: "Explore",
          exploreLink: "All products",
        };

    const categories = isVi
      ? ["Accessories", "Ceiling Recessed", "Ceiling Surface", "Ceiling Suspended", "Drivers", "Freestanding Light", "Industrial", "Landscaping", "Linear", "Table Lamp", "Track", "Wall Recessed", "Wall Surface"]
      : ["Accessories", "Ceiling Recessed", "Ceiling Surface", "Ceiling Suspended", "Drivers", "Freestanding Light", "Industrial", "Landscaping", "Linear", "Table Lamp", "Track", "Wall Recessed", "Wall Surface"];

    const collections = isVi
      ? ["Inter", "Akira", "EQ", "Pandia", "ION S", "Athena Bollard"]
      : ["Inter", "Akira", "EQ", "Pandia", "ION S", "Athena Bollard"];

    const applications = isVi
      ? ["Sports & Recreation", "Industrial", "Multi-residential", "Hospitality", "Hotels", "Retail", "Office", "Public Spaces", "Art & Culture", "Aged Care", "Education", "Residential"]
      : ["Sports & Recreation", "Industrial", "Multi-residential", "Hospitality", "Retail", "Office", "Public Spaces", "Art & Culture", "Aged Care", "Education", "Residential"];

    return (
      <div className="border-t border-white/10 bg-white text-black shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
        <div className="mx-auto grid max-w-[1712px] grid-cols-12 gap-10 px-6 py-8 md:px-12 lg:px-14">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-start justify-between gap-6">
              <div>
                <MenuPanelTitle>{labels.recent}</MenuPanelTitle>
                <div className="text-[1.05rem] text-black/35">You have not viewed any products.</div>
              </div>
              <Link href={withLocale("/products")} onClick={onClose} className="text-[1.05rem] font-semibold text-[#1139F5]">
                {labels.viewAll}
              </Link>
            </div>
          </div>

          <div className="col-span-12 grid gap-8 md:col-span-9 md:grid-cols-3">
            <div>
              <MenuPanelTitle>{labels.categories}</MenuPanelTitle>
              <div className="space-y-2">
                {categories.map((item) => (
                  <MenuLink key={item} href={withLocale("/products")} label={item} onClick={onClose} />
                ))}
              </div>
            </div>

            <div>
              <MenuPanelTitle>{labels.collections}</MenuPanelTitle>
              <div className="space-y-2">
                {collections.map((item) => (
                  <MenuLink key={item} href={withLocale("/products")} label={item} onClick={onClose} />
                ))}
              </div>
            </div>

            <div>
              <MenuPanelTitle>{labels.applications}</MenuPanelTitle>
              <div className="space-y-2">
                {applications.map((item) => (
                  <MenuLink key={item} href={withLocale("/applications/residential")} label={item} onClick={onClose} />
                ))}
              </div>
              <div className="mt-8">
                <MenuPanelTitle>{labels.explore}</MenuPanelTitle>
                <Link href={withLocale("/products")} onClick={onClose} className="text-[1.05rem] font-medium text-[#1139F5]">
                  {labels.exploreLink}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (menu === "projects") {
    const labels = isVi
      ? {
          featured: "Featured",
          viewAll: "View all",
          countries: "By country",
          applications: "Applications",
          explore: "Explore",
          exploreLink: "All projects",
        }
      : {
          featured: "Featured",
          viewAll: "View all",
          countries: "By country",
          applications: "Applications",
          explore: "Explore",
          exploreLink: "All projects",
        };

    const countries = isVi ? ["Australia", "New Zealand", "Vietnam", "China", "Hong Kong (SAR)", "Singapore", "Cambodia", "Korea", "Thailand"] : ["Australia", "New Zealand", "Vietnam", "China", "Hong Kong (SAR)", "Singapore", "Cambodia", "Korea", "Thailand"];
    const projectApps = isVi
      ? ["Sports & Recreation", "Industrial", "Multi-residential", "Hospitality", "Hotels", "Retail", "Office", "Public Spaces", "Art & Culture", "Aged Care", "Education", "Residential"]
      : ["Sports & Recreation", "Industrial", "Multi-residential", "Hospitality", "Retail", "Office", "Public Spaces", "Art & Culture", "Aged Care", "Education", "Residential"];

    return (
      <div className="border-t border-white/10 bg-white text-black shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
        <div className="mx-auto grid max-w-[1712px] grid-cols-12 gap-10 px-6 py-8 md:px-12 lg:px-14">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-start justify-between gap-6">
              <div>
                <MenuPanelTitle>{labels.featured}</MenuPanelTitle>
                <MenuImageCard image={projectHero} title={isVi ? "Unios Melbourne Experience Centre" : "Unios Melbourne Experience Centre"} subtitle={isVi ? "Experience lighting through the vibrance of local design and artistry" : "Experience lighting through the vibrance of local design and artistry"} href={withLocale("/projects")} />
              </div>
              <Link href={withLocale("/projects")} onClick={onClose} className="text-[1.05rem] font-semibold text-[#1139F5]">
                {labels.viewAll}
              </Link>
            </div>
          </div>

          <div className="col-span-12 grid gap-8 md:col-span-9 md:grid-cols-3">
            <div>
              <MenuPanelTitle>{labels.countries}</MenuPanelTitle>
              <div className="space-y-2">
                {countries.map((item) => (
                  <MenuLink key={item} href={withLocale("/projects")} label={item} onClick={onClose} />
                ))}
              </div>
            </div>

            <div>
              <MenuPanelTitle>{labels.applications}</MenuPanelTitle>
              <div className="space-y-2">
                {projectApps.map((item) => (
                  <MenuLink key={item} href={withLocale("/projects")} label={item} onClick={onClose} />
                ))}
              </div>
            </div>

            <div>
              <MenuPanelTitle>{labels.explore}</MenuPanelTitle>
              <Link href={withLocale("/projects")} onClick={onClose} className="text-[1.05rem] font-medium text-[#1139F5]">
                {labels.exploreLink}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (menu === "stories") {
    const labels = isVi
      ? {
          featured: "Featured",
          topics: "Topics",
          contributors: "Recent contributors",
          explore: "Explore",
          exploreLink: "All stories",
        }
      : {
          featured: "Featured",
          topics: "Topics",
          contributors: "Recent contributors",
          explore: "Explore",
          exploreLink: "All stories",
        };

    const topics = isVi
      ? ["Sustainability and Wellness", "Technology and Futurism", "Architecture and Design", "Diversity and Inclusion", "Standards and Guidelines"]
      : ["Sustainability and Wellness", "Technology and Futurism", "Architecture and Design", "Diversity and Inclusion", "Standards and Guidelines"];
    const contributors = [
      { name: "Ross Gardam", image: headshot1 },
      { name: "Fanny Soulard", image: headshot2 },
      { name: "Stewart Langdown", image: headshot3 },
      { name: "Wei He", image: headshot1 },
      { name: "Linh Tran", image: headshot2 },
    ];

    return (
      <div className="border-t border-white/10 bg-white text-black shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
        <div className="mx-auto grid max-w-[1712px] grid-cols-12 gap-10 px-6 py-8 md:px-12 lg:px-14">
          <div className="col-span-12 md:col-span-4">
            <MenuPanelTitle>{labels.featured}</MenuPanelTitle>
            <div className="grid gap-6 sm:grid-cols-2">
              <MenuImageCard image={storyFeatured} title={isVi ? "Creating wonderment through decorative lighting" : "Creating wonderment through decorative lighting"} subtitle={isVi ? "Fanny Soulard" : "Ross Gardam"} href={withLocale("/stories")} />
              <MenuImageCard image={story1} title={isVi ? "Lighting and the Always-on Customer Experience" : "Lighting and the Always-on Customer Experience"} subtitle={isVi ? "We share resources..." : "Henry Luong"} href={withLocale("/stories")} />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <MenuPanelTitle>{labels.topics}</MenuPanelTitle>
            <div className="space-y-3">
              {topics.map((item) => (
                <MenuLink key={item} href={withLocale("/stories")} label={item} onClick={onClose} />
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <MenuPanelTitle>{labels.contributors}</MenuPanelTitle>
            <div className="space-y-3">
              {contributors.map((person) => (
                <Link key={person.name} href={withLocale("/stories")} onClick={onClose} className="flex items-center gap-3 text-[1rem] text-black/75 hover:text-black">
                  <img src={person.image} alt={person.name} className="h-7 w-7 rounded-full object-cover" />
                  <span>{person.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-2">
            <MenuPanelTitle>{labels.explore}</MenuPanelTitle>
            <Link href={withLocale("/stories/all")} onClick={onClose} className="text-[1.05rem] font-medium text-[#1139F5]">
              {labels.exploreLink}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (menu === "resources") {
    const labels = isVi
      ? {
          featured: "Featured",
          categories: "Input",
          products: "Products",
          explore: "Explore",
          exploreLink: "All resources",
        }
      : {
          featured: "Featured",
          categories: "Input",
          products: "Products",
          explore: "Explore",
          exploreLink: "All resources",
        };

    const resourceCategories = isVi ? ["Guide", "Books", "Catalogue", "Magazine", "Other", "Product docs", "BIM", "IES", "2D CAD", "Installation guide", "Images"] : ["Guide", "Books", "Catalogue", "Magazine", "Other", "Product docs", "BIM", "IES", "2D CAD", "Installation guide", "Images"];
    const resourceProducts = isVi
      ? ["LX Infinity Linear Wall Light", "LX Infinity Linear Track Light", "Kobe G2 Surface Mounted Spotlight", "Kobe G2 Recessed Spotlight", "Kobe G2 Track Light", "ION R Trimless Downlight", "Inter Round Linear Light", "Inter Strip Light", "Inter Dome Linear Light", "Inter Cove Linear Light", "Inter Angled Linear Light", "Inter Flat Linear Light"]
      : ["LX Infinity Linear Wall Light", "LX Infinity Linear Track Light", "Kobe G2 Surface Mounted Spotlight", "Kobe G2 Recessed Spotlight", "Kobe G2 Track Light", "ION R Trimless Downlight", "Inter Round Linear Light", "Inter Strip Light", "Inter Dome Linear Light", "Inter Cove Linear Light", "Inter Angled Linear Light", "Inter Flat Linear Light"];

    return (
      <div className="border-t border-white/10 bg-white text-black shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
        <div className="mx-auto grid max-w-[1712px] grid-cols-12 gap-10 px-6 py-8 md:px-12 lg:px-14">
          <div className="col-span-12 md:col-span-3">
            <MenuPanelTitle>{labels.featured}</MenuPanelTitle>
            <div className="grid gap-5 sm:grid-cols-2">
              <MenuImageCard image={product1} title={isVi ? "ION R Series Product Guide" : "ION R Series Product Guide"} subtitle={isVi ? "Product guide" : "Product guide"} href={withLocale("/images")} />
              <MenuImageCard image={product2} title={isVi ? "Living with Light" : "Living with Light"} subtitle={isVi ? "Book" : "Book"} href={withLocale("/images")} />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <MenuPanelTitle>{labels.categories}</MenuPanelTitle>
            <div className="space-y-2">
              {resourceCategories.map((item) => (
                <MenuLink key={item} href={withLocale("/images")} label={item} onClick={onClose} />
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <MenuPanelTitle>{labels.products}</MenuPanelTitle>
            <div className="space-y-2">
              {resourceProducts.map((item) => (
                <MenuLink key={item} href={withLocale("/products")} label={item} onClick={onClose} />
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <MenuPanelTitle>{labels.explore}</MenuPanelTitle>
            <Link href={withLocale("/images")} onClick={onClose} className="text-[1.05rem] font-medium text-[#1139F5]">
              {labels.exploreLink}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t border-white/10 bg-white text-black shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
      <div className="mx-auto grid max-w-[1712px] grid-cols-12 gap-10 px-6 py-8 md:px-12 lg:px-14">
        <div className="col-span-12 md:col-span-3">
          <MenuPanelTitle>{isVi ? "Why Unios" : "Why Unios"}</MenuPanelTitle>
          <div className="space-y-3 text-[1rem] leading-6 text-black/65">
            <p>{isVi ? "We share resources with the world to shape the future of building projects." : "We share resources with the world to shape the future of building projects."}</p>
          </div>
          <div className="mt-6 space-y-2">
            {brandSubnav.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href)}
                onClick={onClose}
                className="block text-[1rem] text-black/70 transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href={withLocale("/brand/why-unios")} onClick={onClose} className="mt-6 inline-block text-[1.05rem] font-medium text-[#1139F5]">
            {isVi ? "Learn more" : "Learn more"}
          </Link>
        </div>

        <div className="col-span-12 md:col-span-3">
          <MenuPanelTitle>{isVi ? "About Unios" : "About Unios"}</MenuPanelTitle>
          <MenuImageCard image={culture1} title={isVi ? "About Unios" : "About Unios"} subtitle={isVi ? "Design and technology" : "Design and technology"} href={withLocale("/brand/about")} />
        </div>

        <div className="col-span-12 md:col-span-3">
          <MenuPanelTitle>{isVi ? "Sustainability" : "Sustainability"}</MenuPanelTitle>
          <MenuImageCard image={culture2} title={isVi ? "Sustainability" : "Sustainability"} subtitle={isVi ? "From materials to end of life" : "From materials to end of life"} href={withLocale("/brand/sustainability")} />
        </div>

        <div className="col-span-12 md:col-span-3">
          <MenuPanelTitle>{isVi ? "Our Culture" : "Our Culture"}</MenuPanelTitle>
          <MenuImageCard image={culture3} title={isVi ? "Our Culture" : "Our Culture"} subtitle={isVi ? "At Unios..." : "At Unios..."} href={withLocale("/brand/our-culture")} />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [location] = useLocation();
  const { t: tr } = useTranslation();
  const { locale, currentPath, withLocale } = useLocaleRouting();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const isVi = locale === "vi";
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
      const target = e.target as Node;
      if (!(target instanceof Node)) return;
      if ((target as Element).closest?.('[data-header-menu-root="true"]')) return;
      setOpenMenu(null);
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
  const isProjects = currentPath.startsWith("/projects");
  const isStories = currentPath.startsWith("/stories");
  const isResources = currentPath.startsWith("/resources");
  const isBrand = currentPath.startsWith("/brand");

  const activeMenu = openMenu;

  const navState = {
    products: isProducts,
    projects: isProjects,
    stories: isStories,
    resources: isResources,
    brand: isBrand,
  } as const;

  const navCopy = {
    imageLibrary: tr("nav.imageLibrary"),
    whereToBuy: tr("nav.whereToBuy"),
    contact: tr("nav.contact"),
    login: tr("nav.login"),
    products: tr("nav.products"),
    projects: tr("nav.projects"),
    stories: tr("nav.stories"),
    resources: tr("nav.resources"),
    brand: tr("nav.brand"),
    toolbox: tr("nav.toolbox"),
    searchPlaceholder: tr("nav.searchPlaceholder"),
  };

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 w-full", headerBg)} data-testid="header">
      <div className={cn("border-b", borderColor)}>
        <div className="grid h-8 w-full grid-cols-[auto_minmax(0,1fr)] items-center px-6 md:px-12 text-[10px] font-medium tracking-[0.02em]">
          <div className="flex items-center gap-2">
            <span className={mutedTextColor}>{tr("common.language")}</span>
            <LanguageSwitcher variant={scrolled || !isDarkHero ? "light" : "dark"} compact />
          </div>

          <div className="flex items-center justify-end gap-4">
            <Link href={withLocale("/images")} className={cn("hover:opacity-70 transition-opacity", mutedTextColor)} data-testid="nav-image-library">
              {navCopy.imageLibrary}
            </Link>
            <span className={cn("opacity-30", mutedTextColor)}>|</span>
            <Link href={withLocale("/where-to-buy")} className={cn("hover:opacity-70 transition-opacity", mutedTextColor)} data-testid="nav-where-to-buy">
              {navCopy.whereToBuy}
            </Link>
            <span className={cn("opacity-30", mutedTextColor)}>|</span>
            <Link href={withLocale("/contact")} className={cn("hover:opacity-70 transition-opacity", mutedTextColor)} data-testid="nav-contact">
              {navCopy.contact}
            </Link>
            <span className={cn("opacity-30", mutedTextColor)}>|</span>
            <Link href={withLocale("/toolbox")} className={cn("hover:opacity-70 transition-opacity", mutedTextColor)} data-testid="nav-login">
              {navCopy.login}
            </Link>
          </div>
        </div>
      </div>

      <div data-header-menu-root="true" className="relative">
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

          <nav className="hidden items-stretch gap-8 text-sm font-medium md:flex">
            {(
              [
                { key: "products", href: "/products", label: navCopy.products, testId: "nav-products" },
                { key: "projects", href: "/projects", label: navCopy.projects, testId: "nav-projects" },
                { key: "stories", href: "/stories", label: navCopy.stories, testId: "nav-stories" },
                { key: "resources", href: "/resources", label: navCopy.resources, testId: "nav-resources" },
              ] as const
            ).map((item) => {
              const isActive = navState[item.key] || activeMenu === item.key;
              return (
                <div
                  key={item.key}
                  className="relative flex items-stretch"
                  onMouseEnter={() => setOpenMenu(item.key)}
                  onFocus={() => setOpenMenu(item.key)}
                >
                  <Link
                    href={withLocale(item.href)}
                    className={cn(
                      "relative inline-flex h-[60px] items-center transition-colors hover:opacity-70",
                      textColor,
                      isActive && !isDarkHero && "text-black",
                    )}
                    data-testid={item.testId}
                    aria-current={navState[item.key] ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className={cn("absolute left-0 right-0 bottom-0 h-px", scrolled || !isDarkHero ? "bg-black" : "bg-white")} />}
                  </Link>
                </div>
              );
            })}

            <div
              className="relative flex items-stretch"
              onMouseEnter={() => setOpenMenu("brand")}
              onFocus={() => setOpenMenu("brand")}
            >
              <button
                className={cn(
                  "relative inline-flex h-[60px] items-center gap-1 transition-colors hover:opacity-70",
                  textColor,
                  (navState.brand || activeMenu === "brand") && !isDarkHero && "text-black",
                )}
                data-testid="nav-brand"
                type="button"
                aria-expanded={activeMenu === "brand"}
                aria-current={navState.brand ? "page" : undefined}
              >
                <span>{navCopy.brand}</span>
                {(navState.brand || activeMenu === "brand") && <span className={cn("absolute left-0 right-0 bottom-0 h-px", scrolled || !isDarkHero ? "bg-black" : "bg-white")} />}
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeMenu === "brand" && "rotate-180")} />
              </button>
            </div>
          </nav>

          <div className="flex items-center justify-self-end gap-3">
            <Link
              href={withLocale("/toolbox")}
              className={cn("hidden md:flex text-sm font-medium transition-colors hover:opacity-70", textColor)}
              data-testid="nav-toolbox"
            >
              {navCopy.toolbox}
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

        {activeMenu && (
          <div
            className="absolute left-0 top-full z-40 w-full pt-0"
            onMouseEnter={() => setOpenMenu(activeMenu)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100vh-92px)] bg-black/10 backdrop-blur-[1px]" />
            <div className="relative">
              <MegaMenuPanel menu={activeMenu} isVi={isVi} withLocale={withLocale} onClose={() => setOpenMenu(null)} />
            </div>
          </div>
        )}
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
              placeholder={navCopy.searchPlaceholder}
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
