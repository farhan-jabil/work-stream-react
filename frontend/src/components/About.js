import React, { useEffect, useRef, useState } from "react";
import { FaBullseye, FaLightbulb, FaHandshake, FaCertificate } from "react-icons/fa";
import Counter from "../utils/Counter";

const About = () => {
  const [isCounting, setIsCounting] = useState(false);
  const sectionRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsCounting(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="about py-32 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 text-center">
          About Us
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-600 text-center">
          We are dedicated to providing the best leave management solutions for
          organizations of all sizes. Our platform is designed to simplify and
          streamline the process of managing employee leave, ensuring that your
          team remains productive and well-informed.
        </p>

        <div className="flex flex-col md:flex-row items-stretch justify-between mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0 px-4 flex flex-col items-center text-center">
            <FaBullseye className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">
              Our Mission
            </h3>
            <p className="text-gray-700">
              Our mission is to empower organizations with a robust leave
              management system that is easy to use, highly customizable, and
              designed to enhance productivity. We strive to provide a seamless
              experience for both employers and employees.
            </p>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0 px-4 flex flex-col items-center text-center">
            <FaLightbulb className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">
              Our Vision
            </h3>
            <p className="text-gray-700">
              We envision a world where managing leave is no longer a burden,
              but a streamlined and efficient process. We aim to continuously
              innovate and improve our platform to meet the evolving needs of
              modern workplaces.
            </p>
          </div>
          <div className="md:w-1/3 px-4 flex flex-col items-center text-center">
            <FaHandshake className="text-blue-600 text-6xl mb-4" />
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">
              Our Values
            </h3>
            <p className="text-gray-700">
              Integrity, transparency, and commitment are at the core of
              everything we do. We are dedicated to creating a positive impact
              on both our clients and their employees.
            </p>
          </div>
        </div>

        <div ref={sectionRef} className="my-16">
          <div className="text-3xl font-semibold mb-8 flex flex-col items-center">
            <FaCertificate className="text-blue-600 text-6xl mb-4" />
            <div className="text-3xl font-semibold mb-4 text-blue-800">
              Our Achievements
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="w-full">
              <a
                href="#"
                className="block h-full max-w-lg text-center py-12 px-8 mx-auto bg-[#C9E3F1] text-gray-800 border border-5 shadow-lg border-[#C9E3F1] rounded-2xl"
              >
                <h5 className="mb-2 font-bold">
                  <div className="flex justify-center items-center text-4xl lg:text-6xl">
                    <Counter isCounting={isCounting} number={500} />
                    <span>+</span>
                  </div>
                </h5>
                <p className="font-semibold mt-8 text-xl lg:text-2xl">
                  Clients Served
                </p>
              </a>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="block h-full max-w-lg text-center py-12 px-8 mx-auto bg-[#E0F7FA] text-gray-800 border border-5 shadow-lg border-[#E0F7FA] rounded-2xl"
              >
                <h5 className="mb-2 font-bold">
                  <div className="flex justify-center items-center text-4xl lg:text-6xl">
                    <Counter isCounting={isCounting} number={250} />
                    <span>+</span>
                  </div>
                </h5>
                <p className="font-semibold mt-8 text-xl lg:text-2xl">
                  Projects Completed
                </p>
              </a>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="block h-full max-w-lg text-center py-12 px-8 mx-auto bg-[#B9EAB1] text-gray-800 border border-5 shadow-lg border-[#B9EAB1] rounded-2xl"
              >
                <h5 className="mb-2 font-bold">
                  <div className="flex justify-center items-center text-4xl lg:text-6xl">
                    <Counter isCounting={isCounting} number={100} />
                    <span>+</span>
                  </div>
                </h5>
                <p className="font-semibold mt-8 text-xl lg:text-2xl">
                  Awards Won
                </p>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 mt-10">
            <div className="w-full">
              <a
                href="#"
                className="block h-full max-w-sm text-center py-12 px-8 mx-auto bg-[#B3E5FC] text-gray-800 border border-5 shadow-lg border-[#B3E5FC] rounded-2xl"
              >
                <h5 className="mb-2 font-bold">
                  <div className="flex justify-center items-center text-4xl lg:text-6xl">
                    <Counter isCounting={isCounting} number={150} />
                    <span>+</span>
                  </div>
                </h5>
                <p className="font-semibold mt-8 text-xl lg:text-2xl">
                  Countries Served
                </p>
              </a>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="block h-full max-w-sm text-center py-12 px-8 mx-auto bg-[#D1C4E9] text-gray-800 border border-5 shadow-lg border-[#D1C4E9] rounded-2xl"
              >
                <h5 className="mb-2 font-bold">
                  <div className="flex justify-center items-center text-4xl lg:text-6xl">
                    <Counter isCounting={isCounting} number={300} />
                    <span>+</span>
                  </div>
                </h5>
                <p className="font-semibold mt-8 text-xl lg:text-2xl">
                  Team Members
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
