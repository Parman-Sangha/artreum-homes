"use client";
import { useAuth } from "./context/AuthContext"; // Auth Context
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "./firebase/firebaseConfig"; // Import Firebase DB
import { collection, getDocs, addDoc } from "firebase/firestore"; // Firestore Methods
import MortgageCalculator from "/MortgageCalculator";


const HomePage = () => {
  
  const { user, logout } = useAuth();
  const [properties, setProperties] = useState([]);

    // Fetch Data from Firestore
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
          console.error("Error fetching properties: ", error);
        }
      };
  
      fetchProperties();
    }, []);
  
    // Function to Add a New Property
    const addProperty = async () => {
      try {
        await addDoc(collection(db, "properties"), {
          name: "New Home",
          price: 500000,
          location: "Toronto",
        });
        alert("Property Added!");
      } catch (error) {
        console.error("Error adding property: ", error);
      }
    };


    return (
     <div className="bg-[#141414] text-white">
       {/* Header Section */}
      <header className="bg-[#1A1A1A] text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-gold transition duration-200">
              <img
                src="images/logo2.png"
                alt="Artreum Homes"
                className="h-12"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 hidden md:block">
            <ul className="flex justify-center space-x-6 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-gold transition duration-200"
                  aria-current={
                    typeof window !== "undefined" &&
                    window.location.pathname === "/"
                      ? "page"
                      : undefined
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold transition duration-200"
                  aria-current={
                    typeof window !== "undefined" &&
                    window.location.pathname === "/about"
                      ? "page"
                      : undefined
                  }
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/property"
                  className="hover:text-gold transition duration-200"
                  aria-current={
                    typeof window !== "undefined" &&
                    window.location.pathname === "/property"
                      ? "page"
                      : undefined
                  }
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/communities"
                  className="hover:text-gold transition duration-200"
                  aria-current={
                    typeof window !== "undefined" &&
                    window.location.pathname === "/communities"
                      ? "page"
                      : undefined
                  }
                >
                  Communities
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact and Login/Logout Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="bg-[#333333] hover:bg-[#444444] text-gold font-bold px-4 py-2 rounded">Contact</Link>
            {user ? (
              <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            ) : (
              <Link href="/auth/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
            )}
           </div>
         </div>
         
        </header>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <button
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
     

      {/* Hero Section */}
      <section id="home" className="relative py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            Build Your Dream with{" "}
            <span className="text-[#CDB937]">Artreum Homes</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Building Dreams, Crafting Homes – Where Quality Meets Community.
          </p>
          <div className="mt-8 space-x-4">
            <Link
              href="/property"
              className="px-6 py-3 font-bold rounded-md shadow-md bg-[#CDB937] text-black hover:bg-[#b49b2e] transition duration-200"
            >
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border font-bold rounded-md hover:bg-gray-600 hover:text-white transition duration-200"
              style={{ borderColor: "#CDB937", color: "#CDB937" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8 text-white">What We Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Front Drive Homes */}
            <div className="rounded-lg shadow-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/f3.jpeg"
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
              <p className="font-bold mt-4 text-[#CDB937]">$1,000,000</p>
              <Link
                href="/property/front-drive-homes"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Laned Homes */}
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
              <p className="font-bold mt-4 text-[#CDB937]">$550,000</p>
              <Link
                href="/property/laned-homes"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Town Houses */}
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
              <p className="font-bold mt-4 text-[#CDB937]">$550,000</p>
              <Link
                href="/property/town-houses"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

   {/* Mortgage Calculator Section */}
      <section id="mortgage-calculator" className="py-20">
        <div className="container mx-auto px-6">
           <h3 className="text-4xl font-bold mb-8 text-white">Mortgage Calculator</h3>
           <MortgageCalculator />
        </div>
      </section>

      {/* Communities Section */}
      <section id="communities" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8 text-white">Communities</h3>
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
                Waterford Estates offers a suburban drive with tree-lined roads
                and minimal traffic.
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
                Langdon provides scenic open countryside roads, a perfect escape
                from city congestion.
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
              <h4 className="text-xl font-bold text-white">Langdon</h4>
              <p className="text-gray-400">
                Langdon provides scenic open countryside roads, a perfect escape
                from city congestion.
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
              <h4 className="text-xl font-bold text-white">Langdon</h4>
              <p className="text-gray-400">
                Langdon provides scenic open countryside roads, a perfect escape
                from city congestion.
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
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8 text-white">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-[#1A1A1A]">
              <p className="italic text-gray-400">
                &quot;Exceptional service! The team was friendly and
                professional.&quot;
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">- Wade Warren</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-[#1A1A1A]">
              <p className="italic text-gray-400">
                &quot;Highly reliable and efficient. Everything went
                smoothly.&quot;
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">- Emelie Thomson</p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-[#1A1A1A]">
              <p className="italic text-gray-400">
                &quot;Trusted advisors who made the buying process simple.&quot;
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">- Andrew Hudson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-12">
        <div className="container mx-auto text-gray-400 flex flex-col lg:flex-row lg:justify-between items-start space-y-8 lg:space-y-0">
          {/* Left Section: Logo, Navigation Links, and Newsletter */}
          <div className="w-full lg:w-1/2">
            {/* Logo */}
            <div className="mb-4">
              <img
                src="images/logo2.png"
                alt="Artreum Homes"
                className="h-12 mx-auto lg:mx-0"
              />
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col lg:flex-row lg:space-x-6 font-medium text-[#d1d5db] mb-6 lg:mb-0">
              <li>
                <Link href="/" className="text-white transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/property"
                  className="hover:text-white transition duration-200"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/communities"
                  className="hover:text-white transition duration-200"
                >
                  Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold text-[#CDB937] mb-2 pt-4">
                Subscribe to Our Newsletter
              </h4>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full sm:w-64 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-[#CDB937]"
                />
                <button className="px-4 py-2 bg-[#CDB937] text-black font-bold rounded-r-md hover:bg-[#e3cc50] transition duration-200 mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Section: Empty or Reserved for Additional Content */}
          <div className="lg:w-1/2 text-center lg:text-right"></div>
        </div>

        {/* Bottom Section: Social Media Links and Terms */}
        <div className="container mx-auto text-center mt-8">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/facebook-icon.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/instagram-icon.png"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/twitter-icon.png"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
          </div>

          {/* Terms & Conditions */}
          <div className="text-sm text-gray-500">
            <p>© 2025 Artreum Homes. All Rights Reserved.</p>
            <Link
              href="/terms"
              className="text-[#CDB937] hover:text-white transition duration-200"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
      </div>
    );
  
  
};


export default HomePage;