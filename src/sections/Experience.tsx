import { FaFacebookF, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import resume from "../assets/resume/Zain_Ul_Abdin_Resume.pdf";
import { MdEmail } from "react-icons/md";

export default function Experience() {
  return (
    <div className="dark:bg-gray-900 transition-colors duration-500 md:px-10 px-5">
      <section
        id="home"
        className="relative md:-mb-28 flex flex-col lg:flex-row items-center justify-center p-5 md:py-16 py-12 shadow-lg shadow-gray-400 bg-white rounded-md mx-auto dark:bg-gray-900 transition-colors duration-500"
      >
        {/* Image + Socials */}
        <div className="relative mb-14 lg:mb-0">
          <DotLottieReact
            src="https://lottie.host/52a75cf4-5543-487b-a011-8e97bb5122fa/R9NxdbLGLN.lottie"
            loop
            autoplay
            className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-xl shadow-xl  shadow-purple-300"
          />

          {/* ✅ Social Icons with Links */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg px-6 py-3 flex gap-4">
            <span
              onClick={() =>
                (window.location.href = "mailto:zainqaimi@gmail.com")
              }
              rel="noopener noreferrer"
              className="text-[#a53dff] hover:text-purple-700 transition hover:scale-110"
            >
              <MdEmail size={18} />
            </span>
            <a
              href="https://www.facebook.com/zain.qaimi.94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a53dff] hover:text-purple-700 transition hover:scale-110"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://github.com/zainqaimi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a53dff] hover:text-purple-700 transition hover:scale-110"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/zain-qaimi-8b35b8305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a53dff] hover:text-purple-700 transition hover:scale-110"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="tel:03117271739"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a53dff] hover:text-purple-700 transition hover:scale-110"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* ✅ Text Content */}
        <div className="md:ml-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            I am a Full‑Stack & Cross‑Platform <br /> Developer
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-xl">
            I build modern, fast, and scalable web & mobile applications using{" "}
            <strong>React, Next.js, Flutter,</strong> and{" "}
            <strong>React Native</strong>. I also create secure & optimized
            backends with <strong>Node.js, Express, MongoDB & SQLite</strong>.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
            From responsive websites to mobile apps & even desktop apps with{" "}
            <strong>Electron</strong>, I help businesses turn ideas into real
            digital products.
          </p>

          {/* ✅ Buttons */}
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
