import React, { useEffect, useState } from "react";

// Mapping leave types to user-friendly names
const leaveTypeMap = {
  sick: "Sick Leave",
  casual: "Casual Leave",
  vacation: "Vacation Leave",
  maternity: "Maternity Leave",
  paternity: "Paternity Leave",
};

// Function to format the date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const EmployeeDashboard = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    fetch("http://localhost:5000/request-leave/get-all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched leaves:", data);
        setLeaves(data.requests); // Adjust according to your API response structure
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching leaves:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem("auth-token");

    fetch(`http://localhost:5000/request-leave/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Leave deleted:", data);
        setLeaves(leaves.filter((leave) => leave._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting leave:", error);
      });
  };

  console.log(leaves);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          All Leave Requests
        </h3>

        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-2">Leave Type</th>
              <th className="border-b-2 p-2">Start Date</th>
              <th className="border-b-2 p-2">End Date</th>
              <th className="border-b-2 p-2">Reason</th>
              <th className="border-b-2 p-2">Status</th>
              <th className="border-b-2 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.length > 0 ? (
              leaves.map((leave) => (
                <tr key={leave._id} className="border-b">
                  <td className="p-2">{leaveTypeMap[leave.leaveType]}</td>
                  <td className="p-2">{formatDate(leave.startDate)}</td>
                  <td className="p-2">{formatDate(leave.endDate)}</td>
                  <td className="p-2">{leave.reason}</td>
                  <td className="p-2">
                    {leave.status === "pending" && (
                      <span className="text-yellow-500">Pending</span>
                    )}
                    {leave.status === "approved" && (
                      <span className="text-green-500">Approved</span>
                    )}
                    {leave.status === "rejected" && (
                      <span className="text-red-500">Rejected</span>
                    )}
                  </td>
                  <td className="p-2">
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(leave._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No Leaves
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
