import { motion } from "framer-motion";

interface CardItem {
  title: string;
  content: string;
}

const cards: CardItem[] = [
  {
    title: "Frontend Development",
    content:
      "I build modern, responsive, and scalable UIs using React, Next.js, Tailwind CSS, and Bootstrap, ensuring pixel-perfect designs with smooth user experiences.",
  },
  {
    title: "Backend Development",
    content:
      "I create secure and optimized backend APIs with Node.js, Express.js, and databases like MongoDB & SQLite for seamless data management.",
  },
  {
    title: "Full-Stack Web Apps",
    content:
      "From UI to database, I develop complete web solutions integrating frontend and backend for high-performance applications.",
  },
  {
    title: "Mobile App Development",
    content:
      "I develop cross-platform mobile apps using React Native & Flutter, delivering smooth performance on both Android and iOS.",
  },
  {
    title: "Desktop Apps (Electron)",
    content:
      "I create lightweight and powerful desktop applications with Electron, combining web technologies with native OS integration.",
  },
  {
    title: "API Integration",
    content:
      "I integrate third-party APIs, payment gateways, and cloud services to enhance functionality and improve user experience.",
  },
  {
    title: "UI/UX Improvements",
    content:
      "I focus on improving usability and accessibility with intuitive designs and seamless navigation for better user engagement.",
  },
  {
    title: "Performance Optimization",
    content:
      "I optimize apps for speed, security, and SEO, ensuring best practices for both frontend and backend development.",
  },
];

const WhatIDo: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 px-6 md:px-10 py-12">
      <div className=" mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left Column */}
        <div className="md:w-1/2 self-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I Do?
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mb-4">
            I’m a Full-Stack Developer specializing in creating fast, scalable,
            and user-friendly web & mobile applications. From beautiful UI/UX to
            powerful backend systems, I handle everything to bring your idea to
            life.
          </p>
          <p className="text-gray-500 dark:text-gray-300 mb-6">
            My expertise covers React, Next.js, Node.js, MongoDB, React Native,
            and Flutter. Whether it’s a website, mobile app, or desktop
            software, I deliver high-quality solutions.
          </p>
          <button
            onClick={() =>
              (window.location.href = "mailto:zainqaimi@gmail.com")
            }
            className="bg-purple-600 text-white font-medium px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Say Hello!
          </button>
        </div>

        {/* Right Column: Scrollable Cards */}
        <div
          className="md:w-1/2 w-full h-[430px] overflow-y-scroll pr-2"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          <div
            className="flex flex-col gap-6"
            style={{
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-lg hover:shadow-purple-200 border-l-4 hover:border-purple-600"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
