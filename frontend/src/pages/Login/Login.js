import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../utils/images";

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 h-screen via-blue-50 to-green-100 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center justify-center mb-10">
          <img
            src={images.logo}
            alt="Flexi Leave Logo"
            className="h-20 rounded-full shadow-lg"
          />
        </Link>
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Login
          </h2>
          <form>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2 text-lg">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 mb-2 text-lg">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3 rounded-lg font-semibold shadow-lg transform transition duration-500 hover:scale-105"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-6">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:text-blue-600 focus:outline-none transition"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
