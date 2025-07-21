import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import card1 from "../assets/images/chatApp.jpeg";
import card2 from "../assets/images/blinkit.jfif";
import card3 from "../assets/images/stylishApp.jpg";
import card4 from "../assets/images/ecomerce..png";
import card5 from "../assets/images/gatsby.png";
import card6 from "../assets/images/swift.png";
import card7 from "../assets/images/inventory.jpg";
import card9 from "../assets/images/inventory.png";
import { BiRightArrowAlt } from "react-icons/bi";

const cards = [
  {
    id: 1,
    image: card1,
    badge: "Mobile App",
    title: "Real-Time Chat App",
    description:
      "A WhatsApp-like real-time chat application built with React Native and Firebase. It features secure authentication, live contact syncing, instant messaging, and a clean mobile-friendly UI.",
    visitLink: "https://github.com/zainqaimi/chatApp-cli.git",
  },
  {
    id: 2,
    image: card2,
    badge: "Mobile App",
    title: "Blinkit Clone App",
    description:
      "A sleek grocery delivery app clone built with Flutter, featuring a splash screen, login authentication, responsive UI with 6 custom screens, and an interactive carousel for showcasing products.",
    visitLink: "https://github.com/zainqaimi/Blinkit-clone.git",
  },
  {
    id: 3,
    image: card3,
    badge: "Mobile App",
    title: "StylishApp Clone",
    description:
      "A multi-screen mobile app built with React Native (Expo) featuring a smooth splash screen, onboarding carousel, and 12 responsive screens. Integrated with Firebase Authentication for secure login and Redux for state management.",
    visitLink: "https://github.com/zainqaimi/Native-expo-StylishApp.git",
  },
  {
    id: 4,
    image: card4,
    badge: "Web App",
    title: "E‑Commerce Web App",
    description:
      "A full-featured e‑commerce web application built with React, featuring Firebase authentication for login & sign-up, product cards with slider and skeleton loading, and Redux Toolkit for cart, state management, and complete order flow.",
    visitLink: "https://github.com/zainqaimi/E-Commerce.git",
  },

  {
    id: 5,
    image: card5,
    badge: "Landing Page",
    title: "Responsive Landing Page (Gatsby.js)",
    description:
      "A modern and fully responsive landing page built with Gatsby.js, featuring smooth layouts, optimized performance, and clean UI design. A practice project to explore static site generation and responsive design principles.",
    visitLink: "https://github.com/zainqaimi/gatsbyjs-ProjectOne.git",
  },
  {
    id: 6,
    image: card6,
    badge: "Web App",
    title: "Swift Space – Animated Web Experience",
    description:
      "A fully animated and design-centric web experience built with Next.js. It features stunning Lottie animations, interactive cards, smooth carousels, and unique UI/UX transitions that push the boundaries of modern web design.",
    visitLink: "https://github.com/Mudassirkz/swift-space.git",
  },
  {
    id: 7,
    image: card7,
    badge: "Desktop App",
    title: "Inventory Management Software",
    description:
      "A cross-platform inventory management software built with React, Vite, Electron, TailwindCSS, and ShadCN UI. It features online & offline sync, a complete backend with better-sqlite database, and a modern desktop-friendly UI.",
    visitLink: "https://github.com/zainqaimi/electron-invoiceApp.git",
  },
  {
    id: 9,
    image: card9,
    badge: "Web App",
    title: "Invoice & Inventory Management App",
    description:
      "A MERN stack-based invoice and inventory management app built with React, Vite, TailwindCSS, and Ant Design for a sleek UI. It includes invoice generation, product management, and a secure Node.js & Express backend with MongoDB.",
    visitLink: "https://github.com/zainqaimi/invoice-App.git",
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
