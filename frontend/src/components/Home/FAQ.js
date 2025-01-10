import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import faqItems from "../../utils/faqItems";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq py-32">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-600 text-center">
          Choose the plan that suits you best.
        </p>
        <div className="space-y-5">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleOpen(index)}
                className={`w-full px-6 py-5 text-left text-lg font-semibold bg-gradient-to-r from-blue-100 to-green-100 text-gray-800 rounded-t-lg focus:outline-none flex justify-between items-center transition-all duration-300 ease-in-out`}
              >
                {item.question}
                <span
                  className={`transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                >
                  <FaChevronDown className="w-4 h-4 text-gray-500" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-white text-gray-700">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
