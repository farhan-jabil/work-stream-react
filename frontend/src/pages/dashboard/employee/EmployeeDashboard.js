import React from "react";

const EmployeeDashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Employee Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-lg font-semibold">Pending Leave Requests</h3>
          <p className="mt-2 text-4xl font-bold">2</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-lg font-semibold">Approved Leaves</h3>
          <p className="mt-2 text-4xl font-bold">5</p>
        </div>

        <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-lg font-semibold">Rejected Leaves</h3>
          <p className="mt-2 text-4xl font-bold">1</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activities
        </h3>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <span>Leave Request submitted for 10th Oct 2024</span>
            <span className="text-blue-500">Pending</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Leave Approved for 20th Sep 2024</span>
            <span className="text-green-500">Approved</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Leave Request submitted for 25th Sep 2024</span>
            <span className="text-yellow-500">In Review</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
