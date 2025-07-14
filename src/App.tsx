import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import bgSvg from "./assets/BG.svg";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import WorkProcess from "./sections/WorkProcess";
import HappyClients from "./sections/HappyClients";
import Footer from "./components/Footer";
import Portfolio from "./sections/Portfolio";
import DiscussSection from "./sections/Discuss";
import Contact from "./sections/Contact";
import { BiArrowToTop } from "react-icons/bi";
import ThemeToggle from "./components/ThemeToggle";
import WhatIDo from "./sections/WhatIDo";

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgSvg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="dark:bg-gray-900 transition-colors duration-500"
    >
      <Navbar />
      <Hero />
      <Experience />
      <WorkProcess />
      <Portfolio />
      <HappyClients />
      <DiscussSection />
      <WhatIDo />
      <Contact />
      <Footer />

      {/* Floating Buttons Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {/* Theme Toggle */}
        <div className=" mb-2 bg-slate-500 text-white dark:bg-purple-500 p-1 rounded-full shadow-sm transition">
          <ThemeToggle />
        </div>
        {/* Scroll to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="bg-purple-600 text-white dark:bg-purple-500 p-3 rounded-full shadow-lg hover:bg-purple-700 dark:hover:bg-purple-400 transition"
            aria-label="Scroll to top"
          >
            <BiArrowToTop size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
