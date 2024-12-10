import Link from "next/link";

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* Header Section */}
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            {/* Replace with your logo image */}
            <img src="/logo.png" alt="Artreum Homes" className="h-12" />
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

      {/* Main Section */}
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-5xl font-bold text-[#CDB937] text-center mb-10">
          Get in Touch with Artreum
        </h1>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          At Artreum Homes, we&rsquo;re here to answer your questions and
          provide solutions. Whether you&rsquo;re considering buying or selling
          a property, require information on our services, or simply want to
          connect, we&rsquo;d love to hear from you.
        </p>

        {/* Contact Details */}
        <div className="flex flex-wrap justify-center gap-12 mb-16 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-[#1A1A1A] rounded-full flex items-center justify-center">
              <span className="text-[#CDB937] text-2xl">📧</span>
            </div>
            <p className="text-gray-400 mt-4">info@artreumhomes.com</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-[#1A1A1A] rounded-full flex items-center justify-center">
              <span className="text-[#CDB937] text-2xl">📞</span>
            </div>
            <p className="text-gray-400 mt-4">+1-555-555-5555</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-[#1A1A1A] rounded-full flex items-center justify-center">
              <span className="text-[#CDB937] text-2xl">🏢</span>
            </div>
            <p className="text-gray-400 mt-4">Main Headquarters</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-[#1A1A1A] rounded-full flex items-center justify-center">
              <span className="text-[#CDB937] text-2xl">📸</span>
            </div>
            <p className="text-gray-400 mt-4">Instagram</p>
          </div>
        </div>

        {/* Contact Form */}
        <h2 className="text-4xl font-bold text-[#CDB937] text-center mb-10">
          Let&rsquo;s Connect
        </h2>
        <form className="bg-[#1A1A1A] p-8 rounded-lg mx-auto shadow-lg w-full max-w-3xl">
          <div className="flex flex-wrap gap-6 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-4 rounded bg-[#1A1A1A] text-gray-300 w-full border-2 border-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-4 rounded bg-[#1A1A1A] text-gray-300 w-full border-2 border-black"
            />
          </div>
          <div className="flex flex-wrap gap-6 mb-6">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-4 rounded bg-[#1A1A1A] text-gray-300 w-full border-2 border-black"
            />
            <input
              type="text"
              placeholder="Phone"
              className="flex-1 p-4 rounded bg-[#1A1A1A] text-gray-300 w-full border-2 border-black"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="4"
            className="p-4 rounded bg-[#1A1A1A] text-gray-300 w-full mb-6 border-2 border-black"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#CDB937] text-black font-bold rounded-md hover:bg-yellow-600 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Office Locations */}
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#CDB937] text-center mb-10">
            Discover Our Office Locations
          </h2>
          <div className="flex flex-wrap gap-12 justify-center">
            <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-md text-center w-80">
              <h3 className="text-xl font-bold text-[#CDB937] mb-4">
                Main Headquarters
              </h3>
              <p className="text-gray-400 mb-4">Coming Soon</p>
              <button className="px-4 py-2 bg-[#CDB937] text-black rounded-md">
                Get Directions
              </button>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-md text-center w-80">
              <h3 className="text-xl font-bold text-[#CDB937] mb-4">
                Suburban Office
              </h3>
              <p className="text-gray-400 mb-4">
                6630 36 St NE #116, Calgary, AB
              </p>
              <button className="px-4 py-2 bg-[#CDB937] text-black rounded-md">
                Get Directions
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 mt-16">
        <div className="container mx-auto text-center">
          <h4 className="text-lg font-bold text-[#CDB937]">Artreum Homes</h4>
          <p className="text-gray-400">
            Building dreams into reality with custom, high-quality homes.
          </p>
          <div className="mt-8 text-gray-400">
            © 2024 Artreum Homes. All Rights Reserved. | Terms & Conditions
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
