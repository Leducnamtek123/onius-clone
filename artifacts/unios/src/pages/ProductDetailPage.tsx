import {
  Download,
  FileText,
  Heart,
  List,
  Plus,
  SlidersHorizontal,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";

const modelCards = [
  { name: "Mini (60mm)", image: product2, power: "Up to 8W", lumens: "Up to 528lm", beam: "8° | 20° | 38° | 50°" },
  { name: "Small (75mm)", image: product2, power: "Up to 11W", lumens: "Up to 1226lm", beam: "22° | 40° | 60°" },
  { name: "Medium (89mm)", image: product2, power: "Up to 15W", lumens: "Up to 1656lm", beam: "22° | 40° | 60°" },
  { name: "Large (163mm)", image: product5, power: "Up to 32W", lumens: "Up to 3814lm", beam: "30° | 50° | 70°" },
  { name: "XL (208mm)", image: product5, power: "Up to 43W", lumens: "Up to 5128lm", beam: "30° | 50° | 70°" },
];

const finishes = [
  "Textured Black/Black",
  "Textured Black/Gold",
  "Textured Black/Metallic",
  "Textured Black/White",
  "Textured White/Black",
  "Textured White/Gold",
  "Textured White/Metallic",
  "Textured White/White",
];

const specs = [
  ["Colour rendering index (CRI)", "90+", "92+"],
  ["Colour temperature", "2700K", "3000K", "4000K"],
  ["IP rating", "IP 44"],
  ["Efficacy", "Up to 119.26 lm/W"],
  ["Control", "Casambi Bluetooth", "DALI", "Phase-cut dimmable", "Non-dim"],
  ["SDCM", "≤2", "≤3"],
  ["LED Lifetime", ">108,000h L90B10", ">55,000h L90B10"],
  ["Materials", "Powder Coated Aluminium"],
  ["Primary Optics", "Asymmetric Wallwasher", "Honeycomb Louvre", "Linear Lens", "Softening Diffuser"],
  ["Unified Glare Rating", "<10", "<13"],
  ["Warranty", "5 Years"],
  ["Class", "Class I"],
];

const resources = [
  { title: "ION R Surface Mounted Downlight", type: "3D Models", size: "ZIP 47.0 MB", tone: "bg-[#e7ecf7] text-[#142c5f]" },
  { title: "ION R Surface Mounted Downlight", type: "REVIT", size: "ZIP 21.5 MB", tone: "bg-[#eef1f5] text-[#1f2937]" },
  { title: "ION R Surface Mounted Downlight", type: "IES", size: "ZIP 5.9 MB", tone: "bg-[#fadedc] text-[#fa604d]" },
  { title: "ION R Surface Mounted Downlight", type: "2D CAD", size: "DWG 7.3 MB", tone: "bg-[#d9e5f8] text-[#335ef5]" },
  { title: "Installation Instructions", type: "PDF", size: "1.7 MB", tone: "bg-[#fff7e2] text-[#fab70c]" },
  { title: "ION R Series Product Guide", type: "Product Literature", size: "PDF 27.9 MB", tone: "bg-[#2e1f1f] text-white" },
];

function ConfigureButton({ compact = false }: { compact?: boolean }) {
  return (
    <button
      type="button"
      className={
        compact
          ? "inline-flex h-12 items-center justify-center gap-2 border border-gray-200 px-6 text-[15px] font-semibold text-[#1139f5] transition-colors hover:border-[#1139f5]"
          : "inline-flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-[2px] bg-[#1139f5] px-9 text-[15px] font-semibold text-white transition-colors hover:bg-[#0d2fd0]"
      }
    >
      <SlidersHorizontal className="h-4 w-4" />
      Configure
    </button>
  );
}

function ModelCard({ item }: { item: (typeof modelCards)[number] }) {
  return (
    <article className="overflow-hidden rounded-[2px] border border-[#ececec] bg-white">
      <div className="flex h-[245px] items-center justify-center bg-[#f6f6f6] px-10">
        <img src={item.image} alt={item.name} className="max-h-[190px] w-full object-contain" />
      </div>
      <div className="px-8 pb-8 pt-7 text-center">
        <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#333]">{item.name}</h3>
        <dl className="mx-auto mt-7 max-w-[250px] space-y-2 text-left text-[15px] leading-5 text-[#1f2933]">
          <div>
            <dt className="inline font-bold">LED Power: </dt>
            <dd className="inline">{item.power}</dd>
          </div>
          <div>
            <dt className="inline font-bold">Lumens: </dt>
            <dd className="inline">{item.lumens}</dd>
          </div>
          <div>
            <dt className="inline font-bold">Beam: </dt>
            <dd className="inline">{item.beam}</dd>
          </div>
        </dl>
        <div className="mt-8">
          <ConfigureButton compact />
        </div>
      </div>
    </article>
  );
}

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header />

      <main>
        <section className="relative min-h-[950px] overflow-hidden bg-[#1a0d09] pt-[120px] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.22),transparent_18%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.28),transparent_16%),linear-gradient(180deg,rgba(78,31,22,0.9),#160906_74%,#0d0908)]" />
          <div className="absolute inset-x-0 top-[120px] flex justify-center gap-5">
            {finishes.map((finish, index) => (
              <button
                key={finish}
                type="button"
                aria-label={finish}
                className={`h-12 w-12 rounded-full border ${index === 0 ? "border-white bg-white" : "border-white/15 bg-[#aaa29e]"}`}
              />
            ))}
          </div>

          <div className="relative mx-auto grid max-w-[1360px] gap-12 px-10 pt-16 lg:grid-cols-[1fr_512px]">
            <div className="relative min-h-[720px]">
              <img
                src={product5}
                alt="ION R Surface Mounted Downlight"
                className="absolute left-[3%] top-[120px] w-[72%] max-w-[760px] rounded-[2px] object-cover shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
              />
              <button type="button" className="absolute bottom-24 left-[22%] inline-flex items-center gap-2 text-[13px] font-semibold text-white">
                <Download className="h-4 w-4" />
                Download image
              </button>
              <div className="absolute bottom-0 left-[22%] flex gap-2">
                <button type="button" className="h-[52px] w-[52px] rounded-[5px] bg-[#a7a19d]" aria-label="Thumbnail one" />
                <button type="button" className="h-[52px] w-[52px] rounded-[5px] border-2 border-[#1139f5] bg-white" aria-label="Thumbnail two" />
              </div>
            </div>

            <aside className="mt-0 bg-white px-12 pb-12 pt-16 text-center text-[#161616] lg:min-h-[704px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#1139f5]">New</div>
              <h1 className="mx-auto mt-4 max-w-[390px] text-[39px] font-semibold leading-[1.22] tracking-[-0.035em] text-black">
                ION R Surface Mounted Downlight
              </h1>
              <div className="mt-10 flex justify-center gap-10 text-[#1139f5]">
                <button type="button" aria-label="Add to toolbox">
                  <Plus className="h-5 w-5" />
                </button>
                <button type="button" aria-label="Save product">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <p className="mx-auto mt-8 max-w-[385px] text-[15px] font-medium leading-[1.55] tracking-[-0.01em] text-[#222]">
                With a minimal design, the ION R Surface Mounted Downlight provides a practical and aesthetically pleasing lighting option in contexts such as between ceiling slats. Comes with an extensive range of accessories, this versatile downlight can be configured to enhance any space.
              </p>
              <p className="mt-6 text-[15px] text-[#222]">
                Part of the <span className="font-bold">ION R</span> collection
              </p>
              <div className="mx-auto mt-12 h-4 w-[155px] rounded bg-gradient-to-r from-[#f0f0f0] via-[#e8e8e8] to-[#f0f0f0]" />
              <div className="mx-auto mt-2 h-4 w-[230px] rounded bg-gradient-to-r from-[#eeeeee] via-[#f7f7f7] to-[#eeeeee]" />
              <div className="mt-10">
                <ConfigureButton />
              </div>
              <div className="mt-9 flex flex-wrap justify-center gap-8 text-[13px] font-bold text-black">
                <a href="#summary" className="inline-flex items-center gap-2">
                  <List className="h-5 w-5" />
                  Product Summary
                </a>
                <a href="#specifications" className="inline-flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Specifications
                </a>
                <a href="#resources" className="inline-flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Downloads
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="summary" className="px-10 py-24">
          <div className="mx-auto max-w-[1360px]">
            <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="text-[35px] font-semibold tracking-[-0.04em] text-black">Available Models</h2>
              <div className="flex gap-7 text-[19px] font-medium">
                <button type="button" className="border-b-2 border-[#1139f5] pb-1 text-[#1139f5]">Photo</button>
                <button type="button" className="pb-1 text-black">Technical drawings</button>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {modelCards.map((item) => (
                <ModelCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="specifications" className="border-t border-[#ededed] px-10 py-24">
          <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[330px_1fr]">
            <h2 className="text-[35px] font-semibold tracking-[-0.04em] text-black">Specifications</h2>
            <div>
              <section>
                <h3 className="mb-7 text-[22px] font-semibold tracking-[-0.02em] text-black">Finishes</h3>
                <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                  {finishes.map((finish, index) => (
                    <div key={finish} className="flex items-center gap-4">
                      <span className={`h-12 w-12 rounded-full border ${index < 4 ? "border-[#111] bg-[#151515]" : "border-gray-200 bg-white"}`} />
                      <span className="text-[14px] font-medium text-[#333]">{finish}</span>
                    </div>
                  ))}
                </div>
              </section>
              <div className="mt-14 grid gap-x-16 gap-y-11 md:grid-cols-2 lg:grid-cols-3">
                {specs.map(([title, ...values]) => (
                  <section key={title}>
                    <h3 className="mb-4 text-[18px] font-semibold tracking-[-0.02em] text-black">{title}</h3>
                    <ul className="space-y-2 text-[15px] leading-6 text-[#4b4b4b]">
                      {values.map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="bg-[#fafafa] px-10 py-24">
          <div className="mx-auto max-w-[1360px]">
            <h2 className="text-[35px] font-semibold tracking-[-0.04em] text-black">Resources</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {resources.map((resource) => (
                <a key={`${resource.title}-${resource.type}`} href="#" className="grid min-h-[152px] grid-cols-[116px_1fr] overflow-hidden rounded-[6px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1">
                  <span className={`flex items-center justify-center ${resource.tone}`}>
                    <FileText className="h-12 w-12 stroke-[1.2]" />
                  </span>
                  <span className="flex flex-col justify-center px-6">
                    <span className="text-[16px] font-bold leading-5 text-black">{resource.title}</span>
                    <span className="mt-2 text-[14px] text-[#4d4d4d]">{resource.type}</span>
                    <span className="mt-1 text-[12px] text-[#888]">{resource.size}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-10 py-24">
          <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#777]">ION R</p>
              <h2 className="mt-3 text-[42px] font-semibold leading-[1.05] tracking-[-0.05em] text-black">A modular future of lighting</h2>
              <p className="mt-6 max-w-[560px] text-[17px] leading-7 text-[#3d3d3d]">
                The ION R Series is designed from the ground up with a fully integrated optical system, engineered to work as one unified unit. With modularity at its core, interchangeable components enable faster lead times, on-site flexibility, and more sustainable production.
              </p>
            </div>
            <img src={project1} alt="ION R lighting in context" className="h-[430px] w-full rounded-[6px] object-cover" />
          </div>
        </section>

        <section className="grid md:grid-cols-3">
          {[
            ["Low glare", "Ensures minimal glare even when performing at high output for maximum visual comfort.", project2],
            ["COI compliance", "Specific models are compliant with the Cyanosis Observation Index, suitable for healthcare applications.", product4],
            ["Tunable white", "Change colour temperatures throughout the day to assist natural circadian rhythms.", product6],
          ].map(([title, body, image]) => (
            <article key={title} className="relative min-h-[420px] overflow-hidden">
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-[27px] font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 max-w-[340px] text-[15px] leading-6 text-white/86">{body}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
