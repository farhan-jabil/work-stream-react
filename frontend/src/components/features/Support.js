import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLifeRing } from "react-icons/fa";

const Support = () => {
  return (
    <section id="support" className="bg-white py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Support
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-600 text-center">
          Here's what our users are saying about Flexi Leave.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="support-item bg-gray-100 p-8 rounded-xl shadow-xl flex flex-col items-center text-center">
            <FaPhoneAlt className="h-16 w-16 text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Phone Support
            </h3>
            <p className="text-gray-700">
              Reach out to our support team by phone for immediate assistance
              with any issues or inquiries.
            </p>
          </div>

          <div className="support-item bg-gray-100 p-8 rounded-xl shadow-xl flex flex-col items-center text-center">
            <FaEnvelope className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Email Support
            </h3>
            <p className="text-gray-700">
              Send us an email, and our support team will get back to you within
              24 hours with a detailed response.
            </p>
          </div>

          <div className="support-item bg-gray-100 p-8 rounded-xl shadow-xl flex flex-col items-center text-center">
            <FaLifeRing className="h-16 w-16 text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              24/7 Online Support
            </h3>
            <p className="text-gray-700">
              Access our online support portal anytime for helpful articles,
              FAQs, and live chat support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
