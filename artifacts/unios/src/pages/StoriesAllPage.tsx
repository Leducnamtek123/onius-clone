import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import story1 from "@/assets/story-1.png";
import story2 from "@/assets/story-2.png";
import storyFeatured from "@/assets/story-featured.png";
import collage1 from "@/assets/collage-1.png";
import collage2 from "@/assets/collage-2.png";
import collage3 from "@/assets/collage-3.png";
import collage4 from "@/assets/collage-4.png";
import hero3 from "@/assets/hero-3.png";

const allStories = [
  {
    id: "emotion",
    title: "Light and the architecture of emotion",
    category: "Lighting Design",
    excerpt: "In our latest editorial piece, we explore how lighting transcends its functional purpose to become the primary medium through which we experience and feel architectural space.",
    author: "David Reynolds",
    date: "24 Oct 2025",
    image: storyFeatured,
  },
  {
    id: "cri-in-mind",
    title: "Designing with CRI in mind",
    category: "Lighting Design",
    excerpt: "How colour rendering index affects architectural perception and psychological wellbeing in modern spaces.",
    author: "Sarah Jenkins",
    date: "12 Oct 2025",
    image: story1,
  },
  {
    id: "human-centric",
    title: "The future of human-centric lighting",
    category: "Technology",
    excerpt: "Exploring the science behind circadian lighting and its implementation in contemporary office environments.",
    author: "Dr. Marcus Chen",
    date: "05 Oct 2025",
    image: story2,
  },
  {
    id: "sustainability",
    title: "Sustainability in Australian architecture",
    category: "Sustainability",
    excerpt: "A deep dive into how lighting specification is adapting to meet aggressive carbon reduction targets.",
    author: "Elena Rossi",
    date: "28 Sep 2025",
    image: collage1,
  },
  {
    id: "chris-connell",
    title: "Interview: Chris Connell on Pandia",
    category: "Culture",
    excerpt: "The renowned designer discusses the process of creating our award-winning decorative pendant.",
    author: "Tom Baker",
    date: "15 Sep 2025",
    image: collage2,
  },
  {
    id: "award-season",
    title: "Award season 2026 roundup",
    category: "Culture",
    excerpt: "Celebrating the architectural practices that have pushed boundaries with lighting this year.",
    author: "Unios Editorial",
    date: "02 Sep 2025",
    image: collage3,
  },
  {
    id: "tunable-white",
    title: "How to spec tunable white",
    category: "Technology",
    excerpt: "A practical guide for specifiers navigating the complexities of tunable white control systems.",
    author: "James Wilson",
    date: "21 Aug 2025",
    image: collage4,
  },
  {
    id: "office-trends",
    title: "Office trends: Beyond the open plan",
    category: "Lighting Design",
    excerpt: "As work habits change, so too must the lighting that supports them. Exploring dynamic illumination.",
    author: "Sarah Jenkins",
    date: "10 Aug 2025",
    image: hero3,
  },
];

const categories = ["All", "Lighting Design", "Technology", "Sustainability", "Culture"];

export default function StoriesAllPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStories = allStories.filter((s) => {
    if (activeCategory === "All") return true;
    return s.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8">All Stories.</h1>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-full ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredStories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="flex flex-col group cursor-pointer"
              data-testid={`story-card-${story.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-5">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  {story.category}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 leading-snug group-hover:text-[#1139F5] transition-colors">
                  {story.title}
                </h4>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">
                  {story.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                  <span>{story.author}</span>
                  <span>{story.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-gray-500 text-lg">No stories found in this category.</p>
          </div>
        )}
        
        {filteredStories.length > 0 && (
          <div className="mt-24 text-center">
            <button className="px-8 py-4 border border-gray-300 text-gray-900 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors">
              Load More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
