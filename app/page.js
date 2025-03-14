/* eslint-disable */
"use client";
import { useAuth } from "./context/AuthContext";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "./firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Star,
  BedDouble,
  Bath,
  House,
  ArrowRight,
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

const testimonials = [
  {
    title: "Exceptional Service!",
    text: "The team's professionalism and attention to detail made our home buying experience seamless and enjoyable.",
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

// Reusable Button Component
const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";
  const variants = {
    primary: "bg-[#CDB937] text-black hover:bg-[#e3cc50]",
    secondary:
      "border border-[#CDB937] text-[#CDB937] hover:bg-[#222222] hover:text-white",
  };

  const buttonContent = (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

// Property Card Component
const PropertyCard = ({
  image,
  title,
  description,
  price,
  beds,
  baths,
  href,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-64">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex items-center space-x-4 text-[#CDB937] mb-4">
          <div className="flex items-center">
            <House className="w-5 h-5 mr-1" />${price.toLocaleString()}
          </div>
          <div className="flex items-center">
            <BedDouble className="w-5 h-5 mr-1" />
            {beds}
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-1" />
            {baths}
          </div>
        </div>
        <Button href={href} className="w-full">
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    Home: ["Hero Section", "Features", "Properties", "Testimonials", "FAQs"],
    "About Us": [
      "Our Story",
      "Our Work",
      "How It Works",
      "Our Team",
      "Our Clients",
    ],
    Properties: ["Portfolio", "Categories"],
    Services: [
      "Valuation Mastery",
      "Strategic Marketing",
      "Negotiation Wizardry",
      "Closing Success",
      "Property Management",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Twitter, href: "https://x.com" },
  ];

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
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
              <Button>Subscribe</Button>
            </form>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 col-span-1 lg:col-span-4 gap-8">
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title} className="space-y-4">
                <h4 className="text-lg font-bold text-[#CDB937]">{title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item) => (
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
            ))}
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
              {socialLinks.map(({ icon: Icon, href }) => (
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
  );
};

// HomePage Component
const HomePage = () => {
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);

  const { ref: testimonialRef, inView: testimonialInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: propertiesRef, inView: propertiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: communitiesRef, inView: communitiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "properties"));
        const propertyList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProperties(propertyList);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

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
            <Button href="/contact" className="px-8 py-3 text-lg">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section with Video Placeholder */}
      <section className="relative h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Added */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          {
            <video
              autoPlay
              loop
              muted
              className="object-cover w-full h-full"
              src="/videos/vid.mp4"
            />
          }
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Build Your Dream with{" "}
            <span className="text-[#CDB937]">Artreum Homes</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8"
          >
            Crafting homes where quality meets community – your dream begins
            here.
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex space-x-4"
          >
            <Button href="/property" className="px-8 py-4 text-lg">
              Browse Properties
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="px-8 py-4 text-lg"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={propertiesRef}
            variants={fadeInUp}
            initial="initial"
            animate={propertiesInView ? "animate" : "initial"}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#CDB937] mb-4">
              What We Build
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our handpicked selection of properties, blending modern
              design with timeless comfort.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              image="/images/Rendor 1.png"
              title="Front Drive Homes"
              description="A stunning 4-bedroom home in a peaceful suburban neighborhood."
              price={1000000}
              beds={4}
              baths={4}
              href="/coming-soon"
            />
            <PropertyCard
              image="/images/f7.jpeg"
              title="Laned Homes"
              description="A chic 2-bedroom home with panoramic views."
              price={550000}
              beds={2}
              baths={2}
              href="/coming-soon"
            />
            <PropertyCard
              image="/images/f11.jpeg"
              title="Town Houses"
              description="An elegant 3-bedroom townhouse in a gated community."
              price={550000}
              beds={3}
              baths={2.5}
              href="/property/canvas-house"
            />
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section id="communities" className="py-20 bg-[#141414]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={communitiesRef}
            variants={fadeInUp}
            initial="initial"
            animate={communitiesInView ? "animate" : "initial"}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#CDB937] mb-4">
              Our Communities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience vibrant neighborhoods designed for connection,
              convenience, and tranquility.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                communitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src="/images/com.png"
                  alt="Waterford Estates"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">
                  Waterford Estates
                </h4>
                <p className="text-gray-400 mb-4">
                  A suburban oasis with tree-lined roads and minimal traffic,
                  perfect for a peaceful lifestyle.
                </p>
                <p className="text-[#CDB937] font-bold mb-4">$1,000,000</p>
                <Button href="/communities/waterford" className="w-full">
                  View Community
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                communitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src="/images/con3.png"
                  alt="Langdon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">Langdon</h4>
                <p className="text-gray-400 mb-4">
                  A scenic retreat with quiet roads and rural charm, blending
                  convenience with serenity.
                </p>
                <p className="text-[#CDB937] font-bold mb-4">$650,000</p>
                <Button href="/communities/langdon" className="w-full">
                  View Community
                </Button>
              </div>
            </motion.div>
            {/* Add more community cards as needed */}
          </div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={communitiesInView ? "animate" : "initial"}
            className="text-center mt-12"
          >
            <Button
              href="/communities"
              className="px-8 py-4 inline-flex items-center"
            >
              Explore All Communities <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <motion.div
            ref={testimonialRef}
            variants={fadeInUp}
            initial="initial"
            animate={testimonialInView ? "animate" : "initial"}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#CDB937] mb-4">
              Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our valued clients about their exceptional experiences
              with Artreum Homes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  testimonialInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.1, hover: { duration: 0.1 } }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#222222] rounded-lg transform hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#CDB937] fill-[#CDB937] mr-1"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-[#CDB937] mb-4">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
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

      <Footer />
    </div>
  );
};

export default HomePage;
