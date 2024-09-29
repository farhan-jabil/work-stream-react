import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, userName, email, phoneNumber, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);
      } else {
        console.log("Signup failed:", data);
      }
    } catch (error) {
      console.log("Error during signup:", error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
        <div>
          <label className="block text-gray-700 mb-2 text-lg">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 text-lg">User Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            placeholder="Enter your user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
        <div>
          <label className="block text-gray-700 mb-2 text-lg">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 text-lg">Phone Number</label>
          <input
            type="number"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
        <div>
          <label className="block text-gray-700 mb-2 text-lg">Password</label>
          <input
            type="password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 text-lg">Confirm Password</label>
          <input
            type="password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3 rounded-lg font-semibold shadow-lg transform transition duration-500 hover:scale-105"
      >
        Signup
      </button>
    </form>
  );
};

export default SignUp;
