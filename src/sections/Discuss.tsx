import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const DiscussSection: React.FC = () => {
  return (
    <section className="text-white bg-gray-900 md:py-16 px-6 md:px-10 py-12 text-center mx-auto">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Have a Project Idea? <br /> Let’s Bring it to Life!
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Whether it’s a modern website, a mobile app, or a full-stack solution,
          I can help you turn your idea into a scalable and high-performance
          product. Let’s discuss how we can build something amazing together!
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-purple-700 transition"
        >
          Let’s Work Together
          <BiRightArrowAlt size={20} />
        </a>
      </div>
    </section>
  );
};

export default DiscussSection;
