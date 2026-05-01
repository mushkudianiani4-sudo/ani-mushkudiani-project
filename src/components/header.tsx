import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/constants";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-800 dark:shadow-gray-900 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-orange-600 dark:text-orange-500"
        >
          Cafe Moon
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-700 hover:text-orange-600 hover:underline font-medium transition-colors duration-300 dark:text-gray-300 dark:hover:text-orange-400"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="მენიუს გაშლა"
            className="text-2xl dark:text-gray-200"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 dark:bg-gray-800 dark:border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-orange-600 hover:underline transition-colors dark:text-gray-300 dark:hover:text-orange-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
