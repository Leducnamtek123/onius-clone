import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function ConfiguratorSection() {
  const points = [
    "Progressively specify technical specifications",
    "Product finishes",
    "Save as a favourite or add to a Toolbox project",
    "Conveniently access product resources, 3D assets and more",
  ];

  return (
    <section className="bg-[#111] px-6 py-24 text-white md:px-12 md:py-32" data-testid="configurator-section">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75 }}
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.26em] text-white/45">My Toolbox</p>
          <h2 className="mb-8 max-w-[10ch] text-4xl font-semibold tracking-tight leading-[0.95] md:text-6xl">
            Configure.
            <br />
            Specify.
            <br />
            Save.
          </h2>

          <ul className="mb-10 space-y-5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-white/76">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/18">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm md:text-base leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/toolbox"
              className="inline-flex items-center gap-2 border-b border-white/35 pb-1 text-xs font-semibold uppercase tracking-[0.22em] hover:border-white transition-colors"
            >
              Start configuring now
            </Link>
            <span className="text-sm text-white/45">Register or Login</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden border border-white/10 bg-white text-gray-900 shadow-2xl">
            <div className="border-b border-gray-100 px-8 py-6">
              <p className="text-[10px] uppercase tracking-[0.24em] text-gray-400">Toolbox preview</p>
              <h3 className="mt-2 text-2xl font-semibold">Unios Toolbox</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
                Create, collaborate and manage luminaire schedules in no time.
              </p>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
              <div className="bg-[#f6f6f6] px-8 py-10">
                <div className="mb-6 flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Schedules</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#1139F5]">Live</span>
                </div>
                <div className="space-y-3">
                  {[
                    "Generate and manage infinite luminaire schedules",
                    "Export as Excel or PDF files",
                    "Bookmark and save your favourite luminaires",
                    "Collaborate and share with clients and colleagues",
                    "Customise data sheets with types and details",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded border border-gray-200 bg-white px-4 py-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#1139F5]" />
                      <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between px-8 py-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-gray-400">Access</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    Are you an architect, lighting designer or other professional?
                  </p>
                  <p className="mt-2 text-sm text-[#1139F5]">Find out about Toolbox+</p>
                </div>

                <div className="mt-10 border-t border-gray-100 pt-6">
                  <button className="w-full bg-[#1139F5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d2fd4]">
                    Register or Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
