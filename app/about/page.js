/* eslint-disable */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
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

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: testimonialRef, inView: testimonialInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: buildDreamRef, inView: buildDreamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navItems = [
    "Home",
    "About Us",
    "Properties",
    "Communities",
    "3D Modeler",
  ];

  const testimonials = [
    {
      title: "Exceptional Service!",
      text: "The team's professionalism and attention to detail made our home buying experience seamless and enjoyable.",
      author: "Wade Warren",
      image: "/images/Profile1.png",
    },
    {
      title: "Outstanding Experience",
      text: "Highly reliable and efficient. The entire process was smooth from start to finish.",
      author: "Emelie Thomson",
      image: "/images/Profile2.png",
    },
    {
      title: "True Professionals",
      text: "Their expertise and guidance made finding our dream home a wonderful journey.",
      author: "John Mason",
      image: "/images/Profile3.png",
    },
  ];

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

      {/* About Us Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_7698.png"
            alt="About Us"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent opacity-90" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <motion.div
            ref={aboutRef}
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed drop-shadow-md">
              Welcome to Artreum Homes, where luxury meets lifestyle. We believe
              that finding a home is more than a transaction – it's a journey to
              discovering a space where you belong, a place that matches your
              aspirations and elevates your way of living. Our dedicated team
              combines industry expertise with a personalized touch, ensuring
              that each client experiences a seamless, enjoyable, and rewarding
              path to homeownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 transition-theme bg-white dark:bg-[#1A1A1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={testimonialRef}
            initial="initial"
            animate={testimonialInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#CDB937] mb-3 sm:mb-4">
              Testimonials
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Artreum for their real
              estate needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  testimonialInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-[#222222] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex justify-start mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#CDB937] fill-[#CDB937] mr-1"
                      />
                    ))}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#CDB937] mb-3 sm:mb-4">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base italic line-clamp-3">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Dream Section */}
      <section className="py-12 sm:py-16 md:py-20 transition-theme bg-white dark:bg-[#141414]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={buildDreamRef}
            initial="initial"
            animate={buildDreamInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="flex flex-col gap-6 sm:gap-8"
          >
            <div className="md:w-2/3">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#CDB937] mb-4 sm:mb-6">
                Build Your Dream With Artreum
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Artreum is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore
                our available properties or get in touch with our team for
                personalized assistance.
              </p>
              <Link
                href="/property"
                className="inline-flex items-center bg-[#CDB937] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
