import { motion } from "framer-motion";

interface CardItem {
  title: string;
  content: string;
}

const cards: CardItem[] = [
  {
    title: "User Experience (UX)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
  {
    title: "User Interface (UI)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
  {
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
  {
    title: "App Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
  {
    title: "Interaction Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
  {
    title: "Interaction Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
  {
    title: "Interaction Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
  {
    title: "Interaction Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
  {
    title: "Interaction Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
  {
    title: "Interaction Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
  },
];

const WhatIDo: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left Column */}
        <div className="md:w-1/2 self-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I do?
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet.
          </p>
          <p className="text-gray-500 dark:text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
          <button className="bg-purple-600 text-white font-semibold px-5 py-2 rounded hover:bg-purple-700 transition-all">
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
                className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-lg border-l-4 hover:border-purple-600"
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
