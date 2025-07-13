import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import card1 from "../assets/card-1.svg";
import card2 from "../assets/card_2.svg";
import card3 from "../assets/card_3.svg";
import card4 from "../assets/card_4.svg";
import card5 from "../assets/card_5.svg";
import card6 from "../assets/card-6.svg";

const cards = [
  {
    id: 1,
    image: card1,
    badge: "UI-UX DESIGN",
    title: "Project One",
    subtitle: "React App",
    link: "#",
  },
  {
    id: 2,
    image: card2,
    badge: "UI-UX DESIGN",
    title: "Project Two",
    subtitle: "Fullstack App",
    link: "#",
  },
  {
    id: 3,
    image: card3,
    badge: "UI-UX DESIGN",
    title: "Project Three",
    subtitle: "Mobile App",
    link: "#",
  },
  {
    id: 4,
    image: card4,
    badge: "UI-UX DESIGN",
    title: "Project Four",
    subtitle: "Design System",
    link: "#",
  },
  {
    id: 5,
    image: card5,
    badge: "UI-UX DESIGN",
    title: "Project Five",
    subtitle:
      "Complex product system for enterprise use. product system for enterprise use. product system for enterprise use.product system for enterprise use.",
    link: "#",
  },
  {
    id: 6,
    image: card6,
    badge: "UI-UX DESIGN",
    title: "Project Six",
    subtitle: "Clean UI Kit with Figma support.",
    link: "#",
  },
];

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  return (
    <section
      id="projects"
      className="lg:py-20 py-14 relative m-auto px-4 md:px-10 dark:bg-gray-900 overflow-x-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Portfolio
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 md:max-w-screen-md text-center mx-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.There are many variations of
          passages of Lorem Ipsum available, but the majority have suffered
          alteration.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hidden cursor-grab space-x-6 px-2 md:px-6 py-4"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[280px] md:w-[320px] bg-white dark:bg-gray-900 rounded-lg shadow-md shadow-gray-100 hover:shadow-lg hover:shadow-purple-300 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5 space-y-3 text-left">
              <span className="text-xs font-medium bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                {card.badge}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {card.subtitle}
              </p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-36 h-10 border border-purple-400 text-purple-600 hover:bg-purple-100 hover:dark:bg-purple-600 hover:dark:text-white rounded-md transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          .scrollbar-hidden {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default Portfolio;
