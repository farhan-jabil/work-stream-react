import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600 flex items-center mb-4">
                <FaMapMarkerAlt className="mr-2" /> 1234 Example St, Dhaka,
                Bangladesh
              </p>
              <p className="text-gray-600 flex items-center mb-4">
                <FaPhoneAlt className="mr-2" /> +880-1234-567890
              </p>
              <p className="text-gray-600 flex items-center mb-4">
                <FaEnvelope className="mr-2" /> info@example.com
              </p>
              <p className="text-gray-600">
                We're here to help with any inquiries or support related to your
                leave management needs.
              </p>
            </div>

            <div>
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Quick Links
                </h3>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>
                    <a href="/" className="hover:text-gray-800">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-gray-800">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="hover:text-gray-800">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-gray-800">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <span className="text-gray-600 hover:text-gray-800">
                    <FaFacebookF className="w-6 h-6" />
                  </span>
                  <span className="text-gray-600 hover:text-gray-800">
                    <FaTwitter className="w-6 h-6" />
                  </span>
                  <span className="text-gray-600 hover:text-gray-800">
                    <FaInstagram className="w-6 h-6" />
                  </span>
                  <span className="text-gray-600 hover:text-gray-800">
                    <FaLinkedinIn className="w-6 h-6" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Our Services
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <div className="hover:text-gray-800">
                    Leave Application Management
                  </div>
                </li>
                <li>
                  <div className="hover:text-gray-800">
                    Real-Time Leave Tracking
                  </div>
                </li>
                <li>
                  <div className="hover:text-gray-800">
                    Leave Policy Compliance
                  </div>
                </li>
                <li>
                  <div className="hover:text-gray-800">
                    Reporting & Analytics
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-span-2">
              <h3 className="text-xl font-bold text-center text-gray-700 mb-4">
                Get in Touch
              </h3>
              <form className="bg-white p-6 border border-gray-300 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-gray-500 py-8 text-center">
          <p className="text-gray-600">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
