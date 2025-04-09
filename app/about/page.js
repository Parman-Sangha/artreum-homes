/* eslint-disable */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });
  const { ref: testimonialRef, inView: testimonialInView } = useInView({
    triggerOnce: true,
  });
  const { ref: whyUsRef, inView: whyUsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: nextHomeRef, inView: nextHomeInView } = useInView({
    triggerOnce: true,
  });
  const { ref: buildDreamRef, inView: buildDreamInView } = useInView({
    triggerOnce: true,
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
      text: "The team&apos;s professionalism and attention to detail made our home buying experience seamless and enjoyable.",
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
            <Link
              href="/contact"
              className="bg-[#CDB937] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.header>

      {/* About Us Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_7698.png"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90" />
        </div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div
            ref={aboutRef}
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-2xl text-gray-200 leading-relaxed ">
              Welcome to Artreum Homes, where luxury meets lifestyle. We believe
              that finding a home is more than a transaction – it&apos;s a
              journey to discovering a space where you belong, a place that
              matches your aspirations and elevates your way of living. Our
              dedicated team combines industry expertise with a personalized
              touch, ensuring that each client experiences a seamless,
              enjoyable, and rewarding path to homeownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-light-surface dark:bg-dark-surface">
        <div className="container mx-auto px-6">
          <motion.div
            ref={testimonialRef}
            initial="initial"
            animate={testimonialInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Testimonials
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Artreum for their real
              estate needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  testimonialInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-primary fill-primary mr-1"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
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
      <section className="py-20 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-6">
          <motion.div
            ref={buildDreamRef}
            initial="initial"
            animate={buildDreamInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start gap-8"
          >
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-6 text-[#CDB937]">
                Build Dream With Artreum
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed">
                Your dream property is just a click away. Whether you&apos;re
                looking for a new home, a strategic investment, or expert real
                estate advice, Artreum is here to assist you every step of the
                way. Take the first step towards your real estate goals and
                explore our available properties or get in touch with our team
                for personalized assistance.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                buildDreamInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/property"
                className=" mt-16 inline-flex items-center bg-[#CDB937] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
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
                <button className="px-4 py-2 bg-[#CDB937] text-black font-bold rounded-md hover:bg-[#e3cc50] transition duration-200">
                  Subscribe
                </button>
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
                  { icon: Twitter, href: "https://x.com" },
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

export default AboutPage;
