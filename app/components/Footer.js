"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Button from "./Button";

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

export default Footer;
