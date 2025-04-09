/* eslint-disable */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/Button";

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
      whileHover={{ scale: 1.03, translateZ: 0 }}
      className="bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 will-change-transform"
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
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {community.description}
        </p>
        <div className="flex items-center space-x-4 text-primary mb-4">
          <div className="flex items-center">
            <Home className="w-5 h-5 mr-1" />
            <span>{community.homes} Homes</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-1" />
            <span>{community.location}</span>
          </div>
        </div>
        <p className="text-primary font-bold text-lg mb-4">
          Starting from {community.price}
        </p>
        <Link
          href={community.link}
          className="block w-full px-6 py-3 bg-primary text-black font-bold rounded-md text-center hover:bg-[#e3cc50] transition duration-300 shadow-md hover:shadow-lg"
        >
          View Community
        </Link>
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

  // Function to handle smooth scroll to communities section
  const handleScrollToCommunities = () => {
    const communitiesSection = document.getElementById("communities");
    if (communitiesSection) {
      communitiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-light-surface dark:bg-dark-surface shadow-md sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-6 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4 mb-4 md:mb-0"
          >
            <Link href="/" className="hover:opacity-80 transition duration-200">
              <Image
                src="/images/logo1.png"
                alt="Artreum Homes"
                width={180}
                height={72}
              />
            </Link>
          </motion.div>

          <nav className="flex justify-center flex-1">
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 font-medium text-lg">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition duration-200 px-3 py-2 rounded-md hover:bg-light-surface-hover dark:hover:bg-dark-surface-hover"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-light-surface-hover dark:bg-dark-surface-hover hover:bg-light-surface dark:hover:bg-dark-surface transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-800" />
              ) : (
                <Sun className="w-5 h-5 text-white" />
              )}
            </button>
            <Button href="/contact" className="px-8 py-3 text-lg">
              Contact Us
            </Button>
          </div>
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
      <main className="container mx-auto px-6 py-20" id="communities">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">
            Our Communities
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
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

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Image
                src="/images/logo3.png"
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
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300"
                />
                <button className="px-4 py-2 bg-[#CDB937] text-black font-bold rounded-md hover:bg-[#e3cc50] transition duration-200">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 col-span-1 lg:col-span-4 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#CDB937]">Home</h4>
                <ul className="space-y-2 text-gray-400">
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
                <ul className="space-y-2 text-gray-400">
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
                <ul className="space-y-2 text-gray-400">
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
                <ul className="space-y-2 text-gray-400">
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
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
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
                  { icon: Twitter, href: "https://twitter.com" },
                ].map(({ icon: Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-[#CDB937] transition duration-200"
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

export default CommunitiesPage;
