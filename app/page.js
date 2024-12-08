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
              href="/property"
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
              style={{ backgroundColor: "#1A1A1A" }}
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
                href="/property/front-drive-homes"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
              >
                Learn More
              </Link>
            </div>
            <div
              className="rounded-lg shadow-lg p-6"
              style={{ backgroundColor: "#1A1A1A" }}
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
                href="/property/laned-homes"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
              >
                Learn More
              </Link>
            </div>
            <div
              className="rounded-lg shadow-lg p-6"
              style={{ backgroundColor: "#1A1A1A" }}
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
                href="/property/town-houses"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section id="communities" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8 text-white">Communities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <h4 className="text-xl font-bold text-white">
                Waterford Estates
              </h4>
              <p className="text-gray-400">
                Waterford Estates offers a suburban drive with tree-lined roads
                and minimal traffic, creating a peaceful commute.
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                $1,000,000
              </p>
              <Link
                href="/communities/waterford-estates"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
              >
                View Community
              </Link>
            </div>
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <h4 className="text-xl font-bold text-white">Langdon</h4>
              <p className="text-gray-400">
                Langdon provides scenic open countryside roads, a perfect escape
                from city congestion.
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                $650,000
              </p>
              <Link
                href="/communities/langdon"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
              >
                View Community
              </Link>
            </div>
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <h4 className="text-xl font-bold text-white">Sattlepeace</h4>
              <p className="text-gray-400">
                The Sattlepeace commute blends urban and suburban elements with
                smooth access to main roads.
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                $700,000
              </p>
              <Link
                href="/communities/sattlepeace"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
              >
                View Community
              </Link>
            </div>
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <h4 className="text-xl font-bold text-white">
                Condridge - Knight's Bridge
              </h4>
              <p className="text-gray-400">
                Condridge offers city convenience with scenic bridge views over
                the waterway.
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                $1,250,000
              </p>
              <Link
                href="/communities/condridge"
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 block text-center"
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
            <div className="p-6" style={{ backgroundColor: "#1A1A1A" }}>
              <p className="italic text-gray-400">
                "Exceptional service! The team was friendly and professional."
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                - Wade Warren
              </p>
            </div>
            <div className="p-6" style={{ backgroundColor: "#1A1A1A" }}>
              <p className="italic text-gray-400">
                "Highly reliable and efficient. Everything went smoothly."
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                - Emelie Thomson
              </p>
            </div>
            <div className="p-6" style={{ backgroundColor: "#1A1A1A" }}>
              <p className="italic text-gray-400">
                "Trusted advisors who made the buying process simple."
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                - John Mason
              </p>
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
