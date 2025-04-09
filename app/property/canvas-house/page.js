/* eslint-disable */

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Bed,
  Bath,
  SquareIcon as SquareFoot,
  ChevronLeft,
  ChevronRight,
  Check,
  CuboidIcon as Cube,
  FileText,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CanvasHouse = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedProperty: "The Canvas House",
    message: "",
    agreeTerms: false,
  });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const headerRef = useRef(null);

  // smooth scrolling behavior
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

  const navItems = [
    "Home",
    "About Us",
    "Properties",
    "Communities",
    "3D Modeler",
  ];

  const propertyImages = [
    { path: "/images/extcan.jpg", dimension: "1344x768", title: "Exterior" },
    {
      path: "/images/livingcan.jpeg",
      dimension: "1344x708",
      title: "Living Room",
    },
    {
      path: "/images/kitchencan.jpeg",
      dimension: "1344x705",
      title: "Kitchen",
    },
    {
      path: "/images/dinningcan.jpg",
      dimension: "1344x768",
      title: "Dining Room",
    },
    {
      path: "/images/bedcan.jpeg",
      dimension: "1344x768",
      title: "Master Bedroom",
    },
    {
      path: "/images/bathcan.jpeg",
      dimension: "1344x705",
      title: "Master Bathroom",
    },
    {
      path: "/images/kbedcan.jpg",
      dimension: "1344x768",
      title: "Kid's Bedroom",
    },
    {
      path: "/images/studycan.jpg",
      dimension: "1344x768",
      title: "Study Room/Office",
    },
    {
      path: "/images/patiocan.jpg",
      dimension: "1344x768",
      title: "Patio/Backyard",
    },
  ];

  const amenities = [
    "Two Large master suite with walk-in closet and ensuite bathroom",
    "Built-in shelves with Gas Fireplace",
    "Raised tray ceiling in master ensuite",
    "Formal living room on the main floor",
    "Spacious spice kitchen",
  ];

  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: modelRef, inView: modelInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: floorPlanRef, inView: floorPlanInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % propertyImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + propertyImages.length) % propertyImages.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! Our team will contact you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      selectedProperty: "The Canvas House",
      message: "",
      agreeTerms: false,
    });
  };

  // Mortgage Calculator Component
  const MortgageCalculator = () => {
    const [downPayment, setDownPayment] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const housePrice = 1250000;

    const formatNumber = (value) => {
      const numericValue = value.replace(/[^0-9]/g, "");
      if (!numericValue) return "";
      const number = Number.parseFloat(numericValue) / 100;
      return number.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };

    const handleDownPaymentChange = (e) => {
      const value = e.target.value;
      const cleanValue = value.replace(/[^0-9]/g, "");
      const formattedValue = formatNumber(cleanValue);
      setDownPayment(formattedValue);
    };

    const calculateMortgage = () => {
      const downPaymentAmount = Number.parseFloat(
        downPayment.replace(/,/g, "")
      );
      const principal = housePrice - downPaymentAmount;
      const rate = Number.parseFloat(interestRate) / 100 / 12;
      const term = Number.parseFloat(loanTerm) * 12;

      if (!downPaymentAmount || !rate || !term) {
        alert("Please enter valid values.");
        return;
      }

      const payment = (principal * rate) / (1 - Math.pow(1 + rate, -term));
      setMonthlyPayment(payment.toFixed(2));
    };

    return (
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="bg-[#1A1A1A] p-8 rounded-lg shadow-xl backdrop-blur-sm bg-opacity-90"
      >
        <h3 className="text-2xl font-bold text-[#CDB937] mb-6">
          Mortgage Calculator
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Down Payment ($)</label>
            <input
              type="text"
              placeholder="Enter down payment amount"
              className="w-full px-4 py-3 bg-[#141414] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] text-white transition-all duration-300 hover:border-[#CDB937]/50"
              value={downPayment}
              onChange={handleDownPaymentChange}
            />
            <p className="text-sm text-gray-500 mt-1">
              House Price: ${housePrice.toLocaleString()}
            </p>
          </div>
          <div>
            <label className="block text-gray-400 mb-2">
              Interest Rate (%)
            </label>
            <input
              type="number"
              placeholder="Enter interest rate"
              className="w-full px-4 py-3 bg-[#141414] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] text-white transition-all duration-300 hover:border-[#CDB937]/50"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">
              Loan Term (Years)
            </label>
            <input
              type="number"
              placeholder="Enter loan term"
              className="w-full px-4 py-3 bg-[#141414] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] text-white transition-all duration-300 hover:border-[#CDB937]/50"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#e3cc50" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={calculateMortgage}
            className="w-full bg-[#CDB937] text-black font-bold px-6 py-3 rounded-md hover:bg-[#B5A230] transition duration-300 mt-4"
          >
            Calculate Monthly Payment
          </motion.button>
          {monthlyPayment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-6 p-4 bg-[#141414] rounded-lg"
            >
              <h4 className="text-lg font-semibold text-[#CDB937] mb-2">
                Estimated Monthly Payment
              </h4>
              <p className="text-2xl font-bold text-white">${monthlyPayment}</p>
              <p className="text-sm text-gray-500 mt-2">
                * This is an estimate only. Actual payments may vary based on
                credit score, insurance, taxes, and other factors.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

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
                className="bg-[#CDB937] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg"
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

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={propertyImages[0].path || "/placeholder.svg"}
            alt="The Canvas House"
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16 md:pb-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            >
              The Canvas House
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-[#CDB937] drop-shadow-md"
            >
              $1,250,000
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8"
            >
              <motion.a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("gallery")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center text-white hover:text-[#CDB937] transition-colors duration-300"
              >
                <span className="mr-2">Explore Gallery</span>
                <ChevronDown className="animate-bounce" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery" className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg shadow-2xl mb-4">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={
                      propertyImages[currentImageIndex].path ||
                      "/placeholder.svg"
                    }
                    alt={propertyImages[currentImageIndex].title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full transition duration-300 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full transition duration-300 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Image Title */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 pt-12 rounded-b-lg"
              >
                <h3 className="text-xl font-semibold">
                  {propertyImages[currentImageIndex].title}
                </h3>
              </motion.div>
            </div>

            {/* Thumbnails */}
            <div className="flex overflow-x-auto space-x-2 pb-4 scrollbar-hide">
              {propertyImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex-shrink-0 cursor-pointer rounded-md overflow-hidden transition duration-300 ${
                    currentImageIndex === index
                      ? "ring-4 ring-[#CDB937] shadow-lg shadow-[#CDB937]/20"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => goToImage(index)}
                >
                  <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24">
                    <Image
                      src={image.path || "/placeholder.svg"}
                      alt={image.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section ref={descriptionRef} className="py-16 bg-[#141414]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={descriptionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#CDB937]">
                  Description
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                  The Canvas House is a minimalist's dream, offering a blank
                  slate for personal expression. Clean lines, open spaces, and
                  abundant natural light make it versatile and stylish. It's an
                  ideal space for those who see their home as a canvas to
                  create, personalize, and evolve.
                </p>
              </div>

              <div className="flex flex-wrap justify-between gap-6 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#1A1A1A] p-4 rounded-full">
                    <Bed size={48} className="text-[#CDB937]" />
                  </div>
                  <div>
                    <p className="text-xl text-gray-400">Bedrooms</p>
                    <p className="text-xl font-bold">04</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#1A1A1A] p-4 rounded-full">
                    <Bath size={48} className="text-[#CDB937]" />
                  </div>
                  <div>
                    <p className="text-xl text-gray-400">Bathrooms</p>
                    <p className="text-xl font-bold">04</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#1A1A1A] p-4 rounded-full">
                    <SquareFoot size={48} className="text-[#CDB937]" />
                  </div>
                  <div>
                    <p className="text-xl text-gray-400">Area</p>
                    <p className="text-xl font-bold">3,500 sq ft</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={descriptionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#1A1A1A] p-8 rounded-lg shadow-xl backdrop-blur-sm bg-opacity-90"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#CDB937]">
                Key Features and Amenities
              </h3>
              <ul className="space-y-4 text-base sm:text-lg md:text-xl">
                {amenities.map((amenity, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={descriptionInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="text-[#CDB937] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{amenity}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-2xl font-bold text-[#CDB937]">
                  Starting at $1,100,000
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section
        ref={modelRef}
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/images/extcan.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={modelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block p-4 bg-[#CDB937] rounded-full mb-6">
                <Cube size={32} className="text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Build 3D Model
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Build your dream home with our integrated 3D Modeler, allowing
                you to design, customize, and visualize every detail in stunning
                realism before construction begins.
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
                  href="/3d-builder"
                  className="inline-flex items-center bg-[#CDB937] text-black px-10 py-4 text-lg rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg"
                >
                  <Cube className="mr-2 h-5 w-5" />
                  Launch 3D Builder
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section ref={floorPlanRef} className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={floorPlanInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-block p-4 bg-[#1A1A1A] rounded-full mb-6">
              <FileText size={32} className="text-[#CDB937]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#CDB937]">
              Floor Plan
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our collection of pre-designed floor plans with our
              integrated tool, allowing you to easily visualize and choose the
              perfect layout for your future home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={floorPlanInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-xl backdrop-blur-sm bg-opacity-90"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="/images/floorplan.pdf"
                className="w-full h-[600px] border-0 rounded-lg"
                title="Floor Plan PDF"
              />
            </div>

            <div className="mt-6 text-center">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#444",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="/images/floorplan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#333] text-white px-6 py-3 rounded-lg hover:bg-[#444] transition duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Floor Plan PDF
              </motion.a>
            </div>

            <div className="mt-8 text-center text-gray-400 text-lg">
              <p>
                <strong>Note:</strong> The figures provided above are estimates
                and may vary depending on the property, location, and individual
                circumstances.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mortgage Calculator Section */}
      <section ref={formRef} className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate={formInView ? "animate" : "initial"}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl font-bold text-[#CDB937] mb-6">
                Calculate Your Mortgage
              </h2>
              <p className="text-gray-400 mb-8 text-xl">
                Use our mortgage calculator to estimate your monthly payments
                and plan your investment in The Canvas House.
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
                  href="/contact"
                  className="inline-block bg-[#CDB937] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg"
                >
                  Contact Us for More Information
                </Link>
              </motion.div>
            </motion.div>
            <MortgageCalculator />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/images/livingcan.jpeg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Build your Dream with Artreum
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Artreum is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore
                our available properties or get in touch with our team for
                personalized assistance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
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
                  href="/properties"
                  className="inline-flex items-center bg-[#CDB937] text-black px-10 py-4 text-lg rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg"
                >
                  Explore Properties
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default CanvasHouse;
