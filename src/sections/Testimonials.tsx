import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/testimonals.png";

const testimonials = [
  {
    id: 1,
    name: "Bastien Paul",
    feedback:
      "We've tried various tools and Emailwarmup has definitely been the best for a number of reasons.",
    rating: 4,
  },
  {
    id: 2,
    name: "Colie Goodrich",
    feedback:
      "Tarique was very professional and made the buying process easy and at a fair price.I would highly recommend buying from him and plan to buy from him again.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mark Hoffman",
    feedback: "My reviewer is super excited being part of happy addon family.",
    rating: 3,
  },
];

const Testimonials: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const cardVariants = {
    initial: (index: number) => ({
      rotate:
        isMobile === null
          ? 0
          : isMobile
          ? 0
          : index === 1
          ? 0
          : index === 0
          ? -7
          : 7,
      zIndex: index === 1 ? 4 : 0,
      scale: index === 1 ? 0.96 : 0.92,
      marginLeft: isMobile ? 0 : index === 1 ? 0 : index === 0 ? 0 : -32,
      marginRight: isMobile ? 0 : index === 1 ? 0 : index === 0 ? -32 : 0,
      marginTop: isMobile ? 0 : index === 1 ? 0 : index === 0 ? 0 : 10,
    }),
    animate: (index: number) => ({
      rotate: isMobile ? 0 : index === 1 ? 0 : index === 0 ? -7 : 7,
      marginLeft: isMobile ? 0 : index === 1 ? 0 : index === 0 ? 0 : -32,
      marginRight: isMobile ? 0 : index === 1 ? 0 : index === 0 ? -32 : 0,
    }),
  };

  return (
    <section className="flex flex-col items-center justify-center md:px-10 px-6 py-16 bg-[#fffcf7] dark:bg-gray-950">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Here’s what people say about working with me — their experience and
          satisfaction.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:px-10 px-6 py-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className={`relative p-6 rounded-lg shadow-lg w-72 h-80 shadow-purple-500
            bg-white dark:bg-[#1e1e1e]
            transition-colors duration-300`}
            variants={cardVariants}
            initial={cardVariants.initial(index)}
            animate={cardVariants.animate(index)}
            whileHover={{ rotate: 0, scale: 1, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="flex items-center space-x-4 mb-4 object-cover">
              <img
                src={img1}
                alt={testimonial.name}
                className="w-12 h-12 rounded-md"
              />
              <span className="font-semibold text-purple-600">
                {testimonial.name}
              </span>
            </div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {testimonial.feedback}
            </p>
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`${
                    i < testimonial.rating
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  } text-xl`}
                >
                  ★
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
