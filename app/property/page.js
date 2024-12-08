import Link from "next/link";

const PropertiesPage = () => {
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

      {/* Properties Section */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gold">Our Properties</h1>
        <p className="text-gray-400 mt-4">
          Explore our range of exquisite homes tailored to meet every lifestyle
          and preference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "Luxury Villa",
              price: "$1,500,000",
              details: "5-bedroom villa with a private pool.",
            },
            {
              title: "Modern Laned Home",
              price: "$750,000",
              details: "3-bedroom home with open-concept living.",
            },
            {
              title: "Spacious Townhouse",
              price: "$950,000",
              details: "4-bedroom townhouse in a gated community.",
            },
          ].map((property, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 border border-gold rounded-lg"
            >
              <h3 className="text-xl font-bold text-white">{property.title}</h3>
              <p className="text-gray-400 mt-2">{property.details}</p>
              <p className="text-gold font-bold mt-4">{property.price}</p>
              <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                Learn More
              </button>
            </div>
          ))}
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

export default PropertiesPage;
