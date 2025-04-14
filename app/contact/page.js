/* eslint-disable */
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ArrowDown,
  Sun,
  Moon,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

// Animation Variants
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const navItems = [
  "Home",
  "About Us",
  "Properties",
  "Communities",
  "3D Modeler",
];

// Mobile menu animation variants
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

// Reusable Button Component
const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-8 sm:px-10 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";
  const variants = {
    primary: "bg-[#CDB937] text-black hover:bg-[#e3cc50]",
    secondary:
      "border border-[#CDB937] text-[#CDB937] hover:bg-[#CDB937] hover:text-black",
  };

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

const ContactPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Custom scrollbar and smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      ::-webkit-scrollbar-track {
        background: ${theme === "light" ? "#E5E7EB" : "#1A1A1A"};
      }
      ::-webkit-scrollbar-thumb {
        background: #CDB937;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #e3cc50;
      }
      html, body {
        overflow-x: hidden !important;
      }
      .transition-theme {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
      document.documentElement.style.scrollBehavior = "";
    };
  }, [theme]);

  // Function to handle smooth scroll to form section
  const handleScrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen transition-theme bg-white dark:bg-[#141414] text-gray-900 dark:text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white dark:bg-[#1A1A1A] py-3 shadow-xl"
            : "bg-white dark:bg-[#1A1A1A] py-6"
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
          <nav className="hidden md:flex justify-center flex-1">
            <ul className="flex flex-wrap justify-center space-x-1 lg:space-x-2 font-medium text-lg">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
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
                      href={
                        item === "Home"
                          ? "/"
                          : item === "About Us"
                          ? "/about"
                          : item === "Properties"
                          ? "/property"
                          : item === "3D Modeler"
                          ? "/3d-builder"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="px-4 py-2 rounded-md inline-block transition-all duration-300 text-gray-900 dark:text-white"
                    >
                      {item}
                    </Link>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#CDB937] w-0 group-hover:w-full transition-all duration-300"
                      layoutId={`underline-${item}`}
                    />
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-[#252525] hover:bg-gray-300 dark:hover:bg-[#333333] transition-colors duration-200"
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
                    <Moon className="w-5 h-5 text-gray-800 dark:text-[#CDB937]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-gray-800 dark:text-[#CDB937]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
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
                className="bg-[#CDB937] text-black px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2 rounded-full bg-gray-200 dark:bg-[#252525] hover:bg-gray-300 dark:hover:bg-[#333333] transition-colors duration-200"
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
                  <X size={24} className="text-gray-800 dark:text-[#CDB937]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-gray-800 dark:text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-lg z-40 flex flex-col md:hidden"
              >
                <div className="h-24" />
                <div className="flex flex-col items-center justify-center flex-1 p-8">
                  <ul className="flex flex-col items-center space-y-6 w-full">
                    {navItems.map((item) => (
                      <motion.li
                        key={item}
                        variants={menuItemVariants}
                        className="w-full text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Link
                          href={
                            item === "Home"
                              ? "/"
                              : item === "About Us"
                              ? "/about"
                              : item === "Properties"
                              ? "/property"
                              : item === "3D Modeler"
                              ? "/3d-builder"
                              : `/${item.toLowerCase().replace(" ", "-")}`
                          }
                          className="text-2xl font-medium py-3 px-6 block w-full text-gray-900 dark:text-white hover:text-[#CDB937] transition-colors duration-300"
                        >
                          {item}
                        </Link>
                      </motion.li>
                    ))}
                    <motion.li
                      variants={menuItemVariants}
                      className="w-full pt-6 flex flex-col items-center space-y-6"
                    >
                      <motion.button
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-gray-200 dark:bg-[#252525] hover:bg-gray-300 dark:hover:bg-[#333333] transition-colors duration-200"
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
                              <Moon className="w-6 h-6 text-gray-800 dark:text-[#CDB937]" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="sun"
                              initial={{ rotate: 90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: -90, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Sun className="w-6 h-6 text-gray-800 dark:text-[#CDB937]" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(205, 185, 55, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Link
                          href="/contact"
                          className="bg-[#CDB937] text-black px-8 py-4 rounded-full text-xl font-semibold block mx-auto w-max hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </motion.div>
                    </motion.li>
                  </ul>
                </div>
                <div className="p-8 flex justify-center space-x-6">
                  {[
                    { icon: Facebook, href: "https://facebook.com" },
                    { icon: Instagram, href: "https://instagram.com" },
                    { icon: Twitter, href: "https://x.com" },
                  ].map(({ icon: Icon, href }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: "#CDB937" }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#CDB937] transition duration-200"
                    >
                      <Icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[90vh] pt-16 sm:pt-20 overflow-hidden bg-[url('/images/contact.jpg')] bg-cover bg-center bg-no-repeat transition-theme"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60 transition-theme"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4 sm:px-6">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl"
          >
            Get in Touch with{" "}
            <span className="text-[#CDB937]">Artreum Homes</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-8 drop-shadow-md"
          >
            We're here to help you find your dream home. Reach out today!
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="mt-6 flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={handleScrollToForm}
              variant="secondary"
              className="text-sm sm:text-base md:text-lg gap-2"
            >
              Contact Us
              <ArrowDown className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-12 sm:py-20 relative transition-theme bg-white dark:bg-[#141414] dark:bg-[url('/images/contact1.jpg')] dark:bg-fixed dark:bg-cover dark:bg-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-60 backdrop-blur-sm transition-theme"
        />
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl relative z-10">
          <motion.div
            ref={formRef}
            variants={fadeInUp}
            initial="initial"
            animate={formInView ? "animate" : "initial"}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[#CDB937] mb-4">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              Whether you have questions about properties, communities, or
              services, we'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={formInView ? "animate" : "initial"}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center bg-white dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:to-[#141414] bg-opacity-90 dark:bg-opacity-70 rounded-lg p-4 shadow-lg transition-theme"
            >
              <div className="h-16 w-16 bg-white dark:bg-[#252525] bg-opacity-90 dark:bg-opacity-70 rounded-full flex items-center justify-center shadow-md transition-theme">
                <Mail className="text-[#CDB937] h-8 w-8" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm sm:text-base">
                info@artreumhomes.com
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center bg-white dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:to-[#141414] bg-opacity-90 dark:bg-opacity-70 rounded-lg p-4 shadow-lg transition-theme"
            >
              <div className="h-16 w-16 bg-white dark:bg-[#252525] bg-opacity-90 dark:bg-opacity-70 rounded-full flex items-center justify-center shadow-md transition-theme">
                <Phone className="text-[#CDB937] h-8 w-8" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm sm:text-base">
                +1-555-555-5555
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center bg-white dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:to-[#141414] bg-opacity-90 dark:bg-opacity-70 rounded-lg p-4 shadow-lg transition-theme"
            >
              <div className="h-16 w-16 bg-white dark:bg-[#252525] bg-opacity-90 dark:bg-opacity-70 rounded-full flex items-center justify-center shadow-md transition-theme">
                <MapPin className="text-[#CDB937] h-8 w-8" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm sm:text-base">
                Main Headquarters
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeInUp}
            initial="initial"
            animate={formInView ? "animate" : "initial"}
            className="bg-white dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:to-[#141414] bg-opacity-90 dark:bg-opacity-70 p-6 sm:p-8 rounded-lg shadow-lg max-w-3xl mx-auto transition-theme"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <input
                type="text"
                placeholder="First Name"
                className="p-4 rounded bg-gray-200 dark:bg-[#222222] text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300 text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-4 rounded bg-gray-200 dark:bg-[#222222] text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300 text-sm sm:text-base"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <input
                type="email"
                placeholder="Email"
                className="p-4 rounded bg-gray-200 dark:bg-[#222222] text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300 text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-4 rounded bg-gray-200 dark:bg-[#222222] text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300 text-sm sm:text-base"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="4"
              className="p-4 rounded bg-gray-200 dark:bg-[#222222] text-gray-900 dark:text-gray-300 w-full mb-6 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300 text-sm sm:text-base"
            ></textarea>
            <div className="text-center">
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </motion.form>

          {/* Office Locations */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={formInView ? "animate" : "initial"}
            className="mt-12 sm:mt-16 max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[#CDB937] text-center mb-10">
              Our Office Locations
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={formInView ? "animate" : "initial"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(205, 185, 55, 0.4)",
                }}
                className="bg-white dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:to-[#141414] bg-opacity-90 dark:bg-opacity-70 p-6 sm:p-8 rounded-lg shadow-lg text-center transition-theme"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#CDB937] mb-4">
                  Main Headquarters
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  Coming Soon
                </p>
                <Button className="w-full sm:w-auto">Get Directions</Button>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(205, 185, 55, 0.4)",
                }}
                className="bg-white dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:to-[#141414] bg-opacity-90 dark:bg-opacity-70 p-6 sm:p-8 rounded-lg shadow-lg text-center transition-theme"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#CDB937] mb-4">
                  Suburban Office
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  6630 36 St NE #116, Calgary, AB
                </p>
                <Button className="w-full sm:w-auto">Get Directions</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackToTop}
            className="fixed bottom-8 right-8 p-4 bg-[#CDB937] text-black rounded-full shadow-lg hover:bg-[#e3cc50] transition-all duration-300 z-50"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 transition-theme bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-black border-t dark:border-gray-700">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Image
                src="/images/logo1.png"
                alt="Artreum Homes"
                width={120}
                height={48}
                className="mb-6"
              />
              <h4 className="text-lg font-bold text-[#CDB937] mb-4">
                Subscribe to Our Newsletter
              </h4>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-theme"
                />
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#e3cc50" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[#CDB937] text-black font-bold rounded-md hover:bg-[#e3cc50] transition duration-200"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 col-span-1 lg:col-span-4 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#CDB937]">Home</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {[
                    "Hero Section",
                    "Features",
                    "Properties",
                    "Testimonials",
                    "FAQs",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-[#CDB937] transition duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#CDB937]">About Us</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {[
                    "Our Story",
                    "Our Work",
                    "How It Works",
                    "Our Team",
                    "Our Clients",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-[#CDB937] transition duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#CDB937]">Properties</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {["Portfolio", "Categories"].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-[#CDB937] transition duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#CDB937]">Services</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {[
                    "Valuation Mastery",
                    "Strategic Marketing",
                    "Negotiation Wizardry",
                    "Closing Success",
                    "Property Management",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-[#CDB937] transition duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 pt-8 mt-8 transition-theme">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                <Link
                  href="/terms"
                  className="hover:text-[#CDB937] transition duration-200"
                >
                  Terms & Conditions
                </Link>
              </div>
              <div className="flex space-x-6">
                {[
                  { icon: Facebook, href: "https://facebook.com" },
                  { icon: Instagram, href: "https://instagram.com" },
                  { icon: Twitter, href: "https://x.com" },
                ].map(({ icon: Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: "#CDB937" }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#CDB937] transition duration-200"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
