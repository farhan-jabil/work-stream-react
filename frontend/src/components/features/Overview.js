import React from "react";
import { FaCheckCircle, FaChartBar, FaCogs, FaUserCheck, FaClipboardList, FaBell } from "react-icons/fa";

const Overview = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 via-green-50 to-white opacity-50" />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-xl text-gray-700">
            Managing leave requests efficiently is crucial for any organization.
            Flexi Leave offers a comprehensive Leave Management System designed
            to simplify and streamline the entire process. Whether you're
            managing a small team or a large workforce, Flexi Leave provides the
            tools necessary to handle leave requests, approvals, and tracking in
            a seamless and organized manner.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Key Features</h3>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-start space-x-3">
              <FaClipboardList className="text-blue-600 text-2xl mt-1" />
              <div>
                <strong className="font-medium text-gray-900">Automated Leave Requests:</strong> 
                <p>Employees can easily submit leave requests, which are automatically routed to the appropriate manager for approval.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <FaUserCheck className="text-green-600 text-2xl mt-1" />
              <div>
                <strong className="font-medium text-gray-900">Real-Time Tracking:</strong> 
                <p>Managers can track leave requests in real time, ensuring that they have up-to-date information on employee availability.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <FaChartBar className="text-yellow-600 text-2xl mt-1" />
              <div>
                <strong className="font-medium text-gray-900">Comprehensive Reporting:</strong> 
                <p>Generate detailed reports on leave usage and trends to help make informed decisions.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <FaCogs className="text-purple-600 text-2xl mt-1" />
              <div>
                <strong className="font-medium text-gray-900">Customizable Leave Policies:</strong> 
                <p>Tailor leave policies to fit the specific needs of your organization, including different leave types and accrual methods.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <FaCheckCircle className="text-teal-600 text-2xl mt-1" />
              <div>
                <strong className="font-medium text-gray-900">User-Friendly Interface:</strong> 
                <p>The system is designed with ease of use in mind, making it accessible for all employees regardless of technical proficiency.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <FaBell className="text-red-600 text-2xl mt-1" />
              <div>
                <strong className="font-medium text-gray-900">Notifications & Alerts:</strong> 
                <p>Receive timely notifications and alerts for upcoming leave requests, approvals, and system updates to stay informed and responsive.</p>
              </div>
            </li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 text-center mt-12">
          Flexi Leave empowers both employees and managers by providing a
          transparent and efficient system for managing leave. It reduces the
          administrative burden, minimizes errors, and ensures that leave is
          managed in a way that is fair and consistent.
        </p>
      </div>
    </section>
  );
};

export default Overview;
