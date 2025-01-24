import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#141414", color: "#ffffff" }}>
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

          {/* Contact Link */}
          <div className="ml-4">
            <Link
              href="/contact"
              className="bg-[#333333] hover:bg-[#444444] text-gold font-bold px-4 py-2 rounded transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

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
      </header>

      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/images/IMG_7698.png"
          alt="About Us"
          className="w-full h-[400px] object-cover shadow-lg"
          width={1200}
          height={400}
        />
      </section>

      {/* About Us Section */}
      <main className="container mx-auto px-6 py-12">
        <h1
          className="text-5xl font-bold text-center mb-6"
          style={{ color: "#CDB937" }}
        >
          About Us
        </h1>
        <p className="text-lg text-gray-400 text-center leading-relaxed">
          Welcome to Artreum Homes, where luxury meets lifestyle. We believe
          that finding a home is more than a transaction &ndash; it&apos;s a
          journey to discovering a space where your aspirations align with your
          everyday living. Our dedicated team combines industry expertise with a
          personalized touch to make each client&apos;s experience seamless,
          enjoyable, and rewarding.
        </p>

        <section className="text-center pt-6">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#CDB937" }}>
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <p className="italic text-gray-400">
                &quot;Exceptional service! The team was friendly and
                professional.&quot;
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                &ndash; Wade Warren
              </p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <p className="italic text-gray-400">
                &quot;Highly reliable and efficient. Everything went
                smoothly.&quot;
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                &ndash; Emelie Thomson
              </p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <p className="italic text-gray-400">
                &quot;Trusted advisors who made the buying process simple.&quot;
              </p>
              <p className="font-bold mt-4" style={{ color: "#CDB937" }}>
                &ndash; John Mason
              </p>
            </div>
          </div>
        </section>
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
                  className="text-white transition duration-200"
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

export default AboutPage;
