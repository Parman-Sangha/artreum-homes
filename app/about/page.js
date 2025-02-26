"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });

  const navItems = ["Home", "About", "Property", "Communities"];

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      {/* Header Section */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1A1A1A] shadow-md sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition duration-200">
            <Image
              src="/images/logo2.png"
              alt="Artreum Homes"
              width={120}
              height={48}
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex justify-center flex-1">
            <ul className="flex space-x-8 font-medium text-lg">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-[#CDB937] transition duration-200 px-2 py-1 rounded-md hover:bg-[#222222]"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <Link
            href="/contact"
            className="bg-[#CDB937] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div className="md:hidden bg-[#1A1A1A]">
            <ul className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <li key={item} className="py-2">
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-[#CDB937] transition duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.header>

      {/* About Us Section */}
      <section className="relative h-[600px] overflow-hidden">
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
            <p className="text-2xl text-gray-200 leading-relaxed">
              Welcome to Artreum Homes, where luxury meets lifestyle. We ensure
              that each client experiences a seamless and enjoyable path to
              homeownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1A1A1A] text-gray-300 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="Artreum Homes"
                width={120}
                height={48}
              />
            </Link>
            <p className="mt-2 text-sm">
              © 2025 Artreum Homes. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CDB937] transition"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CDB937] transition"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CDB937] transition"
            >
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
