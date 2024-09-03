import React from "react";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <div className="features py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          Key Features
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-600">
          Discover the powerful tools designed to simplify your leave management
          process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="feature-item bg-gradient-to-r from-green-100 via-blue-50 to-blue-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 min-h-[300px] flex items-center justify-center text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Automated Requests
              </h3>
              <p className="text-gray-700">
                Streamline the leave request process with automated workflows.
              </p>
            </div>
          </div>
          <div className="feature-item bg-gradient-to-r from-green-100 via-blue-50 to-blue-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 min-h-[300px] flex items-center justify-center text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Real-Time Tracking
              </h3>
              <p className="text-gray-700">
                Keep track of leave balances and approvals in real time.
              </p>
            </div>
          </div>
          <div className="feature-item bg-gradient-to-r from-green-100 via-blue-50 to-blue-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 min-h-[300px] flex items-center justify-center text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Comprehensive Reports
              </h3>
              <p className="text-gray-700">
                Generate detailed reports to monitor leave trends and patterns.
              </p>
            </div>
          </div>
          <div className="feature-item bg-gradient-to-r from-green-100 via-blue-50 to-blue-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 min-h-[300px] flex items-center justify-center text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Customizable Policies
              </h3>
              <p className="text-gray-700">
                Tailor leave policies to fit your organization’s needs.
              </p>
            </div>
          </div>
          <div className="feature-item bg-gradient-to-r from-green-100 via-blue-50 to-blue-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 min-h-[300px] flex items-center justify-center text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                User-Friendly Interface
              </h3>
              <p className="text-gray-700">
                Navigate through the system with ease using an intuitive
                interface.
              </p>
            </div>
          </div>
          <div className="feature-item bg-gradient-to-r from-green-100 via-blue-50 to-blue-100 p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 min-h-[300px] flex items-center justify-center text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Notifications & Alerts
              </h3>
              <p className="text-gray-700">
                Receive timely notifications and alerts for pending actions and
                approvals.
              </p>
            </div>
          </div>
        </div>

        <Link to="/features">
          <button
            type="button"
            className="relative overflow-hidden text-white bg-gradient-to-r from-green-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 transition-transform duration-500 ease-in-out group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 flex items-center justify-center">
              See All Features
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureSection;
