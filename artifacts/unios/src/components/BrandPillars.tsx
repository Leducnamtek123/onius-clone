import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useRef } from "react";

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import story1 from "@/assets/story-1.png";
import story2 from "@/assets/story-2.png";
import storyFeatured from "@/assets/story-featured.png";
import collage1 from "@/assets/collage-1.png";
import collage2 from "@/assets/collage-2.png";

type StoryCard = {
  category: string;
  title: string;
  author: string;
  image: string;
  className: string;
  travel: number;
  rotate: number;
  soft?: boolean;
};

const storyCards: StoryCard[] = [
  {
    category: "Story > Architecture and Design",
    title: "Creating wonderment...",
    author: "Ross Gardam",
    image: storyFeatured,
    className: "left-[47%] top-[-8%] w-[20rem]",
    travel: -170,
    rotate: 0,
  },
  {
    category: "Story > Technology and Futures",
    title: "Ứng dụng AI trong điều khiển...",
    author: "Stewart Langdown",
    image: story1,
    className: "left-[19%] top-[25%] w-[18rem]",
    travel: 130,
    rotate: -1,
  },
  {
    category: "Story > People and Community",
    title: "Multiplex Jumpstart...",
    author: "Jackson Sarcia",
    image: project2,
    className: "right-[7%] top-[18%] w-[19rem]",
    travel: -95,
    rotate: 1.5,
    soft: true,
  },
  {
    category: "Project",
    title: "Tri ân vẻ đẹp kiến trúc nguyên...",
    author: "Unios Projects",
    image: project1,
    className: "left-[41%] bottom-[2%] w-[15.5rem]",
    travel: -120,
    rotate: -0.6,
    soft: true,
  },
  {
    category: "Story > Architecture and Design",
    title: "Giải pháp kiến trúc và chiếu...",
    author: "Unios Editorial",
    image: collage1,
    className: "right-[21%] bottom-[-11%] w-[20rem]",
    travel: -220,
    rotate: 0.4,
  },
  {
    category: "Standards and Guides",
    title: "Australian lighting standards...",
    author: "Unios Resources",
    image: collage2,
    className: "left-[-4%] bottom-[2%] w-[17rem]",
    travel: -80,
    rotate: 1,
    soft: true,
  },
  {
    category: "Project",
    title: "Khi ánh sáng không còn chỉ l...",
    author: "Unios Projects",
    image: story2,
    className: "right-[-1%] bottom-[8%] w-[16rem]",
    travel: -140,
    rotate: -1,
    soft: true,
  },
];

function FloatingStoryCard({
  card,
  progress,
}: {
  card: StoryCard;
  progress: MotionValue<number>;
}) {
  const y = useTransform(progress, [0, 1], [card.travel, -card.travel]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const opacity = useTransform(progress, [0, 0.15, 0.88, 1], [0.45, 1, 1, 0.55]);

  return (
    <motion.article
      style={{ y, scale, opacity, rotate: card.rotate }}
      className={`absolute overflow-hidden rounded-[6px] bg-[#d8d8d8] text-black shadow-[0_24px_90px_rgba(0,0,0,0.5)] ${card.className} ${
        card.soft ? "blur-[1.4px] opacity-70" : ""
      }`}
    >
      <div className="p-7">
        <p className="mb-5 truncate text-sm font-medium text-black/70">{card.category}</p>
        <h3 className="min-h-[5.5rem] text-3xl font-semibold leading-[0.98]">
          {card.title}
        </h3>
        <div className="mt-7 flex items-center justify-between">
          <span className="text-sm text-black/70">{card.author}</span>
          <BookOpen className="h-5 w-5" />
        </div>
      </div>
      <img src={card.image} alt="" className="h-44 w-full object-cover" aria-hidden="true" />
    </motion.article>
  );
}

export default function BrandPillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.22, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[210vh] bg-[#0d0d0d]"
      data-testid="brand-pillars"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_42%)]" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto h-full max-w-[1720px]">
          {storyCards.map((card) => (
            <FloatingStoryCard key={card.title} card={card} progress={scrollYProgress} />
          ))}

          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
          >
            <h2 className="max-w-[18ch] text-[3.4rem] font-semibold leading-[0.98] text-white md:text-[4.6rem]">
              Câu chuyện, quan điểm và tri thức
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
