import React from "react";
import Lottie from "react-lottie";
import heroAnimation from "../../animation/hero_animation.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 flex items-center justify-center pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center text-gray-800">
          <div className="w-full max-w-lg mb-8">
            <Lottie
              options={defaultOptions}
              height={window.innerWidth < 768 ? 300 : 450}
              width={window.innerWidth < 768 ? 300 : 450} 
              style={{ maxWidth: '100%', margin: '0 auto' }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Simplify Your Leave Management
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Streamline leave requests, approvals, and tracking with our
            intuitive system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition">
              Get Started
            </button>
            <button className="px-8 py-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition">
              Watch Demo
            </button>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-600">
              Trusted by over 500 companies worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
