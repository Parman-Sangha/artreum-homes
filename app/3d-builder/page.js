"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

// Button Component
const Button = ({ children, href, className = "", ...props }) => {
  const baseStyle =
    "bg-[#CDB937] text-black px-6 py-2 rounded-md hover:bg-[#B5A230] transition-colors duration-300";

  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

const navItems = [
  "Home",
  "About Us",
  "Properties",
  "Communities",
  "3D Modeler",
];

const BuilderPage = () => {
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
                        : item === "3D Modeler"
                        ? "/3d-builder"
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

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <Image
            src="/images/3d-builder-hero.jpg"
            alt="3D Modeler"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="font-serif text-5xl md:text-6xl font-bold mb-6"
          >
            Build Your Dream Home in 3D
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8"
          >
            Design, customize, and visualize every detail of your future home in
            stunning realism.
          </motion.p>
          <motion.div variants={fadeIn} initial="initial" animate="animate">
            <Button className="px-8 py-4 text-lg">Launch 3D Modeler</Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-[#CDB937] mb-4">
              Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our 3D home modeler
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Realistic Visualization",
                description:
                  "See your home come to life with photorealistic 3D rendering",
                icon: "🎨",
              },
              {
                title: "Customizable Design",
                description:
                  "Modify layouts, materials, and finishes to match your vision",
                icon: "🏠",
              },
              {
                title: "Instant Feedback",
                description:
                  "Get real-time updates on design changes and costs",
                icon: "⚡",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#222222] p-8 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#CDB937] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuilderPage;
