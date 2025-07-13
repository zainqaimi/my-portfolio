import logo from "../assets/logo.svg";

const navItems = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Me", href: "#contact" },
];

const Footer = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="z-10 flex flex-col lg:flex-row items-center justify-between text-white bg-gray-900 transition-colors duration-300 mx-auto md:px-10 px-5 py-16 md:pt-56 space-y-6 lg:space-y-0">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <span className="text-white font-bold text-lg">ZAIN UL ABDIN</span>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
            className="text-white px-3 py-1 rounded-md hover:bg-[#a53dff] hover:text-white transition"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-sm text-center">
        <p>Copyright © {new Date().getFullYear()} Zain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
