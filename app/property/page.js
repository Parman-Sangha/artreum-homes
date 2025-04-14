/* eslint-disable */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Bed,
  Bath,
  SquareIcon as SquareFoot,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  ArrowDown,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const navItems = [
  "Home",
  "About Us",
  "Properties",
  "Communities",
  "3D Modeler",
];

const PropertiesPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const properties = [
    { type: "Front-Garage Houses", prefix: "front-garage-house" },
    { type: "Laned Houses", prefix: "laned-house" },
    { type: "Town Houses", prefix: "town-house" },
  ];

  const houseItems = [
    {
      id: 1,
      description: "Spacious 4-bedroom home with a modern garage.",
      price: "$450,000",
      beds: 4,
      baths: 3,
      sqft: 2200,
      image: "/images/properties/front-garage-house-1.jpg.webp",
    },
    {
      id: 2,
      description: "Elegant 3-bedroom house with luxurious interiors.",
      price: "$400,000",
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      image: "/images/properties/laned-house-2.jpg.webp",
    },
    {
      id: 3,
      description: "Affordable 2-bedroom house in a prime location.",
      price: "$350,000",
      beds: 2,
      baths: 2,
      sqft: 1500,
      image: "/images/properties/town-house-3.jpg.webp",
    },
  ];

  const handleScrollToProperties = () => {
    const communitiesSection = document.getElementById("properties");
    if (communitiesSection) {
      communitiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  // Property Card Component
  const PropertyCard = ({ house, type, prefix }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const linkHref =
      type === "Town Houses" && house.id === 1
        ? "/property/canvas-house"
        : `/coming-soon/`;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-50 dark:bg-[#222222] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transition-theme"
      >
        <div className="relative h-64">
          <Image
            src={
              house.image || `/images/properties/${prefix}-${house.id}.jpg.webp`
            }
            alt={`${type} ${house.id}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {type} {house.id}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {house.description}
          </p>
          <div className="flex items-center space-x-4 text-[#CDB937] mb-4">
            <div className="flex items-center">
              <Bed className="w-5 h-5 mr-1" />
              <span>{house.beds}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-1" />
              <span>{house.baths}</span>
            </div>
            <div className="flex items-center">
              <SquareFoot className="w-5 h-5 mr-1" />
              <span>{house.sqft} sqft</span>
            </div>
          </div>
          <p className="text-[#CDB937] font-bold text-lg mb-4">{house.price}</p>
          <Link
            href={linkHref}
            className="block w-full px-6 py-3 bg-[#CDB937] text-black font-bold rounded-md text-center hover:bg-[#e3cc50] transition duration-300 shadow-md hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen transition-theme bg-white dark:bg-[#141414] text-gray-900 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/coming1.jpg"
            alt="Properties Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Discover Your Perfect Home
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8"
          >
            Explore our curated collection of modern properties designed for
            luxury, comfort, and style.
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="mt-6"
          >
            <button
              onClick={handleScrollToProperties}
              className="inline-flex items-center bg-[#CDB937] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Browse Properties
              <ArrowDown className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Properties Section */}
      <main
        className="container mx-auto px-6 py-20 transition-theme bg-white dark:bg-[#1A1A1A]"
        id="properties"
      >
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-[#CDB937] mb-4">
            Explore Our Properties
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover a range of stunning homes tailored to modern living, from
            spacious front-garage houses to elegant townhouses.
          </p>
        </motion.div>
        {properties.map(({ type, prefix }) => (
          <section key={type} className="mb-16">
            <motion.h2
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#CDB937] mb-8"
            >
              {type}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {houseItems.map((house) => (
                <PropertyCard
                  key={`${prefix}-${house.id}`}
                  house={house}
                  type={type}
                  prefix={prefix}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default PropertiesPage;
