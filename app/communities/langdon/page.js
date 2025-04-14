/* eslint-disable */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
import { useTheme } from "@/app/context/ThemeContext";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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
  const { theme, toggleTheme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreeToTerms: false,
  });

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

  const navItems = [
    "Home",
    "About Us",
    "Properties",
    "Communities",
    "3D Modeler",
  ];

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

    const resetTimeout = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    });

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
    <div className="min-h-screen transition-theme bg-white dark:bg-[#141414] text-gray-900 dark:text-white">
      <Navbar />

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
              <ArrowRight className="mr-2 h-5 w-5" />
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

      <Footer />
    </div>
  );
};

export default Langdon;
