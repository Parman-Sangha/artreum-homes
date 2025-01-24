import Link from "next/link";
import Image from "next/image";

const communities = [
  {
    name: "Waterford Estates",
    description:
      "Waterford Estates offers a suburban drive with tree-lined roads and minimal traffic. The route feels calm, with light congestion at peak hours and well-placed detours. It’s ideal for those who enjoy peaceful, green surroundings, creating a pleasant, low-stress commute.",
    price: "$1,000,000",
    image: "/images/waterford-estates.jpg",
    link: "/communities/waterford-estates",
  },
  {
    name: "Langdon",
    description:
      "Langdon offers a calm, scenic commute through open countryside, with minimal traffic and stops. The route provides wide, quiet roads and beautiful rural landscapes. It’s perfect for a relaxed start or end to your day, away from city congestion.",
    price: "$650,000",
    image: "/images/langdon.jpg",
    link: "/communities/langdon",
  },
  {
    name: "Sattlepeace",
    description:
      "Sattlepeace blends urban and suburban elements with smooth access to main roads. Traffic is moderate, with efficient signage and occasional scenic sections. It’s a balanced commute for work and leisure, with a mix of scenery and convenience.",
    price: "$700,000",
    image: "/images/sattlepeace.jpg",
    link: "/communities/sattlepeace",
  },
  {
    name: "Condridge - Knights Bridge",
    description:
      "Condridge via Knights Bridge combines city convenience with scenic bridge views. Traffic is steady but manageable, and the drive is enriched with parks and shops along the way. It’s a great route for those who appreciate a balanced, semi-urban commute.",
    price: "$1,250,000",
    image: "/images/condridge-knights-bridge.jpg",
    link: "/communities/condridge-knights-bridge",
  },
];

const CommunitiesPage = () => {
  return (
    <div style={{ backgroundColor: "#141414", color: "#ffffff" }}>
      {/* Header Section */}
      <header className="bg-[#1A1A1A] text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            {/* Replace with your logo image */}
            <img src="images/logo2.png" alt="Artreum Homes" className="h-12" />
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

      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/images/c4.jpeg"
          alt="Communities"
          width={1920}
          height={400}
          className="w-full h-[400px] object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
          <h2 className="text-5xl font-bold mb-4">Explore Our Communities</h2>
          <p className="text-lg text-gray-400 mb-6">
            Discover the unique communities Artreum Homes has to offer. From
            serene suburban settings to vibrant urban landscapes, we have the
            perfect place for you to call home.
          </p>
          <Link
            href="#communities"
            className="px-6 py-3 bg-[#CDB937] text-black font-bold rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Browse Communities
          </Link>
        </div>
      </section>

      {/* Communities Section */}
      <section id="communities" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8 text-white">Communities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Waterford Estates */}
            <div className="rounded-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/com.png"
                alt="Waterford Estates"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">
                Waterford Estates
              </h4>
              <p className="text-gray-400">
                Waterford Estates offers a suburban drive with tree-lined roads
                and minimal traffic.
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">$1,000,000</p>
              <Link
                href="/communities/waterford-estates"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                View Community
              </Link>
            </div>

            {/* Langdon */}
            <div className="rounded-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/con3.png"
                alt="Langdon"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">Langdon</h4>
              <p className="text-gray-400">
                Langdon provides scenic open countryside roads, a perfect escape
                from city congestion.
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">$650,000</p>
              <Link
                href="/communities/langdon"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                View Community
              </Link>
            </div>
            <div className="rounded-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/c1.jpeg"
                alt="Langdon"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">Langdon</h4>
              <p className="text-gray-400">
                Langdon provides scenic open countryside roads, a perfect escape
                from city congestion.
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">$650,000</p>
              <Link
                href="/communities/langdon"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                View Community
              </Link>
            </div>
            <div className="rounded-lg p-6 bg-[#1A1A1A]">
              <img
                src="/images/c2.jpeg"
                alt="Langdon"
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-white">Langdon</h4>
              <p className="text-gray-400">
                Langdon provides scenic open countryside roads, a perfect escape
                from city congestion.
              </p>
              <p className="font-bold mt-4 text-[#CDB937]">$650,000</p>
              <Link
                href="/communities/langdon"
                className="mt-4 px-4 py-2 bg-[#CDB937] text-black rounded-md hover:bg-[#b49b2e] block text-center transition duration-200"
              >
                View Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 mt-16">
        <div className="container mx-auto text-center text-gray-400">
          <h4 className="text-lg font-bold text-[#CDB937]">Artreum Homes</h4>
          <p>Building dreams into reality with custom, high-quality homes.</p>
          <div className="mt-8">
            <p>
              © 2024 Artreum Homes. All Rights Reserved. | Terms & Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunitiesPage;
