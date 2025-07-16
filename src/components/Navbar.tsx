import { useState, Fragment } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import resume from "../assets/resume/Zain_Ul_Abdin_Resume.pdf";

const navItems = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work Process", href: "#WorkProcess" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 dark:shadow-black shadow-gray-100 shadow-sm">
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 mx-auto ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-black dark:text-white font-bold text-lg">
            ZAIN UL ABDIN
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
              className="text-black dark:text-white px-3 py-1 rounded-md hover:bg-[#a53dff] hover:text-white transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={resume}
            download
            className="bg-[#a53dff] text-white px-4 py-2 rounded-md hover:opacity-80 transition"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile Nav Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={() => setIsOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Dialog Menu with Smooth Top Slide */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden fixed inset-0 z-50"
          onClose={() => setIsOpen(false)}
        >
          {/* Background overlay */}
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </TransitionChild>

          {/* Sliding Top Sheet (Half Screen) */}
          <TransitionChild
            as={Fragment}
            enter="transition-transform duration-300 ease-out"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition-transform duration-300 ease-in"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div className="fixed top-0 left-0 right-0 h-1/2 bg-[#a53dff] dark:bg-[#a53dff] rounded-b-2xl shadow-lg flex flex-col items-center justify-center gap-6">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>

              {/* Nav Links */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
                  className="text-xl text-white hover:underline"
                >
                  {item.name}
                </a>
              ))}

              {/* Resume Button */}
              <a
                href={resume}
                download
                className="mt-4 bg-white text-[#a53dff] px-4 py-2 rounded hover:opacity-90"
              >
                Resume ↓
              </a>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </header>
  );
}
