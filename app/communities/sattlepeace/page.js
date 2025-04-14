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
import { useTheme } from "../../context/ThemeContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

const SattlepeaceCommunity = () => {
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

  return (
    <div className="min-h-screen transition-theme bg-white dark:bg-[#141414] text-gray-900 dark:text-white">
      <Navbar />

      <div className="bg-[#141414] text-white min-h-screen">
        {/* Header Section */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#141414] shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Artreum Homes Logo"
                  width={150}
                  height={50}
                />
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item}
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
                    className="text-white hover:text-[#CDB937] transition duration-200"
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="bg-[#CDB937] text-black px-6 py-2 rounded-full hover:bg-[#B8A32E] transition duration-200"
                >
                  Contact Us
                </Link>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
                  aria-label="Menu Toggle"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
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
                              : item === "3D Modeler"
                              ? "/3d-builder"
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
              )}
            </AnimatePresence>
          </div>
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
        <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#141414]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-8 text-[#CDB937]">
                Saddlepeace
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
                Saddlepeace offers a modern suburban feel with well-planned
                roads and expanding infrastructure. The area balances urban
                convenience with residential tranquility, featuring smooth
                traffic flow and minimal congestion outside peak hours. Wide
                streets and thoughtful layouts provide a comfortable drive,
                making it an ideal route for those who appreciate accessibility
                without the rush of downtown. As the community grows, its blend
                of green spaces and contemporary design enhances the driving
                experience, ensuring a relaxed and efficient commute.
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
                    content: `Residents of Saddlepeace have access to a range of outdoor amenities designed for relaxation and recreation. The community boasts well-maintained parks, playgrounds, and open green spaces that provide a welcoming environment for families and nature lovers alike. With scenic walking trails and nearby sports facilities, Saddlepeace encourages an active lifestyle, making it an ideal destination for those who enjoy outdoor activities, leisurely strolls, and community gatherings.`,
                  },
                  {
                    title: "Shopping & Dining",
                    content: `Saddlepeace seamlessly blends convenience and leisure with a variety of nearby shopping and dining options. Residents have easy access to local shops, grocery stores, and cafes, providing everything from daily essentials to cozy spots for a night out. Situated close to major commercial areas in Calgary, Saddlepeace ensures that errands, dining, and entertainment are always within reach, making everyday life both effortless and enjoyable.`,
                  },
                  {
                    title: "Schools",
                    content: `Saddlepeace is home to excellent educational opportunities, making it a great choice for families. The community is served by well-regarded local schools, providing quality education just minutes from home. Nearby schools offer a range of programs for students of all ages, ensuring convenient access to primary, secondary, and specialized education. With a strong focus on learning and development, Saddlepeace supports families looking for top-tier academic options in a thriving neighborhood.`,
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      contentInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
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
              <h2 className="text-4xl font-bold mb-12 text-[#CDB937]">
                Lot Map
              </h2>
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
              animate={
                formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#CDB937] text-center">
                Inquire about Saddlepeace
              </h2>
              <p className="text-gray-300 mb-8 text-center">
                Interested in this community? Fill out the form below, and our
                real estate experts will get back to you with more details,
                including scheduling a viewing and answering any questions you
                may have.
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
      </div>

      <Footer />
    </div>
  );
};

export default SattlepeaceCommunity;
