/* eslint-disable */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  ParkingMeterIcon as Park,
  School,
  ShoppingBag,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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

const WaterfordEstates = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreeToTerms: false,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
  });
  const { ref: mapRef, inView: mapInView } = useInView({ triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true });

  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

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

  const navItems = [
    "Home",
    "About Us",
    "Properties",
    "Communities",
    "3D Modeler",
  ];

  const stats = [
    { icon: Park, label: "Parks", count: "5+" },
    { icon: School, label: "Schools", count: "3" },
    { icon: ShoppingBag, label: "Shopping & Dining", count: "10+" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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

      {/* Hero Section with Logo Overlay */}
      <section className="relative h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/Waterford1.png"
            alt="Waterford Estates"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-25" />
        </motion.div>

        <motion.div
          style={{ scale: logoScale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="/images/Waterford2.png"
              alt="Waterford Estates Logo"
              width={400}
              height={308}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Community Introduction */}
      <section className="py-20 transition-theme bg-white dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:to-[#141414]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-8 text-[#CDB937]">
              Waterford Estates
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Waterford Estates offers a suburban drive with tree-lined roads
              and minimal traffic. The route feels calm, with light congestion
              at peak hours and well-placed detours. It's ideal for those who
              enjoy peaceful, green surroundings, creating a pleasant,
              low-stress commute. The scenic atmosphere enhances the experience
              without major delays.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 transition-theme bg-white dark:bg-[#1A1A1A]">
        <motion.div ref={statsRef} className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-[#222222] rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-all duration-300 transition-theme"
              >
                <stat.icon className="w-12 h-12 text-[#CDB937] mb-4" />
                <span className="text-3xl font-bold text-[#CDB937] mb-2">
                  {stat.count}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 transition-theme bg-white dark:bg-[#141414]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Vertical Image */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
              className="lg:w-1/3"
            >
              <Image
                src="/images/Waterford3.png"
                alt="Waterford Features"
                width={703}
                height={2036}
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            {/* Features Content */}
            <div className="flex-1 space-y-12 md:space-y-40">
              {[
                {
                  title: "Parks & Recreation",
                  content: `Residents of Waterford enjoy a variety of outdoor amenities right at their doorstep. 
                    The community features beautifully landscaped parks, playgrounds, and nearby sports facilities 
                    that cater to all ages. With a network of walking trails and green spaces, Waterford is ideal 
                    for families, pet owners, and outdoor enthusiasts, offering plenty of options for relaxation, 
                    exercise, and scenic strolls.`,
                },
                {
                  title: "Shopping & Dining",
                  content: `Convenience and leisure come together in Waterford with a selection of nearby shopping
                    and dining options. Local shops, grocery stores, and cafes are within easy reach, offering
                    everything from daily essentials to charming eateries for a night out. Located close to
                    Chestermere's commercial hubs, Waterford makes day-to-day errands and dining options easily accessible.`,
                },
                {
                  title: "Schools",
                  content: `Waterford is served by excellent local schools, making it a perfect choice for families. 
                    Top-rated schools in the area include Rainbow Creek Elementary School and Chestermere Lake Middle School, 
                    both just minutes away. For higher education and specialty programs, nearby Chestermere High School 
                    offers a variety of options, ensuring quality education is close to home.`,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#CDB937] mb-5">
                    {feature.title}
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-normal lg:leading-relaxed">
                    {feature.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lot Map Section */}
      <section className="py-20 transition-theme bg-white dark:bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12 text-[#CDB937]">Lot Map</h2>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/Waterford4.jpg"
                alt="Waterford Estates Lot Map"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 transition-theme bg-white dark:bg-[#141414]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#CDB937] text-center">
              Inquire about Waterford Estates
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
              Interested in this community? Fill out the form below, and our
              real estate experts will get back to you with more details,
              including scheduling a viewing and answering any questions you may
              have.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label
                    className="block text-gray-600 dark:text-gray-300 mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-[#222222] border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300 text-gray-900 dark:text-white"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label
                    className="block text-gray-600 dark:text-gray-300 mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-[#222222] border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300 text-gray-900 dark:text-white"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label
                    className="block text-gray-600 dark:text-gray-300 mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-[#222222] border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300 text-gray-900 dark:text-white"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label
                    className="block text-gray-600 dark:text-gray-300 mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-[#222222] border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300 text-gray-900 dark:text-white"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label
                  className="block text-gray-600 dark:text-gray-300 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-[#222222] border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300 text-gray-900 dark:text-white"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-[#CDB937] bg-gray-100 dark:bg-[#222222] border-gray-300 dark:border-gray-700 rounded focus:ring-[#CDB937]"
                  required
                />
                <label
                  className="text-gray-600 dark:text-gray-300"
                  htmlFor="agreeToTerms"
                >
                  I agree with Terms of Use and Privacy Policy
                </label>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(205, 185, 55, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="submit"
                  className="w-full bg-[#CDB937] text-black font-semibold py-3 rounded-full hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Your Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Build Dream Section */}
      <section className="py-20 transition-theme bg-white dark:bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold mb-6 text-[#CDB937]"
              >
                Build Dream With Artreum
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed"
              >
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Artreum is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore
                our available properties or get in touch with our team for
                personalized assistance.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(205, 185, 55, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <Link
                href="/properties"
                className="inline-flex items-center bg-[#CDB937] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaterfordEstates;
