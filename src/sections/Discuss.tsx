import React from "react";

const DiscussSection: React.FC = () => {
  return (
    <section className="text-white bg-gray-900 md:py-16 px-6 md:px10 py-12 text-center mx-auto">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold  mb-4">
          Do you have Project Idia? Let's discuss your project!
        </h2>
        <p className="text-lg mb-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <a
          href="#contact"
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-purple-700 transition"
        >
          Let’s work together
        </a>
      </div>
    </section>
  );
};

export default DiscussSection;
