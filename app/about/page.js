import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* Header Section */}
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Artreum Homes"
              className="h-12"
              width={48}
              height={48}
            />
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
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2024 Artreum Homes. All Rights Reserved. | Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
