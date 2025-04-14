"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Facebook, Instagram, Twitter, X, Menu } from "lucide-react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";

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

const ThreeDBuilderPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

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
    <div className="min-h-screen transition-theme bg-white dark:bg-[#141414] text-gray-900 dark:text-white">
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">
            3D Home Builder
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Design your dream home in 3D with our interactive builder tool.
          </p>
        </motion.div>

        {/* 3D Builder Content */}
        <div className="bg-light-surface dark:bg-dark-surface rounded-lg p-8 shadow-lg">
          <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              3D Builder Interface Coming Soon
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ThreeDBuilderPage;
