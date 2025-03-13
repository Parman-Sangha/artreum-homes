"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  ParkingMeterIcon as Park,
  School,
  ShoppingBag,
} from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const navItems = ["Home", "About Us", "Properties", "Communities"];

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

      {/* Hero Section with Logo Overlay */}
      <section className="relative h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/conrich3.jpg"
            alt="Conridge"
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
              src="/images/conrich.png"
              alt="Waterford Estates Logo"
              width={400}
              height={308}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Community Introduction */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#141414]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-8 text-[#CDB937]">
              Conridge via Knight Bridge
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Conrich via Knightsbridge offers a serene suburban drive with open
              landscapes and minimal traffic. The route provides a smooth and
              relaxed commuting experience, with light congestion during peak
              hours and well-planned detours ensuring steady traffic flow.
              Surrounded by vast green spaces and modern developments, the drive
              feels peaceful and refreshing. Ideal for those seeking a quiet yet
              accessible route, Knightsbridge enhances the journey with its
              scenic charm and stress-free navigation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-[#1A1A1A]">
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
                className="flex flex-col items-center p-6 bg-[#222222] rounded-lg hover:bg-[#2a2a2a] transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 text-[#CDB937] mb-4" />
                <span className="text-3xl font-bold text-[#CDB937] mb-2">
                  {stat.count}
                </span>
                <span className="text-gray-300">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#141414]">
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
            <div className="flex-1 space-y-40">
              {[
                {
                  title: "Parks & Recreation",
                  content: `Conrich offers a blend of natural beauty and recreational spaces, making it a great place for outdoor enthusiasts and families. The community features open green spaces, playgrounds, and nearby parks, providing plenty of opportunities for relaxation and outdoor activities. With walking trails, sports fields, and picnic areas, Conrich encourages an active lifestyle while maintaining its peaceful, rural charm. Whether it’s a casual stroll or a day out with family, residents can enjoy a refreshing outdoor experience close to home.`,
                },
                {
                  title: "Shopping & Dining",
                  content: `Convenience and leisure come together in Waterford with a selection of nearby shopping
                    and dining options. Local shops, grocery stores, and cafes are within easy reach, offering
                    everything from daily essentials to charming eateries for a night out. Located close to
                    Chestermere&apos;s commercial hubs, Waterford makes day-to-day errands and dining options easily accessible.`,
                },
                {
                  title: "Schools",
                  content: `Conrich is served by reputable schools, making it a great choice for families seeking quality education close to home. Nearby institutions offer a range of academic programs, ensuring students have access to excellent learning opportunities. Schools in the area provide strong educational foundations, while Calgary’s top-rated schools and specialized programs are just a short drive away. With a focus on academic excellence and community support, Conrich ensures families have access to quality education in a peaceful setting.`,
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
                  <h3 className="text-5xl font-bold text-[#CDB937] mb-5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-3xl leading-relaxed">
                    {feature.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lot Map Section */}
      <section className="py-20 bg-[#1A1A1A]">
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
      <section className="py-20 bg-[#141414]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#CDB937] text-center">
              Conridge via Knight Bridge
            </h2>
            <p className="text-gray-300 mb-8 text-center">
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
                    className="block text-gray-300 mb-2"
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
                    className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300"
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
                    className="block text-gray-300 mb-2"
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
                    className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300"
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
                  <label className="block text-gray-300 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300"
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
                  <label className="block text-gray-300 mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300"
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
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300"
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
                  className="w-4 h-4 text-[#CDB937] bg-[#222222] border-gray-700 rounded focus:ring-[#CDB937]"
                  required
                />
                <label className="text-gray-300" htmlFor="agreeToTerms">
                  I agree with Terms of Use and Privacy Policy
                </label>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={
                  formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                type="submit"
                className="w-full bg-[#CDB937] text-black font-bold py-3 rounded-md hover:bg-[#e3cc50] transition duration-300"
              >
                Send Your Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Build Dream Section */}
      <section className="py-20 bg-[#1A1A1A]">
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
                className="text-gray-300 text-xl leading-relaxed"
              >
                Your dream property is just a click away. Whether you&apos;re
                looking for a new home, a strategic investment, or expert real
                estate advice, Artreum is here to assist you every step of the
                way. Take the first step towards your real estate goals and
                explore our available properties or get in touch with our team
                for personalized assistance.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/properties"
                className="mt-8 inline-flex items-center bg-[#CDB937] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
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
                        href="/"
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

export default WaterfordEstates;
