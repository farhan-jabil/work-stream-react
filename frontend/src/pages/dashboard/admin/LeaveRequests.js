import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const LeaveRequests = () => {
  const leaveRequests = [
    {
      id: 1,
      employeeName: "John Doe",
      leaveType: "Sick Leave",
      startDate: "2024-09-10",
      endDate: "2024-09-12",
      status: "Pending",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      leaveType: "Vacation Leave",
      startDate: "2024-09-15",
      endDate: "2024-09-20",
      status: "Pending",
    },
    {
      id: 3,
      employeeName: "Sam Wilson",
      leaveType: "Maternity Leave",
      startDate: "2024-10-01",
      endDate: "2024-10-30",
      status: "Approved",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Leave Requests</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Employee Name</th>
              <th scope="col" className="px-6 py-3">Leave Type</th>
              <th scope="col" className="px-6 py-3">Start Date</th>
              <th scope="col" className="px-6 py-3">End Date</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leaveRequests.map((request) => (
              <tr key={request.id} className="bg-white">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {request.employeeName}
                </td>
                <td className="px-6 py-4">{request.leaveType}</td>
                <td className="px-6 py-4">{request.startDate}</td>
                <td className="px-6 py-4">{request.endDate}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      request.status === "Approved"
                        ? "bg-green-200 text-green-800"
                        : request.status === "Rejected"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className="text-green-500 hover:text-green-700"
                    >
                      <FaCheck className="mr-1 text-xl" />
                    </button>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTimes className="mr-1 text-xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequests;
