import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="hero" className="py-48">
        Hero
      </div>
      <div id="features" className="py-48">
        <div>Features</div>
        <Link to="/features">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Features
          </button>
        </Link>
      </div>
      <div id="about" className="py-48">
        About
      </div>
      <div id="contact" className="py-48">
        Contact
      </div>
    </>
  );
};

export default Home;
