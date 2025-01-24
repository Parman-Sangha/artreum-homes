import Link from "next/link";

const PropertiesPage = () => {
  const properties = [
    { type: "Front-Garage Houses", prefix: "front-garage-house" },
    { type: "Laned Houses", prefix: "laned-house" },
    { type: "Town Houses", prefix: "town-house" },
  ];

  const houseItems = [1, 2, 3];

  const PropertyCard = ({ house, type, prefix }) => (
    <div className="p-6 bg-[#1A1A1A] border border-gray-700 rounded-lg hover:shadow-2xl transition duration-300">
      <div className="h-48 bg-gray-700 rounded mb-4"></div>
      <h3 className="text-xl font-bold text-white mb-2">
        {type} {house}
      </h3>
      <p className="text-gray-400 mb-4">Description goes here.</p>
      <p className="text-gold font-bold mb-4">$Price</p>
      <Link href={`/property/${prefix}-${house}`}>
        <span className="block w-full px-6 py-3 bg-[#CDB937] text-black font-bold rounded-md text-center hover:bg-yellow-600 transition duration-200">
          View Property Details
        </span>
      </Link>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#141414", color: "#ffffff" }}>
      {/* Header Section */}
      <header className="bg-[#1A1A1A] text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            {/*logo image */}
            <img src="images/logo2.png" alt="Artreum Homes" className="h-12" />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 hidden md:block">
            <ul className="flex justify-center space-x-6 font-medium">
              <li>
                <Link
                  href="/"
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
            </ul>
          </nav>

          {/* Contact Link */}
          <div className="ml-4">
            <Link
              href="/contact"
              className="text-gold font-bold transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            {/* Replace with your logo image */}
            <img src="/logo.png" alt="Artreum Homes" className="h-12" />
          </div>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation (Hidden by default) */}
        <div className="md:hidden hidden">
          <ul className="space-y-4 text-center py-4">
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="/images/c3.jpeg"
          alt="Properties"
          className="w-full h-[400px] object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-4">Find Your Dream Property</h2>
          <p className="text-lg text-gray-400 mb-6">
            Explore our modern homes designed for comfort and style.
          </p>
          <Link
            href="#properties"
            className="px-6 py-3 bg-[#CDB937] text-black font-bold rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Browse Properties
          </Link>
        </div>
      </section>

      {/* Properties Section */}
      <main className="container mx-auto px-6 py-12" id="properties">
        <h1 className="text-5xl font-bold text-[#CDB937] text-center mb-6">
          Explore Our Properties
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Find the best Front-Garage Houses, Townhouses, and Laned Houses
          tailored for Modern Living.
        </p>

        {properties.map(({ type, prefix }) => (
          <section key={type} className="mb-12">
            <h2 className="text-3xl font-bold text-[#CDB937] mb-6">{type}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {houseItems.map((house) => (
                <PropertyCard
                  key={house}
                  house={house}
                  type={type}
                  prefix={prefix}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
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
                <Link
                  href="/"
                  className="hover:text-white transition duration-200"
                >
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
                  className="text-white transition duration-200"
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

export default PropertiesPage;
