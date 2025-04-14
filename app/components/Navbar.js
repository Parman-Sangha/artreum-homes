"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Properties", href: "/property" },
  { name: "Communities", href: "/communities" },
  { name: "3D Modeler", href: "/3d-builder" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  const navButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      color: "#CDB937",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? `${
              theme === "light"
                ? "bg-white shadow-xl"
                : "bg-[#1A1A1A] shadow-xl"
            } py-3`
          : `${theme === "light" ? "bg-white" : "bg-[#1A1A1A]"} py-6`
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center z-50"
        >
          <Link href="/" className="hover:opacity-80 transition duration-200">
            <Image
              src="/images/logo1.png"
              alt="Artreum Homes"
              width={scrolled ? 150 : 180}
              height={scrolled ? 60 : 72}
              className="transition-all duration-300"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center flex-1">
          <ul className="flex flex-wrap justify-center space-x-1 lg:space-x-2 font-medium text-lg">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <motion.div
                  variants={navButtonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md inline-block transition-all duration-300 ${
                      theme === "light"
                        ? "text-gray-900 hover:text-[#CDB937]"
                        : "text-white hover:text-[#CDB937]"
                    }`}
                  >
                    {item.name}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#CDB937] w-0 group-hover:w-full transition-all duration-300"
                    layoutId={`underline-${item.name}`}
                  />
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center space-x-4"
        >
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full ${
              theme === "light"
                ? "bg-gray-200 hover:bg-gray-300"
                : "bg-[#252525] hover:bg-[#333333]"
            } transition-colors duration-200`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5 text-gray-800" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5 text-[#CDB937]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Contact Button */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(205, 185, 55, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/contact"
              className="bg-[#CDB937] text-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden z-50 p-2 rounded-full ${
            theme === "light"
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-[#1A1A1A] hover:bg-[#252525]"
          } transition-colors duration-300`}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="text-[#CDB937]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu
                  size={24}
                  className={theme === "light" ? "text-gray-800" : "text-white"}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={`fixed inset-0 ${
                theme === "light" ? "bg-white/95" : "bg-black/95"
              } backdrop-blur-lg z-40 flex flex-col md:hidden`}
            >
              <div className="h-24" /> {/* Spacer for header */}
              <div className="flex flex-col items-center justify-center flex-1 p-8">
                <ul className="flex flex-col items-center space-y-6 w-full">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      variants={menuItemVariants}
                      className="w-full text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`text-2xl font-medium py-3 px-6 block w-full ${
                          theme === "light"
                            ? "text-gray-900 hover:text-[#CDB937]"
                            : "text-white hover:text-[#CDB937]"
                        } transition-colors duration-300`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    variants={menuItemVariants}
                    className="w-full pt-6 flex flex-col items-center space-y-6"
                  >
                    {/* Theme Toggle Button */}
                    <motion.button
                      onClick={toggleTheme}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        theme === "light"
                          ? "bg-gray-200 hover:bg-gray-300"
                          : "bg-[#252525] hover:bg-[#333333]"
                      } transition-colors duration-200`}
                      aria-label="Toggle theme"
                    >
                      {theme === "light" ? (
                        <Moon className="w-6 h-6 text-gray-800" />
                      ) : (
                        <Sun className="w-6 h-6 text-[#CDB937]" />
                      )}
                    </motion.button>

                    <Link
                      href="/contact"
                      className="bg-[#CDB937] text-black py-4 px-8 rounded-full text-xl font-semibold block mx-auto w-max hover:bg-[#e3cc50] transition-all duration-300 shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
