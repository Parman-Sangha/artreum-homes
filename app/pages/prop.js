import React from "react";

const FindPropertyPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* Header Section */}
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Artreum Homes</h1>
          <nav>
            <ul className="flex space-x-6 font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-gold transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="hover:text-gold transition duration-200"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#communities"
                  className="hover:text-gold transition duration-200"
                >
                  Communities
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-gold transition duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gold font-bold transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative">
        <img
          src="/path-to-hero-image.jpg"
          alt="Find Your Property"
          className="w-full h-96 object-cover"
        />
      </section>

      {/* Find Your Property Section */}
      <section id="properties" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8 text-white">
            Find Your Property
          </h3>
          <p className="text-gray-400 mb-8">
            Explore our range of high-quality properties tailored to suit your
            lifestyle. Select from various categories of homes designed for your
            convenience and comfort.
          </p>

          {/* Front-Garage Houses */}
          <h4 className="text-2xl font-bold text-white mb-6">
            Front-Garage Houses
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Repeatable Property Cards */}
            {[
              {
                name: "The Cascade House",
                price: "$750,000",
                details: "3 bedrooms, 2 bathrooms, spacious living.",
                image: "/path-to-house1.jpg",
              },
              {
                name: "The CrestView",
                price: "$850,000",
                details: "4 bedrooms, 3 bathrooms, modern design.",
                image: "/path-to-house2.jpg",
              },
              {
                name: "The Ridgeway",
                price: "$950,000",
                details: "5 bedrooms, 4 bathrooms, luxurious space.",
                image: "/path-to-house3.jpg",
              },
            ].map((house, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-lg p-6"
                style={{ backgroundColor: "#1A1A1A", borderColor: "#CDB937" }}
              >
                <img
                  src={house.image}
                  alt={house.name}
                  className="rounded-md mb-4"
                />
                <h5 className="text-xl font-bold text-white">{house.name}</h5>
                <p className="text-gray-400">{house.details}</p>
                <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                  {house.price}
                </p>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Laned Houses */}
          <h4 className="text-2xl font-bold text-white mt-12 mb-6">
            Laned Houses
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "The Oasis",
                price: "$650,000",
                details: "2 bedrooms, 2 bathrooms, urban style.",
                image: "/path-to-house4.jpg",
              },
              {
                name: "The Arbor House",
                price: "$720,000",
                details: "3 bedrooms, 3 bathrooms, serene design.",
                image: "/path-to-house5.jpg",
              },
              {
                name: "The Meadowbrook",
                price: "$890,000",
                details: "4 bedrooms, 2 bathrooms, cozy family home.",
                image: "/path-to-house6.jpg",
              },
            ].map((house, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-lg p-6"
                style={{ backgroundColor: "#1A1A1A", borderColor: "#CDB937" }}
              >
                <img
                  src={house.image}
                  alt={house.name}
                  className="rounded-md mb-4"
                />
                <h5 className="text-xl font-bold text-white">{house.name}</h5>
                <p className="text-gray-400">{house.details}</p>
                <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                  {house.price}
                </p>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Town Houses */}
          <h4 className="text-2xl font-bold text-white mt-12 mb-6">
            Town Houses
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "The Shorebridge",
                price: "$950,000",
                details: "3 bedrooms, 3 bathrooms, elegant design.",
                image: "/path-to-house7.jpg",
              },
              {
                name: "The Terrace",
                price: "$780,000",
                details: "2 bedrooms, 2 bathrooms, contemporary living.",
                image: "/path-to-house8.jpg",
              },
              {
                name: "The Urban Row",
                price: "$920,000",
                details: "4 bedrooms, 3 bathrooms, urban luxury.",
                image: "/path-to-house9.jpg",
              },
            ].map((house, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-lg p-6"
                style={{ backgroundColor: "#1A1A1A", borderColor: "#CDB937" }}
              >
                <img
                  src={house.image}
                  alt={house.name}
                  className="rounded-md mb-4"
                />
                <h5 className="text-xl font-bold text-white">{house.name}</h5>
                <p className="text-gray-400">{house.details}</p>
                <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                  {house.price}
                </p>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div>
              <h4 className="text-lg font-bold" style={{ color: "#CDB937" }}>
                Artreum Homes
              </h4>
              <p className="text-gray-400">
                Building dreams into reality with custom, high-quality homes.
              </p>
            </div>
            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-bold text-white">Quick Links</h4>
              <ul className="text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#properties" className="hover:text-white">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#communities" className="hover:text-white">
                    Communities
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            {/* Newsletter Subscription */}
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

export default FindPropertyPage;
