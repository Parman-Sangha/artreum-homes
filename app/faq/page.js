"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of homes does Artreum Homes build?",
      answer:
        "Artreum Homes specializes in building high-quality homes including Front Drive Homes, Laned Homes, Town Houses, and Custom Builds. Each home is designed with modern living in mind, featuring premium finishes and energy-efficient features.",
    },
    {
      question: "Where are your communities located?",
      answer:
        "We currently have communities in Waterford Estates and Langdon, with more planned for the future. Our communities are strategically located to provide easy access to amenities, schools, and major transportation routes.",
    },
    {
      question: "What is included in the base price of a home?",
      answer:
        "Our base price includes high-quality standard features such as energy-efficient appliances, premium flooring, modern fixtures, and a professionally landscaped yard. We also offer various upgrade options to customize your home to your preferences.",
    },
    {
      question: "How long does it take to build a home?",
      answer:
        "The construction timeline typically ranges from 6 to 12 months, depending on the size and complexity of the home, as well as weather conditions. We'll provide you with a detailed timeline during the planning phase.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we work with several major financial institutions to help you secure the best mortgage rates. Our team can guide you through the financing process and connect you with our preferred lenders.",
    },
    {
      question: "Can I customize my home?",
      answer:
        "Absolutely! We offer various customization options through our 3D Modeler tool and design center. You can personalize your home's layout, finishes, and features to match your lifestyle and preferences.",
    },
    {
      question: "What is your warranty coverage?",
      answer:
        "All our homes come with a comprehensive warranty package that includes coverage for structural elements, mechanical systems, and workmanship. We stand behind the quality of our homes and are committed to your satisfaction.",
    },
    {
      question: "How do I schedule a viewing?",
      answer:
        "You can schedule a viewing through our website's contact form, by calling our sales office, or by visiting one of our show homes. Our sales team will be happy to arrange a convenient time for you.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#141414] text-gray-900 dark:text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#CDB937]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our homes, communities, and
              building process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#CDB937]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#CDB937]" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-gray-50 dark:bg-gray-900"
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
