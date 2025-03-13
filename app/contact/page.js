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
} from "lucide-react";

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

const navItems = ["Home", "About Us", "Properties", "Communities"];

// Reusable Button Component
const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center bg-[#CDB937] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${className}`}
  >
    {children}
  </button>
);

const ContactPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
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
    <div className="bg-[#141414] text-white min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1A1A1A] shadow-md sticky top-0 z-50"
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
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    className="hover:text-[#CDB937] transition duration-200 px-3 py-2 rounded-md hover:bg-[#222222]"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 md:mt-0"
          >
            <Link
              href="/contact"
              className="bg-[#CDB937] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </motion.div>
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
            We’re here to help you find your dream home. Reach out today!
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
              Let’s Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you have questions about properties, communities, or
              services, we’d love to hear from you.
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

export default ContactPage;
