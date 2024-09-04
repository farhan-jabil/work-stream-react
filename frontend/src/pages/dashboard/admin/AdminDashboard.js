import React from "react";
import { FaUser, FaClipboard, FaChartBar } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <FaUser className="text-4xl text-blue-700 mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Employees</h3>
          <p className="text-gray-600 mt-2">Total: 150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <FaClipboard className="text-4xl text-green-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Pending Requests</h3>
          <p className="text-gray-600 mt-2">Total: 25</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <FaChartBar className="text-4xl text-yellow-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Approved Leaves</h3>
          <p className="text-gray-600 mt-2">Total: 100</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <FaClipboard className="text-4xl text-red-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Rejected Requests</h3>
          <p className="text-gray-600 mt-2">Total: 10</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>John Doe</strong> requested leave from 2024-09-10 to 2024-09-12.
            </p>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>Jane Smith</strong> had a leave request approved for 2024-09-05.
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
