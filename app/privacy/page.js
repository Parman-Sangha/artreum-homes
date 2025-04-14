"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
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
              Privacy Policy
            </h1>

            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  At Artreum Homes, we are committed to protecting your privacy
                  and ensuring the security of your personal information. This
                  Privacy Policy explains how we collect, use, and safeguard
                  your information when you visit our website or interact with
                  our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  2. Information We Collect
                </h2>
                <p className="mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Personal identification information (name, email address,
                    phone number)
                  </li>
                  <li>Property preferences and requirements</li>
                  <li>Financial information for mortgage applications</li>
                  <li>Website usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To provide and improve our services</li>
                  <li>
                    To communicate with you about our homes and communities
                  </li>
                  <li>To process your inquiries and requests</li>
                  <li>To personalize your experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  4. Information Sharing
                </h2>
                <p className="mb-4">
                  We do not sell your personal information to third parties. We
                  may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Financial institutions for mortgage processing</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your
                  personal information from unauthorized access, alteration,
                  disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Secure data storage and transmission</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on data protection</li>
                  <li>Access controls and authentication</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  7. Cookies and Tracking
                </h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience and collect information about how you
                  use our website. You can control cookie settings through your
                  browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the effective date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
                </p>
                <p className="mb-4">
                  Email: privacy@artreumhomes.com
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

export default PrivacyPolicyPage;
