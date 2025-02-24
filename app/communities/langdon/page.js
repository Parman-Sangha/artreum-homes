"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Facebook, Instagram, Twitter } from "lucide-react";

const getBackgroundPattern = (color) => {
  return `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${color}' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
};

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

const Langdon = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const pathwaysImages = [
    { path: "/images/Lang3.jpg", dimension: "640x516" },
    { path: "/images/Lang4.jpg", dimension: "640x411" },
    { path: "/images/Lang5.jpg", dimension: "1200x1200" },
    { path: "/images/Lang6.jpg", dimension: "640x640" },
  ];

  const quadBallImages = [
    { path: "/images/Lang8.jpg", dimension: "1200x628" },
    { path: "/images/Lang9.jpg", dimension: "1200x628" },
    { path: "/images/Lang10.jpg", dimension: "1200x628" },
    { path: "/images/Lang11.jpg", dimension: "1200x675" },
  ];

  const golfCourseImages = [
    { path: "/images/Lang12.jpg", dimension: "1200x675" },
    { path: "/images/Lang13.jpg", dimension: "1200x675" },
    { path: "/images/Lang14.jpg", dimension: "1200x675" },
    { path: "/images/Lang15.jpg", dimension: "1200x675" },
    { path: "/images/Lang16.jpg", dimension: "1200x675" },
    { path: "/images/Lang17.jpg", dimension: "1200x675" },
  ];

  const smallTownImages = [
    { path: "/images/Lang18.jpg", dimension: "1200x675" },
    { path: "/images/Lang19.jpg", dimension: "1200x675" },
    { path: "/images/Lang20.jpg", dimension: "1200x675" },
    { path: "/images/Lang21.jpg", dimension: "533x400" },
  ];

  const navItems = ["Home", "About Us", "Properties", "Communities"];

  const { ref: pathwaysRef, inView: pathwaysInView } = useInView({
    triggerOnce: true,
  });
  const { ref: mapRef, inView: mapInView } = useInView({ triggerOnce: true });
  const { ref: quadBallRef, inView: quadBallInView } = useInView({
    triggerOnce: true,
  });
  const { ref: golfCourseRef, inView: golfCourseInView } = useInView({
    triggerOnce: true,
  });
  const { ref: smallTownRef, inView: smallTownInView } = useInView({
    triggerOnce: true,
  });

  const ImageCarousel = ({ images, inView }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    useEffect(() => {
      resetTimeout();
      const timeout = setTimeout(
        () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
        5000
      );
      return () => {
        clearTimeout(timeout);
      };
    }, [images.length, currentIndex, resetTimeout]);

    return (
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg shadow-2xl">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].path || "/placeholder.svg"}
              alt={`Carousel image ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
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
                src="/images/logo2.png"
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

      {/* Hero Section with Logo Overlay */}
      <section className="relative h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/Lang2.jpg"
            alt="Langdon Community"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
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
              src="/images/Lang1.png"
              alt="Langdon Logo"
              width={600}
              height={174}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-20 left-0 right-0 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white drop-shadow-lg">
            Welcome to a community full of life, activity, and serenity.
          </h2>
        </motion.div>
      </section>

      {/* Pathways & Bike Trails Section */}
      <section
        ref={pathwaysRef}
        className="py-24 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: 'url("/images/Lang22.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pathwaysInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16 bg-black bg-opacity-70 p-8 rounded-lg"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#CDB937]">
              Pathways & Bike Trails
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Explore nature as you walk, run, or bike along the network of
              pathways just steps from your front door in Langdon. Bridges of
              Langdon offers everything your family needs, and has so much more
              for you to discover when you come for your first visit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={pathwaysInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageCarousel images={pathwaysImages} inView={pathwaysInView} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={pathwaysInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/images/Lang7.jpg"
                alt="Langdon Map"
                width={1300}
                height={1687}
                className="rounded-lg shadow-xl w-full h-auto opacity-90"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={pathwaysInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-black bg-opacity-70 p-8 rounded-lg"
            >
              <h3 className="text-2xl lg:text-4xl font-bold text-[#CDB937] mb-4">
                You'll love what you discover.
              </h3>
              <p className="text-2xl text-gray-300 leading-relaxed">
                Bridges of Langdon has been thoughtfully designed to offer
                something for everyone. From the amenities within the community
                to the surrounding town, Langdon has so much to give to its
                newest residents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quad Ball Diamonds Section */}
      <section
        ref={quadBallRef}
        className="py-24 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: 'url("/images/Lang25.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={quadBallInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16 bg-black bg-opacity-70 p-8 rounded-lg"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#CDB937]">
              Quad Ball Diamonds
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              To serve Langdon's thriving baseball community, the community is
              planning to build a 45 acre recreational site with four
              first-class ball diamonds, a kids play area, and a concession
              stand. The site will eventually include a High School and indoor
              recreation facility. Love baseball? Then you'll love Bridges of
              Langdon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={quadBallInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImageCarousel images={quadBallImages} inView={quadBallInView} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={quadBallInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="https://www.youtube.com/watch?v=rGl_f3BmOmg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#CDB937] text-black px-10 py-4 text-lg rounded-full font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Play className="mr-2 h-5 w-5" />
              View plans for the Quad Ball Diamond
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Boulder Creek Golf Course Section */}
      <section
        ref={golfCourseRef}
        className="py-24 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: 'url("/images/Lang23.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={golfCourseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16 bg-black bg-opacity-70 p-8 rounded-lg"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#CDB937]">
              Boulder Creek Golf Course
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Adjacent to the Boulder Creek Golf Course, Bridges of Langdon is
              the perfect community for those who want to play, practice, or
              just relax on the patio at a beautiful golf facility. Beyond being
              a fun course with great scenery, it's also the most casual golf
              course in southern Alberta!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={golfCourseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImageCarousel
              images={golfCourseImages}
              inView={golfCourseInView}
            />
          </motion.div>
        </div>
      </section>

      {/* Small Town Feel Section */}
      <section
        ref={smallTownRef}
        className="py-24 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: 'url("/images/Lang24.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={smallTownInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16 bg-black bg-opacity-70 p-8 rounded-lg"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-[#CDB937]">
              Small Town Feel
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Step outside the bustling city life and enjoy the small town feel
              of Langdon. Take advantage of nearby bike trails, golf courses and
              gorgeous pathways.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={smallTownInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImageCarousel images={smallTownImages} inView={smallTownInView} />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl">
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

export default Langdon;
