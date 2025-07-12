import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/Logo.svg";

const navItems = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
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
            href="/resume.pdf"
            download
            className="bg-[#a53dff] text-white px-4 py-2 rounded-md hover:opacity-80 transition"
          >
            Resume ↓
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Nav Button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setIsOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Dialog Menu with Smooth Transition */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-[#a53dff] dark:bg-[#a53dff] flex flex-col items-center justify-center gap-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
                  className="text-2xl text-white hover:underline"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                download
                className="mt-4 bg-white text-[#a53dff] px-4 py-2 rounded hover:opacity-90"
              >
                Resume ↓
              </a>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
