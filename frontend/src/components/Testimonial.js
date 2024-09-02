import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Example Inc.",
    feedback:
      "This product has significantly improved our efficiency and workflow. Highly recommended!",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    title: "CTO, Tech Solutions",
    feedback:
      "The customer support is fantastic! They helped us with every step of the way.",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Brown",
    title: "Manager, Creative Co.",
    feedback:
      "A game-changer for our business. The features are just what we needed.",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "David Wilson",
    title: "Founder, Startup Hub",
    feedback:
      "I was amazed at how easy it was to get started and the results were immediate.",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Emily Davis",
    title: "Designer, Art Studio",
    feedback:
      "Beautifully designed and easy to use. I would recommend it to anyone.",
    avatar: "https://via.placeholder.com/150",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="py-32 bg-gradient-to-r from-blue-100 via-blue-50 to-green-100"
    >
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Testimonials</h2>
        <Slider {...settings} className="relative">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4 h-full">
              <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white rounded-lg shadow-lg p-8 mb-8 flex flex-col justify-between h-full min-h-[350px]">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full border-4 border-white"
                  />
                </div>
                <p className="text-lg mb-4">"{testimonial.feedback}"</p>
                <div className="mt-auto">
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
