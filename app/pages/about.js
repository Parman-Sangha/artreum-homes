import Link from "next/link";

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">
            <Link href="/">
              <span className="hover:text-gold">Artreum Homes</span>
            </Link>
          </h1>
          <nav>
            <ul className="flex space-x-6 font-medium">
              <li>
                <Link href="/">
                  <span className="hover:text-gold">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-gold">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/property">
                  <span className="hover:text-gold">Properties</span>
                </Link>
              </li>
              <li>
                <Link href="/communities">
                  <span className="hover:text-gold">Communities</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-gold">Contact</span>
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
          homes that reflect your style and personality.
        </p>
        {/* Add more content as needed */}
      </main>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto text-center">
          <h4 className="text-lg font-bold text-gold">Artreum Homes</h4>
          <p className="text-gray-400">
            Building dreams into reality with custom, high-quality homes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
