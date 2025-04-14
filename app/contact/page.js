/* eslint-disable */

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ArrowDown,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

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

const ContactPage = () => {
  const { theme, toggleTheme } = useTheme();
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Function to handle smooth scroll to form section
  const handleScrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen transition-theme bg-white dark:bg-[#141414] text-gray-900 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/contact.jpg"
            alt="Contact Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6">
          <motion.h1
            ref={heroRef}
            variants={fadeInUp}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get in Touch with{" "}
            <span className="text-[#CDB937]">Artreum Homes</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8"
          >
            We're here to help you find your dream home. Reach out today!
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="mt-6"
          >
            <Button onClick={handleScrollToForm}>
              Contact Us <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-[#141414]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={formRef}
            variants={fadeInUp}
            initial="initial"
            animate={formInView ? "animate" : "initial"}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#CDB937] mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you have questions about properties, communities, or
              services, we'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                <Mail className="text-[#CDB937] h-8 w-8" />
              </div>
              <p className="text-gray-400 mt-4">info@artreumhomes.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                <Phone className="text-[#CDB937] h-8 w-8" />
              </div>
              <p className="text-gray-400 mt-4">+1-555-555-5555</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                <MapPin className="text-[#CDB937] h-8 w-8" />
              </div>
              <p className="text-gray-400 mt-4">Main Headquarters</p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="First Name"
                className="p-4 rounded bg-[#222222] text-gray-300 border border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-4 rounded bg-[#222222] text-gray-300 border border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="email"
                placeholder="Email"
                className="p-4 rounded bg-[#222222] text-gray-300 border border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-4 rounded bg-[#222222] text-gray-300 border border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="4"
              className="p-4 rounded bg-[#222222] text-gray-300 w-full mb-6 border border-gray-700 focus:outline-none focus:border-[#CDB937] transition duration-300"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#CDB937] text-black font-bold rounded-md hover:bg-[#e3cc50] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#CDB937] text-center mb-10">
              Our Office Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-[#CDB937] mb-4">
                  Main Headquarters
                </h3>
                <p className="text-gray-400 mb-4">Coming Soon</p>
                <button className="px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#e3cc50] transition duration-300">
                  Get Directions
                </button>
              </div>
              <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-[#CDB937] mb-4">
                  Suburban Office
                </h3>
                <p className="text-gray-400 mb-4">
                  6630 36 St NE #116, Calgary, AB
                </p>
                <button className="px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#e3cc50] transition duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
