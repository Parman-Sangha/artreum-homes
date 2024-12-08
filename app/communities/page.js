import Link from "next/link";

const CommunitiesPage = () => {
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

      {/* Communities Section */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gold">Our Communities</h1>
        <p className="text-gray-400 mt-4">
          Discover the thriving communities we’ve developed for your comfort,
          convenience, and lifestyle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[
            {
              title: "Waterford Estates",
              details:
                "Tree-lined streets, minimal traffic, and a serene environment perfect for families.",
              price: "$1,000,000",
            },
            {
              title: "Langdon Meadows",
              details:
                "Open countryside, peaceful surroundings, and easy access to nearby towns.",
              price: "$650,000",
            },
            {
              title: "Sattlepeace",
              details:
                "A blend of urban and suburban with smooth access to main roads.",
              price: "$700,000",
            },
            {
              title: "Condridge Knights Bridge",
              details:
                "Scenic bridge views, efficient signage, and nearby parks and shops.",
              price: "$1,250,000",
            },
          ].map((community, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 border border-gold rounded-lg"
            >
              <h2 className="text-xl font-bold text-white">
                {community.title}
              </h2>
              <p className="text-gray-400 mt-2">{community.details}</p>
              <p className="text-gold font-bold mt-4">{community.price}</p>
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

export default CommunitiesPage;
