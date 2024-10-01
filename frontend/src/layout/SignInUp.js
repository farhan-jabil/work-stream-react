import React, { useState } from "react";
import Login from "../pages/signInUp/Login";
import Signup from "../pages/signInUp/SignUp";
import { images } from "../utils/images";

const SignInUp = () => {
  const [activeForm, setActiveForm] = useState("login");

  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 h-screen via-blue-50 to-green-100 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-center mb-10">
          <img
            src={images.logo}
            alt="Flexi Leave Logo"
            className="h-16 rounded-full shadow-lg"
          />
        </div>
        <div className={`bg-white p-10 rounded-2xl shadow-2xl ${activeForm === "login" ? "max-w-md" : "max-w-2xl"} w-full mx-auto`}>
          <div className="flex justify-center mb-6">
            <button
              className={`text-2xl font-bold px-6 py-2 ${activeForm === "login" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
              onClick={() => handleFormSwitch("login")}
            >
              Login
            </button>
            <button
              className={`text-2xl font-bold px-6 py-2 ${activeForm === "signup" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
              onClick={() => handleFormSwitch("signup")}
            >
              Signup
            </button>
          </div>

          <div className="form-content">
            {activeForm === "login" && <Login />}
            {activeForm === "signup" && <Signup handleFormSwitch={handleFormSwitch} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
