import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { images } from "../../utils/images";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;

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
        <ScrollLink to="hero" className="flex items-center p-4 lg:p-0 cursor-pointer">
          <img
            src={images.logo}
            alt="Work Roster Logo"
            className="h-20 mr-2 rounded-xl"
          />
        </ScrollLink>
        <ul className="font-medium hidden md:flex p-0 space-x-8">
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
        </ul>
        <div className="hidden md:flex">
          <Link to="/signInUp">
            <button
              type="button"
              className="relative overflow-hidden text-white bg-gradient-to-r from-green-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 transition-transform duration-500 ease-in-out group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 flex items-center justify-center">
                Login
              </span>
            </button>
          </Link>
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
          } w-full md:hidden bg-white bg-opacity-30 backdrop-blur-lg`}
          id="navbar-default"
        >
          <div className="flex flex-col justify-center items-center">
            <ul className="font-medium flex flex-col p-0 py-4 rounded-lg space-y-4 text-center">
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
            </ul>
            <Link to="/signInUp">
              <button
                type="button"
                className="relative overflow-hidden text-white bg-gradient-to-r from-green-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 transition-transform duration-500 ease-in-out group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 flex items-center justify-center">
                  Login
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
