import React from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeManagement = () => {
  const employees = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Manager" },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Employee List</h2>
        <Link to="/admin/users/add">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center"
          >
            <FaPlus className="mr-2" />
            <span>Add Employee</span>
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id} className="bg-white">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {employee.name}
                </td>
                <td className="px-6 py-4">{employee.email}</td>
                <td className="px-6 py-4">{employee.role}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <Link to="/admin/users/edit/:id">
                      <button
                        type="button"
                        className="text-yellow-500 hover:text-yellow-700"
                      >
                        <FaEdit className="mr-1 text-xl" />
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash className="mr-1 text-xl" />
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

export default EmployeeManagement;
