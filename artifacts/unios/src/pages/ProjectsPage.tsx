import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import projectHero from "@/assets/project-hero.png";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import collage1 from "@/assets/collage-1.png";
import collage2 from "@/assets/collage-2.png";
import collage3 from "@/assets/collage-3.png";
import collage4 from "@/assets/collage-4.png";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";

const projects = [
  {
    id: "utas-library",
    name: "UTAS Library Tasmania",
    location: "Hobart, TAS",
    application: "Education",
    products: "LX Infinity, Kobe G2",
    image: project1,
  },
  {
    id: "hyatt-regency",
    name: "Hyatt Regency Singapore",
    location: "Singapore",
    application: "Hotel",
    products: "ION R, Pandia",
    image: project2,
  },
  {
    id: "1-bligh",
    name: "1 Bligh St Sydney",
    location: "Sydney, NSW",
    application: "Office",
    products: "Inter, Akira G2",
    image: collage1,
  },
  {
    id: "emporium-melbourne",
    name: "Emporium Melbourne",
    location: "Melbourne, VIC",
    application: "Retail",
    products: "Kobe G2, Kinetic",
    image: collage2,
  },
  {
    id: "national-gallery",
    name: "National Gallery Canberra",
    location: "Canberra, ACT",
    application: "Art & Culture",
    products: "ION X, Amika",
    image: collage3,
  },
  {
    id: "qt-hotels",
    name: "QT Hotels Brisbane",
    location: "Brisbane, QLD",
    application: "Hotel",
    products: "Pandia, LX Infinity",
    image: collage4,
  },
  {
    id: "atlassian-hq",
    name: "Atlassian HQ Sydney",
    location: "Sydney, NSW",
    application: "Office",
    products: "Inter, ION R Mini",
    image: hero1,
  },
  {
    id: "crown-resorts",
    name: "Crown Resorts Melbourne",
    location: "Melbourne, VIC",
    application: "Hospitality",
    products: "ION S, Kobe",
    image: hero2,
  },
];

const applications = [
  "All",
  "Retail",
  "Hospitality",
  "Education",
  "Office",
  "Residential",
  "Hotel",
  "Public Spaces",
  "Art & Culture",
  "Multi-Residential",
  "Industrial",
  "Sports",
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.application === activeFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="relative pt-[120px] pb-24 bg-[#0e0e0e] text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url(${projectHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Projects</h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Explore how our precision lighting solutions transform spaces across the globe, from intimate residential settings to landmark commercial architecture.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="sticky top-[60px] z-40 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-2">
            {applications.map((app) => (
              <button
                key={app}
                onClick={() => setActiveFilter(app)}
                className={`flex-shrink-0 px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-full ${
                  activeFilter === app
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                data-testid={`filter-${app.toLowerCase().replace(/\s/g, "-")}`}
              >
                {app}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group cursor-pointer"
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1139F5]">
                    {project.application}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {project.location}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Key products: <span className="text-gray-900 font-medium">{project.products}</span>
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-black uppercase tracking-wider group-hover:text-[#1139F5] transition-colors">
                  View Project <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length > 0 && (
          <div className="mt-20 text-center">
            <button 
              className="px-8 py-4 border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              data-testid="load-more-btn"
            >
              Load More Projects
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="py-32 text-center">
            <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more projects.</p>
            <button 
              onClick={() => setActiveFilter("All")}
              className="mt-6 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
