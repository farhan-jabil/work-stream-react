import React from "react";
import { FaUserCircle, FaTasks, FaCalendarAlt } from "react-icons/fa";

const AdminOverview = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 p-6 rounded-lg shadow-lg">
          <FaUserCircle className="text-4xl text-blue-800 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Active Employees</h3>
          <p className="text-gray-700 mt-2">150</p>
        </div>
        <div className="bg-gradient-to-r from-green-200 via-green-100 to-green-300 p-6 rounded-lg shadow-lg">
          <FaTasks className="text-4xl text-green-700 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Tasks Completed</h3>
          <p className="text-gray-700 mt-2">75</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 p-6 rounded-lg shadow-lg">
          <FaCalendarAlt className="text-4xl text-yellow-700 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>
          <p className="text-gray-700 mt-2">5</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Activity Feed</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>Emily Davis</strong> approved leave for <strong>Steve Rogers</strong> from 2024-09-08 to 2024-09-12.
            </p>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>Anna Lee</strong> requested leave for 2024-09-15.
            </p>
            <span className="text-sm text-gray-500">3 hours ago</span>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>Mike Johnson</strong> updated leave request status to "Approved".
            </p>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminOverview;
