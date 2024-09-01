import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 text-center">
          Our Pricing
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          Choose the plan that suits you best.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
          <div className="w-full max-w-sm bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold">Basic Plan</h3>
              <p className="mt-4 text-3xl font-extrabold">
                $19<span className="text-lg">/mo</span>
              </p>
              <p className="mt-4 text-indigo-200">
                Perfect for individuals starting out.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  10 Projects
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  5 GB Storage
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  Basic Support
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  Access to Community Forum
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  Regular Updates
                </li>
              </ul>

              <button className="mt-8 w-full py-3 bg-white text-indigo-600 font-bold rounded-md hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>
          </div>

          <div className="w-full max-w-sm bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg shadow-lg overflow-hidden mt-8 md:mt-0">
            <div className="p-8 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold">Standard Plan</h3>
              <p className="mt-4 text-3xl font-extrabold">
                $49<span className="text-lg">/mo</span>
              </p>
              <p className="mt-4 text-teal-200">
                Ideal for growing businesses.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  50 Projects
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  20 GB Storage
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  Priority Support
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  Access to Premium Tutorials
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  Monthly Webinars
                </li>
              </ul>

              <button className="mt-8 w-full py-3 bg-white text-teal-600 font-bold rounded-md hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>
          </div>

          <div className="w-full max-w-sm bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-lg shadow-lg overflow-hidden mt-8 md:mt-0">
            <div className="p-8 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold">Premium Plan</h3>
              <p className="mt-4 text-3xl font-extrabold">
                $99<span className="text-lg">/mo</span>
              </p>
              <p className="mt-4 text-pink-200">
                For advanced and large-scale needs.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  Unlimited Projects
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  100 GB Storage
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  24/7 Support
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  Dedicated Account Manager
                </li>
                <li className="flex items-center">
                  <MdCheckCircle className="text-lg mr-2" />
                  Custom Analytics Reports
                </li>
              </ul>

              <button className="mt-8 w-full py-3 bg-white text-pink-600 font-bold rounded-md hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
