/* eslint-disable */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import {
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  ArrowDown,
  Home,
  MapPin,
  Sun,
  Moon,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

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
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
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

const communities = [
  {
    id: 1,
    name: "Waterford Estates",
    description:
      "Waterford Estates offers a suburban retreat with tree-lined roads and minimal traffic. Enjoy a calm commute with peaceful, green surroundings, ideal for a low-stress lifestyle.",
    price: "$1,000,000",
    image: "/images/com.png",
    link: "/communities/waterford",
    homes: 150,
    location: "Waterford, AB",
    featured: true,
  },
  {
    id: 2,
    name: "Langdon",
    description:
      "Langdon provides a scenic escape through open countryside with quiet roads and stunning rural landscapes. Perfect for those seeking tranquility away from urban congestion.",
    price: "$650,000",
    image: "/images/con3.png",
    link: "/communities/langdon",
    homes: 200,
    location: "Langdon, AB",
  },
  {
    id: 3,
    name: "Sattlepeace",
    description:
      "Sattlepeace blends urban and suburban vibes with smooth access to main roads. Moderate traffic and scenic sections make it a balanced choice for work and leisure.",
    price: "$700,000",
    image: "/images/c2.jpeg",
    link: "/coming-soon",
    homes: 175,
    location: "Sattlepeace, AB",
  },
  {
    id: 4,
    name: "Condridge - Knights Bridge",
    description:
      "Condridge via Knights Bridge offers city convenience with scenic bridge views. Steady traffic meets parks and shops, creating a charming, semi-urban commute.",
    price: "$1,250,000",
    image: "/images/c1.jpeg",
    link: "/communities/conrich",
    homes: 125,
    location: "Condridge, AB",
  },
];

// Reusable Community Card Component
const CommunityCard = ({ community }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.03,
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      }}
      className="relative bg-gray-50 dark:bg-[#222222] rounded-xl overflow-hidden shadow-lg transition-all duration-300 transition-theme"
    >
      {community.featured && (
        <div className="absolute top-4 left-4 bg-[#CDB937] text-black px-3 py-1 rounded-full text-sm font-semibold z-10">
          Featured
        </div>
      )}
      <div className="relative h-64">
        <Image
          src={community.image}
          alt={community.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {community.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {community.description}
        </p>
        <div className="flex items-center space-x-4 text-[#CDB937] mb-4">
          <div className="flex items-center">
            <Home className="w-5 h-5 mr-1" />
            <span>{community.homes} Homes</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-1" />
            <span>{community.location}</span>
          </div>
        </div>
        <p className="text-[#CDB937] font-bold text-lg mb-4">
          Starting from {community.price}
        </p>
        <Button href={community.link} className="w-full text-center">
          View Community
        </Button>
      </div>
    </motion.div>
  );
};

const CommunitiesPage = () => {
  const { theme, toggleTheme } = useTheme();
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: communitiesRef, inView: communitiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

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
      .parallax-bg {
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
      document.documentElement.style.scrollBehavior = "";
    };
  }, [theme]);

  // Smooth scroll to communities
  const handleScrollToCommunities = () => {
    const communitiesSection = document.getElementById("communities");
    if (communitiesSection) {
      communitiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen transition-theme bg-gray-50 dark:bg-[#141414] text-gray-900 dark:text-white">
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
      <section className="relative h-[90vh] pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 parallax-bg"
          style={{ backgroundImage: `url(/images/commun.jpg)` }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60 transition-theme"
          />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4 sm:px-6">
          <motion.h2
            ref={heroRef}
            variants={fadeInUp}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl"
          >
            Explore Our <span className="text-[#CDB937]">Communities</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-8 drop-shadow-md"
          >
            Discover vibrant neighborhoods designed for connection, comfort, and
            modern living.
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="mt-6 flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={handleScrollToCommunities}
              className="text-sm sm:text-base md:text-lg gap-2"
            >
              Browse Communities
              <ArrowDown className="h-5 w-5" />
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="text-sm sm:text-base md:text-lg gap-2"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Communities Section */}
      <main
        className="relative py-24 transition-theme bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#141414] dark:to-[#1A1A1A]"
        id="communities"
      >
        <div className="absolute inset-0 bg-[url('/images/communbg.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <motion.div
            ref={communitiesRef}
            variants={fadeInUp}
            initial="initial"
            animate={communitiesInView ? "animate" : "initial"}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#CDB937] mb-4">
              Our Communities
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our carefully planned communities, each offering unique
              living experiences and amenities.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {communities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </motion.div>
        </div>
      </main>

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
      <Footer />
    </div>
  );
};

export default CommunitiesPage;
