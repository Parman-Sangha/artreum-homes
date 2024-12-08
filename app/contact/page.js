import Link from "next/link";

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">
            <Link href="/">
              <span className="hover:text-gold cursor-pointer">
                Artreum Homes
              </span>
            </Link>
          </h1>
          <nav>
            <ul className="flex space-x-8 font-medium">
              <li>
                <Link href="/">
                  <span className="hover:text-gold cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-gold cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/property">
                  <span className="hover:text-gold cursor-pointer">
                    Properties
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/communities">
                  <span className="hover:text-gold cursor-pointer">
                    Communities
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-gold cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-gold text-center mb-10">
          Get in Touch with Artreum
        </h1>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          At Artreum Homes, we’re here to answer your questions and provide
          solutions. Whether you're considering buying or selling a property,
          require information on our services, or simply want to connect, we’d
          love to hear from you.
        </p>

        {/* Contact Details */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-gold text-2xl">📧</span>
            </div>
            <p className="text-gray-400 mt-4">info@artreumhomes.com</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-gold text-2xl">📞</span>
            </div>
            <p className="text-gray-400 mt-4">+1-555-555-5555</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-gold text-2xl">🏢</span>
            </div>
            <p className="text-gray-400 mt-4">Main Headquarters</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-gold text-2xl">📸</span>
            </div>
            <p className="text-gray-400 mt-4">Instagram</p>
          </div>
        </div>

        {/* Contact Form */}
        <h2 className="text-4xl font-bold text-gold text-center mb-10">
          Let’s Connect
        </h2>
        <form className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto shadow-lg">
          <div className="flex flex-wrap gap-6 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-4 rounded bg-gray-800 text-gray-300 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-4 rounded bg-gray-800 text-gray-300 w-full"
            />
          </div>
          <div className="flex flex-wrap gap-6 mb-6">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-4 rounded bg-gray-800 text-gray-300 w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="flex-1 p-4 rounded bg-gray-800 text-gray-300 w-full"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="4"
            className="p-4 rounded bg-gray-800 text-gray-300 w-full mb-6"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Office Locations */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-gold text-center mb-10">
            Discover Our Office Locations
          </h2>
          <div className="flex flex-wrap gap-12 justify-center">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md text-center w-80">
              <h3 className="text-xl font-bold text-gold mb-4">
                Main Headquarters
              </h3>
              <p className="text-gray-400 mb-4">Coming Soon</p>
              <button className="px-4 py-2 bg-gold text-black rounded-md">
                Get Directions
              </button>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-md text-center w-80">
              <h3 className="text-xl font-bold text-gold mb-4">
                Suburban Office
              </h3>
              <p className="text-gray-400 mb-4">
                6630 36 St NE #116, Calgary, AB
              </p>
              <button className="px-4 py-2 bg-gold text-black rounded-md">
                Get Directions
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 mt-16">
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

export default ContactPage;
