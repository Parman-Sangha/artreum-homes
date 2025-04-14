/* eslint-disable */

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";
import { Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";

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

const ComingSoonPage = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    "Home",
    "About Us",
    "Properties",
    "Communities",
    "3D Modeler",
  ];

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white min-h-screen">
      <Navbar />

      {/* Main Content with Background Image */}
      <main className="flex-grow relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/coming.jpg"
            alt="Coming Soon Background"
            width={1344}
            height={768}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />{" "}
          {/* Overlay for readability */}
        </motion.div>

        <div className="relative flex items-center justify-center h-full py-20 z-10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              ref={contentRef}
              variants={fadeInUp}
              initial="initial"
              animate={contentInView ? "animate" : "initial"}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#CDB937] mb-10 mt-10">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                We're working hard to bring you the details of this property.
                Stay tuned for an exceptional real estate experience with
                Artreum Homes.
              </p>
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate={contentInView ? "animate" : "initial"}
                className="mt-10"
              >
                <Link
                  href="/"
                  className="inline-flex items-center bg-[#CDB937] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Back to Home
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoonPage;
