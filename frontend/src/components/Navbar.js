import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" className="flex items-center">
          <img src="/logo.png" className="h-6 mr-3 sm:h-9" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Leave Management
          </span>
        </a>

        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} lg:block lg:flex lg:items-center lg:w-auto lg:space-x-8`}>
          <a
            href="/home"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/features"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/login"
            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 focus:outline-none"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 focus:outline-none"
          >
            Get started
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <ul className="flex flex-col mt-4 space-y-4 px-4 pb-4 border-t border-gray-200">
          <li>
            <a
              href="/home"
              className="block text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/features"
              className="block text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="block text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            >
              Log in
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            >
              Get started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
