import Navbar from "./components/Navbar";
import bgSvg from "./assets/BG.svg";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import WorkProcess from "./sections/WorkProcess";
import HappyClients from "./sections/HappyClients";
import Footer from "./components/Footer";
import Portfolio from "./sections/Portfolio";
import DiscussSection from "./sections/Discuss";

export default function App() {
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
      <Footer />
    </div>
  );
}
