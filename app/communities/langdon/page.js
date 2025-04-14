/* eslint-disable */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Facebook,
  Instagram,
  Twitter,
  Play,
  Sun,
  Moon,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

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

const navItems = [
  "Home",
  "About Us",
  "Properties",
  "Communities",
  "3D Modeler",
];

const pathwaysImages = [
  { path: "/images/Lang3.jpg", dimension: "640x516" },
  { path: "/images/Lang4.jpg", dimension: "640x411" },
  { path: "/images/Lang5.jpg", dimension: "1200x1200" },
  { path: "/images/Lang6.jpg", dimension: "640x640" },
];

const quadBallImages = [
  { path: "/images/Lang8.jpg", dimension: "1200x628" },
  { path: "/images/Lang9.jpg", dimension: "1200x628" },
  { path: "/images/Lang10.jpg", dimension: "1200x628" },
  { path: "/images/Lang11.jpg", dimension: "1200x675" },
];

const golfCourseImages = [
  { path: "/images/Lang12.jpg", dimension: "1200x675" },
  { path: "/images/Lang13.jpg", dimension: "1200x675" },
  { path: "/images/Lang14.jpg", dimension: "1200x675" },
  { path: "/images/Lang15.jpg", dimension: "1200x675" },
  { path: "/images/Lang16.jpg", dimension: "1200x675" },
  { path: "/images/Lang17.jpg", dimension: "1200x675" },
];

const smallTownImages = [
  { path: "/images/Lang18.jpg", dimension: "1200x675" },
  { path: "/images/Lang19.jpg", dimension: "1200x675" },
  { path: "/images/Lang20.jpg", dimension: "1200x675" },
  { path: "/images/Lang21.jpg", dimension: "533x400" },
];

