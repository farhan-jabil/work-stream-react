import React from "react";
import { FaBriefcase, FaUsers, FaCalendarAlt } from "react-icons/fa";

const UseCases = () => {
  return (
    <section className="bg-gray-100 py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Use Cases
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-12">
          Explore how Flexi Leave can be utilized across different work environments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="use-case-item bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
            <FaBriefcase className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Corporate Environments
            </h3>
            <p className="text-gray-700">
              Flexi Leave streamlines leave management for large organizations,
              ensuring consistent leave policies and efficient tracking of leave
              requests across multiple departments.
            </p>
          </div>

          <div className="use-case-item bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
            <FaUsers className="h-16 w-16 text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Small Teams
            </h3>
            <p className="text-gray-700">
              Perfect for small teams, Flexi Leave provides a simple and
              intuitive interface for managing leave, making it easy to handle
              requests and approvals without the need for complex systems.
            </p>
          </div>

          <div className="use-case-item bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
            <FaCalendarAlt className="h-16 w-16 text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Remote Workforces
            </h3>
            <p className="text-gray-700">
              Manage leave for remote employees effortlessly with Flexi Leave,
              ensuring that all team members are aligned, regardless of their
              physical location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
