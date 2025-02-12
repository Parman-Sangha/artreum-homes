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

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
};

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const navItems = ["Home", "About", "Property", "Communities"];

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
    <div className="bg-[#141414] text-white min-h-screen">
      {/* Header Section */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1A1A1A] shadow-md sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Link href="/" className="hover:opacity-80 transition duration-200">
              <Image
                src="/images/logo2.png"
                alt="Artreum Homes"
                width={120}
                height={48}
              />
            </Link>
          </motion.div>

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
                    href={
                      item === "Home"
                        ? "/"
                        : item === "About Us"
                        ? "/about"
                        : item === "Properties"
                        ? "/property"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    className="hover:text-[#CDB937] transition duration-200 px-2 py-1 rounded-md hover:bg-[#222222]"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="bg-[#CDB937] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Menu Toggle"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#1A1A1A] overflow-hidden"
        >
          <ul className="flex flex-col items-center py-4">
            {[...navItems, "Contact Us"].map((item) => (
              <li key={item} className="py-2">
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
                  className="hover:text-[#CDB937] transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
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
            <p className="text-2xl text-gray-200 leading-relaxed">
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
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={testimonialRef}
            initial="initial"
            animate={testimonialInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#CDB937]">
              Testimonials
            </h2>
            <p className="text-gray-400 text-lg">
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#222222] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#CDB937] fill-[#CDB937] filter drop-shadow-lg mr-1 transform hover:scale-110 transition-transform duration-200"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#CDB937]">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-300 mb-6 italic">
                    &quot;{testimonial.text}&quot;
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
                    <span className="font-medium text-white">
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#141414]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={whyUsRef}
            initial="initial"
            animate={whyUsInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-bold mb-6  text-[#CDB937]">
              Why Choose Us
            </h2>
            <p className=" text-xl text-gray-300 leading-relaxed">
              With years of industry experience and an eye for quality, we offer
              a carefully curated portfolio of properties in sought-after
              neighborhoods. Our commitment is to go above and beyond, not just
              meeting your expectations but exceeding them. With our expertise,
              market insights, and dedication, we empower you to make informed
              decisions confidently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Your Next Home Awaits Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={nextHomeRef}
            initial="initial"
            animate={nextHomeInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#CDB937]">
              Your Next Home Awaits
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Let us help you find a space where comfort, elegance, and
              lifestyle harmonize. With our refined portfolio of homes,
              townhouses, and properties with customizable garage layouts,
              we&apos;re here to make your vision of the perfect home a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Build Dream Section */}
      <section className="py-20 bg-[#141414]">
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
                href="/properties"
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
                src="/images/logo2.png"
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

            {/* Footer Links - Using CSS Grid for better organization */}
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