const Langdon = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { ref: pathwaysRef, inView: pathwaysInView } = useInView({
    triggerOnce: true,
  });
  const { ref: quadBallRef, inView: quadBallInView } = useInView({
    triggerOnce: true,
  });
  const { ref: golfCourseRef, inView: golfCourseInView } = useInView({
    triggerOnce: true,
  });

  const { ref: smallTownRef, inView: smallTownInView } = useInView({
    triggerOnce: true,
  });
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
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

  // Custom scrollbar
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

  const ImageCarousel = ({ images, inView }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }, []);

    useEffect(() => {
      if (inView) {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
          5000
        );
      }
      return () => resetTimeout();
    }, [inView, images.length, currentIndex, resetTimeout]);

    return (
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg shadow-2xl transition-theme">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].path || "/placeholder.svg"}
              alt={`Carousel image ${currentIndex + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#CDB937]" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
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
                        {theme === "light" ? (
                          <Moon className="w-6 h-6 text-gray-800 dark:text-[#CDB937]" />
                        ) : (
                          <Sun className="w-6 h-6 text-gray-800 dark:text-[#CDB937]" />
                        )}
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
      <section className="relative h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/Lang2.jpg"
            alt="Langdon Community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
          <motion.div
            ref={heroRef}
            variants={fadeInUp}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
          >
            <Image
              src="/images/Lang1.png"
              alt="Langdon Logo"
              width={600}
              height={174}
              className="drop-shadow-2xl mb-8"
            />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Welcome to Langdon
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl"
          >
            A community full of life, activity, and serenity.
          </motion.p>
        </div>
      </section>

      {/* Pathways & Bike Trails Section */}
      <section
        ref={pathwaysRef}
        className="py-16 sm:py-24 bg-cover bg-center bg-fixed relative mb-12 sm:mb-0"
        style={{ backgroundImage: 'url("/images/Lang22.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={pathwaysInView ? "animate" : "initial"}
            className="text-center max-w-4xl mx-auto mb-16 bg-black bg-opacity-70 p-8 rounded-lg transition-theme"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#CDB937]">
              Pathways & Bike Trails
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Explore nature as you walk, run, or bike along the network of
              pathways just steps from your front door in Langdon. Bridges of
              Langdon offers everything your family needs, and has so much more
              for you to discover when you come for your first visit.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-12 items-start">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate={pathwaysInView ? "animate" : "initial"}
            >
              <ImageCarousel images={pathwaysImages} inView={pathwaysInView} />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate={pathwaysInView ? "animate" : "initial"}
            >
              <Image
                src="/images/Lang7.jpg"
                alt="Langdon Map"
                width={1300}
                height={1687}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate={pathwaysInView ? "animate" : "initial"}
              className="bg-black bg-opacity-70 p-8 rounded-lg transition-theme"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#CDB937] mb-4">
                You'll love what you discover.
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Bridges of Langdon has been thoughtfully designed to offer
                something for everyone. From the amenities within the community
                to the surrounding town, Langdon has so much to give to its
                newest residents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quad Ball Diamonds Section */}
      <section
        ref={quadBallRef}
        className="py-16 sm:py-24 bg-cover bg-center bg-fixed relative mb-12 sm:mb-0"
        style={{ backgroundImage: 'url("/images/Lang25.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={quadBallInView ? "animate" : "initial"}
            className="text-center max-w-4xl mx-auto mb-16 bg-black bg-opacity-70 p-8 rounded-lg transition-theme"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#CDB937]">
              Quad Ball Diamonds
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              To serve Langdon's thriving baseball community, the community is
              planning to build a 45 acre recreational site with four
              first-class ball diamonds, a kids play area, and a concession
              stand. The site will eventually include a High School and indoor
              recreation facility. Love baseball? Then you'll love Bridges of
              Langdon.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={quadBallInView ? "animate" : "initial"}
          >
            <ImageCarousel images={quadBallImages} inView={quadBallInView} />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={quadBallInView ? "animate" : "initial"}
            className="mt-12 text-center"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(205, 185, 55, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="https://www.youtube.com/watch?v=rGl_f3BmOmg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#CDB937] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Play className="mr-2 h-5 w-5" />
                View plans for the Quad Ball Diamond
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Boulder Creek Golf Course Section */}
      <section
        ref={golfCourseRef}
        className="py-16 sm:py-24 bg-cover bg-center bg-fixed relative mb-12 sm:mb-0"
        style={{ backgroundImage: 'url("/images/Lang23.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={golfCourseInView ? "animate" : "initial"}
            className="text-center max-w-4xl mx-auto mb-16 bg-black bg-opacity-70 p-8 rounded-lg transition-theme"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#CDB937]">
              Boulder Creek Golf Course
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Adjacent to the Boulder Creek Golf Course, Bridges of Langdon is
              the perfect community for those who want to play, practice, or
              just relax on the patio at a beautiful golf facility. Beyond being
              a fun course with great scenery, it's also the most casual golf
              course in southern Alberta!
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={golfCourseInView ? "animate" : "initial"}
          >
            <ImageCarousel
              images={golfCourseImages}
              inView={golfCourseInView}
            />
          </motion.div>
        </div>
      </section>

      {/* Small Town Feel Section */}
      <section
        ref={smallTownRef}
        className="py-16 sm:py-24 bg-cover bg-center bg-fixed relative mb-12 sm:mb-0"
        style={{ backgroundImage: 'url("/images/Lang24.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={smallTownInView ? "animate" : "initial"}
            className="text-center max-w-4xl mx-auto mb-16 bg-black bg-opacity-70 p-8 rounded-lg transition-theme"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#CDB937]">
              Small Town Feel
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Step outside the bustling city life and enjoy the small town feel
              of Langdon. Take advantage of nearby bike trails, golf courses and
              gorgeous pathways.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={smallTownInView ? "animate" : "initial"}
          >
            <ImageCarousel images={smallTownImages} inView={smallTownInView} />
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
      <footer className="py-12 transition-theme bg-gradient-to-b from-gray-100 to-white dark:bg-gradient-to-b dark:from-black dark:to-black border-t dark:border-gray-700">
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
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
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
          <div className="border-t border-gray-300 dark:border-gray-700 pt-8 mt-8">
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

export default Langdon;
