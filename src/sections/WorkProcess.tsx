import {
  FaCalendarAlt,
  FaChartLine,
  FaPencilAlt,
  FaLaptopCode,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarAlt size={24} />,
    title: "1. Plan & Research",
    description:
      "Understand client needs, define clear goals, and choose the right tech stack like React, Next.js, Flutter, or Node.js.",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "2. Architecture & Strategy",
    description:
      "Create scalable architecture, plan backend APIs, and design secure database models using MongoDB or SQLite.",
  },
  {
    icon: <FaPencilAlt size={24} />,
    title: "3. Design & Development",
    description:
      "Develop clean UI with Tailwind/Bootstrap and build fast, optimized apps for web, mobile, and desktop.",
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: "4. Deploy & Launch",
    description:
      "Deploy projects on Vercel, Netlify, or custom servers, and ensure smooth delivery with ongoing support.",
  },
];

export default function WorkProcess() {
  return (
    <section
      id="WorkProcess"
      className="z-10 md:pt-56 px-6 md:px-10 py-12 bg-[#F0F1F3] dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:text-left text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Work Process
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I follow a clear, step-by-step approach to deliver high-quality web,
            mobile, and desktop applications. From planning to deployment,
            everything is optimized for performance and scalability.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            This process ensures every project is well-planned, user-friendly,
            and future-ready.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition duration-300 ${
                index % 2 === 0 ? "md:-translate-y-4" : ""
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
