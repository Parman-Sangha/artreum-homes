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

      {/* Hero Section */}
      <section className="relative">
        <img
          src="/path-to-your-hero-image.jpg"
          alt="About Us"
          className="w-full h-[400px] object-cover"
        />
      </section>

      {/* About Us Section */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gold text-center mb-6">
          About Us
        </h1>
        <p className="mt-4 text-gray-400 text-center">
          Welcome to Artreum Homes, where luxury meets lifestyle. We believe
          that finding a home is more than a transaction – it's a journey to
          discovering a space where your aspirations align with your everyday
          living. Our dedicated team combines industry expertise with
          personalized touch to make each client's experience seamless,
          enjoyable, and rewarding.
        </p>

        <div className="flex justify-center items-center my-12">
          <img
            src="/path-to-your-logo-image.jpg"
            alt="Artreum Logo"
            className="h-24"
          />
        </div>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gold mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="p-6 bg-gray-900 border border-gold rounded-lg">
              <p className="italic text-gray-400">
                "Exceptional service! The team was friendly and professional."
              </p>
              <p className="mt-4 text-gold font-bold">- Wade Warren</p>
            </div>
            {/* Testimonial 2 */}
            <div className="p-6 bg-gray-900 border border-gold rounded-lg">
              <p className="italic text-gray-400">
                "Highly reliable and efficient. Everything went smoothly."
              </p>
              <p className="mt-4 text-gold font-bold">- Emelie Thomson</p>
            </div>
            {/* Testimonial 3 */}
            <div className="p-6 bg-gray-900 border border-gold rounded-lg">
              <p className="italic text-gray-400">
                "Trusted advisors who made the buying process simple."
              </p>
              <p className="mt-4 text-gold font-bold">- John Mason</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gold text-center mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 text-center">
            With years of industry experience and an eye for quality, we offer
            carefully curated portfolios of properties in sought-after
            neighborhoods. Our commitment goes above and beyond, not just
            meeting expectations but exceeding them. With our passion, market
            insights, and dedication, we empower you to make informed decisions
            confidently.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gold text-center mb-6">
            Your Dream Home Awaits
          </h2>
          <p className="text-gray-400 text-center">
            Let us help you find a space where comfort, elegance, and lifestyle
            harmonize. With our refined portfolio of homes, townhouses, and
            properties with customizable garage layouts, we’re here to make your
            vision of the perfect home a reality.
          </p>
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

export default AboutPage;
