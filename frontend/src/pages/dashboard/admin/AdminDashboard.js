import React from "react";
import { FaUser, FaClipboard, FaChartBar } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaUser className="text-5xl text-white mb-4" />
          <h3 className="text-2xl font-bold text-white">Employees</h3>
          <p className="text-white mt-2 text-lg">Total: 150</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaClipboard className="text-5xl text-white mb-4" />
          <h3 className="text-2xl font-bold text-white">Pending Requests</h3>
          <p className="text-white mt-2 text-lg">Total: 25</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaChartBar className="text-5xl text-white mb-4" />
          <h3 className="text-2xl font-bold text-white">Approved Leaves</h3>
          <p className="text-white mt-2 text-lg">Total: 100</p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-400 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaClipboard className="text-5xl text-white mb-4" />
          <h3 className="text-2xl font-bold text-white">Rejected Requests</h3>
          <p className="text-white mt-2 text-lg">Total: 10</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recent Activity
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>John Doe</strong> requested leave from{" "}
              <strong>2024-09-10</strong> to <strong>2024-09-12</strong>.
            </p>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>Jane Smith</strong> had a leave request approved for{" "}
              <strong>2024-09-05</strong>.
            </p>
            <span className="text-sm text-gray-500">4 hours ago</span>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>Mike Johnson</strong> had a leave request rejected.
            </p>
            <span className="text-sm text-gray-500">6 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
