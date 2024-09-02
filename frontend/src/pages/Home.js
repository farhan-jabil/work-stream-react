import React from "react";
import Hero from "../components/Hero";
import Features from "../components/FeaturesSection";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";

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
      <div id="pricing">
        <Pricing></Pricing>
      </div>
      <div id="testimonial">
        <Testimonial></Testimonial>
      </div>
      <div id="faq">
        <FAQ></FAQ>
      </div>
      <div id="contact" className="py-48">
        Contact
      </div>
    </>
  );
};

export default Home;
