import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/FeaturesSection";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero></Hero>
      </div>
      <div id="features">
        <Features></Features>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="contact" className="py-48">
        Contact
      </div>
    </>
  );
};

export default Home;
