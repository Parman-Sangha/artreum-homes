import Link from "next/link";

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">
            <Link href="/">
              <a className="hover:text-gold">Artreum Homes</a>
            </Link>
          </h1>
          <nav>
            <ul className="flex space-x-6 font-medium">
              <li>
                <Link href="/page">
                  <a className="hover:text-gold transition duration-200">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-gold transition duration-200">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/properties">
                  <a className="hover:text-gold transition duration-200">
                    Properties
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/communities">
                  <a className="hover:text-gold transition duration-200">
                    Communities
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-gold transition duration-200">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gold">Contact Us</h1>
        <p className="text-gray-400 mt-4">
          Have questions or want to learn more? We’re here to help.
        </p>
        <form className="bg-gray-900 p-6 rounded-lg mt-8 border border-gold">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-bold">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md mt-2"
              />
            </div>
            <div>
              <label className="block text-white font-bold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md mt-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-white font-bold">Message</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md mt-2"
              rows="5"
            ></textarea>
          </div>
          <button className="mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-md">
            Send Message
          </button>
        </form>
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

export default ContactPage;
