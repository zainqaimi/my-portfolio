import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import card1 from "../assets/card-1.svg";
import card2 from "../assets/card_2.svg";
import card3 from "../assets/card_3.svg";
import card4 from "../assets/card_4.svg";
import card5 from "../assets/card_5.svg";
import card6 from "../assets/card-6.svg";
import { BiRightArrowAlt } from "react-icons/bi";

const cards = [
  {
    id: 1,
    image: card1,
    badge: "Website",
    title: "Modern Portfolio Website",
    description:
      "A sleek and responsive personal portfolio built with React and TailwindCSS, featuring smooth animations, a dark mode toggle, and SEO-friendly architecture.",
    visitLink: "#",
  },
  {
    id: 2,
    image: card2,
    badge: "Mobile App",
    title: "Fitness Tracker App",
    description:
      "A cross-platform fitness tracking mobile application built with React Native. It includes step tracking, calorie counting, and progress analytics with cloud sync.",
    visitLink: "#",
  },
  {
    id: 3,
    image: card3,
    badge: "Desktop App",
    title: "Productivity Dashboard",
    description:
      "A desktop productivity app designed with Electron and TypeScript. It offers task management, note-taking, and integrations with Google Calendar and Slack.",
    visitLink: "#",
  },
  {
    id: 4,
    image: card4,
    badge: "Website",
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce solution featuring a fully functional shopping cart, Stripe payment gateway, and an intuitive admin dashboard for managing products.",
    visitLink: "#",
  },
  {
    id: 5,
    image: card5,
    badge: "Mobile App",
    title: "Travel Companion App",
    description:
      "A travel planning app with AI-based itinerary suggestions, offline map support, hotel booking, and multi-language translations for an effortless travel experience.",
    visitLink: "#",
  },
  {
    id: 6,
    image: card6,
    badge: "Website",
    title: "Learning Management System",
    description:
      "A robust LMS platform for online education, supporting live classes, quizzes, assignments, and progress tracking for both teachers and students.",
    visitLink: "#",
  },
];

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          A curated selection of my work, showcasing websites, mobile apps, and
          desktop solutions crafted with modern technologies and attention to
          detail.
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
        {cards.map((card) => {
          const isExpanded = expanded[card.id] ?? false;
          const shortDesc = card.description.slice(0, 90) + "...";

          return (
            <motion.div
              key={card.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.03 }}
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

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {isExpanded ? card.description : shortDesc}
                </p>
                {card.description.length > 90 && (
                  <button
                    onClick={() => toggleReadMore(card.id)}
                    className="text-purple-600 hover:underline text-sm"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}

                <div className="pt-2 w-1/2">
                  <a
                    href={card.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 border border-purple-400 hover:text-white text-purple-600 hover:bg-purple-600 dark:hover:text-white rounded-md py-2 text-sm transition-all duration-300"
                  >
                    Visit <BiRightArrowAlt size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
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

export default Projects;
