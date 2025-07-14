import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import resume from "../assets/resume/ZainUlAbdinResume.pdf";
export default function Experience() {
  return (
    <div className="dark:bg-gray-900 transition-colors duration-500  md:px-10 px-6">
      <section
        id="home"
        className=" relative md:-mb-28  flex flex-col lg:flex-row items-center justify-center px-6 md:py-16 py-8 shadow-lg shadow-gray-400 bg-white  rounded-md mx-auto  dark:bg-gray-900 transition-colors duration-500"
      >
        {/* Image + Socials */}
        <div className="relative mb-10 lg:mb-0">
          <DotLottieReact
            src="https://lottie.host/52a75cf4-5543-487b-a011-8e97bb5122fa/R9NxdbLGLN.lottie"
            loop
            autoplay
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl shadow-xl shadow-purple-300"
          />
          {/* Social Icons */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg px-6 py-3 flex gap-4">
            <FaFacebookF className="text-[#a53dff] cursor-pointer hover:scale-110 transition" />
            <FaDribbble className="text-[#a53dff] cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="text-[#a53dff] cursor-pointer hover:scale-110 transition" />
            <FaLinkedinIn className="text-[#a53dff] cursor-pointer hover:scale-110 transition" />
            <FaBehance className="text-[#a53dff] cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:ml-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            I am Professional User <br /> Experience Designer
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-xl">
            I design and develop services for customers specializing in stylish,
            modern websites, web services and online stores. My passion is to
            design digital user experiences.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
            I design and develop services for customers specializing in stylish,
            modern websites, web services.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-[#a53dff] text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              My Project
            </a>
            <a
              href={resume}
              download
              className="flex items-center justify-center gap-2 border-2 border-[#a53dff] text-[#a53dff] dark:text-[#a53dff] px-6 py-3 rounded-md hover:bg-[#a53dff] hover:text-white dark:hover:text-white transition"
            >
              <HiDownload />
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
