import Link from "next/link";

const CommunitiesPage = () => {
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
          alt="Communities"
          className="w-full h-[400px] object-cover"
        />
      </section>

      {/* Communities Section */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gold text-center mb-6">
          Explore Our Communities
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Discover the unique communities Artreum Homes has to offer. From
          serene suburban settings to vibrant urban landscapes, we have the
          perfect place for you to call home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Community 1 */}
          <div className="p-6 bg-gray-900 border border-gold rounded-lg">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>{" "}
            {/* Placeholder for Image */}
            <h3 className="text-xl font-bold text-white">Waterford Estates</h3>
            <p className="text-gray-400 mt-2">
              Waterford Estates offers a suburban drive with tree-lined roads
              and minimal traffic. The route feels calm, with light congestion
              at peak hours and well-placed detours. It’s ideal for those who
              enjoy peaceful, green surroundings, creating a pleasant,
              low-stress commute.
            </p>
            <p className="text-gold font-bold mt-4">$1,000,000</p>
            <Link href="/communities/waterford-estates">
              <span className="mt-4 px-4 py-2 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 block text-center">
                Learn More
              </span>
            </Link>
          </div>

          {/* Community 2 */}
          <div className="p-6 bg-gray-900 border border-gold rounded-lg">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>{" "}
            {/* Placeholder for Image */}
            <h3 className="text-xl font-bold text-white">Langdon</h3>
            <p className="text-gray-400 mt-2">
              Langdon offers a calm, scenic commute through open countryside,
              with minimal traffic and stops. The route provides wide, quiet
              roads and beautiful rural landscapes. It’s perfect for a relaxed
              start or end to your day, away from city congestion.
            </p>
            <p className="text-gold font-bold mt-4">$650,000</p>
            <Link href="/communities/langdon">
              <span className="mt-4 px-4 py-2 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 block text-center">
                Learn More
              </span>
            </Link>
          </div>

          {/* Community 3 */}
          <div className="p-6 bg-gray-900 border border-gold rounded-lg">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>{" "}
            {/* Placeholder for Image */}
            <h3 className="text-xl font-bold text-white">Sattlepeace</h3>
            <p className="text-gray-400 mt-2">
              Sattlepeace blends urban and suburban elements with smooth access
              to main roads. Traffic is moderate, with efficient signage and
              occasional scenic sections. It’s a balanced commute for work and
              leisure, with a mix of scenery and convenience.
            </p>
            <p className="text-gold font-bold mt-4">$700,000</p>
            <Link href="/communities/sattlepeace">
              <span className="mt-4 px-4 py-2 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 block text-center">
                Learn More
              </span>
            </Link>
          </div>

          {/* Community 4 */}
          <div className="p-6 bg-gray-900 border border-gold rounded-lg">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>{" "}
            {/* Placeholder for Image */}
            <h3 className="text-xl font-bold text-white">
              Condridge - Knights Bridge
            </h3>
            <p className="text-gray-400 mt-2">
              Condridge via Knights Bridge combines city convenience with scenic
              bridge views. Traffic is steady but manageable, and the drive is
              enriched with parks and shops along the way. It’s a great route
              for those who appreciate a balanced, semi-urban commute.
            </p>
            <p className="text-gold font-bold mt-4">$1,250,000</p>
            <Link href="/communities/condridge-knights-bridge">
              <span className="mt-4 px-4 py-2 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 block text-center">
                Learn More
              </span>
            </Link>
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

export default CommunitiesPage;
