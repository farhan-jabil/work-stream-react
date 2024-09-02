import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { images } from "../utils/images";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold && !isSticky) {
        setIsSticky(true);
      } else if (scrollPosition <= scrollThreshold && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg text-[#12123E] border-gray-200 dark:bg-gray-900"
          : "bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 text-[#12123E] border-gray-200 dark:bg-gray-900"
      } ${isSticky ? "p-1" : ""} transition-all duration-2000`}
      style={{ zIndex: 1000 }}
    >
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4">
        <a href="/" className="flex items-center p-4 lg:p-0">
          <img src={images.logo} alt="Flexi Leave Logo" className="h-20 mr-2 rounded-xl" />
        </a>
        <ul className="font-medium hidden md:flex p-0 space-x-8">
          {currentPage === "/features" ? (
            <>
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  Home
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="features-1"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  Feature 1
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="features-2"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  Feature 2
                </ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  Pricing
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="testimonial"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  Testimonial
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="faq"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  FAQ
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                  activeClass="active"
                >
                  Contact
                </ScrollLink>
              </li>
            </>
          )}
        </ul>
        <div className="hidden md:flex space-x-4 items-center">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
            Login
          </button>
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition">
            Sign Up
          </button>
        </div>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-transparent hover:bg-transparent focus:ring-transparent focus:outline-none transition-transform duration-300 ease-in-out transform"
          style={{
            transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <span className="sr-only">Toggle mobile menu</span>
          <svg
            className="w-5 h-5 transition-opacity duration-300 ease-in-out"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 6L18 18M6 18L18 6"
                  : "M3 6h18M3 12h18M3 18h18"
              }
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 transition-max-h duration-300 ease-in-out"
              : "max-h-0 opacity-0 transition-max-h duration-300 ease-in-out"
          } w-full md:hidden bg-white`}
          id="navbar-default"
        >
          <div className="flex flex-col justify-center items-center">
            <ul className="font-medium flex flex-col p-0 py-4 rounded-lg space-y-4">
              {currentPage === "/features" ? (
                <>
                  <li>
                    <Link
                      onClick={toggleMobileMenu}
                      to="/"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={toggleMobileMenu}
                      to="features-1"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      Feature 1
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={toggleMobileMenu}
                      to="features-2"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      Feature 2
                    </ScrollLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <ScrollLink
                      onClick={toggleMobileMenu}
                      to="hero"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={toggleMobileMenu}
                      to="features"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      Features
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={toggleMobileMenu}
                      to="about"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={toggleMobileMenu}
                      to="pricing"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      Pricing
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={toggleMobileMenu}
                      to="testimonial"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      Testimonial
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={toggleMobileMenu}
                      to="faq"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      FAQ
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      onClick={toggleMobileMenu}
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="nav-link cursor-pointer hover:text-[#9191c4] focus:outline-none transition-colors duration-500 ease-in-out"
                      activeClass="active"
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </>
              )}
            </ul>
            <div className="flex flex-col items-center space-y-4 py-4">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
                Login
              </button>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
