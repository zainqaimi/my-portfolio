import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HappyClients = () => {
  const clients = ["Google", "drilllife", "in", "amazon", "Medium", "Spotify"];
  const controls = useAnimation();

  // Double the array for seamless looping
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="md:py-16 py-8 md:px-10 px-6">
      <div className=" mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 dark:text-white">
            Happy Clients
          </h2>
          <p className="text-black max-w-2xl mx-auto dark:text-white">
            There are many variations of passages of Lower Ipsum available, but
            the majority have suffered alterations.
          </p>
        </div>

        {/* Infinite scrolling container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-purple-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-purple-50 to-transparent z-10" />

          {/* Animated logos */}
          <motion.div className="flex " animate={controls}>
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 px-10 py-5 mx-6 bg-white rounded-xl shadow-sm shadow-purple-100 flex items-center justify-center
                hover:shadow-md hover:shadow-purple-100 transition-shadow duration-300"
              >
                <span className="text-gray-700 font-medium text-xl">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
