"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import {
  Sun,
  Moon,
  Facebook,
  Instagram,
  Twitter,
  X,
  Menu,
  ArrowRight,
} from "lucide-react";
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

// Button Component
const ButtonComponent = ({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 sm:px-10 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";
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
      {...props}
    >
      {children}
    </motion.button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

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

      {/* Hero Section */}
      <section className="relative h-[80vh] pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/3d.jpg"
            alt="3D Builder Preview"
            fill
            className="object-cover brightness-75"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-50 transition-theme"
          />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4 sm:px-6">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl"
          >
            Design Your Dream Home in <span className="text-[#CDB937]">3D</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-lg sm:text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-6 sm:mb-8 drop-shadow-md"
          >
            Create, customize, and visualize your perfect home with our
            interactive 3D builder tool. Experience the future of home design
            today.
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              href="https://3-d-modeler-gojw.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg inline-flex items-center"
            >
              Launch 3D Builder
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 transition-theme bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#141414] dark:to-[#1A1A1A]">
        <div className="absolute inset-0 bg-[url('/images/commun.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[#CDB937] mb-4">
              Powerful Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the tools and features that make our 3D builder the
              perfect choice for designing your dream home.
            </p>
          </motion.div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Features
              </h3>
              <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#CDB937] rounded-full"></div>
                  Real-time 3D visualization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#CDB937] rounded-full"></div>
                  Customizable floor plans
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#CDB937] rounded-full"></div>
                  Extensive material library
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#CDB937] rounded-full"></div>
                  Furniture and decor placement
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#CDB937] rounded-full"></div>
                  Save and share your designs
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/Screenshot 2025-04-15 212813.png"
                alt="3D Builder Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#CDB937] mb-4">
                Smart Design Tools
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Automatic room measurements</li>
                <li>• Smart furniture placement</li>
                <li>• Material suggestions</li>
                <li>• Lighting simulation</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#CDB937] mb-4">
                Collaboration
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Share designs with family</li>
                <li>• Collaborate with designers</li>
                <li>• Export to multiple formats</li>
                <li>• Real-time feedback</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#CDB937] mb-4">
                Advanced Features
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Virtual reality preview</li>
                <li>• Cost estimation</li>
                <li>• Material inventory</li>
                <li>• Project timeline</li>
              </ul>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose Our 3D Builder?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-white dark:bg-[#1A1A1A] p-8 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-bold text-[#CDB937] mb-4">
                  For Homeowners
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-left">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#CDB937] rounded-full mt-2"></div>
                    <span>Visualize your dream home before construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#CDB937] rounded-full mt-2"></div>
                    <span>
                      Make informed decisions about materials and layouts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#CDB937] rounded-full mt-2"></div>
                    <span>Save time and money by planning ahead</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-white dark:bg-[#1A1A1A] p-8 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-bold text-[#CDB937] mb-4">
                  For Designers
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-left">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#CDB937] rounded-full mt-2"></div>
                    <span>Streamline your design process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#CDB937] rounded-full mt-2"></div>
                    <span>Present designs in stunning 3D</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#CDB937] rounded-full mt-2"></div>
                    <span>Collaborate effectively with clients</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 transition-theme bg-white dark:bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[#CDB937] mb-4">
              Ready to Create Your Dream Home?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Start designing your perfect home today with our intuitive 3D
              builder tool. No experience required - just your imagination!
            </p>
            <Button
              href="https://3-d-modeler-gojw.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg inline-flex items-center"
            >
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThreeDBuilderPage;
