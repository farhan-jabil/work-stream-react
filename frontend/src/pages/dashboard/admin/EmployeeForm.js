import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/admin/employee-manage/get/${id}`)
        .then((response) => response.json())
        .then((data) => setFormData(data.employee))
        .catch((error) => console.error("Error fetching employee:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id
      ? `http://localhost:5000/admin/employee-manage/edit/${id}`
      : "http://localhost:5000/admin/employee-manage/add";
    const method = id ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/admin/users");
      })
      .catch((error) => console.error(`Error ${id ? "updating" : "adding"} employee:`, error));
  };

  return (
    <div className="container">
      <div className="relative overflow-x-auto w-[80%] mx-auto mt-10">
        <div className="text-2xl text-center font-semibold mb-5">{id ? "Edit Employee" : "Add Employee"}</div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium text-sm text-gray-500 duration-300">Employee Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium text-sm text-gray-500 duration-300">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium text-sm text-gray-500 duration-300">Role</label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
