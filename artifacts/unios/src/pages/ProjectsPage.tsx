import type { ReactNode } from "react";
import { useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import collage1 from "@/assets/collage-1.png";
import collage2 from "@/assets/collage-2.png";

const featuredProjects = [
  {
    id: "built-head-office",
    title: "Di sản của tương lai",
    location: "Built Head Office Sydney, Australia",
    image: project1,
  },
  {
    id: "prestige-homes",
    title: "Ngôi nhà của sự thoải mái, giản dị và thanh bình",
    location: "Prestige Homes Perth, Australia",
    image: project2,
  },
  {
    id: "karrinyup-shopping-centre",
    title: "Chiếu sáng khu phức hợp đa năng hàng đầu của thành phố Perth",
    location: "Karrinyup Shopping Centre Perth, Australia",
    image: collage1,
  },
  {
    id: "owston-hill-villa",
    title: "Sự kết hợp tinh tế giữa kiến trúc, kỹ thuật chế tác và nội thất",
    location: "Biệt thự Owston Hill Perth, Australia",
    image: collage2,
  },
];

const applicationFilters = [
  "All",
  "Retail",
  "Hospitality",
  "Public Spaces",
  "Multi-Residential",
  "Industrial",
  "Hotels",
  "Art & Culture",
  "Education",
  "Sports & Recreation",
  "Residential",
  "Office",
  "Aged Care",
];

function FilterChip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "whitespace-nowrap rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors",
        active
          ? "border-[#2e1f1f] bg-[#2e1f1f] text-white"
          : "border-[#d9d2cb] bg-white text-[#5b4b44] hover:border-[#2e1f1f] hover:text-[#2e1f1f]",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}

function SelectLike({ label, value }: { label: string; value: string }) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-[#7a6960]">
      <span>{label}</span>
      <button
        type="button"
        className="flex h-12 items-center justify-between rounded-none border border-[#d7cfc7] bg-white px-4 text-left text-sm text-[#2e1f1f] transition-colors hover:border-[#2e1f1f]"
      >
        <span className="truncate">{value}</span>
        <span className="text-[#a08e84]">▾</span>
      </button>
    </label>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [productCategory, setProductCategory] = useState("Any");
  const [product, setProduct] = useState("Any");

  return (
    <main className="min-h-screen bg-white text-[#2e1f1f]">
      <Header />

      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-[116px] md:px-8 lg:px-12">
        <div className="grid gap-x-12 gap-y-14 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.id} className="group">
              <div className="block">
                <div className="overflow-hidden bg-[#efeae6]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] md:h-[510px]"
                  />
                </div>
                <div className="pt-4 md:pt-5">
                  <h2 className="max-w-[24ch] text-[1.6rem] font-medium leading-[1.05] tracking-[-0.03em] text-[#2e1f1f] md:text-[2rem]">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#5f5148] md:text-[1rem]">{project.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#ece5df] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 lg:px-12">
          <div className="flex flex-col gap-6 border-b border-[#ece5df] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#7a6960]">Search listing</p>
              <h2 className="mt-3 text-[2.4rem] font-medium tracking-[-0.04em] text-[#2e1f1f] md:text-[3.2rem]">
                # Dự án
              </h2>
            </div>

            <div className="flex w-full flex-col gap-4 lg:max-w-[560px]">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <label className="flex h-12 items-center gap-3 border border-[#d7cfc7] px-4 text-sm text-[#6c5c53]">
                  <Search className="h-4 w-4 text-[#8b7b71]" />
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-full border-none bg-transparent outline-none placeholder:text-[#8b7b71]"
                  />
                </label>
                <div className="flex h-12 items-center gap-3 border border-[#d7cfc7] px-4 text-sm text-[#2e1f1f]">
                  <span className="uppercase tracking-[0.16em] text-[11px] text-[#7a6960]">Sort By:</span>
                  <span>Recently added</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {applicationFilters.map((filter) => (
                  <FilterChip key={filter} active={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
                    {filter}
                  </FilterChip>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <SelectLike label="Product Category" value={productCategory} />
            <SelectLike label="Product" value={product} />
          </div>

          <div className="mt-10 rounded-none border border-[#ece5df] bg-[#faf8f6] px-6 py-10 md:px-10 md:py-12">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#7a6960]">
                Something went wrong. Please try again or contact us if the issue persists.
              </p>
              <p className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[#2e1f1f] md:text-3xl">
                There are no projects with the selected filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All");
                  setProductCategory("Any");
                  setProduct("Any");
                }}
                className="mt-8 inline-flex items-center gap-2 border border-[#2e1f1f] bg-[#2e1f1f] px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#2e1f1f]"
              >
                Reset and try again
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
