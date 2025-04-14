/* eslint-disable */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      whileHover={{ scale: 1.03 }}
      className="bg-gray-50 dark:bg-[#222222] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transition-theme"
    >
      <div className="relative h-64">
        <Image
          src={community.image}
          alt={community.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300" />
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
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(205, 185, 55, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href={community.link}
            className="block w-full px-6 py-3 bg-[#CDB937] text-black font-semibold rounded-full text-center hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Community
          </Link>
        </motion.div>
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
  const headerRef = useRef(null);

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

  // Smooth scroll to communities
  const handleScrollToCommunities = () => {
    const communitiesSection = document.getElementById("communities");
    if (communitiesSection) {
      communitiesSection.scrollIntoView({ behavior: "smooth" });
    }
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
            src="/images/commun.jpg"
            alt="Communities Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
          <motion.h2
            ref={heroRef}
            variants={fadeInUp}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Explore Our Communities
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8"
          >
            Discover vibrant neighborhoods designed for connection, comfort, and
            modern living.
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="mt-6"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(205, 185, 55, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button
              onClick={handleScrollToCommunities}
              className="inline-flex items-center bg-[#CDB937] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Browse Communities
              <ArrowDown className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Communities Section */}
      <main
        className="container mx-auto px-6 py-20 transition-theme bg-white dark:bg-[#1A1A1A]"
        id="communities"
      >
        <motion.div
          ref={communitiesRef}
          variants={fadeInUp}
          initial="initial"
          animate={communitiesInView ? "animate" : "initial"}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-[#CDB937] mb-4">
            Our Communities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our carefully planned communities, each offering unique
            living experiences and amenities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunitiesPage;
