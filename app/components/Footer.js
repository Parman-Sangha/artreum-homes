"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const footerLinks = [
    {
      title: "Our Homes",
      links: [
        { name: "Front Drive Homes", href: "/front-drive-homes" },
        { name: "Laned Homes", href: "/laned-homes" },
        { name: "Town Houses", href: "/town-houses" },
        { name: "Custom Builds", href: "/custom-builds" },
        { name: "3D Modeler", href: "/3d-builder" },
      ],
    },
    {
      title: "Our Communities",
      links: [
        { name: "Waterford Estates", href: "/communities/waterford" },
        { name: "Langdon", href: "/communities/langdon" },
        { name: "Future Communities", href: "/communities" },
        { name: "Community Features", href: "/communities#features" },
        { name: "Location Map", href: "/communities#map" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Our Process", href: "/about#process" },
        { name: "Our Team", href: "/about#team" },
        { name: "Testimonials", href: "/about#testimonials" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Get in Touch", href: "/contact" },
        { name: "Book a Viewing", href: "/contact#viewing" },
        { name: "Request Brochure", href: "/contact#brochure" },
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Twitter, href: "https://x.com" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
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
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#CDB937] transition duration-300"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#e3cc50" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[#CDB937] text-black font-bold rounded-md hover:bg-[#e3cc50] transition duration-200"
                  type="submit"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 col-span-1 lg:col-span-4 gap-8">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-[#CDB937]">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="hover:text-[#CDB937] transition duration-200"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
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
                  whileHover={{ scale: 1.1, color: "#CDB937" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#CDB937] transition duration-200"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
