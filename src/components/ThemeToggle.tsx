import useTheme from "../hooks/useTheme";
import { motion } from "framer-motion";
import { IoSunny } from "react-icons/io5";
import { AiOutlineMoon } from "react-icons/ai";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ rotate: 360 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full  
                 transition-colors duration-300"
    >
      <motion.div
        key={theme}
        initial={{ rotate: 180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -180, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xl"
      >
        {theme === "dark" ? (
          <IoSunny className="text-yellow-300" />
        ) : (
          <AiOutlineMoon className="text-gray-800" />
        )}
      </motion.div>
    </motion.button>
  );
}
