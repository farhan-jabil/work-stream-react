import React from "react";
import Hero from "../../components/Home/Hero";
import Features from "../../components/Home/FeaturesSection";
import About from "../../components/Home/About";
import Pricing from "../../components/Home/Pricing";
import Testimonial from "../../components/Home/Testimonial";
import FAQ from "../../components/Home/FAQ";

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
    </>
  );
};

export default Home;
