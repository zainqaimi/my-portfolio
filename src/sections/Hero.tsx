import { useEffect, useState } from "react";
import profile from "../assets/images/hero_section.png";
type CounterProps = {
  target: number;
  label: string;
};

const Counter = ({ target, label }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 50); // Update every 50ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="flex flex-col items-center justify-center bg-purple-100 dark:bg-purple-800 text-center px-6 py-4 rounded-lg shadow-md w-full sm:w-48">
      <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-200">
        {count}
        {label === "Project Completed"
          ? "+"
          : label === "Experience"
          ? " Y."
          : ""}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{label}</p>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10 py-16  mx-auto">
      {/* Left Content */}
      <div className="text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hello, I’m <br />
          <span className="text-purple-600 dark:text-purple-400">
            ZAIN UL ABDIN
          </span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 lg:max-w-sm">
          I&apos;m a Freelance <strong>UI/UX Designer</strong> and{" "}
          <strong>Developer</strong> based in London, England. I strive to build
          immersive and beautiful web applications through carefully crafted
          code and user-centric design.
        </p>
        <button className="bg-purple-600 text-white font-medium px-6 py-2 rounded-md hover:bg-purple-700 transition">
          Say Hello!
        </button>
        {/* Cards */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Counter target={15} label="Experience" />
          <Counter target={250} label="Project Completed" />
          <Counter target={58} label="Happy Client" />
        </div>
      </div>

      {/* Right Content */}
      <div className="">
        <img src={profile} alt="Zain Ul Abdin" className="xl:max-w-lg " />
      </div>
    </section>
  );
}
