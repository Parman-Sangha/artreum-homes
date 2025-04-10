/* eslint-disable */
"use client";
import { useAuth } from "./context/AuthContext";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { db } from "./firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Star,
  BedDouble,
  Bath,
  Home,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  ArrowDown,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "./context/ThemeContext";

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

// Button Component
const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";
  const variants = {
    primary: "bg-[#CDB937] text-black hover:bg-[#e3cc50]",
    secondary:
      "border border-[#CDB937] text-[#CDB937] hover:bg-[#222222] hover:text-white",
  };

  const buttonContent = (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

// Property Card Component
const PropertyCard = ({
  image,
  title,
  description,
  price,
  beds,
  baths,
  href,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      <div className="relative h-64">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex items-center space-x-4 text-[#CDB937] mb-4">
          <div className="flex items-center">
            <Home className="w-5 h-5 mr-1" />${price.toLocaleString()}
          </div>
          <div className="flex items-center">
            <BedDouble className="w-5 h-5 mr-1" />
            {beds}
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-1" />
            {baths}
          </div>
        </div>
        <div className="mt-auto">
          <Button href={href} className="w-full">
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// HomePage Component
const HomePage = () => {
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const { theme, toggleTheme } = useTheme();

  const { ref: testimonialRef, inView: testimonialInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: propertiesRef, inView: propertiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: communitiesRef, inView: communitiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fetch properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "properties"));
        const propertyList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProperties(propertyList);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  // Smooth scrolling and background fix
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // custom scrollbar styles
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #1A1A1A;
      }
      ::-webkit-scrollbar-thumb {
        background: #CDB937;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #e3cc50;
      }
      html, body {
        background-color: #141414 !important;
        overflow-x: hidden !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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

  // Navbar button hover animation
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
    <div className="bg-[#141414] text-white min-h-screen">
      {/* Header */}
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#1A1A1A] py-3 shadow-xl" : "bg-[#1A1A1A] py-6"
        }`} // Changed to always use #1A1A1A
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
                      className="px-4 py-2 rounded-md inline-block transition-all duration-300"
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

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
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
            className="md:hidden z-50 p-2 rounded-full bg-[#1A1A1A] hover:bg-[#252525] transition-colors duration-300"
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
                  <Menu size={24} className="text-white" />
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
                className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col md:hidden"
              >
                <div className="h-24" /> {/* Spacer for header */}
                <div className="flex flex-col items-center justify-center flex-1 p-8">
                  <ul className="flex flex-col items-center space-y-6 w-full">
                    {navItems.map((item, index) => (
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
                          className="text-2xl font-medium py-3 px-6 block w-full hover:text-[#CDB937] transition-colors duration-300"
                        >
                          {item}
                        </Link>
                      </motion.li>
                    ))}
                    <motion.li
                      variants={menuItemVariants}
                      className="w-full pt-6"
                    >
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
                <div className="p-8 flex justify-center space-x-6">
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
                      whileHover={{ scale: 1.1, color: "#CDB937" }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-[#CDB937] transition duration-200"
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

      {/* Hero Section with Video */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] pt-16 sm:pt-20">
        <motion.div style={{ opacity, scale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <video
            autoPlay
            loop
            muted
            className="object-cover w-full h-full brightness-75"
            src="/videos/vid.mp4"
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4 sm:px-6">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg"
          >
            Build Your Dream with{" "}
            <span className="text-primary">Artreum Homes</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-6 sm:mb-8 drop-shadow-md"
          >
            Crafting homes where quality meets community – your dream begins
            here.
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              href="/property"
              className="px-6 py-3 text-sm sm:text-base md:text-lg"
            >
              Browse Properties
            </Button>
            <Button
              href="/contact"
              className="px-6 py-3 text-sm sm:text-base md:text-lg bg-transparent border border-[#CDB937] text-white hover:bg-[#CDB937] hover:text-black"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={propertiesRef}
            variants={fadeInUp}
            initial="initial"
            animate={propertiesInView ? "animate" : "initial"}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#CDB937] mb-3 sm:mb-4">
              What We Build
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              Discover our handpicked selection of properties, blending modern
              design with timeless comfort.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <PropertyCard
              image="/images/Rendor 1.png"
              title="Front Drive Homes"
              description="A stunning 4-bedroom home in a peaceful suburban neighborhood."
              price={1000000}
              beds={4}
              baths={4}
              href="/coming-soon"
            />
            <PropertyCard
              image="/images/f7.jpeg"
              title="Laned Homes"
              description="A chic 2-bedroom home with panoramic views."
              price={550000}
              beds={2}
              baths={2}
              href="/coming-soon"
            />
            <PropertyCard
              image="/images/f11.jpeg"
              title="Town Houses"
              description="An elegant 3-bedroom townhouse in a gated community."
              price={550000}
              beds={3}
              baths={2.5}
              href="/property/canvas-house"
            />
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section
        id="communities"
        className="py-12 sm:py-16 md:py-20 bg-[#141414]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={communitiesRef}
            variants={fadeInUp}
            initial="initial"
            animate={communitiesInView ? "animate" : "initial"}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#CDB937] mb-3 sm:mb-4">
              Our Communities
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              Experience vibrant neighborhoods designed for connection,
              convenience, and tranquility.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                communitiesInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="/images/com.png"
                  alt="Waterford Estates"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                  Waterford Estates
                </h4>
                <p className="text-gray-400 mb-4 text-sm sm:text-base line-clamp-2">
                  A suburban oasis with tree-lined roads and minimal traffic,
                  perfect for a peaceful lifestyle.
                </p>
                <p className="text-[#CDB937] font-bold mb-4 text-sm sm:text-base">
                  $1,000,000
                </p>
                <Button href="/communities/waterford" className="w-full">
                  View Community
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                communitiesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="/images/con3.png"
                  alt="Langdon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                  Langdon
                </h4>
                <p className="text-gray-400 mb-4 text-sm sm:text-base line-clamp-2">
                  A scenic retreat with quiet roads and rural charm, blending
                  convenience with serenity.
                </p>
                <p className="text-[#CDB937] font-bold mb-4 text-sm sm:text-base">
                  $650,000
                </p>
                <Button href="/communities/langdon" className="w-full">
                  View Community
                </Button>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={communitiesInView ? "animate" : "initial"}
            className="text-center mt-8 sm:mt-12"
          >
            <Button
              href="/communities"
              className="px-8 py-4 inline-flex items-center"
            >
              Explore All Communities <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={testimonialRef}
            variants={fadeInUp}
            initial="initial"
            animate={testimonialInView ? "animate" : "initial"}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#CDB937] mb-3 sm:mb-4">
              Testimonials
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              Hear from our valued clients about their exceptional experiences
              with Artreum Homes.
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
                transition={{ duration: 0.1, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#222222] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-opacity-90"
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
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base italic line-clamp-3">
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
                    <span className="font-medium text-white text-sm sm:text-base">
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Copied from CanvasHouse) */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
            {/* Newsletter Section */}
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
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300"
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

            {/* Footer Links */}
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

          {/* Bottom Section */}
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
                    whileHover={{ scale: 1.1, color: "#CDB937" }}
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

export default HomePage;
