import React from "react";
import { FaBullseye, FaLightbulb, FaHandshake, FaHistory } from "react-icons/fa";

const About = () => {
  return (
    <div className="about py-32 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 text-center">
          About Us
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-600 text-center">
          We are dedicated to providing the best leave management solutions for organizations of all sizes. Our platform is designed to simplify and streamline the process of managing employee leave, ensuring that your team remains productive and well-informed.
        </p>

        <div className="flex flex-col md:flex-row items-stretch justify-between mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0 px-4 flex flex-col items-center text-center">
            <FaBullseye className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to empower organizations with a robust leave management system that is easy to use, highly customizable, and designed to enhance productivity. We strive to provide a seamless experience for both employers and employees.
            </p>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0 px-4 flex flex-col items-center text-center">
            <FaLightbulb className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">Our Vision</h3>
            <p className="text-gray-700">
              We envision a world where managing leave is no longer a burden, but a streamlined and efficient process. We aim to continuously innovate and improve our platform to meet the evolving needs of modern workplaces.
            </p>
          </div>
          <div className="md:w-1/3 px-4 flex flex-col items-center text-center">
            <FaHandshake className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">Our Values</h3>
            <p className="text-gray-700">
              Integrity, transparency, and commitment are at the core of everything we do. We are dedicated to creating a positive impact on both our clients and their employees.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaHistory className="text-blue-600 text-6xl mb-4" />
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">Our History</h3>
          <p className="text-gray-700 max-w-2xl">
            Founded in 2010, we have over a decade of experience in developing cutting-edge solutions for leave management. Our journey has been one of continuous innovation, driven by a passion for excellence and a commitment to improving workplaces worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
