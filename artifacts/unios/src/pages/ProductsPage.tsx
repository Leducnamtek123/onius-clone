import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import {
  ArrowLeftRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  LayoutGrid,
  SlidersHorizontal,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocaleRouting } from "@/hooks/use-locale-routing";

import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";

type Product = {
  id: string;
  name: string;
  image: string;
  badge?: string;
};

const products: Product[] = [
  { id: "p1", name: "LX Infinity Linear Wall Light", image: product4, badge: "NEW" },
  { id: "p2", name: "LX Infinity Linear Track Light", image: product4, badge: "NEW" },
  { id: "p3", name: "ION R Downlight", image: product2, badge: "NEW" },
  { id: "p4", name: "ION R Adjustable Downlight", image: product2, badge: "NEW" },
  { id: "p5", name: "ION R Trimless Downlight", image: product2, badge: "NEW" },
  { id: "p6", name: "ION R Surface Mounted Downlight", image: product5, badge: "NEW" },
  { id: "p7", name: "ION R Suspended Downlight", image: product5, badge: "NEW" },
  { id: "p8", name: "ION R Focus Downlight", image: product2, badge: "NEW" },
  { id: "p9", name: "ION R Accent Downlight", image: product2, badge: "NEW" },
  { id: "p10", name: "Kobe G2 Track Light", image: product3, badge: "NEW" },
  { id: "p11", name: "Kobe G2 Recessed Spotlight", image: product2, badge: "NEW" },
  { id: "p12", name: "Kobe G2 Surface Mounted Spotlight", image: product2, badge: "NEW" },
  { id: "p13", name: "Inter Pro Linear Light", image: product1, badge: "NEW" },
  { id: "p14", name: "Inter Flat Linear Light", image: product1, badge: "NEW" },
  { id: "p15", name: "Inter Angled Linear Light", image: product1, badge: "NEW" },
  { id: "p16", name: "Inter Cove Linear Light", image: product1, badge: "NEW" },
  { id: "p17", name: "Inter Round Linear Light", image: product1, badge: "NEW" },
  { id: "p18", name: "Inter Dome Linear Light", image: product1, badge: "NEW" },
  { id: "p19", name: "Inter Strip Light", image: product4, badge: "NEW" },
  { id: "p20", name: "Akira G2 Ceiling Light", image: product6, badge: "NEW" },
  { id: "p21", name: "Akira G2 Suspended Ceiling Light", image: product6, badge: "NEW" },
  { id: "p22", name: "EQ Comfort Downlight", image: product2, badge: "NEW" },
  { id: "p23", name: "Max Freestanding Light", image: product5, badge: "NEW" },
  { id: "p24", name: "Titanium G2 Downlight", image: product2, badge: "NEW" },
];

const finishOptions = ["Textured Black", "Textured White", "Textured Grey", "Anodised Aluminium", "Aluminium"];

function FilterChip({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`text-left text-[15px] leading-6 transition-colors ${active ? "font-semibold text-[#1139F5]" : "text-gray-600 hover:text-gray-900"}`}
      type="button"
    >
      {label}
    </button>
  );
}

