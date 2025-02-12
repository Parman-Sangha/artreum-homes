/* eslint-disable */

"use client";
import { useAuth } from "./context/AuthContext";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "./firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { BedDouble, Bath, House } from "lucide-react";

// Reusable components
const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";
  const variants = {
    primary: "bg-[#CDB937] text-black hover:bg-[#e3cc50]",
    secondary:
      "border border-[#CDB937] text-[#CDB937] hover:bg-gray-600 hover:text-white",
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

const PropertyCard = ({ image, title, description, price, href }) => (
  <div className="rounded-lg shadow-lg p-6 bg-[#1A1A1A]">
    <Image
      src={image}
      alt={title}
      width={400}
      height={300}
      className="h-48 w-full object-cover rounded-md mb-4"
    />
    <h4 className="text-xl font-bold text-white">{title}</h4>
    <p className="text-gray-400">{description}</p>
    <p className="font-bold mt-4 text-[#CDB937]">${price.toLocaleString()}</p>
    <Button href={href} className="mt-4 w-full">
      Learn More
    </Button>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="p-6 bg-[#1A1A1A]">
    <p className="italic text-gray-400">&quot;{quote}&quot;</p>
    <p className="font-bold mt-4 text-[#CDB937]">- {author}</p>
  </div>
);

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Property", "Communities"];

  return (
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
            priority
          />
        </Link>

        <nav className="hidden md:flex justify-center flex-1">
          <ul className="flex space-x-8 font-medium">
            {navItems.map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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

        <Button href="/contact">Contact Us</Button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label="Menu Toggle"
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
            />
          </svg>
        </button>
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
    <div className="bg-[#141414] text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Build Your Dream with{" "}
            <span className="text-[#CDB937]">Artreum Homes</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Building Dreams, Crafting Homes – Where Quality Meets Community.
          </p>
          <div className="mt-8 space-x-4">
            <Button href="/property">Browse Properties</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      {/* Properties Section */}
      <section className="py-20 bg-[#222222]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-[#CDB937]">
            What We Build
          </h2>
          <p className="text-gray-400 pb-4">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Artreum. Click "View 3D Model” to explore more
            details.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="rounded-lg shadow-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/Rendor 1.png"
                alt="Front Drive Homes"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">
                Front Drive Homes
              </h4>
              <p className="text-gray-400">
                A stunning 4-bedroom, 4-bathroom home in a peaceful suburban
                neighborhood.
              </p>
              <div className="flex items-center gap-2 mt-4 text-[#CDB937]">
                <House size={20} />
                <p className="font-bold">$1,000,000</p>
                <BedDouble size={20} />
                <span>4 Beds</span>
                <Bath size={20} />
                <span>4 Baths</span>
              </div>
              <button
                className="bg-[#CDB937] text-black px-40 py-2 rounded-md font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4"
                onClick={() =>
                  (window.location.href = "/property/front-drive-homes")
                }
              >
                Learn More
              </button>
            </div>

            {/* Property Card 2 */}
            <div className="rounded-lg shadow-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/f7.jpeg"
                alt="Laned Homes"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">Laned Homes</h4>
              <p className="text-gray-400">
                A chic and fully-furnished 2-bedroom apartment with panoramic
                city views.
              </p>
              <div className="flex items-center gap-2 mt-4 text-[#CDB937]">
                <House size={20} />
                <p className="font-bold">$550,000</p>
                <BedDouble size={20} />
                <span>2 Beds</span>
                <Bath size={20} />
                <span>2 Baths</span>
              </div>
              <button
                className="bg-[#CDB937] text-black px-40 py-2 rounded-md font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4"
                onClick={() => (window.location.href = "/property/laned-homes")}
              >
                Learn More
              </button>
            </div>

            {/* Property Card 3 */}
            <div className="rounded-lg shadow-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/f11.jpeg"
                alt="Town Houses"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">Town Houses</h4>
              <p className="text-gray-400">
                An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
                community.
              </p>
              <div className="flex items-center gap-2 mt-4 text-[#CDB937]">
                <House size={20} />
                <p className="font-bold">$550,000</p>
                <BedDouble size={20} />
                <span>3 Beds</span>
                <Bath size={20} />
                <span>2.5 Baths</span>
              </div>
              <button
                className="bg-[#CDB937]  text-black  px-40 py-2 rounded-md font-semibold hover:bg-[#e3cc50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4"
                onClick={() => (window.location.href = "/property/town-houses")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      ;{/* Communities Section */}
      <section id="communities" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-[#CDB937]">
            Communities
          </h2>
          <p className="text-gray-400 pb-4">
            Our communities blend tranquility, convenience, and connection.
            Designed with diverse lifestyles in mind, they offer green spaces,
            family-friendly amenities, and easy access to schools, shopping, and
            major roadways. Whether you seek a peaceful retreat or a vibrant
            neighborhood, our communities provide the perfect place to call
            home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Waterford Estates */}
            <div className="rounded-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/com.png"
                alt="Waterford Estates"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">
                Waterford Estates
              </h4>
              <p className="text-gray-400">
                Waterford Estates offers a suburban drive with tree-ined roads
                and minimal traffic. The route feels calm. with light congestion
                at peak hours and well-placed detours. Its ideal for those who
                enjoy peoceful green surroundings. creating a plecsant,
                low-stress commute. The scenic atmosphere hances the experience
                without major dekrys.
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">$1,000,000</p>
              <Link
                href="/communities/waterford-estates"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                View Community
              </Link>
            </div>

            {/* Langdon */}
            <div className="rounded-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/con3.png"
                alt="Langdon"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">Langdon</h4>
              <p className="text-gray-400">
                Langdon offers a calm, scenic commute tircugh open countryside,
                with minimal traffic and stops. The route provides wide, quiet
                roads and bacutiful rural landscopes Nearby towns are casily
                accessible. maintaining a small-town feel without sacrificing
                convenience. It's perfect for a relaxed start or end to your
                day, away from city congestion.
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">$650,000</p>
              <Link
                href="/communities/langdon"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                View Community
              </Link>
            </div>
            <div className="rounded-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/c1.jpeg"
                alt="Langdon"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">
                Conridge via Knight Bridge
              </h4>
              <p className="text-gray-400">
                Conridge via Knight Bridge combines city convenience with scenic
                bridge views over the waterway. Traffic is steady but
                manageable, and the drive is enriched with parks and shops along
                the way. The bridge adds a unique charm, making it both
                practical and visually enjoyable. It’s a great route for those
                who appreciate a balanced, semi-urban commute.
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">$650,000</p>
              <Link
                href="/communities/langdon"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                View Community
              </Link>
            </div>
            <div className="rounded-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/c2.jpeg"
                alt="Langdon"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">Sattlepeace</h4>
              <p className="text-gray-400">
                The Sattlepeace commute blends urban and suburban elements with
                smooth access to main roads. Traffic is moderate, with efficient
                signage and occasional scenic sections to keep it engaging.
                Detours and nearby amenities make the journey flexible. It’s a
                balanced commute for both work and leisure, with a mix of
                scenery and convenience.
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">$650,000</p>
              <Link
                href="/communities/langdon"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                View Community
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-[#222222]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-[#CDB937]">
            Testimonials
          </h2>
          <p className="text-gray-400 pb-4">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Artreum for their real estate
            needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Exceptional service! The team was friendly and professional."
              author="Wade Warren"
            />
            <TestimonialCard
              quote="Highly reliable and efficient. Everything went smoothly."
              author="Emelie Thomson"
            />
            <TestimonialCard
              quote="Trusted advisors who made the buying process simple."
              author="Andrew Hudson"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
