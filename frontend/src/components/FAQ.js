import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'What is your return policy?',
      answer: `
        Our return policy allows you to return items within 30 days of purchase. 
        To initiate a return, please contact our customer service team with your order number and reason for return. 
        We will provide you with a return shipping label and instructions on how to send back your item. 
        Once we receive the returned item, we will process your refund within 7-10 business days. 
        Please note that items must be in their original condition and packaging to be eligible for a return. 
        Refunds will be issued to the original payment method, and shipping costs are non-refundable.
      `,
    },
    {
      question: 'How can I track my order?',
      answer: `
        You can track your order status through the "My Orders" section on our website. 
        Once your order has been shipped, you will receive a confirmation email with a tracking number. 
        Use this tracking number to check the delivery status of your package. 
        If you do not receive the confirmation email or cannot find your tracking number, please contact our customer support team for assistance. 
        Our system updates the tracking information regularly, so you can stay informed about the estimated delivery time of your order.
      `,
    },
    {
      question: 'Do you offer international shipping?',
      answer: `
        Yes, we offer international shipping to most countries. 
        International shipping rates and delivery times vary based on the destination and shipping method selected at checkout. 
        Please be aware that customs fees, import duties, and taxes may apply depending on your country's regulations, and these charges are the responsibility of the recipient. 
        Our shipping partners handle all international deliveries with care, and we provide tracking information so you can monitor your order's progress. 
        If you have any questions about international shipping, please contact our customer service team.
      `,
    },
    {
      question: 'What payment methods do you accept?',
      answer: `
        We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. 
        Additionally, we accept payments through PayPal for added convenience and security. 
        During checkout, you can select your preferred payment method and enter the required information. 
        For your protection, all payment information is encrypted and processed securely. 
        Please ensure that your billing address matches the address on file with your payment provider to avoid any delays in processing your order. 
        If you encounter any issues with payment, our support team is available to assist you.
      `,
    },
    {
      question: 'Can I change or cancel my order?',
      answer: `
        Orders can be changed or canceled within 1 hour of placement. 
        If you need to make any changes or cancel your order, please contact our customer service team immediately. 
        Please note that once your order has been processed and shipped, we cannot guarantee any changes. 
        Shipping charges are non-refundable, and customers are responsible for return shipping costs unless the item is defective or an error occurred with the order. 
        Additionally, we do not accept returns on final sale items, personalized products, or gift cards. 
        Please review our full return policy on our website or contact us for further assistance.
      `,
    },
  ];

  return (
    <div className="faq py-32">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleOpen(index)}
                className={`w-full px-6 py-4 text-left text-lg font-semibold bg-gradient-to-r from-blue-100 to-green-100 text-gray-800 rounded-t-lg focus:outline-none flex justify-between items-center transition-all duration-300 ease-in-out`}
              >
                {item.question}
                <span className={`transition-transform duration-300 ease-in-out ${openIndex === index ? 'transform rotate-180' : ''}`}>
                  <FaChevronDown className="w-6 h-6 text-gray-500" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-screen' : 'max-h-0'
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
