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
} from "lucide-react";

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
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

  // Handle scroll effect for header
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
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
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! Our team will contact you soon.");
    // Reset form
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
        className="bg-[#1A1A1A] p-8 rounded-lg shadow-xl"
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
              className="w-full px-4 py-3 bg-[#141414] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] text-white"
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
              className="w-full px-4 py-3 bg-[#141414] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] text-white"
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
              className="w-full px-4 py-3 bg-[#141414] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] text-white"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </div>
          <button
            onClick={calculateMortgage}
            className="w-full bg-[#CDB937] text-black font-bold px-6 py-3 rounded-md hover:bg-[#B5A230] transition duration-300 mt-4"
          >
            Calculate Monthly Payment
          </button>
          {monthlyPayment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

  // Navigation link component with hover effects
  const NavLink = ({ href, children, isMobile = false }) => {
    return (
      <Link href={href}>
        <motion.div
          className={`relative ${
            isMobile
              ? "text-2xl font-medium py-4 border-b border-gray-800"
              : "px-3 py-2"
          }`}
          whileHover="hover"
          initial="initial"
        >
          <motion.span
            className={`relative z-10 ${
              isMobile ? "text-white" : "text-gray-200"
            } hover:text-[#CDB937] transition-colors duration-300`}
          >
            {children}
          </motion.span>
          {!isMobile && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CDB937] origin-left"
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      </Link>
    );
  };

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      {/* Header */}
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black bg-opacity-90 backdrop-blur-md py-3 shadow-xl"
            : "bg-gradient-to-b from-black to-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-20"
          >
            <Link href="/" className="block">
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
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NavLink
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
                >
                  {item}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-[#CDB937] text-black px-6 py-2.5 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
              >
                Contact Us
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:hidden z-20 p-2 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                  <X size={28} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 bg-black bg-opacity-95 z-10 flex flex-col md:hidden"
              >
                <div className="h-24" /> {/* Spacer for header */}
                <div className="flex flex-col px-8 py-6 overflow-y-auto">
                  <nav className="flex flex-col space-y-2 mt-8">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <NavLink
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
                          isMobile={true}
                        >
                          {item}
                        </NavLink>
                      </motion.div>
                    ))}
                  </nav>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12"
                  >
                    <Link
                      href="/contact"
                      className="block w-full bg-[#CDB937] text-black py-4 rounded-full text-center text-xl font-semibold hover:bg-[#e3cc50] transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex justify-center space-x-6"
                  >
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
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-[#CDB937] transition duration-200"
                      >
                        <Icon size={28} />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              The Canvas House
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[#CDB937] drop-shadow-md">
              $1,250,000
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-[#0A0A0A]">
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
                      "/placeholder.svg" ||
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full transition duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full transition duration-300"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Image Title */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-sm text-white p-4 rounded-b-lg"
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
                      ? "ring-4 ring-[#CDB937]"
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
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  The Canvas House is a minimalist's dream, offering a blank
                  slate for personal expression. Clean lines, open spaces, and
                  abundant natural light make it versatile and stylish. It's an
                  ideal space for those who see their home as a canvas to
                  create, personalize, and evolve.
                </p>
              </div>

              <div className="flex flex-wrap justify-between gap-6 mt-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-[#1A1A1A] p-4 rounded-full">
                    <Bed size={36} className="text-[#CDB937]" />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-gray-400">Bedrooms</p>
                    <p className="text-xl md:text-2xl font-bold">04</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-[#1A1A1A] p-4 rounded-full">
                    <Bath size={36} className="text-[#CDB937]" />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-gray-400">
                      Bathrooms
                    </p>
                    <p className="text-xl md:text-2xl font-bold">04</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-[#1A1A1A] p-4 rounded-full">
                    <SquareFoot size={36} className="text-[#CDB937]" />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-gray-400">Area</p>
                    <p className="text-xl md:text-2xl font-bold">3,500 sq ft</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={descriptionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#1A1A1A] p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#CDB937]">
                Key Features and Amenities
              </h3>
              <ul className="space-y-4 text-lg md:text-xl">
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
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
                Build your dream home with our integrated 3D Modeler, allowing
                you to design, customize, and visualize every detail in stunning
                realism before construction begins.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/3d-builder"
                  className="inline-flex items-center bg-[#CDB937] text-black px-10 py-4 text-lg rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Explore our collection of pre-designed floor plans with our
              integrated tool, allowing you to easily visualize and choose the
              perfect layout for your future home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={floorPlanInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1A1A1A] p-6 rounded-lg shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="/images/floorplan.pdf"
                className="w-full h-[600px] border-0 rounded-lg"
                title="Floor Plan PDF"
              ></iframe>
            </div>

            <div className="mt-6 text-center">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#444" }}
                whileTap={{ scale: 0.95 }}
                href="/images/floorplan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#333] text-white px-6 py-3 rounded-lg transition duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Floor Plan PDF
              </motion.a>
            </div>
          </motion.div>

          <div className="mt-8 text-center text-gray-400 text-sm md:text-base">
            <p>
              <strong>Note:</strong> The figures provided above are estimates
              and may vary depending on the property, location, and individual
              circumstances.
            </p>
          </div>
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
              <p className="text-gray-400 mb-8 text-lg">
                Use our mortgage calculator to estimate your monthly payments
                and plan your investment in The Canvas House.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-[#CDB937] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/properties"
                  className="inline-flex items-center bg-[#CDB937] text-black px-10 py-4 text-lg rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                  whileHover={{ scale: 1.05 }}
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
                    whileHover={{ scale: 1.1, y: -5 }}
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
