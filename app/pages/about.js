import Link from "next/link";

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">
            <Link href="/" className="hover:text-gold">
              Artreum Homes
            </Link>
          </h1>
          <nav>
            <ul className="flex space-x-6 font-medium">
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
                  href="/properties"
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
                  className="hover:text-gold transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Us Section */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gold">About Us</h1>
        <p className="mt-4 text-gray-400">
          At Artreum Homes, we specialize in creating high-quality, luxurious
          homes that reflect your style and personality. Our dedication to
          craftsmanship and attention to detail has made us a trusted name in
          the real estate industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-gray-900 border border-gold rounded-lg">
            <h2 className="text-xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-400 mt-2">
              To build dream homes that combine luxury, comfort, and quality for
              families and communities worldwide.
            </p>
          </div>
          <div className="p-6 bg-gray-900 border border-gold rounded-lg">
            <h2 className="text-xl font-bold text-white">Our Vision</h2>
            <p className="text-gray-400 mt-2">
              To redefine modern living with innovative designs and
              environmentally sustainable solutions.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto text-center">
          <h4 className="text-lg font-bold text-gold">Artreum Homes</h4>
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

export default AboutPage;