function ProductCard({ product, detailsHref }: { product: Product; detailsHref: string }) {
  const { t } = useTranslation();

  return (
    <Link
      href={detailsHref}
      className="group flex min-h-[405px] flex-col rounded-[2px] bg-[#f7f7f7] px-6 pb-5 pt-5 text-center transition-transform duration-200 hover:-translate-y-1"
      aria-label={t("products.detailsLabel", { name: product.name })}
    >
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[250px] w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1139F5]">
          {product.badge}
        </div>
        <h3 className="mx-auto mt-3 max-w-[215px] text-[1.18rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#4d4d4d]">
          {product.name}
        </h3>
        <div className="mt-4 text-[1.6rem] leading-none font-normal text-[#1139F5]">
          ...
        </div>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  const [showFilters, setShowFilters] = useState(true);
  const { t } = useTranslation();
  const { withLocale } = useLocaleRouting();

  const pages = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="px-6 pb-20 pt-[92px] md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[282px_minmax(0,1fr)]">
            <aside className="pt-8">
              <button
                type="button"
                onClick={() => setShowFilters((v) => !v)}
                className="mb-8 flex items-center gap-3 text-[1.05rem] font-medium text-black"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#1139F5]">
                  <ChevronLeft className="h-5 w-5" />
                </span>
                <span>{showFilters ? t("products.hideFilters") : t("products.showFilters")}</span>
              </button>

              <div className={`${showFilters ? "block" : "hidden"} space-y-9 lg:block`}>
                <section>
                  <h2 className="mb-3 text-[15px] font-medium text-black">{t("products.category")}</h2>
                  <button
                    type="button"
                    className="flex h-14 w-full items-center justify-between border border-gray-200 px-4 text-[15px] text-black"
                  >
                    <span>{t("common.any")}</span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                </section>

                <section>
                  <h2 className="mb-4 text-[15px] font-medium text-black">{t("products.brightness")}</h2>
                  <div className="relative pt-5">
                    <div className="h-[3px] rounded-full bg-[#1139F5]" />
                    <div className="absolute left-0 top-[14px] h-5 w-5 rounded-full border border-gray-200 bg-white shadow-sm" />
                    <div className="absolute right-0 top-[14px] h-5 w-5 rounded-full border border-gray-200 bg-white shadow-sm" />
                    <div className="mt-4 text-[13px] text-[#1139F5]">{t("common.any")}</div>
                    <div className="absolute left-[-2px] top-[11px] text-gray-400">
                      <span className="text-[10px]">✦</span>
                    </div>
                    <div className="absolute right-[-2px] top-[11px] text-gray-400">
                      <span className="text-[10px]">↗</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-[15px] font-medium text-black">{t("products.finish")}</h2>
                  <div className="space-y-3">
                    {finishOptions.map((item, index) => (
                      <label key={item} className="flex items-center gap-3 text-[14px] text-gray-500">
                        <span
                          className={`h-5 w-5 border ${index === 0 ? "border-black bg-black" : index === 1 ? "border-gray-300 bg-white" : "border-gray-300 bg-gray-100"}`}
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                    <button type="button" className="flex items-center gap-2 pt-1 text-[15px] text-[#1139F5]">
                      <ChevronDown className="h-4 w-4" />
                      <span>{t("products.moreFinishes")}</span>
                    </button>
                  </div>
                </section>

                <section>
                  <h2 className="mb-3 text-[15px] font-medium text-black">{t("products.colourTemperature")}</h2>
                  <button
                    type="button"
                    className="flex h-14 w-full items-center justify-between border border-gray-200 px-4 text-[15px] text-black"
                  >
                    <span>{t("common.any")}</span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                </section>

                <button type="button" className="flex items-center gap-2 text-[15px] text-[#1139F5]">
                  <ChevronDown className="h-4 w-4" />
                  <span>{t("products.moreFilters")}</span>
                </button>
              </div>
            </aside>

            <section className="pt-4">
              <div className="flex flex-col gap-7 border-b border-gray-100 pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex-1 min-w-0">
                  <h1 className="max-w-[620px] whitespace-nowrap text-[3.15rem] font-semibold leading-none tracking-[-0.06em] text-black md:text-[3.75rem]">
                    {t("products.allProducts")}
                  </h1>
                  <p className="mt-8 text-[16px] text-[#4d4d4d]">{t("products.count")}</p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-6 text-[15px]">
                  <div className="flex items-center gap-3 text-black">
                    <Grid2X2 className="h-5 w-5 fill-black" />
                    <LayoutGrid className="h-5 w-5 text-gray-300" />
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-5">
                      <button type="button" className="border-b border-black pb-1 font-semibold text-black">
                        {t("products.productTab")}
                      </button>
                      <button type="button" className="font-semibold text-gray-300">
                        {t("products.onsiteTab")}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[#4d4d4d]">
                      <span>{t("products.sortBy")}</span>
                      <button type="button" className="flex items-center gap-2 font-semibold text-black">
                        <span>{t("products.recommended")}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="flex h-16 items-center gap-3 border border-gray-200 px-8 text-[15px] font-medium text-[#1139F5]"
                    >
                      <ArrowLeftRight className="h-4 w-4" />
                      <span>{t("products.compare")}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} detailsHref={withLocale("/products/ion-r-surface-mounted-downlight")} />
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <div className="flex items-center gap-6 text-[16px] text-gray-400">
                  <button type="button" className="text-gray-200">
                    ««
                  </button>
                  <button type="button" className="text-gray-200">
                    ‹
                  </button>
                  {pages.map((page) => (
                    <button
                      key={page}
                      type="button"
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${page === 1 ? "border border-[#1139F5] text-[#1139F5]" : "text-gray-500"}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button type="button" className="text-gray-500">
                    ›
                  </button>
                  <button type="button" className="text-gray-500">
                    »»
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <a
        href="#"
        aria-label="Zalo"
        className="fixed bottom-8 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#1139F5] shadow-[0_8px_28px_rgba(17,57,245,0.16)]"
      >
        <span className="text-[13px] font-semibold">Zalo</span>
      </a>
    </div>
  );
}
