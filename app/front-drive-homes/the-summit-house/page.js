"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* 
  MortgageCalculator Component (inlined)
  If you prefer a separate file, remove this inline code
  and import it from /components/MortgageCalculator
*/
const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  // Removed TypeScript annotation: useState<string | null>(null)
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // monthly interest
    const term = parseFloat(loanTerm) * 12; // months

    if (!principal || !rate || !term) {
      alert("Please enter valid values.");
      return;
    }

    const payment = (principal * rate) / (1 - Math.pow(1 + rate, -term));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="bg-[#1A1A1A] text-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Mortgage Calculator</h3>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Loan Amount ($)"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937]"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937]"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Loan Term (Years)"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937]"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
        <button
          onClick={calculateMortgage}
          className="w-full bg-[#CDB937] text-black font-bold px-4 py-2 rounded-md hover:bg-[#b49b2e] transition duration-200"
        >
          Calculate Mortgage
        </button>
        {monthlyPayment && (
          <div className="text-lg font-bold text-[#CDB937]">
            Monthly Payment: ${monthlyPayment}
          </div>
        )}
      </div>
    </div>
  );
};

/* 
  Animation Variants (same as your snippet)
*/
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

export default function PropertyPage() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Intersection observer for hero animation
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  // Nav items
  const navItems = ["Home", "About", "Property", "Communities"];

  // Example images for the thumbnail slider
  const propertyImages = [
    "/images/house1.jpg",
    "/images/house2.jpg",
    "/images/house3.jpg",
  ];

  // React Slick settings for thumbnails
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      {/* =================================
          HEADER (NAVBAR)
         ================================= */}
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
                src="/images/logo1.png"
                alt="Artreum Homes"
                width={120}
                height={48}
              />
            </Link>
          </motion.div>

          {/* Navigation Links (Desktop) */}
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
                        : item === "About"
                        ? "/about"
                        : item === "Property"
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
                      : item === "About"
                      ? "/about"
                      : item === "Property"
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

      {/* =================================
          MAIN CONTENT
         ================================= */}
      <main className="py-10">
        <div className="container mx-auto px-6">
          {/* 
            1) HERO SECTION: TWO-COLUMN LAYOUT
               Large exterior image on the left,
               interior image + thumbnail slider on the right
          */}
          <section className="mb-10 flex flex-col md:flex-row gap-6">
            {/* Left: Large Exterior Image */}
            <div className="relative w-full md:w-2/3 h-[500px] bg-gray-800 rounded-md overflow-hidden">
              <Image
                src="/images/house-exterior.jpg" // Replace with your real exterior image
                alt="Exterior"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Interior Image + Thumbnail Carousel */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              {/* Interior Image */}
              <div className="relative h-[250px] md:h-[300px] bg-gray-800 rounded-md overflow-hidden">
                <Image
                  src="/images/house-interior.jpg" // Replace with your real interior image
                  alt="Interior"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnails Slider */}
              <div className="overflow-hidden rounded-md">
                <Slider {...sliderSettings}>
                  {propertyImages.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="relative h-[150px] rounded-md overflow-hidden"
                    >
                      <Image
                        src={imgSrc}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>

          {/* Price in top-right corner (optional) */}
          <div className="text-2xl font-bold text-[#CDB937] mt-[-2rem] text-right mb-10">
            $1,250,000
          </div>

          {/* 
            2) PROPERTY INFO & STATS
               Description on the left, Key Features & Amenities on the right
          */}
          <section className="mb-10 flex flex-col md:flex-row gap-8">
            {/* Description & Stats */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-[#CDB937]">
                Description
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The Canvas House is a modern-minimalist dream, offering a blank
                slate for personal expression. Clean lines, open spaces, and
                abundant natural light make it versatile and stylish—perfect for
                those who love their home as a canvas to create, personalize,
                and evolve.
              </p>
              {/* Basic Stats */}
              <div className="mt-4 flex items-center gap-6 text-gray-300">
                <div>
                  <span className="block font-bold text-xl">04</span>
                  <span className="text-sm">Bedrooms</span>
                </div>
                <div>
                  <span className="block font-bold text-xl">04</span>
                  <span className="text-sm">Bathrooms</span>
                </div>
                <div>
                  <span className="block font-bold text-xl">3,500</span>
                  <span className="text-sm">Sq Ft</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold mb-4 text-[#CDB937]">
                Key Features &amp; Amenities
              </h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Two large master suites with walk-in closets</li>
                <li>Ensuite bathrooms</li>
                <li>Open concept living area</li>
                <li>Gas fireplace</li>
                <li>Recessed tray ceiling in master suite</li>
                <li>Formal dining room on main floor</li>
                <li>Spacious prep kitchen</li>
              </ul>
            </div>
          </section>

          {/* 
            3) 3D MODEL SECTION
          */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#CDB937]">
              Build 3D Model
            </h2>
            <p className="text-gray-300 mb-4">
              Build your dream home with our integrated 3D Modeler, allowing you
              to design, customize, and visualize every detail in stunning
              realism before construction begins.
            </p>
            <div className="bg-gray-800 h-96 flex items-center justify-center rounded-md">
              <span className="text-gray-400 italic">3D Model Placeholder</span>
            </div>
          </section>

          {/* 
            4) FLOOR PLAN 
          */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2 text-[#CDB937]">
              Floor Plan
            </h2>
            <p className="text-gray-500 italic mb-4">
              Explore our collection of pre-designed floor plans, allowing you
              to easily visualize and choose the perfect layout for your future
              home.
            </p>
            <div className="text-xl font-bold text-[#CDB937] mb-4">
              Starting Price: $1,100,000
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-4 rounded-md">
                <Image
                  src="/images/floorplan1.png"
                  alt="Main Floor Plan"
                  width={600}
                  height={400}
                  className="object-contain w-full"
                />
              </div>
              <div className="bg-gray-800 p-4 rounded-md">
                <Image
                  src="/images/floorplan2.png"
                  alt="Second Floor Plan"
                  width={600}
                  height={400}
                  className="object-contain w-full"
                />
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-[#CDB937] text-black font-bold px-4 py-2 rounded-md hover:bg-[#b49b2e] transition duration-200">
                View Fullscreen
              </button>
            </div>
          </section>

          {/* 
            5) MORTGAGE CALCULATOR
          */}
          <section className="mb-10">
            <MortgageCalculator />
          </section>

          {/* 
            6) INQUIRY / CONTACT FORM
          */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#CDB937]">
              Inquire About Front Drive Homes
            </h2>
            <p className="text-gray-300 mb-4 max-w-2xl">
              Reach out to learn about this property! Fill out the form below
              and our real estate team will help you with any questions you
              have.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none"
                  placeholder="Enter Last Name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Selected Property
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none"
                  placeholder="Enter Property Name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none"
                  placeholder="Enter your Message here"
                />
              </div>
              <div className="md:col-span-2 flex items-center space-x-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-[#CDB937] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e3cc50] transition duration-300"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </section>

          {/* 
            7) FINAL CTA 
          */}
          <section className="mb-10 bg-[#1A1A1A] p-8 rounded-md flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3 mb-4 md:mb-0">
              <h2 className="text-3xl font-bold text-[#CDB937] mb-2">
                Build your Dream with Artreum
              </h2>
              <p className="text-gray-300">
                Your dream property is just a click away. Whether you&apos;re
                looking for a new home, a strategic investment, or expert real
                estate advice, Artreum is here to assist you every step of the
                way.
              </p>
            </div>
            <Link
              href="/properties"
              className="mt-4 md:mt-0 inline-block bg-[#CDB937] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#e3cc50] transition duration-300"
            >
              Explore Properties
            </Link>
          </section>
        </div>
      </main>

      {/* =================================
          FOOTER
         ================================= */}
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
                  Terms &amp; Conditions
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
}
