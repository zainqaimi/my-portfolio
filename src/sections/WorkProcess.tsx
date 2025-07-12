import {
  FaCalendarAlt,
  FaChartLine,
  FaPencilAlt,
  FaLaptopCode,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarAlt size={24} />,
    title: "1. Research",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "2. Analyze",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    icon: <FaPencilAlt size={24} />,
    title: "3. Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: "4. Launch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
];

export default function WorkProcess() {
  return (
    <section className="z-10 md:pt-56 px-6 md:px-10 py-12 bg-[#F0F1F3] dark:bg-gray-900 transition-colors duration-500">
      <div className="mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:text-left text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Process
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition duration-300 ${
                index % 2 === 0 ? "md:-translate-y-4" : "" // left column cards shift up
              }`}
            >
              <div className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-200 w-12 h-12 flex items-center justify-center rounded-md mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
