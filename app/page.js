import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* Header Section */}
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Artreum Homes</h1>
          <nav>
            <ul className="flex space-x-6 font-medium">
              <li>
                <Link
                  href="/page"
                  className="hover:text-gold transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/property"
                  className="hover:text-gold transition duration-200"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/communities"
                  className="hover:text-gold transition duration-200"
                >
                  Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gold font-bold transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            Build Your Dream with{" "}
            <span style={{ color: "#CDB937" }}>Artreum Homes</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Building Dreams, Crafting Homes – Where Quality Meets Community.
          </p>
          <div className="mt-8 space-x-4">
            <Link
              href="/properties"
              className="px-6 py-3 font-bold rounded-md shadow-md hover:bg-gray-600 hover:text-white transition duration-200"
              style={{ backgroundColor: "#1A1A1A", color: "#ffffff" }}
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
            <div
              className="rounded-lg shadow-lg p-6"
              style={{ backgroundColor: "#1A1A1A", borderColor: "#CDB937" }}
            >
              <h4 className="text-xl font-bold text-white">
                Front Drive Homes
              </h4>
              <p className="text-gray-400">
                A stunning 4-bedroom, 4-bathroom home in a peaceful suburban
                neighborhood.
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                $1,000,000
              </p>
              <Link
                href="/properties/front-drive-homes"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
              >
                Learn More
              </Link>
            </div>
            <div
              className="rounded-lg shadow-lg p-6"
              style={{ backgroundColor: "#1A1A1A", borderColor: "#CDB937" }}
            >
              <h4 className="text-xl font-bold text-white">Laned Homes</h4>
              <p className="text-gray-400">
                A chic and fully-furnished 2-bedroom apartment with panoramic
                city views.
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                $550,000
              </p>
              <Link
                href="/properties/laned-homes"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
              >
                Learn More
              </Link>
            </div>
            <div
              className="rounded-lg shadow-lg p-6"
              style={{ backgroundColor: "#1A1A1A", borderColor: "#CDB937" }}
            >
              <h4 className="text-xl font-bold text-white">Town Houses</h4>
              <p className="text-gray-400">
                An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
                community.
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                $550,000
              </p>
              <Link
                href="/properties/town-houses"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold" style={{ color: "#CDB937" }}>
                Artreum Homes
              </h4>
              <p className="text-gray-400">
                Building dreams into reality with custom, high-quality homes.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Quick Links</h4>
              <ul className="text-gray-400">
                <li>
                  <Link href="/page" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/property" className="hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="hover:text-white">
                    Communities
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold" style={{ color: "#CDB937" }}>
                Subscribe
              </h4>
              <p className="text-gray-400">
                Stay updated with the latest from Artreum Homes.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-4 p-2 w-full bg-gray-800 text-white rounded-md"
              />
              <button className="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>
              © 2024 Artreum Homes. All Rights Reserved. | Terms & Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
