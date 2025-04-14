"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#141414] text-gray-900 dark:text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#CDB937]">
              Terms & Conditions
            </h1>

            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-4">
                  By accessing and using the Artreum Homes website and services,
                  you agree to be bound by these Terms and Conditions. If you do
                  not agree to these terms, please do not use our website or
                  services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  2. Services and Products
                </h2>
                <p className="mb-4">
                  Artreum Homes provides home building and real estate services,
                  including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Custom home building</li>
                  <li>Pre-designed home packages</li>
                  <li>Property development</li>
                  <li>Community planning</li>
                  <li>3D modeling and visualization services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  3. Intellectual Property
                </h2>
                <p className="mb-4">
                  All content on this website, including but not limited to
                  text, graphics, logos, images, and software, is the property
                  of Artreum Homes and is protected by copyright and other
                  intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  4. User Responsibilities
                </h2>
                <p className="mb-4">Users agree to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use the website and services for lawful purposes only</li>
                  <li>
                    Not engage in any activity that disrupts or interferes with
                    the website
                  </li>
                  <li>
                    Not attempt to gain unauthorized access to any part of the
                    website
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  5. Limitation of Liability
                </h2>
                <p className="mb-4">
                  Artreum Homes shall not be liable for any direct, indirect,
                  incidental, special, or consequential damages resulting from
                  the use or inability to use the website or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting to the
                  website. Your continued use of the website constitutes
                  acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
                <p className="mb-4">
                  These terms shall be governed by and construed in accordance
                  with the laws of the Province of Alberta, Canada, without
                  regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  8. Dispute Resolution
                </h2>
                <p className="mb-4">
                  Any disputes arising from these terms shall be resolved
                  through arbitration in Calgary, Alberta, in accordance with
                  the rules of the Canadian Arbitration Association.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  9. Contact Information
                </h2>
                <p className="mb-4">
                  For any questions regarding these Terms & Conditions, please
                  contact us at:
                </p>
                <p className="mb-4">
                  Email: legal@artreumhomes.com
                  <br />
                  Phone: (123) 456-7890
                  <br />
                  Address: 123 Builder Street, Calgary, AB T2P 1J9
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
