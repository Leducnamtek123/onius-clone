import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import storyFeatured from "@/assets/story-featured.png";
import story1 from "@/assets/story-1.png";
import story2 from "@/assets/story-2.png";
import collage1 from "@/assets/collage-1.png";
import collage2 from "@/assets/collage-2.png";
import collage3 from "@/assets/collage-3.png";
import collage4 from "@/assets/collage-4.png";

const stories = [
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
    author: "Cosmos Editorial",
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
];

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Header />

      <div className="pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">Stories.</h1>
          <Link href="/stories/all" className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider border-b-2 border-black/10 pb-1 hover:border-black transition-colors">
            View All Stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Story */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white grid grid-cols-1 lg:grid-cols-2 group cursor-pointer border border-gray-100 hover:border-gray-300 transition-colors mb-20"
          data-testid="featured-story"
        >
          <div className="relative aspect-square lg:aspect-auto overflow-hidden">
            <img 
              src={storyFeatured} 
              alt="Featured story" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1139F5] bg-blue-50 px-3 py-1">Featured</span>
              <span className="text-xs text-gray-500 font-medium">Lighting Design</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Light and the architecture of emotion.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              In our latest editorial piece, we explore how lighting transcends its functional purpose to become the primary medium through which we experience and feel architectural space.
            </p>
            <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">David Reynolds</span>
                <span className="text-xs text-gray-500">24 Oct 2025</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#1139F5] group-hover:text-white transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story Grid */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-semibold">Latest articles</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white flex flex-col group cursor-pointer border border-gray-100 hover:border-gray-300 transition-colors"
              data-testid={`story-card-${story.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1139F5] mb-4">
                  {story.category}
                </span>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 leading-snug group-hover:text-[#1139F5] transition-colors">
                  {story.title}
                </h4>
                <p className="text-sm text-gray-600 mb-8 line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-medium text-gray-900">{story.author}</span>
                  <span>{story.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link href="/stories/all" className="inline-block px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest">
            View All Stories
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
