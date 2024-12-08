import Link from "next/link";

const PropertiesPage = () => {
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

      {/* Hero Section */}
      <section className="relative">
        <img
          src="/path-to-your-hero-image.jpg"
          alt="Properties"
          className="w-full h-[400px] object-cover"
        />
      </section>

      {/* Properties Section */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gold text-center mb-6">
          Find Your Property
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Find the best Front-Garage Houses, Townhouses, and Laned Houses
          tailored for Modern Living.
        </p>

        {/* Front-Garage Houses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6">
            Front-Garage Houses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((house) => (
              <div
                key={house}
                className="p-6 bg-gray-900 border border-gold rounded-lg"
              >
                <div className="h-48 bg-gray-700 rounded mb-4"></div>{" "}
                {/* Placeholder for Image */}
                <h3 className="text-xl font-bold text-white">
                  House Name {house}
                </h3>
                <p className="text-gray-400">Description goes here.</p>
                <p className="text-gold font-bold mt-4">$Price</p>
                <Link href={`/property/front-garage-house-${house}`}>
                  <span className="mt-4 px-4 py-2 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 block text-center">
                    View Property Details
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Laned Houses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6">Laned Houses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((house) => (
              <div
                key={house}
                className="p-6 bg-gray-900 border border-gold rounded-lg"
              >
                <div className="h-48 bg-gray-700 rounded mb-4"></div>{" "}
                {/* Placeholder for Image */}
                <h3 className="text-xl font-bold text-white">
                  Laned House {house}
                </h3>
                <p className="text-gray-400">Description goes here.</p>
                <p className="text-gold font-bold mt-4">$Price</p>
                <Link href={`/property/laned-house-${house}`}>
                  <span className="mt-4 px-4 py-2 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 block text-center">
                    View Property Details
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Town Houses */}
        <section>
          <h2 className="text-3xl font-bold text-gold mb-6">Town Houses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((house) => (
              <div
                key={house}
                className="p-6 bg-gray-900 border border-gold rounded-lg"
              >
                <div className="h-48 bg-gray-700 rounded mb-4"></div>{" "}
                {/* Placeholder for Image */}
                <h3 className="text-xl font-bold text-white">
                  Town House {house}
                </h3>
                <p className="text-gray-400">Description goes here.</p>
                <p className="text-gold font-bold mt-4">$Price</p>
                <Link href={`/property/town-house-${house}`}>
                  <span className="mt-4 px-4 py-2 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 block text-center">
                    View Property Details
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>
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
